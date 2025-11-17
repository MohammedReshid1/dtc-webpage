"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Sparkles, Network, Rocket } from "lucide-react"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])

  const values = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "innovation",
      tag: "[0x01]",
      description:
        "We push the boundaries of what's possible through creative problem-solving and cutting-edge technology.",
      color: "primary"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "community",
      tag: "[0x02]",
      description:
        "We foster an inclusive environment where diverse perspectives come together to create something greater.",
      color: "secondary"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "excellence",
      tag: "[0x03]",
      description: "We strive for excellence in everything we do, from code quality to user experience design.",
      color: "accent"
    },
  ]

  return (
    <section ref={ref} id="about-us" className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="font-mono text-sm text-muted-foreground"># SECTION_01</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="terminal-prompt"></span>about_us
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            {'// '}A community of passionate technologists, innovators, and creators
            <br />
            {'// '}working together to build the future
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div style={{ y, opacity }} className="relative order-2 md:order-1">
            <div className="relative z-10">
              <div className="terminal-border bg-card/50 backdrop-blur-sm rounded p-8 box-glow-green">
                <div className="flex items-start gap-3 mb-6">
                  <span className="text-primary font-mono text-sm font-bold">$</span>
                  <span className="text-primary font-mono text-sm font-bold terminal-glow">cat mission.txt</span>
                </div>
                <div className="space-y-4 font-mono text-sm md:text-base leading-relaxed">
                  <p className="text-foreground">
                    <span className="text-accent">{'> '}</span>
                    To empower individuals through technology, foster innovation, and build a community where creativity
                    thrives.
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-secondary">{'> '}</span>
                    We believe in the power of collaboration and the impact of technology to transform lives.
                  </p>
                  <div className="flex items-center gap-2 pt-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs text-primary">STATUS: ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary/30 pointer-events-none"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-accent/30 pointer-events-none"></div>
          </motion.div>

          <div className="space-y-6 order-1 md:order-2">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.3 }}
                className={`
                  terminal-border bg-card/30 backdrop-blur-sm p-6 rounded
                  hover-lift cursor-pointer group
                  ${value.color === 'primary' ? 'hover:box-glow-green' : ''}
                  ${value.color === 'secondary' ? 'hover:box-glow-amber' : ''}
                  ${value.color === 'accent' ? 'hover:box-glow-cyan' : ''}
                `}
              >
                <div className="flex gap-4 items-start">
                  <div className={`
                    flex-shrink-0 p-3 rounded terminal-border
                    ${value.color === 'primary' ? 'bg-primary/10 text-primary border-primary/50' : ''}
                    ${value.color === 'secondary' ? 'bg-secondary/10 text-secondary border-secondary/50' : ''}
                    ${value.color === 'accent' ? 'bg-accent/10 text-accent border-accent/50' : ''}
                    ${value.color === 'primary' ? 'group-hover:terminal-glow' : ''}
                    ${value.color === 'secondary' ? 'group-hover:amber-glow' : ''}
                    ${value.color === 'accent' ? 'group-hover:cyan-glow' : ''}
                  `}>
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`
                        text-xs font-mono font-bold
                        ${value.color === 'primary' ? 'text-primary' : ''}
                        ${value.color === 'secondary' ? 'text-secondary' : ''}
                        ${value.color === 'accent' ? 'text-accent' : ''}
                      `}>
                        {value.tag}
                      </span>
                      <h3 className="text-xl font-bold">{value.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="terminal-border bg-card/50 backdrop-blur-sm rounded p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'members', value: '500+', color: 'primary' },
              { label: 'projects', value: '42', color: 'secondary' },
              { label: 'events', value: '15', color: 'accent' },
              { label: 'years', value: '5', color: 'primary' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="group"
              >
                <div className={`
                  text-3xl md:text-4xl font-bold mb-1 font-mono
                  ${stat.color === 'primary' ? 'text-primary group-hover:terminal-glow' : ''}
                  ${stat.color === 'secondary' ? 'text-secondary group-hover:amber-glow' : ''}
                  ${stat.color === 'accent' ? 'text-accent group-hover:cyan-glow' : ''}
                `}>
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
