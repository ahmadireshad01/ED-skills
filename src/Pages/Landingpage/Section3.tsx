// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();

export default function Section3() {
  return (
    <div>
      <div className="mt-20 relative w-full">
        {/* Background Image */}
        <img
          src="/images/community/bgimg.svg"
          alt="background"
          className="w-full relative bottom-[-6px] md:bottom-[-3px]"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <img src="/images/community/icon.svg" alt="icon" className="mb-4" />
          <h1
            className="text-3xl sm:text-4xl md:text-[25px] md:leading-[25px]
             lg:text-[50px] lg:leading-[50px] font-bold  mb-8 leading-[60px]
             2xl:text-[70px] 2xl:leading-[65px] max-[640px]:leading-[35px]
             "
          >
            Join Our <br /> Community <br /> Banner
          </h1>
          <button
            onClick={() => navigate('/login')}
            className="py-3 px-8 md:py-2 md:px-6 md:mb-8 bg-[#FF3400]
              rounded-full cursor-pointer text-white text-[18px] md:text-[14px]
              font-semibold  hover:shadow-[0_6px_0_0_#C52800]  transition
              2xl:text-[22px] 2xl:py-3 2xl:px-[50px]  max-[640px]:relative max-[640px]:top-[-31px]
              "
          >
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}
