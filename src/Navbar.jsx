import React, { useEffect, useRef, useState } from "react";
import {  easeOut,easeInOut, motion, hover } from "motion/react"
import { GoArrowDownRight } from "react-icons/go";
import gsap from "gsap";


const Navbar = () => {
      const Line =useRef(null)
       const topLine =useRef(null);
         const bottomLine =useRef(null);
        const [isOpen ,setisOpen] =useState(false);
       
        const handleClick = () => {
  if (!isOpen) {
    // Hamburger → Cross
    gsap.to(topLine.current, { rotate: 45, y: 6, duration: 0.3 });
    gsap.to(bottomLine.current, { rotate: -45, y: -6, duration: 0.3 });
  } else {
    // Cross → Hamburger
    gsap.to(topLine.current, { rotate: 0, y: 0, duration: 0.3 });
    gsap.to(bottomLine.current, { rotate: 0, y: 0, duration: 0.3 });
  }
  setisOpen(!isOpen);
};


      

    const [show ,setShow] =useState(true) 
    const [lastLocationY ,setlastLocationY] =useState(0);

    const controlNavbar =()=>{
      if(window.scrollY > lastLocationY){
         setShow(false);
      }else{
        setShow(true);
      }

      setlastLocationY(window.scrollY);
    }
     useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastLocationY]);

    const navLinks = [
        { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" }, 
  { href: "#contact", text: "Contact" },
];


  return (
    <motion.nav initial={{y:0}}  animate={{ y: show ? 0 : -100 }}  transition={{ duration: 0.5, ease: "easeInOut" }} className=" bg-[#EFEFEF]/30 backdrop-blur-md  fixed w-full top-0   left-0 z-50">
      <motion.div initial={{y:'-100%' , opacity:0}} animate={{y:0 ,opacity:1}} transition={{ duration: 2, ease: "easeInOut",delay:1 }}  className="max-w-7xl  mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className=" w-full  uppercase    flex items-center justify-between  ">
          <div className=" md:text-2xl text-md font-bold">
            <h1 className="  flex text-blue-800  ">Bz.
              <span className="text-gray-`600 md:text-black"> Coder </span></h1>
          </div>
      
                
             <div ref={Line} onClick={()=>(handleClick())}  className=" md:hidden  z-10   flex flex-col items-center justify-center gap-2 h-10  w-10">
              <div ref={topLine} className="h-[.4vw] w-full bg-black/60">
              </div>
              <div ref={bottomLine}  className="h-[0.4vw] w-full bg-black/60">
             </div>
            </div> 

          {/* Desktop Menu */}
          <div className=" text-sm hidden md:flex justify-center items-center space-x-2 ">
         {navLinks.map((link , i)=>(
              <motion.div  key={i}
  className="    px-1 px-2font-semibold italic hover:not-italic py-1 h-6 flex flex-col   overflow-hidden cursor-pointer w-fit"
  initial="initial"

  whileHover="hover"   
>
  <motion.span
    className=" navbar font-medium inline-block "
    variants={{
      initial: { y: "0%",opacity:1 },
      hover: { y: "-105%",opacity:0 },
    }}
    transition={{ duration: 0.3,ease:easeInOut}}
  >
    <a href={link.href} className="  text-[#000000]">
  {link.text}
    </a>
  </motion.span>

  <motion.span
    className=" heading inline-block"
    variants={{
      initial: { y: "0%" },
      hover: { y: "-100%" },
    }}
    transition={{ duration: 0.3 ,ease:easeInOut }}
  >
    <a href={link.href} className="">
     {link.text}
    </a>
  </motion.span>

</motion.div>
         ))}


            <motion.div
      initial="initial"
      whileHover="hover"
      className="  px-1 flex  ml-10 border-b-4 border-blue-500 hover:border-blue-500 hover:border-b-6  rounded-md font-bold cursor-pointer"
    >
     
        <motion.span
          variants={{
            initial: { rotate: 0 },
            hover: { rotate: -45 },
          }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          <GoArrowDownRight   className="text-2xl " />
        </motion.span>

        <motion.div  
  className="px-2 pt-1  font-semibold italic hover:not-italic  h-8 flex flex-col   overflow-hidden cursor-pointer w-fit"
  initial="initial"

  whileHover="hover"   
>
  <motion.span
    className="semiheading inline-block"
    variants={{
      initial: { y: "0%",opacity:1 },
      hover: { y: "-105%",opacity:0 },
    }}
    transition={{ duration: 0.3,ease:easeInOut}}
  >
    <a href='' className="text-[#131010] text-lg capilitise">
   Hire me
    </a>
  </motion.span>

  <motion.span
    className=" semiheading inline-block"
    variants={{
      initial: { y: "0%" },
      hover: { y: "-100%" },
    }}
    transition={{ duration: 0.3 ,ease:easeInOut }}
  >
    <a   href="mailto:mrbhushan006@gmail.com" className="capitilise text-lg">
   Hire me
    </a>
  </motion.span>
       </motion.div>
    
           </motion.div>
           
          </div>
        </div>

              
            {/* Mobile Menu */}
{isOpen && (
  <div className="absolute   top-0 left-0 px-4 py-20  max-w-full m-0 w-full bg-gray-100 h-screen text-sm md:hidden">
    <div className="w-full h-[80%]  gap-1 flex flex-col justify-center md:items-center">
      {navLinks.map((link, i) => (
        <motion.div
          key={i}
          className="px-2 font-bold border-b-1 border-black/30  py-1 md:h-6 flex flex-col gap-4 overflow-hidden cursor-pointer"
        >
          <motion.span
            className="navbar text-4xl font-bold italic inline-block"
             initial={{y:40 ,opacity:0}}
             whileInView={{y:0,opacity:1}}
            transition={{ duration: 0.7, ease: easeInOut }}
          >
            <a href={link.href} className="uppercase text-[#2153f6]">
              {link.text}
            </a>
          </motion.span>
        </motion.div>
      ))}

      <motion.div
        initial="initial"
        whileHover="hover"
        className="px-6 mt-10 bg-[#2153f6] text-white gap-2 py-2 flex w-fit rounded-md font-bold cursor-pointer"
      >
        <motion.span
          variants={{
            initial: { rotate: 0 },
            hover: { rotate: -45 },
          }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          <GoArrowDownRight className="text-2xl " />
        </motion.span>
        <motion.span
          className="semiheading inline-block text-white"
          variants={{
            initial: { y: "0%", opacity: 1 },
            hover: { y: "-105%", opacity: 0 },
          }}
          transition={{ duration: 0.3, ease: easeInOut }}
        >
          <a href="" className="text-lg">
            Hire Me
          </a>
        </motion.span>
      </motion.div>
    </div>
  </div>
)}


      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
