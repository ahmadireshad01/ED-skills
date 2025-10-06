export default function DashboardSideBar() {
    return (
      <>
        <div className="flex flex-col justify-between ml-2 mt-5 pb-5 items-center w-[80px] rounded-[19px] bg-[#EEEEE4] flex-shrink-0 transition-all duration-300 ease-in-out hover:shadow-2xl ">
          
          {/* Top section */}
          <div className="flex flex-col gap-6 sm:gap-8 items-center pt-4 sm:pt-6">
            <img className="z-10 w-[60%] sm:w-[68%] lg:w-[72%]" src="/images/DashBoardSideBar/logo.svg" alt="Logo" />
  
            {/* Notification Button */}
            <div className="relative group">
              <button className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl bg-white flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#f3f3f3] hover:scale-105 hover:shadow-lg">
                <img className="w-[18px] sm:w-[21px] lg:w-[23px]" src="/images/DashBoardSideBar/notificationImage.svg" alt="Notifications" />
              </button>
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            </div>
          </div>
  
          {/* Middle buttons */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <button className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl bg-[#1d37ff] flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#1325b8] hover:scale-110 hover:shadow-lg">
              <img className="w-[18px] sm:w-[21px] lg:w-[23px]" src="/images/DashBoardSideBar/home.svg" alt="Home" />
            </button>
  
            <button className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl bg-white flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#f3f3f3] hover:scale-105 hover:shadow-md">
              <img className="w-[18px] sm:w-[21px] lg:w-[23px]" src="/images/DashBoardSideBar/courses.svg" alt="Courses" />
            </button>
  
            <button className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl bg-white flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#f3f3f3] hover:scale-105 hover:shadow-md">
              <img className="w-[18px] sm:w-[21px] lg:w-[23px]" src="/images/DashBoardSideBar/midals.svg" alt="Medals" />
            </button>
  
            <button className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl bg-white flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#f3f3f3] hover:scale-105 hover:shadow-md">
              <img className="w-[22px] sm:w-[26px] lg:w-[29px]" src="/images/DashBoardSideBar/hat.svg" alt="Hat" />
            </button>
          </div>
  
          {/* Bottom section */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <button className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl bg-white flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#f3f3f3] hover:scale-105 hover:shadow-md">
              <img className="w-[18px] sm:w-[21px] lg:w-[23px]" src="/images/DashBoardSideBar/settings.svg" alt="Settings" />
            </button>
  
            <div className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-4xl bg-[#A7D5CA] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-md">
              <img className="w-full h-full object-cover" src="/images/DashBoardSideBar/profileImage.svg" alt="Profile" />  
            </div>
          </div>
        </div>
      </>
    );
  }
  