import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const ScrollArrow = () => {
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollBottom = scrollTop + windowHeight;

      // Show top arrow when scrolled down (not at top)
      const isAtTop = scrollTop < 100;
      setShowTopArrow(!isAtTop);

      // Show bottom arrow when not at bottom
      const isAtBottom = scrollBottom >= documentHeight - 100;
      setShowBottomArrow(!isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight - window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Top Arrow */}
      <AnimatePresence>
        {showTopArrow && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className={`fixed right-8 z-50 w-12 h-12 bg-color2/80 hover:bg-color2 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform ${
              showBottomArrow ? "bottom-24" : "bottom-8"
            }`}
            aria-label="Scroll to top"
          >
            <svg
              className="w-6 h-6 text-color3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Bottom Arrow */}
      <AnimatePresence>
        {showBottomArrow && (
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToBottom}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-color2/80 hover:bg-color2 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform"
            aria-label="Scroll to bottom"
          >
            <svg
              className="w-6 h-6 text-color3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

