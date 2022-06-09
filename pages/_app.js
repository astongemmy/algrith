import { useRouter } from 'next/router'
import '../public/styles/fonts.css'
import '../public/styles/App.css'
import '../public/styles/Icons.css'
import '../public/styles/aos.css'
import '../public/styles/animate.css'
import "react-image-gallery/styles/css/image-gallery.css";

export default function MyApp({ Component, pageProps }) {
	const router = useRouter()
	return <Component key={router.asPath} {...pageProps} />
}