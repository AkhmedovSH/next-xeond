import '../styles/bootstrap.css';
import '../styles/global.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}