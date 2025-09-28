export default function () {
  return (
    <>
      <div className="px-[124px] relative">
        {/* Banner wrapper */}
        <div className="relative flex justify-center items-center">
          {/* Background image */}
          <img
            src="/images/Banner/bannner.svg"
            alt="banner"
            className="w-full h-auto"
          />

          {/* Overlay content */}
          <div className="absolute  flex flex-col justify-center items-center text-center">
            <h1 className="font-bold Recoleta mt-[64px] text-[72px] leading-[70px] tracking-[-1%]">
              AI-Powered Learning <br /> for Tomorrow's Leaders
            </h1>

            <p className="text-[18px] font-medium leading-[28px] tracking-[-0.22px] text-[#474645] mt-4">
              Empowering Students with Personalized, Interactive Learning <br />
              Designed to Build Essential Skills for Future Success
            </p>

            <div className="flex justify-center mt-9">
              <button className="py-[17px] px-[77px] bg-[#FF3400] rounded-[32px] text-[18px] font-semibold leading-[100%] tracking-[-0.09px] shadow-lg shadow-black/30">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
