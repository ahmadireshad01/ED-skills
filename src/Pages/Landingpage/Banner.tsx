import React from 'react';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate(); // ✅ Move here — now it works

  return (
    <div className="relative flex justify-center items-center">
      <img
        src="/images/Banner/bannner.svg"
        alt="banner"
        className="w-full h-auto"
      />
      <div className="absolute flex flex-col justify-center items-center text-center w-full px-4 max-[640px]:gap-[10px] max-[640px]:mt-[15px]">
        <h1
          className="font-bold Recoleta mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-[64px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] leading-6 sm:leading-8 md:leading-10 lg:leading-[60px] xl:leading-[70px] tracking-[-0.5%] sm:tracking-[-0.7%] xl:tracking-[-1%]
            2xl:text-[110px] 2xl:leading-[120px]
          "
        >
          AI-Powered Learning <br className="hidden sm:block" />
          for Tomorrow&apos;s Leaders
        </h1>
        <p
          className="text-[14px] sm:text-[15px] md:text-[16px] 
          lg:text-[17px] xl:text-[18px] font-medium leading-5 sm:leading-6 
          md:leading-7 lg:leading-[26px] xl:leading-[28px] tracking-[-0.1px]
           sm:tracking-[-0.15px] lg:tracking-[-0.2px] xl:tracking-[-0.22px]
            text-[#474645] mt-3 sm:mt-4 lg:mt-4 xl:mt-4
            2xl:text-[30px] 2xl:leading-[40px] max-[640px]:mt-[0px]"
        >
          Empowering Students with Personalized, Interactive Learning{' '}
          <br className="hidden lg:block" />
          Designed to Build Essential Skills for Future Success
        </p>
        <div className="flex justify-center mt-6 sm:mt-7 lg:mt-8 xl:mt-9">
          <button
            onClick={() => navigate('/login')}
            className="py-3 sm:py-3 lg:py-4 xl:py-4 
                px-12 sm:px-14 lg:px-16 xl:px-[77px] bg-[#FF3400]
                 rounded-full text-white text-[14px] sm:text-[15px]
                 lg:text-[16px] xl:text-[18px] font-semibold cursor-pointer
                 hover:shadow-[0_6px_0_0_#C52800] transition
                 2xl:text-[30px]
                 "
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
