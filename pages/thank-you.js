import {
	Hero,
	Heading,
	Features,
	Banner,
	VideoPlayer,
	Marquee,
	Animation,
	SaddleFeature,
	CollectionGrid,
	Section,
	SectionTitle,
	Technical,
} from '../components/index'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import image from '../public/gallery5.webp'
import westernHero from '../public/westernSaddleHero.webp'
import wadeHero from '../public/wadeSaddleHero.webp'
import reinerHero from '../public/reinerHero.webp'
import enduranceHero from '../public/endurance-saddle.webp'
import westernBright1 from '../public/westernSaddleBright1.webp'
import westernBright2 from '../public/westernSaddleBright2.webp'
import westernBright3 from '../public/westernSaddleBright3.webp'
import westernDark1 from '../public/westernSaddleDark1.webp'
import westernDark2 from '../public/westernSaddleDark2.webp'
import westernDark3 from '../public/westernSaddleDark3.webp'
import SaddleTestimonials from '../components/SaddleTestimonials'

const DynamicConfetti = dynamic(() => import('react-confetti'), {
	ssr: false,
})

const ThankYou = () => {
	const { width, height } = useWindowSize()
	const [run, setRun] = useState(true)
	const [numberOfPieces, setNumberOfPieces] = useState(200)

	useEffect(() => {
		setTimeout(() => setNumberOfPieces(0), 3000)
		setTimeout(() => setRun(false), 7000)
	}, [])

	return (
		<div>
			<Suspense fallback={`Loading...`}>
				<DynamicConfetti
					width={width}
					height={height}
					numberOfPieces={numberOfPieces}
					run={run}
				/>
			</Suspense>

			{/* <Confetti width={width} height={height} numberOfPieces={50} /> */}
			<div className=' border-box pt-6 pb-6 mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl'>
				{/* <SectionTitle
					text='Thank you for your request! Your course will be emailed to you right away ⚡️
'
				/> */}
				<Animation>
					<Heading text='Vielen Dank, dass Sie die Preisliste angefordert haben, sie wird Ihnen sofort zugesandt ⚡️' />
				</Animation>
				<div className='w-full border-box  pb-10mx-auto max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl text-center'>
					<Animation>
						<Hero image={image} priority={true} />
					</Animation>
					<Animation>
						<Banner
							heading='	Haben Sie Interesse an einem unserer Sattelmodelle?'
							strongHeading='			 Jetzt unverbindlich beraten lassen.'
							// text='Tailor-made services and high-level performance made for you.'
							buttonText='Anfrage Senden'
							formLabelText='Schreiben Sie uns und wir melden uns so schnell wie möglich bei Ihnen zurück!
							'
							placeholder='Ich suche einen Sattel für... '
						/>
					</Animation>
					{/* <BackgroundImage
						image={enduranceHeroImage}
						alt='le jardin shop'
						backgroundPosition={'center center'}
						objectPosition='right'
						priority={true}
					/> */}
					<Animation>
						<Heading text='Unsere Westernsattelmodelle' />
						<SectionTitle
							text='Auch Jahre nach Kauf, zum Beispiel bei einem Wechsel des Pferdes, können Sie Ihren Westernsattel wieder neu anpassen.
							Der Neukauf eines Sattels entfällt somit in der Regel. '
						/>
						<Marquee />
					</Animation>
					<Animation>
						<Features />
					</Animation>
					<Animation>
						<SaddleFeature
							image={westernHero}
							heading='LUXURY WESTERN'
							text='Der kurze und leichte Westernsattel'
							alt='Westernsattel Saddle'
						/>
					</Animation>
					<CollectionGrid
						title='Luxury Western dunkel'
						subTitle='Herzstück des J. v. G. Luxury Western ist der Sattelbaum aus speziellem Kunststoff mit integriertem Titanstahl-Kopfeisen.'
						firstImage={westernBright1}
						secondImage={westernBright2}
						thirdImage={westernBright3}
					/>
					<CollectionGrid
						title='Luxury Western hell'
						subTitle='Dieser Westernsattel ist nicht nur leicht, sondern er kann auch jederzeit neu angepasst werden.
						Ein Pferdeleben lang!'
						firstImage={westernDark1}
						secondImage={westernDark2}
						thirdImage={westernDark3}
					/>
					<Animation>
						<Section />
					</Animation>
					<Animation>
						<Technical />
					</Animation>
					<Animation>
						<SaddleTestimonials />
					</Animation>
					<Animation>
						<VideoPlayer
							headingText='Ein Sattel ein Pferdeleben lang'
							sectionText='Unsere Saettel werden auf Maß an das Pferd angepasst - auch späte noch, wenn sich das Pferd verändert:'
							video='https://www.youtube.com/watch?v=GBtIThgwU3o'
							light={true}
						/>
					</Animation>
					<Animation>
						<Banner
							heading='	Haben Sie Fragen?'
							strongHeading='			 Lassen Sie es uns wissen.'
							// text='Tailor-made services and high-level performance made for you.'
							buttonText='Anfrage Senden'
							formLabelText='Schreiben Sie uns und wir melden uns so schnell wie möglich bei Ihnen zurück!'
							placeholder='Ich habe eine Frage zu Ihren Sätteln...'
						/>
					</Animation>
					{/* <Product /> */}
				</div>
			</div>
		</div>
	)
}

function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	})

	useEffect(() => {
		// only execute all the code below in client side
		if (typeof window !== 'undefined') {
			// Handler to call on window resize
			function handleResize() {
				// Set window width/height to state
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				})
			}

			// Add event listener
			window.addEventListener('resize', handleResize)

			// Call handler right away so state gets updated with initial window size
			handleResize()

			// Remove event listener on cleanup
			return () => window.removeEventListener('resize', handleResize)
		}
	}, []) // Empty array ensures that effect is only run on mount
	return windowSize
}

export default ThankYou
