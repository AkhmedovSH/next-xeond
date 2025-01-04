import '../styles/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/global.css';
import '../styles/adaptive.css';
import '../styles/theme.css';

import { ThemeProvider } from '../ThemeContext';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}