import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="exp" className="px-20 text-xl font-normal text-gray-400">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { ease: "easeIn", duration: 3 },
        }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-medium py-20"
      >
        <h1 className="flex flex-col">
          <span className="text-gray-400">Experience</span>{" "}
          <span className="text-white">History</span>
        </h1>
      </motion.div>

      {/* Experience Items */}
      {[
        { role: "General Secretary", org: "Shabari Siksha Sansthan", duration: "March 2018 - October 2021" },
        { role: "Executive Officer", org: "Educator/ Writer/ Motivational Speaker", duration: "October 2021 - April 2022" },
        { role: "Secretary", org: "Shabari Siksha Sansthan", duration: "April 2022 - Present" },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col md:flex-col justify-between items-start text-gray-500 font-medium z-10 relative py-3 md:py-6 group"
        >
          <div className="relative w-full overflow-hidden">
            {/* Wrapper to keep both texts aligned */}
            <div className="h-[60px] relative">
              {/* Gray Text (Moves Up & Disappears) */}
              <motion.h1
                className="text-3xl md:text-5xl font-medium text-gray-400 absolute w-full text-left"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ y: -50, opacity: 0, transition: { duration: 0.3 } }}
              >
                {item.role}
              </motion.h1>

              {/* White Text (Moves Up & Appears) */}
              <motion.h1
                className="text-5xl font-medium text-white absolute w-full text-left"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 50, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
              >
                {item.role}
              </motion.h1>
            </div>

            <p className="mt-2">{item.org}</p>
          </div>
          <div className="text-right">
            <p>{item.duration}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
