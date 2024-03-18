import { useMessages, NextIntlClientProvider } from 'next-intl'

interface LoginLayoutProps {
	children: React.ReactNode
	params: { locale: string }
}

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<LoginLayoutProps>) {
	const messages = useMessages()

	return (
		<NextIntlClientProvider messages={messages}>
			{children}
		</NextIntlClientProvider>
	)
}
