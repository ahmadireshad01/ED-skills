import DashboardSideBar from "../../Components/DashboardComponents/DashboardSideBar";
import ProfileCard from "../../Components/DashboardComponents/ProfileCard";
import ClassCard from "../../Components/DashboardComponents/ClassCard";
import InprogressCourse from "../../Components/DashboardComponents/InProgressCourse";
export default function DashboardHomePage() {
    const subjects = [
        {icon: 'allSubjectIcon', label: "All Subjects" , color: '#FFD5CA'},
        {icon: 'englishIcon', label: "English", color: '#FAEAFA'},
        {icon: 'businessIcon', label: "Business", color: '#E9F3AA'},
        {icon: 'mathematicsIcon', label: "Business", color: '#E9F3AA'}
    ]

    const Classes = [{id:1,bg: '#E9F3AA', image: "/images/ClassCard/classBgImage.svg", startingTime: "11:30", subject: "Goegraphy",topic: "The Secrets of the nature", participants:{first: "images/ClassCard/firstPersonImage.svg", second: "images/ClassCard/firstPersonImage.svg", third: "images/ClassCard/thirdPersonImage.svg"}  },
                     {id:2,bg: '#FAEAFA', image: "/images/ClassCard/classBgImage2.svg", startingTime: "1:00", subject: "Chemistry",topic: "Cordination Chemistry", participants:{first: "images/ClassCard/firstPersonImage.svg", second: "images/ClassCard/firstPersonImage.svg", third: "images/ClassCard/thirdPersonImage.svg"}  }
    ]

    const InProgressClasses = [{id:4, icon:"images/dashBoard/physicsIcon.svg", bg:"#b0d7c7", subject:"Physics", topic:"Unlock the Laws of Nature",content:"5 Material", progress:44,duration:"1 day"},
                               {id:5, icon:"images/dashBoard/englishIcon.svg", bg:"#FAEAFA", subject:"English", topic:"Learn the National language",content:"5 Material", progress:60,duration:"5 day"},
                               {id:6, icon:"images/dashBoard/businessIcon.svg", bg:"#E9F3AA", subject:"Business", topic:"Learn to Business here at Ed",content:"5 Material", progress:28,duration:"2 day"}
    ]
    return(
    <>
        <div className="flex bg-[#fafaf5]">
            <DashboardSideBar />
            {/*middle section*/}
            <div className="flex flex-col m-[30px] w-full ">
                <div className="flex items-center justify-between ">
                    <p className=" font-[Roboto] font-bold text-[51.75px] leading-[49.49px] tracking-[-0.02em]">Good Morning, Sophia 👋</p>
                    <button className="flex items-center justify-center gap-1 shadow-[0px_5.33px_0px_0px_#FF3400] 
                        w-[147px] h-[58px] rounded-[29px] border border-orange-500 font-[roboto]
                        font-semibold text-[18.66px] leading-[35.59px] tracking-[-0.02em]
                        bg-white text-orange-600 transition-all duration-300 ease-out 
                        hover:bg-orange-500 hover:text-white hover:shadow-[0px_8px_20px_0px_rgba(255,52,0,0.4)] 
                        hover:scale-[1.05] active:scale-95 active:shadow-[0px_3px_10px_0px_rgba(255,52,0,0.3)]">

                        <img className="w-8 transition-transform duration-500 group-hover:rotate-[15deg] hover:rotate-[20deg]" 
                            src="images/dashBoard/askAi.svg" alt="" />
                        Ask Ai
                    </button>

                </div>
                <div className="flex  gap-4  mt-8 w-full h-[98px]" >
                    {subjects.map((subject) => (
                        <div className=" border-[#E3E3DE] border-[1.33px] flex gap-4 rounded-2xl items-center justify-center  w-fit p-3 h-[72px]  shadow-[0px_2.33px_0px_0px_#E3E3DE] hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            <span className={`rounded-2xl bg-[${subject.color}] flex items-center justify-center w-[54px] h-[54px]`}><img className="" src={`/images/dashBoard/${subject.icon}.svg`} alt="" /></span>
                            <p className="font-roboto font-semibold text-[23.99px] leading-[42.65px] tracking-[0%] text-center">{subject.label}</p>
                        </div>
                    ))}
                </div>
                <div className="pt-3 pb-5 flex items-center justify-between pr-5">
                    <p className="font-recoleta font-semibold text-[31.99px] leading-[42.65px] tracking-[-0.01em]">Your Upcoming Class</p>
                    <button className="text-[#FF3400] font-pp-mori font-semibold text-[21.33px] leading-[31.99px] tracking-[0%] hover:text-orange-400 transition ease-in-out">view all</button>
                </div>
                <div className=" flex gap-8">
                    {
                        Classes.map((singleClass)=>(
                            <ClassCard key={singleClass.id}  bg={singleClass.bg} image={singleClass.image} startingTime={singleClass.startingTime} subject={singleClass.subject} topic={singleClass.topic} participants={singleClass.participants}/>
                        ))
                    }
                </div>
                <div>
                    <div className="py-5 pt-7 flex items-center justify-between pr-5">
                        <p className="font-recoleta font-semibold text-[31.99px] leading-[42.65px] tracking-[-0.01em]">In progress learning content</p>
                        <button className="text-[#FF3400] font-pp-mori font-semibold text-[21.33px] leading-[31.99px] tracking-[0%] hover:text-orange-400 transition ease-in-out">view all</button>
                    </div>
                    <div className="flex flex-col gap-4">
                        {
                            InProgressClasses.map((inProgressClass)=>(
                                <InprogressCourse key={inProgressClass.id} icon={inProgressClass.icon} bg={inProgressClass.bg} subject={inProgressClass.subject} topic={inProgressClass.topic} content={inProgressClass.content} progress={inProgressClass.progress} duration={inProgressClass.duration}/>
                            ))
                        }
                    </div>
                </div>

            </div>
            <ProfileCard/>
        </div>
    </>
)
}