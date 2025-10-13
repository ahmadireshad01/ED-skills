import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import flower from '../../../public/images/signup/flower.svg';
import left from '../../../public/images/signup/Group 2 (1).png';
import right from '../../../public/images/signup/Group 3.png';
import ProgressBar from '../../Components/progress';
import star from '../../../public/images/signup/star.svg';

export default function Skills() {
  const [selected, setSelected] = useState<
    'parent' | 'teacher' | 'learner' | null
  >(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Ensure user has gone through previous steps
  useEffect(() => {
    const signupData = localStorage.getItem('signupData');
    if (!signupData) {
      // If no signupData, start from signup page
      navigate('/signup');
    }
  }, [navigate]);

  const handleSelect = (role: 'parent' | 'teacher' | 'learner') => {
    setSelected(role);
  };

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) {
      alert('Please select one option before continuing.');
      return;
    }

    // ✅ Always fetch latest signupData from localStorage
    const existingData = JSON.parse(localStorage.getItem('signupData') || '{}');

    const finalData = {
      username: existingData.username,
      email: existingData.email,
      password: existingData.password,
      age: existingData.age ? Number(existingData.age) : null,
      interests: existingData.interests || [],
      skills: selected, // required by backend
    };

    try {
      setLoading(true);
      const response = await fetch('http://localhost:2040/users/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'Signup failed. Please try again.');
        return;
      }

      // ✅ Clear signupData after each successful submission
      localStorage.removeItem('signupData');

      // ✅ Store user & token for current session
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      alert('🎉 Signup complete! You can signup again if needed.');
      navigate('/signup'); // redirect back to signup page if needed
    } catch (error) {
      console.error('Signup error:', error);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
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
      <div className="mt-[57px]">
        <ProgressBar progress={100} />
      </div>

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

            <button
              type="submit"
              disabled={!selected || loading}
              className={`py-[12px] mt-[26px] rounded-2xl w-full text-white transition-colors ${
                selected
                  ? 'bg-[#FF613E] hover:bg-[#e55532]'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {loading ? 'Submitting...' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
