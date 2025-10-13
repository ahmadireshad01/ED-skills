export default function OnBoardingPage() {
    return (
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-[#fafaf5]">
        {/* Left side (image section) */}
        <div className="relative bg-white flex justify-center items-center flex-col w-full lg:w-1/2 h-[400px] lg:h-screen overflow-hidden">
          {/* Logo */}
          <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
            <img src="images/OnBoarding/EdLogo.svg" alt="Logo" className="w-8 h-8 lg:w-auto lg:h-auto" />
            <p className="font-proxima font-bold text-[22px] lg:text-[28px] tracking-[-0.02em]">MyEdSkills</p>
          </div>
  
          {/* Background patterns */}
          <img
            className="absolute top-0 w-full h-auto object-cover opacity-90"
            src="images/OnBoarding/backgroundPattern.svg"
            alt=""
          />
          <img
            className="absolute top-1/3 w-3/4 lg:w-2/3 max-w-[400px]"
            src="images/OnBoarding/OnBoardingPageImage2.svg"
            alt=""
          />
        </div>
  
        {/* Right side (content section) */}
        <div className="flex justify-center items-center w-full lg:w-1/2 py-10 px-6 lg:px-0">
          <div className="flex flex-col justify-center items-center max-w-[440px] w-full gap-6">
            <h1 className="font-recoleta font-semibold text-2xl md:text-3xl text-center leading-snug">
              Create an account to discover your personalized learning path
            </h1>
  
            {/* Card Options */}
            {[
              {
                title: "Parents",
                desc: "Track your child progress, and assign new courses",
              },
              {
                title: "Teachers",
                desc: "Track your students' progress, and assign new courses",
              },
              {
                title: "Learner",
                desc: "Sign up for a free account and start learning",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="w-full rounded-2xl border border-[#B1B1AC4D] shadow-[0_6px_0_0_#B1B1AC4D] flex flex-col justify-center items-start px-6 py-5 
                           hover:bg-[#EAEAE2] hover:shadow-[0_7px_3px_3px_#B1B1AC4D] transition-all ease-in-out duration-300 cursor-pointer"
              >
                <p className="font-intertight font-medium text-lg leading-6 tracking-[-0.2px]">{item.title}</p>
                <p className="font-intertight font-normal text-base leading-6 text-[#666D80]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  