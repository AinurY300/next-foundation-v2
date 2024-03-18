import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import createIntlMiddleware from 'next-intl/middleware'
import { locales, localePrefix, defaultLocale } from '@/i18n'

const publicPages = ['/']
const authPages = ['/login']

const intlMiddleware = createIntlMiddleware({
	locales,
	localePrefix,
	defaultLocale,
})

const testPathnameRegex = (pages: string[], pathName: string) => {
	return RegExp(
		`^(/(${locales.join('|')}))?(${pages
			.flatMap(p => (p === '/' ? ['', '/'] : p))
			.join('|')})/?$`,
		'i'
	).test(pathName)
}

const authMiddleware = auth(req => {
	const isAuthPage = testPathnameRegex(authPages, req.nextUrl.pathname)
	const session = req.auth

	// Перенаправление на страницу входа, если пользователь не аутентифицирован
	if (!session && !isAuthPage) {
		return NextResponse.redirect(new URL(authPages[0], req.nextUrl))
	}

	// Перенаправление на домашнюю страницу, если пользователь аутентифицирован и пытается получить доступ к странице аутентификации.
	if (session && isAuthPage) {
		return NextResponse.redirect(new URL('/', req.nextUrl))
	}

	return intlMiddleware(req)
})

export default function middleware(req: NextRequest) {
	const isPublicPage = testPathnameRegex(publicPages, req.nextUrl.pathname)
	const isAuthPage = testPathnameRegex(authPages, req.nextUrl.pathname)

	if (isAuthPage) {
		return (authMiddleware as any)(req)
	}

	if (isPublicPage) {
		return intlMiddleware(req)
	} else {
		return (authMiddleware as any)(req)
	}
}

export const config = {
	// Match only internationalized pathnames
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
