import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Home = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const scrollAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      scrollAnimation.start("visible");
    }
  }, [inView]);

  return (
    
      <div className="flex justify-center items-center bg-gradient-to-r from-amber-200 to-emerald-100">
        <div ref={ref} className="bg-fuchsia-700 p-2 m-3 rounded-md w-full">
      <div>
        <motion.p
          className="text-white font-bold px-2 lg:text-2xl"
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={scrollAnimation}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Rohan Maurya
        </motion.p>
      </div>
    </div>
      </div>
    
  );
};

export default Home;
