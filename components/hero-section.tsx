"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion"
import { Terminal, Code2, Braces } from "lucide-react"
import { useSoundEffects } from "./sound-effects"
import InteractiveButton from "./interactive-button"

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const mainControls = useAnimation()
  const { playSound } = useSoundEffects()
  const [currentWord, setCurrentWord] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const handleExploreClick = () => {
    const aboutSection = document.getElementById("about-us");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    playSound("click");
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      playSound("transition")
    }
  }, [isInView, mainControls, playSound])

  const taglineWords = [
    { text: "Build", color: "text-primary" },
    { text: "Hack", color: "text-secondary" },
    { text: "Ship", color: "text-accent" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev === taglineWords.length - 1 ? 0 : prev + 1))
    }, 2500)

    return () => clearInterval(interval)
  }, [taglineWords.length])

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Terminal-style header bar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-8 bg-card border-b border-primary/30 flex items-center px-4 gap-2 z-20"
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive"></div>
          <div className="w-3 h-3 rounded-full bg-secondary"></div>
          <div className="w-3 h-3 rounded-full bg-primary"></div>
        </div>
        <span className="text-xs text-muted-foreground ml-4 font-mono">~/dablie-tech-club</span>
      </motion.div>

      <div className="container mx-auto px-4 z-10 text-center pt-12">
        {/* Terminal prompt badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="terminal-border bg-card/50 backdrop-blur-sm px-4 py-2 rounded text-sm font-mono flex items-center gap-2 hover-glow">
            <Terminal className="h-4 w-4 text-primary animate-flicker" />
            <span className="text-primary terminal-glow">system.init()</span>
          </div>
        </motion.div>

        {/* Main title with staggered animation */}
        <div className="mb-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-2 tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-block text-primary terminal-glow"
            >
              Dablie
            </motion.span>
            {" "}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-block text-foreground"
            >
              Tech
            </motion.span>
            {" "}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="inline-block text-accent cyan-glow"
            >
              Club
            </motion.span>
          </motion.h1>
        </div>

        {/* Animated tagline with terminal prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center items-center mb-16 h-12 relative"
        >
          <span className="text-primary font-mono text-xl md:text-2xl mr-2 terminal-glow">{'>'}</span>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className={`text-xl md:text-2xl font-bold ${taglineWords[currentWord].color} absolute left-0 whitespace-nowrap`}
              >
                {taglineWords[currentWord].text}
              </motion.span>
            </AnimatePresence>
          </div>
          <motion.span
            animate={{ opacity: showCursor ? 1 : 0 }}
            className="text-primary font-mono text-xl md:text-2xl ml-20"
          >
            ▌
          </motion.span>
        </motion.div>

        {/* Category badges with icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-4 mt-8 mb-12"
        >
          {[
            { icon: Terminal, label: "[devs]", color: "primary", delay: 0 },
            { icon: Code2, label: "[engineers]", color: "secondary", delay: 0.1 },
            { icon: Braces, label: "[creators]", color: "accent", delay: 0.2 }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.6 + item.delay }}
              whileHover={{ scale: 1.05, y: -3 }}
              className={`
                terminal-border bg-card/30 backdrop-blur-sm px-6 py-3 rounded
                cursor-pointer hover-lift group
                ${item.color === 'primary' ? 'hover:box-glow-green' : ''}
                ${item.color === 'secondary' ? 'hover:box-glow-amber' : ''}
                ${item.color === 'accent' ? 'hover:box-glow-cyan' : ''}
              `}
              onMouseEnter={() => playSound("hover")}
              onClick={() => playSound("click")}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`h-5 w-5 text-${item.color} ${
                  item.color === 'primary' ? 'group-hover:terminal-glow' : ''
                  }${item.color === 'secondary' ? 'group-hover:amber-glow' : ''}
                  ${item.color === 'accent' ? 'group-hover:cyan-glow' : ''}
                `} />
                <span className="font-mono text-sm">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <InteractiveButton
            variant="primary"
            size="lg"
            onClick={handleExploreClick}
            className="font-mono"
          >
            <Terminal className="h-4 w-4 mr-2" />
            ./explore.sh
          </InteractiveButton>
        </motion.div>

        {/* Scroll indicator with terminal style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-muted-foreground">[scroll]</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="text-primary text-xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative code snippets floating in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        {['const', 'function', 'return', 'class', 'import', 'export'].map((word, idx) => (
          <motion.div
            key={idx}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: '110vh',
              opacity: [0, 0.5, 0.5, 0]
            }}
            transition={{
              duration: 15 + idx * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: idx * 3,
              ease: "linear"
            }}
            className={`absolute font-mono text-6xl font-bold`}
            style={{
              left: `${10 + idx * 15}%`,
              color: idx % 3 === 0 ? 'hsl(var(--primary))' : idx % 3 === 1 ? 'hsl(var(--secondary))' : 'hsl(var(--accent))'
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
