"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Send } from "lucide-react"

export default function JoinSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const benefits = [
    "workshops_hackathons_talks",
    "industry_mentorship",
    "real_world_projects",
    "professional_network",
    "leadership_development",
  ]

  return (
    <section id="join" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="font-mono text-sm text-muted-foreground"># SECTION_07</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="terminal-prompt"></span>join_community
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            {'// '}Become part of something bigger
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="terminal-border bg-card/50 backdrop-blur-sm rounded p-8"
          >
            {!isSubmitted ? (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-primary font-mono text-sm font-bold">$</span>
                  <span className="text-primary font-mono text-sm font-bold terminal-glow">submit_application.sh</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-mono mb-2 text-muted-foreground">
                      name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted/50 border terminal-border rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-mono text-sm"
                      placeholder="your_name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono mb-2 text-muted-foreground">
                      email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted/50 border terminal-border rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-mono text-sm"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono mb-2 text-muted-foreground">
                      interest:
                    </label>
                    <select
                      name="interest"
                      value={formState.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted/50 border terminal-border rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-mono text-sm"
                    >
                      <option value="">--select_area</option>
                      <option value="development">development</option>
                      <option value="design">design</option>
                      <option value="ai_ml">ai_ml</option>
                      <option value="hardware">hardware</option>
                      <option value="other">other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-mono mb-2 text-muted-foreground">
                      message:
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-muted/50 border terminal-border rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-mono text-sm resize-none"
                      placeholder="tell_us_about_yourself..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary/10 text-primary rounded font-mono terminal-border border-primary hover:bg-primary/20 transition-all box-glow-green flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="h-4 w-4" />
                    ./submit
                  </motion.button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="h-16 w-16 text-primary terminal-glow mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-3 text-primary font-mono">
                  application_received
                </h3>
                <p className="text-muted-foreground font-mono text-sm">
                  {'// '}We'll get back to you soon!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <div className="terminal-border bg-card/30 backdrop-blur-sm rounded p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-accent font-mono text-sm font-bold">$</span>
                <span className="text-accent font-mono text-sm font-bold cyan-glow">cat benefits.txt</span>
              </div>
              <div className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: false }}
                    className="flex items-center gap-3 text-sm font-mono group"
                  >
                    <span className="text-primary group-hover:terminal-glow transition-all">[✓]</span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="terminal-border bg-card/30 backdrop-blur-sm rounded p-6">
              <div className="text-sm font-mono space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">applications: <span className="text-primary">open</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">response_time: <span className="text-secondary">~3 days</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">acceptance_rate: <span className="text-accent">high</span></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
