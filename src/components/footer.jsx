import linkedin from "../assets/icons/linkedin.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import email from "../assets/icons/email.svg";
export const Footer = () => {
  return (
    <>
      <div className="flex flex-col w-full my-8 md:my-12">
        <div className="w-full h-[1px] bg-white/20"></div>
        <div className="nav-items w-full flex justify-center gap-5 text-white text-center text-xs font-light uppercase mt-4">
          <a href="#Home" className="nav-option cursor-pointer">
            Home
          </a>
          <a href="#work_experience" className="nav-option cursor-pointer">
            Work Experience
          </a>
          <a href="#Skills" className="nav-option cursor-pointer">
            Skills
          </a>
          <a href="#Contact" className="nav-option cursor-pointer">
            Contact
          </a>
        </div>
        <div className="icons w-full flex justify-center mt-5 items-center gap-5">
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/mariem-badis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer hover:scale-105 w-8 h-8 object-contain"
                src={linkedin}
                alt="LinkedIn Profile"
              />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://wa.me/4915757920063"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer hover:scale-105 w-8 h-8 object-contain"
                src={whatsapp}
                alt="WhatsApp Contact"
              />
            </a>
          </div>
          <div className="icon">
            <a
              href="mailto:mariem.badis.info@gmail.com"
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer hover:scale-105 w-8 h-8 object-contain"
                src={email}
                alt="Email Contact"
              />
            </a>
          </div>
        </div>
        <div className="text-white font-extralight text-xs text-center my-4">
          <div className="title">
            ©2025 Mariem Badis. All rights reserved.
          </div>
          <div className="title">Bringing ideas to life with code.</div>
          <div className="title">Thanks for visiting!.</div>
        </div>
      </div>
    </>
  );
};
