/* eslint-disable react/no-children-prop */
import { FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import ShakingButton from './ShakingButton'

const Banner = ({
	heading,
	strongHeading,
	text,
	email,
	buttonText,
	secondButtonText,
	formLabelText,
	placeholder,
}) => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm()

	return (
		<>
			<section>
				<div className='mx-auto max-w-screen-xl px-4 py-4  lg:items-center'>
					<div className='mx-auto max-w-xl text-center'>
						<h1 className='text-3xl font-extrabold sm:text-5xl'>
							{heading}
							<strong className='font-extrabold text-red-700 sm:block'>
								{strongHeading}
							</strong>
						</h1>

						<p className=' sm:text-xl sm:leading-relaxed'>{text}</p>
					</div>
				</div>
				<form
					method='POST'
					action='https://ingbrohansthoma.activehosted.com/proc.php'
					id='_form_132_'
				>
					<FormControl py={2} px={2}>
						<Textarea
							placeholder={placeholder}
							focusBorderColor='red.500'
							isRequired
							id='field[2]'
							name='field[2]'
						/>
						<div className='wrapper flex items-center relative box-border overflow-hidden rounded-t-lg mt-4'>
							<u className='absolute no-underline h-[18px] left-6 select-none flex items-center'>
								<span style={{ fontSize: '24px' }}>✉️</span>
							</u>
							<input
								type='text'
								name='email'
								value={email}
								required
								className='input 
		placeholder-gray-400 box-border w-full h-[64px] px-6 border-b border-l border-r border-t mb-0 
		font-ui text-base align-middle bg-white transition 
		appearance-none font-light focus:outline-red-500 focus:bg-gray-50 rounded-none
		 border-black/10 rounded-t-lg pl-[70px] '
								placeholder='Email'
							/>
						</div>
						<div className='wrapper flex items-center relative box-border overflow-hidden rounded-t-lg mt-4'>
							<u className='absolute no-underline h-[18px] left-6 select-none flex items-center'>
								<span style={{ fontSize: '24px' }}>📞</span>
							</u>
							<input
								type='text'
								id='phone'
								name='phone'
								pattern='[0-9]*'
								required
								className='input 
		placeholder-gray-400 box-border w-full h-[64px] px-6 border-b border-l border-r border-t mb-0 
		font-ui text-base align-middle bg-white transition 
		appearance-none font-light focus:outline-red-500 focus:bg-gray-50 rounded-none
		 border-black/10 rounded-t-lg pl-[70px] '
								placeholder='Telefon'
							/>
						</div>
						<div className='wrapper flex items-center relative box-border overflow-hidden rounded-t-lg mt-4'>
							<u className='absolute no-underline h-[18px] left-6 select-none flex items-center'>
								<span style={{ fontSize: '24px' }}>📨</span>
							</u>
							<input
								type='text'
								id='field[49]'
								name='field[49]'
								pattern='[0-9]*'
								required
								className='input 
		placeholder-gray-400 box-border w-full h-[64px] px-6 border-b border-l border-r border-t mb-0 
		font-ui text-base align-middle bg-white transition 
		appearance-none font-light focus:outline-red-500 focus:bg-gray-50 rounded-none
		 border-black/10 rounded-t-lg pl-[70px] '
								placeholder='PLZ'
							/>
						</div>
						<div className=' w-full border-box pt-2 pl-6 pr-6 pb-2'>
							<ShakingButton buttonText={buttonText} />
						</div>
						<FormLabel textAlign='center' py={1}>
							{formLabelText}
						</FormLabel>
						<input type='hidden' name='u' value='132' />
						<input type='hidden' name='f' value='132' />
						<input type='hidden' name='s' />
						<input type='hidden' name='c' value='0' />
						<input type='hidden' name='m' value='0' />
						<input type='hidden' name='act' value='sub' />
						<input type='hidden' name='v' value='2' />
						<input type='hidden' name='or' value='b218a17b9024d5877657bd7df89e4c77' />
					</FormControl>
				</form>
			</section>
		</>
	)
}

export default Banner
