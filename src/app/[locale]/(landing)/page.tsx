import { useTranslations } from 'next-intl'

export default function LandingPage() {
	const t = useTranslations()
	return <div>{t('Index.title')}</div>
}
