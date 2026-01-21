import { easeInOut, motion } from "motion/react";
import { useState } from "react";
import { ExperienceModal } from "./ExperienceModal";

// Import screenshots for M&C Aero
import mncScreenshot1 from "../assets/images/experiences/MNC/Accounting reset view.png";
import mncScreenshot2 from "../assets/images/experiences/MNC/Data Source.png";
import mncScreenshot3 from "../assets/images/experiences/MNC/Installments default.png";
import mncScreenshot4 from "../assets/images/experiences/MNC/Manual Matching.png";
import mncScreenshot5 from "../assets/images/experiences/MNC/Matched items.png";

// Import screenshots for 3d for deco
import decoScreenshot1 from "../assets/images/experiences/3dfordeco/authentification.png";
import decoScreenshot2 from "../assets/images/experiences/3dfordeco/thefullroom.png";

// Import screenshots for Gazela Technology
import gazelaScreenshot1 from "../assets/images/experiences/Ghazela Technology/Home.png";
import gazelaScreenshot2 from "../assets/images/experiences/Ghazela Technology/register.png";
import gazelaScreenshot3 from "../assets/images/experiences/Ghazela Technology/connection.png";
import gazelaScreenshot4 from "../assets/images/experiences/Ghazela Technology/admin.png";
import gazelaScreenshot5 from "../assets/images/experiences/Ghazela Technology/admin 2.png";
import gazelaScreenshot6 from "../assets/images/experiences/Ghazela Technology/admin 3.png";

// Import screenshots for Rhis software
import rhisScreenshot1 from "../assets/images/experiences/Rhis Software/Gestion des employés.png";
import rhisScreenshot2 from "../assets/images/experiences/Rhis Software/image.png";
import rhisScreenshot3 from "../assets/images/experiences/Rhis Software/image (1).png";
import rhisScreenshot4 from "../assets/images/experiences/Rhis Software/image (2).png";
import rhisScreenshot5 from "../assets/images/experiences/Rhis Software/image (3).png";
import rhisScreenshot6 from "../assets/images/experiences/Rhis Software/image (4).png";
import rhisScreenshot7 from "../assets/images/experiences/Rhis Software/image (5).png";
import rhisScreenshot8 from "../assets/images/experiences/Rhis Software/image (6).png";
import rhisScreenshot9 from "../assets/images/experiences/Rhis Software/image (7).png";
import rhisScreenshot10 from "../assets/images/experiences/Rhis Software/image (8).png";
import rhisScreenshot11 from "../assets/images/experiences/Rhis Software/image (9).png";
import rhisScreenshot12 from "../assets/images/experiences/Rhis Software/image (10).png";

