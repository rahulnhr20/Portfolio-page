"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, Variants } from "framer-motion"

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"

interface ScrambleTextProps {
    text: string
    className?: string
    delay?: number
    autoStart?: boolean
}

export function ScrambleText({ text, className = "", delay = 0, autoStart = false }: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState("")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })

    useEffect(() => {
        const shouldStart = autoStart || isInView
        if (shouldStart) {
            let interval: NodeJS.Timeout

            const startScramble = () => {
                let iterations = 0
                interval = setInterval(() => {
                    setDisplayText(
                        text
                            .split("")
                            .map((char, index) => {
                                if (index < iterations) {
                                    return text[index]
                                }
                                return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
                            })
                            .join("")
                    )

                    if (iterations >= text.length) {
                        clearInterval(interval)
                    }
                    iterations += 1 / 3

                }, 30)
            }

            if (delay > 0) {
                const timeout = setTimeout(startScramble, delay * 1000)
                // Cleanup timeout if effect re-runs before start
                return () => {
                    clearTimeout(timeout)
                    if (interval) clearInterval(interval)
                }
            } else {
                startScramble()
                return () => clearInterval(interval)
            }
        }
    }, [isInView, text, autoStart, delay])

    return (
        <span ref={ref} className={className}>
            {displayText || text.split('').map(() => '\u00A0').join('')}
        </span>
    )
}

interface FadeInBlockProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export function FadeInBlock({ children, className = "", delay = 0 }: FadeInBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 0.7,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom ease-out
                delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
