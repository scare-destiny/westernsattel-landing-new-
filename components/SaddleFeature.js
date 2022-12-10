import Image from 'next/image'

const SaddleFeature = ({ image, objectPosition, heading, text, alt }) => {
	return (
		<a href='#' class='group relative flex h-96 w-full items-end bg-black'>
			<Image
				// width='600'
				// height='700'
				alt={alt}
				src={image}
				class='absolute inset-0 h-full w-full  transition-opacity group-hover:opacity-90'
				layout='fill'
				objectFit='cover'
				objectPosition={objectPosition}
			/>

			<div class='relative w-full bg-red-700 p-6 text-center tracking-widest text-gray-300 transition-colors group-hover:bg-black sm:w-2/3'>
				<h3 class='text-lg uppercase'>{heading}</h3>

				<p class='mt-1 text-xs font-medium uppercase'>{text}</p>
			</div>
		</a>
	)
}

export default SaddleFeature
