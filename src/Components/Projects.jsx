import { easeInOut, motion } from 'framer-motion'
import React from 'react'
import { useInView } from "react-intersection-observer";

import ProjectCard from './Projectcard';



const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  return (
    <div id='project' className=' w-full min-h-screen relative'>
      <motion.div
        ref={ref}
        initial={{ opacity: 1,  display:'block', }}
        animate={{ opacity: inView ? 0 : 1,  display: inView ? "none" : "block" }}
        transition={{ duration: 0.6 }}
        className=' absolute z-10    bg-[#EFEFEF] md:top-0  h-screen  w-full flex items-center justify-center '>
        <h1 className='md:text-[20vw] text-7xl text-center md:pl-45 text-[#15191f]   md:flex heading '> Projects </h1>
      </motion.div>

      <div className='w-full  min-h-screen  ' >
        <h1 className='uppercase w-[85%] m-auto heading text-4xl md:text-6xl  text-black py-10 '>My Recent <span className='text-blue-800'>work</span> </h1>
        <div className=' w-full   p-2 flex flex-col gap-20 ' >

          {/* <motion.div 
          initial={{opacity:0 ,y:40 }}
          whileInView={{opacity:1 , y:0 }}
          transition={{duration:0.7 ,ease:"easeInOut", delay:1}}
        
          className=' relative md:w-[80%] w-full rounded-2xl  overflow-hidden m-auto  '>
            <a href='' target="_blank" rel="noopener noreferrer">
              <img
                src={pro1}
                alt="Project Screenshot"
                className="w-full h-full object-cover"
              />
            </a>
              <div className=' hidden  uppercase px-5 p-3 absolute z-4 w-full h-24 bottom-0 md:flex gap-2  bg-zinc-900 backdrop-blur-md ' >
                <div className='h-full w-2 bg-yellow-200'>

                </div>
                   <div className='flex flex-col gap-1 '>
                     <h1 className='text-zinc-100 font-semibold semiheading-h  md:text-xl ' ><span className=''> Project name </span>: Mercelys Icecream reimagine website </h1>
                     <h1 className='text-white  font-medium  md:text-xl'>Tech Used : <span className=' border text-sm rounded-2xl inline-block p-1 px-6 '>React </span> <span className=' border text-sm rounded-2xl inline-block p-1 px-6 '>gsap </span> <span className=' border text-sm rounded-2xl inline-block p-1 px-6 '>tailwind </span></h1>
                   </div>
             </div>
             <div className='px-2 py-2   '>
                  <div className='flex flex-col gap-1 '>
                     <h1 className='text-zinc-900 font-semibold semiheading-h  md:text-xl text-md  ' ><span className=' heading capitalize text-md'> Project name </span>: Mercelys Icecream reimagine website </h1>
                     <h1 className='text-zinc-900  font-medium  md:text-xl heading flex gap-1'>Tech Used :
                       <span className='  text-xs rounded-full border-gray-400 border-1 inline-block p-1 px-3 semiheading-bold '>React </span> 
                       <span className='  text-xs rounded-full border-gray-400 border-1 inline-block p-1 px-3 semiheading-bold'>gsap </span> 
                       <span className=' text-xs rounded-full border-gray-400 border-1 inline-block p-1 px-3 semiheading-bold '>tailwind </span></h1>
                   </div>
             </div>
               
          </motion.div> */}

         <ProjectCard/>
        

        
       
        

        </div>
      </div>


      <div>

      </div>


    </div>
  )
}

export default Projects