"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion"
import { Code, Cpu, Zap } from "lucide-react"
import { useSoundEffects } from "./sound-effects"
import InteractiveButton from "./interactive-button"

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const mainControls = useAnimation()
  const { playSound } = useSoundEffects()
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      playSound("transition")
    }
  }, [isInView, mainControls, playSound])

  const taglineWords = ["Innovate.", "Create.", "Collaborate."]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev === taglineWords.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [taglineWords.length])

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 text-white"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-40 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
          onMouseEnter={() => playSound("hover")}
        >
          <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Welcome to</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400"
        >
          Dablie Tech Club
        </motion.h1>

        <div className="flex justify-center mb-12 h-16 relative">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-light absolute"
            >
              {taglineWords[currentWord]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full cursor-pointer"
            onMouseEnter={() => playSound("hover")}
            onClick={() => playSound("click")}
          >
            <Code className="h-5 w-5 text-purple-400" />
            <span>Developers</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full cursor-pointer"
            onMouseEnter={() => playSound("hover")}
            onClick={() => playSound("click")}
          >
            <Cpu className="h-5 w-5 text-cyan-400" />
            <span>Engineers</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full cursor-pointer"
            onMouseEnter={() => playSound("hover")}
            onClick={() => playSound("click")}
          >
            <Zap className="h-5 w-5 text-pink-400" />
            <span>Creators</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12"
        >
          <InteractiveButton variant="primary" size="lg">
            Explore Our World
          </InteractiveButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
