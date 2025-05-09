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

  const baseStyles = "relative rounded-lg font-medium transition-all flex items-center justify-center"

  const variantStyles = {
    primary: "bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-700 hover:to-cyan-600",
    secondary: "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20",
    outline: "bg-transparent border-2 border-purple-500 text-purple-500 dark:text-purple-400 hover:bg-purple-500/10",
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
      whileHover={disabled ? {} : { scale: 1.03, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      disabled={disabled}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>

      {/* Glow effect for primary buttons */}
      {variant === "primary" && !disabled && (
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg opacity-0 blur-xl transition-opacity"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.5 }}
        />
      )}
    </motion.button>
  )
}
