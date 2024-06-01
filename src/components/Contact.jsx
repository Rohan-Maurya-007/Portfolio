import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Contact = () => {
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
      <div ref={ref} className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-md m-2 p-2 w-full border border-black">
      <motion.div
        className="flex justify-center items-center"
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={scrollAnimation}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/Rohan-Maurya-007", "_blank");
          }}
        >
          <img
            src="https://raw.githubusercontent.com/Rohan-Maurya-007/Portfolio/d673d260db3b9084731a69ffe3279d42e9b1fa8c/src/contact-svg/github.svg"
            alt="github svg"
            className="h-12 p-2 "
          />
        </a>

        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://linkedin.com/in/rohan-maurya-1425a2214",
              "_blank"
            );
          }}
        >
          <img
            src="https://raw.githubusercontent.com/Rohan-Maurya-007/Portfolio/d673d260db3b9084731a69ffe3279d42e9b1fa8c/src/contact-svg/linkedin.svg"
            alt="linkedin svg"
            className="h-12 p-2 "
          />
        </a>

        <a
          href=""
          target="_blank"
          role="button"
          onClick={(e) => {
            e.preventDefault();
            window.open("mailto:rohanmaurya007@gmail.com?Subject=Subject&Body=Body", "_blank");
          }}
        >
          <img
            src="https://raw.githubusercontent.com/Rohan-Maurya-007/Portfolio/d673d260db3b9084731a69ffe3279d42e9b1fa8c/src/contact-svg/mail.svg"
            alt="mail svg"
            className="h-12 p-2 "
          />
        </a>
      </motion.div>
    </div>
    </div>
    
  );
};

export default Contact;
