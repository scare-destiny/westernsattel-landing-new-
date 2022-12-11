import {
	Stack,
	Button,
	Text,
	VStack,
	useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'

const BackgroundImage = ({
	image,
	sizes,
	objectPosition,
	alt,
	text,
	buttonText,
	priority,
}) => {
	return (
		<>
			<div
				style={{
					width: 'auto',
					height: '100vh',
					position: 'relative',
					display: 'flex',
				}}
			>
				<Image
					src={image}
					sizes={sizes}
					priority={priority}
					layout='fill'
					objectFit='cover'
					objectPosition={objectPosition}
					alt={alt}
					quality={100}
				/>
				<VStack
					w={'full'}
					justify={'center'}
					px={useBreakpointValue({ base: 4, md: 8 })}
					bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
				>
					<Stack
						maxW={'2xl'}
						align={'center'}
						justify={'center'}
						spacing={6}
						zIndex={1}
					>
						{/* <Text
						color={'white'}
						fontWeight={700}
						lineHeight={1.2}
						fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
					>
						{text}
					</Text> */}
						<Stack direction={'row'}>
							{/* <Button
							bg={'whiteAlpha.300'}
							rounded={'full'}
							color={'white'}
							_hover={{ bg: 'whiteAlpha.500' }}
						>
							{buttonText}
						</Button> */}
						</Stack>
					</Stack>
				</VStack>
				{/* </Flex> */}
			</div>
			<a href='#' className='group relative flex h-96 w-full items-end bg-black'>
				<Image
					width='600'
					height='700'
					alt='Bike'
					src={image}
					className='absolute inset-0 h-full w-full object-cover object-right transition-opacity group-hover:opacity-90'
				/>

				<div className='relative w-full bg-red-700 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3'>
					<h3 className='text-lg uppercase'>Custom Shop</h3>

					<p className='mt-1 text-xs font-medium uppercase'>Design your own</p>
				</div>
			</a>
		</>
	)
}

export default BackgroundImage
