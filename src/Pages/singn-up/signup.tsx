import { X, Eye, EyeOff } from 'lucide-react';
import group from '../../../public/images/login/Group 2.png';
import star from '../../../public/images/login/star.svg';
import starb from '../../../public/images/login/starb.svg';
import apple from '../../../public/images/login/apple.svg';
import google from '../../../public/images/login/google.svg';
import { useState } from 'react';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
    submit?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (name in errors && errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {
      username?: string;
      email?: string;
      password?: string;
      submit?: string;
    } = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch('http://localhost:2040/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error) {
          setErrors({ submit: data.error });
        } else if (data.details) {
          const backendErrors: {
            username?: string;
            email?: string;
            password?: string;
            submit?: string;
          } = {};
          data.details.forEach((detail: any) => {
            backendErrors[detail.path[0] as keyof typeof backendErrors] =
              detail.message;
          });
          setErrors(backendErrors);
        } else {
          setErrors({ submit: 'Signup failed. Please try again.' });
        }
        return;
      }

      console.log('Signup successful:', data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      alert('Signup successful!');
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left red div */}
      <div className="bg-[#FF613E] m-[10px] py-[100px] rounded-2xl w-full h-full">
        <div className="m-auto flex flex-col justify-center items-center">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[24px]">
              <img src={star} alt="" className="m-auto" />
              <p className="text-[40px] font-semibold text-white leading-[40px] tracking-[0px] text-center">
                Watch Your Child's <br />
                Knowledge Grow
              </p>
            </div>
            <img src={group} alt="" />
          </div>
        </div>
      </div>

      {/* Right form div */}
      <div className="p-[46px] w-full flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-[14px]">
            <img src={starb} alt="" />
            <p className="font-bold leading-[15px]">
              EDTECH <br /> SKILLS
            </p>
          </div>
          <div className="border-[2px] rounded-full flex items-center justify-center p-[14px] border-[#DEE0E3]">
            <X />
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-4 w-full max-w-md"
          >
            <p className="font-semibold text-[24px] text-center mb-4">
              Signup to Edtech
            </p>

            {/* Username input */}
            <div className="w-full">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className={`p-[12px] rounded-2xl w-full border-[2px] ${
                  errors.username ? 'border-red-500' : 'border-[#14151A0D]'
                }`}
                placeholder="Username"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1 ml-2">
                  {errors.username}
                </p>
              )}
            </div>

            {/* Email input */}
            <div className="w-full">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`p-[12px] rounded-2xl w-full border-[2px] ${
                  errors.email ? 'border-red-500' : 'border-[#14151A0D]'
                }`}
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 ml-2">{errors.email}</p>
              )}
            </div>

            {/* Password input with eye icon */}
            <div className="relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`p-[12px] rounded-2xl w-full border-[2px] pr-12 ${
                  errors.password ? 'border-red-500' : 'border-[#14151A0D]'
                }`}
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 ml-2">
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#FF613E] text-white rounded-2xl py-3 mt-4 w-full hover:bg-[#e55532] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing up...' : 'Signup to Portal'}
            </button>

            {errors.submit && (
              <p className="text-red-500 text-sm text-center">
                {errors.submit}
              </p>
            )}

            <div className="flex items-center w-full">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-4 text-gray-500 whitespace-nowrap">
                Or AUTHorize with
              </span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <div className="flex gap-[8px]">
              <button
                type="button"
                className="px-[72px] py-[14px] border border-[#DFE1E6] rounded-[12px] cursor-pointer flex gap-[5px] hover:bg-gray-50"
              >
                <img src={apple} alt="" />
                Apple
              </button>

              <button
                type="button"
                className="px-[72px] py-[14px] border border-[#DFE1E6] rounded-[12px] cursor-pointer flex gap-[5px] hover:bg-gray-50"
              >
                <img src={google} alt="" />
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
