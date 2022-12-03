const ImageCaption = ({ children, text, bottomText }) => {
	return (
		<div className='relative'>
			<p className='absolute m-auto w-400px h-400px left-2 text-gray-300	'>
				{text}
			</p>
			<p className='absolute  m-auto w-400px h-400px bottom-3 pr-1 right-0  text-xs text-gray-400'>
				Der Reiner von J. v. G. Saddle Innovations
			</p>
			{children}
		</div>
	)
}

export default ImageCaption
{
	/* <div className='image_wrapper'>
<p>tesfdsfdsfdst</p>
<Image src={image1} alt='beautiful horse' />
</div> */
}

// .image_wrapper {
// 	position: relative;
// }

// .image_wrapper p {
// 	position: absolute;
// 	color: white;
// }
