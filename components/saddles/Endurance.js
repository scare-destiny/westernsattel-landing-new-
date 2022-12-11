import {
	Animation,
	SaddleFeature,
	CollectionGrid,
	Section,
	Technical,
	SaddleTestimonials,
} from '../index.js'
import enduranceHero from '../../public/endurance-saddle.webp'
import enduranceSaddle1 from '../../public/endurance-saddle-with-horn-1.webp'
import enduranceSaddle2 from '../../public/endurance-saddle-with-horn-2.webp'
import enduranceSaddle3 from '../../public/endurance-saddle-with-horn-3.webp'
import enduranceeWithoutHorn1 from '../../public/endurance-saddle-without-horn-1.webp'
import enduraneWithoutHorn2 from '../../public/endurance-saddle-without-horn-2.webp'
import enduraneWithoutHorn3 from '../../public/endurance-saddle-without-horn-3.webp'
import enduranceTestimonial from '../../public/enduranceTestimonial.png'

const features = [
	'Conchas',
	'Lederfarben Sattel',
	'Leder Sitz',
	'Steigbügel',
	'Form: Butterfly für V-Verschnallung',
	'Sitzgröße: 15 ½ bis 16 Zoll',
	'Sattelbaum: Angepasst',
	'Mit oder ohne Horn',
]

const Endurance = () => {
	return (
		<>
			<Animation>
				<SaddleFeature
					image={enduranceHero}
					objectPosition='center right'
					heading='LUXURY ENDURANCE'
					text='Der Westernsattel ohne Horn
					'
					alt='Endurance Saddle'
				/>
			</Animation>
			<CollectionGrid
				title='Luxury Endurance mit Horn'
				subTitle='Ein Wanderreitsattel der angepasst werden kann.
				Auch wenn sich das Pferd später mal ändert.'
				firstImage={enduranceSaddle1}
				secondImage={enduranceSaddle2}
				thirdImage={enduranceSaddle3}
			/>
			<CollectionGrid
				title='Luxury Endurance ohne Horn'
				subTitle='Gerade bei Wanderritten und langen Ausritten ist es unerlässlich, dass der Sattel perfekt passt.
				'
				firstImage={enduranceeWithoutHorn1}
				secondImage={enduraneWithoutHorn2}
				thirdImage={enduraneWithoutHorn3}
			/>
			<Animation>
				<Section
					heading='Über Endurance Saddle'
					subHeading='Dies alles macht ihn zum perfekten Westernsattel für Isländer und Ponys, sowie für andere kurze Pferde.'
					firstHeading='Anpassung über den Baum - auch noch nach Jahren'
					firstText='	Aufgebaut auf unserem innovativen Sattelbaum aus speziellem Kunststoff mit integriertem Kopfeisen, kann der Baum jederzeit wieder neu auf das Pferd angepasst werden! Damit haben sie die Sicherheit, dass Ihr Pferd in jeder Lebenslage immer einen perfekt passenden Sattel bekommt, ohne dabei alle Jahre wieder einen neuen Sattel zu kaufen.'
					secondHeading='Einzigartig und individuell'
					secondText='Bei der Anpassung und Gestaltung des Luxury Endurance sind keine Grenzen gesetzt. Farbauswahl des Sattels und Sitzleders, mit oder ohne Horn und vorgedrehten Fender. Punzierung, Conchas und sonstige Verzierungen sind bei diesem Sattel teils frei wählbar. Selbst das Leder kann kundenspezifisch designt werden. Der komplette Westernsattel wird auf Maß gefertigt.'
					thirdHeading='Reduziert auf das Nötigste'
					thirdText='Der Endurance ist reduziert auf das Nötigste: Wenig Leder, kein Backjockey, nur ein kleines Sattelblatt an der Beinlage: All das reduziert Gewicht und macht ihn zu einem besonders leichten Westernsattel.'
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
					image={enduranceTestimonial}
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

export default Endurance
