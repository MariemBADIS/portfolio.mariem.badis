import { easeInOut, motion } from "motion/react";
import { useState } from "react";
import { Footer } from "./footer";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://mariem-badis.vercel.app/api/server", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error occurred. Try again.");
    }
  };

  return (
    <>
      <div id="Contact" className="h-screen">
        <div className="flex justify-center">
          <div className="w-full px-2 max-w-[80rem] h-full">
            <div className="h-full py-20">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ amount: 0.3 }}
                className="text-white text-4xl md:text-5xl tracking-wide font-semibold mb-10 text-center"
              >
                Contact
              </motion.div>
              <div className="form h-screen py-10 px-2 flex max-md:flex-col mt-10 gap-5 items-start">
                <div className="contact-info w-full md:w-1/2 flex flex-col justify-center gap-8 px-4 md:px-0">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ amount: 0.3 }}
                    className="text-white text-lg md:text-xl font-bold italic text-center md:text-left leading-relaxed"
                    style={{
                      background: "linear-gradient(135deg, #80FFD2 0%, #7C3AED 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                  >
                    BUILDING SUCCESS WITH INTEGRITY, GUIDED BY FAITH, AND INSPIRED BY THE POWER OF GOOD DEEDS
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ amount: 0.3 }}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <div className="text-white/80 text-xs uppercase tracking-wider mb-2">EMAIL</div>
                      <div className="text-white text-sm md:text-base">mariem.badis.info@gmail.com</div>
                    </div>
                    <div>
                      <div className="text-white/80 text-xs uppercase tracking-wider mb-2">PHONE</div>
                      <div className="text-white text-sm md:text-base">
                        <a href="tel:+4915757920063" className="hover:text-color2 transition-colors">
                          +49 157 5792 0063
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="text-white/80 text-xs uppercase tracking-wider mb-2">ADDRESS</div>
                      <div className="text-white text-sm md:text-base">Munich, Germany</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ amount: 0.3 }}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <div className="text-white/80 text-xs uppercase tracking-wider mb-2">WORKING HOURS</div>
                      <div className="text-white text-sm md:text-base">Monday - Saturday: 9 AM - 5 PM</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ amount: 0.3 }}
                    className="flex gap-4 items-center"
                  >
                    <a
                      href="https://github.com/MariemBADIS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:scale-110 transition-transform"
                    >
                      <img
                        className="w-8 h-8"
                        src={github}
                        alt="GitHub Profile"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mariem-badis/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:scale-110 transition-transform"
                    >
                      <img
                        className="w-8 h-8"
                        src={linkedin}
                        alt="LinkedIn Profile"
                        loading="lazy"
                      />
                    </a>
                  </motion.div>
                </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 py-10 w-full md:w-1/2 items-center justify-center h-full rounded-xl"
          >
            <div className="input-name w-full md:w-3/4">
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email ID"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <motion.textarea
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                rows={5}
                autoComplete="off"
                className="bg-transparent border-color2 border-b rounded-none py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2 resize-none"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Subject"
              />
            </div>
            <button
              type="submit"
              className="bg-color2 text-color3 hover:bg-color2/80 hover:scale-105 transition duration-200 rounded-xl text-center font-semibold cursor-pointer w-2/3 h-[5vh] tracking-wide self-center md:w-[15rem]"
            >
             {status === "Sending..." ? "Sending..." : "Send it Now"}
            </button>
            <p className="text-color2 text-xs">{status}</p>
          </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};