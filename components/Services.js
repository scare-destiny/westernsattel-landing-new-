import { GiSaddle } from 'react-icons/gi'
import { RiHomeGearFill } from 'react-icons/ri'
import { VscTools } from 'react-icons/vsc'
import { FaHorse } from 'react-icons/fa'

import Heading from './Heading'
import ButtonComponent from './ButtonComponent'

const Services = () => {
	const handleClickScroll = () => {
		const element = document.getElementById('bottom-pricelist')
		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<section className='text-gray-600 body-font'>
			<div className='w-full container py-2 mx-auto'>
				<div className='text-center pb-2 break-words'>
					<Heading
						text='
						Unsere Westernsättel sind verstellbar - auch später noch
'
					/>
					<p className='text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-sectionTitleColor'>
						Ein technisch innovativer, von Hand gefertigter und individuell an Sie
						angepasster Sattel.
					</p>
				</div>
				<div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2  align-center'>
					<div className='p-2 sm:w-1/2 w-full'>
						<div className='bg-gray-100 rounded flex p-4 h-full items-center'>
							<GiSaddle className='text-buttonBgColor  w-6 h-6 flex-shrink-0 mr-4' />
							<span className='title-font font-medium'>
								Individuelle Anpassung und Fertigung
							</span>
						</div>
					</div>
					<div className='p-2 sm:w-1/2 w-full'>
						<div className='bg-gray-100 rounded flex p-4 h-full items-center'>
							<RiHomeGearFill className='text-buttonBgColor  w-6 h-6 flex-shrink-0 mr-4' />
							<span className='title-font font-medium'>
								Handmade in unserer eigenen Manufaktur
							</span>
						</div>
					</div>
					<div className='p-2 sm:w-1/2 w-full'>
						<div className='bg-gray-100 rounded flex p-4 h-full items-center'>
							<VscTools className='text-buttonBgColor  w-6 h-6 flex-shrink-0 mr-4' />
							<span className='title-font font-medium'>
								Immer wieder neu anpassbar
							</span>
						</div>
					</div>
					<div className='p-2 sm:w-1/2 w-full'>
						<div className='bg-gray-100 rounded flex p-4 h-full items-center'>
							<FaHorse className='text-buttonBgColor  w-6 h-6 flex-shrink-0 mr-4' />
							<span className='title-font font-medium'>
								Hochwertigste Qualität und Reit-Komfort{' '}
							</span>
						</div>
					</div>
				</div>
				<div className='formContainer w-full border-box pt-2 pl-6 pr-6 pb-2'>
					<ButtonComponent
						buttonText='Preisliste runter laden'
						handler={handleClickScroll}
					/>
				</div>
			</div>
		</section>
	)
}

export default Services
