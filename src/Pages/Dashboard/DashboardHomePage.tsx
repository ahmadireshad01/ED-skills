import DashboardSideBar from "../../Components/DashboardComponents/DashboardSideBar";
import ProfileCard from "../../Components/DashboardComponents/ProfileCard";
import ClassCard from "../../Components/DashboardComponents/ClassCard";
import InprogressCourse from "../../Components/DashboardComponents/InProgressCourse";
export default function DashboardHomePage() {
    const subjects = [
        { id: 1, icon: 'allSubjectIcon', label: "All Subjects", color: '#FFD5CA' },
        { id: 2, icon: 'englishIcon', label: "English", color: '#FAEAFA' },
        { id: 3, icon: 'businessIcon', label: "Business", color: '#E9F3AA' },
        { id: 4, icon: 'mathematicsIcon', label: "Business", color: '#E9F3AA' },
        { id: 5, icon: 'mathematicsIcon', label: "Business", color: '#E9F3AA' },
        { id: 6, icon: 'mathematicsIcon', label: "Business", color: '#E9F3AA' },
        { id: 7, icon: 'mathematicsIcon', label: "Business", color: '#E9F3AA' },
        { id: 8, icon: 'mathematicsIcon', label: "Business", color: '#E9F3AA' }
    ]

    const Classes = [{ id: 1, bg: '#FFD5CA', image: "/images/ClassCard/classBgImage.svg", startingTime: "11:30", subject: "Goegraphy", topic: "The Secrets of the nature", participants: { first: "/images/ClassCard/firstPersonImage.svg", second: "/images/ClassCard/firstPersonImage.svg", third: "/images/ClassCard/thirdPersonImage.svg" } },
    { id: 2, bg: '#FAEAFA', image: "/images/ClassCard/classBgImage2.svg", startingTime: "1:00", subject: "Chemistry", topic: "Cordination Chemistry", participants: { first: "/images/ClassCard/firstPersonImage.svg", second: "/images/ClassCard/firstPersonImage.svg", third: "/images/ClassCard/thirdPersonImage.svg" } }
    ]

    const InProgressClasses = [{ id: 4, icon: "/images/dashBoard/physicsIcon.svg", bg: "#b0d7c7", subject: "Physics", topic: "Unlock the Laws of Nature", content: "5 Material", progress: 44, duration: "1 day" },
    { id: 5, icon: "/images/dashBoard/englishIcon.svg", bg: "#FAEAFA", subject: "English", topic: "Learn the National language", content: "5 Material", progress: 60, duration: "5 day" },
    { id: 6, icon: "/images/dashBoard/businessIcon.svg", bg: "#E9F3AA", subject: "Business", topic: "Learn to Business here at Ed", content: "5 Material", progress: 28, duration: "2 day" }
    ]
    return (
        <>

            <div className="h-screen pb-3 flex bg-[#fafaf5] gap-6 w-full
            ">

                <DashboardSideBar />
                <div className="lg:flex lg:flex-row lg:pt-3 lg:p-0 sm:p-[50px] sm:pt-[100px] flex-col gap-9 w-full lg:justify-between">
                    {/*middle section*/}
                    <div className="sm:pt-3 pt-13 flex flex-col m-[10px] w-full">
                        <div
                        className="
                        flex  sm:items-center sm:justify-between items-center sm:pt-0 pt-2  gap-0 sm:gap-4 
                        px-5  mt-[20px] sm:px-4 sm:mt-0
                        "
                        >
                            <p
                            className="
                        font-[Roboto] font-bold 
                        text-[23px] sm:text-[30px] lg:text-[51.75px] 
                        leading-[1.2] md:leading-[49.49px] 
                        tracking-[-0.02em] sm:text-center  w-full sm:w-auto
                        "
                            >
                                Good Morning, Sophia 👋
                            </p>

                            <button
                                className=" sm:ml-0 ml-[-51px]
                                flex items-center justify-center gap-1
                                shadow-[0px_5.33px_0px_0px_#FF3400] 
                                w-[100px] sm:w-[135px] md:w-[147px]
                                h-[38px] sm:h-[52px] md:h-[58px]
                                rounded-[29px] border border-orange-500
                                font-[roboto] font-semibold 
                                text-[13px] sm:text-[17px] md:text-[18.66px]
                                leading-[1.8] tracking-[-0.02em]
                                bg-white text-orange-600
                                transition-all duration-300 ease-out 
                                hover:bg-orange-500 hover:text-white 
                                hover:shadow-[0px_8px_20px_0px_rgba(255,52,0,0.4)] 
                                hover:scale-[1.05] active:scale-95 
                                active:shadow-[0px_3px_10px_0px_rgba(255,52,0,0.3)]
                                "
                            >
                                <img
                                    className="
                        w-4 sm:w-7 md:w-8 
                        transition-transform duration-500 
                        group-hover:rotate-[15deg] hover:rotate-[20deg]
                    "
                                    src="/images/dashBoard/askAi.svg"
                                    alt=""
                                />
                                Ask Ai
                            </button>
                        </div>

                        <div className="flex gap-4 mt-8 w-full max-w-[850px] h-[98px] sm:h-[98px] overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth">
                            {subjects.map((subject) => (
                                <div
                                    className="border-[#E3E3DE] border-[1.33px] flex gap-4 rounded-2xl items-center justify-between 
                                    w-[147px] sm:w-[200px] md:w-[220px] lg:w-[250px] 
                                    p-3 h-[52px] sm:h-[62px] shadow-[0px_2.33px_0px_0px_#E3E3DE] 
                                    hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                                >
                                    <span
                                        className={`rounded-lg flex items-center ml-[-5px] justify-center w-[44px] sm:w-[60px] h-[44px] sm:h-[50px] bg-[${subject.color}]`}
                                    >
                                        <img src={`/images/dashBoard/${subject.icon}.svg`} alt="" />
                                    </span>
                                    <p className="font-roboto font-semibold text-[15.99px] sm:text-[19px] leading-[22.65px] tracking-[0%] text-center">
                                        {subject.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-3 pb-5 sm:pl-0 pl-3 flex flex-col sm:flex-row items-start sm:items-center justify-between pr-5 gap-2 sm:gap-0">
                            <p className="font-recoleta font-semibold text-[31.99px] leading-[42.65px] tracking-[-0.01em]">
                                Your Upcoming Class
                            </p>
                            <button className="text-[#FF3400] font-pp-mori font-semibold text-[21.33px] leading-[31.99px] tracking-[0%] hover:text-orange-400 transition ease-in-out">
                                view all
                            </button>
                        </div>

                        <div className="sm:flex sm:flex-row flex-col sm:gap-6 md:gap-8">
                            {Classes.map((singleClass) => (
                                <ClassCard
                                    key={singleClass.id}
                                    bg={singleClass.bg}
                                    image={singleClass.image}
                                    startingTime={singleClass.startingTime}
                                    subject={singleClass.subject}
                                    topic={singleClass.topic}
                                    participants={singleClass.participants}
                                />
                            ))}
                        </div>
                        <div className="w-full">
                            {/* Header */}
                            <div className="py-5 pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between pr-5 gap-2 sm:gap-0">
                                <p className="font-recoleta font-semibold text-[31.99px] leading-[42.65px] tracking-[-0.01em]">
                                    In progress learning content
                                </p>
                                <button className="text-[#FF3400] font-pp-mori font-semibold text-[21.33px] leading-[31.99px] tracking-[0%] hover:text-orange-400 transition ease-in-out">
                                    view all
                                </button>
                            </div>

                            {/* List of in-progress courses */}
                            <div className="flex flex-col pr-5 gap-4">
                                {InProgressClasses.map((inProgressClass) => (
                                    <InprogressCourse
                                        key={inProgressClass.id}
                                        icon={inProgressClass.icon}
                                        bg={inProgressClass.bg}
                                        subject={inProgressClass.subject}
                                        topic={inProgressClass.topic}
                                        content={inProgressClass.content}
                                        progress={inProgressClass.progress}
                                        duration={inProgressClass.duration}
                                    />
                                ))}
                            </div>
                        </div>


                    </div>
                    <ProfileCard />
                </div>
            </div>
        </>
    )
}