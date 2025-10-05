import { useNavigate } from 'react-router-dom';

export default function Landingpage() {
  const navigate = useNavigate();
  const row1 = [
    {
      title: 'All Subject',
      color: 'bg-[#FFD5CA]',
      icon: '/public/images/subjects/img1.svg',
    },
    {
      title: 'English',
      color: 'bg-[#FAEAFA]',
      icon: '/public/images/subjects/img2.svg',
    },
    {
      title: 'Business',
      color: 'bg-[#EAF3AB]',
      icon: '/public/images/subjects/img3.svg',
    },
    {
      title: 'History',
      color: 'bg-[#E3EFFF]',
      icon: '/public/images/subjects/img4.svg',
    },
    {
      title: 'Geography',
      color: 'bg-[#FBEEE2]',
      icon: '/public/images/subjects/img5.svg',
    },
    {
      title: 'Chemistry',
      color: 'bg-[#E4F7EF]',
      icon: '/public/images/subjects/img6.svg',
    },
  ];

  const row2 = [
    {
      title: 'Physics',
      color: 'bg-[#E4F7EF]',
      icon: '/public/images/subjects/img7.svg',
    },
    {
      title: 'Engineering',
      color: 'bg-[#E3EFFF]',
      icon: '/public/images/subjects/img8.svg',
    },
    {
      title: 'Medicine',
      color: 'bg-[#FAEAFA]',
      icon: '/public/images/subjects/img9.svg',
    },
    {
      title: 'Computers',
      color: 'bg-[#E8E2FF]',
      icon: '/public/images/subjects/img10.svg',
    },
  ];

  const row3 = [
    {
      title: 'Mathematics',
      color: 'bg-[#E8E2FF]',
      icon: '/public/images/subjects/img11.svg',
    },
    {
      title: 'Arts',
      color: 'bg-[#EAF3AB]',
      icon: '/public/images/subjects/img12.svg',
    },
  ];

  // Helper function to render rows
  const renderRow = row => (
    <div className="flex gap-6">
      {row.map((subject, index) => (
        <div
          key={index}
          className={`rounded-2xl border border-[#E5E5E5] shadow-[0_6px_0_0_#B1B1AC4D] 
        flex flex-col items-center justify-center p-6 w-40 
        transition-transform duration-300 ease-in-out 
        hover:shadow-xl hover:scale-105 
        ${index % 2 === 0 ? 'bg-[#F9F9F3]' : 'bg-white'}`}
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
            <button
              onClick={() => navigate('/login')}
              className="py-4 px-[77px] bg-[#FF3400] rounded-full text-white text-[18px] font-semibold cursor-pointer hover:shadow-[0_6px_0_0_#C52800]  transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Banner images */}
      <div className="flex gap-5 mt-8">
        <div className="relative ">
          {/* Background Image */}
          <img
            src="/public/images/Banner/img1.svg"
            alt="banner"
            className="w-full h-auto"
          />

          {/* Content Centered on Image */}
          <div className="absolute left-[210px] bottom-[130px] inset-0 flex flex-col justify-center items-center text-center px-4">
            <span className="text-[22px] leading-[20.96px] tracking-[-2%] font-extrabold">
              Learn anytime, <br /> anywhere with our <br /> online courses.
            </span>
            <div className="flex gap-1 items-baseline mt-2">
              <img src="/public/images/Banner/icon.svg" alt="icon" />
              <h1 className="font-bold text-[11px] leading-[10px] tracking-[-0.02em]">
                MyEdSkills
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="relative w-full">
            {/* Background Image */}
            <img
              src="/public/images/Banner/img2.svg"
              alt="background"
              className="w-full h-auto"
            />

            {/* Content on top of image */}
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-5 ">
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-[31.01px] leading-[31.5px] tracking-[-0.04em]">
                  Professional
                </h1>
                <img
                  src="/public/images/Banner/img6.svg"
                  alt="icon"
                  // className="w-6 h-6"
                />
              </div>

              <div className="flex items-center gap-2">
                <img
                  src="/public/images/Banner/img5.svg"
                  alt="icon"
                  // className="w-6 h-6"
                />
                <h1 className="font-bold text-[31.01px] leading-[31.5px] tracking-[-0.04em]">
                  Teachers
                </h1>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Background image */}
            <img
              src="/public/images/Banner/img3.svg"
              alt="background"
              // className="w-full h-auto"
            />

            {/* Text on top of the image */}
            <h1 className="absolute inset-0 flex pl-[23px] items-start  mt-6 font-bold text-[25.67px] leading-[25.67px] tracking-[-0.02em]">
              Every child <br /> deserves the <br /> chance to <br /> learn
            </h1>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Background image */}
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden">
            {/* Background image */}
            <img
              src="/public/images/Banner/img4.svg"
              alt="course"
              className="w-full h-auto object-cover pl-1"
            />

            {/* Bottom info bar */}
            <div className="absolute bottom-4 left-5  flex items-center justify-center px-[28] py-4  ">
              {/* Left: Course info */}
              <div className="pl-[21px] pr-[28px]">
                <span className="font-extrabold text-[23.67px] tracking-[-0.02em]">
                  Math
                </span>
                <br />
                <span className="font-medium text-[14.94px] leading-[22.64px] tracking-[-0.02em] text-[#434343]">
                  For Beginner
                </span>
              </div>

              {/* Middle: Button */}
              <div className="pt-3 pr-3">
                <img src="/public/images/Banner/ButtonR.svg" alt="button" />
              </div>

              {/* Right: Duration */}
              <div className="text-right pl-[34px]">
                <span className="font-extrabold pr-[22px] text-[23.67px] text-start f tracking-[-0.02em]">
                  12
                </span>
                <br />
                <span className="font-medium text-[14.94px] leading-[22.64px] tracking-[-0.02em] text-[#434343]">
                  Weeks
                </span>
              </div>
            </div>
          </div>

          {/* Centered image */}
          <div className="absolute bottom-[100px] inset-0 flex justify-center  items-end">
            <img
              className="bg-[#DFF25D] rounded-full"
              src="/public/images/Banner/img7.svg"
              alt=""
            />
          </div>
        </div>
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
              <a
                href="https://www.hw.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img1.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </a>
              <a
                href="https://https://www.andover.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img2.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </a>
              <a
                href="https://www.horacemann.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img3.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </a>
              <a
                href="http://lakesideschool.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img4.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </a>
              <a
                href="https://www.sidwell.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img5.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </a>
              <a
                href="https://www.stmarksschool.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img6.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </a>
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
          <button
            onClick={() => navigate('/login')}
            className="py-3 px-8 bg-[#FF3400] rounded-full text-white text-[18px] font-semibold cursor-pointer hover:shadow-[0_6px_0_0_#C52800]  transition"
          >
            Join now
          </button>
        </div>
      </div>

      {/* Skills images */}
      <div className="flex gap-[20px] mt-[66px] ">
        <div className="bg-[#FF9F87] rounded-3xl  ">
          <div className="flex gap-14 px-8 absolute">
            <h1 className="font-semibold text-3xl leading-[36px] tracking-[-0.09px] pt-[26px]">
              Join My EdSkills <br /> to activate your <br /> learning
            </h1>
            <div className="absolute bottom-2 right-[-71px] p-4 bg-white rounded-full">
              <img src="/public/images/Cart/R-button.svg" alt="" />
            </div>
          </div>

          <img src="/public/images/Cart/img1.svg" alt="" />
        </div>
        <div className="bg-[#DDF24B] rounded-3xl pb-[12px]  ">
          <div className="flex gap-14 px-8 absolute">
            <h1 className="font-semibold text-3xl leading-[36px] tracking-[-0.09px] pt-[26px]">
              Join My EdSkills <br /> to activate your <br /> teaching{' '}
            </h1>
            <div className="absolute bottom-2 right-[-71px] p-4 bg-white rounded-full">
              <img src="/public/images/Cart/R-button.svg" alt="" />
            </div>
          </div>

          <img src="/public/images/Cart/img2.svg" alt="" />
        </div>{' '}
        <div className="bg-[#CBBEFD] rounded-3xl pb-[12px]  ">
          <div className="flex gap-14 px-8 absolute">
            <h1 className="font-semibold text-3xl leading-[36px] tracking-[-0.09px] pt-[26px]">
              Join My EdSkills <br /> to activate your <br /> teaching{' '}
            </h1>
            <div className="absolute bottom-2 right-[-71px] p-4 bg-white rounded-full">
              <img src="/public/images/Cart/R-button.svg" alt="" />
            </div>
          </div>

          <img src="/public/images/Cart/img3.svg" alt="" />
        </div>{' '}
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
            <button
              onClick={() => navigate('/login')}
              className="py-3 px-8 mt-[32px] bg-[#FF3400] rounded-full text-white text-[18px] font-semibold cursor-pointer hover:shadow-[0_6px_0_0_#C52800]  transition"
            >
              Start Your Journey
            </button>
          </div>
        </div>

        <div>
          <div className="">
            <div className="absolute px-[45px] pt-[123px]">
              <h1 className="Recoleta font-semibold  text-[#FFFFFF] text-[40px] leading-[42px] tracking-[-0.13px]">
                Personalized <br /> Learning Paths
              </h1>

              <p className="font-normal text-[18px] text-white leading-[24px] tracking-[-0.22px]">
                AI adapts courses to your unique <br /> learning style.
              </p>
            </div>
            <img src="/public/images/Cart2/img1.svg" alt="" />
          </div>
          <div className="flex gap-5 mt-5">
            <div className="bg-[#DDF24B] relative px-[32px] py-[37px] rounded-[24px] flex flex-col justify-between">
              {/* Top-right text */}
              <div className="absolute top-[30px] right-[40px] ">
                <h1 className="Recoleta font-semibold text-[30px] leading-[36px] tracking-[-0.09px]">
                  Earn While <br /> You Learn
                </h1>
              </div>

              {/* Background shapes / image */}
              <img
                src="/public/images/Cart2/img2.svg"
                alt=""
                className="w-full h-full object-contain"
              />

              {/* Bottom text */}
              <p className="absolute bottom-[30px] left-[40px] text-[18px] leading-[22px] text-[#434343] font-medium">
                Accumulate scholarship <br /> funds as you progress
              </p>
            </div>

            <div className="bg-[#AF9EEF] relative rounded-[24px] px-[39px] py-[37px] overflow-hidden">
              {/* Text section */}
              <h1 className="Recoleta font-semibold text-[30px] leading-[36px] tracking-[-0.09px] absolute top-[37px] left-[39px]">
                Verified <br /> Credentials
              </h1>

              {/* Decorative image */}
              <img
                src="/public/images/Cart2/img3.svg"
                alt=""
                className="w-full h-full object-contain"
              />

              {/* Paragraph at the bottom */}
              <p className="font-medium text-[18px] leading-[24px] text-[#474645] absolute bottom-[20px] left-[39px]">
                Secure blockchain certificates <br /> for your achievements
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 relative w-full">
        {/* Background Image */}
        <img
          src="/images/community/bgimg.svg"
          alt="background"
          className="w-full relative bottom-[-6px]"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <img src="/images/community/icon.svg" alt="icon" className="mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  mb-8 leading-[60px]">
            Join Our <br /> Community <br /> Banner
          </h1>
          <button
            onClick={() => navigate('/login')}
            className="py-3 px-8 bg-[#FF3400] rounded-full cursor-pointer text-white text-[18px] font-semibold  hover:shadow-[0_6px_0_0_#C52800]  transition"
          >
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}
