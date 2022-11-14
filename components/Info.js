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
// import { MdArchitecture } from 'react-icons/md'
// import { BiPhotoAlbum } from 'react-icons/bi'
// import { SiCoronarenderer } from 'react-icons/si'
// import { GiSelfLove } from 'react-icons/gi'
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

const Info = () => {
	return (
		<Container maxW={'8xl'} py={12}>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
				<Stack spacing={4}>
					<Text
						textTransform={'uppercase'}
						color={'blue.400'}
						fontWeight={600}
						fontSize={'sm'}
						bg={useColorModeValue('blue.50', 'blue.900')}
						p={2}
						alignSelf={'flex-start'}
						rounded={'md'}
					>
						My Story
					</Text>
					<Heading>Interior architect and designer</Heading>
					<Text color={'gray.500'} fontSize={'lg'}>
						I fell in love with design when I was a teenager. Time flies and I enjoy
						it more and more with each breath. All my work comes with:
					</Text>
					<Stack
						spacing={4}
						divider={
							<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
						}
					>
						<Feature
							// icon={<Icon as={MdArchitecture} color={'red.500'} w={5} h={5} />}
							iconBg={useColorModeValue('red.500', 'red.900')}
							text={'Detailed Plans'}
						/>
						<Feature
							// icon={<Icon as={BiPhotoAlbum} color={'red.500'} w={5} h={5} />}
							iconBg={useColorModeValue('red.500', 'red.900')}
							text={'Moodboards'}
						/>
						<Feature
							// icon={<Icon as={SiCoronarenderer} color={'red.500'} w={5} h={5} />}
							iconBg={useColorModeValue('red.500', 'red.900')}
							text={'Photorealistic Visualizations'}
						/>
						<Feature
							// icon={<Icon as={GiSelfLove} color={'red.500'} w={5} h={5} />}
							iconBg={useColorModeValue('red.500', 'red.900')}
							text={'Pinch Of Love And Care'}
						/>
					</Stack>
				</Stack>
				<Flex>
					<Image
						rounded={'md'}
						alt={'feature image'}
						src={image}
						width='960'
						height='959'
					/>
				</Flex>
			</SimpleGrid>
		</Container>
	)
}

export default Info
