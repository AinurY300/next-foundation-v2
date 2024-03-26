import SessionData from '@/components/session-data'
// import { useTranslations } from 'next-intl'
// import { db } from '@/db/drizzle'

export default async function LandingPage() {
	// const s = await db.query.users.findFirst()

	// const t = useTranslations()

	return (
		<div className="container">
			<SessionData />
			{/* {t('index')} */}

			{/* {s && (
				<div key={s.id}>
					<div>id: {s.id}</div>
					<div>email: {s.email}</div>
					<div>name: {s.name}</div>
					<div>image: {s.image}</div>
				</div>
			)} */}
		</div>
	)
}
