"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Lightbulb, Users, Zap, Rocket } from "lucide-react"

export default function WhyJoinSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])

  const reasons = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "learn_and_grow",
      description: "Access workshops, mentorship, and resources to develop your technical and soft skills.",
      color: "primary",
      benefits: [
        "hands_on_workshops",
        "personalized_mentorship",
        "expert_sessions",
        "skill_resources"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "connect_network",
      description: "Build meaningful relationships with peers, mentors, and industry professionals.",
      color: "secondary",
      benefits: [
        "networking_events",
        "industry_connections",
        "alumni_access",
        "collaborative_env"
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "create_innovate",
      description: "Work on real projects that solve problems and make a difference in the world.",
      color: "accent",
      benefits: [
        "hackathons",
        "research_opportunities",
        "innovation_challenges",
        "project_showcases"
      ]
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "launch_career",
      description: "Gain the experience, portfolio, and connections needed to jumpstart your tech career.",
      color: "primary",
      benefits: [
        "portfolio_dev",
        "resume_building",
        "interview_prep",
        "job_opportunities"
      ]
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
            <span className="font-mono text-sm text-muted-foreground"># SECTION_05</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="terminal-prompt"></span>why --join-us
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`
                terminal-border bg-card/50 backdrop-blur-sm rounded p-8
                hover-lift group
                ${reason.color === 'primary' ? 'hover:box-glow-green' : ''}
                ${reason.color === 'secondary' ? 'hover:box-glow-amber' : ''}
                ${reason.color === 'accent' ? 'hover:box-glow-cyan' : ''}
              `}
            >
              <div className={`inline-flex p-3 rounded terminal-border mb-4 ${
                reason.color === 'primary' ? 'bg-primary/10 text-primary border-primary/50' :
                reason.color === 'secondary' ? 'bg-secondary/10 text-secondary border-secondary/50' :
                'bg-accent/10 text-accent border-accent/50'
              } ${
                reason.color === 'primary' ? 'group-hover:terminal-glow' :
                reason.color === 'secondary' ? 'group-hover:amber-glow' :
                'group-hover:cyan-glow'
              }`}>
                {reason.icon}
              </div>

              <h3 className={`text-2xl font-bold mb-3 font-mono ${
                reason.color === 'primary' ? 'text-primary' :
                reason.color === 'secondary' ? 'text-secondary' :
                'text-accent'
              }`}>
                {reason.title}
              </h3>

              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {reason.description}
              </p>

              <div className="space-y-2">
                {reason.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-sm font-mono">
                    <span className={`${
                      reason.color === 'primary' ? 'text-primary' :
                      reason.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`}>
                      →
                    </span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
