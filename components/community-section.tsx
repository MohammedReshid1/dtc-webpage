"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MessageSquare } from "lucide-react"

export default function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])

  const testimonials = [
    {
      quote:
        "Joining Dablie Tech Club was the best decision I made during my college years. The community, the projects, and the growth opportunities are unmatched.",
      author: "Alex Chen",
      role: "Software Engineer @ Google",
      color: "primary"
    },
    {
      quote:
        "The collaborative environment at Dablie helped me develop not just technical skills, but also leadership and communication abilities that are invaluable in my career.",
      author: "Maya Patel",
      role: "Product Manager @ Microsoft",
      color: "secondary"
    },
    {
      quote:
        "From hackathons to workshops, every experience at Dablie has contributed to my growth as a developer and as a person. The friendships I made here will last a lifetime.",
      author: "Jordan Lee",
      role: "Founder @ TechStart",
      color: "accent"
    },
  ]

  return (
    <section ref={ref} id="community" className="py-20 relative overflow-hidden">
      <motion.div style={{ opacity }} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="font-mono text-sm text-muted-foreground"># SECTION_04</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="terminal-prompt"></span>community_voices
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            {'// '}What our members say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`
                terminal-border bg-card/50 backdrop-blur-sm rounded p-6
                hover-lift
                ${testimonial.color === 'primary' ? 'hover:box-glow-green' : ''}
                ${testimonial.color === 'secondary' ? 'hover:box-glow-amber' : ''}
                ${testimonial.color === 'accent' ? 'hover:box-glow-cyan' : ''}
              `}
            >
              <MessageSquare className={`h-8 w-8 mb-4 ${
                testimonial.color === 'primary' ? 'text-primary' :
                testimonial.color === 'secondary' ? 'text-secondary' :
                'text-accent'
              }`} />
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className={`font-bold font-mono ${
                  testimonial.color === 'primary' ? 'text-primary' :
                  testimonial.color === 'secondary' ? 'text-secondary' :
                  'text-accent'
                }`}>
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
