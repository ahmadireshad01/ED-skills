export default function Landingpage() {
  const row1 = [
    {
      title: 'All Subject',
      color: 'bg-[#FFD5CA]',
      icon: '/images/subjects/img1.svg',
    },
    {
      title: 'English',
      color: 'bg-[#FAEAFA]',
      icon: '/images/subjects/img2.svg',
    },
    {
      title: 'Business',
      color: 'bg-[#EAF3AB]',
      icon: '/images/subjects/img3.svg',
    },
    {
      title: 'History',
      color: 'bg-[#E3EFFF]',
      icon: '/images/subjects/img4.svg',
    },
    {
      title: 'Geography',
      color: 'bg-[#FBEEE2]',
      icon: '/images/subjects/img5.svg',
    },
    {
      title: 'Chemistry',
      color: 'bg-[#E4F7EF]',
      icon: '/images/subjects/img6.svg',
    },
  ];

  const row2 = [
    {
      title: 'Physics',
      color: 'bg-[#E4F7EF]',
      icon: '/images/subjects/img7.svg',
    },
    {
      title: 'Engineering',
      color: 'bg-[#E3EFFF]',
      icon: '/images/subjects/img8.svg',
    },
    {
      title: 'Medicine',
      color: 'bg-[#FAEAFA]',
      icon: '/images/subjects/img9.svg',
    },
    {
      title: 'Computers',
      color: 'bg-[#E8E2FF]',
      icon: '/images/subjects/img10.svg',
    },
  ];

  const row3 = [
    {
      title: 'Mathematics',
      color: 'bg-[#E8E2FF]',
      icon: '/images/subjects/img11.svg',
    },
    {
      title: 'Arts',
      color: 'bg-[#EAF3AB]',
      icon: '/images/subjects/img12.svg',
    },
  ];

  const renderRow = (row: { title: string; color: string; icon: string }[]) => (
    <div className="flex flex-wrap justify-center gap-4 w-full">
      {row.map((subject, index) => (
        <div
          key={index}
          className={`rounded-2xl border border-[#E5E5E5] shadow-[0_6px_0_0_#B1B1AC4D] 
          flex flex-col items-center justify-center p-4 sm:p-6 w-[120px] sm:w-36 
          transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105
          ${index % 2 === 0 ? 'bg-[#F9F9F3]' : 'bg-white'}`}
        >
          <div
            className={`rounded-full flex items-center justify-center mb-2 sm:mb-3 px-4 py-3 ${subject.color}`}
          >
            <img
              src={subject.icon}
              alt={subject.title}
              className="w-6 h-6 sm:w-6 sm:h-6"
            />
          </div>
          <p className="text-sm sm:text-base font-medium text-gray-700 text-center">
            {subject.title}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#F9F9F3] px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <div className="relative flex justify-center items-center flex-col md:flex-row">
        <img
          src="/images/Banner/bannner.svg"
          alt="banner"
          className="w-full h-auto"
        />
        <div className="absolute top-0 md:top-1/4 flex flex-col justify-center items-center text-center px-2 md:px-0">
          <h1 className="font-bold Recoleta mt-16 md:mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug md:leading-tight">
            AI-Powered Learning <br /> for Tomorrow&apos;s Leaders
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#474645] mt-2 md:mt-4">
            Empowering Students with Personalized, Interactive Learning <br />
            Designed to Build Essential Skills for Future Success
          </p>
          <button className="mt-4 md:mt-8 py-2 sm:py-4 px-6 sm:px-20 bg-[#FF3400] rounded-full text-white text-sm sm:text-lg font-semibold hover:shadow-[0_6px_0_0_#C52800] transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Banner images */}
      <div className="flex flex-wrap gap-2 sm:gap-5 mt-4 sm:mt-8 justify-center">
        <img
          src="/images/Banner/img1.svg"
          alt=""
          className="w-full sm:w-auto"
        />
        <div className="flex flex-col gap-2 sm:gap-5">
          <img
            src="/images/Banner/img2.svg"
            alt=""
            className="w-full sm:w-auto"
          />
          <img
            src="/images/Banner/img3.svg"
            alt=""
            className="w-full sm:w-auto"
          />
        </div>
        <img
          src="/images/Banner/img4.svg"
          alt=""
          className="w-full sm:w-auto"
        />
      </div>

      {/* Company Stats */}
      <div className="mt-8 sm:mt-20 flex flex-col items-center">
        <div className="relative">
          <img src="/images/company/patern.svg" alt="patern1" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="font-semibold text-lg sm:text-xl md:text-2xl text-center text-[#03041666] leading-snug sm:leading-snug md:leading-snug">
              <span className="text-black text-xl md:text-2xl">25,000+</span>{' '}
              Students <br />
              Empowered Since Launch
            </h1>
            <div className="flex flex-wrap justify-center gap-4 md:gap-11 mt-4 sm:mt-7">
              <img
                src="/images/company/img1.svg"
                alt=""
                className="w-8 sm:w-auto"
              />
              <img
                src="/images/company/img2.svg"
                alt=""
                className="w-8 sm:w-auto"
              />
              <img
                src="/images/company/img3.svg"
                alt=""
                className="w-8 sm:w-auto"
              />
              <img
                src="/images/company/img4.svg"
                alt=""
                className="w-8 sm:w-auto"
              />
              <img
                src="/images/company/img5.svg"
                alt=""
                className="w-8 sm:w-auto"
              />
              <img
                src="/images/company/img6.svg"
                alt=""
                className="w-8 sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 sm:mt-16 gap-4 md:gap-8">
        <div className="text-center md:text-left">
          <h1 className="Recoleta font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
            Skills That <br /> Shape Tomorrow
          </h1>
        </div>
        <div className="text-center md:text-left">
          <img src="/images/Cart/icon.svg" alt="" className="mx-auto md:mx-0" />
          <p className="font-medium text-sm sm:text-base mt-2 sm:mt-4 leading-snug">
            Learn Essential Life Skills Tailored to Help <br /> You Succeed in
            School, Work, and Life
          </p>
        </div>
        <button className="py-2 sm:py-3 px-4 sm:px-8 bg-[#FF3400] rounded-full text-white text-sm sm:text-lg font-semibold hover:shadow-[0_6px_0_0_#C52800] transition">
          Join now
        </button>
      </div>

      {/* Skills images */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-[20px] mt-4 sm:mt-[66px]">
        <img src="/images/Cart/img1.svg" alt="" className="w-32 sm:w-auto" />
        <img src="/images/Cart/img2.svg" alt="" className="w-32 sm:w-auto" />
        <img src="/images/Cart/img3.svg" alt="" className="w-32 sm:w-auto" />
      </div>

      {/* Section Title */}
      <div className="mt-8 sm:mt-[107px] relative flex justify-center">
        <img src="/images/subjects/icons.svg" alt="" />
        <h1 className="absolute inset-0 flex items-center justify-center text-2xl sm:text-4xl md:text-5xl lg:text-[55px] text-center leading-snug sm:leading-snug md:leading-[60px]">
          Where Questions <br /> Meet Answers
        </h1>
      </div>

      {/* Subjects Grid */}
      <div className="flex flex-col items-center gap-2 sm:gap-5 mt-2 sm:mt-3">
        {renderRow(row1)}
        {renderRow(row2)}
        {renderRow(row3)}
      </div>

      {/* Last Section */}
      <div className="flex flex-col lg:flex-row gap-8 mt-8 sm:mt-[176px]">
        <div className="relative w-full lg:w-1/2">
          <img
            src="/images/Cart2/backimg.svg"
            alt=""
            className="w-full h-auto"
          />
          <div className="absolute inset-0 top-40 flex flex-col items-start justify-center p-4 sm:p-6 lg:p-12">
            <h1 className="Recoleta font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
              Experience <br /> Learning Like <br /> Never Before
            </h1>
            <p className="font-medium text-sm sm:text-base md:text-lg mt-2 sm:mt-4 leading-snug">
              Discover Personalized, AI-Powered <br /> Learning That Prepares
              Students for <br /> Success in the Real World
            </p>
            <button className="py-2 sm:py-3 px-4 sm:px-8 mt-4 sm:mt-8 bg-[#FF3400] rounded-full text-white text-sm sm:text-lg font-semibold hover:shadow-[0_6px_0_0_#C52800] transition">
              Start Your Journey
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2">
          <img
            src="/images/Cart2/img1.svg"
            alt=""
            className="w-full sm:w-auto"
          />
          <div className="flex flex-wrap gap-2 sm:gap-5">
            <img
              src="/images/Cart2/img2.svg"
              alt=""
              className="w-32 sm:w-auto"
            />
            <img
              src="/images/Cart2/img3.svg"
              alt=""
              className="w-32 sm:w-auto"
            />
          </div>
        </div>
      </div>

      {/* Community Banner */}
      <div className="mt-8 sm:mt-20 relative w-full">
        <img
          src="/images/community/bgimg.svg"
          alt="background"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <img src="/images/community/icon.svg" alt="icon" className="mb-4" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 leading-snug">
            Join Our <br /> Community <br /> Banner
          </h1>
          <button className="py-2 sm:py-3 px-4 sm:px-8 bg-[#FF3400] rounded-full cursor-pointer text-white text-sm sm:text-lg font-semibold hover:shadow-[0_6px_0_0_#C52800] transition">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}
