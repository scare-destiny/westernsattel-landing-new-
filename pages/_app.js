import Script from 'next/script'
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
				<Script
					id='gtag'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-MJC5N6V');`,
					}}
				/>
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
