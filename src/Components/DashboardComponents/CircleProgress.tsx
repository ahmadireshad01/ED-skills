import { useState , useEffect } from "react";

interface CircularProgressProps {
    percentage?: number;
    size?: number;
    strokeWidth?: number;
    strokeColor?: string;
    backgroundColor?: string;
  }
  
  export default function CircularProgress({
    percentage = 0,
    size = 40,
    strokeWidth = 4,
    strokeColor = "#10B981", // Tailwind emerald-500
    backgroundColor = "#E5E7EB", // Tailwind gray-200
  }: CircularProgressProps) {
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