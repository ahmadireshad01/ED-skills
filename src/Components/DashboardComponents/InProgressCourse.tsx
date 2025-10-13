import React, { useEffect, useState } from "react";
import  CircularProgress from "../../Components/DashboardComponents/CircleProgress";


export default function InprogressCourse(props: any){
    return(
    <>
      <div className="justify-between items-center w-full h-[85px] rounded-2xl bg-white px-3 flex gap-1.5 
          shadow-md hover:shadow-xl transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1 cursor-pointer">

          <div className="flex items-center gap-5">
              <span className={`rounded-lg w-[54px] h-[54px] bg-[${props.bg}] flex items-center justify-center 
                  transition-transform duration-500 hover:rotate-6 hover:scale-110 hover:shadow-md`}>
                  <img className="w-[27px] transition-transform duration-500 group-hover:scale-110" src={props.icon} alt="" />
              </span>

              <div className="flex flex-col gap-2 transition-all duration-300">
                  <span className="flex items-center justify-center font-pp-mori font-semibold text-[11.63px] leading-[15.09px] 
                      tracking-[0%] w-fit px-1 h-[24px] border border-gray-400 rounded-2xl text-center 
                      transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                      {props.subject}
                  </span>
                  <p className="font-inter-tight font-semibold text-[17.33px] leading-[31.99px] tracking-[0%] 
                      transition-all duration-300 hover:text-gray-700 hover:scale-[1.02]">
                      {props.topic}
                  </p>
              </div>
          </div>

          <div className="flex items-center gap-12">
              <div className="flex flex-col gap-1 items-center justify-center h-[97px] transition-all duration-300 hover:scale-[1.03]">
                  <p className="text-[#6B6B6B] font-pp-mori font-normal text-[16.66px] leading-[31.99px] tracking-[-0.02em]">Content</p>
                  <p className="font-pp-mori font-semibold text-[17.33px] leading-[31.99px] tracking-[-0.02em]">{props.content}</p>
              </div>

              <div className="flex flex-col gap-1 items-center justify-center h-[97px] transition-all duration-300 hover:scale-[1.03]">
                  <p className="text-[#6B6B6B] font-pp-mori font-normal text-[16.66px] leading-[31.99px] tracking-[-0.02em]">Progress</p>
                  <div className="flex items-center gap-2">
                      <div className="transition-transform duration-500 hover:rotate-[360deg]">
                          <CircularProgress percentage={props.progress} size={40} strokeWidth={4} />
                      </div>
                      <p className="font-pp-mori font-semibold text-[17.33px] leading-[31.99px] tracking-[-0.02em]">{props.progress}%</p>
                  </div>
              </div>

              <div className="flex flex-col gap-1 items-center h-[97px] justify-center transition-all duration-300 hover:scale-[1.03]">
                  <p className="text-[#6B6B6B] font-pp-mori font-normal text-[16.66px] leading-[31.99px] tracking-[-0.02em]">Duration</p>
                  <div className="flex items-center gap-1">
                      <img className="w-[23px] transition-transform duration-500 hover:rotate-12" src="/images/dashBoard/clock.svg" alt="" />
                      <p className="font-pp-mori font-semibold text-[17.33px] leading-[31.99px] tracking-[-0.02em]">{props.duration}</p>
                  </div>
              </div>
          </div>
          
          <button className="w-[118px] h-[36px] shadow-[0px_3.33px_0px_0px_#E3E3DE] rounded-[29px] border border-[#E3E3DE] 
              font-[roboto] font-semibold text-[18.66px] leading-[35.59px] tracking-[-0.02em] 
              transition-all duration-300 hover:bg-black hover:text-white hover:shadow-md hover:scale-105">
              Start
          </button>
      </div>

    </>)
}