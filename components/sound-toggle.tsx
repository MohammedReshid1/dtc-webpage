"use client"

import { Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"
import { useSoundEffects } from "./sound-effects"

export default function SoundToggle() {
  const { isMuted, toggleMute, playSound } = useSoundEffects()

  const handleClick = () => {
    toggleMute()
    if (isMuted) {
      // Will play sound after unmuting
      setTimeout(() => playSound("click"), 10)
    } else {
      playSound("click")
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed top-6 right-20 z-50 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? <VolumeX className="h-5 w-5 text-gray-400" /> : <Volume2 className="h-5 w-5 text-green-400" />}
    </motion.button>
  )
}
