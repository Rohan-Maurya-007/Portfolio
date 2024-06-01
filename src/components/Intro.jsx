import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Applayout from "./AppLayout";
const Intro = () => {
  let names = [
    "Hello",
    "नमस्ते",
    "नमस्कार",
    "प्रणाम",
    "నమస్కరం",
    "કેમ છો",
    "राधे राधे",
    "राम राम",
    "जय हिन्द",
  ];

  let names2 = ["hello", "namaste","ram ram","radhe radhe",'jay hind']
  // const [introNames, setIntroNames] = useState(names);
  const [index, setIndex] = useState(0);
  const [call, setCall] = useState(false)
  

  useEffect(()=>{
    let count = 0
    const interval = setInterval(()=>{
      if (count <= names.length) {
        console.log(count);
        setIndex(()=>{return count++});
      } else {
        clearInterval(interval)
        console.log("done");
        setCall(true)
      }
    },500)
  },[])

  

  


  return (
    <div>
    <h1>{names2[index]}</h1>
    </div>
  )
};

export default Intro;
