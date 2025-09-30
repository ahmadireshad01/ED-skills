import flower from '../../../public/images/signup/flower.svg';
import left from '../../../public/images/signup/Group 2 (1).png';
import right from '../../../public/images/signup/Group 3.png';
import ProgressBar from '../../Components/progress';
import star from '../../../public/images/signup/star.svg';
export default function Skills() {
  return (
    <div className="relative min-h-screen">
      <div>
        {/* Left image slightly lower than center */}
        <img
          src={left}
          alt="left decoration"
          className="fixed left-0 top-[60%] -translate-y-1/2"
        />

        {/* Right image slightly lower than center */}
        <img
          src={right}
          alt="right decoration"
          className="fixed right-0 top-[60%] -translate-y-1/2"
        />
      </div>

      {/* Progress bar at the top */}
      <div className="mt-[57px]">
        <ProgressBar progress={35} />
      </div>

      {/* Form container */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <form className="flex items-center justify-center flex-col w-full max-w-[550px]">
          <img src={flower} alt="" />
          <h1 className="font-semibold text-[40px] leading-[40px] text-center mt-4">
            What are you hoping to <br /> Achieve with EdTech Skills?
          </h1>

          <div className="flex w-full items-center justify-center gap-[4px] mt-[19px]">
            <img src={star} alt="" />
            <h1 className="border-t border-[#DFE1E6] flex-1 mt-[4px]"></h1>
            <img src={star} alt="" />
          </div>

          <div className="mt-[16px] flex flex-col gap-[10px] w-full">
            <button className="p-[16px] shadow-sm hover:shadow-[#FF613E] cursor-pointer text-left border rounded-[14px] border-[#DFE1E6]">
              <p>Parents </p>
              <p className=" font-normal text-[16px] text-[#666D80]">
                Track your child progress, and assign new courses
              </p>
            </button>
            <button className="p-[16px] shadow-sm hover:shadow-[#FF613E] cursor-pointer text-left border rounded-[14px] border-[#DFE1E6]">
              <p>Teachers </p>
              <p className=" font-normal text-[16px] text-[#666D80]">
                Track your child progress, and assign new courses
              </p>
            </button>
            <button className="p-[16px] shadow-md hover:shadow-[#FF613E] cursor-pointer text-left border rounded-[14px] border-[#DFE1E6]">
              <p>Learner </p>
              <p className=" font-normal text-[16px] text-[#666D80]">
                Signup for a free account, and start learning
              </p>
            </button>
            <button className="bg-[#FF613E] py-[12px] mt-[26px] rounded-2xl w-full">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
