import { Search } from "lucide-react";

export default function Nav() {
  return (
    <div className="w-full bg-[#fafaf5]">
      {/* Content wrapper */}
      <div className=" flex justify-between items-center py-6 px-[124px]">
        {/* Left side: logo + links */}
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-2">
            <img src="/images/nav/image1.svg" alt="image1" />
            <h1 className="text-[27px] font-bold">MyEdSkills</h1>
          </div>

          <ul className="flex items-center text-[16px] font-medium leading-7 tracking-[-0.22px] gap-8">
            <li className="cursor-pointer hover:text-gray-600">Courses</li>
            <li className="cursor-pointer hover:text-gray-600">How It Works</li>
            <li className="cursor-pointer hover:text-gray-600">Scholarships</li>
            <li className="cursor-pointer hover:text-gray-600">
              For Educators
            </li>
          </ul>
        </div>

        {/* Right side: search + auth buttons */}
        <div className="flex items-center">
          <button className="border border-none bg-[#E8E6E8] p-2 rounded-full">
            <Search />
          </button>
          <button className="hover:bg-black hover:text-white font-medium px-6 py-2 rounded-full">
            Login
          </button>
          <button className="hover:bg-black hover:text-white font-medium px-6 py-2 rounded-full">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
