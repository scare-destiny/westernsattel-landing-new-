import Footer from './Footer'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicCookieBanner = dynamic(
	() => import('../components/CookieBanner'),
	{
		suspense: true,
	}
)

export default function Layout({ children }) {
	return (
		<>
			<Suspense fallback={`Loading... `}>
				<DynamicCookieBanner
					modalHeader='Cookie Einstellungen'
					modalText='Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und deine Erfahrung zu verbessern.'
				/>
			</Suspense>
			<main>{children}</main>
			<Footer />
		</>
	)
}
