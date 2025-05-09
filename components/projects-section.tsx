"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const projects = [
    {
      title: "AI Research Platform",
      description:
        "A collaborative platform for AI researchers to share datasets, models, and findings. Built with Next.js, TensorFlow.js, and a custom visualization engine.",
      progress: 85,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["AI", "Machine Learning", "Next.js"],
    },
    {
      title: "Smart Campus Initiative",
      description:
        "IoT-powered campus management system that optimizes energy usage, monitors air quality, and enhances security through a network of connected devices.",
      progress: 70,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["IoT", "React", "Node.js"],
    },
    {
      title: "Community Learning Hub",
      description:
        "An open-source learning platform that connects students with mentors, provides interactive coding challenges, and tracks learning progress.",
      progress: 90,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Education", "TypeScript", "GraphQL"],
    },
  ]

  return (
    <section ref={ref} className="min-h-screen py-20 bg-gray-900 text-white relative overflow-hidden">
      <motion.div style={{ opacity }} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our innovative projects that push the boundaries of technology and create meaningful impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex space-x-4 mb-8">
              {projects.map((project, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeProject === index ? "bg-cyan-500 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{projects[activeProject].title}</h3>
                <p className="text-gray-300 mb-6">{projects[activeProject].description}</p>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Progress</span>
                    <span>{projects[activeProject].progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${projects[activeProject].progress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[activeProject].tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="h-4 w-4" />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={projects[activeProject].image || "/placeholder.svg"}
                    alt={projects[activeProject].title}
                    className="w-full h-auto rounded-xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-cyan-900 rounded-full opacity-30 z-0"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
            whileHover={{ x: 5 }}
          >
            <span>View all projects</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
