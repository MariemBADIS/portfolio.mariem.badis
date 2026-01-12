import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const ExperienceModal = ({ isOpen, onClose, experience }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Reset to first image when modal opens
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen || !experience?.screenshots) return;
      
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, currentImageIndex, experience]);

  const handleNext = () => {
    if (experience?.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === experience.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevious = () => {
    if (experience?.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? experience.screenshots.length - 1 : prev - 1
      );
    }
  };

  if (!experience) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-deepBlue/95 backdrop-blur-md rounded-lg border border-color2/30 shadow-2xl min-h-full p-6 md:p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:text-color2 transition-colors z-10"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
                  {experience.company}
                </h2>
                <div className="text-color2 font-semibold text-sm mb-2">
                  {experience.period}
                </div>
                <div className="text-white/80 text-lg mb-4">
                  {experience.title}
                </div>
                <div className="text-white/60 text-sm mb-6">
                  {experience.location}
                </div>
              </div>

              {/* Screenshots Carousel */}
              {experience.screenshots && experience.screenshots.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white text-xl font-semibold">
                      Project Screenshots
                    </h3>
                    <div className="text-white/60 text-sm">
                      {currentImageIndex + 1} / {experience.screenshots.length}
                    </div>
                  </div>
                  
                  <div className="relative">
                    {/* Previous Arrow */}
                    {experience.screenshots.length > 1 && (
                      <button
                        onClick={handlePrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-color2/80 hover:bg-color2 rounded-full flex items-center justify-center text-white transition-all shadow-lg"
                        aria-label="Previous screenshot"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                    )}

                    {/* Current Image */}
                    <div className="flex justify-center items-center min-h-[400px] md:min-h-[500px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -30 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="relative"
                        >
                          <img
                            src={experience.screenshots[currentImageIndex]}
                            alt={`Screenshot ${currentImageIndex + 1} - ${experience.company}`}
                            className="max-h-[400px] md:max-h-[500px] w-auto rounded-lg border border-white/10 hover:border-color2/50 transition-all shadow-lg"
                            loading="lazy"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Next Arrow */}
                    {experience.screenshots.length > 1 && (
                      <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-color2/80 hover:bg-color2 rounded-full flex items-center justify-center text-white transition-all shadow-lg"
                        aria-label="Next screenshot"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    )}

                    {/* Dots Indicator */}
                    {experience.screenshots.length > 1 && (
                      <div className="flex justify-center gap-2 mt-4">
                        {experience.screenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? "bg-color2 w-8"
                                : "bg-white/30 hover:bg-white/50"
                            }`}
                            aria-label={`Go to screenshot ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Key Responsibilities */}
              <div className="mb-6">
                <h3 className="text-white text-xl font-semibold mb-4">
                  Key Responsibilities:
                </h3>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-white/80 text-sm md:text-base flex items-start"
                    >
                      <span className="text-color2 mr-3 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

