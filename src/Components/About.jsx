import React, { useRef } from 'react'
import ScratchCard from 'react-scratchcard-v2';
import Profile from '/BZCoder.png'
import Glass from '/Scratch.jpg'
import pfp from '/pfp.png'
import dragon from '/dragon.png'
import gun from '/gun.png'
import lapy from '/lapy.png'
import skull from '/skull.png'
import icon1 from '/icons/html.png' 
import icon2 from '/icons/js.png' 
import icon3 from '/icons/css.png' 
import icon4 from '/icons/bootstrap.png' 
import icon5 from '/icons/react.png' 
import icon6 from '/icons/Tailwind.png' 
import icon7 from '/icons/gsap.png' 
import icon8 from '/icons/figma.png' 


import { motion, useScroll, useTransform } from 'motion/react';

import LocomotiveScroll from 'locomotive-scroll';
import { delay } from 'motion';


const icons = [
  '/icons/html.png',
  '/icons/js.png',
  '/icons/css.png',
  '/icons/bootstrap.png',
  '/icons/react.png',
  '/icons/Tailwind.png',
  '/icons/gsap.png',
  '/icons/figma.png',
];
const About = () => {
    

const locomotiveScroll = new LocomotiveScroll();

 const aboutbox =useRef(null)
 const {scrollYProgress} = useScroll({
  target:aboutbox ,
  offset:['start end' ,'end start',]
 });

 const background = useTransform(
  scrollYProgress ,
  [0.3,0.4],
   ["#EFEFEF", "#1E40AF"] 
 );
  const text = [
    " Hi, I'm Bhushan Zombade, a passionate frontend web",
    "developer with a keen eye for detail and a love for",
    "creating visually appealing and user-friendly",
    "interfaces. With expertise in HTML, CSS, and",
    "JavaScript, I enjoy transforming complex ideas into",
    "elegant, responsive designs. I'm dedicated to",
    "continuous learning and staying updated with the",
    "latest trends and technologies in web development.",
    "Let's work together to bring your digital ideas to life!"
  ];

  return (
    <motion.div id='about'  ref={aboutbox} style={{ backgroundColor: background }}  className='  bg-[#04244a]   w-full min-h-screen flex flex-col overflow-hidden '>

  

      <div className=' overflow-hidden  relative z-30   w-full h-[99vh]    m-auto flex flex-col items-center justify-center ' >
          
             <div className=' hidden w-[40%] h-full absolute top-0  left-0 md:flex flex-col items-center pl-10 justify-center '>
            
              <img src={skull}  alt="" className=' w-52 h-52 mb-20' />

       </div>
       <div className=' hidden w-[40%] h-full absolute top-0  right-0 md:flex flex-col items-center pl-10 justify-center '>
              <h1 className='semiheading-bold text-blue-800 md:text-7xl uppercase  ' >About</h1>
              <h1 className='semiheading-bold text-black md:text-7xl uppercase   '  >Me .</h1>
              <img src={dragon} alt="" className=' w-40 h-40' />

       </div>
 {/* mobile view */}
 <div data-scroll data-scroll-speed="-0.2" className="md:hidden mb-5 md:mb-0  absolute z-3 flex border border-zinc-300 rounded-md overflow-hidden w-[80%] h-[70%] items-center justify-center">
       <img  src={Profile} alt="" className='w-full h-full object-cover' />
    </div>

         {/* desktop view */}
       <div data-scroll data-scroll-speed="0.2"  className="md:inline-b hidden absolute z-3    md:flex flex-col   h-[90%] overflow-hidden items-center gap-4">
            
          <ScratchCard
    width={360}
    height={600}
    image={Glass}
    finishPercent={20}
    onComplete={() => console.log('complete')}
      className="scratchcard"


  >
    
    <div className="flex   rounded-md overflow-hidden w-full h-full items-center justify-center">
       <img src={Profile} alt="" className='w-full h-full object-cover ' />
    </div>
          </ScratchCard>
       </div>                        
                            
                   <div className=' md:bg-black  bg-black md:rotate-18 rotate-25 absolute md:z-1 z-3 md:bottom-20  bottom-80   wrapper w-[140%]  overflow-hidden '>

          <motion.div
          animate={{ x: ['-100%', '0%'] }}
        transition={{ repeat: Infinity, duration: 40, ease:'linear' }}
          
          className='  text md:h-20 md:py-2   flex md:gap-50  whitespace-nowrap '>

       <h1 className='
                         semiheading-bold text-zinc-100 text-xl md:text-5xl font-bold flex  gap-2  items-center justify-center md:mx-2 uppercase  md:py-2 '>
              Creative Coder |  <img src={lapy} alt="" className="md:w-20 w-10 md:h-20 object-contain" />
               <span className='text-blue-800'> Code Artist</span> 
                <img src={pfp} alt="" className="md:w-20 md:h-20 w-10 object-contain" />   | Interface Engineer  
                 <img src={dragon} alt="" className="w-10 md:w-20 md:h-20 object-contain" />
                 |  Design Technologist
                   | <span className='text-blue-800 px-4'>UX Developer</span>
            </h1>

              <h1 className=' md:m-x-2 semiheading-bold text-zinc-100 text-xl md:text-5xl font-bold flex  gap-10  items-center justify-center md:mx-2 uppercase  md:py-2 '>
              Creative Coder |  <img src={lapy} alt="" className="md:w-20 w-10 md:h-20 object-contain" />
               <span className='text-blue-800'> Code Artist</span> 
                <img src={pfp} alt="" className="md:w-20 w-10 md:h-20 object-contain" />   | Interface Engineer  
                 <img src={dragon} alt="" className="md:w-20 w-10 md:h-20 object-contain" />
                 <span className='text-blue-800'> who ?</span>|  Design Technologist
                    |<span className='inline-block md:pr-10 text-blue-800 px-4'>UX Developer</span>
            </h1>

          </motion.div>

                  </div> 

    <div className="absolute bg-black md:bg-black z-10 md:-rotate-3 -rotate-25  md:h-20 md:top-[60px] top-90 w-[140%] overflow-hidden">
  <motion.div
    animate={{ x: ["0%", "-100%"] }}
    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
    className="whitespace-nowrap flex items-center"
  >
    {[...Array(3)].map((_, i) => (
      <h1
        key={i}
        className="semiheading-bold text-zinc-100 text-xl md:text-5xl font-bold mx-4 uppercase flex items-center gap-4 md:py-2"
      >
        {" "} Hi ! I’m Bhushan Zombade |
        <span className="text-blue-800">Frontend Developer</span> |
        <img src={pfp} alt="" className="w-10 md:w-20 md:h-20 object-contain" />
        Bhushan Zombade? <span className="text-blue-800">Who? </span> |
        <img src={dragon} alt="" className="w-10 md:w-20 md:h-20 object-contain" />
        Bhushan Zombade? <span className="text-blue-800">Who?  |</span>
      </h1>
    ))}
  </motion.div>

</div>

      </div>


      <div id='main' className='  md:w-[90%] md:mt-15 m-auto '>
                <div className="md:text-5xl  text-md text-center md:text-center text-white semiheading-h md:md:pb-10 md:font-semibold   leading-[2rem]  md:leading-[2.8rem]"  >
      {text.map((line, i) => (
         <h1 key={i} className="overflow-hidden   md:py-1">
          {line.split(" ").map((word, j) => (
            <motion.span
              key={j}
              className="inline-block "
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: j * 0.05 }}
              viewport={{ once: true }} 
            >
              &nbsp;{word}&nbsp;
            </motion.span>
          ))}
        </h1>
      ))}
    </div>
                    
                  <div className='w-full flex mt-10 md:flex-row flex-col gap-10 ' >
                     <div className=' w-full   md:w-[40%] '>
                   <h1 className='md:mt-10 px-4 text-4xl md:text-6xl text-black- heading ' >
                    <motion.span  className='inline-block text-white'
                      initial={{y:30 , opacity:0 ,}}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, }}
                         viewport={{ once: true }} 
                    >Tech Stack</motion.span>
                    </h1>
                    <h1 className='pl-15 text-3xl md:text-6xl text-[#222831] heading ' >
                      <motion.span
                       initial={{y:30 , opacity:0}}
                       whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, }}
                         viewport={{ once: true }} 
                      >I Work With .</motion.span>
                      </h1>
                   </div>

                    <div className='md:w-[60%] flex flex-wrap md:p-10 gap-5 items-center justify-center overflow-hidden  '>
                      {icons.map((icon, index) => (
        <motion.div 
          key={index} 
          className="px-2 py-2 h-20 w-20  bg-[#222831]  hover:bg-black text-white rounded-xl  font-medium"
          initial={{opacity:0 ,y:30 }}
          whileInView={{opacity:1 ,y:0}}
          transition={{duration:0.2 ,delay:index*0.3}}
          viewport={{once:true}}
        >
        <img src={icon} alt=" icons "  className=' w-full h-full object-contain' />
        </motion.div>
      ))}
                   </div>
                  </div>
      </div>
     
<svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#EFEFEF" fillOpacity="1" d="M0,96L21.8,117.3C43.6,139,87,181,131,165.3C174.5,149,218,75,262,69.3C305.5,64,349,128,393,165.3C436.4,203,480,213,524,181.3C567.3,149,611,75,655,69.3C698.2,64,742,128,785,133.3C829.1,139,873,85,916,80C960,75,1004,117,1047,149.3C1090.9,181,1135,203,1178,213.3C1221.8,224,1265,224,1309,240C1352.7,256,1396,288,1418,304L1440,320L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
</svg>
    </motion.div>
  )
}

export default About