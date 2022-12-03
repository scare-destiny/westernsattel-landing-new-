import {
	FormControl,
	FormLabel,
	Textarea,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import ShakingButton from './ShakingButton'

const Banner = ({
	heading,
	strongHeading,
	text,
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
			<FormControl py={2}>
				<Textarea
					placeholder={placeholder}
					focusBorderColor='blue.300'
					isRequired
				/>
				<div className=' w-full border-box pt-2 pl-6 pr-6 pb-2'>
					<ShakingButton buttonText={buttonText} />
				</div>
				<FormLabel textAlign='center' py={1}>
					{formLabelText}
				</FormLabel>
			</FormControl>
		</section>
	)
}

export default Banner
