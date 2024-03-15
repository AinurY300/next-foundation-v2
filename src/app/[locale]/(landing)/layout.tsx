import Header from '@/components/Landing/Header'

export default async function LandingLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<Header />
			<main>{children}</main>
		</div>
	)
}
