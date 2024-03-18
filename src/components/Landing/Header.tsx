import { Separator } from '@/components/ui/separator'
import { ToggleThemeButton } from '../toggle-theme-button'
import { ToggleLanguageButton } from '../toggle-language-button'
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl'
import LoginButton from '../login-button'

export function Header() {
	const messages = useMessages()
	const t = useTranslations('components')

	return (
		<header>
			<div className="container flex py-4">
				<div className="flex gap-2 ml-auto">
					{/* <Button asChild>
						<Link href="/login">{t('loginButton')}</Link>
					</Button> */}
					<NextIntlClientProvider messages={messages}>
						<LoginButton />
						<ToggleThemeButton />
						<ToggleLanguageButton />
					</NextIntlClientProvider>
				</div>
			</div>
			<Separator />
		</header>
	)
}
