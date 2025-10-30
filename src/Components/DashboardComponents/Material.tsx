import { Layout } from "lucide-react"
import CircularProgress from "./CircleProgress"

export default function Material(props: any) {
  return (
    <div className={`${props.layout === 'list' ? "w-full" : "w-[291px]"} pb-3 bg-white rounded-2xl pt-0.5 
                    shadow-md hover:shadow-xl transition-all duration-500 ease-out 
                    hover:scale-[1.02] hover:-translate-y-1 cursor-pointer group flex flex-col ${props.layout === "list" ? "md:flex-row md:items-center md:gap-5" : "items-center"}`}>

      {/* Top image container */}
      {props.layout === 'grid' && (
        <div className={`relative h-[98px] bg-[${props.bg}] w-[95%] rounded-xl m-1 
        overflow-hidden flex items-center justify-center transition-all duration-500 ease-in-out
        hover:brightness-110 hover:shadow-md`}>
          <img
            className="absolute top-[1%] transition-transform duration-500 ease-out 
       group-hover:scale-110 group-hover:rotate-1"
            src={props.image}
            alt=""
          />

          <span className="absolute top-[11%] left-[4%] px-2 flex justify-center items-center 
          w-[78px] h-[25px] rounded-2xl font-ppMori font-semibold text-[10.61px] leading-[15.09px] 
          text-center bg-white shadow-sm transition-all duration-300
          hover:bg-gray-100 hover:scale-105">
            {props.materials}
          </span>
        </div>
      )}


      {/* Text and buttons */}
      <div className={`p-3 gap-2 flex   ${props.layout === "grid" ? "flex-col" : "flex-row"} justify-between transition-all duration-300 group-hover:translate-y-[-2px]`}>
        <div className={`flex flex-col `}>
          <div className="flex flex-wrap gap-1 items-center">
            <span className="text-gray-500 flex gap-1 items-center transition-all duration-300 hover:scale-[1.03]">
              <img
                src={props.typeImage}
                alt=""
                className="transition-transform duration-300 hover:scale-110 hover:rotate-3"
              />
              {props.subject}
            </span>
            {props.isCertified && (
              <span className="flex ml-1 items-center gap-1">
                <span className="">&#8226;</span>
                <span className="flex gap-2 text-[#4414FC]"> Certified <img src="/images/Materials/certificateImage.svg" alt="" /></span>
              </span>)
            }

          </div>
          <p className="font-bold py-3 leading-[20px] text-[16px] transition-all duration-300 
                        hover:text-gray-700 hover:scale-[1.02]">
            {props.topic}
          </p>
        </div>


        <div className={`flex gap-3 `}>
          <span className="w-fit h-[24px] rounded-2xl bg-[#EEEEE4] p-2 flex justify-center items-center text-[12px] font-semibold
                          shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-100">
            {props.firstRecommendation}
          </span>
          <span className="w-fit h-[24px] rounded-2xl bg-[#EEEEE4] p-2 flex justify-center items-center text-[12px] font-semibold
                          shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-100">
            {props.secondRecommendation}
          </span>
        </div>

        {props.type === "StartedCourse" && (
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2 px-2 transition-all duration-300 hover:scale-[1.02]">
              <p className="text-gray-500">Progress:</p>
              <div className="transition-transform duration-700 hover:rotate-[360deg]">
                <CircularProgress percentage={props.progress} size={30} strokeWidth={4} />
              </div>
              <p className="font-pp-mori font-semibold text-[17px]">{props.progress}%</p>
            </div>

            <button className="w-[85px] h-[35px] shadow-[0px_3.33px_0px_0px_#E3E3DE] rounded-[29px] border border-[#E3E3DE] 
                                font-[roboto] font-bold text-[16.66px] leading-[35.59px] tracking-[-0.02em] 
                                transition-all duration-300 hover:bg-black hover:text-white hover:shadow-md hover:scale-105">
              Continue
            </button>
          </div>
        )}

        {props.type === "StartedQuiz" && (
          <div className="flex items-center justify-between pt-4">
            <div className="transition-all duration-300 hover:scale-[1.02]">
              <span className="flex gap-1 items-center font-semibold text-[17px]">
                <img className="w-5 transition-transform duration-500 hover:rotate-6" src="/images/Materials/points.svg" alt="" />
                {props.points} <span className="text-gray-500">pts</span>
              </span>
              <p className="text-gray-500">Passing point {props.passingPoints} pts</p>
            </div>
            <button className="w-[78px] h-[35px] shadow-[0px_3.33px_0px_0px_#E3E3DE] rounded-[29px] border border-[#E3E3DE] 
                                font-[roboto] text-[16.66px] font-semibold leading-[35.59px] tracking-[-0.02em] 
                                transition-all duration-300 hover:bg-black hover:text-white hover:shadow-md hover:scale-105">
              View
            </button>
          </div>
        )}

        {props.type === "NotStartedCourse" && (
          <div className="flex items-center justify-between pt-4">
            <p className="text-gray-500">Not Started</p>
            <button className="w-[78px] h-[35px] shadow-[0px_3.33px_0px_0px_#E3E3DE] rounded-[29px] border border-[#E3E3DE] 
                                font-[roboto] text-[16.66px] font-semibold leading-[35.59px] tracking-[-0.02em] 
                                transition-all duration-300 hover:bg-black hover:text-white hover:shadow-md hover:scale-105">
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
