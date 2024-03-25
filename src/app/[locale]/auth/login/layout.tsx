interface LoginLayoutProps {
	children: React.ReactNode
	params: { locale: string }
}

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<LoginLayoutProps>) {
	return children
}
