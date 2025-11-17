"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail, MapPin, Terminal } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub", color: "primary" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter", color: "accent" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn", color: "secondary" },
    { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email", color: "primary" },
  ]

  const footerLinks = [
    { title: "about", href: "#about-us" },
    { title: "projects", href: "#projects" },
    { title: "events", href: "#" },
    { title: "community", href: "#community" },
    { title: "join", href: "#join" },
  ]

  return (
    <footer className="relative overflow-hidden pt-20 pb-8 border-t border-primary/20">
      {/* Terminal status bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="h-6 w-6 text-primary animate-flicker" />
                <h3 className="text-2xl font-bold">
                  <span className="text-primary terminal-glow">Dablie</span>
                  <span className="text-foreground"> Tech</span>
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6 font-mono leading-relaxed">
                {'// '}A community of innovators, creators, and tech enthusiasts building the future together.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className={`
                      w-10 h-10 rounded terminal-border flex items-center justify-center
                      transition-all hover-lift
                      ${link.color === 'primary' ? 'border-primary/50 text-primary hover:box-glow-green' : ''}
                      ${link.color === 'secondary' ? 'border-secondary/50 text-secondary hover:box-glow-amber' : ''}
                      ${link.color === 'accent' ? 'border-accent/50 text-accent hover:box-glow-cyan' : ''}
                    `}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="text-secondary">[</span>
                quick_links
                <span className="text-secondary">]</span>
              </h4>
              <ul className="space-y-3 font-mono text-sm">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="text-accent">[</span>
                contact
                <span className="text-accent">]</span>
              </h4>
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex items-start gap-3 group">
                  <Mail className="h-4 w-4 text-accent mt-0.5 group-hover:cyan-glow transition-all" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    hello@dablietech.com
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <MapPin className="h-4 w-4 text-accent mt-0.5 group-hover:cyan-glow transition-all" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors text-xs leading-relaxed">
                    Tech Innovation Center<br />
                    123 Digital Avenue<br />
                    San Francisco, CA 94107
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="text-secondary">[</span>
                newsletter
                <span className="text-secondary">]</span>
              </h4>
              <p className="text-muted-foreground text-sm mb-4 font-mono">
                {'// '}Get updates on events and projects
              </p>
              <form className="space-y-3">
                <div className="terminal-border rounded bg-card/30">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-transparent outline-none text-sm font-mono text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-4 py-3 bg-primary/10 text-primary rounded font-mono text-sm terminal-border border-primary hover:bg-primary/20 transition-all box-glow-green"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ./subscribe.sh
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm font-mono">
              <span className="text-primary">©</span> {currentYear} Dablie Tech Club
              <span className="text-muted-foreground/50"> | </span>
              <span className="text-accent">v2.5.0</span>
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>system.status: <span className="text-primary">online</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner brackets */}
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/20 pointer-events-none"></div>
      <div className="absolute top-20 left-4 w-16 h-16 border-l-2 border-t-2 border-accent/20 pointer-events-none"></div>
    </footer>
  )
}
