import dynamic from 'next/dynamic'
import { Heading, SectionTitle } from '../components/index'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const VideoPlayer = ({
	headingText,
	sectionText,
	video,
	controls,
	light,
	playing,
}) => {
	return (
		<div className='w-full border-box pt-2  pb-2 pl-2 pr-2 '>
			<div className='mx-auto max-w-xl'>
				<Heading text={headingText} />
				<SectionTitle text={sectionText} />
				<iframe
					width='560'
					height='315'
					src='https://www.youtube.com/embed/Bcbbtt0YkH0'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
				></iframe>
			</div>
		</div>
	)
}

export default VideoPlayer
