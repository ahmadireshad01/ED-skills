import { useState } from "react";
import { useNavigate, useLocation, } from "react-router-dom";

export default function DashboardSideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false)
  const isActive = (path: any) => location.pathname.includes(path);

  return (
    <>
      <div className="fixed z-50  lg:hidden left-0 right-0  h-[60px] m-3 rounded-2xl bg-[#EEEEE4] flex items-center justify-between pl-4">
        <button
          className="p-2 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>
      {isOpen && <div className="absolute top-[9%] left-[3%] w-[100px] flex flex-col items-center justify-center gap-4.5 shadow-2xl rounded-2xl z-50 h-[500px] bg-[#EEEEE4]">
        <div className="flex flex-col gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible px-2 sm:px-0">
          {/* Home */}
          <button
            onClick={() => navigate("/dashboard/home")}
            className={`w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl 
                ${isActive("/dashboard/home") ? "bg-[#1d37ff]" : "bg-white"} 
                flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
          >
            <img
              className={`w-[18px] sm:w-[21px] lg:w-[23px] 
                  ${isActive("/dashboard/home") ? "invert brightness-0" : "invert brightness-100"}`}
              src="/images/DashBoardSideBar/home.svg"
              alt="Home"
            />
          </button>

          {/* Courses */}
          <button
            onClick={() => navigate("/dashboard/courses")}
            className={`w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl 
                ${isActive("/dashboard/courses") ? "bg-[#1d37ff]" : "bg-white"} 
                flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md`}
          >
            <img
              className={`w-[18px] sm:w-[21px] lg:w-[23px] 
                  ${isActive("/dashboard/courses") ? "invert brightness-0" : "invert-0 brightness-100"}`}
              src="/images/DashBoardSideBar/courses.svg"
              alt="Courses"
            />
          </button>

          {/* Medals */}
          <button
            onClick={() => navigate("/dashboard/medals")}
            className={`w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl 
                ${isActive("/dashboard/medals") ? "bg-[#1d37ff]" : "bg-white"} 
                flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md`}
          >
            <img
              className={`w-[18px] sm:w-[21px] lg:w-[23px] 
                  ${isActive("/dashboard/medals") ? "invert brightness-0" : "invert-0 brightness-100"}`}
              src="/images/DashBoardSideBar/midals.svg"
              alt="Medals"
            />
          </button>

          {/* Achievements */}
          <button
            onClick={() => navigate("/dashboard/achievements")}
            className={`w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl 
                ${isActive("/dashboard/achievements") ? "bg-[#1d37ff]" : "bg-white"} 
                flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md`}
          >
            <img
              className={`w-[22px] sm:w-[26px] lg:w-[29px] 
                  ${isActive("/dashboard/achievements") ? "invert brightness-0" : "invert-0 brightness-100"}`}
              src="/images/DashBoardSideBar/hat.svg"
              alt="Achievements"
            />
          </button>
        </div>

        {/* --- Bottom Section --- */}
        <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center sm:mb-2">
          {/* Settings */}
          <button
            onClick={() => navigate("/dashboard/settings")}
            className={`w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl 
                ${isActive("/dashboard/settings") ? "bg-[#1d37ff]" : "bg-white"} 
                flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md`}
          >
            <img
              className={`w-[18px] sm:w-[21px] lg:w-[23px] 
                  ${isActive("/dashboard/settings") ? "invert brightness-0" : "invert-0 brightness-100"}`}
              src="/images/DashBoardSideBar/settings.svg"
              alt="Settings"
            />
          </button>

          {/* Profile */}
          <div className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#A7D5CA] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-md">
            <img className="w-full h-full object-cover" src="/images/DashBoardSideBar/profileImage.svg" alt="Profile" />
          </div>
        </div>
      </div>}


      <div
        className="
        hidden
        lg:flex flex-col justify-between items-center py-5
        w-[70px] sm:w-[80px] md:w-[90px] lg:w-[90px]
        ml-1 sm:ml-2 mt-3 sm:mt-5 pb-4 sm:pb-5
        rounded-[19px] bg-[#EEEEE4]
        flex-shrink-0
        transition-all duration-300 ease-in-out
        hover:shadow-2xl
        fixed sm:static left-0 top-0 sm:top-auto
        sm:h-auto
        z-40
      "
      >
        {/* --- Top section --- */}
        <div className="flex sm:flex-col gap-3 sm:gap-6 sm:pt-4 sm:items-center items-center justify-center">
          <img
            className="z-10 w-[45%] sm:w-[60%] md:w-[68%] lg:w-[72%]"
            src="/images/DashBoardSideBar/logo.svg"
            alt="Logo"
          />

          {/* Notification */}
          <div className="relative group hidden sm:block">
            <button
              onClick={() => navigate('/dashboard/notifications')}
              className={`w-[40px] sm:w-[46px] lg:w-[50px] h-[40px] sm:h-[46px] lg:h-[50px] rounded-xl
              ${isActive('/dashboard/notifications') ? 'bg-[#1d37ff]' : 'bg-white'}
              flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <img
                className={`w-[18px] sm:w-[21px] lg:w-[23px]
                ${isActive('/dashboard/notifications') ? 'invert brightness-0' : 'invert-0 brightness-100'}`}
                src="/images/DashBoardSideBar/notificationImage.svg"
                alt="Notifications"
              />
            </button>
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* --- Middle buttons --- */}
        <div className="flex sm:flex-col gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible px-2 sm:px-0">
          {/* Home */}
          <button
            onClick={() => navigate("/dashboard/home")}
            className={`w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl 
            ${isActive("/dashboard/home") ? "bg-[#1d37ff]" : "bg-white"} 
            flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
          >
            <img
              className={`w-[18px] sm:w-[21px] lg:w-[23px] 
              ${isActive("/dashboard/home") ? "invert brightness-0" : "invert brightness-100"}`}
              src="/images/DashBoardSideBar/home.svg"
              alt="Home"
            />
          </button>

          {/* Courses */}
          <button
            onClick={() => navigate("/dashboard/courses")}
            className={`w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl 
            ${isActive("/dashboard/courses") ? "bg-[#1d37ff]" : "bg-white"} 
            flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md`}
          >
            <img
              className={`w-[18px] sm:w-[21px] lg:w-[23px] 
              ${isActive("/dashboard/courses") ? "invert brightness-0" : "invert-0 brightness-100"}`}
              src="/images/DashBoardSideBar/courses.svg"
              alt="Courses"
            />
          </button>

          {/* Medals */}
          <button
            onClick={() => navigate("/dashboard/medals")}
            className={`w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl 
            ${isActive("/dashboard/medals") ? "bg-[#1d37ff]" : "bg-white"} 
            flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md`}
          >
            <img
              className={`w-[18px] sm:w-[21px] lg:w-[23px] 
              ${isActive("/dashboard/medals") ? "invert brightness-0" : "invert-0 brightness-100"}`}
              src="/images/DashBoardSideBar/midals.svg"
              alt="Medals"
            />
          </button>

          {/* Achievements */}
          <button
            onClick={() => navigate("/dashboard/achievements")}
            className={`w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl 
            ${isActive("/dashboard/achievements") ? "bg-[#1d37ff]" : "bg-white"} 
            flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md`}
          >
            <img
              className={`w-[22px] sm:w-[26px] lg:w-[29px] 
              ${isActive("/dashboard/achievements") ? "invert brightness-0" : "invert-0 brightness-100"}`}
              src="/images/DashBoardSideBar/hat.svg"
              alt="Achievements"
            />
          </button>
        </div>

        {/* --- Bottom Section --- */}
        <div className="flex sm:flex-col gap-3 sm:gap-4 items-center justify-center sm:mb-2">
          {/* Settings */}
          <button
            onClick={() => navigate("/dashboard/settings")}
            className={`w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-xl 
            ${isActive("/dashboard/settings") ? "bg-[#1d37ff]" : "bg-white"} 
            flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md`}
          >
            <img
              className={`w-[18px] sm:w-[21px] lg:w-[23px] 
              ${isActive("/dashboard/settings") ? "invert brightness-0" : "invert-0 brightness-100"}`}
              src="/images/DashBoardSideBar/settings.svg"
              alt="Settings"
            />
          </button>

          {/* Profile */}
          <div className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#A7D5CA] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-md">
            <img className="w-full h-full object-cover" src="/images/DashBoardSideBar/profileImage.svg" alt="Profile" />
          </div>
        </div>
      </div>
    </>

  );
}
