import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ToggleThemeButton } from '../toggle-theme-button'
import { ToggleLanguageButton } from '../toggle-language-button'
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl'

export async function Header() {
	const messages = useMessages()
	const t = useTranslations()

	return (
		<header>
			<div className="container flex py-4">
				<div className="flex gap-2 ml-auto">
					<Button asChild>
						<Link href="/login">{t('components.header.loginButton')}</Link>
					</Button>

					<NextIntlClientProvider messages={messages}>
						<ToggleThemeButton />
						<ToggleLanguageButton />
					</NextIntlClientProvider>
				</div>
			</div>
			<Separator />
		</header>
	)
}
