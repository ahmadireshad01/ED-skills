import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const renderCustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 0.79; // position label
  const angleOffset = -4; // moves label slightly toward arc end
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
  const COLORS = ['#FED216', '#BFE942', '#FD823A', '#AF9EEF'];
  return (
    <div className="w-[400px] lg:w-[405px]  ml-3 lg:ml-0 lg:h-[914px]  py-2 lg:mt-[20px] mt-4 lg:mr-3 sm:ml-[20%] bg-[#EEEEE4] rounded-2xl flex flex-col justify-between items-center px-2 transition-all duration-300 ease-in-out hover:shadow-2xl">

      {/* Top Section */}
      <div className="relative mt-auto flex flex-col gap-6 items-center  h-[327px]">
        {/* Top bar */}
        <div className="w-full sm:w-[386px] h-[100px] bg-white rounded-2xl flex justify-between items-start p-1 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <button className="p-3 hover:scale-110 transition-transform duration-300">
            <img className="w-[23px]" src="/images/DashBoardSideBar/massage.svg" alt="" />
          </button>
          <button className="p-3 hover:scale-110 transition-transform duration-300">
            <img className="w-[21px]" src="/images/DashBoardSideBar/settings.svg" alt="" />
          </button>
        </div>

        {/* Profile image */}
        <img
          className="absolute top-[54px] w-[114px] h-[114px] border-4 border-[#EEEEE4] rounded-full bg-[#a7ced5] hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 ease-out hover:-translate-y-1 hover:rotate-[0.5deg]"
          src="/images/DashBoardSideBar/profileImage.svg"
          alt=""
        />

        <h1 className="mt-[54px] font-bold text-2xl font-serif text-black text-center">
          Sophia Guesh
        </h1>

        {/* Stats cards */}
        <div className="mt-0 flex justify-center items-center gap-3 w-full">
          {[
            { icon: "points", value: "100", label: "Points" },
            { icon: "badges", value: "32", label: "Badges" },
            { icon: "certificates", value: "32", label: "Certificates" },
          ].map((item) => (
            <div
              key={item.label}
              className="w-[120px]  h-[105px] border-0 bg-white flex flex-col justify-center items-center rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img className="w-[23px] mt-2" src={`/images/dashBoard/${item.icon}.svg`} alt={item.label} />
              <p className="font-semibold text-[23px] -mb-1">{item.value}</p>
              <p className="text-[15px] text-[#6B6B6B]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* White Card with PieChart */}
      <div className="items-center w-[383px] h-[379px] bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 mt-6 flex flex-col p-4">
        <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
          <div className="flex flex-col w-full sm:w-[347px] gap-2">
            <div className="flex justify-between">
              <p className="text-[#6B6B6B] font-pp-mori font-semibold text-[14px] leading-[20px] tracking-[-0.02em]">Activity</p>
              <button>Year</button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center">
              <p className="font-pp-mori font-semibold text-[24px] leading-[28.8px] tracking-[-0.02em] text-center">3.5h</p>
              <div className="w-[106px] h-[26px] rounded-2xl bg-[#EEEEE4] pl-1 flex items-center justify-center text-sm">👍Great Job!</div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#EEEEE4] h-[1px] my-2"></div>

        {/* Pie Chart */}
        <div className="relative w-full sm:w-[320px] h-[320px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={115}
                paddingAngle={6}
                dataKey="value"
                cornerRadius={11}
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
          <div className="absolute top-9 left-[10px] bg-white shadow  w-[91px] h-[39px] rounded-full px-2 py-1 flex items-center justify-center gap-2">
            <span className="h-[6px] w-[6px] bg-green-400 rounded-full"></span>
            <span className="text-[14px] font-semibold">Passed</span>
          </div>
        </div>
      </div>

      {/* Content/Learning cards */}
      <div className="flex flex-wrap justify-center items-center gap-3 pb-3 mt-4 w-full">
        {[
          { icon: "date", value: "120", label: "Content" },
          { icon: "time", value: "120", label: "Learning" },
        ].map((item) => (
          <div
            key={item.label}
            className="w-[186px] h-[154px]  bg-[#F9F9F3] rounded-2xl flex flex-col p-4 gap-4 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-center items-center gap-6">
              <span className='w-[56px] h-[56px] bg-white flex items-center justify-center rounded-full'><img src={`/images/dashBoard/${item.icon}.svg`} alt={item.label} /></span>
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="font-pp-mori font-semibold text-[24px] leading-[24px] tracking-[-0.02em]">{item.value}</p>
                <p className="font-pp-mori font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-[#6B6B6B]">{item.label}</p>
              </div>
            </div>
            <button className="w-full sm:w-[149px] h-[43px] font-semibold border-1 border-gray-300 rounded-3xl shadow-lg hover:bg-black hover:text-white hover:scale-105 transition-all duration-300">
              View all
            </button>
          </div>
        ))}
      </div>
    </div>

  );
}
