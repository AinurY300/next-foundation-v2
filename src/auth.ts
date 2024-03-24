import NextAuth from 'next-auth'
import Yandex from '@auth/core/providers/yandex'
import GitHub from '@auth/core/providers/github'
import Google from '@auth/core/providers/google'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from '@/db/drizzle'

export const {
	handlers: { GET, POST },
	auth,
} = NextAuth({
	adapter: DrizzleAdapter(db),
	session: { strategy: 'jwt' },
	providers: [
		Google({
			allowDangerousEmailAccountLinking: true,
		}),
		GitHub({
			allowDangerousEmailAccountLinking: true,
		}),
		Yandex({
			allowDangerousEmailAccountLinking: true,
		}),
	],
})
