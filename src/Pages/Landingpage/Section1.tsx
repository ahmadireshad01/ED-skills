// import { useNavigate } from 'react-router-dom';

export default function Section1() {
//   const navigate = useNavigate(); // ✅ Correct: inside component

  return (
    <div
      className="flex justify-center lg:justify-between 
       items-end mt-16 flex-wrap gap-6 sm:gap-3 px-4 2xl:px-[220px] 2xl:py-[30px] max-[640px]:mt-[190px]"
    >
      {/* Left: Title */}
      <div className="flex-1 min-w-[250px]">
        <h1
          className="Recoleta font-bold text-[56px] md:text-[33px] 
          sm:text-[28px] lg:text-start lg:text-[30px] lg:leading-[30px] 
          leading-[60px] md:leading-[40px] sm:leading-[32px] xl:text-[56.99px] 
          xl:leading-[60px] tracking-[-1.02px] mr-[57px] md:mr-0 md:mt-[-20px] 
          text-left md:text-center 2xl:text-[60px] max-[640px]:text-center max-[640px]:m-0 max-[640px]:text-[34px] max-[640px]:leading-[35px]"
        >
          Skills That <br /> Shape Tomorrow
        </h1>
      </div>

      {/* Middle: Icon + Text */}
      <div
        className="md:flex md:items-center md:text-center
         lg:flex lg:items-end min-w-[250px] md:mt-3 w-full 
         lg:w-auto xl:contents"
      >
        <div
          className="md:flex md:flex-col md:items-center
           md:justify-center md:gap-3 lg:items-start"
        >
          <img
            src="/images/Cart/icon.svg" // ✅ remove /public from path
            alt="icon"
            className="w-[80px] sm:w-[50px] lg:w-[30px]
               mx-auto md:hidden lg:block lg:mx-0
               2xl:w-[75px]"
          />

          <p
            className="font-medium text-[18px] md:text-[15px]
             sm:text-[13px] mt-[20px] md:mt-2 leading-[28px] md:leading-[24px]
              tracking-[-0.22px] md:text-center lg:text-start 
              2xl:text-[32px] 2xl:leading-[40px]"
          >
            Learn Essential Life Skills Tailored to Help{' '}
            <br className="hidden sm:block" />
            You Succeed in School, Work, and Life
          </p>
        </div>

        {/* Right: Button */}
        <div
          className="flex justify-center lg:justify-end
           flex-1 min-w-[200px] mt-4 md:mt-6 lg:ml-auto"
        >
          <button
            onClick={() => navigate('/login')}
            className="py-3 px-8 bg-[#FF3400] rounded-full
               text-white text-[18px] md:text-[16px] sm:text-[14px]
                font-semibold cursor-pointer hover:shadow-[0_6px_0_0_#C52800] transition
                lg:text-[12px]
                2xl:text-[25px]"
          >
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}
