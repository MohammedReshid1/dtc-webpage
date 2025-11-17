"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useSoundEffects } from "./sound-effects"

interface InteractiveButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  icon?: ReactNode
  disabled?: boolean
}

export default function InteractiveButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
}: InteractiveButtonProps) {
  const { playSound } = useSoundEffects()

  const baseStyles = "relative rounded font-medium transition-all flex items-center justify-center font-mono terminal-border"

  const variantStyles = {
    primary: "bg-primary/10 text-primary border-primary hover:bg-primary/20 box-glow-green",
    secondary: "bg-secondary/10 text-secondary border-secondary hover:bg-secondary/20 box-glow-amber",
    outline: "bg-transparent border-accent text-accent hover:bg-accent/10 box-glow-cyan",
  }

  const sizeStyles = {
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-base px-6 py-3 gap-3",
    lg: "text-lg px-8 py-4 gap-4",
  }

  const handleClick = () => {
    if (!disabled && onClick) {
      playSound("click")
      onClick()
    }
  }

  const handleMouseEnter = () => {
    if (!disabled) {
      playSound("hover")
    }
  }

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      whileHover={disabled ? {} : { scale: 1.02, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      disabled={disabled}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>

      {/* Terminal glow effect */}
      {!disabled && (
        <motion.div
          className={`absolute inset-0 -z-10 rounded blur-lg transition-opacity ${
            variant === 'primary' ? 'bg-primary/30' :
            variant === 'secondary' ? 'bg-secondary/30' :
            'bg-accent/30'
          }`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.6 }}
        />
      )}
    </motion.button>
  )
}
