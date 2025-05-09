"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Quote } from "lucide-react"

export default function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const milestones = [
    { year: "2019", title: "Club Founded", description: "Started with just 5 members in a small campus room" },
    {
      year: "2020",
      title: "First Hackathon",
      description: "Organized our first 48-hour hackathon with 50+ participants",
    },
    {
      year: "2021",
      title: "Industry Partnerships",
      description: "Established partnerships with 3 leading tech companies",
    },
    {
      year: "2022",
      title: "Community Growth",
      description: "Reached 100+ active members and launched mentorship program",
    },
    { year: "2023", title: "Global Recognition", description: "Projects featured in international tech conferences" },
  ]

  const testimonials = [
    {
      quote:
        "Joining Dablie Tech Club was the best decision I made during my college years. The community, the projects, and the growth opportunities are unmatched.",
      author: "Alex Chen",
      role: "Software Engineer at Google",
    },
    {
      quote:
        "The collaborative environment at Dablie helped me develop not just technical skills, but also leadership and communication abilities that are invaluable in my career.",
      author: "Maya Patel",
      role: "Product Manager at Microsoft",
    },
    {
      quote:
        "From a beginner with no coding experience to launching my own startup, Dablie Tech Club provided the support, resources, and connections I needed to succeed.",
      author: "Jordan Lee",
      role: "Founder & CTO at TechStart",
    },
  ]

  return (
    <section
      ref={ref}
      className="min-h-screen py-20 bg-gradient-to-b from-purple-900 to-indigo-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>

      <motion.div style={{ opacity }} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Community</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            We're more than just a tech club – we're a family of innovators, dreamers, and doers who support each other
            on our journey to create amazing things.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div style={{ y: y1 }}>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                <Quote className="h-5 w-5" />
              </span>
              Member Stories
            </h3>

            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <p className="text-purple-100 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-purple-300">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }}>
            <h3 className="text-2xl font-bold mb-8">Our Journey</h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-purple-500"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                      <div className="text-pink-400 font-bold mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                      <p className="text-purple-200">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Club Culture</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Innovation", "Collaboration", "Learning", "Fun"].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl aspect-square flex flex-col items-center justify-center"
              >
                <div className="text-5xl mb-2">{["🚀", "🤝", "📚", "🎮"][index]}</div>
                <div className="font-bold">{value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
