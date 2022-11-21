import ButtonComponent from './ButtonComponent'

const Form = ({
	description,
	strongDescription,
	emailPlaceholder,
	acceptPrivacyPlaceholder,
	buttonText,
	bottomText,
}) => {
	return (
		<>
			<div className='formContainer w-full border-box pt-2 pl-6 pr-6 pb-2'>
				<div className='mx-auto max-w-xl sm:max-w-xl w-full'>
					<div>
						<div className='w-full border-box pb-2 '>
							<div className='mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl'>
								<div>
									<div className='wrapper max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl pb-2 text-center'>
										<h4 className='text-l'></h4>
										{description} <strong>{strongDescription} </strong>
									</div>
								</div>
							</div>
						</div>
						<form
							method='POST'
							action='https://ingbrohansthoma.activehosted.com/proc.php'
							id='_form_130_'
							className='_form _form_130 _inline-form '
						>
							<div className='wrapper flex items-center relative box-border overflow-hidden rounded-t-lg'>
								<u className='absolute no-underline h-[18px] left-6 select-none flex items-center'>
									<span style={{ fontSize: '24px' }}>👋</span>
								</u>
								<input
									type='email'
									id='email'
									name='email'
									required
									className='input 
		placeholder-gray-400 box-border w-full h-[64px] px-6 border-0 border-l border-r border-t mb-0 
		font-ui text-base align-middle bg-white transition 
		appearance-none font-light focus:outline-none focus:bg-gray-50 rounded-none
		 border-black/10 rounded-t-lg pl-[70px] svelte-1ruxt0u'
									placeholder={emailPlaceholder}
								/>
							</div>
							<div className='wrapper checkbox flex items-center px-6 min-h-[68px] relative box-border overflow-hidden bg-white border-t border-l border-r border-b rounded-b-lg border-black/10'>
								<div className='checkbox undefined' style={{ width: '24px' }}>
									<input
										type='checkbox'
										required
										name='checkbox'
										className='accent-red-500 focus:accent-red-800 w-5 h-5 default:border-rose-600'
									/>
								</div>
								<style jsx>{`
									.checkbox {
										width: auto;
										height: 24px;
										color: #0bb648;
									}
								`}</style>

								<div className='text'>
									<div className='w-full border-box pt-4 pl-5 pr-4 pb-4'>
										<div className='mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl text-left'>
											<h4 className='text-black font-extralight leading-5 text-sm break-words'>
												{acceptPrivacyPlaceholder}
											</h4>
											<input type='hidden' name='u' value='130' />
											<input type='hidden' name='f' value='130' />
											<input type='hidden' name='s' />
											<input type='hidden' name='c' value='0' />
											<input type='hidden' name='m' value='0' />
											<input type='hidden' name='act' value='sub' />
											<input type='hidden' name='v' value='2' />
											<input
												type='hidden'
												name='or'
												value='26957fcb0b64f100bc53f40a2c79facd'
											/>
										</div>
									</div>
								</div>
							</div>
							<ButtonComponent buttonText={buttonText} />
						</form>
						<div className='w-full border-box pt-2 pl-8 pr-8 pb-2 mx-auto max-w-md sm:max-w-xl  md:max-w-4xl lg:max-w-5xl'>
							<div className='break-words text-center'>
								<h4>{bottomText}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Form
