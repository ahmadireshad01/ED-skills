import DashboardSideBar from "../../Components/DashboardComponents/DashboardSideBar";
import ContinueClass from "../../Components/DashboardComponents/ContinueClass";

import { useState } from "react";
import { List } from "lucide-react";
import Material from "../../Components/DashboardComponents/Material";

export default function DashboardCoursesPage() {
    const [layout, setLayout] = useState('grid')
    const ContinueClasses = [
        { id: 12, materials: 1, bg: "#E3EFFF", image: "/images/dashboardCourses/courseImage.svg", subject: "Geography", topic: "Understand the Land, Oceans and Beyond", progress: "80", dialog: "Increase your knowledge with", recommendation: "Unlock the Power of Place" },
        { id: 23, materials: 2, bg: "#FAEAFA", image: "/images/dashboardCourses/courseImage2.svg", subject: "Computer & AI", topic: "Unlock the Power of Creativity with Generative AI", progress: "30", dialog: "Next, you can dive into", recommendation: "Create Using Generative AI" },
    ]

    const Materials = [
        { isCertified: true, status: 'inProgress', id: 1, type: "StartedQuiz", image: "/images/Materials/materialImage.svg", material: "12 Chepters", bg: "#E8E2FF", subjec: "Quiz", typeImage: "/images/Materials/QuizTypeImage.svg", topic: "5 Essential Steps to Excel in Mathematics", firstRecommendation: "Mathematics", secondRecommendation: "Urgent", points: "20", passingPoints: "20" },
        { isCertified: false, status: 'inProgress', id: 2, type: "StartedCourse", image: "/images/Materials/materialImage2.svg", material: "10 Pages", bg: "#FFD5CA", subjec: "Pages", typeImage: "/images/Materials/coursesType.svg", topic: "10 Usability Principles to Enhance Generative AI", firstRecommendation: "Computer", secondRecommendation: "Urgent", progress: 44 },
        { isCertified: false, status: 'notStarted', id: 3, type: "NotStartedCourse", image: "/images/Materials/materialImage3.svg", material: "12 Questions", bg: "#E8E2FF", subjec: "Learning Path", typeImage: "/images/Materials/QuizTypeImage.svg", topic: "Building and Growing a Thriving Business", firstRecommendation: "Mathematics", secondRecommendation: "Urgent" },
        { isCertified: false, status: 'inProgress', id: 4, type: "StartedCourse", image: "/images/Materials/materialImage.svg", material: "10 Pages", bg: "#E8E2FF", subjec: "Courses", typeImage: "/images/Materials/coursesType.svg", topic: "10 Usability Principles to Enhance Generative AI", firstRecommendation: "Computer", secondRecommendation: "Urgent", progress: 44 },
        { isCertified: false, status: 'inProgress', id: 5, type: "StartedQuiz", image: "/images/Materials/materialImage.svg", material: "12 Chepters", bg: "#E8E2FF", subjec: "Quiz", typeImage: "/images/Materials/QuizTypeImage.svg", topic: "5 Essential Steps to Excel in Mathematics", firstRecommendation: "Mathematics", secondRecommendation: "Urgent", points: "20", passingPoints: "20" },
        { isCertified: false, status: 'inProgress', id: 6, type: "StartedCourse", image: "/images/Materials/materialImage2.svg", material: "10 Pages", bg: "#FFD5CA", subjec: "Pages", typeImage: "/images/Materials/coursesType.svg", topic: "10 Usability Principles to Enhance Generative AI", firstRecommendation: "Computer", secondRecommendation: "Urgent", progress: 44 },
        { isCertified: false, status: 'notStarted', id: 7, type: "NotStartedCourse", image: "/images/Materials/materialImage3.svg", material: "12 Questions", bg: "#E8E2FF", subjec: "Learning Path", typeImage: "/images/Materials/QuizTypeImage.svg", topic: "Building and Growing a Thriving Business", firstRecommendation: "Mathematics", secondRecommendation: "Urgent" },
        { isCertified: false, status: 'inProgress', id: 9, type: "StartedCourse", image: "/images/Materials/materialImage.svg", material: "10 Pages", bg: "#E8E2FF", subjec: "Courses", typeImage: "/images/Materials/coursesType.svg", topic: "10 Usability Principles to Enhance Generative AI", firstRecommendation: "Computer", secondRecommendation: "Urgent", progress: 44 },
        { isCertified: false, status: 'inProgress', id: 10, type: "StartedQuiz", image: "/images/Materials/materialImage.svg", material: "12 Chepters", bg: "#E8E2FF", subjec: "Quiz", typeImage: "/images/Materials/QuizTypeImage.svg", topic: "5 Essential Steps to Excel in Mathematics", firstRecommendation: "Mathematics", secondRecommendation: "Urgent", points: "20", passingPoints: "20" },
        { isCertified: false, status: 'inProgress', id: 11, type: "StartedCourse", image: "/images/Materials/materialImage2.svg", material: "10 Pages", bg: "#FFD5CA", subjec: "Pages", typeImage: "/images/Materials/coursesType.svg", topic: "10 Usability Principles to Enhance Generative AI", firstRecommendation: "Computer", secondRecommendation: "Urgent", progress: 44 },
        { isCertified: false, status: 'notStarted', id: 12, type: "NotStartedCourse", image: "/images/Materials/materialImage3.svg", material: "12 Questions", bg: "#E8E2FF", subjec: "Learning Path", typeImage: "/images/Materials/QuizTypeImage.svg", topic: "Building and Growing a Thriving Business", firstRecommendation: "Mathematics", secondRecommendation: "Urgent" },
        { isCertified: false, status: 'inProgress', id: 13, type: "StartedCourse", image: "/images/Materials/materialImage.svg", material: "10 Pages", bg: "#E8E2FF", subjec: "Courses", typeImage: "/images/Materials/coursesType.svg", topic: "10 Usability Principles to Enhance Generative AI", firstRecommendation: "Computer", secondRecommendation: "Urgent", progress: 44 },
        { isCertified: false, status: 'inProgress', id: 14, type: "StartedQuiz", image: "/images/Materials/materialImage.svg", material: "12 Chepters", bg: "#E8E2FF", subjec: "Quiz", typeImage: "/images/Materials/QuizTypeImage.svg", topic: "5 Essential Steps to Excel in Mathematics", firstRecommendation: "Mathematics", secondRecommendation: "Urgent", points: "20", passingPoints: "20" },
        { isCertified: false, status: 'inProgress', id: 15, type: "StartedCourse", image: "/images/Materials/materialImage2.svg", material: "10 Pages", bg: "#FFD5CA", subjec: "Pages", typeImage: "/images/Materials/coursesType.svg", topic: "10 Usability Principles to Enhance Generative AI", firstRecommendation: "Computer", secondRecommendation: "Urgent", progress: 44 },
        { isCertified: false, status: 'notStarted', id: 16, type: "NotStartedCourse", image: "/images/Materials/materialImage3.svg", material: "12 Questions", bg: "#E8E2FF", subjec: "Learning Path", typeImage: "/images/Materials/QuizTypeImage.svg", topic: "Building and Growing a Thriving Business", firstRecommendation: "Mathematics", secondRecommendation: "Urgent" },
        { isCertified: false, status: 'inProgress', id: 17, type: "StartedCourse", image: "/images/Materials/materialImage.svg", material: "10 Pages", bg: "#E8E2FF", subjec: "Courses", typeImage: "/images/Materials/coursesType.svg", topic: "10 Usability Principles to Enhance Generative AI", firstRecommendation: "Computer", secondRecommendation: "Urgent", progress: 44 },
        { isCertified: false, status: 'inProgress', id: 18, type: "StartedQuiz", image: "/images/Materials/materialImage.svg", material: "12 Chepters", bg: "#E8E2FF", subjec: "Quiz", typeImage: "/images/Materials/QuizTypeImage.svg", topic: "5 Essential Steps to Excel in Mathematics", firstRecommendation: "Mathematics", secondRecommendation: "Urgent", points: "20", passingPoints: "20" },
        { isCertified: false, status: 'inProgress', id: 19, type: "StartedCourse", image: "/images/Materials/materialImage2.svg", material: "10 Pages", bg: "#FFD5CA", subjec: "Pages", typeImage: "/images/Materials/coursesType.svg", topic: "10 Usability Principles to Enhance Generative AI", firstRecommendation: "Computer", secondRecommendation: "Urgent", progress: 44 },
        { isCertified: false, status: 'notStarted', id: 20, type: "NotStartedCourse", image: "/images/Materials/materialImage3.svg", material: "12 Questions", bg: "#E8E2FF", subjec: "Learning Path", typeImage: "/images/Materials/QuizTypeImage.svg", topic: "Building and Growing a Thriving Business", firstRecommendation: "Mathematics", secondRecommendation: "Urgent" },
        { isCertified: false, status: 'inProgress', id: 21, type: "StartedCourse", image: "/images/Materials/materialImage.svg", material: "10 Pages", bg: "#E8E2FF", subjec: "Courses", typeImage: "/images/Materials/coursesType.svg", topic: "10 Usability Principles to Enhance Generative AI", firstRecommendation: "Computer", secondRecommendation: "Urgent", progress: 44 },
        { isCertified: false, status: 'inProgress', id: 22, type: "StartedQuiz", image: "/images/Materials/materialImage.svg", material: "12 Chepters", bg: "#E8E2FF", subjec: "Qui-==--z", typeImage: "/images/Materials/QuizTypeImage.svg", topic: "5 Essential Steps to Excel in Mathematics", firstRecommendation: "Mathematics", secondRecommendation: "Urgent", points: "20", passingPoints: "20" },
        { isCertified: false, status: 'inProgress', id: 23, type: "StartedCourse", image: "/images/Materials/materialImage2.svg", material: "10 Pages", bg: "#FFD5CA", subjec: "Pages", typeImage: "/images/Materials/coursesType.svg", topic: "10 Usability Principles to Enhance Generative AI", firstRecommendation: "Computer", secondRecommendation: "Urgent", progress: 44 },
        { isCertified: false, status: 'notStarted', id: 24, type: "NotStartedCourse", image: "/images/Materials/materialImage3.svg", material: "12 Questions", bg: "#E8E2FF", subjec: "Learning Path", typeImage: "/images/Materials/QuizTypeImage.svg", topic: "Building and Growing a Thriving Business", firstRecommendation: "Mathematics", secondRecommendation: "Urgent" },
        { isCertified: false, status: 'inProgress', id: 8, type: "StartedCourse", image: "/images/Materials/materialImage.svg", material: "10 Pages", bg: "#E8E2FF", subjec: "Courses", typeImage: "/images/Materials/coursesType.svg", topic: "10 Usability Principles to Enhance Generative AI", firstRecommendation: "Computer", secondRecommendation: "Urgent", progress: 44 },
    ]
    const [filter, setFilter] = useState('all')
    const [activetTab, setActiveTab] = useState('allStatus')
    const [activeList, setActiveList] = useState('grid')
    const [filterInput, setFilterInput] = useState('')
    const [open, setOpen] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [subjectFilter, setSubjectFilter] = useState('')

    let filteredMaterials = (filter === "all" ? Materials : Materials.filter(material => material.status === filter))
        .filter(material => material.topic.toLowerCase().includes(filterInput.toLowerCase()))
        .filter(material => subjectFilter === '' || material.subjec.toLowerCase() === subjectFilter.toLowerCase())

    const addFilterBtn = () => {
        filteredMaterials = Materials.filter(material => material.subjec.toLowerCase() === subjectFilter.toLowerCase())
        console.log(filteredMaterials)
    }
    return (
        <div className="flex bg-[#fafaf5] h-screen overflow-hidden">
            <div className="h-screen z-50 flex pl-1 pb-4 fixed top-0 left-[-3px]">
                <DashboardSideBar />
            </div>
            <div className="px-[9%] lg:pt-11 pt-[90px] lg:ml-[25px] xl:ml-0 w-full overflow-y-auto overflow-x-hidden scrollbar-hide">
                <div
                    className="
                        flex w-full sm:items-center sm:justify-between items-center sm:pt-0 pt-2  gap-0 sm:gap-4 
                        pl-5  mt-[20px] sm:mx-0 sm:mt-0
                        "
                >
                    <p
                        className="
                            font-[Roboto] font-bold 
                            text-[21px] sm:text-[30px] lg:text-[38.75px] 
                            leading-[1.2] md:leading-[49.49px] 
                            tracking-[-0.02em] w-full sm:w-auto"
                    >
                        Continue learning 📚
                    </p>

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
                                hover:bg-orange-500 hover:text-white 
                                hover:shadow-[0px_8px_20px_0px_rgba(255,52,0,0.4)] 
                                hover:scale-[1.05] active:scale-95 
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

                <div className="py-6 flex flex-col items-center xl:flex-row gap-6">
                    {
                        ContinueClasses.map((continueClass) => (
                            <ContinueClass key={continueClass.id} materials={continueClass.materials} bg={continueClass.bg} image={continueClass.image} subject={continueClass.subject} topic={continueClass.topic} progress={continueClass.progress} dialog={continueClass.dialog} recommendation={continueClass.recommendation} />
                        ))
                    }
                </div>
                <div className="py-4 relative items-center sm:items-start flex flex-col">
                    <div className="relative mb-6">
                        <p className="flex gap-3 items-center  font-[] font-semibold text-[24px] leading-[32px] tracking-[-0.01em]">All Materials <span className="text-center rounded-lg font-semibold text-[13.6px] leading-[27.2px] tracking-[-0.01em] w-[34px] h-[28px] bg-[#EEEEE4]">{Materials.length}</span> <button onClick={() => setOpen(!open)}>{open ? '⏶' : '⏷'}</button></p>
                        {open && (
                            <div className="transition  flex flex-col absolute left-[85.6%] top-11 border z-10 p-3 rounded-2xl gap-2 items-center justify-center bg-white border-gray-300">
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-5 lg:flex-row flex-col w-full xl:w-[105%] justify-between">
                        <div className="transition ease-in-out w-[300px] h-[40px] sm:w-[371px] sm:h-[48px] flex items-center justify-center rounded-3xl bg-[#EEEEE4]">
                            <button onClick={() => { setActiveTab('allStatus'); setFilter('all') }} className={` transition-all duration-300 ease-in-out ] hover:scale-110 hover:shadow-lg font-[] font-semibold text-[16px] leading-[27.2px] tracking-[-0.01em] w-[110px] h-[34px] sm:w-[120px] sm:h-[39px] rounded-3xl  ${activetTab === "allStatus" ? "bg-white" : "bg-[#EEEEE4]"}`}>All Status</button>
                            <button onClick={() => { setActiveTab('notStarted'); setFilter('notStarted') }} className={` transition-all duration-300 ease-in-out ] hover:scale-110 hover:shadow-lg font-[] font-semibold text-[16px] leading-[27.2px] tracking-[-0.01em] w-[110px] h-[34px] sm:w-[120px] sm:h-[39px] rounded-3xl  ${activetTab === "notStarted" ? "bg-white" : "bg-[#EEEEE4]"}`}>Not Started</button>
                            <button onClick={() => { setActiveTab('inProgress'); setFilter('inProgress') }} className={` transition-all duration-300 ease-in-out ] hover:scale-110 hover:shadow-lg font-[] font-semibold text-[16px] leading-[27.2px] tracking-[-0.01em] w-[110px] h-[34px] sm:w-[120px] sm:h-[39px] rounded-3xl  ${activetTab === "inProgress" ? "bg-white" : "bg-[#EEEEE4]"}`}>In Progress</button>
                        </div>
                        <div className="w-[335px] h-[40px] flex items-center gap-2  rounded-full p-1">
                            <div className="relative">
                                <input value={filterInput} onChange={(event) => setFilterInput(event.target.value)} className="pl-10 w-[120px] flex items-center rounded-full px-3 py-1.5 " placeholder="Search" type="text" name="" id="" />
                                <img className="absolute top-[23%] left-[5%]" src="/images/dashboardCourses/search.svg" alt="" />
                            </div>
                            {/** add filter btn*/}
                            <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex gap-3 items-center"><img src="/images/dashboardCourses/filter.svg" alt="" />Add Filter</button>
                            <div className="flex items-center bg-[#f6f5f2] gap-2  rounded-lg p-1">
                                <button onClick={() => setLayout('grid')} className={`p-2  rounded-lg  ${layout === 'grid' ? "bg-[#dbdad7]" : "bg-[#f6f5f2]"}`}>
                                    <img src="/images/dashboardCourses/2x2layout.svg" alt="" />
                                </button>
                                <button onClick={() => setLayout('list')} className={`p-2  rounded-lg  ${layout === 'list' ? "bg-[#dbdad7]" : "bg-[#f6f5f2]"}`}>
                                    <List size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                    {isFilterOpen &&
                        <div className="absolute top-[102%] xl:right-[-32px] right-[7%] sm:right-[50%] lg:right-[10px] w-[240px] h-auto z-10 bg-white rounded-3xl shadow-2xl p-5 flex flex-col gap-4 border border-gray-100 backdrop-blur-sm">
                            <button
                                onClick={() => {
                                    setIsFilterOpen(false);
                                    addFilterBtn();
                                    setSubjectFilter("Quiz");
                                }}
                                className="group w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-md transition-all duration-300 hover:shadow-blue-400/40 hover:-translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                            >
                                <span className="group-hover:tracking-wider transition-all duration-300">Quizes</span>
                            </button>

                            <button
                                onClick={() => {
                                    setIsFilterOpen(false);
                                    addFilterBtn();
                                    setSubjectFilter("pages");
                                }}
                                className="group w-full py-3 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold shadow-md transition-all duration-300 hover:shadow-emerald-400/40 hover:-translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                            >
                                <span className="group-hover:tracking-wider transition-all duration-300">Pages</span>
                            </button>

                            <button
                                onClick={() => {
                                    setIsFilterOpen(false);
                                    addFilterBtn();
                                    setSubjectFilter("courses");
                                }}
                                className="group w-full py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold shadow-md transition-all duration-300 hover:shadow-rose-400/40 hover:-translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
                            >
                                <span className="group-hover:tracking-wider transition-all duration-300">Courses</span>
                            </button>

                            <button
                                onClick={() => {
                                    setIsFilterOpen(false);
                                    addFilterBtn();
                                    setSubjectFilter("learning path");
                                }}
                                className="group w-full py-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow-md transition-all duration-300 hover:shadow-amber-400/40 hover:-translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                            >
                                <span className="group-hover:tracking-wider transition-all duration-300">Learning Paths</span>
                            </button>
                        </div>
                    }
                </div>


                <div className={`relative flex flex-col w-full ${layout === 'list' ? 'items-start' : 'items-center'}`}>
                    <div className={`w-full grid items-center ${layout === "list" ? "grid-cols-1" : "grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"}   xl:gap-x-8 gap-x-8 lg:gap-x-21 gap-y-6`}>
                        {
                            filteredMaterials.map((singleMaterial: any) => (
                                <Material key={singleMaterial.id} layout={layout} image={singleMaterial.image} typeImage={singleMaterial.typeImage} subject={singleMaterial.subjec} bg={singleMaterial.bg} materials={singleMaterial.material} type={singleMaterial.type} topic={singleMaterial.topic} firstRecommendation={singleMaterial.firstRecommendation} secondRecommendation={singleMaterial.secondRecommendation} points={singleMaterial.points} passingPoints={singleMaterial.passingPoints} progress={singleMaterial.progress} isCertified={singleMaterial.isCertified} />
                            ))
                        }
                    </div>
                    <div className="absolute inset-x-0 bottom-0 w-full h-8 bg-gradient-to-t from-[#fafaf5] to-transparent pointer-events-none"></div>
                </div>



            </div>
        </div>
    )
}