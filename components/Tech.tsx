import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion"
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiKalilinux } from "react-icons/si";
import { SiTerraform } from "react-icons/si";

const Tech = () => {

  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0}
  }


  return (
    <div id='skills' className="flex py-60 min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1
      variants={variants}
      initial="hidden"
      whileInView={'visible'}
      transition={{duration:0.5}}
      
      className="text-2xl font-light text-white md:text-5xl">Technologies</motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
        
        variants={variants}
      initial="hidden"
      whileInView={'visible'}
      transition={{duration:0.5}}>
          <FaReact className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
        
        variants={variants}
      initial="hidden"
      whileInView={'visible'}
      transition={{duration:0.5}}>
          <FaPython className="cursor-pointer text-[80px] text-orange-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
        
        variants={variants}
      initial="hidden"
      whileInView={'visible'}
      transition={{duration:0.5}}>
          <SiKalilinux className="cursor-pointer text-[80px] text-blue-100 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
        
        variants={variants}
      initial="hidden"
      whileInView={'visible'}
      transition={{duration:0.5}}>
          <SiTerraform className="cursor-pointer text-[80px] text-purple-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
        
        variants={variants}
      initial="hidden"
      whileInView={'visible'}
      transition={{duration:0.5}}>
          <BiLogoPostgresql className="cursor-pointer text-[80px] text-pink-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
      </div>


    </div>
  )
}

export default Tech