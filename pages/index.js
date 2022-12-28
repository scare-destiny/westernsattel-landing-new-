import Head from 'next/head'
import dynamic from 'next/dynamic'
import {
	Hero,
	Heading,
	Form,
	Features,
	Services,
	VideoPlayer,
	Info,
	Animation,
} from '../components/index.js'
import heroImage from '../public/hero-image.webp'
import heroImage2 from '../public/gallery5.webp'

const DynamicTestimonials = dynamic(
	() => import('../components/Testimonials'),
	{
		suspense: true,
	}
)

export default function Home() {
	return (
		<>
			<Head>
				<title>WESTERNSATTEL — KURZ, LEICHT UND JEDERZEIT ANPASSBAR</title>
				<meta
					name='description'
					content='
Unsere Westernsättel sind verstellbar - auch später noch
'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='w-screen'>
				<Animation>
					<Hero image={heroImage} width={608} height={321} priority={true} />
					<Heading text='WESTERNSATTEL KURZ, LEICHT UND JEDERZEIT ANPASSBAR' />
				</Animation>
				<Animation>
					<Form
						id='top-pricelist'
						description='J.v.G. Saddle Innovations - Bei uns bekommen Sie Ihren Traum-Westernsattel.'
						strongDescription='Perfekt angepasst an Sie und Ihr Pferd mit patentiertem EQUISCAN Messsystem.'
						emailPlaceholder='Deine E-Mail Adresse'
						acceptPrivacyPlaceholder='Ich akzeptiere die Datenschutzbestimmungen
					'
						buttonText='Preisliste runter laden'
						bottomText='Deine Daten werden sicher & verschlüsselt übertragen 🔐
					'
					/>
				</Animation>
				<Animation>
					<VideoPlayer
						video='https://www.youtube.com/embed/Bcbbtt0YkH0'
						light={true}
					/>
				</Animation>
				<Animation>
					<Features />
				</Animation>
				<Animation>
					<Hero image={heroImage2} width={608} height={320} priority={false} />
				</Animation>
				<Animation>
					<Services />
				</Animation>
				<Animation>
					<DynamicTestimonials />
				</Animation>
				<Animation>
					<VideoPlayer
						headingText='Leichter satteln ohne Kreuzschmerzen'
						sectionText='Unsere Westernsättel sind leicht, weil wir schweres Holz mit Kunststoff ersetzen.'
						video='https://www.youtube.com/watch?v=MkylRTPnkVQ'
						light={true}
					/>
				</Animation>
				<Animation>
					<Info />
				</Animation>
				<Animation>
					<Heading text='Möchten Sie Ihren Traum-Westernsattel bekommen?' />
				</Animation>
				<Animation>
					<Form
						id='bottom-pricelist'
						description=''
						strongDescription=''
						emailPlaceholder='Trage hier deine beste E-Mail Adresse ein...'
						acceptPrivacyPlaceholder='Ich akzeptiere die Datenschutzbestimmungen
					'
						buttonText='Download starten'
						bottomText='Deine Daten werden sicher & verschlüsselt übertragen 🔐
					'
					/>
				</Animation>
			</main>
		</>
	)
}
