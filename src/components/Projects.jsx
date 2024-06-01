import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const scrollAnimation = useAnimation();
  const projectScrollAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      scrollAnimation.start("visible");
      projectScrollAnimation.start("visible");
    }
  }, [inView]);
  return (
    <div className="flex flex-col justify-center w-full items-center bg-gradient-to-r from-amber-200 to-emerald-100">
      <motion.h1
        className="text-slate-900 text-3xl font-bold"
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={scrollAnimation}
        transition={{ duration: 1 }}
      >
        ~Projects~
      </motion.h1>
      <div className="flex flex-col justify-center items-center lg:flex-row m-2">
        <motion.div
          ref={ref}
          className="flex flex-col justify-center items-center p-2 m-2 border border-black  rounded-lg bg-gradient-to-r from-teal-400 to-yellow-200
            "
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={projectScrollAnimation}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src="https://github.com/Rohan-Maurya-007/Portfolio/blob/main/src/assets/Designer%20(7).jpeg?raw=true"
            alt="UTS image"
            className="h-44 rounded-md border  border-black"
          />
          <h1 className="p-2 m-2 text-xl text-amber-900 font-semibold">
            UTS Station-QR Web-app{" "}
          </h1>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-green-400 px-2 rounded-md border border-black"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://utsqrcode.com/", "_blank");
              }}
            >
              Visit Site
            </button>
            <button
              className="bg-fuchsia-400 px-2 rounded-md border border-black"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://github.com/Rohan-Maurya-007/UTS-QR-Webapp",
                  "_blank"
                );
              }}
            >
              Source Code
            </button>
          </div>
          <p className="p-2 m-2 text-lg text-neutral-100 bg-slate-400 rounded-lg font-medium border border-black">
            By offering the station QR code, UTS Station-QR enables daily
            commuters to purchase tickets without having to wait in line. Using
            the UTS app, commuters can easily scan and book tickets.
          </p>
        </motion.div>
        <motion.div
        ref={ref}
          className="flex flex-col justify-center items-center p-2 m-2 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-lg border border-black"
          variants={{
            hidden: { opacity: 0, x: 200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={projectScrollAnimation}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src="https://github.com/Rohan-Maurya-007/Portfolio/blob/main/src/assets/Designer%20(5).jpeg?raw=true"
            alt="UTS image"
            className="h-44 rounded-md border border-black"
          />
          <h1 className="p-2 m-2 text-xl text-amber-900 font-semibold">
            Employee Management System
          </h1>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-fuchsia-400 px-2 rounded-md border border-black"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://github.com/Rohan-Maurya-007/Employee-Management-System-UI",
                  "_blank"
                );
              }}
            >
              Frontend Source Code
            </button>
            <button
              className="bg-fuchsia-400 px-2 rounded-md border border-black"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://github.com/Rohan-Maurya-007/Employee-Management-System-Backend",
                  "_blank"
                );
              }}
            >
              Backend Source Code
            </button>
          </div>

          <p className="p-2 m-2 text-lg text-neutral-100 bg-slate-400 rounded-lg font-medium border border-black">
            The Employee Management System facilitates the seamless addition,
            deletion, retrieval, updating, and display of all employee details.
          </p>
        </motion.div>
        <motion.div
        ref={ref}
          className="flex  flex-col justify-center items-center p-2 m-2 bg-gradient-to-r from-teal-400 to-yellow-200 rounded-lg border border-black"
          variants={{
            hidden: { opacity: 0, x: 300 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={projectScrollAnimation}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src="https://github.com/Rohan-Maurya-007/Portfolio/blob/main/src/assets/Designer%20(8).jpeg?raw=true"
            alt="UTS image"
            className="h-44 rounded-md border border-black"
          />
          <h1 className="p-2 m-2 text-xl text-amber-900 font-semibold">
            RESTful Users API
          </h1>
          <div className="flex justify-center items-center gap-4">
            {/* <button className="bg-fuchsia-400 px-2 rounded-md">Visit Site</button> */}
            <button
              className="bg-fuchsia-400 px-2 rounded-md border border-black"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://github.com/Rohan-Maurya-007/User-Rest-API-Springboot",
                  "_blank"
                );
              }}
            >
              Source Code
            </button>
          </div>

          <p className="p-2 m-2 text-lg text-neutral-100 bg-slate-400 rounded-lg font-medium border border-black">
            The functional endpoints of a RESTful User API can assist in
            providing capabilities such as adding, removing, updating, and
            retrieving users from databases.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
