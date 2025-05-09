"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Zap, Lightbulb, Users, Rocket, CheckCircle } from "lucide-react"
import InteractiveButton from "./interactive-button"
import Tooltip from "./tooltip"

export default function WhyJoinSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const reasons = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Learn & Grow",
      description: "Access workshops, mentorship, and resources to develop your technical and soft skills.",
      benefits: [
        "Hands-on technical workshops",
        "Personalized mentorship",
        "Industry expert sessions",
        "Skill development resources",
      ],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Connect & Network",
      description: "Build meaningful relationships with peers, mentors, and industry professionals.",
      benefits: ["Networking events", "Industry connections", "Alumni network access", "Collaborative environment"],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Create & Innovate",
      description: "Work on real projects that solve problems and make a difference in the world.",
      benefits: ["Hackathons and competitions", "Research opportunities", "Innovation challenges", "Project showcases"],
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Launch Your Career",
      description: "Gain the experience, portfolio, and connections needed to jumpstart your tech career.",
      benefits: [
        "Portfolio development",
        "Resume building",
        "Interview preparation",
        "Job and internship opportunities",
      ],
    },
  ]

  const testimonials = [
    {
      quote:
        "Joining Dablie was the turning point in my tech journey. The skills and connections I gained helped me land my dream job at a top tech company.",
      name: "Sarah Chen",
      role: "Software Engineer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The collaborative environment at Dablie Tech Club helped me grow not just as a developer, but as a leader and communicator.",
      name: "Marcus Johnson",
      role: "Product Manager",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <motion.div style={{ opacity }} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Why Join Dablie?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how being part of our community can transform your tech journey and open doors to new
            opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Member Benefits</h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <Tooltip key={index} content={reason.benefits.join(" • ")}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="p-5 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                      {reason.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{reason.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{reason.description}</p>
                  </motion.div>
                </Tooltip>
              ))}
            </div>

            <div className="mt-8 text-center">
              <InteractiveButton variant="primary">Apply to Join</InteractiveButton>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Success Stories</h3>

              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3 italic text-sm">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl p-8 shadow-xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
              <p className="mb-6">
                Applications for the Fall 2023 cohort are now open. Join our community of innovators and creators!
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "No prior experience required",
                  "Open to all majors and backgrounds",
                  "Flexible commitment levels",
                  "Supportive learning environment",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              <InteractiveButton variant="secondary" className="w-full">
                Apply Now
              </InteractiveButton>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Have Questions?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Reach out to our team or check out our FAQ page to learn more about Dablie Tech Club and how to get
            involved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <InteractiveButton variant="outline">View FAQ</InteractiveButton>
            <InteractiveButton variant="primary">Contact Us</InteractiveButton>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
