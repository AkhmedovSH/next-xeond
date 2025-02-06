import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/bootstrap.css';
import '../styles/global.css';
import '../styles/adaptive.css';
import '../styles/theme.css';

import { ThemeProvider } from '../ThemeContext';
import { ReactLenis } from 'lenis/react'

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<ReactLenis root className="layout">
				<Component {...pageProps} />
			</ReactLenis>
		</ThemeProvider>
	);
}