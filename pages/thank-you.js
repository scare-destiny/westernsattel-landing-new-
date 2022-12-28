import {
	Heading,
	Features,
	Banner,
	VideoPlayer,
	Marquee,
	Animation,
	SectionTitle,
	ContactFormModal,
	Western,
	Wade,
	Endurance,
	Reiner,
} from '../components/index'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const DynamicConfetti = dynamic(() => import('react-confetti'), {
	ssr: false,
})

const ThankYou = () => {
	const { width, height } = useWindowSize()
	const [run, setRun] = useState(true)
	const [numberOfPieces, setNumberOfPieces] = useState(200)

	const [email, setEmail] = useState()

	useEffect(() => {
		setTimeout(() => setNumberOfPieces(0), 3000)
		setTimeout(() => setRun(false), 7000)
	}, [])

	useEffect(() => {
		setEmail(JSON.parse(window.localStorage.getItem('email')))
	}, [])

	return (
		<>
			<Head>
				<title>WESTERNSATTEL — Danke für Ihre Anfrage</title>
				<meta
					name='description'
					content='
					Vielen Dank, die Preisliste wird Ihnen sofort zugesandt
'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div>
				<Suspense fallback={`Loading...`}>
					<DynamicConfetti
						width={width}
						height={height}
						numberOfPieces={numberOfPieces}
						run={run}
					/>
				</Suspense>
				<div className=' border-box pt-6 pb-6 mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl'>
					<Animation>
						<Heading text='Vielen Dank, die Preisliste wird Ihnen sofort zugesandt ⚡️' />
					</Animation>
					<Animation>
						<div className='py-4'>
							<Heading text='Unsere Westernsattelmodelle' />
							<Marquee />
							<SectionTitle
								text='Auch Jahre nach Kauf, zum Beispiel bei einem Wechsel des Pferdes, können Sie Ihren Westernsattel wieder neu anpassen.
								Der Neukauf eines Sattels entfällt somit in der Regel. '
							/>
						</div>
					</Animation>
					<div className='w-full border-box  pb-10mx-auto max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl text-center'>
						{/* <Animation>
							<Hero image={image} priority={true} />
						</Animation> */}
						<Animation>
							<Banner
								id='top-kontaktform'
								heading='	Haben Sie Interesse an einem unserer Sattelmodelle?'
								strongHeading='			 Jetzt unverbindlich beraten lassen.'
								// text='Tailor-made services and high-level performance made for you.'
								buttonText='Anfrage Senden'
								formLabelText='Schreiben Sie uns und wir melden uns so schnell wie möglich bei Ihnen zurück!
							'
								placeholder='Ich suche einen Sattel für... '
								email={email}
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
							<Features />
						</Animation>
						<Western />
						<Endurance />
						<Wade />
						<Reiner />
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
								id='bottom-kontaktform'
								heading='	Haben Sie Fragen?'
								strongHeading='			 Lassen Sie es uns wissen.'
								// text='Tailor-made services and high-level performance made for you.'
								buttonText='Anfrage Senden'
								formLabelText='Schreiben Sie uns und wir melden uns so schnell wie möglich bei Ihnen zurück!'
								placeholder='Ich habe eine Frage zu Ihren Sätteln...'
								email={email}
								className='botto'
							/>
						</Animation>
						{/* <Product /> */}
						{/* <ContactFormModal /> */}
					</div>
				</div>
			</div>
		</>
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
