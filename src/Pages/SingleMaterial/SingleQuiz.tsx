import DashboardSideBar from "../../Components/DashboardComponents/DashboardSideBar.tsx";
import SingleQuestion from "../../Components/SingleQuestion.tsx";
import { Materials } from "../../data/Materials.ts";
import { questions } from "../../data/questions.ts";
import { useParams } from "react-router-dom";

export default function SingleQuiz() {
    const { id } = useParams();
    const selectedMaterial = Materials.find((m) => m.id === Number(id)) ?? Materials[0];

    return (
        <div className="bg-[#fafaf5] w-full h-full">
            <div className="h-screen z-50 flex pl-1 pb-4 fixed top-0 left-[20px] lg:left-[-3px]  min-h-[630px]">
                <DashboardSideBar />
            </div>
            <div className="flex flex-col px-4 sm:px-6 lg:ml-[120px] lg:mr-[50px] pt-[105px] lg:pt-[30px] pb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 lg:mb-3">
                    <p className="font-bold text-[14px] sm:text-[16px] leading-6 tracking-[-0.0125em] align-middle text-[#4414FC]">. {selectedMaterial?.topic ?? "Course topic"}</p>
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
                <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
                    {/* middle content */}
                    <div className="flex flex-col gap-4 sm:gap-6 w-full xl:w-[80%]">
                        <div className="w-full rounded-2xl h-fit flex flex-col lg:flex-row items-center bg-[#EEEEE4]" >
                            <div className="flex flex-col gap-3 p-4 sm:p-5 w-full lg:w-auto">
                                <span className="flex gap-2 sm:gap-3">
                                    <img className="w-[24px] sm:w-[28px]" src={selectedMaterial.typeImage} alt="" />
                                    <p className="font-semibold text-sm sm:text-base">{selectedMaterial.subject}</p>
                                </span>
                                <p className="font-semibold text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[40px] lg:leading-[48px] tracking-[-0.025em] align-bottom">{selectedMaterial.description}</p>
                                <div className={`flex flex-wrap gap-2 sm:gap-3 w-full lg:w-fit`}>
                                    <span className="w-fit h-[24px] rounded-2xl bg-white p-3 sm:p-4 flex justify-center items-center text-[11px] sm:text-[12px] font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-100">
                                        {selectedMaterial.firstRecommendation}
                                    </span>
                                    <span className="w-fit h-[24px] rounded-2xl bg-white p-3 sm:p-4 flex justify-center items-center text-[11px] sm:text-[12px] font-semibold shadow-md transition-all duration-300 ">
                                        {selectedMaterial.secondRecommendation}
                                    </span>
                                </div>
                                <button className="text-start bg-orange-500 w-[130px] rounded-3xl flex items-center justify-center h-[40px] text-white text-sm sm:text-base">Get Started</button>
                            </div>
                            <img className="w-full lg:w-[70%] object-cover rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none" src={selectedMaterial.image} alt="" />
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 xl:ml-2">
                            <span className="flex flex-col">
                                <p className="font-semibold text-[18px] sm:text-[20px] leading-6 tracking-[-0.002em]">{selectedMaterial.subject} Content</p>
                                <p className="font-medium text-xs sm:text-sm leading-5 tracking-normal align-bottom">{selectedMaterial.content}</p>
                            </span>
                            <button className="text-start bg-orange-500 w-[130px] rounded-3xl flex items-center justify-center h-[40px] text-white text-sm sm:text-base">Get Started</button>
                        </div>
                        <div className="flex flex-col gap-3">
                            {
                                questions.map((singleQuestion) => (
                                    <SingleQuestion questionName={singleQuestion.questionName} questionNumber={singleQuestion.questionNumber} key={singleQuestion.id} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="bg-white h-fit rounded-2xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 w-full xl:w-auto">
                        <p className="text-base sm:text-lg font-semibold text-gray-900">
                            Details Contents
                        </p>

                        <div className="flex flex-col gap-3 sm:gap-4 text-xs sm:text-sm text-gray-700">

                            <span className="flex items-center gap-3">
                                <img
                                    src="/images/SingleCourse/language.svg"
                                    alt="Language"
                                    className="w-5 h-5 opacity-70"
                                />
                                <p>English</p>
                            </span>

                            <span className="flex items-center gap-3">
                                <img
                                    src="/images/SingleCourse/points.svg"
                                    alt="Certificate"
                                    className="w-5 h-5 opacity-70"
                                />
                                <p> total points 100</p>
                            </span>

                            <span className="flex items-center gap-3">
                                <img
                                    src="/images/SingleCourse/certificate.svg"
                                    alt="Certificate"
                                    className="w-5 h-5 opacity-70"
                                />
                                <p>Certificate of Completion</p>
                            </span>

                            <span className="flex items-center gap-3">
                                <img
                                    src="/images/SingleCourse/points.svg"
                                    alt="Certificate"
                                    className="w-5 h-5 opacity-70"
                                />
                                <p> passing points {selectedMaterial.passingPoints}</p>
                            </span>

                        </div>



                    </div>
                </div>

            </div>
        </div>)
}