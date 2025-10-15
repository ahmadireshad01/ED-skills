
import CircularProgress from "../../Components/DashboardComponents/CircleProgress";


export default function InprogressCourse(props: any) {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center sm:items-center w-[100%] lg:w-full  max-w-full h-auto lg:h-[85px] sm:h-[228px] rounded-2xl bg-white px-3 py-3 sm:py-4 lg:py-0 gap-3 sm:gap-1.5
    sm:shadow-md shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1 cursor-pointer">

                {/* Left section: icon + subject/topic */}
                <div className="flex items-start sm:items-center w-full sm:w-[320px] gap-3 sm:gap-5">
                    <span className={`rounded-lg w-[54px] h-[54px] bg-[${props.bg}] flex items-center justify-center 
            transition-transform duration-500 hover:rotate-6 hover:scale-110 hover:shadow-md`}>
                        <img className="w-[27px] transition-transform duration-500 group-hover:scale-110" src={props.icon} alt="" />
                    </span>

                    <div className="flex flex-col gap-1 transition-all duration-300">
                        <span className="flex items-center justify-center font-pp-mori font-semibold text-[11.63px] leading-[15.09px] 
                tracking-[0%] w-fit px-1 h-[24px] border border-gray-400 rounded-2xl text-center 
                transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                            {props.subject}
                        </span>
                        <p className="font-inter-tight font-semibold text-[17.33px] leading-[31.99px] tracking-[0%] 
                transition-all duration-300 hover:text-gray-700 hover:scale-[1.02]">
                            {props.topic}
                        </p>
                    </div>
                </div>

                {/* Middle section: content, progress, duration */}
                <div className="flex  sm:flex-row sm:items-center justify-between w-full sm:w-auto gap-3 sm:gap-12">
                    {/* Content */}
                    <div className="flex flex-col gap-1 items-start sm:items-center transition-all duration-300 hover:scale-[1.03]">
                        <p className="text-[#6B6B6B] font-pp-mori font-normal text-[16.66px] leading-[31.99px] tracking-[-0.02em]">Content</p>
                        <p className="font-pp-mori font-semibold text-[17.33px] leading-[31.99px] tracking-[-0.02em]">{props.content}</p>
                    </div>

                    {/* Progress */}
                    <div className="flex flex-col gap-1 items-start sm:items-center transition-all duration-300 hover:scale-[1.03]">
                        <p className="text-[#6B6B6B] font-pp-mori font-normal text-[16.66px] leading-[31.99px] tracking-[-0.02em]">Progress</p>
                        <div className="flex items-center gap-2">
                            <div className="transition-transform duration-500 hover:rotate-[360deg]">
                                <CircularProgress percentage={props.progress} size={40} strokeWidth={4} />
                            </div>
                            <p className="font-pp-mori font-semibold text-[17.33px] leading-[31.99px] tracking-[-0.02em]">{props.progress}%</p>
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="flex flex-col gap-1 items-start sm:items-center transition-all duration-300 hover:scale-[1.03]">
                        <p className="text-[#6B6B6B] font-pp-mori font-normal text-[16.66px] leading-[31.99px] tracking-[-0.02em]">Duration</p>
                        <div className="flex items-center gap-1">
                            <img className="w-[23px] transition-transform duration-500 hover:rotate-12" src="/images/dashBoard/clock.svg" alt="" />
                            <p className="font-pp-mori font-semibold text-[17.33px] leading-[31.99px] tracking-[-0.02em]">{props.duration}</p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <button className="w-full sm:w-[118px] h-[36px] shadow-[0px_3.33px_0px_0px_#E3E3DE] rounded-[29px] border border-[#E3E3DE] 
                    font-[roboto] font-semibold text-[18.66px] leading-[35.59px] tracking-[-0.02em] 
                    transition-all duration-300 hover:bg-black hover:text-white hover:shadow-md hover:scale-105">
                    Start
                </button>
            </div>

        </>)
}