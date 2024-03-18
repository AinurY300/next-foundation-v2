import '../styles/global.css'
import { Manrope as FontSans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
// import { locales } from '@/i18n'
import { unstable_setRequestLocale } from 'next-intl/server'

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

interface RootLayoutProps {
	children: React.ReactNode
	params: { locale: string }
}

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<RootLayoutProps>) {
	unstable_setRequestLocale(locale)

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
