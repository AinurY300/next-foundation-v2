'use client'
import { Button } from '@/components/ui/button'
import { ToggleLanguageButton } from '@/components/toggle-language-button'
import { ToggleThemeButton } from '@/components/toggle-theme-button'
import { ArrowLeftIcon } from 'lucide-react'
import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'

interface AuthLayoutProps {
	children: React.ReactNode
	params: { locale: string }
}

export default function AuthLayout({ children }: Readonly<AuthLayoutProps>) {
	const router = useRouter()
	const t = useTranslations()

	return (
		<div className="container flex h-dvh flex-col">
			<header className="flex gap-2 py-4">
				<Button variant={'outline'} onClick={() => router.back()}>
					<ArrowLeftIcon className="mr-2 h-4 w-4" />
					{t('back')}
				</Button>
				<ToggleThemeButton className="ml-auto" />
				<ToggleLanguageButton />
			</header>
			<main className="grid flex-1 items-center justify-center max-md:justify-stretch">
				<div className="my-8 w-96 flex-1 max-md:w-full">{children}</div>
			</main>
		</div>
	)
}
