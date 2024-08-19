import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Section = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector("#section");
      const { top } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      id="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="transition-opacity duration-700"
    >
      {children}
    </motion.div>
  );
};

export default Section;
