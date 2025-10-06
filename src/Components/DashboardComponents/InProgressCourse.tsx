import React, { useEffect, useState } from "react";

interface CircularProgressProps {
  percentage?: number;
  size?: number;
  strokeWidth?: number;
  strokeColor?: string;
  backgroundColor?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage = 0,
  size = 40,
  strokeWidth = 4,
  strokeColor = "#10B981", // Tailwind emerald-500
  backgroundColor = "#E5E7EB", // Tailwind gray-200
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // Animate progress on mount or when percentage changes
  useEffect(() => {
    const timeout = setTimeout(() => setAnimatedProgress(percentage), 100);
    return () => clearTimeout(timeout);
  }, [percentage]);

  const offset = circumference - (animatedProgress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="white"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      
    </div>
  );
};

export default function InprogressCourse(props: any){
    return(
    <>
        <div className="justify-between items-center w-full h-[85px] rounded-2xl bg-white px-3 flex gap-1.5">
            <div className="flex items-center gap-5">
                <span className={`rounded-lg w-[54px] h-[54px] bg-[${props.bg}] flex items-center justify-center`}><img className="w-[27px]" src={props.icon} alt="" /></span>
                <div className="flex flex-col gap-2">
                    <span className="flex items-center justify-center font-pp-mori font-semibold text-[11.63px] leading-[15.09px] tracking-[0%]  w-fit px-1 h-[24px] border border-gray-400 rounded-2xl text-center">{props.subject}</span>
                    <p className="font-inter-tight font-semibold text-[17.33px] leading-[31.99px] tracking-[0%]">{props.topic}</p>
                </div>
            </div>

            <div className="flex items-center gap-12">
                <div className="flex flex-col gap-1 items-center justify-center h-[97px]">
                    <p className="text-[#6B6B6B] font-pp-mori font-normal text-[16.66px] leading-[31.99px] tracking-[-0.02em]">Content</p>
                    <p className="font-pp-mori font-semibold text-[17.33px] leading-[31.99px] tracking-[-0.02em]">{props.content}</p>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center h-[97px]">
                    <p className="text-[#6B6B6B] font-pp-mori font-normal text-[16.66px] leading-[31.99px] tracking-[-0.02em]">Progress</p>
                    <div className="flex items-center gap-2">
                        <CircularProgress percentage={props.progress} size={40} strokeWidth={4} />
                        <p className="font-pp-mori font-semibold text-[17.33px] leading-[31.99px] tracking-[-0.02em]">{props.progress}%</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 items-center h-[97px] justify-center">
                    <p className="text-[#6B6B6B] font-pp-mori font-normal text-[16.66px] leading-[31.99px] tracking-[-0.02em]">Duration</p>
                    <div className="flex items-center gap-1">
                        <img className="w-[23px]" src="images/dashBoard/clock.svg" alt="" />
                        <p className="font-pp-mori font-semibold text-[17.33px] leading-[31.99px] tracking-[-0.02em]">{props.duration}</p>
                    </div>
                </div>
            </div>
            
            <button className="w-[118px] h-[36px] shadow-[0px_3.33px_0px_0px_#E3E3DE] rounded-[29px] border border-[#E3E3DE] font-[roboto] font-semibold text-[18.66px] leading-[35.59px] tracking-[-0.02em] ">Start</button>
        </div>
    </>)
}