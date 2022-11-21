import Image from 'next/image'

const Hero = ({ image, width, height, priority }) => {
	return (
		<div className='mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl py-2  sm:py-2 md:px-20 md:py-2'>
			<Image
				src={image}
				alt='logo'
				width={width}
				height={height}
				priority={priority}
			/>
		</div>
	)
}

export default Hero
