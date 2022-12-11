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
import reinerSaddle3 from '../../public/reinerSaddle3.webp'
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
					author='Maria'
					image={reinerTestimonial}
					imageAlt='Westernsattel Testimonial'
					subtitle='WIEDER DURFTEN WIR EIN "MENSCH-PFERD-TEAM" GLÜCKLICH MACHEN 😍'
					text='Gewählt wurde das Modell Reiner, der hier sehr schön passend zum Pferd zusammengestellt wurde.

					Das Schokobraun von "Peponitas Bay" AKA Peppo wurde als Grundfarbe des Sattels gewählt und der Sitz - passend zu Peppo´s Mähne - in schwarz.
					
					Aufgehübscht wurde der Sattel mit unseren Texasstern-Conchas, einem großen D-Ring am Backjockey und den Strings, wo man auch mal Packtaschen befestigen kann, wenn´s mal ein längerer Ritt ins Gelände wird.
					
					Nicht nur für die Optik hat sich die Besitzerin für eine Borderstamp rund um den Sattel entschieden. Das Borderstamp hat auch den Vorteil, dass es das Leder "Formstabil" hält. Leder ist ein Naturprodukt, jede Haut ist anders und was Besonderes, reagiert aber auf die Körperwärme von Mensch und Pferd und passt sich dann auch an.
					
					Wir wünschen Maria und Peppo viele schöne Stunden in dem neuen Schmuckstück.'
					buttonText='Weitere Informationen'
				/>
			</Animation>
		</>
	)
}

export default Reiner
