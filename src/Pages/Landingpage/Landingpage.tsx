export default function Landingpage() {
  const row1 = [
    {
      title: "All Subject",
      color: "bg-[#FFD5CA]",
      icon: "/public/images/subjects/img1.svg",
    },
    {
      title: "English",
      color: "bg-[#FAEAFA]",
      icon: "/public/images/subjects/img2.svg",
    },
    {
      title: "Business",
      color: "bg-[#EAF3AB]",
      icon: "/public/images/subjects/img3.svg",
    },
    {
      title: "History",
      color: "bg-[#E3EFFF]",
      icon: "/public/images/subjects/img4.svg",
    },
    {
      title: "Geography",
      color: "bg-[#FBEEE2]",
      icon: "/public/images/subjects/img5.svg",
    },
    {
      title: "Chemistry",
      color: "bg-[#E4F7EF]",
      icon: "/public/images/subjects/img6.svg",
    },
  ];

  const row2 = [
    {
      title: "Physics",
      color: "bg-[#E4F7EF]",
      icon: "/public/images/subjects/img7.svg",
    },
    {
      title: "Engineering",
      color: "bg-[#E3EFFF]",
      icon: "/public/images/subjects/img8.svg",
    },
    {
      title: "Medicine",
      color: "bg-[#FAEAFA]",
      icon: "/public/images/subjects/img9.svg",
    },
    {
      title: "Computers",
      color: "bg-[#E8E2FF]",
      icon: "/public/images/subjects/img10.svg",
    },
  ];

  const row3 = [
    {
      title: "Mathematics",
      color: "bg-[#E8E2FF]",
      icon: "/public/images/subjects/img11.svg",
    },
    {
      title: "Arts",
      color: "bg-[#EAF3AB]",
      icon: "/public/images/subjects/img12.svg",
    },
  ];

  // Helper function to render rows
  const renderRow = (row) => (
    <div className="flex gap-6">
      {row.map((subject, index) => (
        <div
          key={index}
          className={`rounded-2xl border border-[#E5E5E5] shadow-[0_6px_0_0_#B1B1AC4D] 
        flex flex-col items-center justify-center p-6 w-40 
        transition-transform duration-300 ease-in-out 
        hover:shadow-xl hover:scale-105 
        ${index % 2 === 0 ? "bg-[#F9F9F3]" : "bg-white"}`}
        >
          <div
            className={`rounded-full flex items-center justify-center mb-3 px-[32px] py-[17px] ${subject.color} transition-all duration-300`}
          >
            <img src={subject.icon} alt={subject.title} className="w-6 h-6" />
          </div>
          <p className="text-base font-medium text-gray-700 text-center transition-colors duration-300">
            {subject.title}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#F9F9F3] px-[124px]">
      {/* Hero Section */}
      <div className="relative flex justify-center items-center">
        <img
          src="/images/Banner/bannner.svg"
          alt="banner"
          className="w-full h-auto"
        />
        <div className="absolute flex flex-col justify-center items-center text-center">
          <h1 className="font-bold Recoleta mt-[64px] text-[72px] leading-[70px] tracking-[-1%]">
            AI-Powered Learning <br /> for Tomorrow&apos;s Leaders
          </h1>
          <p className="text-[18px] font-medium leading-[28px] tracking-[-0.22px] text-[#474645] mt-4">
            Empowering Students with Personalized, Interactive Learning <br />
            Designed to Build Essential Skills for Future Success
          </p>
          <div className="flex justify-center mt-9">
            <button className="py-4 px-[77px] bg-[#FF3400] rounded-full text-white text-[18px] font-semibold cursor-pointer hover:shadow-[0_6px_0_0_#C52800]  transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Banner images */}
      <div className="flex gap-5 mt-8">
        <img src="/public/images/Banner/img1.svg" alt="" />
        <div className="flex flex-col justify-between">
          <img src="/public/images/Banner/img2.svg" alt="" />
          <img src="/public/images/Banner/img3.svg" alt="" />
        </div>
        <img src="/public/images/Banner/img4.svg" alt="" />
      </div>

      {/* Company Stats */}
      <div className="mt-[77px]">
        <div className="flex justify-center relative">
          <img src="/public/images/company/patern.svg" alt="patern1" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="font-semibold text-[24px] text-center text-[#03041666] leading-[32px] tracking-[-1%]">
              <span className="text-black">25,000+</span> Students <br />
              Empowered Since Launch
            </h1>
            <div className="flex justify-center gap-11 mt-7">
              <img src="/public/images/company/img1.svg" alt="" />
              <img src="/public/images/company/img2.svg" alt="" />
              <img src="/public/images/company/img3.svg" alt="" />
              <img src="/public/images/company/img4.svg" alt="" />
              <img src="/public/images/company/img5.svg" alt="" />
              <img src="/public/images/company/img6.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex justify-between items-end mt-16">
        <div>
          <h1 className="Recoleta font-bold text-[56px] mr-[57px] leading-[60px] tracking-[-1.02px]">
            Skills That <br /> Shape Tomorrow
          </h1>
        </div>
        <div>
          <img src="/public/images/Cart/icon.svg" alt="" />
          <p className="font-medium text-[18px] mt-[20px] leading-[28px] tracking-[-0.22px]">
            Learn Essential Life Skills Tailored to Help <br /> You Succeed in
            School, Work, and Life
          </p>
        </div>
        <div>
          <button className="py-3 px-8 bg-[#FF3400] rounded-full text-white text-[18px] font-semibold cursor-pointer hover:shadow-[0_6px_0_0_#C52800]  transition">
            Join now
          </button>
        </div>
      </div>

      {/* Skills images */}
      <div className="flex gap-[20px] mt-[66px]">
        <img src="/public/images/Cart/img1.svg" alt="" />
        <img src="/public/images/Cart/img2.svg" alt="" />
        <img src="/public/images/Cart/img3.svg" alt="" />
      </div>

      {/* Section Title */}
      <div className="mt-[107px] relative flex justify-center">
        <img src="/public/images/subjects/icons.svg" alt="" />
        <h1 className="absolute inset-0 flex items-center justify-center text-[55px] text-center leading-[60px]">
          Where Questions <br /> Meet Answers
        </h1>
      </div>

      {/* Subjects Grid */}
      <div className=" flex flex-col items-center gap-5 mt-3">
        {renderRow(row1)}
        {renderRow(row2)}
        {renderRow(row3)}
      </div>

      {/* Last Section */}
      <div className="flex gap-[63px] mt-[176px]">
        <div className="relative">
          <img src="/public/images/Cart2/backimg.svg" alt="" />
          <div className="absolute inset-0 top-[170px] flex flex-col items-start justify-center ">
            <h1 className="Recoleta font-bold  text-[56px] leading-[60px] tracking-[-1px]">
              Experience <br /> Learning Like <br /> Never Before
            </h1>
            <p className="font-medium text-[18px] leading-[30px] tracking-[-0.22px] mt-[24px] ">
              Discover Personalized, AI-Powered <br /> Learning That Prepares
              Students for <br /> Success in the Real World
            </p>
            <button className="py-3 px-8 mt-[32px] bg-[#FF3400] rounded-full text-white text-[18px] font-semibold cursor-pointer hover:shadow-[0_6px_0_0_#C52800]  transition">
              Start Your Journey
            </button>
          </div>
        </div>

        <div>
          <div>
            <img src="/public/images/Cart2/img1.svg" alt="" />
          </div>
          <div className="flex gap-5 mt-5">
            <img src="/public/images/Cart2/img2.svg" alt="" />
            <img src="/public/images/Cart2/img3.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="mt-20 relative w-full">
        {/* Background Image */}
        <img
          src="/images/community/bgimg.svg"
          alt="background"
          className="w-full h-auto"
        />

        {/* Content centered on the image using flex */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <img src="/images/community/icon.svg" alt="icon" className="mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  mb-8 leading-[60px]">
            Join Our <br /> Community <br /> Banner
          </h1>
          <button className="py-3 px-8 bg-[#FF3400] rounded-full cursor-pointer text-white text-[18px] font-semibold  hover:shadow-[0_6px_0_0_#C52800]  transition">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}
