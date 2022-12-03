const Section = (heading, subHeading, firstHeading, firstText) => {
	return (
		<section class=''>
			<div class='max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8'>
				<div class='max-w-xl m-auto'>
					<h2 class='text-3xl font-bold sm:text-4xl center'>Über Western Saddle</h2>

					<p class='mt-4 '>
						Alle unsere Westernsättel werden individuell mit dem patentierten EQUISCAN
						System vermessen und danach gefertigt. Sie können auch nach der
						Herstellung jederzeit wieder neu vermessen werden und neu eingestellt
						werden - ein Neusattel bei einer Änderung des Pferdes ist nicht notwendig!
					</p>
				</div>

				<div class='mt-8 grid grid-cols-1 gap-8 md:mt-4 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
					<div class='flex  flex-col items-center'>
						<span class='flex-shrink-0 rounded-lg  p-4  color-red-500'>
							<svg
								class='h-5 w-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M12 14l9-5-9-5-9 5 9 5z'></path>
								<path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
								></path>
							</svg>
						</span>

						<div class='ml-4'>
							<h2 class='text-lg font-bold'>Individuell gefertigt</h2>

							<p class='mt-1 text-sm'>
								Farbauswahl des Sattels und Sitzleders, Skirtformen, mit oder ohne Horn,
								vorgedrehte Fender gehören zur Grundausstattung. Punzierung, Conchas und
								sonstige Verzierungen sind bei diesem Sattel teils gegen Aufpreis frei
								wählbar. Selbst das Leder kann kundenspezifisch designed werden.
							</p>
						</div>
					</div>

					<div class='flex flex-col items-center'>
						<span class='flex-shrink-0 rounded-lg bg-white-800 p-4'>
							<svg
								class='h-5 w-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M12 14l9-5-9-5-9 5 9 5z'></path>
								<path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
								></path>
							</svg>
						</span>

						<div class='ml-4'>
							<h2 class='text-lg font-bold'>Leichter Westernsattel</h2>

							<p class='mt-1 text-sm '>
								Durch den verwendeten Kunststoffsattelbaum ist der Western deutlich
								leichter als vergleichbare Westernsättel mit massivem Holzsattelbaum.
								Auch andere teile wie z. B. die Fork oder die Auflagepanels wurden
								konsequent aus Kunststoff gefertigt um Gewicht zu sparen.
							</p>
						</div>
					</div>

					<div class='flex flex-col items-center'>
						<span class='flex-shrink-0 rounded-lg  p-4'>
							<svg
								class='h-5 w-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M12 14l9-5-9-5-9 5 9 5z'></path>
								<path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
								></path>
							</svg>
						</span>

						<div class='ml-4'>
							<h2 class='text-lg font-bold'>Extra kurzer Westernsattel</h2>

							<p class='mt-1 text-sm '>
								Auch für extra kurze Pferde kann unser Westernsattel angepasst werden:
								Die Länge des Westernsattels wird nur mit der Länge des Sitzes nach
								unten begrenzt! Unsere Auflage kann direkt mit der Sitzfläche
								abschliessen - sofern das Pferd dies benötigt. Dadurch entsteht ein
								besonders kurzer Westernsattel mit einer Länge von unter 44 cm.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section
