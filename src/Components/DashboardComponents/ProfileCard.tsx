import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const renderCustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 0.85; // position label
  const angleOffset = 12; // moves label slightly toward arc end
  const angle = midAngle - angleOffset; // offset the position
  const x = cx + radius * Math.cos(-angle * RADIAN);
  const y = cy + radius * Math.sin(-angle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#000"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight={500}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default function ProfileCard() {

  const data = [
    { name: 'Group A', value: 300 },
    { name: 'Group B', value: 500 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#F5C545', '#C4E59C', '#ED844E', '#8EB1F9'];
    return (
      <div className="mr-[10px] mt-[7px] w-[410px]  bg-[#EEEEE4] rounded-2xl  flex flex-col justify-between items-center px-2 transition-all duration-300 ease-in-out hover:shadow-2xl">
        <div className="relative mt-3 flex flex-col gap-6 items-center">
          {/* Top bar */}
          <div className="w-[386px] h-[100px] bg-white rounded-2xl flex justify-between items-start p-3 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <button className="p-3 hover:scale-110 transition-transform duration-300">
              <img className="w-[21px]" src="/images/dashBoard/massage.svg" alt="" />
            </button>
            <button className="p-3 hover:scale-110 transition-transform duration-300">
              <img className="w-[21px]" src="/images/DashBoardSideBar/settings.svg" alt="" />
            </button>
          </div>
  
          {/* Profile image */}
          <img
            className="absolute top-[54px] w-[114px] h-[114px] border-4 border-[#EEEEE4] rounded-full bg-[#a7ced5]  hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 ease-out hover:-translate-y-1 hover:rotate-[0.5deg]"
            src="/images/DashBoardSideBar/profileImage.svg"
            alt=""
          />
  
          <h1 className="mt-[54px] font-bold text-2xl font-reboto text-black">
            Sophia Guesh
          </h1>
  
          {/* Stats cards */}
          <div className="mt-[0px] flex justify-center items-center gap-4 ">
            {[
              { icon: "points", value: "100", label: "Points" },
              { icon: "badges", value: "32", label: "Badges" },
              { icon: "certificates", value: "32", label: "Certificates" },
            ].map((item) => (
              <div
                key={item.label}
                className="w-[121px] h-[105px] bg-white flex flex-col justify-center items-center rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <img className="w-[22px] mt-2" src={`/images/dashBoard/${item.icon}.svg`} alt={item.label} />
                <p className="font-semibold text-[30px] -mb-1">{item.value}</p>
                <p className="text-[17px] text-[#6B6B6B]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Empty white card */}
        <div className="items-center w-[387px] h-[378px] bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 mt-6 flex flex-col ">
            <div className="flex flex-col p-5 w-[347px]">
                <div className="flex justify-between">
                    <p className="text-[#6B6B6B] font-pp-mori font-semibold text-[14px] leading-[20px] tracking-[-0.02em]">Activity</p>
                    <button>Year</button>
                </div>
                <div className="flex gap-5">
                    <p className="font-pp-mori font-semibold text-[24px] leading-[28.8px] tracking-[-0.02em] text-center">3.5h</p>
                    <div className="w-[106px] h-[26px]  rounded-2xl bg-[#EEEEE4] pl-1">👍Great Job!</div>
                </div>
            </div>
            <div className="w-[344px] bg-[#EEEEE4] h-[1px]"></div>
            {/*Pie Chart*/}
            <div className="relative w-[320px] h-[320px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={105}
                    paddingAngle={6}
                    dataKey="value"
                    cornerRadius={9} // <-- makes the ends rounded
                    labelLine={false}
                    label={renderCustomizedLabel}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Center text */}
              <div className="absolute flex flex-col items-center text-center">
                <span className="text-gray-400 text-sm">Contents</span>
                <span className="text-black font-bold text-4xl">140</span>
              </div>

              {/* Status badge */}
              <div className="absolute top-11 left-[10px] bg-white shadow w-[100px] h-[29px] rounded-full px-3 py-1 flex items-center justify-center gap-2">
                <span className="h-2 w-2 bg-green-400 rounded-full"></span>
                <span className="text-lg font-semibold">Passed</span>
              </div>
            </div>
          </div>
  
        {/* Content/Learning cards */}
        <div className="flex justify-center items-center gap-3 pb-3 mt-4">
          {[
            { icon: "date", value: "120", label: "Content" },
            { icon: "time", value: "120", label: "Learning" },
          ].map((item) => (
            <div
              key={item.label}
              className="w-[187px] h-[154px] bg-white rounded-2xl flex flex-col p-4 gap-4 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center items-center gap-6">
                <img src={`/images/dashBoard/${item.icon}.svg`} alt={item.label} />
                <div className="flex flex-col justify-center items-center gap-1">
                  <p className="font-pp-mori font-semibold text-[24px] leading-[24px] tracking-[-0.02em]">{item.value}</p>
                  <p className="font-pp-mori font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-[#6B6B6B]">{item.label}</p>
                </div>
              </div>
              <button className="w-[149px] h-[43px] rounded-3xl shadow-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300">
                View all
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  