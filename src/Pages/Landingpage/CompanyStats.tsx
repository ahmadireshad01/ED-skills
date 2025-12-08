import React from 'react';

export default function CompanyStats() {
  return (
    <div
      className="mt-[77px] md:mt-[65px] xl:mt-[77px]
      2xl:mb-[77px] 2xl:relative 2xl:top-[-77px]

      "
    >
      <div className="flex justify-center relative">
        {/* Background pattern */}
        <img
          src="/public/images/company/patern.svg"
          alt="pattern"
          className="w-full  h-auto  max-w-[1440px]
           2xl:max-w-[1900px]
            "
        />

        {/* Centered content */}
        <div
          className="absolute top-[40px] xl:top-[0px] inset-0 
          flex flex-col items-center justify-center px-4
          "
        >
          <h1
            className="font-semibold text-[24px] md:text-[18px] lg:text-[21px] sm:text-[15px] xl:text-[24px] xl:leading-[32px]
             xl:tracking-[-1%] xl:pt-[22px] text-center text-[#03041666] leading-[32px] md:leading-[26px] sm:leading-[22px] tracking-[-1%]
             2xl:text-[40px] 2xl:leading-[50px]  max-[640px]:mt-[100px]
             "
          >
            <span className="text-black">25,000+</span> Students <br />
            Empowered Since Launch
          </h1>

          {/* Company logos */}
          <div
            className="relative flex flex-wrap justify-center gap-11 md:gap-6 md:bottom-[25px]
             lg:top-[-5px] sm:gap-4 xl:gap-[46px] mt-7
             2xl:top-[20px] 2xl:gap-[90px] max-[640px]:flex max-[640px]:flex-row max-[640px]:flex-nowrap
             "
          >
            <div className="max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center contents">
              <a
                href="https://www.hw.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img1.svg"
                  alt="logo1"
                  className="cursor-pointer w-[120px] md:w-[40px]
                   lg:w-[50px] sm:w-[70px] xl:w-[62px] xl:h-[73px] 
                   2xl:w-[90px] 2xl:h-[100px]  max-[640px]:w-[60px]
                   "
                />
              </a>
              <a
                href="https://www.andover.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img2.svg"
                  alt="logo2"
                  className="cursor-pointer w-[120px] 
                  md:w-[40px] lg:w-[50px] sm:w-[70px]
                   xl:w-[62px] xl:h-[73px]
                   2xl:w-[90px] 2xl:h-[100px]  max-[640px]:w-[60px]
                   "
                />
              </a>
              <a
                href="https://www.horacemann.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img3.svg"
                  alt="logo3"
                  className="cursor-pointer w-[120px]
                   md:w-[40px] lg:w-[50px] sm:w-[70px]
                    xl:w-[62px] xl:h-[73px]
                   2xl:w-[90px] 2xl:h-[100px]  max-[640px]:w-[60px]
                    "
                />
              </a>
            </div>
            <div className="max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center contents">
              <a
                href="http://lakesideschool.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img4.svg"
                  alt="logo4"
                  className="cursor-pointer w-[120px]
                   md:w-[40px] lg:w-[50px] sm:w-[70px]
                    xl:w-[62px] xl:h-[73px]
                   2xl:w-[90px] 2xl:h-[100px]  max-[640px]:w-[60px]
                    "
                />
              </a>
              <a
                href="https://www.sidwell.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img5.svg"
                  alt="logo5"
                  className="cursor-pointer w-[120px]
                   md:w-[40px] lg:w-[50px] sm:w-[70px]
                    xl:w-[62px] xl:h-[73px]
                   2xl:w-[90px] 2xl:h-[100px]  max-[640px]:w-[60px] 
                    "
                />
              </a>
              <a
                href="https://www.stmarksschool.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img6.svg"
                  alt="logo6"
                  className="cursor-pointer w-[120px]
                   md:w-[35px] lg:w-[45px] sm:w-[70px]
                    xl:w-[62px] xl:h-[73px]
                   2xl:w-[90px] 2xl:h-[100px]  max-[640px]:w-[60px]
                    "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
