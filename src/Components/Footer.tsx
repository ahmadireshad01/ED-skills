import type { FC } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

const Footer: FC = () => {
  return (
    <footer className="px-[124px] xl:px-[124px] lg:px-[80px] md:px-[40px] sm:px-[20px] max-[640px]:p-0 ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div
  className="flex justify-between items-start 
             flex-wrap gap-8 
             md:grid md:grid-cols-2 
             sm:grid sm:grid-cols-1
             max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-center max-[640px]:gap-6"
>
  {/* Brand + Description */}
  <div className="min-w-[220px] sm:text-center max-[640px]:text-center max-[640px]:items-center max-[640px]:flex max-[640px]:flex-col">
    <div className="flex items-center gap-2 sm:justify-center max-[640px]:justify-center max-[640px]:flex-col max-[640px]:gap-2">
      <img src="/public/images/Footer.svg" alt="logo" />
      <span className="font-bold text-[27.92px] leading-[26.7px] tracking-[-2%] max-[640px]:text-[24px] max-[640px]:leading-[26px]">
        MyEdSkills
      </span>
    </div>
    <p
      className="text-[18px] mt-[23px] font-medium leading-[30px] 
                 tracking-[0px] text-[#474645]
                 lg:text-[16px] md:text-[15px] sm:text-[14px]
                 max-[640px]:text-[16px] max-[640px]:leading-[24px] max-[640px]:mt-4"
    >
      Empowering Students with Personalized, <br className="inline max-[640px]:hidden" /> Interactive Learning
      Designed to Build <br className="inline max-[640px]:hidden" /> Essential Skills for Future Success
    </p>
  </div>

  {/* Product */}
  <div className="sm:text-center max-[640px]:text-center max-[640px]:mt-6">
    <h3 className="text-[#9B9B9B] font-semibold text-[16px] max-[640px]:text-[14px]">
      Product
    </h3>
    <ul className="leading-[24px] text-[#474645] max-[640px]:leading-6">
      <li className="mt-[17px] max-[640px]:mt-3">
        <a href="#">Courses</a>
      </li>
      <li className="mt-[13px] max-[640px]:mt-3">
        <a href="#">Pricing</a>
      </li>
      <li className="mt-[13px] max-[640px]:mt-3">
        <a href="#">Testimonials</a>
      </li>
      <li className="mt-[13px] max-[640px]:mt-3">
        <a href="#">Help</a>
      </li>
    </ul>
  </div>

  {/* Company */}
  <div className="sm:text-center max-[640px]:text-center max-[640px]:mt-6">
    <h3 className="text-[#9B9B9B] font-semibold text-[16px] max-[640px]:text-[14px]">
      Company
    </h3>
    <ul className="leading-[24px] text-[#474645] max-[640px]:leading-6">
      <li className="mt-[17px] max-[640px]:mt-3">
        <a href="#">About us</a>
      </li>
      <li className="mt-[13px] max-[640px]:mt-3">
        <a href="#">Careers</a>
      </li>
      <li className="mt-[13px] max-[640px]:mt-3">
        <a href="#">Educators</a>
      </li>
    </ul>
  </div>

  {/* Behind the scenes */}
  <div className="sm:text-center max-[640px]:text-center max-[640px]:mt-6">
    <h3 className="text-[#9B9B9B] font-semibold text-[16px] max-[640px]:text-[14px]">
      Behind the scenes
    </h3>
    <ul className="leading-[24px] text-[#474645] max-[640px]:leading-6">
      <li className="mt-[17px] max-[640px]:mt-3">
        <a href="#">Solving Equations</a>
      </li>
      <li className="mt-[13px] max-[640px]:mt-3">
        <a href="#">Thinking in Code</a>
      </li>
    </ul>
  </div>

  {/* Social Media Icons */}
  <div
    className="flex gap-4 mt-6 text-gray-500 
             lg:justify-start 
             md:justify-center md:items-center 
             sm:justify-center sm:items-center
             max-[640px]:justify-center max-[640px]:mt-6"
  >
    <a href="#">
      <FaFacebookF size={18} />
    </a>
    <a href="#">
      <FaInstagram size={18} />
    </a>
    <a href="#">
      <FaXTwitter size={18} />
    </a>
    <a href="#">
      <FaLinkedinIn size={18} />
    </a>
  </div>
</div>

{/* Bottom Section */}
<div
  className="mt-10 flex flex-col md:flex-row justify-between items-center 
             text-xs text-gray-500 border-t border-[#E4E4D9] pt-6 
             sm:gap-4 sm:text-center
             max-[640px]:text-center max-[640px]:gap-3"
>
  <div className="flex gap-6 mb-4 md:mb-0 sm:justify-center max-[640px]:flex-col max-[640px]:gap-2 max-[640px]:items-center">
    <a href="#">Terms of service</a>
    <a href="#">Privacy policy</a>
  </div>
  <p>© MyEdSkills {new Date().getFullYear()}</p>
</div>

        {/* Bottom Section */}
        <div
          className="mt-10 flex flex-col md:flex-row justify-between items-center 
                     text-xs text-gray-500 border-t border-[#E4E4D9] pt-6 
                     sm:gap-4 sm:text-center"
        >
          <div className="flex gap-6 mb-4 md:mb-0 sm:justify-center">
            <a href="#">Terms of service</a>
            <a href="#">Privacy policy</a>
          </div>
          <p>© MyEdSkills {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
