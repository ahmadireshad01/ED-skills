import { FC } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <footer className="px-[124px]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-baseline md:grid-cols-4 gap-8">
          {/* Brand + Description */}
          <div>
            <div className="flex items-center gap-2">
              <img src="/public/images/Footer.svg" alt="" />
              <span className="font-bold text-[27.92px] leading-[26.7px] tracking-[-2%]">
                MyEdSkills
              </span>
            </div>
            <p className="text-[18px] mt-[23px]  font-medium leading-[30px] tracking-[0px] text-[#474645] ">
              Empowering Students with Personalized, <br /> Interactive Learning
              Designed to Build <br /> Essential Skills for Future Success
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[#9B9B9B] ">Product</h3>
            <ul className="leading-[24px] traking-[0%] text-[#474645]">
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
          <div>
            <h3 className="text-[#9B9B9B] ">Company</h3>
            <ul className="leading-[24px] traking-[0%] text-[#474645]">
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
          <div>
            <h3 className="text-[#9B9B9B] ">Behind the scenes</h3>
            <ul className="leading-[24px] traking-[0%] text-[#474645]">
              <li className="mt-[17px]">
                <a href="#">Solving Equations</a>
              </li>
              <li className="mt-[13px]">
                <a href="#">Thinking in Code</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 mt-6 text-gray-500">
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
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-[#E4E4D9] pt-6">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#">Terms of service</a>
            <a href="#">Privacy policy</a>
          </div>
          <p>© Myedskill {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
