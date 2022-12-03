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
			<div class='max-w-screen-xl px-4 py-2 mx-auto sm:px-6 sm:py-12 lg:px-8'>
				<header class='text-center'>
					<h2 class=' text-gray-900 text-4xl font-bold tracking-tight  sm:text-3xl'>
						{title}
					</h2>

					<h4 class='max-w-md mx-auto mt-2  text-xl  sm:text-l'>{subTitle}</h4>
				</header>

				<ul class='grid grid-cols-1 gap-4 mt-2 lg:grid-cols-3'>
					<li>
						<Animation>
							<Image
								src={firstImage}
								alt=''
								class='object-contain w-full transition duration-500 aspect-square group-hover:opacity-90'
							/>
						</Animation>
					</li>

					<li>
						<Animation>
							<Image
								src={secondImage}
								alt=''
								class='object-contain w-full transition duration-500 aspect-square group-hover:opacity-90'
							/>
						</Animation>
					</li>

					<Animation>
						<li class='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'>
							<Image
								src={thirdImage}
								alt=''
								class='object-contain w-full transition duration-500 aspect-square group-hover:opacity-90'
							/>
						</li>
					</Animation>
				</ul>
			</div>
		</section>
	)
}

export default CollectionGrid
