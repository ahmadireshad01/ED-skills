export default function OnBoardingPage() {
    return(
    <>
        <div className=" flex flex-row mt-0 justify-center items-center bg-[#fafaf5] ">
            <div className="relative bg-white gap-2 w-[695px] h-[969px] flex justify-center items-center flex-col">
                <div className="z-2 flex justify-center gap-2 items-center absolute top-[47px] left-[48px] w-[183px] h-[33.3 px] ">
                    <img  src="images/OnBoarding/EdLogo.svg" alt="" />
                    <p className="font-proxima font-bold text-[27.92px] leading-[26.7px] tracking-[-0.02em]">MyEdSkills</p>
                </div>
                <img className="absolute top-0" src="images/OnBoarding/backgroundPattern.svg" alt="" />
                <img className="absolute top-[215px]" src="images/OnBoarding/OnBoardingPageImage2.svg" alt="" />
            </div>
            <div className="flex justify-center items-center  w-[705px] ">
                <div className="flex flex-col justify-center items-center w-[434px] h-[464px] gap-[28px]">
                    <h1 className="w-[372px] font-recoleta font-semibold text-[32px] leading-[40px] tracking-[-1px] text-center font align-middle">
                    Create an account to discover your personalized learnig path
                    </h1>
                    <div className="w-[434px] h-[92px] rounded-2xl border-[#B1B1AC4D] shadow-[0_6px_0_0_#B1B1AC4D] border flex flex-col justify-center items-start px-6 hover:bg-[#B1B1AC4D] cursor-pointer hover:shadow-[0_7px_3px_3px_#B1B1AC4D] transition ease-in-out duration-300 ">
                        <p className="font-intertight font-medium text-[18px] leading-[24px] tracking-[-0.2px]">Parents</p>
                        <p className="font-intertight font-normal text-[16px] leading-[24px] tracking-[0px] text-[#666D80]">Track your child progress, and assign new courses </p>
                    </div>

                    <div className="w-[434px] h-[92px] rounded-2xl border-[#B1B1AC4D] shadow-[0_6px_0_0_#B1B1AC4D] border flex flex-col justify-center items-start px-6 hover:bg-[#B1B1AC4D] cursor-pointer hover:shadow-[0_7px_3px_3px_#B1B1AC4D] transition ease-in-out duration-300">
                        <p className="font-intertight font-medium text-[18px] leading-[24px] tracking-[-0.2px]">Teachers</p>
                        <p className="font-intertight font-normal text-[16px] leading-[24px] tracking-[0px] text-[#666D80]">Track your child progress, and assign new courses </p>
                    </div>

                    <div className="w-[434px] h-[92px] rounded-2xl border-[#B1B1AC4D] shadow-[0_6px_0_0_#B1B1AC4D] border flex flex-col justify-center items-start px-6 hover:bg-[#B1B1AC4D] cursor-pointer hover:shadow-[0_7px_3px_3px_#B1B1AC4D] transition ease-in-out duration-300">
                        <p className="font-intertight font-medium text-[18px] leading-[24px] tracking-[-0.2px]">Learner</p>
                        <p className="font-intertight font-normal text-[16px] leading-[24px] tracking-[0px] text-[#666D80]">SignUp for a free account, and Start learning  </p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
    )
}