'use client'

import { Button } from './ui/button'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

export default function LoginButton() {
	const t = useTranslations()
	const session = useSession()

	if (session.data) return <Button onClick={() => signOut()}>{t('components.logoutButton')}</Button>
	else
		return (
			<Button asChild>
				<Link href="/login">{t('components.loginButton')}</Link>
			</Button>
		)
}
