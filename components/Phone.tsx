import { motion } from "framer-motion"
import image from '../assets/pott.png'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import Iframe from 'react-iframe'
import { useMediaQuery } from 'react-responsive';
import './Phone.css'

const Phone = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0}
  }
  
  return (
    <div id='contact' className="flex py-60 min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView={'visible'}
        transition={{duration:0.5}}
        
        className="text-4xl md:text-6xl font-medium tracking-tight text-pink-600 mb-10">Contact</motion.h1>

      <Iframe
        url="https://iios.netlify.app/"
        width={isMobile ? "40%" : "28.6%"}  // Adjust width if needed for responsiveness
        height={isMobile ? "315px" : "700px"} // Conditional height
        className={isMobile ? "rounded-3xl mobile-iframe overflow-hidden mb-[300px]" : "rounded-3xl overflow-hidden mb-[200px]"} // Conditional className with overflow:hidden added
        display="block"
        position="absolute"
        sandbox={[ // Use an array
          "allow-scripts",
          "allow-same-origin",
          "allow-forms",
          "allow-pointer-lock",
          "allow-top-navigation",
      ]}
      />

      <img src={image} alt="" className="w-[870px]" />
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <div className="flex flex-wrap items-center justify-center gap-10 p-5">

          <a href="https://www.linkedin.com/in/terrance-finley-b601263436" target="">
            <FaLinkedin className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>

          <a href="https://github.com/TerranceFinleyZ" target="">
            <FaGithub className="cursor-pointer text-[80px] text-blue-100 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>  

          <a href="https://leetcode.com/u/xxxZealots777/" target="">
            <SiLeetcode className="cursor-pointer text-[80px] text-orange-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          </a>

        </div>
      </div>
      <h3>©2025 Portfolio built by Terrance Finley all rights reserved. <span className="abt">Use full screen to access phone.</span></h3>
      

    </div>
  )
}

export default Phone