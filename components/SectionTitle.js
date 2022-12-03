const SectionTitle = ({ text }) => {
	return (
		<div className='border-boxborder-box pt-2 pl-2 pr-2 pb-2 mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl'>
			<div className='break-words text-center text-xl  sm:text-l'>
				<h4 className='text-sectionTitleColor'>{text}</h4>
			</div>
		</div>
	)
}

export default SectionTitle
