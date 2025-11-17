"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, User } from "lucide-react"
import { useSoundEffects } from "./sound-effects"

export default function MemberSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { playSound } = useSoundEffects()

  const members = [
    {
      name: "alex_rivera",
      role: "ai_research_lead",
      bio: "Leads AI research team focusing on ethical AI solutions for healthcare and education. Background in machine learning and cognitive science.",
      achievements: [
        "published_3_papers",
        "won_national_ai_comp",
        "mentored_12_members",
      ],
      color: "primary"
    },
    {
      name: "priya_sharma",
      role: "fullstack_developer",
      bio: "Specializes in scalable web applications. Work on Community Learning Hub helped hundreds of students access quality educational resources.",
      achievements: [
        "developed_5_projects",
        "created_onboarding_program",
        "active_oss_contributor",
      ],
      color: "secondary"
    },
    {
      name: "jordan_chen",
      role: "ux_ui_design_lead",
      bio: "Brings creativity and user-centered thinking to all Dablie projects. Design work recognized for accessibility and innovation.",
      achievements: [
        "redesigned_brand_identity",
        "led_3_ux_research_studies",
        "mentored_8_design_interns"
      ],
      color: "accent"
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
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="font-mono text-sm text-muted-foreground"># SECTION_06</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="terminal-prompt"></span>members --spotlight
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            {'// '}Meet our outstanding community members
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`
                terminal-border bg-card/50 backdrop-blur-sm rounded p-8 md:p-12
                ${members[activeIndex].color === 'primary' ? 'hover:box-glow-green' : ''}
                ${members[activeIndex].color === 'secondary' ? 'hover:box-glow-amber' : ''}
                ${members[activeIndex].color === 'accent' ? 'hover:box-glow-cyan' : ''}
              `}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-full terminal-border ${
                  members[activeIndex].color === 'primary' ? 'bg-primary/10 text-primary border-primary/50' :
                  members[activeIndex].color === 'secondary' ? 'bg-secondary/10 text-secondary border-secondary/50' :
                  'bg-accent/10 text-accent border-accent/50'
                }`}>
                  <User className="h-8 w-8" />
                </div>
                <div>
                  <h3 className={`text-3xl font-bold font-mono ${
                    members[activeIndex].color === 'primary' ? 'text-primary terminal-glow' :
                    members[activeIndex].color === 'secondary' ? 'text-secondary amber-glow' :
                    'text-accent cyan-glow'
                  }`}>
                    {members[activeIndex].name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono mt-1">
                    {members[activeIndex].role}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {members[activeIndex].bio}
              </p>

              <div className="space-y-3 mb-8">
                <div className={`text-sm font-mono font-bold mb-3 ${
                  members[activeIndex].color === 'primary' ? 'text-primary' :
                  members[activeIndex].color === 'secondary' ? 'text-secondary' :
                  'text-accent'
                }`}>
                  $ cat achievements.txt
                </div>
                {members[activeIndex].achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-sm font-mono"
                  >
                    <span className={`${
                      members[activeIndex].color === 'primary' ? 'text-primary' :
                      members[activeIndex].color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`}>
                      [✓]
                    </span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </motion.div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <motion.button
                  onClick={handlePrev}
                  className={`p-3 rounded terminal-border transition-all ${
                    members[activeIndex].color === 'primary' ? 'hover:box-glow-green text-primary border-primary/50' :
                    members[activeIndex].color === 'secondary' ? 'hover:box-glow-amber text-secondary border-secondary/50' :
                    'hover:box-glow-cyan text-accent border-accent/50'
                  }`}
                  whileHover={{ scale: 1.05, x: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </motion.button>

                <div className="flex gap-2">
                  {members.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        playSound("click")
                        setActiveIndex(idx)
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === activeIndex
                          ? members[idx].color === 'primary' ? 'bg-primary w-8' :
                            members[idx].color === 'secondary' ? 'bg-secondary w-8' :
                            'bg-accent w-8'
                          : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={handleNext}
                  className={`p-3 rounded terminal-border transition-all ${
                    members[activeIndex].color === 'primary' ? 'hover:box-glow-green text-primary border-primary/50' :
                    members[activeIndex].color === 'secondary' ? 'hover:box-glow-amber text-secondary border-secondary/50' :
                    'hover:box-glow-cyan text-accent border-accent/50'
                  }`}
                  whileHover={{ scale: 1.05, x: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
