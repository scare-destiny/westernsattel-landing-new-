const Technical = ({ heading, features }) => {
	return (
		<div class='container py-2 px-6 mx-auto'>
			<section class=' text-gray-800'>
				<div class='flex flex-center justify-center'>
					<div class='text-center max-w-[700px] '>
						<h2 class='text-3xl font-bold mb-4 '>{heading}</h2>
					</div>
				</div>

				<div class='grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 xl:gap-x-4'>
					{features.map((feature, i) => (
						<div key={i} class='mb-4 m-auto'>
							<div class='flex'>
								<div class='shrink-0 mt-1'>
									<svg
										class='w-4 h-4 text-red-600'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 512 512'
									>
										<path
											fill='currentColor'
											d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'
										></path>
									</svg>
								</div>
								<div class='grow ml-4'>
									<p class='font-bold mb-1'>{feature}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}

export default Technical
