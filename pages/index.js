import Head from 'next/head'
import dynamic from 'next/dynamic'
import {
	Hero,
	Heading,
	Form,
	Features,
	Services,
	VideoPlayer,
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

			<main className='w-full'>
				<Hero image={heroImage} width={608} height={321} priority={true} />
				<Heading
					text='WESTERNSATTEL
KURZ, LEICHT UND JEDERZEIT ANPASSBAR'
				/>
				<Form
					description=''
					strongDescription=''
					emailPlaceholder='Deine E-Mail Adresse'
					acceptPrivacyPlaceholder='Ich akzeptiere die Datenschutzbestimmungen
					'
					buttonText='Preisliste runter laden'
					bottomText='Deine Daten werden sicher & verschlüsselt übertragen 🔐
					'
				/>
				<VideoPlayer
					headingText='test'
					sectionText='test2'
					video='https://www.youtube.com/embed/Bcbbtt0YkH0'
				/>
				<Features />
				<Hero image={heroImage2} width={608} height={321} priority={false} />
				<Services />
				<DynamicTestimonials />
				<Heading text='Make Profit with your own Solar Module Production Line' />
				<Form
					description=''
					strongDescription=''
					emailPlaceholder='Deine E-Mail Adresse'
					acceptPrivacyPlaceholder='Ich akzeptiere die Datenschutzbestimmungen
					'
					buttonText='Preisliste runter laden'
					bottomText='Deine Daten werden sicher & verschlüsselt übertragen 🔐
					'
				/>
			</main>
		</>
	)
}
