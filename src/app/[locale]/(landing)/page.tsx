import SessionData from '@/components/session-data'
import { useTranslations } from 'next-intl'

export default function LandingPage() {
	const t = useTranslations()

	return (
		<div className="container">
			<SessionData />
			{t('index')}
		</div>
	)
}
