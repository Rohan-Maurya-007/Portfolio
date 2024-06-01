import { delay, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import resume from '../assets/RohanResume2_0.pdf'
const Body = () => {

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const scrollAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      scrollAnimation.start("visible");
    }
  }, [inView]);

  return (
    <div ref={ref} className="flex flex-col justify-center items-center gap-4 p-2 bg-gradient-to-r from-amber-200 to-emerald-100
    lg:flex-row-reverse md:flex-row-reverse
    ">
      <motion.div
      className="flex justify-center items-center min-h-fit "
      variants=
          {{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden" animate={scrollAnimation}
          transition={{ duration: 1, delay:1 }}>
      
        <img
          src="/src/assets/Designer (1).jpeg"
          alt="image coder"
          className="rounded-lg h-40 w-40 border border-slate-900 lg:h-96 lg:w-96 md:h-60 md:w-60 "
          
          
        />
      </motion.div>
      <motion.div className="flex items-center flex-col justify-center lg:w-1/2 md:w-1/2"
      >
        <div className="flex gap-2 items-center ">
        <motion.h1 className="text-2xl text-neutral-800 font-bold "
        variants=
        {{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden" animate="visible"
        transition={{ duration: 0.5, delay:1 }}
        >I am </motion.h1>
        <motion.h1 className="inline text-cyan-900 text-4xl font-extrabold"
        variants=
        {{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden" animate="visible"
        transition={{ duration: 0.5, delay:2 }}>
        Rohan Maurya</motion.h1>
        </div>
        <motion.h2 className="text-2xl text-amber-800 font-bold text-center"
         variants=
         {{
           hidden: { opacity: 0, y: 100 },
           visible: { opacity: 1, y: 0 },
         }}
         initial="hidden" animate="visible"
         transition={{ duration: 1, delay:3 }}
        > A Full-Stack Developer during the Day and work with Batman at Night</motion.h2>
        <motion.a href={resume} download='RohanMaurya'
      className="bg-cyan-500 rounded-md text-black font-semibold p-2 m-2 border border-fuchsia-900 "
      variants={
       { hidden:{opacity:0, y:100},
       visible:{opacity:1, y:0}}
      }
      initial="hidden"
      animate="visible"
      transition={{duration:1, delay:4}}
      > Download Resume
        
         </motion.a> 
      </motion.div>
      
    </div>
  );
};

export default Body;
