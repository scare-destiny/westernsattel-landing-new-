import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'
import { Assistant } from '@next/font/google'
import { CookieConsentProvider } from '@use-cookie-consent/react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'

const assistant = Assistant({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<CookieConsentProvider>
				<Layout>
					<main className={assistant.className}>
						<Component {...pageProps} />
					</main>
					<Analytics />
				</Layout>
			</CookieConsentProvider>
		</ChakraProvider>
	)
}

export default MyApp
