import { motion } from "motion/react";
import { useState, useEffect } from "react";
import heroIllustration from "../assets/images/mariem_illustration2.png";
import linkedin from "../assets/icons/linkedin.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import email from "../assets/icons/email.svg";
import scrollIcon from "../assets/icons/scroll-animation.svg";
import doc from "../assets/doc/Mariem-BADIS-Resume-Frontend.pdf";
export const HeroSect = () => {
  const [word, setWord] = useState("Developer");
  const words = ["Developer", "Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prev) => (prev === words[0] ? words[1] : words[0]));
    }, 3000);

    return () => clearInterval(interval);
  });
  return (
    <>
      <div id="Home" className="flex justify-center">
        <div className="hero-section w-full h-[80vh] flex justify-between relative max-w-[80rem] px-2">
          <div className="heroText h-full w-full z-30 flex flex-col md:justify-center">
            <div className="flex flex-col text-white tracking-wide md:gap-1">
              <span className="font-semibold text-2xl md:text-4xl">
                Hi! I&apos;m Mariem Badis,
              </span>
              <span className="font-semibold text-2xl md:text-4xl flex">
                A {word === "Developer" ? "Frontend" : "Web"}&nbsp;
                <motion.span
                  key={word}
                  initial={{ width: 0 }}
                  whileInView={{ width: "fit-content" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="bg-fontBlue text-transparent bg-clip-text overflow-hidden mr-1 will-change-transform will-change-opacity"
                >
                  {word}
                </motion.span>
                <motion.span
                  className="h-full w-[1px] bg-fontBlue whileInView-pulse"
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.span>
              </span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-[#989898] font-normal text-[10px] md:text-sm md:w-[70%] leading-relaxed"
              >
                Hi, I&apos;m Mariem Badis! Senior Frontend Developer with 6+ years building scalable Angular (v14-20) and React applications. Specialized in NgRx, Redux, RxJS, micro-frontend architectures, and frontend performance optimization. Experienced in delivering high-traffic platforms with clean code, accessibility, and automated testing. Based in Munich with a valid Chancenkarte work permit.
              </motion.span>
            </div>
            <div className="buttons max-sm:absolute bottom-10 w-full flex max-sm:items-center max-md:flex-col text-white gap-3 text-[10px] tracking-widest mt-5">
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                href={doc}
                target="_blank"
                download
              >
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-color3 rounded-3xl w-[14rem] md:w-[12rem] uppercase text-center font-semibold cursor-pointer py-2"
                >
                  Download CV
                </motion.button>
              </motion.a>
            </div>
            <div className="social-icons w-20 flex justify-center items-center gap-3 h-10 mt-5 ml-5">
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className=""
                href="https://www.linkedin.com/in/mariem-badis/"
                target="_blank"
              >
                <img
                  className="w-7 h-7 cursor-pointer hover:scale-125 duration-100 transition-all object-contain"
                  src={linkedin}
                  alt="LinkedIn Profile"
                  loading="lazy"
                />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className=""
                href="https://wa.me/4915757920063"
                target="_blank"
              >
                <img
                  className="w-7 h-7 cursor-pointer hover:scale-125 duration-100 transition-all object-contain"
                  src={whatsapp}
                  alt="WhatsApp Contact"
                  loading="lazy"
                />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className=""
                href="mailto:mariem.badis.info@gmail.com"
              >
                <img
                  className="w-7 h-7 cursor-pointer hover:scale-125 duration-100 transition-all object-contain"
                  src={email}
                  alt="Email Contact"
                  loading="lazy"
                />
              </motion.a>
            </div>
          </div>
          <div className="heroIllustration flex flex-col items-center w-full h-full absolute">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="min-w-[15rem] max-sm:w-[18rem] absolute top-10 md:-top-24 sm:-top-10 -right-10 md:w-1/2 md:-right-20 max-w-md will-change-transform will-change-opacity"
              src={heroIllustration}
              alt="Mariem Badis - Frontend Developer Illustration"
              loading="lazy"
            />
        <div className="absolute bottom-40 md:bottom-5">
              <div className="scroll-icon">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="w-5"
                  src={scrollIcon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
