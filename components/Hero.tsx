import { useRef } from "react"
import {  PROFILE } from '../constants'
import { RiArrowDownLine } from "@remixicon/react"
import newai from '../assets/newai.mp4'
import { motion } from "framer-motion"


const Hero = () => {
    const heroRef = useRef(null)
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6" data-hero-ref={heroRef.current}>
      <div className="mt-8 lg:mt-20">
        <motion.h1 className="hero-title text-4xl uppercase lg:text-7xl"
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}>
          {PROFILE.name}
        </motion.h1>
        <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-2xl tracking-tighter text-transparent">
          {PROFILE.role}
        </h2>
      </div>
      <motion.p className="hero-text max-w-3xl p-2 text-center text-xl tracking-tighter lg:text-1xl"
      initial={{y: 50, opacity: 0}}
      animate={{y: 0, opacity:1}}
      transition={{duration: 0.8, delay:0.2}}>
        {PROFILE.subheading}
      </motion.p>
      <a className="hero-btn mb-6 flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter">
        <>
         Video Resume
        </>
        <RiArrowDownLine />
      </a>
      <video src={newai} width={900} height={400} controls className="hero-img rounded-3xl border border-purple-300/20 p-1" />
    </section>
  )
}

export default Hero