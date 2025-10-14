import { useNavigate } from 'react-router-dom';

export default function Landingpage() {
  const navigate = useNavigate();
  // All subjects combined into one row
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

  // Function to render subjects in a given number of columns
  const renderSubjects = (subjects: any[], cols: number) => (
    <div
      className={`
        grid gap-6 justify-center
        sm:grid-cols-2 md:grid-cols-${cols}
        max-[640px]:grid-cols-1 max-[640px]:gap-4
      `}
      style={{
        gridTemplateColumns: `repeat(${cols}, 135px)`, // desktop layout
      }}
    >
      {subjects.map((subject, index) => (
        <div
          key={index}
          className={`
            rounded-2xl border border-[#E5E5E5] shadow-[0_6px_0_0_#B1B1AC4D]
            flex flex-col items-center justify-center
            p-6 w-[135px] h-[135px]
            transition-transform duration-300 ease-in-out
            hover:shadow-xl hover:scale-105
            ${index % 2 === 0 ? 'bg-[#F9F9F3]' : 'bg-white'}
            max-[640px]:w-full max-[640px]:h-auto max-[640px]:p-4
          `}
        >
          <div
            className={`
              rounded-full flex items-center justify-center mb-3 px-[32px] py-[17px]
              ${subject.color} transition-all duration-300
              max-[640px]:px-[20px] max-[640px]:py-[12px]
            `}
          >
            <img
              src={subject.icon}
              alt={subject.title}
              className="w-6 h-6 max-[640px]:w-5 max-[640px]:h-5"
            />
          </div>
          <p className="text-base font-medium text-gray-700 text-center transition-colors duration-300 max-[640px]:text-sm">
            {subject.title}
          </p>
        </div>
      ))}
    </div>
  );

  // ✅ Main Responsive Rendering
  const RenderRowResponsive = () => {
    // Split chunks for lg and xl
    const lgChunks = [row1.slice(0, 5), row1.slice(5, 9), row1.slice(9, 12)];
    const xlChunks = [row1.slice(0, 6), row1.slice(6, 10), row1.slice(10, 12)];

    return (
      <div className="flex flex-col gap-6 mt-10">
        {/* ✅ XL (1440px - 2550px): 6 / 4 / 2 layout */}
        <div className="hidden xl:flex flex-col gap-6">
          {xlChunks.map((chunk, idx) => {
            const cols = [6, 4, 2][idx];
            return <div key={idx}>{renderSubjects(chunk, cols)}</div>;
          })}
        </div>

        {/* ✅ LG (1024px - 1439px): 5 / 4 / 3 layout */}
        <div className="hidden lg:flex xl:hidden flex-col gap-6">
          {lgChunks.map((chunk, idx) => {
            const cols = [5, 4, 3][idx];
            return <div key={idx}>{renderSubjects(chunk, cols)}</div>;
          })}
        </div>

        {/* ✅ MD (up to 1023px): 3-column grid */}
        <div className="lg:hidden max-[640px]:hidden">
          {renderSubjects(row1, 3)}
        </div>

        {/* ✅ Mobile (≤640px): 1 item per row */}
        <div className="hidden max-[640px]:block">
          {renderSubjects(row1, 1)}
        </div>
      </div>
    );
  };

  // Usage

  return (
    <div className="min-h-screen w-full bg-[#F9F9F3] px-[124px] max-[640px]:p-[10px]">
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

          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium leading-5 sm:leading-6 md:leading-7 lg:leading-[26px] xl:leading-[28px] tracking-[-0.1px] sm:tracking-[-0.15px] lg:tracking-[-0.2px] xl:tracking-[-0.22px] text-[#474645] mt-3 sm:mt-4 lg:mt-4 xl:mt-4 max-[640px]:mt-[0px]">
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
            <div className="lg:flex lg:items-baseline-last ">
              <div>
                <div className="relative lg:mr-3">
                  {/* Background Image */}
                  <img
                    src="/public/images/Banner/img1.svg"
                    alt="banner"
                    className="w-auto h-auto max-[640px]:mt-[62px]"
                  />

                  {/* Content */}
                  <div
                    className="absolute left-[210px] bottom-[130px] inset-0 flex flex-col justify-center items-center text-center px-4  
                   lg:left-[140px] lg:bottom-[80px] xl:left-[210px] xl:bottom-[130px]  md:left-[180px] md:bottom-[110px] max-[640px]:left-[78px]"
                  >
                    <span className="lg:text-[14px] lg:leading-[14px] xl:text-[22px] xl:leading-[20.96px] xl:tracking-[-2%] md:text-[17px] md:leading-[19px] leading-[20.96px] tracking-[-2%] font-extrabold max-[640px]:text-[10px] max-[640px]:hidden">
                      Learn anytime,{' '}
                      <br className="max-[640px]:hidden inline" /> anywhere with
                      our <br className="max-[640px]:hidden inline" /> online
                      courses.
                    </span>
                    <div className="flex gap-1 items-baseline md:mt-2 mt-2 lg:mt-1 lg:flex lg:items-center xl:pt-[13px] max-[640px]:hidden">
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

              <div className="md:flex md:mt-6 max-[640px]:mt-[10px]">
                <div className="flex flex-col md:gap-4 lg:flex lg:gap-4 lg:relative top-[83px] xl:top-[5px] xl:gap-[25px]">
                  <div className="relative w-full">
                    {/* Background Image */}
                    <img
                      src="/public/images/Banner/img2.svg"
                      alt="background"
                      className="w-auto h-aut max-[640px]:w-full"
                    />

                    {/* Content on top of image */}
                    <div className="absolute inset-3 md:top-[70px] md:flex md:flex-col md:justify-end md:items-center text-center pb-5 xl:pb-[23px]">
                      <div className="flex items-center gap-2 md:relative md:bottom-[-10px] lg:bottom-[-30px] xl:gap-2 max-[640px]:mt-[90px] max-[640px]:ml-[30px]">
                        <h1 className="font-bold text-[31.01px] md:text-[27px] lg:text-[21px] xl:text-[31.01px] leading-[31.5px] tracking-[-0.04em]">
                          Professional
                        </h1>
                        <img
                          className="md:h-[30px] lg:h-[20px] xl:h-[29.49px] w-auto"
                          src="/public/images/Banner/img6.svg"
                          alt="icon"
                        />
                      </div>

                      <div className="flex items-center gap-2 md:gap-2  md:relative md:bottom-[-17px] lg:bottom-[-20px] xl:pt-3 xl:gap-[0px]">
                        <img
                          className="md:h-[20px] lg:h-[10px] xl:h-[21px] w-auto"
                          src="/public/images/Banner/img5.svg"
                          alt="icon"
                        />
                        <h1 className="font-bold text-[31.01px] md:text-[27px] lg:text-[21px] xl:text-[31.01px] xl:leading-[31.5px] leading-[31.5px] tracking-[-0.04em]">
                          Teachers
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="relative top-[-8px] max-[640px]:flex max-[640px]:justify-center max-[640px]:mt-[20px]  max-[640px]:w-[full]">
                    {/* Background image */}
                    <img
                      src="/public/images/Banner/img3.svg"
                      alt="background"
                      className="w-auto h-auto max-[640px]:w-full"
                    />

                    {/* Text on top of the image */}
                    <h1 className="absolute md:text-[25px] lg:text-[20px] lg:leading-[20px] md:leading-[27px] lg:pl-4 xl:text-[26.94px] xl:leading-[25.67px] xl:tracking-[-2%] inset-0 flex pl-[23px]  items-start mt-6 font-bold text-[25.67px] leading-[25.67px] tracking-[-0.02em] max-[640px]:ml-[26px]">
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
                      className=" object-contain pl-1 relative md:top-[-10px]  lg:top-[40px] lg:h-[350px] lg:w-[317px] xl:top-0 xl:w-[316.47px] xl:h-[407.44px] max-[640px]:w-full"
                    />

                    {/* Bottom info bar */}
                    <div className="absolute bottom-4 left-5 lg:left-1 xl:left-[21px] xl:bottom-[15px] lg:bottom-[2px] md:bottom-[24px] flex items-center justify-center px-[28] py-4">
                      {/* Left: Course info */}
                      <div className="pl-[21px] md:px-[18px] pr-[28px] lg:leading-[20px] xl:pl-[21px]">
                        <span className="font-extrabold md:text-[17px] md:leading-[12px] text-[23.67px] lg:text-[13px] xl:text-[23.67px] tracking-[-0.02em]">
                          Math
                        </span>
                        <br />
                        <span className="font-medium text-[14.94px] md:text-[14px] lg:text-[11px] xl:text-[14.64px] md:leading-[-125px] leading-[22.64px] tracking-[-0.02em] text-[#434343]">
                          For Beginner
                        </span>
                      </div>

                      {/* Middle: Button */}
                      <div className="pt-3 lg:pb-3 pr-4 xl:pr-2 xl:right-[-10px] xl:relative lg:w-[35px] ">
                        <img
                          src="/public/images/Banner/ButtonR.svg"
                          alt="button"
                          className="w-auto h-auto xl:w-[28.94px] xl:h-[28.94px]"
                        />
                      </div>

                      {/* Right: Duration */}
                      <div className="text-right pl-[30px] lg:pl-[15px] xl:pl-[34px] lg:leading-[20px]">
                        <span className="font-extrabold pr-[22px] xl:pr-[20px] text-[23.67px] md:text-[18px] xl:text-[23.67px] text-start tracking-[-0.02em]">
                          12
                        </span>
                        <br />
                        <span className="font-medium text-[14.94px] md:text-[14px]  leading-[22.64px] tracking-[-0.02em] text-[#434343]">
                          Weeks
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Centered image */}
                  <div className="absolute bottom-[100px] lg:bottom-[70px] xl:bottom-[100px] inset-0 flex justify-center items-end">
                    <img
                      className="bg-[#DFF25D] rounded-full  lg:w-[30px] xl:w-[41px]"
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
      <div className="mt-[77px] md:mt-[65px] xl:mt-[77px]">
        <div className="flex justify-center relative ">
          {/* Background pattern */}
          <img
            src="/public/images/company/patern.svg"
            alt="pattern"
            className="w-full  h-auto  max-w-[1440px]"
          />

          {/* Centered content */}
          <div className="absolute top-[40px] xl:top-[0px] inset-0 flex flex-col items-center justify-center px-4">
            <h1 className="font-semibold text-[24px] md:text-[18px] lg:text-[21px] sm:text-[15px] xl:text-[24px] xl:leading-[32px] xl:tracking-[-1%] xl:pt-[22px] text-center text-[#03041666] leading-[32px] md:leading-[26px] sm:leading-[22px] tracking-[-1%] max-[640px]:mt-[100px]">
              <span className="text-black">25,000+</span> Students <br />
              Empowered Since Launch
            </h1>

            {/* Company logos */}
            <div className="relative flex flex-wrap justify-center gap-11 md:gap-6 md:bottom-[25px] lg:top-[-5px] sm:gap-4 xl:gap-[46px] mt-7 max-[640px]:flex max-[640px]:flex-row max-[640px]:flex-nowrap">
              <div className="max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center contents">
                <a
                  href="https://www.hw.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/public/images/company/img1.svg"
                    alt="logo1"
                    className="cursor-pointer w-[120px] md:w-[40px] lg:w-[50px] sm:w-[70px] xl:w-[62px] xl:h-[73px]  max-[640px]:w-[60px]"
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
                    className="cursor-pointer w-[120px] md:w-[40px] lg:w-[50px] sm:w-[70px] xl:w-[62px] xl:h-[73px]  max-[640px]:w-[60px]"
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
                    className="cursor-pointer w-[120px] md:w-[40px] lg:w-[50px] sm:w-[70px] xl:w-[62px] xl:h-[73px]  max-[640px]:w-[60px]"
                  />
                </a>
              </div>
              <div className="max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center contents">
                <a
                  href="http://lakesideschool.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/public/images/company/img4.svg"
                    alt="logo4"
                    className="cursor-pointer w-[120px] md:w-[40px] lg:w-[50px] sm:w-[70px] xl:w-[62px] xl:h-[73px]  max-[640px]:w-[60px]"
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
                    className="cursor-pointer w-[120px] md:w-[40px] lg:w-[50px] sm:w-[70px] xl:w-[62px] xl:h-[73px]  max-[640px]:w-[60px]"
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
                    className="cursor-pointer w-[120px] md:w-[35px] lg:w-[45px] sm:w-[70px] xl:w-[62px] xl:h-[73px]  max-[640px]:w-[60px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex justify-center lg:justify-between  items-end mt-16 flex-wrap gap-6 sm:gap-3 px-4 max-[640px]:mt-[190px]">
        {/* Left: Title */}
        <div className="flex-1 min-w-[250px]">
          <h1 className="Recoleta font-bold text-[56px] md:text-[33px] sm:text-[28px] lg:text-start lg:text-[30px] lg:leading-[30px] leading-[60px] md:leading-[40px] sm:leading-[32px] xl:text-[56.99px] xl:leading-[60px] tracking-[-1.02px] mr-[57px] md:mr-0 md:mt-[-20px] text-left md:text-center max-[640px]:text-center max-[640px]:m-0 max-[640px]:text-[34px] max-[640px]:leading-[35px]">
            Skills That <br /> Shape Tomorrow
          </h1>
        </div>

        {/* Middle: Icon + Text */}
        <div className="md:flex md:items-center md:text-center lg:flex lg:items-end min-w-[250px] md:mt-3 w-full lg:w-auto xl:contents">
          <div className="md:flex md:flex-col md:items-center md:justify-center md:gap-3 lg:items-start">
            <img
              src="/public/images/Cart/icon.svg"
              alt="icon"
              className="w-[80px] sm:w-[50px] lg:w-[30px] mx-auto md:hidden lg:block lg:mx-0"
            />

            <p className="font-medium text-[18px] md:text-[15px] sm:text-[13px] mt-[20px] md:mt-2 leading-[28px] md:leading-[24px] tracking-[-0.22px] md:text-center lg:text-start">
              Learn Essential Life Skills Tailored to Help{' '}
              <br className="hidden sm:block" />
              You Succeed in School, Work, and Life
            </p>
          </div>

          {/* Right: Button */}
          <div className="flex justify-center lg:justify-end flex-1 min-w-[200px] mt-4 md:mt-6 lg:ml-auto">
            {' '}
            {/* ⬅️ Added lg:justify-end & lg:ml-auto */}
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
      <div className="flex gap-[20px] mt-[66px] md:flex-wrap lg:flex-nowrap justify-center md:gap-[16px] sm:gap-[12px] max-[640px]:flex-col">
        {/* Card 1 */}
        <div className="relative bg-[#FF9F87] rounded-3xl overflow-hidden w-full sm:w-[90%] md:w-[48%] lg:w-auto">
          <div className="flex gap-14 px-8 absolute top-0 left-0 right-0">
            <h1 className="font-semibold text-3xl md:text-[22px] sm:text-[18px] xl:text-[30px] xl:leading-[36px] leading-[36px] md:leading-[28px] lg:text-[25px] lg:leading-[27px] tracking-[-0.09px] pt-[26px] sm:pt-[20px]">
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
            <h1 className="font-semibold text-3xl md:text-[22px] sm:text-[18px] lg:text-[25px] xl:text-[30px] xl:leading-[36px] lg:leading-[27px] leading-[36px] md:leading-[28px] tracking-[-0.09px] pt-[26px] sm:pt-[20px]">
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
            <h1 className="font-semibold text-3xl md:text-[22px] lg:text-[25px] lg:leading-[27px] sm:text-[18px] xl:text-[30px] xl:leading-[36px] leading-[36px] md:leading-[28px] tracking-[-0.09px] pt-[26px] sm:pt-[20px]">
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
      <div className="mt-[107px] relative flex justify-center max-[640px]:m-0 max-[640px]:mt-[50px]">
        {/* Background Icon Image */}
        <img
          src="/public/images/subjects/icons.svg"
          alt=""
          className="w-full  h-auto max-[640px]:hidden"
        />

        {/* Centered Heading */}
        <h1
          className="
      absolute inset-0 flex items-center justify-center 
      text-[55px] leading-[60px] text-center font-bold
      lg:text-[50px] lg:leading-[47px]  /* keep 1440px same */
      md:text-[36px] md:leading-[40px] 
      sm:text-[28px] sm:leading-[32px] 
      xs:text-[22px] xs:leading-[26px]
      xl:text-[50px] xl:leading-[60px]
      px-4
       max-[640px]:text-[34px] max-[640px]:leading-[35px]
    "
        >
          Where Questions <br /> Meet Answers
        </h1>
      </div>

      {/* Subjects Grid */}
      <div>
        <RenderRowResponsive />
      </div>

      {/* Last Section */}
      <div className="flex flex-col lg:flex-row gap-[63px] lg:gap-[45px] mt-[176px] lg:mt-[100px] md:mt-[-30px] items-center lg:items-start max-[640px]:mt-[0px] max-[640px]:gap-[0px]">
        {/* Left Section */}
        <div className="relative w-full lg:w-1/2  flex justify-center md:justify-center md:items-center">
          <img
            src="/public/images/Cart2/backimg.svg"
            alt="background"
            className="w-full max-w-[700px] sm:max-w-[450px] h-auto max-[640px]:h-[408px] "
          />

          <div
            className="absolute inset-0 flex flex-col 
               items-start justify-center 
               px-6 sm:px-4 
               lg:items-start lg:justify-center 
               md:items-center md:justify-center 
               top-[120px] sm:top-[80px] lg:top-[170px] 
               xl:left-[35px]
               max-[640px]:items-center max-[640px]:justify-start max-[640px]:content-start max-[640px]:top-[50px]
               max-[640px]:h-[382px]
               "
          >
            <h1
              className="Recoleta font-bold text-[56px] leading-[60px] tracking-[-1px]
                 lg:text-[45px] lg:leading-[50px] lg:text-start
                 md:text-[38px] md:leading-[46px] md:text-center
                 sm:text-[28px] sm:leading-[34px] sm:text-center max-[640px]:text-[35px] max-[640px]:leading-[35px] max-[640px]:text-center"
            >
              Experience <br /> Learning Like <br /> Never Before
            </h1>

            <p
              className="font-medium text-[18px] leading-[30px] tracking-[-0.22px] mt-[24px] max-[640px]:text-center
                 lg:text-[15px] lg:leading-[25px] lg:text-start
                 md:text-[15px] md:leading-[24px] md:text-center
                 sm:text-[13px] sm:leading-[22px] sm:text-center"
            >
              Discover Personalized, AI-Powered{' '}
              <br className=" max-[640px]:hidden inline" /> Learning That
              Prepares Students for{' '}
              <br className=" max-[640px]:hidden inline" /> Success in the Real
              World
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
        <div className="w-full md:mt-[-30px]   lg:w-1/2 flex flex-col items-center lg:items-start px-4 lg:px-0">
          {/* Top Card */}
          <div className="relative lg:top-[40px] xl:top-[170px] w-full flex justify-center">
            <div className="absolute px-[45px] pt-[123px] md:pt-[40px] md:px-[70px] md:left-0 lg:pt-[110px] lg:px-[0px]">
              <h1
                className="Recoleta font-semibold text-white text-[40px] leading-[42px] tracking-[-0.13px]
                       md:text-[28px] md:leading-[32px] sm:text-[22px] sm:leading-[26px] lg:text-[25px] xl:text-[40px] xl:leading-[42px] lg:leading-[30px] lg:px-[30px] max-[640px]:hidden"
              >
                Personalized <br /> Learning Paths
              </h1>
              <p
                className="font-normal text-[18px] text-white leading-[24px] tracking-[-0.22px]
                      md:text-[15px] sm:text-[13px] lg:text-[13px] lg:leading-[19px] lg:px-[30px]
                      xl:text-[18px] xl:leading-[24px] max-[640px]:hidden
                      "
              >
                AI adapts courses to your unique <br /> learning style.
              </p>
            </div>
            <img
              src="/public/images/Cart2/img1.svg"
              alt="Learning paths"
              className="w-full max-w-[600px] sm:max-w-[400px] h-auto lg:max-w-[700px] lg:h-[300px]"
            />
          </div>

          {/* Bottom Cards */}
          <div className="flex flex-col md:flex-row gap-5 lg:gap-4 mt-5 lg:mt-[-10px] xl:mt-[170px] w-full justify-center items-center">
            {/* Card 1 */}
            <div
              className="bg-[#DDF24B] relative px-[32px] py-[37px] rounded-[24px]
               flex flex-col justify-between w-full md:w-1/2 max-w-[400px]
               lg:w-[300px] lg:h-[210px] md:h-[250px]
               xl:w-[341px] xl:h-[330px]
               "
            >
              <div className="absolute top-[30px] right-[40px] sm:top-[20px] sm:right-[20px]">
                <h1
                  className="Recoleta font-semibold text-[30px] leading-[36px] tracking-[-0.09px]
                   md:text-[24px] lg:text-[21px] lg:leading-[25px] sm:text-[20px]
                   xl:text-[30px] xl:leading-[36px]
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
                className="absolute bottom-[30px] left-[40px] text-[18px] lg:text-[12px] lg:leading-[17px]
                xl:text-[18px] xl:leading-[24px]
                 leading-[22px] text-[#434343] font-medium md:text-[15px] sm:text-[13px] sm:left-[20px]"
              >
                Accumulate scholarship <br /> funds as you progress
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-[#AF9EEF] relative rounded-[24px] px-[39px] py-[37px] overflow-hidden
               flex flex-col justify-between w-full md:w-1/2 max-w-[400px]
               lg:w-[300px] lg:h-[210px] md:h-[250px] xl:w-[384px] xl:h-[330px]"
            >
              <h1
                className="Recoleta font-semibold text-[30px] leading-[36px] tracking-[-0.09px]
                  absolute top-[37px] left-[39px] md:top-5
                  md:text-[24px] sm:text-[20px] sm:left-[20px] lg:text-[21px] lg:leading-[25px]
                  xl:text-[30px] xl:leading-[36px] max-[640px]:text-[24px] max-[640px]:leading-[26px] max-[640px]:left-[27px]

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

                sm:text-[13px] sm:left-[20px]  max-[640px]:left-[27px]"
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
          <h1 className="text-3xl sm:text-4xl md:text-[25px] md:leading-[25px] lg:text-[50px] lg:leading-[50px] font-bold  mb-8 leading-[60px] max-[640px]:leading-[35px]">
            Join Our <br /> Community <br /> Banner
          </h1>
          <button
            onClick={() => navigate('/login')}
            className="py-3 px-8 md:py-2 md:px-6 md:mb-8 bg-[#FF3400] rounded-full cursor-pointer text-white text-[18px] md:text-[14px] font-semibold  hover:shadow-[0_6px_0_0_#C52800]  transition max-[640px]:relative max-[640px]:top-[-31px]"
          >
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}
