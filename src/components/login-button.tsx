import { Button } from './ui/button'
import { Link } from '@/navigation'
import { getTranslations } from 'next-intl/server'
import { auth } from '@/auth'

export default async function LoginButton() {
	const t = await getTranslations()
	const session = await auth()

	if (session)
		return (
			<Button asChild>
				<Link href="/auth/logout">{t('components.logoutButton')}</Link>
			</Button>
		)
	else
		return (
			<Button asChild>
				<Link href="/auth/login">{t('components.loginButton')}</Link>
			</Button>
		)
}
