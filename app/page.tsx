"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X, Code, Database, Globe, Zap, Download } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

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

  const skills = [
    { name: "Python", icon: Code, level: 56 },
    { name: "Django", icon: Globe, level: 50 },
    { name: "Django REST", icon: Database, level: 50 },
    { name: "Next.js", icon: Globe, level: 50 },
    { name: "HTML/CSS", icon: Code, level: 90 },
    { name: "MySQL", icon: Database, level: 60 },
    { name: "Git/GitHub", icon: Github, level: 70 },
    { name: "Figma", icon: Zap, level: 65 },
  ]

  const projects = [
    {
      title: "MyAppBirthday",
      description: "Faciliter la gestion des invités et des invitations pour un anniversaire.",
      role: "Développeur principal et designer",
      technologies: ["Next.js", "Django", "Git", "GitHub", "Figma"],
      link: "https://github.com/Evers280/appiBirthday.git",
      image: "/myappibirthday.png?height=300&width=500",
    },
    {
      title: "TaskMaster",
      description: "Simplifier la gestion des tâches avec une interface intuitive.",
      role: "Développeur principal et designer",
      technologies: ["Next.js", "Django", "Git", "GitHub", "Figma"],
      link: "https://github.com/Evers280/task.git",
      image: "/taskmaster.png?height=300&width=500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Evers Dev MBINI
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item ? "text-cyan-400 border-b-2 border-cyan-400" : ""
                  }`}
                >
                  {item === "home"
                    ? "Accueil"
                    : item === "about"
                      ? "À propos"
                      : item === "skills"
                        ? "Compétences"
                        : item === "projects"
                          ? "Projets"
                          : item === "experience"
                            ? "Expérience"
                            : "Contact"}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-md bg-black/40 border-t border-cyan-500/20">
            <div className="px-4 py-2 space-y-2">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 px-4 rounded-lg hover:bg-cyan-500/10 transition-colors"
                >
                  {item === "home"
                    ? "Accueil"
                    : item === "about"
                      ? "À propos"
                      : item === "skills"
                        ? "Compétences"
                        : item === "projects"
                          ? "Projets"
                          : item === "experience"
                            ? "Expérience"
                            : "Contact"}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 mb-6">
              <img
                src="/photo.png?height=192&width=192" /*photo de profile*/
                alt="Evers Darrell MBINI"
                className="w-full h-full rounded-full object-cover bg-gray-800"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Evers Darrell MBINI
            </h1>
            <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6 font-light">Développeur Back-End</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Débutant sa carrière il y a moins d'un an, j'ai acquis des compétences de base en programmation grâce à
              l'algorithmique et en modélisation de bases de données via MCD/MLD. Mon objectif est de devenir un
              développeur Full-Stack senior.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Evers280"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/evers-darrell-mbini-066334318"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:eversdevmbini@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Bouton de téléchargement du CV */}
          <div className="mt-10 flex justify-center">
            <a
              href="/cv-evers-darrell-mbini.pdf"
              download="CV-Evers-Darrell-MBINI.pdf"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] border border-cyan-400/50 text-lg"
            >
              <Download size={20} />
              <span>Télécharger mon CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            À Propos
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionné par le développement back-end, je me spécialise dans la création d'API robustes et la gestion
                de bases de données. Bien que débutant dans le domaine, ma motivation et ma capacité d'apprentissage
                rapide me permettent de relever des défis techniques complexes.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mon parcours autodidacte m'a permis de maîtriser les fondamentaux de la programmation et de développer
                une approche méthodique pour résoudre les problèmes. Je suis constamment à la recherche de nouvelles
                technologies à apprendre et de projets stimulants à réaliser.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Objectifs</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Devenir développeur Full-Stack senior</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Maîtriser ma stack de developement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Contribuer à des projets open-source</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Compétences
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.name}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="text-cyan-400 mr-3" size={24} />
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{skill.level}%</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-400 mb-4">
                    <strong>Rôle:</strong> {project.role}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Voir le projet</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Expérience
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Développeur Back-End</h3>
                  <p className="text-xl text-gray-300 mb-4">Ogooe Labs</p>
                  <p className="text-gray-400 mb-4">Développement back-end</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Réalisations:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Création d'une plateforme de gestion des ordinateurs</li>
                      <li>Développement d'API RESTful avec Django</li>
                      <li>Gestion et optimisation de bases de données</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Intéressé par une collaboration ? N'hésitez pas à me contacter !
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:eversdevmbini@gmail.com"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 block"
            >
              <Mail className="text-cyan-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">eversdevmbini@gmail.com</p>
            </a>

            <a
              href="tel:+241077259013"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 block"
            >
              <Phone className="text-cyan-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Téléphone</h3>
              <p className="text-gray-300">+241 077259013</p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a
              href="https://github.com/Evers280"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <Github size={24} className="text-cyan-400" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/evers-darrell-mbini-066334318"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={24} className="text-cyan-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/cv-evers-darrell-mbini.pdf"
              download="CV-Evers-Darrell-MBINI.pdf"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] border border-cyan-400/50 text-lg"
            >
              <Download size={20} />
              <span>Télécharger mon CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyan-500/20 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Evers Darrell MBINI. Tous droits réservés.</p>
          <p className="text-sm text-gray-500 mt-2">Développé avec Next.js et Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
