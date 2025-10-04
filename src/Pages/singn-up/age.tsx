import flower from '../../../public/images/signup/flower.svg';
import left from '../../../public/images/signup/Group 2 (1).png';
import right from '../../../public/images/signup/Group 3.png';
import ProgressBar from '../../Components/progress';
import star from '../../../public/images/signup/star.svg';

export default function Agepage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-white">
      {/* Decorative images */}
      <img
        src={left}
        alt="left decoration"
        className="absolute left-0 top-1/2 -translate-y-1/2"
      />
      <img
        src={right}
        alt="right decoration"
        className="absolute right-0 top-1/2 -translate-y-1/2"
      />

      {/* Progress bar always at top */}
      <div className="absolute top-0 left-0 w-full px-4">
        <ProgressBar progress={65} />
      </div>

      {/* Centered content */}
      <form className="flex flex-col items-center justify-center w-full max-w-[450px] px-6 text-center">
        {/* Flower icon */}
        <img src={flower} alt="flower" className="mb-6" />

        {/* Title */}
        <h1 className="font-semibold text-2xl sm:text-3xl leading-snug text-[#1D1D1F]">
          Tell us your age to create <br /> the best experience for you.
        </h1>

        {/* Divider with stars */}
        <div className="flex w-full items-center justify-center gap-2 mt-6">
          <img src={star} alt="star" className="w-5 h-5" />
          <div className="border-t border-[#DFE1E6] flex-1" />
          <img src={star} alt="star" className="w-5 h-5" />
        </div>

        {/* Input + Button */}
        <div className="flex flex-col w-full mt-6">
          <input
            type="number"
            className="border border-[#DEE0E3] rounded-lg py-3 px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#FF613E] transition"
            placeholder="Enter your age..."
          />
          <button
            type="submit"
            className="bg-[#FF613E] hover:bg-[#e55532] text-white font-medium py-3 mt-6 rounded-2xl w-full transition-colors"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
