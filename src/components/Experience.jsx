const Experience = () => {
  return (
    <div id="exp" className="px-15 pt-16 text-xl font-normal text-gray-400">
        <h1 className="flex flex-col text-7xl pb-15 font-medium text-white w-full">
          <span className="text-gray-400">Experience</span>{" "}
          <span className="text-white">History</span>
        </h1>

      {/* Experience Items */}
      {[
        { role: "General Secretary", org: "Shabari Siksha Sansthan", duration: "March 2018 - October 2021" },
        { role: "Executive Officer", org: "Educator/ Writer/ Motivational Speaker", duration: "October 2021 - April 2022" },
        { role: "Secretary", org: "Shabari Siksha Sansthan", duration: "April 2022 - Present" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-start text-gray-500 font-medium z-10 relative py-3 md:py-6 group"
        >
          <div className="relative w-full overflow-hidden">

            <div className="h-[60px] relative">
              {/* Gray Text (Moves Up & Disappears) */}
              {/* <motion.h1
                className="text-3xl md:text-5xl font-medium text-gray-400 absolute w-full text-left"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ y: -50, opacity: 0, transition: { duration: 0.3 } }}
              >
                {item.role}
              </motion.h1> */}

              {/* White Text (Moves Up & Appears) */}
              <h1
                className="text-5xl font-medium text-gray-400 absolute w-full text-left">
                {item.role}
              </h1>
            </div>

            <p className="mt-2">{item.org}</p>
          </div>
          <div className="text-right">
            <p>{item.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
