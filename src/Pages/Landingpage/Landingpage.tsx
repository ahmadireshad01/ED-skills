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

  const row3: never[] = [];

  // Helper function to render rows
  const renderRow = (row: typeof row1) => (
    <div
      className="
      flex flex-wrap justify-center gap-6
      md:grid md:grid-cols-3 md:gap-6
      sm:grid sm:grid-cols-3 sm:gap-4
      xs:grid xs:grid-cols-2 xs:gap-3
    "
    >
      {row.map((subject, index) => (
        <div
          key={index}
          className={`
          rounded-2xl border border-[#E5E5E5] shadow-[0_6px_0_0_#B1B1AC4D]
          flex flex-col items-center justify-center
          p-6 w-40 sm:w-32 md:w-auto
          transition-transform duration-300 ease-in-out
          hover:shadow-xl hover:scale-105
          ${index % 2 === 0 ? 'bg-[#F9F9F3]' : 'bg-white'}
        `}
        >
          <div
            className={`
            rounded-full flex items-center justify-center mb-3 px-[32px] py-[17px]
            ${subject.color} transition-all duration-300
          `}
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
        <div className="absolute flex flex-col justify-center items-center text-center w-full px-4">
          <h1 className="font-bold Recoleta mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-[64px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] leading-6 sm:leading-8 md:leading-10 lg:leading-[60px] xl:leading-[70px] tracking-[-0.5%] sm:tracking-[-0.7%] xl:tracking-[-1%]">
            AI-Powered Learning <br className="hidden sm:block" />
            for Tomorrow&apos;s Leaders
          </h1>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium leading-5 sm:leading-6 md:leading-7 lg:leading-[26px] xl:leading-[28px] tracking-[-0.1px] sm:tracking-[-0.15px] lg:tracking-[-0.2px] xl:tracking-[-0.22px] text-[#474645] mt-3 sm:mt-4 lg:mt-4 xl:mt-4">
            Empowering Students with Personalized, Interactive Learning{' '}
            <br className="hidden lg:block" />
            Designed to Build Essential Skills for Future Success
          </p>
          <div className="flex justify-center mt-6 sm:mt-7 lg:mt-8 xl:mt-9">
            <button
              onClick={() => navigate('/login')}
              className="py-3 sm:py-3 lg:py-4 xl:py-4 px-12 sm:px-14 lg:px-16 xl:px-[77px] bg-[#FF3400] rounded-full text-white text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] font-semibold cursor-pointer hover:shadow-[0_6px_0_0_#C52800] transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Banner images */}
      <div className="w-full md:mt-[70px] flex justify-center overflow-hidden">
        <div className="max-w-full scale-100 md:scale-100 sm:scale-[0.9] xs:scale-[0.8] origin-top">
          <div className="md:flex gap-5 mt-8">
            <div className="lg:flex lg:items-baseline-last">
              <div>
                <div className="relative lg:mr-3">
                  {/* Background Image */}
                  <img
                    src="/public/images/Banner/img1.svg"
                    alt="banner"
                    className="w-full h-auto max-[640px]:mt-[62px]"
                  />

                  {/* Content */}
                  <div
                    className="absolute left-[210px] bottom-[130px] inset-0 flex flex-col justify-center items-center text-center px-4
                lg:left-[140px] lg:bottom-[80px] md:left-[180px] md:bottom-[110px]"
                  >
                    <span className="lg:text-[14px] lg:leading-[14px] md:text-[17px] md:leading-[19px] leading-[20.96px] tracking-[-2%] font-extrabold max-[640px]:text-[10px] max-[640px]:hidden">
                      Learn anytime,
                      <br className="max-[640px]:hidden inline" />
                      anywhere with our
                      <br className="max-[640px]:hidden inline" />
                      online courses.
                    </span>

                    <div className="flex gap-1 items-baseline md:mt-2 mt-2 lg:mt-1 lg:flex lg:items-center max-[640px]:hidden">
                      <img
                        className="md:h-[14px] w-auto"
                        src="/public/images/Banner/icon.svg"
                        alt="icon"
                      />
                      <h1 className="font-bold md:text-[14px] text-[11px] lg:text-[12px] leading-[10px] tracking-[-0.02em]">
                        MyEdSkills
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:flex md:mt-6">
                <div className="flex flex-col md:gap-4 lg:flex lg:gap-4 lg:relative top-[83px]">
                  <div className="relative w-full">
                    {/* Background Image */}
                    <img
                      src="/public/images/Banner/img2.svg"
                      alt="background"
                      className="w-auto h-aut"
                    />

                    {/* Content on top of image */}
                    <div className="absolute inset-3 md:top-[70px] md:flex md:flex-col md:justify-end md:items-center text-center pb-5">
                      <div className="flex items-center gap-2 md:relative md:bottom-[-10px] lg:bottom-[-30px]">
                        <h1 className="font-bold text-[31.01px] md:text-[27px] lg:text-[21px] leading-[31.5px] tracking-[-0.04em]">
                          Professional
                        </h1>
                        <img
                          className="md:h-[30px] lg:h-[20px] w-auto"
                          src="/public/images/Banner/img6.svg"
                          alt="icon"
                        />
                      </div>

                      <div className="flex items-center gap-2 md:gap-2 md:relative md:bottom-[-17px] lg:bottom-[-20px]">
                        <img
                          className="md:h-[20px] lg:h-[10px] w-auto"
                          src="/public/images/Banner/img5.svg"
                          alt="icon"
                        />
                        <h1 className="font-bold text-[31.01px] md:text-[27px] lg:text-[21px] leading-[31.5px] tracking-[-0.04em]">
                          Teachers
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="relative top-[-8px]">
                    {/* Background image */}
                    <img
                      src="/public/images/Banner/img3.svg"
                      alt="background"
                      className="w-auto h-auto"
                    />

                    {/* Text on top of the image */}
                    <h1 className="absolute md:text-[25px] lg:text-[20px] lg:leading-[20px] md:leading-[27px] lg:pl-4 inset-0 flex pl-[23px]  items-start mt-6 font-bold text-[25.67px] leading-[25.67px] tracking-[-0.02em]">
                      Every child <br /> deserves the <br /> chance to <br />{' '}
                      learn
                    </h1>
                  </div>
                </div>

                <div className="relative flex justify-center items-center lg:ml-2">
                  {/* Background image */}
                  <div className="relative w-full  rounded-2xl overflow-hidden">
                    <img
                      src="/public/images/Banner/img4.svg"
                      alt="course"
                      className=" object-contain pl-1 relative md:top-[-10px]  lg:top-[40px] lg:h-[350px] lg:w-[317px]"
                    />

                    {/* Bottom info bar */}
                    <div className="absolute bottom-4 left-5 lg:left-1 lg:bottom-[2px] md:bottom-[24px] flex items-center justify-center px-[28] py-4">
                      {/* Left: Course info */}
                      <div className="pl-[21px] md:px-[18px] pr-[28px] lg:leading-[20px]">
                        <span className="font-extrabold md:text-[17px] md:leading-[12px] text-[23.67px] lg:text-[13px] tracking-[-0.02em]">
                          Math
                        </span>
                        <br />
                        <span className="font-medium text-[14.94px] md:text-[14px] lg:text-[11px] md:leading-[-125px] leading-[22.64px] tracking-[-0.02em] text-[#434343]">
                          For Beginner
                        </span>
                      </div>

                      {/* Middle: Button */}
                      <div className="pt-3 lg:pb-3 pr-4 lg:w-[35px]">
                        <img
                          src="/public/images/Banner/ButtonR.svg"
                          alt="button"
                          className="w-auto h-auto "
                        />
                      </div>

                      {/* Right: Duration */}
                      <div className="text-right pl-[30px] lg:pl-[15px] lg:leading-[20px]">
                        <span className="font-extrabold pr-[22px] text-[23.67px] md:text-[18px] text-start tracking-[-0.02em]">
                          12
                        </span>
                        <br />
                        <span className="font-medium text-[14.94px] md:text-[14px] leading-[22.64px] tracking-[-0.02em] text-[#434343]">
                          Weeks
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Centered image */}
                  <div className="absolute bottom-[100px] lg:bottom-[70px] inset-0 flex justify-center items-end">
                    <img
                      className="bg-[#DFF25D] rounded-full  lg:w-[30px]"
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

      {/* Company Stats */}
      <div className="mt-[77px] md:mt-[65px]">
        <div className="flex justify-center relative">
          {/* Background pattern */}
          <img
            src="/public/images/company/patern.svg"
            alt="pattern"
            className="w-full  h-auto  max-w-[1440px]"
          />

          {/* Centered content */}
          <div className="absolute top-[40px] inset-0 flex flex-col items-center justify-center px-4">
            <h1 className="font-semibold text-[24px] md:text-[18px] lg:text-[21px] sm:text-[15px] text-center text-[#03041666] leading-[32px] md:leading-[26px] sm:leading-[22px] tracking-[-1%]">
              <span className="text-black">25,000+</span> Students <br />
              Empowered Since Launch
            </h1>

            {/* Company logos */}
            <div className="relative flex flex-wrap justify-center gap-11 md:gap-6 md:bottom-[25px] lg:top-[-5px] sm:gap-4 mt-7">
              <a
                href="https://www.hw.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img1.svg"
                  alt="logo1"
                  className="cursor-pointer w-[120px] md:w-[40px] lg:w-[50px] sm:w-[70px]"
                />
              </a>
              <a
                href="https://www.andover.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img2.svg"
                  alt="logo2"
                  className="cursor-pointer w-[120px] md:w-[40px] lg:w-[50px] sm:w-[70px]"
                />
              </a>
              <a
                href="https://www.horacemann.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img3.svg"
                  alt="logo3"
                  className="cursor-pointer w-[120px] md:w-[40px] lg:w-[50px] sm:w-[70px]"
                />
              </a>
              <a
                href="http://lakesideschool.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img4.svg"
                  alt="logo4"
                  className="cursor-pointer w-[120px] md:w-[40px] lg:w-[50px] sm:w-[70px]"
                />
              </a>
              <a
                href="https://www.sidwell.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img5.svg"
                  alt="logo5"
                  className="cursor-pointer w-[120px] md:w-[40px] lg:w-[50px] sm:w-[70px]"
                />
              </a>
              <a
                href="https://www.stmarksschool.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/company/img6.svg"
                  alt="logo6"
                  className="cursor-pointer w-[120px] md:w-[35px] lg:w-[45px] sm:w-[70px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex justify-between items-end mt-16 flex-wrap gap-6 sm:gap-3 px-4">
        {/* Left: Title */}
        <div className="flex-1 min-w-[250px]">
          <h1 className="Recoleta font-bold text-[56px] md:text-[33px] sm:text-[28px] leading-[60px] md:leading-[40px] sm:leading-[32px] tracking-[-1.02px] mr-[57px] md:mr-0 md:mt-[-20px] text-left md:text-center">
            Skills That <br /> Shape Tomorrow
          </h1>
        </div>

        {/* Middle: Icon + Text */}
        <div className="flex flex-col items-center text-center flex-1 min-w-[250px] md:mt-3">
          <div className="md:flex md:flex-col md:items-center md:justify-center md:gap-3">
            <img
              src="/public/images/Cart/icon.svg"
              alt="icon"
              className="w-[80px]  md:hidden sm:w-[50px] mx-auto"
            />
            <p className="font-medium text-[18px] md:text-[15px] sm:text-[13px] mt-[20px] md:mt-2 leading-[28px] md:leading-[24px] tracking-[-0.22px] text-center">
              Learn Essential Life Skills Tailored to Help{' '}
              <br className="hidden sm:block" />
              You Succeed in School, Work, and Life
            </p>
          </div>

          {/* Right: Button */}
          <div className="flex justify-center flex-1 min-w-[200px] mt-4 md:mt-6">
            <button
              onClick={() => navigate('/login')}
              className="py-3 px-8 bg-[#FF3400] rounded-full text-white text-[18px] md:text-[16px] sm:text-[14px] font-semibold cursor-pointer hover:shadow-[0_6px_0_0_#C52800] transition"
            >
              Join now
            </button>
          </div>
        </div>
      </div>

      {/* Skills images */}
      <div className="flex gap-[20px] mt-[66px] flex-wrap justify-center md:gap-[16px] sm:gap-[12px]">
        {/* Card 1 */}
        <div className="relative bg-[#FF9F87] rounded-3xl overflow-hidden w-full sm:w-[90%] md:w-[48%] lg:w-auto">
          <div className="flex gap-14 px-8 absolute top-0 left-0 right-0">
            <h1 className="font-semibold text-3xl md:text-[22px] sm:text-[18px] leading-[36px] md:leading-[28px] tracking-[-0.09px] pt-[26px] sm:pt-[20px]">
              Join My EdSkills <br /> to activate your <br /> learning
            </h1>
            <div className="absolute bottom-2 right-[-71px] sm:right-[-40px] md:right-[-50px] p-4 sm:p-2 bg-white rounded-full">
              <img
                src="/public/images/Cart/R-button.svg"
                alt=""
                className="w-[30px] md:w-[36px]"
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
        <div className="relative bg-[#DDF24B] rounded-3xl pb-[12px] overflow-hidden w-full sm:w-[90%] md:w-[48%] lg:w-auto mt-4 md:mt-0">
          <div className="flex gap-14 px-8 absolute top-0 left-0 right-0">
            <h1 className="font-semibold text-3xl md:text-[22px] sm:text-[18px] leading-[36px] md:leading-[28px] tracking-[-0.09px] pt-[26px] sm:pt-[20px]">
              Join My EdSkills <br /> to activate your <br /> teaching
            </h1>
            <div className="absolute bottom-2 right-[-71px] sm:right-[-40px] md:right-[-50px] p-4 sm:p-2 bg-white rounded-full">
              <img
                src="/public/images/Cart/R-button.svg"
                alt=""
                className="w-[30px] md:w-[36px]"
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
        <div className="relative bg-[#CBBEFD] rounded-3xl pb-[12px] overflow-hidden w-full sm:w-[90%] md:w-[48%] lg:w-auto mt-4 md:mt-0">
          <div className="flex gap-14 px-8 absolute top-0 left-0 right-0">
            <h1 className="font-semibold text-3xl md:text-[22px] sm:text-[18px] leading-[36px] md:leading-[28px] tracking-[-0.09px] pt-[26px] sm:pt-[20px]">
              Join My EdSkills <br /> to activate your <br /> teaching
            </h1>
            <div className="absolute bottom-2 right-[-71px] sm:right-[-40px] md:right-[-50px] p-4 sm:p-2 bg-white rounded-full">
              <img
                src="/public/images/Cart/R-button.svg"
                alt=""
                className="w-[30px] md:w-[36px]"
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

      {/* Section Title */}
      <div className="mt-[107px] relative flex justify-center">
        {/* Background Icon Image */}
        <img
          src="/public/images/subjects/icons.svg"
          alt=""
          className="w-full max-w-[1000px] md:max-w-[800px] sm:max-w-[600px] xs:max-w-[350px] h-auto"
        />

        {/* Centered Heading */}
        <h1
          className="
      absolute inset-0 flex items-center justify-center 
      text-[55px] leading-[60px] text-center font-bold
      lg:text-[55px] lg:leading-[60px]  /* keep 1440px same */
      md:text-[36px] md:leading-[40px] 
      sm:text-[28px] sm:leading-[32px] 
      xs:text-[22px] xs:leading-[26px]
      px-4
    "
        >
          Where Questions <br /> Meet Answers
        </h1>
      </div>

      {/* Subjects Grid */}
      <div className="flex flex-col items-center gap-5 mt-10">
        {renderRow(row1)}
        {renderRow(row2)}
        {renderRow(row3)}
      </div>
      {/* Last Section */}
      <div className="flex flex-col lg:flex-row gap-[63px] mt-[176px] md:mt-[-30px] items-center lg:items-start">
        {/* Left Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center md:justify-center md:items-center">
          <img
            src="/public/images/Cart2/backimg.svg"
            alt="background"
            className="w-full max-w-[700px] sm:max-w-[450px] h-auto"
          />

          <div
            className="absolute inset-0 flex flex-col 
               items-start justify-center 
               px-6 sm:px-4 
               lg:items-start lg:justify-center 
               md:items-center md:justify-center 
               top-[120px] sm:top-[80px] lg:top-[170px]"
          >
            <h1
              className="Recoleta font-bold text-[56px] leading-[60px] tracking-[-1px]
                 lg:text-[56px] lg:leading-[60px]
                 md:text-[38px] md:leading-[46px] md:text-center
                 sm:text-[28px] sm:leading-[34px] sm:text-center"
            >
              Experience <br /> Learning Like <br /> Never Before
            </h1>

            <p
              className="font-medium text-[18px] leading-[30px] tracking-[-0.22px] mt-[24px]
                 lg:text-[18px] lg:leading-[30px]
                 md:text-[15px] md:leading-[24px] md:text-center
                 sm:text-[13px] sm:leading-[22px] sm:text-center"
            >
              Discover Personalized, AI-Powered <br /> Learning That Prepares
              Students for <br /> Success in the Real World
            </p>

            <button
              onClick={() => navigate('/login')}
              className="py-3 px-8 mt-[32px] bg-[#FF3400] rounded-full text-white text-[18px]
                 font-semibold cursor-pointer hover:shadow-[0_6px_0_0_#C52800] transition
                 md:text-[16px] sm:text-[14px] sm:px-6 sm:py-2"
            >
              Start Your Journey
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:mt-[-30px]  lg:w-1/2 flex flex-col items-center lg:items-start px-4">
          {/* Top Card */}
          <div className="relative w-full flex justify-center">
            <div className="absolute px-[45px] pt-[123px] md:pt-[40px] md:px-[70px] md:left-0">
              <h1
                className="Recoleta font-semibold text-white text-[40px] leading-[42px] tracking-[-0.13px]
                       md:text-[28px] md:leading-[32px] sm:text-[22px] sm:leading-[26px]"
              >
                Personalized <br /> Learning Paths
              </h1>
              <p
                className="font-normal text-[18px] text-white leading-[24px] tracking-[-0.22px]
                      md:text-[15px] sm:text-[13px]"
              >
                AI adapts courses to your unique <br /> learning style.
              </p>
            </div>
            <img
              src="/public/images/Cart2/img1.svg"
              alt="Learning paths"
              className="w-full max-w-[600px] sm:max-w-[400px] h-auto"
            />
          </div>

          {/* Bottom Cards */}
          <div className="flex flex-col md:flex-row gap-5 mt-5 w-full justify-center items-center">
            {/* Card 1 */}
            <div
              className="bg-[#DDF24B] relative px-[32px] py-[37px] rounded-[24px]
                      flex flex-col justify-between w-full md:w-1/2 max-w-[400px]"
            >
              <div className="absolute top-[30px] right-[40px] sm:top-[20px] sm:right-[20px]">
                <h1
                  className="Recoleta font-semibold text-[30px] leading-[36px] tracking-[-0.09px]
                         md:text-[24px] sm:text-[20px]"
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
                className="absolute bottom-[30px] left-[40px] text-[18px] leading-[22px] text-[#434343]
                      font-medium md:text-[15px] sm:text-[13px] sm:left-[20px]"
              >
                Accumulate scholarship <br /> funds as you progress
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-[#AF9EEF] relative rounded-[24px] md:h-[225px] px-[39px] py-[37px]  overflow-hidden
                      w-full md:w-1/2 max-w-[400px] mt-5 md:mt-0"
            >
              <h1
                className="Recoleta font-semibold text-[30px] leading-[36px] tracking-[-0.09px]
                       absolute top-[37px] left-[39px] md:top-5
                       md:text-[24px] sm:text-[20px] sm:left-[20px]"
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
                      md:text-[15px] md:bottom-7 md:px-  sm:text-[13px] sm:left-[20px]"
              >
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
          className="w-full relative bottom-[-6px] md:bottom-[-3px]"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <img src="/images/community/icon.svg" alt="icon" className="mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-[25px] md:leading-[25px] lg:text-6xl font-bold  mb-8 leading-[60px]">
            Join Our <br /> Community <br /> Banner
          </h1>
          <button
            onClick={() => navigate('/login')}
            className="py-3 px-8 md:py-2 md:px-6 md:mb-8 bg-[#FF3400] rounded-full cursor-pointer text-white text-[18px] md:text-[14px] font-semibold  hover:shadow-[0_6px_0_0_#C52800]  transition"
          >
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}
