import { Pathnames } from 'next-intl/navigation'

export const locales = ['ru', 'en'] as const

export const pathnames = {
	'/': '/',
	'/login': {
		en: '/login',
		ru: '/auth',
	},
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
