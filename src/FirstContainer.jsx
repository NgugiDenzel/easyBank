import { motion } from "framer-motion";
// import { useState } from "react";
import IntroDesktop from "./assets/bg-intro-desktop.svg";
import ImageMockups from "./assets/image-mockups.png";

import { useNavigate } from "react-router-dom"; // Import useNavigate
function FirstContainer() {


  
  // Variants for paragraph line-by-line animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.5, duration: 0.6, ease: "easeOut" },
    }),
  };
  const navigate = useNavigate(); // Hook for navigation


  return (
    <div className="md:columns-2 relative flex flex-col md:flex-row items-center justify-between">
      {/* Left Section - Text Animation */}
      <div className="md:w-1/2 p-4">
        {/* Header Appears First */}
        <motion.h1
          className="text-bold xs:text-5xl sm:text-6xl mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Next generation digital banking
        </motion.h1>

        {/* Paragraph Appears Line by Line */}
        <div>
          {[
            "Take your financial life online.",
            "Your easy bank account will be a one-stop shop for spending, saving,",
            "investing, budgeting, and much more.",
          ].map((line, i) => (
            <motion.p
              key={i}
              className="mb-2"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Button Fades In */}
        <motion.button
          className="bg-brightcyan rounded-full py-3 px-4 cursor-pointer text-white mt-4"
          onClick={() => navigate("/contact")} // Navigate to contact page
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          Request Invite
        </motion.button>

        
      </div>

      {/* Right Section - Image Animation */}
      <div className="xs:relative md:relative overflow-hidden md:w-1/2">
        {/* IntroDesktop - Comes in from the Left */}
        <motion.img
          className=""
          src={IntroDesktop}
          alt="intro desktop"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        />

        {/* ImageMockups - Comes in from the Right */}
        <motion.img
          className="xs:absolute md:absolute top-1 left-14 w-100"
          src={ImageMockups}
          alt="image mockups"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 10 }}
        />
      </div>
    </div>
  );
}

export default FirstContainer;
