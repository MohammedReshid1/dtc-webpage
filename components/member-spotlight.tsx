"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import InteractiveButton from "./interactive-button"
import { useSoundEffects } from "./sound-effects"

export default function MemberSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { playSound } = useSoundEffects()

  const members = [
    {
      name: "Alex Rivera",
      role: "AI Research Lead",
      bio: "Alex leads our AI research team, focusing on developing ethical AI solutions for healthcare and education. With a background in machine learning and cognitive science, they bring a unique perspective to technical challenges.",
      achievements: [
        "Published 3 research papers",
        "Led team to win national AI competition",
        "Mentored 12 junior members",
      ],
      image: "/images/member-alex.jpg",
      links: {
        github: "#",
        linkedin: "#",
        portfolio: "#",
      },
    },
    {
      name: "Priya Sharma",
      role: "Full-Stack Developer",
      bio: "Priya specializes in building scalable web applications and mentoring new developers. Her work on the Community Learning Hub has helped hundreds of students access quality educational resources.",
      achievements: [
        "Developed 5 major club projects",
        "Created developer onboarding program",
        "Open source contributor",
      ],
      image: "/images/member-priya.jpg",
      links: {
        github: "#",
        linkedin: "#",
        portfolio: "#",
      },
    },
    {
      name: "Jordan Chen",
      role: "UX/UI Design Lead",
      bio: "Jordan brings creativity and user-centered thinking to all Dablie projects. Their design work has been recognized for its accessibility and innovation, creating experiences that delight users.",
      achievements: ["Redesigned club brand identity", "Led 3 UX research studies", "Mentored 8 design interns"],
      image: "/images/member-jordan.jpg",
      links: {
        github: "#",
        linkedin: "#",
        portfolio: "#",
      },
    },
  ]

  const handlePrev = () => {
    playSound("click")
    setActiveIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1))
  }

  const handleNext = () => {
    playSound("click")
    setActiveIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Member Spotlight</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the talented individuals who make Dablie Tech Club an innovative and vibrant community.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={members[activeIndex].image || "/images/placeholder-member.jpg"}
                    alt={members[activeIndex].name}
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-5 -right-5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg p-4 text-white shadow-lg"
                >
                  <p className="font-bold">{members[activeIndex].role}</p>
                </motion.div>
              </div>

              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
                >
                  {members[activeIndex].name}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-600 dark:text-gray-300 mb-6"
                >
                  {members[activeIndex].bio}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-6"
                >
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {members[activeIndex].achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex gap-3"
                >
                  <InteractiveButton variant="outline" size="sm" icon={<ExternalLink className="h-4 w-4" />}>
                    Connect
                  </InteractiveButton>
                  <InteractiveButton variant="primary" size="sm">
                    View Projects
                  </InteractiveButton>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => playSound("hover")}
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            <div className="flex gap-2 items-center">
              {members.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    playSound("click")
                    setActiveIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => playSound("hover")}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => playSound("hover")}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
