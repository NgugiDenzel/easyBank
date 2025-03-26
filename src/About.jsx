// import BankOffice from './assets/Bank Office Icon 3d Transparent Free Download, 3d Bank, Bank, Bank Icon PNG Transparent Image and Clipart for Free Download.jpeg'
import BlackBlue from './assets/Black And Blue Money Currency Financial Icon, Money 3d, Money Icon, Money PNG Transparent Image and Clipart for Free Download.jpeg'
// import Bank from './assets/Download Bank Building on White for free.jpeg'
import wallet from './assets/Wallet Vector Art PNG, Wallet Icon Design Vector, Wallet Icons, Wallet, Icon PNG Image For Free Download.jpeg'
import dollar from './assets/Dollar Signs Money Clipart Transparent PNG Hd, Dollar Sign Money Icon, Money Icons, Dollar Icons, Sign Icons PNG Image For Free Download.jpeg'
import graph from './assets/Download graph icon for free.jpeg'
import MyVideo from './assets/6667224-uhd_3840_2160_25fps.mp4';
import { motion } from "framer-motion";
import mobileBanking from "./assets/mobile.mp4";
import monile from "./assets/monile.mp4";
import { CheckCircle } from "lucide-react";




function About(){
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
      
    return(
        <div>

    <header className='mb-4'>
        <h1 className="text-5xl font-bold text-lightgreen">About Us</h1>
    </header>

    <div >
    <section className="bg-white p-6">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        
        {/* Left: Text Section with Animation */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We envision a world where financial freedom is accessible to all. By leveraging cutting-edge 
            technology and open banking systems, we aim to put control of personal finances back in your 
            hands—allowing you to make smarter, faster, and more informed financial decisions.
          </p>
        </motion.div>

        {/* Right: Video Section with Animation */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <video className="w-full md:w-[80%]  rounded-lg shadow-lg" autoPlay muted loop playsInline>
            <source src={MyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

      </div>
    </section>

    <section className="p-6 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left: Video Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            className="w-full rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={mobileBanking} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Right: Text Section */}
        <motion.div className="mt-8 md:mt-16">
          {/* Header Appears After 1.5 Seconds */}
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Why We Exist
          </motion.h2>

          {/* Paragraph Appears Line by Line */}
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            Traditional banking systems are often outdated, inefficient, and difficult to navigate.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.8 }}
          >
            We created EasyBank to provide an alternative—a seamless and user-friendly digital platform.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            Empowering you to manage your financial life from anywhere in the world.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.8 }}
          >
            Whether youre looking to save, invest, or budget, our tools make it easier than ever to achieve your goals.
          </motion.p>
        </motion.div>

      </div>
    </section>

    <section className="bg-gray-100 px-8 py-12 rounded-lg shadow-lg mx-auto max-w-4xl text-center">
      {/* Heading Animation */}
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Makes Us Different
      </motion.h2>

      {/* List Container */}
      <motion.ul
        className="text-lg text-gray-700 space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.5 },
          },
        }}
      >
        {/* List Items */}
        {[
          {
            title: "Convenience",
            text: "Our 100% digital onboarding process allows you to open an account in just minutes—no need to visit a branch.",
          },
          {
            title: "Innovation",
            text: "With our Open API, you can integrate third-party financial services directly into your EasyBank account.",
          },
          {
            title: "Transparency",
            text: "No hidden fees or complicated fine print. We offer clear insights into your spending, savings, and investments.",
          },
        ].map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <CheckCircle className="text-green-500 w-8 h-8 flex-shrink-0" />
            <div className="text-left">
              <strong className="text-gray-900">{item.title}:</strong> {item.text}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>

    <section className="px-8 py-16 bg-white  mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div
          className="text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, staggerChildren: 0.4 },
            },
          }}
        >
          {/* Title */}
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4"
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          >
            Our Mission
          </motion.h2>

          {/* Paragraph with Line-by-Line Animation */}
          {[
            "Our mission is to create a smarter banking experience for the modern user—",
            "one that adapts to your lifestyle, no matter where you are in the world.",
            "We strive to build products that are secure, reliable, and designed",
            "to help you achieve financial success on your terms.",
          ].map((line, index) => (
            <motion.p key={index} className="text-lg text-gray-700 leading-relaxed"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* Video Animation */}
        <motion.video
          className="w-full md:w-[80%] rounded-lg shadow-lg"
          autoPlay muted loop playsInline
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <source src={monile} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </section><br /><br />
    <section className="bg-gray-100 px-6 py-16 rounded-lg shadow-lg mx-auto max-w-7xl text-center">
      {/* Animated Title */}
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Core Values
      </motion.h2>

      {/* Cards Container */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Card 1 - Simplicity */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          variants={cardVariants}
        >
          <div className="flex justify-center mb-4">
            <img src={wallet} alt="Simplicity" className="h-16 rounded-full" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Simplicity</h3>
          <p className="text-gray-600 mt-2">
            Banking shouldn’t be complicated. We make managing your finances
            straightforward and stress-free.
          </p>
        </motion.div>

        {/* Card 2 - Empowerment */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          variants={cardVariants}
        >
          <div className="flex justify-center mb-4">
            <img src={graph} alt="Empowerment" className="h-16 rounded-full" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Empowerment</h3>
          <p className="text-gray-600 mt-2">
            We give you the tools and insights you need to make informed
            financial decisions.
          </p>
        </motion.div>

        {/* Card 3 - Security */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          variants={cardVariants}
        >
          <div className="flex justify-center mb-4">
            <img src={BlackBlue} alt="Security" className="h-16 rounded-full" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Security</h3>
          <p className="text-gray-600 mt-2">
            Your data and money are always protected with top-tier encryption
            and security protocols.
          </p>
        </motion.div>

        {/* Card 4 - Innovation */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          variants={cardVariants}
        >
          <div className="flex justify-center mb-4">
            <img src={dollar} alt="Innovation" className="h-16 rounded-full" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Innovation</h3>
          <p className="text-gray-600 mt-2">
            We’re constantly evolving to offer new, better ways to manage your
            financial life.
          </p>
        </motion.div>
      </motion.div>
    </section>

        
    <section className=" text-black px-6 py-16 text-center mx-auto max-w-4xl">
      {/* Animated Title */}
      <motion.h2
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Join Us on Our Journey
      </motion.h2>

      {/* Animated Paragraphs */}
      <motion.div
        className="text-lg leading-relaxed"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.p
          className="mb-4"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          As we continue to expand and innovate, we are committed to delivering
          the best possible experience for our users. Whether you’re looking to
          take control of your budget, simplify your investments, or manage
          your everyday spending, EasyBank is here to help you on your financial
          journey.
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          With cutting-edge technology, transparent services, and a
          user-friendly platform, we empower you to achieve financial success.
          Join us and take the next step towards a smarter financial future.
        </motion.p>
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a
          href="/signup"
          className="bg-white text-green-600 font-bold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
        >
          Get Started Today
        </a>
      </motion.div>
    </section>
    </div>

    <footer>
        <p>© 2024 EasyBank. All Rights Reserved.</p>
    </footer>

</div>
    )

}

export default About;