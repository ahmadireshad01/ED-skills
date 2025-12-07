import React from 'react';

export default function SillsHeader() {
  return (
    <div
      className="flex gap-[20px] mt-[66px] md:flex-wrap
      lg:flex-nowrap justify-center md:gap-[16px] sm:gap-[12px]
      2xl:gap-[30px] max-[640px]:flex-col
      "
    >
      {/* Card 1 */}
      <div
        className="relative bg-[#FF9F87] rounded-3xl overflow-hidden
         w-full sm:w-[90%] md:w-[48%] lg:w-auto 2xl:w-[600px]"
      >
        <div className="flex gap-14 px-8 absolute top-0 left-0 right-0">
          <h1
            className="font-semibold text-3xl md:text-[22px] sm:text-[18px]
                xl:text-[30px] xl:leading-[36px] leading-[36px] md:leading-[28px]
                lg:text-[21px] lg:leading-[25px] tracking-[-0.09px] pt-[26px] sm:pt-[20px]
               2xl:text-[55px] 2xl:leading-[55px] 2xl:px-[10px] 2xl:py-[30px] 
              "
          >
            Join My EdSkills <br /> to activate your <br /> learning
          </h1>
          <div
            className="absolute bottom-2 right-[-71px] sm:right-[-40px]
               md:right-[20px] md:bottom-[-5px] md:w-[40px] 
               bg-white rounded-full
              lg:w-[40px] xl:w-[48px]
              2xl:w-[60px] 
                "
          >
            <img
              src="/public/images/Cart/R-button.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <img
          src="/public/images/Cart/img1.svg"
          alt=""
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>

      {/* Card 2 */}
      <div
        className="relative bg-[#DDF24B] rounded-3xl pb-[12px] overflow-hidden w-full
         sm:w-[90%] md:w-[48%] lg:w-auto mt-4 md:mt-0 2xl:w-[600px]"
      >
        <div className="flex gap-14 px-8 absolute top-0 left-0 right-0">
          <h1
            className="font-semibold text-3xl md:text-[22px]
               sm:text-[18px]  lg:text-[21px] lg:leading-[25px] 
               xl:text-[30px] xl:leading-[36px]
               leading-[36px] md:leading-[28px]
               tracking-[-0.09px] pt-[26px] sm:pt-[20px] 
               2xl:text-[55px] 2xl:leading-[55px] 2xl:px-[10px] 2xl:py-[30px]
               "
          >
            Join My EdSkills <br /> to activate your <br /> teaching
          </h1>
          <div
            className="absolute bottom-2 right-[-71px] sm:right-[-40px]
               md:right-[20px] md:bottom-[-5px] md:w-[40px] 
               bg-white rounded-full
              lg:w-[40px] xl:w-[48px]
              2xl:w-[60px] 
                "
          >
            <img
              src="/public/images/Cart/R-button.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <img
          src="/public/images/Cart/img2.svg"
          alt=""
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>

      {/* Card 3 */}
      <div
        className="relative bg-[#CBBEFD] rounded-3xl pb-[12px] overflow-hidden w-full
         sm:w-[90%] md:w-[48%] lg:w-auto mt-4 md:mt-0 2xl:w-[600px]"
      >
        <div className="flex gap-14 px-8 absolute top-0 left-0 right-0 ">
          <h1
            className="font-semibold text-3xl md:text-[22px]
               lg:text-[21px] lg:leading-[25px] sm:text-[18px] xl:text-[30px]
               xl:leading-[36px] leading-[36px] md:leading-[28px]
               tracking-[-0.09px] pt-[26px] sm:pt-[20px]
               2xl:text-[55px] 2xl:leading-[55px] 2xl:px-[10px] 2xl:py-[30px]
               "
          >
            Join My EdSkills <br /> to activate your <br /> teaching
          </h1>
          <div
            className="absolute bottom-2 right-[-71px] sm:right-[-40px]
                md:right-[20px] md:bottom-[-5px] md:w-[40px] 
              bg-white rounded-full
                lg:w-[40px] xl:w-[48px]
                2xl:w-[60px]
                "
          >
            <img
              src="/public/images/Cart/R-button.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <img
          src="/public/images/Cart/img3.svg"
          alt=""
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}
