// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { useEffect, useMemo, useState } from "react";
// import { loadSlim } from "@tsparticles/slim";
// import imgs from '../../assets/img37.jpg'

// const ParticlesHero = () => {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {
//     console.log("Particles Loaded:", container);
//   };

//   const options = useMemo(
//     () => ({
//       fullScreen: { enable: false }, // Keeps particles inside div
//       background: { color: "transparent" },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onHover: { enable: false, mode: "grab" },
//           onClick: { enable: false, mode: "push" },
//         },
//         modes: {
//           grab: { distance: 200, links: { opacity: 0.5 } },
//           push: { quantity: 20 },
//         },
//       },
//       particles: {
//         color: { value: "#ffffff" },
//         links: { color: "#ffffff", distance: 150, enable: false, opacity: 0.4, width: 1 },
//         move: { enable: true, speed: 2, direction: "up", outModes: { default: "out" } },
//         number: { value: 200, density: { enable: true, area: 1000 } },
//         opacity: { value: 1 },
//         shape: { type: "square" },
//         size: { value: { min: 2, max: 1 } },
//       },
//       detectRetina: true,
//     }),
//     []
//   );

//   return (
//     <div className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-[radial-gradient(circle_at_30%_30%,#222233,#0a0a12)]">
//       {/* Particles in the Background */}
//       <Particles id="tsparticles" init={particlesLoaded} options={options} className="absolute top-0 left-0 w-full h-full" />

//       {/* Hero Section Content */}
//       <main className="relative z-10 h-screen flex items-center justify-center">
//         <div className="text-white text-center px-6">
//           <div>
//           <h1 className="md:text-8xl lg:text-8xl text-5xl font-bold mb-4 text-start">
//             I&apos;m RJ <br /><img src={imgs} alt="" className="object-cover h-[80px] w-[80px] absolute top-5 rounded-full brightness-75"/> <span className="text-[radial-gradient(circle_at_30%_30%,#222233,#0a0a12)]">Santhosh Kumar</span>
//           </h1>
//           </div>
          
//           <h3 className="md:text-5xl lg:text-5xl text-3xl font-light">
//             Educator / Writer / Motivational Speaker / Executive Officer
//           </h3>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ParticlesHero;


import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useScroll, useTransform } from "framer-motion";
import imgs from "../../assets/img37.jpg";

const ParticlesHero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded:", container);
  };

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 120,
      interactivity: {
        events: { onHover: { enable: false }, onClick: { enable: false } },
      },
      particles: {
        color: { value: "#ffffff" },
        move: { enable: true, speed: 2, direction: "up", outModes: { default: "out" } },
        number: { value: 200, density: { enable: true, area: 1000 } },
        shape: { type: "square" },
        size: { value: { min: 2, max: 1 } },
      },
      detectRetina: true,
    }),
    []
  );

  // Framer Motion Scroll Animations
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
  const yPos = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);

  return (
    <motion.div
      className="relative w-full h-screen flex items-center justify-center bg-[radial-gradient(circle_at_30%_30%,#222233,#0a0a12)]"
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        scale,
        y: yPos,
        opacity,
        zIndex: 10,
      }}
    >
      {/* Particles in the Background */}
      <Particles id="tsparticles" init={particlesLoaded} options={options} className="absolute top-0 left-0 w-full h-full" />

      {/* Animated Circular Logo (Top-Left Corner) */}
      <motion.div
        className="absolute top-8 left-8 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-[120px] h-[120px]">
          {/* Circular Path */}
          <defs>
            <path
              id="textCircle"
              d="M 100, 100
                 m -60, 0
                 a 60,60 0 1,1 120,0
                 a 60,60 0 1,1 -120,0"
              fill="none"
            />
          </defs>

          {/* Rotating Text */}
          <text fill="yellow" fontSize="30" fontWeight="normal" letterSpacing="2px" color="yellow">
            <textPath href="#textCircle" startOffset="0%">
              SANTHOSH ✦ KUMAR ✦
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Hero Section Content */}
      <main className="relative z-10 h-screen flex items-center justify-center">
        <div className="text-white text-center px-6 space-y-10">
          <div>
            <h1 className="md:text-8xl lg:text-8xl text-5xl font-bold mb-4 text-center">
              <span>I&apos;m RJ </span> 
              
              <span className="text-[radial-gradient(circle_at_30%_30%,#222233,#0a0a12)]">Santhosh Kumar</span>
            </h1>
          </div>
          <h3 className="md:text-5xl lg:text-5xl text-3xl md:font-light font-normal">
            Educator / Writer / Motivational Speaker / Executive Officer
          </h3>
        </div>
      </main>
    </motion.div>
  );
};

export default ParticlesHero;

