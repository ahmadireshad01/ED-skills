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
    { id: 2, bg: '#FAEAFA', image: "/images/ClassCard/classBgImage2.svg", startingTime: "1:00", subject: "Chemistry", topic: "Cordination Chemistry", participants: { first: "/images/ClassCard/firstPersonImage.svg", second: "/images/ClassCard/firstPersonImage.svg", third: "/images/ClassCard/thirdPersonImage.svg" } },
    { id: 2, bg: '#FAEAFA', image: "/images/ClassCard/classBgImage2.svg", startingTime: "1:00", subject: "Chemistry", topic: "Cordination Chemistry", participants: { first: "/images/ClassCard/firstPersonImage.svg", second: "/images/ClassCard/firstPersonImage.svg", third: "/images/ClassCard/thirdPersonImage.svg" } },
    { id: 1, bg: '#FFD5CA', image: "/images/ClassCard/classBgImage.svg", startingTime: "11:30", subject: "Goegraphy", topic: "The Secrets of the nature", participants: { first: "/images/ClassCard/firstPersonImage.svg", second: "/images/ClassCard/firstPersonImage.svg", third: "/images/ClassCard/thirdPersonImage.svg" } },
    ]

    const InProgressClasses = [{ id: 4, icon: "/images/dashBoard/physicsIcon.svg", bg: "#b0d7c7", subject: "Physics", topic: "Unlock the Laws of Nature", content: "5 Material", progress: 44, duration: "1 day" },
    { id: 5, icon: "/images/dashBoard/englishIcon.svg", bg: "#FAEAFA", subject: "English", topic: "Learn the National language", content: "5 Material", progress: 60, duration: "5 day" },
    { id: 6, icon: "/images/dashBoard/businessIcon.svg", bg: "#E9F3AA", subject: "Business", topic: "Learn to Business here at Ed", content: "5 Material", progress: 28, duration: "2 day" }
    ]
    return (
        <>

            <div className="min-h-screen flex bg-[#fafaf5] gap-6 w-full [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:gap-3">
                <div className="flex lg:fixed pb-6 lg:h-screen xl:h-screen xl:max-h-screen xl:static [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:h-[640px] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:max-h-[640px]">
                    <DashboardSideBar />
                </div>
                <div className=" lg:ml-[120px] xl:ml-0 lg:flex lg:flex-row lg:pt-3 lg:p-0 ml-[-21px] sm:p-[50px] sm:pt-[100px] flex flex-col items-center gap-9 w-full lg:justify-between [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:gap-4 [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:pt-1">
                    {/*middle section*/}
                    <div className="pt-[52px] mt-0 [@media(max-height:880px)_and_(min-width:1340px)]:mt-[-60px] flex flex-col ml-5 md:ml-0 lg:m-[10px] w-full lg:w-[832px] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:pt-3 [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:mt-[-40px] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:overflow-y-auto [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:max-h-[600px]">
                        <div
                            className="
                        flex  sm:items-center sm:justify-between items-center sm:pt-0 pt-2  gap-0 sm:gap-4 
                        px-5  mt-[20px] sm:mx-[-20px] sm:mt-0
                        [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:mt-2 [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:gap-2
                        "
                        >
                            <p
                                className="
                            [font-family:'Epilogue',sans-serif] font-bold 
                            text-[21px] sm:text-[30px] lg:text-[40.75px] 
                            leading-[1.2] md:leading-[49.49px] 
                            tracking-[-0.02em] w-full sm:w-auto
                            [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:text-[28px] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:leading-[32px]"
                            >
                                Good Morning, Sophia 👋
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
                        <div className="relative">
                            <div className=" shadow-[inset_-32px_0_21px_14px_rgba(255,255,255,0.6)] bg-[#f3f3ef]  flex gap-4 mt-8 [@media(max-height:880px)_and_(min-width:1340px)]:mt-6 w-full max-w-[850px] h-[98px] overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:mt-4 [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:h-[80px] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:gap-3">
                                {subjects.map((subject) => (
                                    <div
                                        className="border-[#E3E3DE] border-[1.33px] flex gap-4 bg-white rounded-2xl items-center justify-between 
                                        w-[168px]
                                        p-3 h-[72px] shadow-[0px_2.33px_0px_0px_#E3E3DE] 
                                        hover:scale-102 transition-all duration-300 cursor-pointer
                                        [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:w-[150px] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:h-[60px] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:p-2 [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:gap-2"
                                    >
                                        <span
                                            className={`rounded-lg flex items-center ml-[-5px] justify-center w-[54px] sm:w-[65px] h-[54px] sm:h-[54px] bg-[${subject.color}] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:w-[45px] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:h-[45px]`}
                                        >
                                            <img src={`/images/dashBoard/${subject.icon}.svg`} alt="" />
                                        </span>
                                        <p className="font-roboto font-semibold text-[15.99px] sm:text-[18px] leading-[24.65px] tracking-[0%] text-center [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:text-[14px] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:leading-[18px]">
                                            {subject.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute inset-y-0 right-[-4px] w-22 bg-gradient-to-l from-[#fafaf5] to-transparent pointer-events-none"></div>
                        </div>
                        <div className="pt-2 [@media(max-height:880px)_and_(min-width:1340px)]:pt-0 pb-4 sm:pl-0 pl-3 flex flex-col lg:flex-col lg:items-start  xl:flex-row sm:flex-row items-start sm:items-center justify-between pr-5 gap-2 sm:gap-0 [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:pt-1 [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:pb-2">
                            <p className="font-recoleta font-semibold text-[24px]  sm:text-[24.99px] leading-[42.65px] tracking-[-0.01em] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:text-[20px] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:leading-[28px]">
                                Your Upcoming Class
                            </p>
                            <button className="text-[#FF3400] font-pp-mori font-semibold text-[16.33px] leading-[31.99px] tracking-[0%] hover:text-orange-400 transition ease-in-out">
                                view all
                            </button>
                        </div>
                        {/* upComingClassesCards and  inProgressCards*/}
                        <div className="relative [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:mb-2">
                            <div className="">
                                <div className="lg:flex-col lg:items-start xl:items-center xl:flex-row sm:flex sm:flex-row flex-col items-center md:justify-center lg:justify-start  sm:gap-1 xl:gap-8 [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:gap-4">
                                    {Classes.map((singleClass, index) => (
                                        <div
                                            className={`
                                        ${index > 1 ? 'hidden lg:block xl:hidden' : 'block'}
                                    `}
                                        >
                                            <ClassCard
                                                key={singleClass.id}
                                                bg={singleClass.bg}
                                                image={singleClass.image}
                                                startingTime={singleClass.startingTime}
                                                subject={singleClass.subject}
                                                topic={singleClass.topic}
                                                participants={singleClass.participants}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute right-[-21px] top-[-15px] hidden lg:flex xl:hidden">
                                <ProfileCard />
                            </div>
                        </div>
                        <div className="w-full [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:mt-[-10px]">
                            {/* Header */}
                            <div className="xl:flex-row py-5 pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between pr-5 gap-2 sm:gap-0 [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:py-2 [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:pt-3">
                                <p className="font-recoleta font-semibold text-[24.99px] leading-[42.65px] tracking-[-0.01em] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:text-[20px] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:leading-[28px]">
                                    In progress learning content
                                </p>
                                <button className="text-[#FF3400] font-pp-mori font-semibold text-[16.33px] leading-[31.99px] tracking-[0%] hover:text-orange-400 transition ease-in-out [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:text-[14px]">
                                    view all
                                </button>
                            </div>

                            {/* List of in-progress courses */}
                            <div className="flex flex-col lg:items-start items-center gap-4 lg:ml-0 md:ml-[7%] ml-3 [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:gap-2">
                                {InProgressClasses.map((inProgressClass, index) => (
                                    <div
                                        key={inProgressClass.id}
                                        className={`w-full ${index > 0 ? "[@media(max-height:880px)_and_(min-width:1340px)]:hidden [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:hidden" : ""}`}
                                    >
                                        <InprogressCourse
                                            icon={inProgressClass.icon}
                                            bg={inProgressClass.bg}
                                            subject={inProgressClass.subject}
                                            topic={inProgressClass.topic}
                                            content={inProgressClass.content}
                                            progress={inProgressClass.progress}
                                            duration={inProgressClass.duration}
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>




                    </div>
                    <div className="flex pb-2 lg:hidden xl:flex [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:ml-[-21px] [@media(min-width:1340px)_and_(max-width:1360px)_and_(max-height:650px)]:pb-1">
                        <ProfileCard />
                    </div>
                </div>
            </div>
        </>
    )
}