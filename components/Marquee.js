import Image from 'next/image'
import image1 from '../public/gallery1.webp'
import image2 from '../public/gallery2.webp'
import image3 from '../public/gallery3.webp'
import image4 from '../public/gallery4.webp'
import image5 from '../public/gallery5.webp'
import image6 from '../public/gallery6.webp'
import image7 from '../public/gallery7.webp'
import image8 from '../public/gallery8.webp'
import image9 from '../public/gallery9.webp'
import image10 from '../public/gallery10.webp'

const Marquee = () => {
	return (
		<div className='container-marquee'>
			<div className='marquee'>
				<div className='marquee__group'>
					<Image src={image1} alt='beautiful horse' />
					<Image src={image2} alt='beautiful horse' />
					<Image src={image3} alt='beautiful horse' />
					<Image src={image4} alt='beatiful horse' />
					<Image src={image5} alt='beatiful horse' />
				</div>
				<div aria-hidden='true' className='marquee__group'>
					<Image src={image1} alt='beatiful horse' />
					<Image src={image2} alt='beatiful horse' />
					<Image src={image3} alt='beatiful horse' />
					<Image src={image4} alt='beatiful horse' />
					<Image src={image5} alt='beatiful horse' />
				</div>
			</div>
			<div className='marquee marquee--reverse'>
				<div className='marquee__group'>
					<Image src={image6} alt='logo' />
					<Image src={image7} alt='logo' />
					<Image src={image8} alt='logo' />
					<Image src={image9} alt='logo' />
					<Image src={image10} alt='logo' />
				</div>
				<div aria-hidden='true' className='marquee__group'>
					<Image src={image6} alt='logo' />
					<Image src={image7} alt='logo' />
					<Image src={image8} alt='logo' />
					<Image src={image9} alt='logo' />
					<Image src={image10} alt='logo' />
				</div>
			</div>
		</div>
	)
}

export default Marquee
