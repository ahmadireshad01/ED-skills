export default function ClassCard(props: any) {
    return (
        <>
            <div className="sm:mb-0 mb-8 w-[94%] max-w-[404px]  sm:w-[360px] md:w-[380px] lg:w-[404px] h-[244px] rounded-3xl bg-white flex flex-col items-center
    shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 ease-out hover:-translate-y-1 hover:rotate-[0.5deg] cursor-pointer">

                {/* 1st child div */}
                <div className={`relative sm:h-[106px] h-[70px] bg-[${props.bg}] w-[95%] rounded-3xl mt-2
        overflow-hidden group transition-all duration-500 ease-in-out`}>

                    <img className="absolute top-[0%] transform transition-transform duration-700 ease-in-out"
                        src={props.image} alt="" />

                    <span className="absolute top-[11%] left-[4%] px-2 flex justify-center items-center
            w-[98px] h-[31px] rounded-2xl font-ppMori font-semibold text-[14.61px] leading-[15.09px]
            text-center bg-white">
                        Start: {props.startingTime}
                    </span>
                </div>

                {/* 2nd child div */}
                <div className="gap-0 px-4 pt-5 p-2 flex flex-col items-baseline h-fit w-full transition-all duration-300">
                    <span className={`flex items-center justify-center font-semibold text-[12.61px] leading-[15.09px]
                                         w-fit px-2 pb-0.5 h-[20px] rounded-lg bg-[${props.bg}]`}>
                        {props.subject}
                    </span>

                    <p className="font-interTight font-semibold text-[19.95px] leading-[40.81px] tracking-[0] text-center">
                        {props.topic}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2 sm:gap-0">
                        <div className="flex h-[35px]">
                            <img className="w-[36px] h-[36px] z-10 border rounded-3xl border-white transition-transform duration-300 hover:scale-110" src={props.participants.first} alt="" />
                            <img className="w-[36px] h-[36px] z-10 ml-[-10px] border rounded-3xl border-white transition-transform duration-300 hover:scale-110" src={props.participants.second} alt="" />
                            <img className="w-[36px] h-[36px] z-10 ml-[-10px] border rounded-3xl border-white transition-transform duration-300 hover:scale-110" src={props.participants.third} alt="" />
                            <div className="w-[34px] h-[35px] ml-[-10px] border rounded-3xl border-white bg-black text-white
                    flex items-center justify-center transition-all pl-1 duration-300 hover:bg-gray-800 hover:scale-110">
                                40+
                            </div>
                        </div>

                        <button className="w-[98px] h-[35px] shadow-[0px_1.33px_0px_0px_#E3E3DE] rounded-[29px] border border-[#E3E3DE]
                font-[roboto] text-[16.66px] leading-[35.59px] tracking-[-0.02em]
                transition-all duration-300 hover:bg-black hover:text-white hover:shadow-md hover:scale-105">
                            Start
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}