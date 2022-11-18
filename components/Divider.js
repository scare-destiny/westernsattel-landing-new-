const Divider = () => {
	return (
		<div className='flex my-2 text-sm font-semibold items-center text-gray-800'>
			<div className='flex-grow border-t border-red-200 h-px mr-3'></div>
			<span className='bg-red-200 rounded-full p-1.5'>🐎</span>
			<div className='flex-grow border-t border-red-200 h-px ml-3'></div>
		</div>
	)
}

export default Divider
