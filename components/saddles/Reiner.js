import {
	Animation,
	SaddleFeature,
	CollectionGrid,
	Section,
	Technical,
	SaddleTestimonials,
} from '../index.js'
import reinerHero from '../../public/reinerHero.webp'
import reinerSaddle1 from '../../public/reinerSaddle1.webp'
import reinerSaddle2 from '../../public/reinerSaddle2.webp'
import reinerSaddle3 from '../../public/reinerSaddle2.webp'
import reinerSaddleBraun1 from '../../public/reinerSaddleBraun1.webp'
import reinerSaddleBraun2 from '../../public/reinerSaddleBraun2.webp'
import reinerSaddleBraun3 from '../../public/reinerSaddleBraun3.webp'
import reinerTestimonial from '../../public/reinerTestimonial.jpg'

const features = [
	'Verschiedene Conchas als Option',
	'Lederfarben Sattel*: naturell / cognac / bordeaux / dunkelbraun / schwarz',
	'Steigbügel: Leder / Holz / Rohhaut / Alu',
	'Sitzgröße: 15  bis 17 Zoll',
	'Voll verstellbarer Flex-Sattelbaum',
	'Gepolsteter Ledersitz',
]

const Reiner = () => {
	return (
		<>
			<Animation>
				<SaddleFeature
					image={reinerHero}
					objectPosition=' center left'
					heading='Luxury Reiner'
					text='Ein Westernsattel durch und durch'
					alt='Reiner Saddle'
				/>
			</Animation>
			<CollectionGrid
				title='Luxury Reiner beiges Leder'
				subTitle='Ein Westernsattel durch und durch:
				Der Reiner von J. v. G. Saddle Innovations.'
				firstImage={reinerSaddle1}
				secondImage={reinerSaddle2}
				thirdImage={reinerSaddle3}
			/>
			<CollectionGrid
				title='Luxury Reiner braunes Leder'
				subTitle='Unser Reiner ist ein reiner Westernsattel - von der Optik wie vom Reitgefühl. Die Sitzposition kann hierbei individuell bei der Fertigung eingestellt werden - je nach Ihrem Geschmack. 
				'
				firstImage={reinerSaddleBraun1}
				secondImage={reinerSaddleBraun2}
				thirdImage={reinerSaddleBraun3}
			/>
			<Animation>
				<Section
					heading='Über Reiner Saddle'
					subHeading='Reining Sattel nach Maß. Optisch können verschiedene Skirtformen oder Punzierungen gewählt werden - verschiedene Lederarten sowieso!
					'
					firstHeading='Anpassung über den Sattelbaum'
					firstText='Der Baum bestimmt die Passform des Sattels und wird bei uns individuell nach dem Pferderücken angefertigt. Essenzielle Punkte bei der Anpassung wie der Schwung des Rückens, die Winkelung der Bars, die Weite der Fork usw. können hierbei nicht nur bei der Produktion, sondern auch im Nachhinein geändert werden. Wahlweise sorgt ein Kissen oder ein individuell geschnittenes Pad für die Polsterung und den Druckausgleich.					'
					secondHeading='Anpassung für das Pferd'
					secondText='Forkweite
					Winkelung der Bars an der Schulter und im hinteren Bereich
					Angepasst an den Schwung des Rückens Ihres Pferdes
					Individuelle Schwerpunktanpassung
					und vieles mehr...'
					thirdHeading='Anpassung für den Reiter'
					thirdText='Individuelle Sitzposition
					Verschiedene Lederarten
					Unzählige Punzierungen und Designvarianten
					Komplett angepasste Länge der Fender (angepasst an Beinlänge)
					und vieles mehr...'
				/>
			</Animation>
			<Animation>
				<Technical
					heading='Enthalten sowie teil frei wählbar sind'
					features={features}
				/>
			</Animation>
			<Animation>
				<SaddleTestimonials
					heading='Das sagen unsere Kunden'
					author='Petra P.'
					image={reinerTestimonial}
					imageAlt='Westernsattel Testimonial'
					subtitle='UNSER NEUER SATTEL IST EIN TRAUM!'
					text='Das Warten hat sich absolut gelohnt - unser neuer Sattel ist ein Traum!

					Er drückt nicht, liegt bombig und ist perfekt angepasst auf den kurzen, geschwungenen Rücken meiner Stute Carla.
					
					Super bequem zu sitzen und auch für eine kleine Person für mich leicht zu heben und zu handhaben!
					
					Danke Susanne für die ausführliche und einfühlsame Beratung - sollte die Süße noch stark aufmuskeln oder sonst verändern, melden wir uns gerne - bei einem JvG Sattel ja Gott sei dank kein Problem!'
					buttonHeading='Interessieren Sie sich für den Endurance Sattel?'
					buttonText='Weitere Informationen'
				/>
			</Animation>
		</>
	)
}

export default Reiner
