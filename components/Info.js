import {
	Container,
	SimpleGrid,
	Flex,
	Heading,
	Text,
	Stack,
	StackDivider,
	Icon,
	useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import { MdArchitecture } from 'react-icons/md'
import { BiPhotoAlbum } from 'react-icons/bi'
import { SiCoronarenderer } from 'react-icons/si'
import { GiSelfLove } from 'react-icons/gi'
import image from '../public/gallery2.webp'

const Feature = ({ text, icon, iconBg }) => {
	return (
		<Stack direction={'row'} align={'center'}>
			<Flex
				w={8}
				h={8}
				align={'center'}
				justify={'center'}
				rounded={'full'}
				bg={iconBg}
			>
				{icon}
			</Flex>
			<Text fontWeight={600}>{text}</Text>
		</Stack>
	)
}

const Features = () => {
	return (
		<Container maxW={'8xl'} py={12}>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
				<Stack spacing={4}>
					<Text
						textTransform={'uppercase'}
						color={'red.400'}
						fontWeight={600}
						fontSize={'sm'}
						bg={useColorModeValue('red.50', 'red.900')}
						p={2}
						alignSelf={'flex-start'}
						rounded={'md'}
					>
						Preisliste anfordern
					</Text>
					<Heading>Preisliste und Datenblätter anfordern</Heading>
					<Text color={'gray.500'} fontSize={'lg'}>
						Nach Eintragung in unsere Mailingliste bekommen Sie automatisch:
					</Text>
					<Stack
						spacing={4}
						divider={
							<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
						}
					>
						<Feature
							icon={<Icon as={MdArchitecture} color={'red.500'} w={5} h={5} />}
							iconBg={useColorModeValue('red.100', 'red.900')}
							text={'Weitere Informationen über die Vorteile unserer Sättel'}
						/>
						<Feature
							icon={<Icon as={BiPhotoAlbum} color={'red.500'} w={5} h={5} />}
							iconBg={useColorModeValue('red.100', 'red.900')}
							text={'Aktuelle Informationen über J. v. G. Saddle Innovations'}
						/>
						<Feature
							icon={<Icon as={SiCoronarenderer} color={'red.500'} w={5} h={5} />}
							iconBg={useColorModeValue('red.100', 'red.900')}
							text={'Unsere Preisliste und Flyer als Download'}
						/>
						<Feature
							icon={<Icon as={GiSelfLove} color={'red.500'} w={5} h={5} />}
							iconBg={useColorModeValue('red.100', 'red.900')}
							text={'Persönlicher Ansprechpartner bei Fragen'}
						/>
					</Stack>
				</Stack>
				<Flex>
					<Image
						rounded={'md'}
						alt={'feature image'}
						src={image}
						width='720'
						height='840'
						objectFit={'cover'}
					/>
				</Flex>
			</SimpleGrid>
		</Container>
	)
}

export default Features
