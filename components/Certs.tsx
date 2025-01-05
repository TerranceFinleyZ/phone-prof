import { motion } from "framer-motion"
import image from '../assets/harv.png'

const Certs = () => {

    const variants = {
        hidden:{opacity:0, y:50},
        visible:{opacity:1, y:0}
    }
  return (
    <div id="education" className="flex py-60 min-h-[70vh] w-full flex-col items-center gap-16 md:gap-32">
        <motion.h1
        variants={variants}
        initial="hidden"
        whileInView={'visible'}
        transition={{duration:0.5}}
        className="text-4xl md:text-6xl font-medium tracking-tight mb-10">Certifications</motion.h1>

      <motion.div
      
      variants={variants}
        initial="hidden"
        whileInView={'visible'}
        transition={{duration:0.5}}>
      <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science" target="">
      <img src={image} alt="" className="w-[400px] cursor-pointer rounded-xl shadow-xl shadow-pink-500 transition-all duration-300 hover:-translate-y-5
          hover:scale-105 hover:shadow-2xl hover:shadow-pink-500 md:w-[850px] " />
      </a>
      </motion.div>

      <motion.button
      variants={variants}
      initial="hidden"
      whileInView={'visible'}
      transition={{duration:0.5}}
      className='border rounded-xl w-[60px] my-5 py-1 bg-pink-400 hover:bg-purple-400 text-white'>
        More...
      </motion.button>
    </div>
  )
}

export default Certs