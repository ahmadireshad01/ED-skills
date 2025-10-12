import DashboardSideBar from "../../Components/DashboardComponents/DashboardSideBar";
import ContinueClass from "../../Components/DashboardComponents/ContinueClass";

import { useState } from "react";
import { List} from "lucide-react";
import Material from "../../Components/DashboardComponents/Material";

export default function DashboardCoursesPage(){
    const ContinueClasses =[
        {id: 12, materials:1, bg:"#E3EFFF", image:"/images/dashboardCourses/courseImage.svg", subject:"Geography", topic:"Understand the Land, Oceans and Beyond", progress:"80", dialog:"Increase your knowledge with", recommendation:"Unlock the Power of Place"},
        {id: 23, materials:2, bg:"#FAEAFA", image:"/images/dashboardCourses/courseImage2.svg", subject:"Computer & AI", topic:"Unlock the Power of Creativity with Generative AI", progress:"30", dialog:"Next, you can dive into", recommendation:"Create Using Generative AI"},
    ]

    const Materials = [{id: 1 ,type:"StartedQuiz", image:"/images/Materials/materialImage.svg" , material:"12 Chepters", bg:"#E8E2FF", subjec:"Qiuz", typeImage:"/images/Materials/QuizTypeImage.svg", topic:"5 Essential Steps to Excel in Mathematics", firstRecommendation:"Mathematics", secondRecommendation:"Urgent", points:"20", passingPoints:"20"},
                       {id: 2,type:"StartedCourse", image:"/images/Materials/materialImage2.svg" , material:"10 Pages", bg:"#FFD5CA", subjec:"Pages", typeImage:"/images/Materials/coursesType.svg", topic:"10 Usability Principles to Enhance Generative AI", firstRecommendation:"Computer", secondRecommendation:"Urgent", progress:44},
                       {id: 3,type:"NotStartedCourse", image:"/images/Materials/materialImage3.svg" , material:"12 Questions", bg:"#E8E2FF", subjec:"Learning Path", typeImage:"/images/Materials/QuizTypeImage.svg", topic:"Building and Growing a Thriving Business", firstRecommendation:"Mathematics", secondRecommendation:"Urgent"},
                       {id: 4,type:"StartedCourse", image:"/images/Materials/materialImage.svg" , material:"10 Pages", bg:"#E8E2FF", subjec:"Courses", typeImage:"/images/Materials/coursesType.svg", topic:"10 Usability Principles to Enhance Generative AI", firstRecommendation:"Computer", secondRecommendation:"Urgent", progress:44},
                       {id: 5,type:"StartedQuiz", image:"/images/Materials/materialImage.svg" , material:"12 Chepters", bg:"#E8E2FF", subjec:"Qiuz", typeImage:"/images/Materials/QuizTypeImage.svg", topic:"5 Essential Steps to Excel in Mathematics", firstRecommendation:"Mathematics", secondRecommendation:"Urgent", points:"20", passingPoints:"20"},
                       {id: 6,type:"StartedCourse", image:"/images/Materials/materialImage2.svg" , material:"10 Pages", bg:"#FFD5CA", subjec:"Pages", typeImage:"/images/Materials/coursesType.svg", topic:"10 Usability Principles to Enhance Generative AI", firstRecommendation:"Computer", secondRecommendation:"Urgent", progress:44},
                       {id: 7,type:"NotStartedCourse", image:"/images/Materials/materialImage3.svg" , material:"12 Questions", bg:"#E8E2FF", subjec:"Learning Path", typeImage:"/images/Materials/QuizTypeImage.svg", topic:"Building and Growing a Thriving Business", firstRecommendation:"Mathematics", secondRecommendation:"Urgent"},
                       {id: 8,type:"StartedCourse", image:"/images/Materials/materialImage.svg" , material:"10 Pages", bg:"#E8E2FF", subjec:"Courses", typeImage:"/images/Materials/coursesType.svg", topic:"10 Usability Principles to Enhance Generative AI", firstRecommendation:"Computer", secondRecommendation:"Urgent", progress:44}
    ]

    const [activetTab, setActiveTab] = useState('allStatus')
    const [activeList, setActiveList] = useState('grid')

    const [open , setOpen] = useState(false)
    
    return(
        <div className="flex bg-[#fafaf5]">
            <div className="h-[940px] flex pl-1 fixed top-0 left-[-3px]">
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
                    {
                        ContinueClasses.map((continueClass)=>(
                            <ContinueClass key={continueClass} materials={continueClass.materials} bg={continueClass.bg} image={continueClass.image} subject={continueClass.subject} topic={continueClass.topic} progress={continueClass.progress } dialog={continueClass.dialog} recommendation={continueClass.recommendation}/>
                        ))
                    }
                </div>
                <div className="py-4 ">
                    <div className="relative mb-6">
                            <p className="flex gap-3 items-center  font-[] font-semibold text-[24px] leading-[32px] tracking-[-0.01em]">All Materials <span className="text-center rounded-lg font-semibold text-[13.6px] leading-[27.2px] tracking-[-0.01em] w-[34px] h-[28px] bg-[#EEEEE4]">24</span> <button onClick={() => setOpen(!open)}>{open ? '⏶' : '⏷'}</button></p>
                            { open && (
                            <div className="transition  flex flex-col absolute left-[16%] top-21">
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-between">  
                        <div className="w-[371px] h-[48px] flex items-center justify-center rounded-3xl bg-[#EEEEE4]">
                            <button onClick={() => setActiveTab('allStatus')} className={`font-[] font-semibold text-[16px] leading-[27.2px] tracking-[-0.01em] w-[120px] h-[39px] rounded-3xl  ${ activetTab === "allStatus" ? "bg-white" : "bg-[#EEEEE4]"}`}>All Status</button>
                            <button  onClick={() => setActiveTab('notStarted')} className={`font-[] font-semibold text-[16px] leading-[27.2px] tracking-[-0.01em] w-[120px] h-[39px] rounded-3xl  ${ activetTab === "notStarted" ? "bg-white" : "bg-[#EEEEE4]"}`}>Not Started</button>
                            <button  onClick={() => setActiveTab('inProgress')} className={`font-[] font-semibold text-[16px] leading-[27.2px] tracking-[-0.01em] w-[120px] h-[39px] rounded-3xl  ${ activetTab === "inProgress" ? "bg-white" : "bg-[#EEEEE4]"}`}>In Progress</button>
                        </div>
                        <div className="w-[335px] h-[40px] flex items-center gap-2  rounded-full p-1">
                            <div className="relative">
                            <input className="pl-10 w-[120px] flex items-center rounded-full px-3 py-1.5 " placeholder="Search" type="text" name="" id="" />
                            <img className="absolute top-[23%] left-[5%]" src="/images/dashboardCourses/search.svg" alt="" />
                            </div>
                            <button className="flex gap-3 items-center"><img src="/images/dashboardCourses/filter.svg" alt="" />Add Filter</button>
                            <div className="flex items-center bg-[#f6f5f2] gap-2  rounded-lg p-1">
                                <button onClick={() => setActiveList('grid')} className={`p-2  rounded-lg  ${ activeList === 'grid' ?  "bg-[#dbdad7]" : "bg-[#f6f5f2]"}`}>
                                    <img src="/images/dashboardCourses/2x2layout.svg" alt="" />
                                </button>
                                <button onClick={() => setActiveList('list')} className={`p-2  rounded-lg  ${ activeList === 'list' ?  "bg-[#dbdad7]" : "bg-[#f6f5f2]"}`}>
                                    <List size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7">
                    {
                        Materials.map((material) => (
                            <Material key={material.id} image={material.image} typeImage={material.typeImage} subject={material.subjec} bg={material.bg} materials={material.material} type={material.type} topic={material.topic} firstRecommendation={material.firstRecommendation} secondRecommendation={material.secondRecommendation} points={material.points} passingPoints={material.passingPoints} progress={material.progress}/>
                        ))
                    }
                    
                </div>

                
            </div>
        </div>
    )
}