import { auth } from '@/auth'

export default async function SessionData() {
	const session = await auth()

	if (session?.user) {
		return (
			<div className="my-4 flex flex-col rounded-md bg-accent">
				<pre className="py-6 px-4 whitespace-pre-wrap break-all">
					{JSON.stringify(session, null, 2)}
				</pre>
			</div>
		)
	}
}
