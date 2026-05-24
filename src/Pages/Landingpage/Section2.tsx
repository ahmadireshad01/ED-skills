// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();

export default function Section2() {
  return (
    <div
      className="flex flex-col lg:flex-row gap-[63px]
         lg:gap-[45px] mt-[176px] lg:mt-[100px] md:mt-[-30px]
         items-center lg:items-start
         2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center
         2xl:w-full"
    >
      {/* Left Section */}
      <div
        className="relative w-full lg:w-1/2 flex justify-center 
          md:justify-center md:items-center
          2xl:flex 2xl:justify-center 2xl:items-center 
            max-[640px]:mt-[0px] max-[640px]:gap-[0px]
          "
      >
        <img
          src="/public/images/Cart2/backimg.svg"
          alt="background"
          className="w-full max-w-[700px] sm:max-w-[450px] h-auto max-[640px]:h-[408px]"
        />

        <div
          className="absolute inset-0 flex flex-col 
             items-start justify-center 
             px-6 sm:px-4 
             lg:items-start lg:justify-center 
             md:items-center md:justify-center 
             top-[120px] sm:top-[80px] lg:top-[170px] 
             xl:left-[35px] 2xl:left-[350px] 2xl:top-[70px]   max-[640px]:items-center max-[640px]:justify-start max-[640px]:content-start max-[640px]:top-[50px]
               max-[640px]:h-[382px]
             "
        >
          <h1
            className="Recoleta font-bold text-[56px] leading-[60px] tracking-[-1px]
                lg:text-[45px] lg:leading-[50px] lg:text-start
                md:text-[38px] md:leading-[46px] md:text-center
                sm:text-[28px] sm:leading-[34px] sm:text-center
                2xl:text-[70px] 2xl:leading-[70px] max-[640px]:text-[35px] max-[640px]:leading-[35px] max-[640px]:text-center
                "
          >
            Experience <br /> Learning Like <br /> Never Before
          </h1>

          <p
            className="font-medium text-[18px] leading-[30px] tracking-[-0.22px] mt-[24px]
                  lg:text-[15px] lg:leading-[25px] lg:text-start
                  md:text-[15px] md:leading-[24px] md:text-center
                  sm:text-[13px] sm:leading-[22px] sm:text-center
                  2xl:text-[22px] 2xl:leading-[30px] max-[640px]:text-center
                  "
          >
            Discover Personalized, AI-Powered{' '}
            <br className=" max-[640px]:hidden inline" /> Learning That Prepares
            Students for <br className=" max-[640px]:hidden inline" /> Success
            in the Real World
          </p>

          <button
            onClick={() => window.location.href = '/login'}
            className="py-3 px-8 mt-[32px] bg-[#FF3400] rounded-full text-white text-[18px]
                    font-semibold cursor-pointer hover:shadow-[0_6px_0_0_#C52800] transition
                    md:text-[16px] sm:text-[14px] sm:px-6 sm:py-2 2xl:text-[25px] 2xl:px-[30px] 2xl:py-[15px]"
          >
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full md:mt-[-30px] lg:w-1/2 flex flex-col items-center
         lg:items-start px-4 lg:px-0 2xl:flex 2xl:justify-center 2xl:items-center min-[1052px]:gap-[20px]"
      >
        <div
          className="relative lg:top-[40px] xl:top-[170px] 
               w-full flex justify-center 2xl:justify-center
               
               "
        >
          <div
            className="absolute px-[45px] pt-[123px] md:pt-[40px]
               md:px-[90px] md:left-0 lg:pt-[110px] lg:px-[0px] *:
               2xl:left-[250px] 
               "
          >
            <h1
              className="Recoleta font-semibold text-white
                 text-[40px] leading-[42px] tracking-[-0.13px]
                 md:text-[28px] md:leading-[32px] sm:text-[22px]
                  sm:leading-[26px] lg:text-[25px] xl:text-[40px]
                   xl:leading-[42px] lg:leading-[30px] lg:px-[30px]
                   2xl:text-[45px] 2xl:leading-[45px]
                   "
            >
              Personalized <br /> Learning Paths
            </h1>
            <p
              className="font-normal text-[18px] text-white
                 leading-[24px] tracking-[-0.22px]
                md:text-[15px] sm:text-[13px] lg:text-[13px] 
                lg:leading-[19px] lg:px-[30px]
                xl:text-[18px] xl:leading-[24px] 
                2xl:text-[23px] 2xl:leading-[33px] 
                "
            >
              AI adapts courses to your unique <br /> learning style.
            </p>
          </div>
          <img
            src="/public/images/Cart2/img1.svg"
            alt="Learning paths"
            className="w-full max-w-[600px] sm:max-w-[400px]
              h-auto lg:max-w-[700px] lg:h-[300px] "
          />
        </div>

        {/* Bottom Cards */}
        <div
          className="flex flex-col md:flex-row gap-5 lg:gap-4 
               mt-5 lg:mt-[-10px] xl:mt-[170px] w-full justify-center
               items-center 2xl:gap-[30px] 2xl:mt-[205px]"
        >
          <div
            className="bg-[#DDF24B] relative px-[32px] py-[37px] rounded-[24px]
                flex flex-col justify-between w-full md:w-1/2 max-w-[400px]
                lg:w-[300px] lg:h-[210px] md:h-[250px]
                xl:w-[341px] xl:h-[330px] 
                2xl:w-[400px] 2xl:h-[400px]
                "
          >
            <div
              className="absolute top-[30px] right-[40px]
               sm:top-[20px] sm:right-[20px]
               max-[640px]:right-[64px] max-[640px]:top-[53px]
               "
            >
              <h1
                className="Recoleta font-semibold text-[30px] leading-[36px] tracking-[-0.09px]
                    md:text-[24px] lg:text-[21px] lg:leading-[25px] sm:text-[20px]
                    xl:text-[30px] xl:leading-[36px]
                    2xl:text-[40px] 2xl:leading-[40px]
                    2xl:px-[20px]

                    "
              >
                Earn While <br /> You Learn
              </h1>
            </div>

            <img
              src="/public/images/Cart2/img2.svg"
              alt="Earn while learn"
              className="w-full h-full object-contain"
            />

            <p
              className="absolute bottom-[30px] left-[40px] text-[18px] lg:text-[12px]
                  lg:leading-[17px]
                  xl:text-[18px] xl:leading-[24px]
                  leading-[22px] text-[#434343] font-medium md:text-[15px] 
                  sm:text-[13px] sm:left-[20px] 
                  2xl:text-[22px] 2xl:leading-[27px]
                  2xl:px-[20px]

                  "
            >
              Accumulate scholarship <br /> funds as you progress
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#AF9EEF] relative rounded-[24px] px-[39px] py-[37px] overflow-hidden
                 flex flex-col justify-between w-full md:w-1/2 max-w-[400px]
                 lg:w-[300px] lg:h-[210px] md:h-[250px]
                  xl:w-[384px] xl:h-[330px] 
                  2xl:w-[400px] 2xl:h-[400px]
                  "
          >
            <h1
              className="Recoleta font-semibold text-[30px] leading-[36px] tracking-[-0.09px]
                    absolute top-[37px] left-[39px] md:top-5
                    md:text-[24px] sm:text-[20px] sm:left-[20px] lg:text-[21px] lg:leading-[25px]
                    xl:text-[30px] xl:leading-[36px]
                     2xl:text-[40px] 2xl:leading-[40px]
                    2xl:px-[20px]  max-[640px]:text-[24px] max-[640px]:leading-[26px] max-[640px]:left-[27px]
                    "
            >
              Verified <br /> Credentials
            </h1>

            <img
              src="/public/images/Cart2/img3.svg"
              alt="Credentials"
              className="w-full h-full object-contain"
            />

            <p
              className="font-medium text-[18px] leading-[24px] text-[#474645]
                   absolute bottom-[20px] left-[39px]
                   md:text-[15px] md:bottom-7 lg:text-[12px] lg:leading-[17px]
                   xl:text-[18px] xl:leading-[24px]
                   sm:text-[13px] sm:left-[20px]
                   2xl:text-[22px] 2xl:leading-[27px]
                   2xl:px-[20px]  max-[640px]:left-[27px]
                   "
            >
              Secure blockchain certificates <br /> for your achievements
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
