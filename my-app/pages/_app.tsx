import '../styles/globals.css'
import '../styles/layout.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { Page } from '../types/page'

type Props = AppProps & {
	Component: Page
}

export default function App({ Component, pageProps }: Props) {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />)
	}
	return <>
		<Header />
		<Component {...pageProps} />
		<Footer />
	</>
}
