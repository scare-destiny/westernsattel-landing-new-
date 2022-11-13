import '../styles/globals.css'
import { CookieConsentProvider } from '@use-cookie-consent/react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'


function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<CookieConsentProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CookieConsentProvider>
		</ChakraProvider>
	)
}

export default MyApp
