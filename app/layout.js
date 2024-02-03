import { Inter } from 'next/font/google'

import dynamic from 'next/dynamic';

import Header from '@components/Header'
const Footer = dynamic(() => import('@components/Footer'), {
	loading: () => <></>,
	ssr: false,
});

dynamic(() => import('@styles/bootstrap-grid.min.css'));
dynamic(() => import('@styles/style.css'));


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Xeond',
	description: 'Разработано в «AUTOMATION SOURCE»',
	icons: {
		icon: '/assets/images/build_logo.png',
	},
	icons: [
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/assets/images/build_logo.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			url: '/assets/images/build_logo.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			url: '/assets/images/build_logo.png',
		},
	],
}

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<head>
				<meta name="google-site-verification" content="CvmtL6r--U-MNclMYJfJdgRhNn4egixytDEJIeaa9_c" />
				<meta httpEquiv="Cache-Control" content="public, max-age=3600" />
				{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap-grid.min.css" /> */}
				{/* <link rel="preload" href="https://prod.spline.design/3DqELONma7LpaDeI/scene.splinecode" as="fetch" /> */}
			</head>
			<body suppressHydrationWarning={true} className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
