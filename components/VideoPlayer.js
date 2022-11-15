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
		<div className='pb-6 border-box pt-6  mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl'>
			<Heading text={headingText} />
			<SectionTitle text={sectionText} />
			<div className='player-wrapper'>
				<ReactPlayer
					url={video}
					className='react-player'
					width='100%'
					height='100%'
				/>
			</div>
		</div>
	)
}

export default VideoPlayer
