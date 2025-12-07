import React from 'react';

export default function Subjects() {
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

  const lgChunks = [row1.slice(0, 5), row1.slice(5, 9), row1.slice(9, 12)];
  const xlChunks = [row1.slice(0, 6), row1.slice(6, 10), row1.slice(10, 12)];

  const renderSubjects = (subjects: typeof row1, cols: number) => (
    <div
      className="grid gap-6 justify-center"
      style={{
        gridTemplateColumns: `repeat(${cols}, 135px)`,
        justifyContent: 'center',
      }}
    >
      {subjects.map((subject, index) => (
        <div
          key={index}
          className={`rounded-2xl border border-[#E5E5E5] shadow-[0_6px_0_0_#B1B1AC4D]
            flex flex-col items-center justify-center p-6 transition-transform duration-300 ease-in-out
            hover:shadow-xl hover:scale-105
            ${index % 2 === 0 ? 'bg-[#F9F9F3]' : 'bg-white'} 2xl:p-10`}
        >
          <div
            className={`rounded-full flex items-center justify-center mb-3 px-[32px] py-[17px] ${subject.color} transition-all duration-300 2xl:px-[50px] 2xl:py-[30px]`}
          >
            <img
              src={subject.icon}
              alt={subject.title}
              className="w-6 h-6 2xl:w-10 2xl:h-10"
            />
          </div>
          <p className="text-base font-medium text-gray-700 text-center transition-colors duration-300 2xl:text-[24px] 2xl:mt-2">
            {subject.title}
          </p>
        </div>
      ))}
    </div>
  );

  const RenderRowResponsive = () => (
    <div className="flex flex-col gap-6 mt-10">
      {/* XL layout */}
      <div className="hidden xl:flex flex-col gap-6">
        {xlChunks.map((chunk, idx) => {
          const cols = [6, 4, 2][idx];
          return <div key={idx}>{renderSubjects(chunk, cols)}</div>;
        })}
      </div>
      {/* LG layout */}
      <div className="hidden lg:flex xl:hidden flex-col gap-6">
        {lgChunks.map((chunk, idx) => {
          const cols = [5, 4, 3][idx];
          return <div key={idx}>{renderSubjects(chunk, cols)}</div>;
        })}
      </div>
      {/* MD layout */}
      <div className="md:flex flex-col gap-6 lg:hidden">
        {renderSubjects(row1, 3)}
      </div>
      {/* Mobile */}
      <div className="lg:hidden md:hidden max-[640px]:block">
        {renderSubjects(row1, 2)}
      </div>
    </div>
  );

  return (
    <div>
      <div className="mt-[107px] relative flex justify-center max-[640px]:m-0 max-[640px]:mt-[50px]">
        <img
          src="/images/subjects/icons.svg"
          alt=""
          className="w-full h-auto 2xl:w-[1800px] max-[640px]:hidden"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-[55px] leading-[60px] text-center font-bold ...">
          Where Questions <br /> Meet Answers
        </h1>
      </div>
      <div className="2xl:relative 2xl:right-[50px]">
        <RenderRowResponsive />
      </div>
    </div>
  );
}
