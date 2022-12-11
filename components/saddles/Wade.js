import {
	Animation,
	SaddleFeature,
	CollectionGrid,
	Section,
	Technical,
	SaddleTestimonials,
} from '../index.js'
import wadeSaddleHero from '../../public/wadeSaddleHero.webp'
import wadeSaddle from '../../public/wadeSaddle.webp'
import wadeSaddle2 from '../../public/wadeSaddle2.webp'
import wadeSaddle3 from '../../public/wadeSaddle3.webp'
import wadeTestimonial from '../../public/wadeTestimonial.jpg'

const features = [
	'Conchas',
	'Lederfarben Sattel',
	'Leder Sitz',
	'Steigbügel',
	'Form: Round',
	'Sitzgröße: 15 bis 16 Zoll',
	'Sattelbaum: Angepasst',
	'Extra kurz gestaltbar',
]

const Wade = () => {
	return (
		<>
			<Animation>
				<SaddleFeature
					image={wadeSaddleHero}
					objectPosition='center left'
					heading='Luxury Wade'
					text='Der Neue leichte und kurze'
					alt='Wade Saddle'
				/>
			</Animation>
			<CollectionGrid
				title='
				Luxury Wade dunkel'
				subTitle='Nie mehr Kreuzschmerzen beim Satteln.
				Mit besonders bequemen Sitz und massivem Horn.'
				firstImage={wadeSaddle}
				secondImage={wadeSaddle2}
				thirdImage={wadeSaddle3}
			/>
			<Animation>
				<Section
					heading='Über Wade Saddle'
					subHeading='Durch die Verwendung unseres vom Patentamt geschützten Kunststoff Sattelbaum ist auch dieser Sattel ein ganzes Stück leichter als herkömmliche Wade Sättel mit massivem Holzbaum.'
					firstHeading='Junges Pferd? Kein Problem!'
					firstText='	Auch Jahre nach der Herstellung können alle 
					unsere Luxury Modelle jederzeit wieder neu an das Pferd (oder ein anderes Pferd) angepasst und neu eingestellt werden - ein Neusattel bei einer Änderung des Pferdes ist nicht notwendig!'
					secondHeading='Nicht nur optisch perfekt'
					secondText='Optisch kann man seinen Westernsattel bei uns jederzeit nach eigenem Geschmack individuell designen, aber auch für die Passform und Ausführung werden alle unsere Westernsättel individuell mit dem patentierten EQUISCAN System vermessen und danach gefertigt.'
					thirdHeading='So kurz wie nötig'
					thirdText='Trotz massiver wunderschöner Wade Optik kann auch dieses Modell so kurz wie nötig gefertigt werden (siehe auch: Kurzer Westernsattel). Je nach Länge des Pferdes aber natürlich auch länger um die gesamte Fläche für die Druckverteilung zu verwenden.'
				/>
			</Animation>
			<Animation>
				<Technical
					heading='Enthalten sowie teil frei wählbar sind:
				 '
					features={features}
				/>
			</Animation>
			<Animation>
				<SaddleTestimonials
					heading='Das sagen unsere Kunden'
					author='Cherry'
					image={wadeTestimonial}
					imageAlt='Wade Saddle Testimonial'
					subtitle='DER FÜHLT SICH AN, WIE EINE ZWEITE HAUT!					'
					text='Hallo!
					Mein Name ist *Smart Shining Cherry*, bin 3 Jahre alt und hab jetzt einen meeeega tollen Sattel von *JvG*! Der wurde mir angepasst, ist extrem leicht und zwickt überhaupt nicht! Gerade für mich als Jungspund ist das super! Der fühlt sich an, wie eine zweite Haut! Es macht richtig Spaß, den rumzutragen. Und das Tolle ist, auch wenn ich mal mehr Möhrchen fresse oder mal so ein richtiger Bodybuilder werde, kann mein wunderschöner Sattel immer wieder neu angepasst werden! Da hat sich mein Frauchen was ganz Tolles für mich bauen lassen! Danke JvG, dass ihr die Wünsche und Vorstellungen von mir und meinem Frauchen so toll umgesetzt habt!
					'
					buttonHeading='Sind Sie an diesem Sattel interessiert?'
					buttonText='Weitere Informationen'
				/>
			</Animation>
		</>
	)
}

export default Wade
