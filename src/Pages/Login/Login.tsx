import { X } from "lucide-react";
import group from "../../../public/images/login/Group 2.png";
import star from "../../../public/images/login/star.svg";
import starb from "../../../public/images/login/starb.svg";

export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left red div */}
      <div className="bg-[#FF613E] m-[10px] py-[100px] rounded-2xl w-full h-full">
        <div className="m-auto flex flex-col justify-center items-center">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[24px]">
              <img src={star} alt="" className="m-auto" />
              <p className="text-[40px] font-semibold text-white leading-[40px] tracking-[0px] text-center">
                Watch Your Child’s <br />
                Knowledge Grow
              </p>
            </div>
            <img src={group} alt="" />
          </div>
        </div>
      </div>

      {/* Right form div */}
      <div className="p-[46px] w-full flex flex-col">
        {/* Header stays at the top */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-[14px]">
            <img src={starb} alt="" />
            <p className="font-bold leading-[15px]">
              EDTECH <br /> SKILLS
            </p>
          </div>
          <div className="border-[2px] rounded-full flex items-center justify-center p-[14px] border-[#DEE0E3]">
            <X />
          </div>
        </div>

        {/* Center only the form */}
        <div className="flex flex-1 justify-center items-center">
          <form className="flex flex-col justify-center items-center gap-4 w-full max-w-md">
            <p className="font-semibold text-[24px] text-center mb-4">Login to Edtech</p>
            <input
              type="text"
              className="border p-[12px] rounded-2xl w-full"
              placeholder="Email or username"
            />
            <input
              type="password"
              className="border p-[12px] rounded-2xl w-full"
              placeholder="Password"
            />
            <button className="bg-[#FF613E] text-white rounded-2xl py-3 mt-4 w-full">
              Login to Portal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
