import { CiCircleInfo } from 'react-icons/ci'

const Section = ({
	heading,
	subHeading,
	firstHeading,
	firstText,
	secondHeading,
	secondText,
	thirdHeading,
	thirdText,
}) => {
	return (
		<section class=''>
			<div class='max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8'>
				<div class='max-w-xl m-auto'>
					<h2 class='text-3xl font-bold sm:text-4xl center'>{heading}</h2>

					<p class='mt-4 '>{subHeading}</p>
				</div>

				<div class='mt-8 grid grid-cols-1 gap-2 md:mt-4 md:grid-cols-2 md:gap-3 lg:grid-cols-3'>
					<div class='flex  flex-col items-center'>
						<span class='flex-shrink-0 rounded-lg  p-4  color-red-500'>
							<CiCircleInfo className='text-buttonBgColor h-5 w-5 ' />
						</span>

						<div class=''>
							<h2 class='text-lg font-bold'>{firstHeading}</h2>

							<p class='mt-1 text-sm leading-6'>{firstText}</p>
						</div>
					</div>

					<div class='flex flex-col items-center'>
						<span class='flex-shrink-0 rounded-lg bg-white-800 p-4'>
							<CiCircleInfo className='text-buttonBgColor h-5 w-5 ' />
						</span>

						<div class=''>
							<h2 class='text-lg font-bold'>{secondHeading}</h2>

							<p class='mt-1 text-sm leading-6 '>{secondText}</p>
						</div>
					</div>

					<div class='flex flex-col items-center'>
						<span class='flex-shrink-0 rounded-lg  p-4'>
							<CiCircleInfo className='text-buttonBgColor h-5 w-5 ' />
						</span>

						<div class=''>
							<h2 class='text-lg font-bold'>{thirdHeading}</h2>

							<p class='mt-1 text-sm leading-6 '>{thirdText}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section
