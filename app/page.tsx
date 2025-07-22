"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Cloud, Brain, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "achievements", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-red-900/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
            >
              UB
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Education", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase() === "education" ? "experience" : item.toLowerCase())
                  }
                  className={`text-sm font-medium transition-colors hover:text-red-400 ${
                    activeSection === (item.toLowerCase() === "education" ? "experience" : item.toLowerCase())
                      ? "text-red-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-800 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
                Muhammad Umer Bilal
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Computer Science Student seeking internship opportunities in Full-Stack Development, AI/ML, and Software
              Engineering to apply my technical skills and passion for innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View My Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                Let's Connect
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/umerbi1a1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/umer-bilal-915143242/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=bilalmehar973@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 mb-6">
                I'm a dedicated Computer Science student at National University of Modern Languages, currently in my 3rd
                year and seeking internship opportunities to apply my technical skills in real-world projects. With a
                strong foundation in multiple programming languages and hands-on experience in AI/ML and full-stack
                development.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Through academic projects and self-directed learning, I've developed expertise in computer vision,
                natural language processing, and web development. I'm eager to contribute to innovative teams and learn
                from industry professionals while building impactful solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-black/40 border-red-900/30 hover:border-red-600/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Code className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Full-Stack Development</h3>
                    <p className="text-gray-400">React, Node.js, Django, PostgreSQL</p>
                  </CardContent>
                </Card>
                <Card className="bg-black/40 border-red-900/30 hover:border-red-600/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Brain className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">AI & Machine Learning</h3>
                    <p className="text-gray-400">TensorFlow, PyTorch, OpenCV, NLP</p>
                  </CardContent>
                </Card>
                <Card className="bg-black/40 border-red-900/30 hover:border-red-600/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Cloud className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Cloud & DevOps</h3>
                    <p className="text-gray-400">AWS, MongoDB, FastAPI</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-4">Languages</h3>
                  <div className="space-y-2">
                    {["C/C++", "Java", "Python", "JavaScript", "SQL"].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="border-red-600/50 text-gray-300 hover:bg-red-600/20">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-4">Frontend</h3>
                  <div className="space-y-2">
                    {["React.js", "Vite.js", "HTML/CSS", "JavaScript"].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="border-red-600/50 text-gray-300 hover:bg-red-600/20">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-4">Backend</h3>
                  <div className="space-y-2">
                    {["Node.js", "Django", "Express", "FastAPI"].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="border-red-600/50 text-gray-300 hover:bg-red-600/20">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-4">AI/ML & Cloud</h3>
                  <div className="space-y-2">
                    {["TensorFlow", "PyTorch", "OpenCV", "AWS", "MongoDB", "PostgreSQL"].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="border-red-600/50 text-gray-300 hover:bg-red-600/20">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Coursework Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Education & Learning
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/40 border-red-900/30 hover:border-red-600/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-white">Bachelor of Science in Computer Science</CardTitle>
                          <CardDescription className="text-red-400">
                            National University of Modern Languages
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="border-red-600/50 text-red-400">
                          Feb 2022 – Jan 2026
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-gray-300 space-y-2">
                        <li>
                          • <strong>Relevant Coursework:</strong> Computer Architecture, Comparison of Learning
                          Algorithms, Computational Theory
                        </li>
                        <li>
                          • <strong>Focus Areas:</strong> Artificial Intelligence, Machine Learning, Full-Stack Web
                          Development
                        </li>
                        <li>
                          • <strong>Academic Projects:</strong> Built multiple AI/ML applications and web development
                          projects
                        </li>
                        <li>
                          • <strong>Current Status:</strong> 3rd year student with strong foundation in programming and
                          software development
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/40 border-red-900/30 hover:border-red-600/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-white">Self-Directed Learning & Development</CardTitle>
                          <CardDescription className="text-red-400">Continuous Skill Building</CardDescription>
                        </div>
                        <Badge variant="outline" className="border-red-600/50 text-red-400">
                          Ongoing
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-gray-300 space-y-2">
                        <li>
                          • <strong>AI/ML Specialization:</strong> Self-taught TensorFlow, PyTorch, and OpenCV through
                          online courses
                        </li>
                        <li>
                          • <strong>Full-Stack Development:</strong> Built proficiency in React.js, Node.js, Django, and
                          modern web technologies
                        </li>
                        <li>
                          • <strong>Problem Solving:</strong> Active on LeetCode and coding platforms to strengthen
                          algorithmic thinking
                        </li>
                        <li>
                          • <strong>Cloud Technologies:</strong> Hands-on experience with AWS services and database
                          management
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-black/40 border-red-900/30 hover:border-red-600/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-white">AI-Powered Smart Parking System</CardTitle>
                      <a
                        href="https://github.com/umerbi1a1/Smart-park"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Built a smart parking system using computer vision to detect vehicle presence. Used machine
                      learning and OpenCV for real-time recognition and slot tracking.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Django", "OpenCV", "Python", "Machine Learning", "PostgreSQL"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-red-900/30 text-red-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-black/40 border-red-900/30 hover:border-red-600/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-white">LeetCode Problem Summarizer</CardTitle>
                      <a
                        href="https://github.com/umerbi1a1/LeetCode-Problem-Summarizer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Built an AI-powered tool that automatically summarizes LeetCode solutions using NLP. Achieved 90%
                      accuracy in solution summarization, reducing study time by 40%.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Python", "NLP", "spaCy", "OpenAI API", "FastAPI"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-red-900/30 text-red-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Academic Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Academic Achievements
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border-red-900/30 hover:border-red-600/50 transition-all duration-300 text-center p-6">
                  <div className="text-3xl font-bold text-red-400 mb-2">2+</div>
                  <div className="text-white font-semibold mb-1">Years of Study</div>
                  <div className="text-gray-400 text-sm">Computer Science Program</div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border-red-900/30 hover:border-red-600/50 transition-all duration-300 text-center p-6">
                  <div className="text-3xl font-bold text-red-400 mb-2">10+</div>
                  <div className="text-white font-semibold mb-1">Programming Languages</div>
                  <div className="text-gray-400 text-sm">Proficient in multiple technologies</div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border-red-900/30 hover:border-red-600/50 transition-all duration-300 text-center p-6">
                  <div className="text-3xl font-bold text-red-400 mb-2">2</div>
                  <div className="text-white font-semibold mb-1">Major Projects</div>
                  <div className="text-gray-400 text-sm">AI/ML focused applications</div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
              and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="bg-gradient-to-br from-red-600 to-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=bilalmehar973@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  bilalmehar973@gmail.com
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="bg-gradient-to-br from-red-600 to-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+923134414248" className="text-red-400 hover:text-red-300 transition-colors">
                  +92 313 441 4248
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="bg-gradient-to-br from-red-600 to-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-red-400">Lahore, Punjab, Pakistan</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-red-900/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Muhammad Umer Bilal. Built with passion and code.</p>
        </div>
      </footer>
    </div>
  )
}
