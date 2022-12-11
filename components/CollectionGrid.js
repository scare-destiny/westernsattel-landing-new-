import Image from 'next/image'
import { Animation } from '../components/index'

const CollectionGrid = ({
	title,
	subTitle,
	firstImage,
	firstAlt,
	firstText,
	secondImage,
	secondAlt,
	secondText,
	thirdImage,
	thirdAlt,
	thirdText,
}) => {
	return (
		<section>
			<div className='max-w-screen-xl px-4 py-2 mx-auto sm:px-6 sm:py-4 lg:px-8'>
				<header className='text-center'>
					<h2 className=' text-gray-900 text-4xl font-bold tracking-tight  sm:text-3xl'>
						{title}
					</h2>

					<h4 className='max-w-md mx-auto mt-2  text-xl  sm:text-l'>{subTitle}</h4>
				</header>

				<ul className='grid grid-cols-1 gap-4 mt-2 lg:grid-cols-3'>
					<li>
						<Animation>
							<Image
								src={firstImage}
								alt=''
								className='object-contain w-full transition duration-500 aspect-square group-hover:opacity-90'
							/>
						</Animation>
					</li>

					<li>
						<Animation>
							<Image
								src={secondImage}
								alt=''
								className='object-contain w-full transition duration-500 aspect-square group-hover:opacity-90'
							/>
						</Animation>
					</li>

					<Animation>
						{/* <li className='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'> */}
						<Image
							src={thirdImage}
							alt=''
							className='object-contain w-full transition duration-500 aspect-square group-hover:opacity-90'
						/>
						{/* </li> */}
					</Animation>
				</ul>
			</div>
		</section>
	)
}

export default CollectionGrid
