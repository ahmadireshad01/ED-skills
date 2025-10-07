import { useState } from 'react';
import flower from '../../../public/images/signup/flower.svg';
import left from '../../../public/images/signup/Group 2 (1).png';
import right from '../../../public/images/signup/Group 3.png';
import ProgressBar from '../../Components/progress';
import star from '../../../public/images/signup/star.svg';

export default function Skills() {
  const [selected, setSelected] = useState<
    'parent' | 'teacher' | 'learner' | null
  >(null);

  const handleSelect = (role: 'parent' | 'teacher' | 'learner') => {
    setSelected(role);
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) {
      alert('Please select one option before continuing.');
      return;
    }
    alert(`You selected: ${selected}`);
    // 🔹 You can navigate or save the selection here, for example:
    // navigate('/next-page');
  };

  return (
    <div className="relative min-h-screen">
      {/* Decorative Images */}
      <div>
        <img
          src={left}
          alt="left decoration"
          className="fixed left-0 top-[60%] -translate-y-1/2"
        />
        <img
          src={right}
          alt="right decoration"
          className="fixed right-0 top-[60%] -translate-y-1/2"
        />
      </div>

      {/* Progress bar */}
      <div className="mt-[57px]">
        <ProgressBar progress={35} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <form
          onSubmit={handleContinue}
          className="flex items-center justify-center flex-col w-full max-w-[550px]"
        >
          <img src={flower} alt="flower" />
          <h1 className="font-semibold text-[40px] leading-[40px] text-center mt-4">
            What are you hoping to <br /> Achieve with EdTech Skills?
          </h1>

          <div className="flex w-full items-center justify-center gap-[4px] mt-[19px]">
            <img src={star} alt="" />
            <h1 className="border-t border-[#DFE1E6] flex-1 mt-[4px]"></h1>
            <img src={star} alt="" />
          </div>

          {/* Options */}
          <div className="mt-[16px] flex flex-col gap-[10px] w-full">
            <button
              type="button"
              onClick={() => handleSelect('parent')}
              className={`p-[16px] text-left border rounded-[14px] transition-all ${
                selected === 'parent'
                  ? 'border-[#FF613E] shadow-md shadow-[#FF613E]/40'
                  : 'border-[#DFE1E6] hover:shadow-sm hover:shadow-[#FF613E]/30'
              }`}
            >
              <p className="font-medium">Parents</p>
              <p className="font-normal text-[16px] text-[#666D80]">
                Track your child’s progress, and assign new courses
              </p>
            </button>

            <button
              type="button"
              onClick={() => handleSelect('teacher')}
              className={`p-[16px] text-left border rounded-[14px] transition-all ${
                selected === 'teacher'
                  ? 'border-[#FF613E] shadow-md shadow-[#FF613E]/40'
                  : 'border-[#DFE1E6] hover:shadow-sm hover:shadow-[#FF613E]/30'
              }`}
            >
              <p className="font-medium">Teachers</p>
              <p className="font-normal text-[16px] text-[#666D80]">
                Manage students, track progress, and create courses
              </p>
            </button>

            <button
              type="button"
              onClick={() => handleSelect('learner')}
              className={`p-[16px] text-left border rounded-[14px] transition-all ${
                selected === 'learner'
                  ? 'border-[#FF613E] shadow-md shadow-[#FF613E]/40'
                  : 'border-[#DFE1E6] hover:shadow-sm hover:shadow-[#FF613E]/30'
              }`}
            >
              <p className="font-medium">Learner</p>
              <p className="font-normal text-[16px] text-[#666D80]">
                Sign up for a free account and start learning
              </p>
            </button>

            {/* Continue Button */}
            <button
              type="submit"
              className={`py-[12px] mt-[26px] rounded-2xl w-full text-white transition-colors ${
                selected
                  ? 'bg-[#FF613E] hover:bg-[#e55532]'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
              disabled={!selected}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
