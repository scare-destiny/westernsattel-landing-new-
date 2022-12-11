import {
	Animation,
	SaddleFeature,
	CollectionGrid,
	Section,
	Technical,
	SaddleTestimonials,
} from '../index.js'
import westernHero from '../../public/westernSaddleHero.webp'
import westernDark1 from '../../public/westernSaddleBright1.webp'
import westernDark2 from '../../public/westernSaddleBright2.webp'
import westernDark3 from '../../public/westernSaddleBright3.webp'
import westernBright1 from '../../public/westernSaddleDark1.webp'
import westernBright2 from '../../public/westernSaddleDark2.webp'
import westernBright3 from '../../public/westernSaddleDark3.webp'
import westernsattelTestimonial from '../../public/westernsattelTestimonial.jpg'

const features = [
	'Conchas',
	,
	'Lederfarben Sattel',
	,
	'Leder Sitz',
	,
	'Steigbügel',
	,
	'Form: Butterfly',
	,
	'Sitzgröße: 15 bis 16 Zoll',
	,
	'Sattelbaum: Angepasst',
	,
	'Mit oder ohne Horn',
]

const Western = () => {
	return (
		<>
			<Animation>
				<SaddleFeature
					image={westernHero}
					objectPosition='center right'
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
				<Section
					heading='Über Western Saddle'
					subHeading='Alle unsere Westernsättel werden individuell mit dem patentierten EQUISCAN
						System vermessen und danach gefertigt. Sie können auch nach der
						Herstellung jederzeit wieder neu vermessen werden und neu eingestellt
						werden - ein Neusattel bei einer Änderung des Pferdes ist nicht notwendig!'
					firstHeading='Individuell gefertigt'
					firstText='	Farbauswahl des Sattels und Sitzleders, Skirtformen, mit oder ohne Horn,
					vorgedrehte Fender gehören zur Grundausstattung. Punzierung, Conchas und
					sonstige Verzierungen sind bei diesem Sattel teils gegen Aufpreis frei
					wählbar. Selbst das Leder kann kundenspezifisch designed werden.'
					secondHeading='Leichter Westernsattel'
					secondText='	Farbauswahl des Sattels und Sitzleders, Skirtformen, mit oder ohne Horn,
					vorgedrehte Fender gehören zur Grundausstattung. Punzierung, Conchas und
					sonstige Verzierungen sind bei diesem Sattel teils gegen Aufpreis frei
					wählbar. Selbst das Leder kann kundenspezifisch designed werden.'
					thirdHeading='Extra kurzer Westernsattel'
					thirdText='Auch für extra kurze Pferde kann unser Westernsattel angepasst werden:
					Die Länge des Westernsattels wird nur mit der Länge des Sitzes nach
					unten begrenzt! Unsere Auflage kann direkt mit der Sitzfläche
					abschliessen - sofern das Pferd dies benötigt. Dadurch entsteht ein
					besonders kurzer Westernsattel mit einer Länge von unter 44 cm.'
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
					author='Julia'
					image={westernsattelTestimonial}
					imageAlt='Westernsattel Testimonial'
					subtitle='DAS PERFEKTE WEIHNACHTSGESCHENK FÜR JULIA UND DAKOTA'
					text='Das perfekte Weihnachtsgeschenk wurde heute noch an Julia und Dakota
					ausgeliefert. Es war eine kleine Herausforderung, da Dakota ein kurzer
					Irish Cob ist.	
					Wir haben es mit einem schönen, schlichten Westernsattel mit
									Butterflyskirt gelöst - so wird der Rücken schön
									eingerahmt und vermeidet das Rutschen in der Bewegung.
									Für den Reiter gibt es einen direkten Kontakt mit dem Bein zum Pferd.
									
									An die Strips hinten kann man bei Bedarf auch mal Sattelpacktaschen
									befestigen, wenn die Reise zu Pferd mal länger wird. Herzlichen
									Glückwunsch nach Stadtallendorf und viele schöne Stunden mit dem neuen
									Sattel.'
					buttonHeading='Interessieren Sie sich für den Westernsattel?'
					buttonText='Weitere Informationen'
				/>
			</Animation>
		</>
	)
}

export default Western
