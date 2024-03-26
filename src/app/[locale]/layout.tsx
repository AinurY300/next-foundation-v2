import '@/styles/global.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Mulish as FontSans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
// import { locales } from '@/i18n'
import { unstable_setRequestLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'

/**
 * Список прикольных шрифтов:
 * Jost, Inter, Nunito, Nunito_Sans, Raleway, Noto_Sans,
 * Rubik, Manrope, Mulish, Arimo, Overpass, Comfortaa,
 * Exo_2, Unbounded, Commissioner, Ruda
 * См. больше на: https://fonts.google.com
 */

const fontSans = FontSans({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-sans',
})

// export function generateStaticParams() {
// 	return locales.map(locale => ({ locale }))
// }

interface LocaleLayoutProps {
	children: React.ReactNode
	params: { locale: string }
}

export default async function LocaleLayout({
	children,
	params: { locale },
}: Readonly<LocaleLayoutProps>) {
	unstable_setRequestLocale(locale)
	const session = await auth()
	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
				<SessionProvider session={session}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
					</ThemeProvider>
				</SessionProvider>
				<SpeedInsights />
			</body>
		</html>
	)
}
