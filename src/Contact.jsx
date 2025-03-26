import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto bg-white  rounded-lg  mb-20"
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
        Contact Us
      </motion.h1>

      {/* Description */}
      <p className="text-center text-gray-600 mb-8">
        Have questions or feedback? We would love to hear from you! Reach out to us using the information below.
      </p>

      {/* Contact Details */}
      <div className="grid md:grid-cols-2 gap-6 text-gray-700">
        <motion.section
          className="p-4 bg-gray-100 rounded-lg shadow-sm"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-xl font-semibold text-brightcyan">Email</h2>
          <p>
            <a href="mailto:support@easybank.com" className="text-blue-600 hover:underline">
              support@easybank.com
            </a>
          </p>
        </motion.section>

        <motion.section
          className="p-4 bg-gray-100 rounded-lg shadow-sm"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-xl font-semibold text-brightcyan">Phone</h2>
          <p className="text-gray-800">+1 (800) 123-4567</p>
        </motion.section>

        <motion.section
          className="p-4 bg-gray-100 rounded-lg shadow-sm"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-xl font-semibold text-brightcyan">Address</h2>
          <p>
            1234 EasyBank Blvd, Suite 100 <br /> San Francisco, CA 94105
          </p>
        </motion.section>

        <motion.section
          className="p-4 bg-gray-100 rounded-lg shadow-sm"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-xl font-semibold text-brightcyan">Social Media</h2>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><FaLinkedin /></a>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Contact;
