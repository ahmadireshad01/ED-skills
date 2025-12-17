import DashboardSideBar from "../../Components/DashboardComponents/DashboardSideBar";
import { Materials } from "../../data/Materials.ts";

export default function SingleCoursePage() {
    // Use the first material as a placeholder until course selection is wired.
    const firstMaterial = Materials[0];

    return (
        <>
            <div className="h-screen z-50 flex pl-1 pb-4 fixed top-0 left-[20px] lg:left-[-3px]  min-h-[630px]">
                <DashboardSideBar />
            </div>
            <div className="flex flex-col lg:ml-[120px] lg:mr-[50px] pt-[105px] lg:pt-[30px]">
                <div className="flex items-center justify-between">
                    <p className="font-bold text-[16px] leading-6 tracking-[-0.0125em] align-middle text-[#4414FC]">. {firstMaterial?.topic ?? "Course topic"}</p>
                    <button
                        className="
                                    flex items-center justify-center gap-1
                                    shadow-[0px_3px_0px_0px_#FF3400] 
                                    w-[100px] sm:w-[115px] md:w-[115px]
                                    h-[38px] sm:h-[43px] md:h-[43px]
                                    rounded-[22px] border border-orange-500
                                    font-[roboto] font-semibold 
                                    text-[13px] sm:text-[17px] md:text-[14px]
                                    leading-[1.8] tracking-[-0.02em]
                                    bg-white
                                    transition-all duration-300 ease-out  
                                    hover:shadow-[0px_8px_20px_0px_rgba(255,52,0,0.4)]  
                                    active:shadow-[0px_3px_10px_0px_rgba(255,52,0,0.3)]
                                    "
                    >
                        <img
                            className="
                                        w-4 sm:w-[18px] md:w-[18px] 
                                        transition-transform duration-500 
                                        group-hover:rotate-[15deg] hover:rotate-[20deg]
                                        "
                            src="/images/dashBoard/askAi.svg"
                            alt=""
                        />
                        Ask Ai
                    </button>
                </div>
                {/* main page content */}
                <div className="flex">
                    <div className="flex flex-col gap-6">
                        <div className="w-full rounded-2xl h-fit flex items-center bg-[#EEEEE4]" >
                            <div className="flex flex-col gap-3 p-5">
                                <span className="flex gap-3">
                                    <img className="w-[28px]" src={firstMaterial.typeImage} alt="" />
                                    <p className="font-semibold">{firstMaterial.subjec}</p>
                                </span>
                                <p className="font-semibold text-[40px] leading-[48px] tracking-[-0.025em] align-bottom">{firstMaterial.description}</p>
                                <div className={`flex gap-3 w-full lg:w-fit`}>
                                    <span className="w-fit h-[24px] rounded-2xl bg-white p-2 flex justify-center items-center text-[12px] font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-100">
                                        {firstMaterial.firstRecommendation}
                                    </span>
                                    <span className="w-fit h-[24px] rounded-2xl bg-white p-2 flex justify-center items-center text-[12px] font-semibold shadow-md transition-all duration-300 ">
                                        {firstMaterial.secondRecommendation}
                                    </span>
                                </div>
                                <button className="text-start bg-orange-500 w-[130px] rounded-3xl flex items-center justify-center h-[40px]  text-white">get started</button>
                            </div>
                            <img className="lg:w-[70%]" src={firstMaterial.image} alt="" />
                        </div>
                        <div className="flex justify-between items-center xl:ml-2">
                            <span className="flex flex-col">
                                <p className="font-semibold text-[20px] leading-6 tracking-[-0.002em]">{firstMaterial.subjec} Content</p>
                                <p className="font-medium text-sm leading-5 tracking-normal align-bottom">{firstMaterial.material}</p>
                            </span>
                            <button className="text-start bg-orange-500 w-[130px] rounded-3xl flex items-center justify-center h-[40px]  text-white">get started</button>
                        </div>
                    </div>
                    <div className="w-[300px] h-screen">
                    </div>
                </div>

            </div>
        </>)
}