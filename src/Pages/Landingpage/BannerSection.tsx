import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export default function BannerSection() {
  return (
    <div className="w-full md:mt-[70px] flex justify-center overflow-hidden 2xl:mt-[-70px] 2xl:relative 2xl:right-[-40px]">
      <div className="max-w-full scale-100 md:scale-100 sm:scale-[0.9] xs:scale-[0.8] origin-top">
        <div className="md:flex gap-5 mt-8">
          <div className="lg:flex lg:items-baseline-last ">
            <div className="">
              <div className="relative lg:mr-3">
                {/* Background Image */}
                <img
                  src="/public/images/Banner/img1.svg"
                  alt="banner"
                  className="w-auto h-auto 2xl:w-[950px] 2xl:h-[950px] max-[640px]:mt-[62px]"
                />

                {/* Content */}
                <div
                  className="absolute left-[210px] bottom-[130px] inset-0 
                         flex flex-col justify-center items-center text-center px-4
                         lg:left-[140px] lg:bottom-[80px] xl:left-[210px]
                         xl:bottom-[130px] md:left-[180px] md:bottom-[110px]
                         2xl:left-[340px] 2xl:top-[-75px] max-[640px]:left-[78px] min-[1052px]:top-[-22px] min-[1052px]:right-[-23px] min-[1300px]:top-[6px] min-[1300px]:right-[14px]
                         "
                >
                  <span
                    className="lg:text-[14px] lg:leading-[14px] 
                      xl:text-[20px] xl:leading-[20.96px] xl:tracking-[-2%]
                      md:text-[17px] md:leading-[19px] leading-[20.96px] 
                      tracking-[-2%] font-extrabold
                      2xl:text-[30px] 2xl:leading-[30px] max-[640px]:text-[13px] max-[640px]:leading-[20px] max-[640px]:relative  max-[640px]:top-[25px] max-[640px]:left-[28px]

                     "
                  >
                    Learn anytime, <br /> anywhere with our <br /> online
                    courses.
                  </span>
                  <div
                    className="flex gap-1 items-baseline md:mt-2 
                    mt-2 lg:mt-1 lg:flex lg:items-center xl:pt-[13px] max-[640px]:hidden"
                  >
                    <img
                      className="md:h-[14px] w-auto 2xl:h-[25px]"
                      src="/public/images/Banner/icon.svg"
                      alt="icon"
                    />
                    <h1
                      className="font-bold md:text-[14px] text-[11px]
                       lg:text-[12px] leading-[10px] tracking-[-0.02em]
                       2xl:text-[30px]
                       "
                    >
                      MyEdSkills
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="md:flex md:mt-6 max-[640px]:mt-[10px] 
                  min-[1340px]:top-[-27px] min-[1340px]:relative"
            >
              <div
                className="flex flex-col md:gap-4 lg:flex lg:gap-3
                 lg:relative top-[85px] min-[1300px]:pt-[15px] min-[1439px]:pt-[0px]
                   min-[1439px]:top-[4px]  xl:gap-[25px] 
                   2xl:top-[-145px] 2xl:left-[20px]
                   min-[1340px]:top-[9px]
                   min-[1025px]:top-[52px]
                   
                   "
              >
                <div className="relative w-full">
                  {/* Background Image */}
                  <img
                    src="/public/images/Banner/img2.svg"
                    alt="background"
                    className="w-auto h-aut 2xl:w-[400px] 2xl:h-[300px] max-[640px]:w-full"
                  />

                  {/* Content on top of image */}
                  <div
                    className="absolute inset-3 md:top-[70px] md:flex md:flex-col
                     md:justify-end md:items-center text-center pb-5 xl:pb-[23px]
                     2xl:bottom-[55px]
                     "
                  >
                    <div
                      className="flex items-center gap-2 md:relative
                       md:bottom-[-10px] lg:bottom-[-30px] xl:gap-2
                       2xl:bottom-[-15px] max-[640px]:mt-[120px] max-[640px]:ml-[30px] max-[640px]:items-center max-[640px]:justify-center 
                       "
                    >
                      <h1
                        className="font-bold text-[31.01px] md:text-[27px]
                         lg:text-[21px] xl:text-[31.01px] leading-[31.5px]
                         tracking-[-0.04em] 2xl:text-[50px]"
                      >
                        Professional
                      </h1>
                      <img
                        className="md:h-[30px] lg:h-[20px] 
                          xl:h-[29.49px] w-auto 
                          2xl:h-[40px]
                          "
                        src="/public/images/Banner/img6.svg"
                        alt="icon"
                      />
                    </div>

                    <div
                      className="flex items-center gap-2 md:gap-2 
                       md:relative md:bottom-[-17px] lg:bottom-[-20px]
                       xl:pt-3 xl:gap-[0px] max-[640px]:items-center max-[640px]:justify-center max-[640px]:ml-[20px]"
                    >
                      <img
                        className="md:h-[20px] lg:h-[10px] 
                          xl:h-[21px] w-auto 
                          2xl:h-[30px]
                          "
                        src="/public/images/Banner/img5.svg"
                        alt="icon"
                      />
                      <h1
                        className="font-bold text-[31.01px] md:text-[27px] 
                        lg:text-[21px] xl:text-[31.01px] xl:leading-[31.5px] 
                        leading-[31.5px] tracking-[-0.04em] 
                        2xl:text-[50px]
                        "
                      >
                        Teachers
                      </h1>
                    </div>
                  </div>
                </div>

                <div
                  className="relative top-[-8px] max-[640px]:flex max-[640px]:justify-center
                   max-[640px]:mt-[20px]  max-[640px]:w-[full] min-[1025px]:mt-[7px]
                   min-[1340px]:top-[-15px] min-[1340px]:relative"
                >
                  {/* Background image */}
                  <img
                    src="/public/images/Banner/img3.svg"
                    alt="background"
                    className="w-auto h-auto 2xl:w-[400px] 2xl:h-[350px] max-[640px]:w-full"
                  />

                  {/* Text on top of the image */}
                  <h1
                    className="absolute md:text-[25px] lg:text-[20px]
                        lg:leading-[20px] md:leading-[27px] lg:pl-4 xl:text-[26.94px]
                        xl:leading-[25.67px] xl:tracking-[-2%] inset-0 flex pl-[23px] 
                        items-start mt-6 font-bold text-[25.67px] leading-[25.67px]
                        tracking-[-0.02em] 
                        2xl:text-[45px] 2xl:leading-[40px] 2xl:py-[20px] 2xl:pl-[40px]
                        max-[640px]:ml-[26px] max-[640px]:text-[35px] max-[640px]:leading-[35px]
                        "
                  >
                    Every child <br /> deserves the <br /> chance to <br />{' '}
                    learn
                  </h1>
                </div>
              </div>

              <div
                className="relative flex justify-center 
                   items-center lg:ml-2
                   2xl:top-[-145px] 2xl:left-[-25px] min-[1025px]:h-[373px]
                  min-[1340px]:relative min-[1340px]:top-[15px] 
                "
              >
                {/* Background image */}
                <div
                  className="relative w-full  rounded-2xl 
                  overflow-hidden  min-[1300px]:top-[12px] min-[1430px]:top-0 min-[1052px]:h-full
                  min-[1340px]:h-[400px]"
                >
                  <img
                    src="/public/images/Banner/img4.svg"
                    alt="course"
                    className=" object-contain pl-1 relative 
                      md:top-[-10px]  lg:top-[40px] lg:h-[350px]
                       lg:w-[317px] xl:top-0 xl:w-[316.47px] xl:h-[407.44px]
                       2xl:w-[650px] 2xl:h-[660px] max-[640px]:w-full 
                       min-[1340px]:relative 
                       "
                  />

                  {/* Bottom info bar */}
                  <div
                    className="absolute bottom-4 left-5 lg:left-1
                       xl:left-[21px] xl:bottom-[15px] lg:bottom-[2px]
                       md:bottom-[24px] flex items-center justify-center
                       px-[28] py-4  min-[1360px]:top-[300px] 
                       2xl:left-[80px] 2xl:bottom-[-180px] 2xl:right-[100px]  min-[1055px]:right-[28px]
                       min-[1340px]:right-[50px]  min-[1357px]:top-[80px] min-[1439px]:top-[305px] xl:text-nowrap 
                       "
                  >
                    {/* Left: Course info */}
                    <div
                      className="pl-[21px] md:px-[18px] pr-[28px] 
                      lg:leading-[20px] xl:pl-[21px]  min-[1300px]:bottom-5
                      2xl:relative 2xl:top-0 2xl:left-[-10px] 2xl:leading-[35px] 
                      "
                    >
                      <span
                        className="font-extrabold md:text-[17px] md:leading-[12px]
                         text-[23.67px] lg:text-[13px] xl:text-[23.67px] tracking-[-0.02em]
                         2xl:text-[35px] 
                         "
                      >
                        Math
                      </span>
                      <br />
                      <span
                        className="font-medium text-[14.94px] md:text-[14px] lg:text-[11px] 
                        xl:text-[14.64px] md:leading-[-125px] leading-[22.64px] tracking-[-0.02em] text-[#434343]
                        2xl:text-[25px]
                        "
                      >
                        For Beginner
                      </span>
                    </div>

                    {/* Middle: Button */}
                    <div
                      className="pt-3 lg:pb-3 pr-4 xl:pr-2 xl:right-[-10px] xl:relative
                       lg:w-[35px] min-[1300px]:left-[2px] min-[1439px]:left-[5px]
                       

                       "
                    >
                      {/* <img
                          src="/public/images/Banner/ButtonR.svg"
                          alt="button"
                          className="w-auto h-auto xl:w-[28.94px] xl:h-[28.94px]
                           2xl:w-[100px] 2xl:h-[100px] 

                          "
                        /> */}

                      <button
                        className="flex items-center justify-center 
                         bg-[#DFF25D] text-black rounded-full
                          w-[30px] h-[30px] xl:w-[35px] xl:h-[35px] 
                           2xl:w-[40px] 2xl:h-[40px] 
                          min-[1025px]:relative min-[1025px]:right-[5px]
                          
                          "
                      >
                        <FaArrowRight
                          className="w-auto h-auto xl:w-[28.94px] xl:h-[28.94px]

                          "
                        />
                      </button>
                    </div>

                    {/* Right: Duration */}
                    <div
                      className="text-right pl-[30px] lg:pl-[15px]
                       xl:pl-[34px] lg:leading-[20px]
                       2xl:px-[50px] 2xl:relative 2xl:right-[-25px] 2xl:top-[-10px]

                       "
                    >
                      <span
                        className="font-extrabold pr-[22px] xl:pr-[20px] text-[23.67px] md:text-[18px]
                         xl:text-[23.67px] text-start tracking-[-0.02em]
                         2xl:text-[35px] 2xl:leading-[50px] 2xl:pr-[40px]

                         "
                      >
                        12
                      </span>
                      <br />
                      <span
                        className="font-medium text-[14.94px] md:text-[14px] 
                         leading-[22.64px] tracking-[-0.02em] text-[#434343]
                         2xl:text-[25px]
                         "
                      >
                        Weeks
                      </span>
                    </div>
                  </div>
                </div>

                {/* Centered image */}
                <div
                  className="absolute bottom-[100px] lg:bottom-[70px]
                   xl:bottom-[71px] inset-0 flex justify-center items-end
                    min-[1300px]:mb-[-5px] min-[1439px]:mb-0  
                    2xl:bottom-[170px] 2xl:right-[-0px]  
                    "
                >
                  <img
                    className="bg-[#DFF25D] rounded-full 
                       lg:w-[30px] xl:w-[41px] 2xl:w-[70px] 2xl:h-[70px] max-[640px]:mb-[12px] 
                       "
                    src="/public/images/Banner/img7.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
