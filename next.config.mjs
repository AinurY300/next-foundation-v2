import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: 'flagcdn.com',
			},
		],
	},
	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// 			hostname: 'flagcdn.com',
	// 		},
	// 	],
	// },
}

export default withNextIntl(nextConfig)
