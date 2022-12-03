import Confetti from 'react-dom-confetti'
import { useState, useRef } from 'react'

const config = {
	angle: 90,
	spread: 360,
	startVelocity: 40,
	elementCount: 70,
	dragFriction: 0.12,
	duration: 3000,
	stagger: 3,
	width: '10px',
	height: '10px',
	perspective: '500px',
	colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

const ConfettiEffect = ({ active }) => {
	return <Confetti active={active} config={config} />
}

const ConfettiButton = () => {
	const [setActive, active] = useState('false')

	return (
		<div className='mx-auto max-w-xl  sm:max-w-xl w-full mt-4'>
			<button
				type='submit'
				className='py-4 px-6 rounded-md mx-auto
			 max-w-md block cursor-pointer border-none
			 w-full font-semibold box-border button transition text-center 
			 transform active:scale-90 text-base leading-normal
			 text-buttonColor
			 bg-buttonBgColor
			 hover:bg-buttonBgColorDark
			 '
				onClick={() => {
					console.log('test')
				}}
			>
				{buttonText}
			</button>
		</div>
	)
}

export default ConfettiButton
