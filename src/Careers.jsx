import { motion } from "framer-motion";
import { FaEnvelope, FaLaptopCode, FaPalette, FaUsers, FaUserTie } from "react-icons/fa";

const Careers = () => {
  return (
    <motion.div 
      className="max-w-5xl mx-auto bg-white  rounded-lg shadow-lg "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <motion.h1 
        className="text-5xl font-bold text-center text-lightgreen mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Join Our Team
      </motion.h1>

      {/* Description */}
      <p className="text-center text-gray-600 mb-8">
        At EasyBank, were always looking for passionate individuals to help redefine the future of digital banking. If youre interested in joining a fast-growing, tech-forward company, we would love to hear from you!
      </p>

      {/* Open Positions */}
      <section>
        <h2 className="text-3xl font-semibold text-lightgreen mb-4">Open Positions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <FaLaptopCode className="text-brightcyan text-2xl" />
            <p className="text-lg">Software Engineer</p>
          </motion.div>

          <motion.div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <FaPalette className="text-brightcyan text-2xl" />
            <p className="text-lg">UX/UI Designer</p>
          </motion.div>

          <motion.div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <FaUserTie className="text-brightcyan text-2xl" />
            <p className="text-lg ">Product Manager</p>
          </motion.div>

          <motion.div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <FaUsers className="text-brightcyan text-2xl" />
            <p className="text-lg">Customer Success Specialist</p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-lightgreen mb-4">Why Work With Us?</h2>
        <p className="text-gray-700">
          We offer competitive salaries, flexible working arrangements, and the opportunity to work on innovative projects that are transforming the financial world.
        </p>
      </section>

      {/* How to Apply */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-lightgreen mb-4">How to Apply</h2>
        <p className="text-gray-700 mb-4">
          If youre interested in joining our team, send us your resume and cover letter at  
          <a href="mailto:careers@easybank.com" className="text-blue-600 hover:underline ml-1">
            careers@easybank.com
          </a>. We look forward to hearing from you!
        </p>
        
        {/* Apply Button */}
        <motion.a 
          href="mailto:careers@easybank.com"
          className="inline-flex items-center gap-2 bg-brightcyan text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-brightcyan transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope /> Apply Now
        </motion.a>
      </section>
    </motion.div>
  );
};

export default Careers;
