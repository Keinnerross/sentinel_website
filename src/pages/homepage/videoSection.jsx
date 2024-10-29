import Presentation from "../../common/videos/presentation"
import Tag from "../../common/tags/tags"
import { IoTimerOutline } from "react-icons/io5";

const VideoSection = () => {
    return (
        <div className="flex flex-col items-center pt-24">
            <div className="pb-16 text-center flex flex-col items-center gap-4 " >
                <Tag title="Aprende en un minuto" color="orange-500" Icon={IoTimerOutline} />
                <h2 className="text-4xl md:text-5xl font-semibold md:w-[70vw] px-4 md:px-0">Impulsamos flotas de alto rendimiento en todas las industrias del país.</h2>
            </div>

            <Presentation />
            {/* <div className="bg-slate-900 min-w-[70vw] min-h-[500px]"></div> */}
        </div>
    )
}

export default VideoSection