"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Users, Code, Award, Globe } from "lucide-react"
import Counter from "./counter"

export default function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])

  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: 500,
      label: "active_members",
      color: "primary"
    },
    {
      icon: <Code className="h-6 w-6" />,
      value: 42,
      label: "projects_done",
      color: "secondary"
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: 15,
      label: "awards_won",
      color: "accent"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: 28,
      label: "partners",
      color: "primary"
    },
  ]

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <motion.div style={{ opacity }} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="font-mono text-sm text-muted-foreground"># SECTION_03</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="terminal-prompt"></span>metrics --show-impact
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`
                terminal-border bg-card/50 backdrop-blur-sm rounded p-6 text-center
                hover-lift group cursor-pointer
                ${stat.color === 'primary' ? 'hover:box-glow-green' : ''}
                ${stat.color === 'secondary' ? 'hover:box-glow-amber' : ''}
                ${stat.color === 'accent' ? 'hover:box-glow-cyan' : ''}
              `}
            >
              <div className={`inline-flex p-3 rounded terminal-border mb-4 ${
                stat.color === 'primary' ? 'bg-primary/10 text-primary border-primary/50' :
                stat.color === 'secondary' ? 'bg-secondary/10 text-secondary border-secondary/50' :
                'bg-accent/10 text-accent border-accent/50'
              } ${
                stat.color === 'primary' ? 'group-hover:terminal-glow' :
                stat.color === 'secondary' ? 'group-hover:amber-glow' :
                'group-hover:cyan-glow'
              }`}>
                {stat.icon}
              </div>
              <div className={`text-4xl font-bold mb-2 font-mono ${
                stat.color === 'primary' ? 'text-primary' :
                stat.color === 'secondary' ? 'text-secondary' :
                'text-accent'
              }`}>
                <Counter target={stat.value} suffix="+" />
              </div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="terminal-border bg-card/30 backdrop-blur-sm rounded p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-accent font-mono text-sm font-bold">$</span>
            <span className="text-accent font-mono text-sm font-bold cyan-glow">git log --impact</span>
          </div>
          <div className="space-y-4 font-mono text-sm">
            {[
              { year: '2023', event: 'Global tech conference featured our projects', color: 'primary' },
              { year: '2022', event: 'Reached 100+ active members milestone', color: 'secondary' },
              { year: '2021', event: 'Established 3 industry partnerships', color: 'accent' },
              { year: '2020', event: 'First 48-hour hackathon with 50+ participants', color: 'primary' },
              { year: '2019', event: 'Club founded with 5 passionate members', color: 'secondary' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex gap-4 items-start group"
              >
                <span className={`flex-shrink-0 ${
                  item.color === 'primary' ? 'text-primary' :
                  item.color === 'secondary' ? 'text-secondary' :
                  'text-accent'
                } group-hover:${
                  item.color === 'primary' ? 'terminal-glow' :
                  item.color === 'secondary' ? 'amber-glow' :
                  'cyan-glow'
                }`}>
                  [{item.year}]
                </span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.event}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
