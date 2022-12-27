import roadmap_vid from '../../videos/roadmap_hd.mp4'
import VideoPlayer from '../VideoPlayer'

const Roadmap = ({ enable_Modal }) => {
  return (
    <div className="mb-14" data-aos="fade-up">
      <div className="text-red-700 font-semibold text-center   text-4xl pb-14 pt-10">
        ROADMAP
      </div>

      <div className="flex justify-center">
        <div className="w-[60%]">
          <VideoPlayer url={roadmap_vid} id={1} />
        </div>
      </div>
    </div>
  )
}

export default Roadmap
