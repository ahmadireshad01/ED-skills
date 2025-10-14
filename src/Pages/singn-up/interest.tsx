import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import flower from '../../../public/images/signup/flower.svg';
import left from '../../../public/images/signup/Group 2 (1).png';
import right from '../../../public/images/signup/Group 3.png';
import ProgressBar from '../../Components/progress';

// Icons
import box from '../../../public/images/signup/box.svg';
import brain from '../../../public/images/signup/brain.svg';
import time from '../../../public/images/signup/time.svg';
import message from '../../../public/images/signup/message.svg';
import giving from '../../../public/images/signup/giving.svg';
import degital from '../../../public/images/signup/degital.svg';
import money from '../../../public/images/signup/money.svg';

const interests = [
  { label: 'Financial Literacy', icon: money },
  { label: 'Critical Thinking', icon: brain },
  { label: 'Time Management', icon: time },
  { label: 'Communication Skills', icon: message },
  { label: 'Self-Care & Wellness', icon: giving },
  { label: 'Digital Literacy', icon: degital },
  { label: 'Interpersonal Skills', icon: box },
  { label: 'Making Loan Payments', icon: box },
  { label: 'Adaptability & Resilience', icon: box },
];

export default function Interestpage() {
  const [selected, setSelected] = useState<string[]>([]);
  const navigate = useNavigate();

  // ✅ Ensure user has gone through signup & age
  useEffect(() => {
    const signupData = localStorage.getItem('signupData');
    if (!signupData) {
      navigate('/signup'); // redirect if no signup data
    }
  }, [navigate]);

  const toggleInterest = (interest: string) => {
    if (selected.includes(interest)) {
      setSelected(selected.filter(item => item !== interest));
    } else {
      if (selected.length < 4) {
        setSelected([...selected, interest]);
      } else {
        alert('You can only pick up to 4 interests.');
      }
    }
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected.length < 2) {
      alert('Please select at least 2 interests.');
      return;
    }

    // ✅ Save selected interests to localStorage
    const existingData = JSON.parse(localStorage.getItem('signupData') || '{}');
    const updatedData = { ...existingData, interests: selected };
    localStorage.setItem('signupData', JSON.stringify(updatedData));

    // Navigate to the next page (Skills)
    navigate('/skills');
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Decorative images */}
      <img
        src={left}
        alt="left decoration"
        className="absolute left-0 top-[60%] -translate-y-1/2 max-[1170px]:opacity-50 max-[450px]:hidden"
      />
      <img
        src={right}
        alt="right decoration"
        className="absolute right-0 top-[62%] -translate-y-1/2 max-[1170px]:opacity-50 max-[450px]:hidden"
      />

      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full px-4 pt-6">
        <ProgressBar progress={75} />
      </div>

      {/* Form */}
      <form
        onSubmit={handleContinue}
        className="flex flex-col items-center justify-center w-full max-w-[700px] px-6 text-center mt-20 z-10 "
      >
        <img src={flower} alt="flower" className="mb-6 z-0" />

        <h1 className="font-semibold text-2xl sm:text-3xl leading-snug text-[#1D1D1F]">
          Pick your interests from the <br /> list above and start learning
        </h1>

        {/* Interest buttons */}
        <div className="flex flex-col items-center gap-4 mt-8 w-full">
          {/* Row 1 */}
          <div className="flex flex-wrap gap-3 justify-center">
            {interests.slice(0, 3).map(({ label, icon }) => (
              <button
                type="button"
                key={label}
                onClick={() => toggleInterest(label)}
                className={`flex items-center gap-2 px-[24px] py-2 rounded-xl border text-sm font-medium transition min-w-[160px] justify-center whitespace-nowrap
                  ${
                    selected.includes(label)
                      ? 'border-[#FF613E]'
                      : 'border-[#DFE1E6] text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <img src={icon} alt={label} className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap gap-3 justify-center">
            {interests.slice(3, 6).map(({ label, icon }) => (
              <button
                type="button"
                key={label}
                onClick={() => toggleInterest(label)}
                className={`flex items-center gap-2 px-[24px] py-2 rounded-xl border text-sm font-medium transition min-w-[180px] justify-center whitespace-nowrap
                  ${
                    selected.includes(label)
                      ? 'border-[#FF613E]'
                      : 'border-[#DFE1E6] text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <img src={icon} alt={label} className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex gap-3 justify-center max-[799px]:flex-wrap">
            {interests.slice(6, 9).map(({ label, icon }) => (
              <button
                type="button"
                key={label}
                onClick={() => toggleInterest(label)}
                className={`flex items-center gap-2 px-[4px] py-2 rounded-xl border text-sm font-medium transition min-w-[220px] sm:min-w-[250px] justify-center whitespace-nowrap
                  ${
                    selected.includes(label)
                      ? 'border-[#FF613E]'
                      : 'border-[#DFE1E6] text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <img src={icon} alt={label} className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Continue button */}
        <button
          type="submit"
          disabled={selected.length < 2}
          className={`bg-[#FF613E] hover:bg-[#e55532] text-white font-medium py-3 mt-10 rounded-2xl w-full transition-colors ${
            selected.length < 2 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Continue
        </button>

        {/* Helper text */}
        <p className="text-sm text-gray-500 mt-3">
          Please select between 2 and 4 interests.
        </p>
      </form>
    </div>
  );
}
