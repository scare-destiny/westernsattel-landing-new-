import { Icon } from '@chakra-ui/react'
import { GiHorseshoe, GiLoveMystery, GiHorseHead } from 'react-icons/gi'
import { BiHappyHeartEyes } from 'react-icons/bi'
import { SectionTitle, Heading } from '../components/index'
import Feature from '../components/Feature'

const Features = () => {
	return (
		<>
			<Heading
				text='Über uns
'
			/>
			<SectionTitle text='J.v.G. Saddle Innovations ist ein Familienunternehmen - bereits seit 1999 werden unter der Marke Iberosattel eigene Sättel entwickelt.' />
			<div className='w-full border-box pt-2 pl-6 pr-6 pb-2'>
				<div className='mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl'>
					<div className='grid text-left grid-cols-1 gap-8 md:grid-cols-2'>
						<Feature
							icon={<Icon as={GiHorseshoe} color={'red.500'} w={5} h={5} />}
							strongText='
							Individuelle Anpassung und Fertigung. '
							text='Das Ergebnis: Ein technisch innovativer, von Hand gefertigter und individuell an Sie angepasster Sattel.'
						/>
						<Feature
							icon={<Icon as={GiLoveMystery} color={'red.500'} w={5} h={5} />}
							strongText='
							Handmade in unserer Manufaktur. '
							text='Schon seit 1999 fertigen wir Sättel für passionierte und professionelle Reiter.'
						/>
						<Feature
							icon={<Icon as={GiHorseHead} color={'red.500'} w={5} h={5} />}
							strongText='
							Immer wieder neu anpassbar. '
							text=' Alle von uns gefertigten Sättel können sie jederzeit neu auf Ihr Pferd anpassen lassen.'
						/>
						<Feature
							icon={<Icon as={BiHappyHeartEyes} color={'red.500'} w={5} h={5} />}
							strongText='
							Klassische Westernsättel für Turnier oder Freizeit – sagen Sie uns, was Sie brauchen. '
							text='Wir bauen Sättel für jeden Anspruch und jedes Reiter-Pferd-Team, auf Maß und immer individuell angepasst (auch Sonderwünsche).'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Features
