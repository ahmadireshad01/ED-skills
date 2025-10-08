import DashboardSideBar from "../../Components/DashboardComponents/DashboardSideBar";
import ContinueClass from "../../Components/DashboardComponents/ContinueClass";

export default function DashboardCoursesPage(){
    return(
        <div className="flex bg-[#fafaf5]">
            <div className="h-[940px] flex pl-1 fixed top-0 left-0">
                <DashboardSideBar />
            </div>
            <div className="mx-30 mt-11 w-full">
                <div className="flex items-center justify-between ">
                    <p className=" font-[Roboto] font-bold text-[51.75px] leading-[49.49px] tracking-[-0.02em]">Continue learning 📚</p>
                    <button className="flex items-center justify-center gap-1 shadow-[0px_5.33px_0px_0px_#FF3400] 
                        w-[147px] h-[58px] rounded-[29px] border border-orange-500 font-[roboto]
                        font-semibold text-[18.66px] leading-[35.59px] tracking-[-0.02em]
                        bg-white text-orange-600 transition-all duration-300 ease-out 
                        hover:bg-orange-500 hover:text-white hover:shadow-[0px_8px_20px_0px_rgba(255,52,0,0.4)] 
                        hover:scale-[1.05] active:scale-95 active:shadow-[0px_3px_10px_0px_rgba(255,52,0,0.3)]">
                        <img className="w-8 transition-transform duration-500 group-hover:rotate-[15deg] hover:rotate-[20deg]" 
                            src="/images/dashBoard/askAi.svg" alt="" />
                        Ask Ai
                    </button>
                </div>

                <div className="py-6 flex gap-7">
                    <ContinueClass/>
                    <ContinueClass/>
                </div>
            </div>
        </div>
    )
}