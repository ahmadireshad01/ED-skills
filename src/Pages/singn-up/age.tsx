import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import flower from '../../../public/images/signup/flower.svg';
import left from '../../../public/images/signup/Group 2 (1).png';
import right from '../../../public/images/signup/Group 3.png';
import ProgressBar from '../../Components/progress';
import star from '../../../public/images/signup/star.svg';

export default function Agepage() {
  const [age, setAge] = useState('');
  const [error, setError] = useState(''); // 🔥 NEW
  const navigate = useNavigate();

  useEffect(() => {
    const signupData = localStorage.getItem('signupData');
    if (!signupData) {
      navigate('/signup');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Convert to number
    const ageNum = Number(age);

    // ---------- 🔥 FRONTEND VALIDATION ----------
    if (!age) {
      setError("Age is required");
      return;
    }
    if (isNaN(ageNum)) {
      setError("Age must be a number");
      return;
    }
    if (ageNum < 1) {
      setError("Age must be at least 1");
      return;
    }
    if (ageNum > 150) {
      setError("Age cannot exceed 150");
      return;
    }

    // If everything is OK: clear error
    setError(""); // 🔥 CLEAR

    // Save to localStorage
    const signupData = JSON.parse(localStorage.getItem('signupData') || '{}');
    const updatedData = { ...signupData, age: ageNum };
    localStorage.setItem('signupData', JSON.stringify(updatedData));

    navigate('/interests');
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-white">
      <img
        src={left}
        alt="left decoration"
        className="absolute left-0 top-[60%] -translate-y-1/2 max-[1170px]:opacity-0 max-[450px]:hidden"
      />
      <img
        src={right}
        alt="right decoration"
        className="absolute right-0 top-[60%] -translate-y-1/2 max-[1170px]:opacity-0 max-[450px]:hidden"
      />

      <div className="absolute top-0 left-0 w-full px-4 pt-6">
        <ProgressBar progress={65} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full max-w-[450px] px-6 text-center"
      >
        <img src={flower} alt="flower" className="mb-6" />

        <h1 className="font-semibold text-2xl sm:text-3xl text-[#1D1D1F] leading-snug">
          Tell us your age to create <br /> the best experience for you.
        </h1>

        <div className="flex w-full items-center justify-center gap-2 mt-6">
          <img src={star} className="w-5 h-5" />
          <div className="border-t border-[#DFE1E6] flex-1" />
          <img src={star} className="w-5 h-5" />
        </div>

        <div className="flex flex-col w-full mt-6">

          {/* ---------- 🔥 ERROR MESSAGE UI ---------- */}
          {error && (
            <p className="text-red-500 text-sm mb-2 text-left">
              {error}
            </p>
          )}

          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={`border rounded-lg py-3 px-4 text-base transition 
              ${error ? 'border-red-500' : 'border-[#DEE0E3]'}
              focus:outline-none focus:ring-2 focus:ring-[#FF613E]`}
            placeholder="Enter your age..."
          />

          <button
            type="submit"
            className={`py-3 mt-6 rounded-2xl w-full font-medium text-white transition-colors 
              ${age ? 'bg-[#FF613E] hover:bg-[#e55532]' : 'bg-gray-300 cursor-not-allowed'}
            `}
            disabled={!age}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
