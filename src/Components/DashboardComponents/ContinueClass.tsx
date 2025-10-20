export default function ContinueClass(props: any) {
    return (
        <>
            <div className="flex flex-col bg-[#EEEEE4] max-w-[600px] rounded-3xl 
                            hover:scale-[1.02] transition-transform duration-500 ease-out shadow-lg hover:shadow-2xl">
                <div className="p-3 flex rounded-3xl bg-white gap-2 hover:shadow-lg transition-shadow duration-300">
                    <div className={`relative w-[200px] h-[146px] rounded-3xl bg-[${props.bg}] overflow-hidden group cursor-pointer`}>
                        <img src={props.image} alt="" 
                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[2deg]" />
                        <span className="absolute top-[9px] left-[11px] w-fit h-[24px] rounded-2xl bg-white p-2 flex justify-center items-center text-[12px] font-semibold
                                        shadow-md transition-all duration-300  group-hover:scale-105">
                            {props.materials} Materials
                        </span>
                    </div>
                    <div className="flex flex-col px-5 py-3">
                        <span className="w-fit h-[24px] rounded-2xl bg-[#E4F7EF] p-2 flex justify-center items-center text-[12px] font-semibold
                                        transition-all duration-300 hover:bg-[#B6F0C4] hover:scale-105">
                            {props.subject}
                        </span>
                        <p className="w-[243px] font-semibold text-[18px] leading-[20.6px] pt-2 tracking-[0em]
                                      transition-colors duration-300 hover:text-[#4414FC]">
                            {props.topic}
                        </p>
                        <div className="flex pt-4 items-center gap-10">
                            <div className="flex flex-col">
                                <p className="font-semibold text-[11.96px] leading-[11.32px] tracking-[0em] text-[#7A7A7A]">
                                    progress: <span className="text-black">{props.progress}%</span>
                                </p>
                                <div className="w-[195px] bg-gray-200 rounded-full h-2 m-auto mt-[9px] overflow-hidden">
                                    <div
                                        className="bg-green-500 h-2 rounded-full transition-all duration-700 ease-out animate-pulse"
                                        style={{ width: `${props.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                            <button className="w-[98px] h-[35px] shadow-[0px_3.33px_0px_0px_#E3E3DE] rounded-[29px] border border-[#E3E3DE] 
                                                font-[roboto] text-[16.66px] leading-[35.59px] tracking-[-0.02em] 
                                                transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:scale-110 hover:rotate-[1deg]">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 items-center py-3 px-4 hover: transition-colors duration-300 rounded-b-3xl cursor-pointer group">
                    <span className="bg-white w-7 h-7 rounded-2xl flex justify-center items-center 
                                     transition-transform duration-300 group-hover:scale-110">
                        <img src="/images/dashboardCourses/cup.svg" alt="" className="transition-transform duration-300 group-hover:rotate-[15deg]" />
                    </span>
                    <p className="pr-1 font-normal text-[14px] leading-[24px] tracking-[-0.01em]">
                        {props.dialog} : <span className="text-[#4414FC] underline group-hover:text-[#6B46C1] transition-colors duration-300">{props.recommendation}</span>
                    </p>
                    <img src="/images/dashboardCourses/arrow.svg" alt="" className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </div>
        </>
    );
}
