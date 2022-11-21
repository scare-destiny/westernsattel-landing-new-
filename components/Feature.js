const Feature = ({ icon, strongText, text }) => {
	return (
		<div className='flex box-border w-full align-top items-start'>
			<div className='w-[48px] h-[48px] flex-shrink-0 flex items-center justify-center'>
				<span className='text-2xl'>{icon}</span>
			</div>
			<div className='text flex-grow break-words ml-6 min-h-[48px] min-w-0'>
				<div className='w-full border-box mx-auto max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl break-words '>
					<h4>
						<strong>{strongText}</strong>
					</h4>
					<h4 className='pt-2'>{text}</h4>
				</div>
			</div>
		</div>
	)
}

export default Feature
