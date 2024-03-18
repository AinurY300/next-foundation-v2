type Messages = typeof import('../i18n/en.json')
declare interface IntlMessages extends Messages {}

import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export const locales = ['ru', 'en'] as const
export const defaultLocale = locales[0]
export const localePrefix: 'always' | 'never' | 'as-needed' = 'always'

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as any)) notFound()
	return {
		messages: (await import(`../i18n/${locale}.json`)).default,
	}
})
