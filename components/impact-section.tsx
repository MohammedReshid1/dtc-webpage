"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Award, Users, Code, Globe } from "lucide-react"
import Counter from "./counter"
import InteractiveButton from "./interactive-button"
import Tooltip from "./tooltip"

export default function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: 500,
      label: "Active Members",
      tooltip: "Students and professionals actively participating in club activities",
    },
    {
      icon: <Code className="h-8 w-8" />,
      value: 42,
      label: "Projects Completed",
      tooltip: "Successful projects delivered by our members",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: 15,
      label: "Awards Won",
      tooltip: "National and international recognition for our innovative work",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: 28,
      label: "Partner Organizations",
      tooltip: "Companies and institutions collaborating with Dablie Tech Club",
    },
  ]

  const impactAreas = [
    {
      title: "Education",
      description: "Providing free coding workshops and mentorship programs to over 1,000 students annually.",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Innovation",
      description:
        "Developing cutting-edge solutions for real-world problems through hackathons and research projects.",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "Community",
      description: "Building an inclusive tech ecosystem that supports diversity and collaboration in the industry.",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-amber-500 to-orange-400",
    },
  ]

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <motion.div style={{ opacity }} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Our Impact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into reality and making a difference in the tech community and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Tooltip key={index} content={stat.tooltip}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                  <Counter end={stat.value} />
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            </Tooltip>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div style={{ y }} className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Making a Difference</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Dablie Tech Club, we believe in the power of technology to create positive change. Our members work on
              projects that address real-world challenges and contribute to a better future.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Sustainable technology solutions",
                "Digital inclusion initiatives",
                "STEM education programs",
                "Open-source contributions",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>

            <InteractiveButton variant="primary" size="md">
              Learn More About Our Impact
            </InteractiveButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative order-1 md:order-2"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Dablie Tech Club Impact"
                className="w-full h-auto"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="text-sm font-medium mb-2">Featured Project</div>
                  <h4 className="text-xl font-bold mb-1">Smart City Initiative</h4>
                  <p className="text-sm text-white/80">Improving urban living through IoT and data analytics</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-200 dark:bg-purple-900/30 rounded-full opacity-50 z-0"></div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Areas of Impact</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="p-6">
                <div className={`w-12 h-1 bg-gradient-to-r ${area.color} mb-4`}></div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{area.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{area.description}</p>

                <motion.a
                  href="#"
                  className="inline-block text-purple-600 dark:text-purple-400 font-medium"
                  whileHover={{ x: 5 }}
                >
                  Learn more
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
