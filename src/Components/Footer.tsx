import { FC } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

const Footer: FC = () => {
  return (
    <footer className="px-[124px] xl:px-[124px] lg:px-[80px] md:px-[40px] sm:px-[20px]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div
          className="flex justify-between items-start 
                     flex-wrap gap-8 
                     md:grid md:grid-cols-2 
                     sm:grid sm:grid-cols-1"
        >
          {/* Brand + Description */}
          <div className="min-w-[220px] sm:text-center">
            <div className="flex items-center gap-2 sm:justify-center">
              <img src="/public/images/Footer.svg" alt="logo" />
              <span className="font-bold text-[27.92px] leading-[26.7px] tracking-[-2%]">
                MyEdSkills
              </span>
            </div>
            <p
              className="text-[18px] mt-[23px] font-medium leading-[30px] 
                         tracking-[0px] text-[#474645]
                         lg:text-[16px] md:text-[15px] sm:text-[14px]"
            >
              Empowering Students with Personalized, <br /> Interactive Learning
              Designed to Build <br /> Essential Skills for Future Success
            </p>
          </div>

          {/* Product */}
          <div className="sm:text-center">
            <h3 className="text-[#9B9B9B] font-semibold text-[16px]">
              Product
            </h3>
            <ul className="leading-[24px] text-[#474645]">
              <li className="mt-[17px]">
                <a href="#">Courses</a>
              </li>
              <li className="mt-[13px]">
                <a href="#">Pricing</a>
              </li>
              <li className="mt-[13px]">
                <a href="#">Testimonials</a>
              </li>
              <li className="mt-[13px]">
                <a href="#">Help</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="sm:text-center">
            <h3 className="text-[#9B9B9B] font-semibold text-[16px]">
              Company
            </h3>
            <ul className="leading-[24px] text-[#474645]">
              <li className="mt-[17px]">
                <a href="#">About us</a>
              </li>
              <li className="mt-[13px]">
                <a href="#">Careers</a>
              </li>
              <li className="mt-[13px]">
                <a href="#">Educators</a>
              </li>
            </ul>
          </div>

          {/* Behind the scenes */}
          <div className="sm:text-center">
            <h3 className="text-[#9B9B9B] font-semibold text-[16px]">
              Behind the scenes
            </h3>
            <ul className="leading-[24px] text-[#474645]">
              <li className="mt-[17px]">
                <a href="#">Solving Equations</a>
              </li>
              <li className="mt-[13px]">
                <a href="#">Thinking in Code</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div
            className="flex gap-4 mt-6 text-gray-500 
             lg:justify-start 
             md:justify-center md:items-center 
             sm:justify-center sm:items-center"
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
