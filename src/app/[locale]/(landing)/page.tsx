import { useTranslations } from 'next-intl'

export default function LandingPage() {
	const t = useTranslations('Index')
	return <div>{t('title')}</div>
}
