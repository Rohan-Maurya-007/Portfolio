import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
const Techstack = ()=>{

    const techSvg = ["java.svg", "spring.svg","springboot.svg", "hibernate.svg", "sql.svg","js.svg","react.svg","tailwind.svg","git.svg","github.svg","html.svg","css.svg","npm.svg","postman.svg","vscode.svg","eclipse.svg"]
    const url = "src/svgs/"
    const techNames = ["Java", "Spring", "Spring-Boot", "Hibernate", "Sql", "JavaScript", "React","Tailwind", "Git", "Github", "HTML","CSS","NPM","Postman","VS code", "Eclipse" ]
    
    const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const scrollAnimation = useAnimation();
  const subScrollAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      scrollAnimation.start("visible");
      subScrollAnimation.start("visible")
    }
  }, [inView]);
    
    return(
        <div ref={ref} className="flex flex-col justify-center items-center p-2 bg-gradient-to-r from-amber-200 to-emerald-100">
            < motion.h1 className="text-slate-900 text-3xl font-bold"
           variants={{
                hidden:{opacity:0, x:-100},
                visible:{opacity:1, x:0}
            }}
            initial="hidden"
            animate={scrollAnimation}
            transition={{duration:1, delay:4}}
            
            >~Tech Stack~</motion.h1>
            <div ref={ref} className="grid-cols-2 grid m-2 lg:grid-cols-4 md:grid-cols-3">
            {
                    techNames.map((v,I)=>{
                        return(
                            <motion.div key={v} className="flex bg-fuchsia-900 w-fit rounded-md py-1 px-2 gap-3 m-3 border border-slate-600 items-center"
                            variants={{
                                hidden:{opacity:0, x:100},
                                visible:{opacity:1, x:0}
                            }}
                            initial="hidden"
                            animate={subScrollAnimation}
                            transition={{duration:1, delay:5}}
                            >
                            <img src={`${url}${techSvg[I]}`} alt="svg logo" 
                            className="h-6 rounded"
                            />
                            <h1 className="text-white font-semibold text-pretty"> {techNames[I]}</h1>
                            </motion.div>
                        )
                    })
                }
            </div>
            
            
        </div>
    )
}

export default Techstack