"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X, ArrowRight, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Trigger line drawing animation on load
    setIsLoaded(true)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Animated Background Lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* More Floating Particles */}
        <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-violet-400/60 rounded-full animate-particle-float"></div>
        <div
          className="absolute top-1/3 right-1/6 w-2 h-2 bg-cyan-400/60 rounded-full animate-particle-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/6 w-2.5 h-2.5 bg-fuchsia-400/60 rounded-full animate-particle-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-particle-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-2.5 h-2.5 bg-purple-400/60 rounded-full animate-particle-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/4 right-2/3 w-2 h-2 bg-indigo-400/60 rounded-full animate-particle-float"
          style={{ animationDelay: "5s" }}
        ></div>

        {/* Massive SVG Line Network */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Main Vertical Grid Lines */}
          <line
            x1="10%"
            y1="0"
            x2="10%"
            y2="100%"
            stroke="url(#gradientVivid1)"
            strokeWidth="3"
            className={`animate-line-pulse ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="20%"
            y1="0"
            x2="20%"
            y2="100%"
            stroke="url(#gradientVivid2)"
            strokeWidth="4"
            className={`animate-line-glow ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="30%"
            y1="0"
            x2="30%"
            y2="100%"
            stroke="url(#gradientVivid3)"
            strokeWidth="3"
            className={`animate-line-pulse ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="40%"
            y1="0"
            x2="40%"
            y2="100%"
            stroke="url(#gradientVivid4)"
            strokeWidth="2"
            className={`animate-line-float ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="url(#gradientVivid5)"
            strokeWidth="5"
            className={`animate-line-pulse ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="60%"
            y1="0"
            x2="60%"
            y2="100%"
            stroke="url(#gradientVivid6)"
            strokeWidth="3"
            className={`animate-line-glow ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="70%"
            y1="0"
            x2="70%"
            y2="100%"
            stroke="url(#gradientVivid7)"
            strokeWidth="4"
            className={`animate-line-float ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="80%"
            y1="0"
            x2="80%"
            y2="100%"
            stroke="url(#gradientVivid8)"
            strokeWidth="3"
            className={`animate-line-pulse ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="90%"
            y1="0"
            x2="90%"
            y2="100%"
            stroke="url(#gradientVivid9)"
            strokeWidth="2"
            className={`animate-line-glow ${isLoaded ? "animate-draw-line" : ""}`}
          />

          {/* Horizontal Grid Lines */}
          <line
            x1="0"
            y1="10%"
            x2="100%"
            y2="10%"
            stroke="url(#gradientHoriz1)"
            strokeWidth="3"
            className={`animate-line-float ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="0"
            y1="20%"
            x2="100%"
            y2="20%"
            stroke="url(#gradientHoriz2)"
            strokeWidth="4"
            className={`animate-line-pulse ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="0"
            y1="30%"
            x2="100%"
            y2="30%"
            stroke="url(#gradientHoriz3)"
            strokeWidth="2"
            className={`animate-line-glow ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="0"
            y1="40%"
            x2="100%"
            y2="40%"
            stroke="url(#gradientHoriz4)"
            strokeWidth="3"
            className={`animate-line-float ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="url(#gradientHoriz5)"
            strokeWidth="5"
            className={`animate-line-pulse ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="0"
            y1="60%"
            x2="100%"
            y2="60%"
            stroke="url(#gradientHoriz6)"
            strokeWidth="3"
            className={`animate-line-glow ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="0"
            y1="70%"
            x2="100%"
            y2="70%"
            stroke="url(#gradientHoriz7)"
            strokeWidth="4"
            className={`animate-line-float ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="0"
            y1="80%"
            x2="100%"
            y2="80%"
            stroke="url(#gradientHoriz8)"
            strokeWidth="2"
            className={`animate-line-pulse ${isLoaded ? "animate-draw-line" : ""}`}
          />
          <line
            x1="0"
            y1="90%"
            x2="100%"
            y2="90%"
            stroke="url(#gradientHoriz9)"
            strokeWidth="3"
            className={`animate-line-glow ${isLoaded ? "animate-draw-line" : ""}`}
          />

          {/* Diagonal Lines Network */}
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="url(#gradientDiag1)"
            strokeWidth="4"
            strokeDasharray="25 15"
            className="animate-dash-move"
          />
          <line
            x1="100%"
            y1="0"
            x2="0"
            y2="100%"
            stroke="url(#gradientDiag2)"
            strokeWidth="3"
            strokeDasharray="20 10"
            className="animate-dash-move"
          />
          <line
            x1="0"
            y1="25%"
            x2="75%"
            y2="100%"
            stroke="url(#gradientDiag3)"
            strokeWidth="3"
            className="animate-line-glow"
          />
          <line
            x1="25%"
            y1="0"
            x2="100%"
            y2="75%"
            stroke="url(#gradientDiag4)"
            strokeWidth="2"
            className="animate-line-pulse"
          />
          <line
            x1="0"
            y1="75%"
            x2="25%"
            y2="100%"
            stroke="url(#gradientDiag5)"
            strokeWidth="4"
            className="animate-line-float"
          />
          <line
            x1="75%"
            y1="0"
            x2="100%"
            y2="25%"
            stroke="url(#gradientDiag6)"
            strokeWidth="3"
            className="animate-line-glow"
          />

          {/* Complex Curved Paths */}
          <path
            d="M 0 20% Q 25% 0% 50% 20% T 100% 20%"
            stroke="url(#gradientCurve1)"
            strokeWidth="4"
            fill="none"
            className="animate-line-glow"
          >
            <animate
              attributeName="d"
              values="M 0 20% Q 25% 0% 50% 20% T 100% 20%;M 0 20% Q 25% 40% 50% 20% T 100% 20%;M 0 20% Q 25% 0% 50% 20% T 100% 20%"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M 0 40% Q 50% 20% 100% 40%"
            stroke="url(#gradientCurve2)"
            strokeWidth="5"
            fill="none"
            className="animate-line-pulse"
          >
            <animate
              attributeName="d"
              values="M 0 40% Q 50% 20% 100% 40%;M 0 40% Q 50% 60% 100% 40%;M 0 40% Q 50% 20% 100% 40%"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M 0 60% Q 33% 80% 66% 60% Q 100% 40% 100% 60%"
            stroke="url(#gradientCurve3)"
            strokeWidth="3"
            fill="none"
            className="animate-line-float"
          >
            <animate
              attributeName="d"
              values="M 0 60% Q 33% 80% 66% 60% Q 100% 40% 100% 60%;M 0 60% Q 33% 40% 66% 60% Q 100% 80% 100% 60%;M 0 60% Q 33% 80% 66% 60% Q 100% 40% 100% 60%"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M 0 80% Q 20% 60% 40% 80% Q 60% 100% 80% 80% Q 100% 60% 100% 80%"
            stroke="url(#gradientCurve4)"
            strokeWidth="4"
            fill="none"
            className="animate-line-glow"
          >
            <animate
              attributeName="d"
              values="M 0 80% Q 20% 60% 40% 80% Q 60% 100% 80% 80% Q 100% 60% 100% 80%;M 0 80% Q 20% 100% 40% 80% Q 60% 60% 80% 80% Q 100% 100% 100% 80%;M 0 80% Q 20% 60% 40% 80% Q 60% 100% 80% 80% Q 100% 60% 100% 80%"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>

          {/* Rotating Geometric Shapes */}
          <circle
            cx="15%"
            cy="15%"
            r="60"
            stroke="url(#gradientCircle1)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="15 10"
            className="animate-line-rotate"
          />
          <circle
            cx="85%"
            cy="15%"
            r="45"
            stroke="url(#gradientCircle2)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="12 8"
            className="animate-line-rotate"
            style={{ animationDirection: "reverse" }}
          />
          <circle
            cx="15%"
            cy="85%"
            r="50"
            stroke="url(#gradientCircle3)"
            strokeWidth="5"
            fill="none"
            strokeDasharray="20 5"
            className="animate-line-rotate"
          />
          <circle
            cx="85%"
            cy="85%"
            r="40"
            stroke="url(#gradientCircle4)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10 15"
            className="animate-line-rotate"
            style={{ animationDirection: "reverse" }}
          />

          {/* Pentagon and Hexagon shapes */}
          <polygon
            points="50,10 61,35 85,35 67,57 73,82 50,70 27,82 33,57 15,35 39,35"
            stroke="url(#gradientPoly1)"
            strokeWidth="3"
            fill="none"
            className="animate-line-pulse"
            transform="scale(0.8) translate(200, 100)"
          />
          <polygon
            points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
            stroke="url(#gradientPoly2)"
            strokeWidth="4"
            fill="none"
            className="animate-line-glow"
            transform="scale(0.6) translate(800, 600)"
          />

          {/* Spiraling Lines */}
          <path
            d="M 25% 25% Q 75% 25% 75% 75% Q 25% 75% 25% 25%"
            stroke="url(#gradientSpiral1)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="30 10"
            className="animate-dash-move"
          />
          <path
            d="M 75% 75% Q 25% 75% 25% 25% Q 75% 25% 75% 75%"
            stroke="url(#gradientSpiral2)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="25 15"
            className="animate-dash-move"
            style={{ animationDirection: "reverse" }}
          />

          {/* Vivid Gradients with Intense Colors */}
          <defs>
            {/* Vertical Gradients */}
            <linearGradient id="gradientVivid1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(168, 85, 247, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(168, 85, 247, 0.8);rgba(59, 130, 246, 0.9);rgba(168, 85, 247, 0.8)"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="rgba(168, 85, 247, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(168, 85, 247, 0.8);rgba(59, 130, 246, 0.9);rgba(168, 85, 247, 0.8)"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientVivid2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="rgba(34, 211, 238, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(34, 211, 238, 0.9);rgba(236, 72, 153, 0.8);rgba(34, 211, 238, 0.9)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="80%" stopColor="rgba(34, 211, 238, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(34, 211, 238, 0.9);rgba(236, 72, 153, 0.8);rgba(34, 211, 238, 0.9)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientVivid3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor="rgba(139, 92, 246, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(139, 92, 246, 0.85);rgba(56, 189, 248, 0.9);rgba(139, 92, 246, 0.85)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="75%" stopColor="rgba(139, 92, 246, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(139, 92, 246, 0.85);rgba(56, 189, 248, 0.9);rgba(139, 92, 246, 0.85)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientVivid4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(147, 51, 234, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(147, 51, 234, 0.8);rgba(14, 165, 233, 0.9);rgba(147, 51, 234, 0.8)"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="rgba(147, 51, 234, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(147, 51, 234, 0.8);rgba(14, 165, 233, 0.9);rgba(147, 51, 234, 0.8)"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientVivid5" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="rgba(219, 39, 119, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(219, 39, 119, 0.9);rgba(59, 130, 246, 0.85);rgba(219, 39, 119, 0.9)"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.95)">
                <animate
                  attributeName="stop-color"
                  values="rgba(168, 85, 247, 0.95);rgba(34, 211, 238, 0.9);rgba(168, 85, 247, 0.95)"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="80%" stopColor="rgba(219, 39, 119, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(219, 39, 119, 0.9);rgba(59, 130, 246, 0.85);rgba(219, 39, 119, 0.9)"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientVivid6" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(79, 70, 229, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(79, 70, 229, 0.8);rgba(236, 72, 153, 0.9);rgba(79, 70, 229, 0.8)"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="rgba(79, 70, 229, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(79, 70, 229, 0.8);rgba(236, 72, 153, 0.9);rgba(79, 70, 229, 0.8)"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientVivid7" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor="rgba(16, 185, 129, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(16, 185, 129, 0.8);rgba(139, 92, 246, 0.9);rgba(16, 185, 129, 0.8)"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="75%" stopColor="rgba(16, 185, 129, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(16, 185, 129, 0.8);rgba(139, 92, 246, 0.9);rgba(16, 185, 129, 0.8)"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientVivid8" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(245, 101, 101, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(245, 101, 101, 0.85);rgba(34, 211, 238, 0.9);rgba(245, 101, 101, 0.85)"
                  dur="3.8s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="rgba(245, 101, 101, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(245, 101, 101, 0.85);rgba(34, 211, 238, 0.9);rgba(245, 101, 101, 0.85)"
                  dur="3.8s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientVivid9" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(251, 146, 60, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(251, 146, 60, 0.8);rgba(168, 85, 247, 0.9);rgba(251, 146, 60, 0.8)"
                  dur="5.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="rgba(251, 146, 60, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(251, 146, 60, 0.8);rgba(168, 85, 247, 0.9);rgba(251, 146, 60, 0.8)"
                  dur="5.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Horizontal Gradients */}
            <linearGradient id="gradientHoriz1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor="rgba(168, 85, 247, 0.7)">
                <animate
                  attributeName="stop-color"
                  values="rgba(168, 85, 247, 0.7);rgba(34, 211, 238, 0.8);rgba(168, 85, 247, 0.7)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="75%" stopColor="rgba(168, 85, 247, 0.7)">
                <animate
                  attributeName="stop-color"
                  values="rgba(168, 85, 247, 0.7);rgba(34, 211, 238, 0.8);rgba(168, 85, 247, 0.7)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientHoriz2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="rgba(59, 130, 246, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(59, 130, 246, 0.8);rgba(236, 72, 153, 0.9);rgba(59, 130, 246, 0.8)"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="80%" stopColor="rgba(59, 130, 246, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(59, 130, 246, 0.8);rgba(236, 72, 153, 0.9);rgba(59, 130, 246, 0.8)"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientHoriz3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(34, 211, 238, 0.75)">
                <animate
                  attributeName="stop-color"
                  values="rgba(34, 211, 238, 0.75);rgba(139, 92, 246, 0.85);rgba(34, 211, 238, 0.75)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="rgba(34, 211, 238, 0.75)">
                <animate
                  attributeName="stop-color"
                  values="rgba(34, 211, 238, 0.75);rgba(139, 92, 246, 0.85);rgba(34, 211, 238, 0.75)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientHoriz4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor="rgba(236, 72, 153, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(236, 72, 153, 0.8);rgba(56, 189, 248, 0.9);rgba(236, 72, 153, 0.8)"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="75%" stopColor="rgba(236, 72, 153, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(236, 72, 153, 0.8);rgba(56, 189, 248, 0.9);rgba(236, 72, 153, 0.8)"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientHoriz5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="15%" stopColor="rgba(139, 92, 246, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(139, 92, 246, 0.9);rgba(34, 211, 238, 0.95);rgba(139, 92, 246, 0.9)"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="rgba(219, 39, 119, 0.95)">
                <animate
                  attributeName="stop-color"
                  values="rgba(219, 39, 119, 0.95);rgba(168, 85, 247, 0.9);rgba(219, 39, 119, 0.95)"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="85%" stopColor="rgba(139, 92, 246, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(139, 92, 246, 0.9);rgba(34, 211, 238, 0.95);rgba(139, 92, 246, 0.9)"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientHoriz6" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(79, 70, 229, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(79, 70, 229, 0.8);rgba(245, 101, 101, 0.85);rgba(79, 70, 229, 0.8)"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="rgba(79, 70, 229, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(79, 70, 229, 0.8);rgba(245, 101, 101, 0.85);rgba(79, 70, 229, 0.8)"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientHoriz7" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor="rgba(16, 185, 129, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(16, 185, 129, 0.8);rgba(236, 72, 153, 0.9);rgba(16, 185, 129, 0.8)"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="75%" stopColor="rgba(16, 185, 129, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(16, 185, 129, 0.8);rgba(236, 72, 153, 0.9);rgba(16, 185, 129, 0.8)"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientHoriz8" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(245, 101, 101, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(245, 101, 101, 0.85);rgba(139, 92, 246, 0.9);rgba(245, 101, 101, 0.85)"
                  dur="3.8s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="rgba(245, 101, 101, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(245, 101, 101, 0.85);rgba(139, 92, 246, 0.9);rgba(245, 101, 101, 0.85)"
                  dur="3.8s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientHoriz9" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(251, 146, 60, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(251, 146, 60, 0.8);rgba(34, 211, 238, 0.9);rgba(251, 146, 60, 0.8)"
                  dur="5.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="rgba(251, 146, 60, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(251, 146, 60, 0.8);rgba(34, 211, 238, 0.9);rgba(251, 146, 60, 0.8)"
                  dur="5.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Diagonal Gradients */}
            <linearGradient id="gradientDiag1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(168, 85, 247, 0.9);rgba(34, 211, 238, 0.8);rgba(168, 85, 247, 0.9)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientDiag2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(236, 72, 153, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(236, 72, 153, 0.85);rgba(59, 130, 246, 0.9);rgba(236, 72, 153, 0.85)"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientDiag3" x1="0%" y1="25%" x2="75%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(34, 211, 238, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(34, 211, 238, 0.8);rgba(139, 92, 246, 0.9);rgba(34, 211, 238, 0.8)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientDiag4" x1="25%" y1="0%" x2="100%" y2="75%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(219, 39, 119, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(219, 39, 119, 0.8);rgba(56, 189, 248, 0.85);rgba(219, 39, 119, 0.8)"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientDiag5" x1="0%" y1="75%" x2="25%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(79, 70, 229, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(79, 70, 229, 0.9);rgba(245, 101, 101, 0.8);rgba(79, 70, 229, 0.9)"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientDiag6" x1="75%" y1="0%" x2="100%" y2="25%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(16, 185, 129, 0.85);rgba(236, 72, 153, 0.9);rgba(16, 185, 129, 0.85)"
                  dur="5.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Curve Gradients */}
            <linearGradient id="gradientCurve1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor="rgba(168, 85, 247, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(168, 85, 247, 0.9);rgba(34, 211, 238, 0.8);rgba(168, 85, 247, 0.9)"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="75%" stopColor="rgba(34, 211, 238, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(34, 211, 238, 0.9);rgba(236, 72, 153, 0.8);rgba(34, 211, 238, 0.9)"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientCurve2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(59, 130, 246, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(59, 130, 246, 0.9);rgba(219, 39, 119, 0.85);rgba(59, 130, 246, 0.9)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="rgba(219, 39, 119, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(219, 39, 119, 0.9);rgba(139, 92, 246, 0.85);rgba(219, 39, 119, 0.9)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientCurve3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor="rgba(236, 72, 153, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(236, 72, 153, 0.85);rgba(56, 189, 248, 0.9);rgba(236, 72, 153, 0.85)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="75%" stopColor="rgba(56, 189, 248, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(56, 189, 248, 0.85);rgba(168, 85, 247, 0.9);rgba(56, 189, 248, 0.85)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientCurve4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="rgba(79, 70, 229, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(79, 70, 229, 0.9);rgba(245, 101, 101, 0.8);rgba(79, 70, 229, 0.9)"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="rgba(16, 185, 129, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(16, 185, 129, 0.85);rgba(34, 211, 238, 0.9);rgba(16, 185, 129, 0.85)"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="80%" stopColor="rgba(245, 101, 101, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(245, 101, 101, 0.9);rgba(168, 85, 247, 0.8);rgba(245, 101, 101, 0.9)"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Circle Gradients */}
            <radialGradient id="gradientCircle1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(168, 85, 247, 0.9);rgba(34, 211, 238, 0.8);rgba(168, 85, 247, 0.9)"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            <radialGradient id="gradientCircle2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(59, 130, 246, 0.85);rgba(236, 72, 153, 0.9);rgba(59, 130, 246, 0.85)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            <radialGradient id="gradientCircle3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0.9)">
                <animate
                  attributeName="stop-color"
                  values="rgba(34, 211, 238, 0.9);rgba(139, 92, 246, 0.85);rgba(34, 211, 238, 0.9)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            <radialGradient id="gradientCircle4" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(219, 39, 119, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(219, 39, 119, 0.85);rgba(56, 189, 248, 0.9);rgba(219, 39, 119, 0.85)"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            {/* Polygon Gradients */}
            <linearGradient id="gradientPoly1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(79, 70, 229, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(79, 70, 229, 0.8);rgba(245, 101, 101, 0.9);rgba(79, 70, 229, 0.8)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(16, 185, 129, 0.8);rgba(236, 72, 153, 0.9);rgba(16, 185, 129, 0.8)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            <linearGradient id="gradientPoly2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(251, 146, 60, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(251, 146, 60, 0.85);rgba(168, 85, 247, 0.9);rgba(251, 146, 60, 0.85)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="rgba(34, 211, 238, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(34, 211, 238, 0.85);rgba(219, 39, 119, 0.9);rgba(34, 211, 238, 0.85)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* Spiral Gradients */}
            <linearGradient id="gradientSpiral1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(168, 85, 247, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(168, 85, 247, 0.8);rgba(34, 211, 238, 0.9);rgba(168, 85, 247, 0.8)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="rgba(34, 211, 238, 0.8)">
                <animate
                  attributeName="stop-color"
                  values="rgba(34, 211, 238, 0.8);rgba(236, 72, 153, 0.9);rgba(34, 211, 238, 0.8)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="gradientSpiral2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(59, 130, 246, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(59, 130, 246, 0.85);rgba(219, 39, 119, 0.9);rgba(59, 130, 246, 0.85)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="70%" stopColor="rgba(219, 39, 119, 0.85)">
                <animate
                  attributeName="stop-color"
                  values="rgba(219, 39, 119, 0.85);rgba(139, 92, 246, 0.9);rgba(219, 39, 119, 0.85)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Additional CSS-based animated lines with increased thickness */}
        <div className="absolute top-1/5 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/60 to-transparent animate-line-slide">
          <div
            className={`h-full bg-gradient-to-r from-violet-500/80 to-cyan-500/80 transition-all duration-2000 ${
              isLoaded ? "w-full" : "w-0"
            }`}
            style={{ transitionDelay: "5s" }}
          ></div>
        </div>

        <div
          className="absolute top-2/5 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-fuchsia-500/60 to-transparent animate-line-slide"
          style={{ animationDelay: "2s" }}
        >
          <div
            className={`h-full bg-gradient-to-r from-fuchsia-500/80 to-blue-500/80 transition-all duration-2000 ${
              isLoaded ? "w-full" : "w-0"
            }`}
            style={{ transitionDelay: "5.5s" }}
          ></div>
        </div>

        <div
          className="absolute bottom-1/5 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent animate-line-slide"
          style={{ animationDelay: "4s" }}
        >
          <div
            className={`h-full bg-gradient-to-r from-cyan-500/80 to-purple-500/80 transition-all duration-2000 ${
              isLoaded ? "w-full" : "w-0"
            }`}
            style={{ transitionDelay: "6s" }}
          ></div>
        </div>

        {/* Vertical CSS lines */}
        <div className="absolute left-1/6 top-0 h-full w-1 bg-gradient-to-b from-transparent via-pink-500/60 to-transparent animate-line-pulse"></div>
        <div className="absolute right-1/6 top-0 h-full w-1.5 bg-gradient-to-b from-transparent via-indigo-500/60 to-transparent animate-line-glow"></div>
      </div>

      {/* Ensure all content has relative positioning to appear above background lines */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="text-sm font-medium text-white">Evers Dev MBINI</div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-5">
                {[
                  { id: "home", label: "Accueil" },
                  { id: "about", label: "À Propos" },
                  { id: "skills", label: "Compétences" },
                  { id: "projects", label: "Projets" },
                  { id: "experience", label: "Expérience" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm transition-all duration-200 ${
                      activeSection === item.id ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white">
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
              <div className="px-6 py-4 space-y-3">
                {[
                  { id: "home", label: "Accueil" },
                  { id: "about", label: "À Propos" },
                  { id: "skills", label: "Compétences" },
                  { id: "projects", label: "Projets" },
                  { id: "experience", label: "Expérience" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="relative w-32 h-32 mx-auto mt-20 mb-8">
                <Image
                  src="/photo.png?height=512&width=512"
                  alt="Evers Darrell MBINI"
                  width={512}
                  height={512}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              Développeur BACKEND
              <br />
              <span className="text-gray-500 text-3xl">Evers Darrell MBINI</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Création d'APIs robustes et de solutions évolutives avec Django et les technologies modernes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-white text-black hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] px-8 py-3 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-2"
              >
                Voir les Projets
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gradient-to-r from-violet-600 to-indigo-600  hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] px-8 py-3 rounded-full text-base font-medium transition-all duration-300"
              >
                Me Contacter
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative z-10 py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-medium mb-8 text-white">À Propos de Moi</h2>
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                  <p>
                    Je suis un développeur backend passionné qui a commencé son parcours il y a moins d'un an. Bien que
                    nouveau dans le domaine, j'ai rapidement acquis des bases solides en programmation grâce à la
                    réflexion algorithmique et à la modélisation de bases de données en utilisant MCD/MLD.
                    <br />
                    Passionné par le développement back-end, je me spécialise dans la création d'API REST et RESTful,
                    la gestion de bases de données. Bien que débutant dans le domaine, ma motivation et ma capacité
                    d'apprentissage rapide me permettent de relever des défis techniques complexes.
                  </p>
                  <p>
                    Mon objectif est de devenir un développeur full-stack senior, et j'apprends constamment de nouvelles
                    technologies et les meilleures pratiques pour améliorer mes compétences et livrer des solutions de
                    haute qualité.
                    <br />
                    Mon parcours autodidacte m'a permis de maîtriser les fondamentaux de la programmation et de développer 
                    une approche méthodique pour résoudre les problèmes. Je suis constamment à la recherche de nouvelles 
                    technologies à apprendre et de projets stimulants à réaliser.
                  </p>

                  <div className="pt-4">
                    <Button
                      onClick={() => window.open("/cv-evers-darrell-mbini.pdf", "_blank")}
                      className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 group"
                    >
                      <Download className="w-4 h-4 group-hover:animate-bounce" />
                      Télécharger mon CV complet
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-medium text-white mb-2">100%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Autodidacte</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-medium text-white mb-2">24/7</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Mode Apprentissage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative z-10 py-32 px-6 bg-gray-950/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium text-center mb-20 text-white">
              Compétences & Technologies
            </h2>

            {/* Backend Skills */}
            <div className="mb-20">
              <h3 className="text-2xl font-medium text-white mb-12">Expertise Backend</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  "Gestion de bases de données avec SQL (PostgreSQL, MySQL, SQLite)",
                  "Création d'APIs RESTful avec Django",
                  "Intégration de services tiers (Gmail)",
                  "Gestion de tokens (JWT, OAuth)",
                  "Déploiement cloud avec Vercel",
                  "Contrôle de version et collaboration via Git et GitHub",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-xl border border border-pink-500/50  hover:shadow-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all duration-300 bg-gray/20 backdrop-blur-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
              
              <h4 className="text-2xl font-medium text-white mb-12">Technologies Utilisées</h4>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl border border border-pink-500/50  hover:shadow-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all duration-300 bg-gray/30 backdrop-blur-sm">
                  <h4 className="text-lg font-medium text-white mb-4">Langages</h4>
                  <div className="space-y-3">
                    <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                      Python
                    </span>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border border-pink-500/50  hover:shadow-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all duration-300 bg-gray/30 backdrop-blur-sm">
                  <h4 className="text-lg font-medium text-white mb-4">Frameworks</h4>
                  <div className="space-y-3">
                    <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm mr-2 mb-2">
                      Django
                    </span>
                    <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                      Django REST
                    </span>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border border-pink-500/50  hover:shadow-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all duration-300 bg-gray/30 backdrop-blur-sm">
                  <h4 className="text-lg font-medium text-white mb-4">Bases de Données</h4>
                  <div className="space-y-3">
                    <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm mr-2 mb-2">
                      PostgreSQL
                    </span>
                    <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm mr-2 mb-2">
                      MySQL
                    </span>
                    <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                      SQLite
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="mb-20">
              <h4 className="text-xl font-medium text-white mb-8">Outils de Développement</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl border border-pink-500/50  hover:shadow-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all duration-300 bg-gray/30 backdrop-blur-sm">
                  <h5 className="text-lg font-medium text-white mb-4">Contrôle de Version</h5>
                  <div className="space-y-3">
                    <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm mr-2">
                      Git
                    </span>
                    <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                      GitHub
                    </span>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border border-pink-500/50  hover:shadow-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all duration-300 bg-gray-30 backdrop-blur-sm">
                  <h5 className="text-lg font-medium text-white mb-4">Déploiement</h5>
                  <div className="space-y-3">
                    <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                      Vercel
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend Skills */}
            <div className="p-8 rounded-xl mb-12 ">
              <p className="text-lg text-gray-400 text-center">
                En plus des technologies backend, j'ai quelques compétences dans les langages et outils frontend:
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-medium text-white mb-8">Compétences Frontend</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {["Création d'interfaces", "Conception de maquettes"].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-6 rounded-xl border-2 border-cyan-500/50 hover:shadow-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300 bg-gray/30 backdrop-blur-sm"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                    <span className="text-white font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-2xl font-medium text-white mb-12">Technologies Utilisées</h4>


              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl border border-cyan-500/50  hover:shadow-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300 bg-gray/30 backdrop-blur-sm">
                  <h4 className="text-lg font-medium text-white mb-4">Langages</h4>
                  <div className="space-y-3">
                    <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm mr-2 mb-2">
                      HTML
                    </span>
                    <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">CSS</span>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-cyan-500/50  hover:shadow-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300 bg-gray/30 backdrop-blur-sm">
                  <h4 className="text-lg font-medium text-white mb-4">Framework</h4>
                  <div className="space-y-3">
                    <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                      Next.js
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-medium text-white mb-8">Outils de Design</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl border border-cyan-500/50  hover:shadow-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] backdrop-blur-sm transition-all duration-300 bg-gray/30">
                
                  <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm mr-2">
                    Figma
                  </span>
                  <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                    Pinterest
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative z-10 py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium text-center mb-20 text-white">Projets</h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Project 1 */}
              <div className="border border-gray-800 rounded-xl group hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] backdrop-blur-sm transition-all duration-300 rounded-xl">
                <div className="relative h-64 bg-gradient-to-br from-blue-900/20 to-blue-600/20 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/myappibirthday.png?height=256&width=400"
                    alt="MyAppBirthday"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-2xl font-medium text-white mb-3 pl-7">MyAppBirthday</h3>
                <p className="text-gray-400 mb-4 leading-relaxed px-5">
                  Une application web qui simplifie la gestion des invités et des invitations pour les fêtes
                  d'anniversaire. Dispose d'une interface intuitive avec système de notifications et gestion des RSVP.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 px-6">
                  {["Next.js", "Django", "Git", "Figma"].map((tech) => (
                    <span key={tech} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-s">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="https://github.com/Evers280/appiBirthday.git"
                  target="_blank"
                  className="inline-flex items-center text-white hover:text-gray-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300 px-5 py-5"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Voir sur GitHub
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Project 2 */}
              <div className="border border-gray-800 rounded-xl group hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] backdrop-blur-sm transition-all duration-300 rounded-xl">
                <div className="relative h-64 bg-gradient-to-br from-purple-900/20 to-purple-600/20 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/gestPloided.png?height=256&width=400"
                    alt="Gest ploided"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-2xl font-medium text-white mb-3 pl-7">Gest ploided</h3>
                <p className="text-gray-400 mb-4 leading-relaxed px-5">
                  Une plateforme complète de gestion des employés avec des fonctionnalités avancées de tri et de filtrage. 
                  Interface moderne avec tableaux de bord personnalisables.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 pl-5">
                  {["Next.js", "Django", "Git", "Figma"].map((tech) => (
                    <span key={tech} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="https://gestploided.onrender.com/"
                  target="_blank"
                  className="inline-flex items-center text-white rounded-md hover:text-gray-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300 px-5 py-5"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Visiter la plateforme
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative z-10 py-32 px-6 bg-gray-950/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium text-center mb-20 text-white">Expérience</h2>

            <div className="border border-gray-800 rounded-xl p-8 mb-12 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 bg-gray-900/30 backdrop-blur-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-medium text-white">Développeur Backend</h3>
                  <p className="text-xl text-gray-400">Oguooe Labs</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-green-900/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-800">
                    Actuel
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Responsabilités Clés :</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Développement backend d'applications web
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Conception de bases de données
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Développement d'APIs RESTful 
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Réalisation Notable :</h4>
                  <p className="text-gray-400">
                    Création d'une plateforme complète de gestion d'ordinateur.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-medium text-white mb-6">Formation</h3>
              <div className="border border-gray-800 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 bg-gray-900/25 backdrop-blur-md">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <h4 className="text-xl font-medium text-white mb-2">Autodidacte</h4>
                <p className="text-gray-400">
                  Apprentissage continu par l'étude autonome, les projets personnels et les ressources spécialisées en
                  ligne.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative z-10 py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-medium mb-8 text-white">Travaillons Ensemble</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Je suis toujours ouvert aux nouvelles opportunités et collaborations. Discutons de vos projets ou
              simplement échangeons sur les technologies qui nous passionnent.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-800 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 bg-gray-900/20 backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-gray-400" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">Email</p>
                    <Link
                      href="mailto:eversdevmbini@gmail.com"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      eversdevmbini@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-800 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 bg-gray-900/20 backdrop-blur-sm">
                  <Phone className="w-6 h-6 text-gray-400" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">Téléphone</p>
                    <Link href="tel:+241077259013" className="text-white hover:text-gray-300 transition-colors">
                      +241 077259013
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-800 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 bg-gray-900/20 backdrop-blur-sm">
                  <Linkedin className="w-6 h-6 text-gray-400" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">LinkedIn</p>
                    <Link
                      href="https://www.linkedin.com/in/evers-darrell-mbini-066334318"
                      target="_blank"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      Evers Darrell MBINI
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-800 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300 bg-gray-900/20 backdrop-blur-sm">
                  <Github className="w-6 h-6 text-gray-400" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">GitHub</p>
                    <Link
                      href="https://github.com/Evers280"
                      target="_blank"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      @Evers280
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={() => window.open("mailto:eversdevmbini@gmail.com", "_blank")}
              className="bg-white text-black hover:bg-gray-100 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
            >
              Envoyer un Message
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-8 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">© 2025 Evers Darrell MBINI. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="https://github.com/Evers280"
                target="_blank"
                className="text-gray-500 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/evers-darrell-mbini-066334318"
                target="_blank"
                className="text-gray-500 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:eversdevmbini@gmail.com"
                className="text-gray-500 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