export const AboutMe = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = [
    {
      title: "Senior Freelance Frontend Developer",
      company: "Gazela Technology",
      location: "Tunis, Tunisia",
      period: "02/2025 - Current",
      achievements: [
        "Architected a modular frontend architecture using Angular and TypeScript, applying SOLID and clean code principles to increase maintainability and SonarQube quality scores by 40%.",
        "Boosted application performance and Core Web Vitals through efficient rendering, state management, and performance tuning, improving user experience metrics by 35%.",
        "Integrated secure REST APIs with JWT-based authentication, reducing latency by 40% and strengthening frontend security and reliability.",
        "Mentored a team of 4 frontend developers, establishing architectural standards and best practices that increased delivery efficiency by 25%."
      ],
      screenshots: [
        gazelaScreenshot1,
        gazelaScreenshot2,
        gazelaScreenshot3,
        gazelaScreenshot4,
        gazelaScreenshot5,
        gazelaScreenshot6
      ],
      websiteUrl: "https://www.ghazelatc.com/", // Link for company name
      projectUrl: "https://nourmariage.com/" // Link for "View Website"
    },
    {
      title: "Senior Frontend Developer",
      company: "M&C Aero",
      location: "Tunis, Tunisia",
      period: "11/2023 - 01/2025",
      achievements: [
        "Directed the frontend development of a payment reconciliation platform using Angular, reducing initial load time by 30% and increasing adoption across 200+ enterprise clients.",
        "Engineered scalable state management with NgRx and RxJS, applying modular design principles to accelerate feature delivery by 20% and reduce maintenance complexity.",
        "Refined application responsiveness through lazy loading, code splitting, and advanced change detection, increasing overall user satisfaction.",
        "Established unit and end-to-end testing practices with Jasmine and Karma, reducing regression issues by 25% and strengthening release stability."
      ],
      screenshots: [
        mncScreenshot1,
        mncScreenshot2,
        mncScreenshot3,
        mncScreenshot4,
        mncScreenshot5
      ],
      websiteUrl: "https://mnc.aero/" // Link for company name
    },
    {
      title: "Frontend Developer",
      company: "Rhis software",
      location: "Tunis, Tunisia",
      period: "07/2019 - 10/2023",
      achievements: [
        "Spearheaded development of large-scale HR platforms serving 1,400+ organizations, applying scalable frontend architecture and component-based design using Angular to improve performance, reliability, and adoption.",
        "Constructed reusable UI components and shared libraries, following DRY principles to reduce development time by 20% and ensure consistent user experience.",
        "Fortified application stability through advanced RxJS patterns, refined state management, and targeted refactoring, enhancing responsiveness at scale.",
        "Collaborated within Agile teams on code reviews, CI/CD improvements, and UX implementation aligned with accessibility (WCAG) standards."
      ],
      screenshots: [
        rhisScreenshot1,
        rhisScreenshot2,
        rhisScreenshot3,
        rhisScreenshot4,
        rhisScreenshot5,
        rhisScreenshot6,
        rhisScreenshot7,
        rhisScreenshot8,
        rhisScreenshot9,
        rhisScreenshot10,
        rhisScreenshot11,
        rhisScreenshot12
      ],
      websiteUrl: "https://www.rhis-solutions.com/en/" // Link for company name
    },
    {
      title: "Web developer",
      company: "3d for deco",
      location: "Tunis, Tunisia",
      period: "05/2018 - 07/2019",
      achievements: [
        "Developed internal web tools using component-based architecture, streamlining marketing workflows.",
        "Translated UI/UX designs into responsive, cross-browser interfaces, improving conversion rates by 10% through A/B testing and usability improvements.",
        "Applied clean coding and maintainability principles, ensuring reliable and scalable web applications for internal teams."
      ],
      screenshots: [
        decoScreenshot1,
        decoScreenshot2
      ],
      projectUrl: "https://www.thefullroom.com/" // Link for "View Website"
    },
    {
      title: "Web developer & UI designer",
      company: "Business Invent",
      location: "Tunis, Tunisia",
      period: "11/2015 - 04/2018",
      achievements: [
        "Delivered a secure, responsive public information portal, applying accessibility standards and improving usability for 20,000+ users.",
        "Coordinated within Agile teams to develop features, fix bugs, and ensure timely delivery across multiple releases, applying clean code and maintainability principles.",
        "Implemented consistent responsive interfaces from design mockups, enhancing user experience and engagement."
      ],
      screenshots: [] // Add screenshots when available
    },
    {
      title: "Earlier Experience Frontend & Web Development",
      company: "MSS / Fidbell / Smartechnology",
      location: "Tunis, Tunisia",
      period: "06/2013 - 10/2015",
      achievements: [
        "Created and maintained responsive web interfaces, integrating accessibility (WCAG) standards across 10+ applications, improving Lighthouse scores by 10 points in close collaboration with designers and developers."
      ],
      screenshots: [], // Add screenshots when available
      companyLinks: {
        "MSS": "https://www.msstn.net/",
        "Fidbell": "https://www.fidbell.com/",
        "Smartechnology": "https://smartechnology.com.tn/"
      }
    }
  ];

  const handleExperienceClick = (exp) => {
    if (exp.screenshots && exp.screenshots.length > 0) {
      setSelectedExperience(exp);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {/* Experience Timeline Section - Outside About block */}
      <div id="work_experience" className="flex justify-center">
        <div className="w-full px-2 max-w-[80rem] h-full">
          <div className="h-full py-20">
              <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ amount: 0.3 }}
              className="text-white text-4xl md:text-5xl tracking-wide font-semibold mb-10 text-center"
            >
              Work Experience
            </motion.div>
            <div className="relative w-full">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-color2/50 transform md:-translate-x-1/2"></div>
              
              {/* Experience Items */}
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ amount: 0.3 }}
                  className={`relative mb-12 flex items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline icon */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-color2 rounded-full transform md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-1rem)] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}>
                    <div 
                      onClick={() => handleExperienceClick(exp)}
                      className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-color2/30 transition-all ${
                        exp.screenshots && exp.screenshots.length > 0 
                          ? "hover:border-color2/60 hover:bg-white/15 cursor-pointer" 
                          : "hover:border-color2/60"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-color2 font-semibold text-sm">{exp.period}</div>
                        <div className="flex items-center gap-3">
                          {exp.projectUrl && (
                            <a
                              href={exp.projectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-color2/60 hover:text-color2 text-xs flex items-center gap-1 transition-colors"
                              title="Visit project website"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              <span>View Website</span>
                            </a>
                          )}
                          {exp.screenshots && exp.screenshots.length > 0 && (
                            <span className="text-color2/60 text-xs flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>View Screenshots</span>
                            </span>
                          )}
                        </div>
                      </div>
                      <h3 className="text-white text-xl font-bold mb-1">{exp.title}</h3>
                      {exp.companyLinks ? (
                        <div className="text-white/80 text-lg mb-2">
                          {exp.company.split(" / ").map((companyName, index, array) => {
                            const trimmedName = companyName.trim();
                            const link = exp.companyLinks[trimmedName];
                            return (
                              <span key={index}>
                                {link ? (
                                  <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="hover:text-color2 transition-colors cursor-pointer"
                                    title={`Visit ${trimmedName} website`}
                                  >
                                    {trimmedName}
                                  </a>
                                ) : (
                                  <span>{trimmedName}</span>
                                )}
                                {index < array.length - 1 && <span> / </span>}
                              </span>
                            );
                          })}
              </div>
                      ) : exp.websiteUrl ? (
                        <a
                          href={exp.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-white/80 text-lg mb-2 hover:text-color2 transition-colors cursor-pointer inline-block"
                          title={`Visit ${exp.company} website`}
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <div className="text-white/80 text-lg mb-2">{exp.company}</div>
                      )}
                      <div className="text-white/60 text-sm mb-4">{exp.location}</div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-white/70 text-sm flex items-start">
                            <span className="text-color2 mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                </div>
              </div>
              </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience Modal */}
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        experience={selectedExperience}
      />
    </>
  );
};
