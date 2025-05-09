"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Lightbulb, Users, Target } from "lucide-react"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description:
        "We push the boundaries of what's possible through creative problem-solving and cutting-edge technology.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description:
        "We foster an inclusive environment where diverse perspectives come together to create something greater.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to user experience design.",
    },
  ]

  return (
    <section ref={ref} id="about-us" className="min-h-screen py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Us</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dablie Tech Club is a community of passionate technologists, innovators, and creators working together to
            build the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y, opacity }} className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg">
                    To empower individuals through technology, foster innovation, and build a community where creativity
                    thrives. We believe in the power of collaboration and the impact of technology to transform lives.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-200 rounded-full opacity-50 z-0"></div>
          </motion.div>

          <div className="space-y-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex gap-6 items-start p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 p-3 bg-purple-100 text-purple-600 rounded-full">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
