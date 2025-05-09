"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

type SoundType = "hover" | "click" | "success" | "transition"

interface SoundContextType {
  playSound: (type: SoundType) => void
  isMuted: boolean
  toggleMute: () => void
}

const SoundContext = createContext<SoundContextType | null>(null)

export function useSoundEffects() {
  const context = useContext(SoundContext)
  if (!context) {
    throw new Error("useSoundEffects must be used within a SoundProvider")
  }
  return context
}

interface SoundProviderProps {
  children: ReactNode
}

export function SoundProvider({ children }: SoundProviderProps) {
  const [isMuted, setIsMuted] = useState(true) // Default to muted
  const [audioElements, setAudioElements] = useState<Record<SoundType, HTMLAudioElement | null>>({
    hover: null,
    click: null,
    success: null,
    transition: null,
  })

  useEffect(() => {
    // Only create audio elements on client side
    if (typeof window !== "undefined") {
      setAudioElements({
        hover: new Audio("/sounds/hover.mp3"),
        click: new Audio("/sounds/click.mp3"),
        success: new Audio("/sounds/success.mp3"),
        transition: new Audio("/sounds/transition.mp3"),
      })
    }
  }, [])

  const playSound = useCallback(
    (type: SoundType) => {
      if (isMuted || !audioElements[type]) return

      // Reset the audio to the beginning if it's already playing
      audioElements[type]!.currentTime = 0

      // Play the sound
      audioElements[type]!.play().catch((err) => {
        // Handle autoplay restrictions
        console.log("Audio playback was prevented:", err)
      })
    },
    [audioElements, isMuted],
  )

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev)
  }, [])

  return <SoundContext.Provider value={{ playSound, isMuted, toggleMute }}>{children}</SoundContext.Provider>
}
