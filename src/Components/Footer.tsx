import { FC } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

const Footer: FC = () => {
  return (
    <footer className="px-[124px] xl:px-[124px] lg:px-[80px] md:px-[40px] sm:px-[20px] bg-white">
      <div className="mx-auto px-6 py-12 max-w-[1300px]">
        {/* Top Section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-10 lg:gap-6 
                     justify-between items-start"
        >
          {/* Brand + Description */}
          <div className="min-w-[220px] sm:text-center lg:text-left col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 sm:justify-center lg:justify-start">
              <img
                className="lg:h-[28px] h-[25px]"
                src="/public/images/Footer.svg"
                alt="logo"
              />
              <span className="font-bold text-[27.92px] lg:text-[22px] leading-[26.7px] tracking-tight">
                MyEdSkills
              </span>
            </div>
            <p
              className="text-[18px] mt-[23px] font-medium leading-[30px]
                         tracking-[0px] text-[#474645]
                         lg:text-[13px] lg:leading-[22px] lg:mt-[18px]
                         sm:text-[14px] sm:text-center lg:text-left"
            >
              Empowering Students with Personalized, <br /> Interactive Learning
              Designed to Build <br /> Essential Skills for Future Success
            </p>
          </div>

          {/* Product */}
          <div className="sm:text-center lg:text-left">
            <h3 className="text-[#9B9B9B] font-semibold text-[16px] lg:text-[14px]">
              Product
            </h3>
            <ul className="leading-[24px] text-[#474645] mt-[10px]">
              <li className="mt-[10px] lg:text-[13px]">
                <a href="#">Courses</a>
              </li>
              <li className="mt-[8px] lg:text-[13px]">
                <a href="#">Pricing</a>
              </li>
              <li className="mt-[8px] lg:text-[13px]">
                <a href="#">Testimonials</a>
              </li>
              <li className="mt-[8px] lg:text-[13px]">
                <a href="#">Help</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="sm:text-center lg:text-left">
            <h3 className="text-[#9B9B9B] font-semibold text-[16px] lg:text-[14px]">
              Company
            </h3>
            <ul className="leading-[24px] text-[#474645] mt-[10px]">
              <li className="mt-[10px] lg:text-[13px]">
                <a href="#">About us</a>
              </li>
              <li className="mt-[8px] lg:text-[13px]">
                <a href="#">Careers</a>
              </li>
              <li className="mt-[8px] lg:text-[13px]">
                <a href="#">Educators</a>
              </li>
            </ul>
          </div>

          {/* Behind the scenes */}
          <div className="sm:text-center lg:text-left xl:flex xl:items-start xl:gap-6">
            <div>
              <h3 className="text-[#9B9B9B] font-semibold text-[16px] lg:text-[14px]">
                Behind the scenes
              </h3>
              <ul className="leading-[24px] text-[#474645] mt-[10px]">
                <li className="mt-[10px] lg:text-[13px]">
                  <a href="#">Solving Equations</a>
                </li>
                <li className="mt-[8px] lg:text-[13px]">
                  <a href="#">Thinking in Code</a>
                </li>
              </ul>
            </div>

            {/* Social Media Icons - moved beside Behind the scenes in xl */}
            <div
              className="flex gap-4 mt-6 text-gray-500 
                         lg:justify-start md:justify-center sm:justify-center
                         xl:mt-0 xl:justify-start"
            >
              <a href="#" className="hover:text-black transition">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="hover:text-black transition">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="hover:text-black transition">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="hover:text-black transition">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="mt-10 flex flex-col md:flex-row justify-between items-center 
                     text-xs text-gray-500 border-t border-[#E4E4D9] pt-6 
                     sm:gap-4 sm:text-center"
        >
          <div className="flex gap-6 mb-4 md:mb-0 sm:justify-center text-[12px] lg:text-[13px]">
            <a href="#" className="hover:text-black transition">
              Terms of service
            </a>
            <a href="#" className="hover:text-black transition">
              Privacy policy
            </a>
          </div>
          <p className="text-[12px] lg:text-[13px]">
            © MyEdSkills {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 