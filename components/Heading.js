import { Mulish } from '@next/font/google'

const mulish = Mulish({ subsets: ['latin'] })

const Heading = ({ text }) => {
	return (
		<div className={mulish.className}>
			<div className='w-full border-box pt-2  pb-2 pl-2 pr-2 '>
				<div className='mx-auto max-w-xl'>
					<div className='wrapper break-words text-center text-textColor '>
						<h2 className='text-4xl font-extrabold tracking-tight sm:text-5xl '>
							<strong>{text}</strong>
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Heading
