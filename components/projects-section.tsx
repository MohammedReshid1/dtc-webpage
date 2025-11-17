"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github, FolderGit2, Activity } from "lucide-react"

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])

  const projects = [
    {
      title: "ai_research_platform",
      description:
        "A collaborative platform for AI researchers to share datasets, models, and findings. Built with Next.js, TensorFlow.js, and a custom visualization engine.",
      progress: 85,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["ai", "ml", "nextjs"],
      status: "active",
      color: "primary"
    },
    {
      title: "smart_campus_iot",
      description:
        "IoT-powered campus management system that optimizes energy usage, monitors air quality, and enhances security through a network of connected devices.",
      progress: 70,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["iot", "react", "nodejs"],
      status: "in_dev",
      color: "secondary"
    },
    {
      title: "community_learning_hub",
      description:
        "An open-source learning platform that connects students with mentors, provides interactive coding challenges, and tracks learning progress.",
      progress: 90,
      image: "/placeholder.svg?height=400&width=600",
      tags: ["education", "typescript", "graphql"],
      status: "beta",
      color: "accent"
    },
  ]

  return (
    <section ref={ref} id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <motion.div style={{ opacity }} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="font-mono text-sm text-muted-foreground"># SECTION_02</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="terminal-prompt"></span>ls projects/
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            {'// '}Innovative projects pushing boundaries
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project Selector */}
          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              {projects.map((project, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`
                    px-4 py-2 rounded terminal-border font-mono text-sm transition-all
                    ${activeProject === index
                      ? project.color === 'primary' ? 'bg-primary/20 text-primary border-primary box-glow-green'
                      : project.color === 'secondary' ? 'bg-secondary/20 text-secondary border-secondary box-glow-amber'
                      : 'bg-accent/20 text-accent border-accent box-glow-cyan'
                      : 'bg-card/30 text-muted-foreground border-border hover:border-primary/50'
                    }
                  `}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  [{index + 1}]
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
                className={`
                  terminal-border bg-card/50 backdrop-blur-sm rounded p-8
                  ${projects[activeProject].color === 'primary' ? 'hover:box-glow-green' : ''}
                  ${projects[activeProject].color === 'secondary' ? 'hover:box-glow-amber' : ''}
                  ${projects[activeProject].color === 'accent' ? 'hover:box-glow-cyan' : ''}
                `}
              >
                {/* Terminal header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <FolderGit2 className={`h-5 w-5 ${
                    projects[activeProject].color === 'primary' ? 'text-primary' :
                    projects[activeProject].color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  }`} />
                  <span className="font-mono text-sm text-muted-foreground">
                    ~/projects/
                  </span>
                </div>

                <h3 className={`text-2xl font-bold mb-4 font-mono ${
                  projects[activeProject].color === 'primary' ? 'text-primary terminal-glow' :
                  projects[activeProject].color === 'secondary' ? 'text-secondary amber-glow' :
                  'text-accent cyan-glow'
                }`}>
                  {projects[activeProject].title}
                </h3>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {projects[activeProject].description}
                </p>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2 font-mono text-xs">
                    <span className="text-muted-foreground">progress</span>
                    <span className={`${
                      projects[activeProject].color === 'primary' ? 'text-primary' :
                      projects[activeProject].color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`}>
                      {projects[activeProject].progress}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-sm overflow-hidden terminal-border">
                    <motion.div
                      className={`h-full ${
                        projects[activeProject].color === 'primary' ? 'bg-primary' :
                        projects[activeProject].color === 'secondary' ? 'bg-secondary' :
                        'bg-accent'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${projects[activeProject].progress}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[activeProject].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted rounded terminal-border text-xs font-mono code-style"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status */}
                <div className="flex items-center gap-2 mb-6">
                  <Activity className={`h-4 w-4 ${
                    projects[activeProject].color === 'primary' ? 'text-primary' :
                    projects[activeProject].color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  }`} />
                  <span className="font-mono text-xs text-muted-foreground">
                    status: <span className={`${
                      projects[activeProject].color === 'primary' ? 'text-primary' :
                      projects[activeProject].color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`}>
                      {projects[activeProject].status}
                    </span>
                  </span>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className={`flex items-center gap-2 text-sm font-mono transition-colors ${
                      projects[activeProject].color === 'primary' ? 'text-primary hover:terminal-glow' :
                      projects[activeProject].color === 'secondary' ? 'text-secondary hover:amber-glow' :
                      'text-accent hover:cyan-glow'
                    }`}
                    whileHover={{ x: 3 }}
                  >
                    <Github className="h-4 w-4" />
                    <span>./code</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    className={`flex items-center gap-2 text-sm font-mono transition-colors ${
                      projects[activeProject].color === 'primary' ? 'text-primary hover:terminal-glow' :
                      projects[activeProject].color === 'secondary' ? 'text-secondary hover:amber-glow' :
                      'text-accent hover:cyan-glow'
                    }`}
                    whileHover={{ x: 3 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>./demo</span>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="terminal-border rounded overflow-hidden bg-card/30 backdrop-blur-sm">
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
                      className="w-full h-auto rounded"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Decorative corners */}
            <div className={`absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 pointer-events-none ${
              projects[activeProject].color === 'primary' ? 'border-primary/30' :
              projects[activeProject].color === 'secondary' ? 'border-secondary/30' :
              'border-accent/30'
            }`}></div>
            <div className={`absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 pointer-events-none ${
              projects[activeProject].color === 'primary' ? 'border-primary/30' :
              projects[activeProject].color === 'secondary' ? 'border-secondary/30' :
              'border-accent/30'
            }`}></div>
          </motion.div>
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:terminal-glow transition-all text-lg font-mono group"
            whileHover={{ x: 5 }}
          >
            <span>$ cd projects && ls -la</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
