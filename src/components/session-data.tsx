import { auth } from '@/auth'

export default async function SessionData() {
	const session = await auth()

	if (session?.user) {
		return (
			<div className="my-4 flex flex-col rounded-md bg-accent">
				<pre className="whitespace-pre-wrap break-all px-4 py-6">
					{JSON.stringify(session, null, 2)}
				</pre>
			</div>
		)
	} else {
		return <div>Пользователя нет</div>
	}
}
