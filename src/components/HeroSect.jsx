import { motion } from "motion/react";
import { useState, useEffect } from "react";
import heroIllustration from "../assets/images/mariem_illustration2.png";
import linkedin from "../assets/icons/linkedin.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import email from "../assets/icons/email.svg";
import scrollIcon from "../assets/icons/scroll-animation.svg";
import doc from "../assets/doc/Mariem BADIS Resume - Frontend Angular.pdf";
export const HeroSect = () => {
  const [word, setWord] = useState("Developer");
  const words = ["Developer", "Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prev) => (prev === words[0] ? words[1] : words[0]));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div id="Home" className="flex justify-center overflow-hidden">
        <div className="hero-section w-full min-h-[80vh] sm:h-[85vh] md:h-[80vh] flex flex-col md:flex-row justify-between relative max-w-[80rem] px-4 sm:px-6 md:px-2 py-8 md:py-0">
          <div className="heroText h-full w-full md:w-1/2 z-30 flex flex-col justify-center md:justify-center pt-20 sm:pt-24 md:pt-0 relative">
            <div className="flex flex-col text-white tracking-wide gap-2 sm:gap-1 md:gap-1">
              <span className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Hi! I&apos;m Mariem Badis,
              </span>
              <span className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-wrap">
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
                className="text-[#989898] font-normal text-xs sm:text-[10px] md:text-sm w-full sm:w-[90%] md:w-[70%] leading-relaxed mt-2 sm:mt-1"
              >
                Hi, I&apos;m Mariem Badis! Senior Frontend Developer with 6+ years building scalable Angular (v14-20) applications. Specialized in NgRx, RxJS, micro-frontend architectures, and frontend performance optimization. Experienced in delivering high-traffic platforms with clean code, accessibility, and automated testing.
              </motion.span>
            </div>
            <div className="buttons w-full flex flex-col sm:flex-row items-start sm:items-center text-white gap-3 text-[10px] tracking-widest mt-6 sm:mt-5 md:mt-5">
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                href={doc}
                target="_blank"
                download
                className="w-full sm:w-auto"
              >
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-color3 rounded-3xl w-full sm:w-[14rem] md:w-[12rem] uppercase text-center font-semibold cursor-pointer py-2.5 sm:py-2"
                >
                  Download CV
                </motion.button>
              </motion.a>
            </div>
            <div className="social-icons w-full sm:w-20 flex justify-start sm:justify-center items-center gap-3 h-10 mt-4 sm:mt-5 ml-0 sm:ml-5">
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
          <div className="heroIllustration flex flex-col items-center justify-center w-full h-full absolute top-0 left-0 pointer-events-none md:pointer-events-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-[12rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[22rem] absolute top-0 sm:top-4 md:-top-24 right-0 sm:right-4 md:right-0 md:-right-20 lg:-right-24 xl:-right-32 max-w-md will-change-transform will-change-opacity z-10"
              src={heroIllustration}
              alt="Mariem Badis - Frontend Developer Illustration"
              loading="lazy"
            />
            <div className="absolute bottom-8 sm:bottom-12 md:bottom-5 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none md:translate-x-0">
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
