import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

export const {
	auth,
	handlers: { GET, POST },
} = NextAuth({
	secret: process.env.AUTH_SECRET,
	session: { strategy: 'jwt' },
	providers: [GitHub],
	pages: {
		signIn: '/login',
	},
})
