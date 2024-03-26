import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export const locales = ['ru', 'en'] as const
export const defaultLocale = locales[0]
export const localePrefix: 'always' | 'never' | 'as-needed' = 'as-needed'

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as (typeof locales)[number])) notFound()
	return {
		messages: (await import(`../i18n/${locale}.json`)).default,
	}
})
