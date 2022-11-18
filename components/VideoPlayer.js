import dynamic from 'next/dynamic'
import { Heading, SectionTitle } from '../components/index'

const ReactPlayer = dynamic(() => import('react-player/lazy'), {
	ssr: false,
})

const VideoPlayer = ({
	headingText,
	sectionText,
	video,
	controls,
	light,
	playing,
}) => {
	return (
		<>
			<Heading text={headingText} />
			<SectionTitle text={sectionText} />
			<div className='border-box  pb-6 mx-auto max-w-md  w-full  lg:max-w-4xl'>
				<div className='player-wrapper'>
					<ReactPlayer
						url={video}
						className='react-player'
						width='100%'
						height='100%'
						light={light}
					/>
				</div>
			</div>
		</>
	)
}

export default VideoPlayer
