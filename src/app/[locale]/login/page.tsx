'use client'
import { signIn, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function LoginPage() {
	const t = useTranslations('components')
	return (
		<div>
			<Button onClick={() => signIn('github')}>{t('githubAuthButton')}</Button>
		</div>
	)
}
