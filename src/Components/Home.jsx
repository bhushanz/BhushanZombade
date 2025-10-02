import { delay } from "motion";
import { cubicBezier, easeInOut,motion } from "motion/react";
import React, { useState } from "react";


const headingVariants = {
  hidden: { y: -120, opacity:0 },
  visible: { y: 0, opacity:1 },
};


const videos = ["/Apple-Event.mp4", "/vid3.mp4", "/vid2.mp4", "/vid4.mp4"];
const Home = () => {
  

  return (
    <div className="w-full  md:m-auto min-h-screen  md:pt-24 flex flex-col  items-center justify-center  ">
      <div className="   w-full md:m-auto md:h-full h-[80%]     flex flex-col items-center justify-center">

        <div className="w-full   ">
          <div className="w-full overflow-hidden  md:h-30 ">
            <motion.h1
             variants={headingVariants}
             initial='hidden' animate='visible'
             transition={{ duration: 2,  ease:"easeInOut"  }} 
            className="heading  text-5xl  md:text-9xl font-semibold pl-5  uppercase md:ml-30">
              Frontend
            </motion.h1>
          </div>
        </div>

        <div className=" relative  w-full h-45  flex  items-center justify-between">
          {/* semiheadings */}
          <div className=" md:w-[60%] w-[90%] m-auto  flex  justify-between">
            <div className="text-md overflow-hidden md:text-2xl   w-[30%] h-full display flex flex-col items-center justify-center ">
              <motion.p   variants={headingVariants}
             initial='hidden' animate='visible'
             transition={{ duration: 2.2,  ease:"easeInOut" }}  className="semiheading text-black flex flex-col justify-center ">
                Creative
                <span className="semiheading-h font-semibold  text-black">
                  Development
                </span>
              </motion.p>
            </div>
            <div className=" text-md md:text-2xl overflow-hidden  text-zinc-700  w-[30%] h-full display flex justify-center items-center">
              <motion.p   variants={headingVariants}
             initial={{y:110}} animate='visible'
             transition={{ duration: 2.2, ease:'easeInOut' }}  className="semiheading text-right flex flex-col justify-center  ">
                Design
                <span className="semiheading-h font-semibold  text-zinc-900 ">

                  Technologist</span>
              </motion.p>
            </div>
            
          </div>
          {/* abolute photos */}
          <motion.div 
                  initial={{ height: 0 }}
               animate={{ height: "100%" }}
             transition={{ duration: 1, ease: "easeInOut", delay:2 }}
              
             className="wrapperdiv   absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  w-full overflow-hidden ">

            <motion.div 
             animate={{ x: ["0%", "-50%"] }}
        transition={{
           duration: 50,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          

        }}
            className=" movingdiv  min-w-max h-full   flex flex-nowrap gap-30  items-center justify-between">
              {/* original file */}

              {[...videos ,...videos].map((src,index)=>(
<div key={index} className=" md:h-50  md:w-[30%] h-40 ">
                <video  className=" object-cover w-full h-full" autoPlay loop muted >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              ))}
              
              
            </motion.div>

          </motion.div>
        </div>

        <div className="w-full ">
          <div className="w-full  md:h-30  overflow-hidden    ">
            <motion.h1   variants={headingVariants}
             initial={{y:110}} animate='visible'
             transition={{ duration: 2, ease:"easeInOut" ,}}  className="heading text-right w-full pr-8  m-0 text-5xl text-blue-800 md:text-9xl font-semibold uppercase mr-30 ">
              Developer
            </motion.h1>

          </div>
             <motion.p initial={{opacity:0 }} animate={{opacity:1}} transition={{ duration:0.4 , ease:"easeOut ",delay:2}} className="semiheading pt-2 w-[82%] m-auto text-sm md:text-lg text-right  font-semibold text-[#525252]">Driven by curiosity, creativity, and a commitment <br /> to crafting beautiful web solutions.</motion.p>
        </div>
       
      </div>
      {/* <div className=" hidden md:inline-block md:w-[70%]     " >
          <p className="semiheading text-xs md:text-lg md:text-right font-semibold text-[#525252]">Driven by curiosity, creativity, and a commitment <br /> to crafting beautiful web solutions.</p>
        </div> */}

        <hr className="md:w-88 w-32 mt-10 " />
  
    </div>
  );
};

export default Home;
