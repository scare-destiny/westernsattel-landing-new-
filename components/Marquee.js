import ImageCaption from './ImageCaption'
import Image from 'next/image'
import image1 from '../public/westernSaddleHero.webp'
import image2 from '../public/wadeSaddleHero.webp'
import image3 from '../public/reinerHero.webp'
import image4 from '../public/endurance-saddle.webp'
// import image5 from '../public/gallery5.webp'
// import image6 from '../public/gallery6.webp'
// import image7 from '../public/gallery7.webp'
// import image8 from '../public/gallery8.webp'
// import image9 from '../public/gallery9.webp'
// import image10 from '../public/gallery10.webp'

const Marquee = () => {
	return (
		<div className='container-marquee'>
			<div className='marquee'>
				<div className='marquee__group'>
					<ImageCaption text='LUXURY WESTERN'>
						<Image src={image1} alt='beautiful horse' />
					</ImageCaption>
					<ImageCaption text='LUXURY WADE'>
						<Image src={image2} alt='beautiful horse' />
					</ImageCaption>
					<ImageCaption text='LUXURY REINER'>
						<Image src={image3} alt='beautiful horse' />
					</ImageCaption>
					<ImageCaption text='LUXURY ENDURANCE'>
						<Image src={image4} alt='beatiful horse' />
					</ImageCaption>
					{/* <Image src={image5} alt='beatiful horse' /> */}
				</div>
				<div aria-hidden='true' className='marquee__group'>
					<ImageCaption text='LUXURY WESTERN'>
						<Image src={image1} alt='beautiful horse' />
					</ImageCaption>
					<ImageCaption text='LUXURY WADE'>
						<Image src={image2} alt='beautiful horse' />
					</ImageCaption>
					<ImageCaption text='LUXURY REINER'>
						<Image src={image3} alt='beautiful horse' />
					</ImageCaption>
					<ImageCaption text='LUXURY ENDURANCE'>
						<Image src={image4} alt='beatiful horse' />
					</ImageCaption>
					{/* <Image src={image5} alt='beatiful horse' /> */}
				</div>
			</div>
			<div className='marquee marquee--reverse'>
				{/* <div className='marquee__group'>
					<Image src={image6} alt='logo' />
					<Image src={image7} alt='logo' />
					<Image src={image8} alt='logo' />
					<Image src={image9} alt='logo' />
					<Image src={image10} alt='logo' />
				</div> */}
				{/* <div aria-hidden='true' className='marquee__group'>
					<Image src={image6} alt='logo' />
					<Image src={image7} alt='logo' />
					<Image src={image8} alt='logo' />
					<Image src={image9} alt='logo' />
					<Image src={image10} alt='logo' />
				</div> */}
			</div>
		</div>
	)
}

export default Marquee
