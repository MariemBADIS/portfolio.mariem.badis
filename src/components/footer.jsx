import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
export const Footer = () => {
  return (
    <>
      <div className="flex flex-col w-full my-20">
        <div className="w-full h-[1px] bg-white/20"></div>
        <div className="nav-items w-full flex justify-center gap-5 text-white text-center text-xs font-light uppercase mt-5">
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
              className=""
              href="https://github.com/MariemBADIS"
              target="_blank"
            >
              <img
                className="cursor-pointer hover:scale-105"
                src={github}
                alt=""
              />
            </a>
          </div>
          <div className="icon">
            <a
              className=""
              href="https://www.linkedin.com/in/mariem-badis/"
              target="_blank"
            >
              <img
                className="cursor-pointer hover:scale-105"
                src={linkedin}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="text-white font-extralight text-xs text-center my-5">
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
