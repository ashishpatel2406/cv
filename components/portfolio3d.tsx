"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Mail, Phone, Github, Linkedin, FileText, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import * as THREE from 'three'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SkillTag = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    className="inline-block bg-white text-black rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.span>
)

const ProjectCard = ({ title, description, tags, projectLink, githubLink }: { title: string, description: string, tags: string[], projectLink: string, githubLink: string }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="overflow-hidden"
  >
    <Card className="h-full bg-black border border-white/20">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">{title}</CardTitle>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" onClick={() => window.open(projectLink, '_blank')}>
              <ExternalLink className="h-5 w-5 text-white" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => window.open(githubLink, '_blank')}>
              <Github className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-white/70 truncate">{description}</p>
        <div className="mt-4 flex flex-wrap">
          {tags.map((tag) => (
            <SkillTag key={tag}>{tag}</SkillTag>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

const ExperienceCard = ({ title, company, date, description, certificateLink }: { title: string, company: string, date: string, description: string[], certificateLink: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="overflow-hidden"
  >
    <Card className="mb-4 bg-black border border-white/20">
      <CardHeader>
        <div className='flex justify-between items-center'>
          <CardTitle className="text-white truncate">{title} - {company}</CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => window.open(certificateLink, '_blank')}>
              <FileText className="h-5 w-5 text-white" />
            </Button>
            <p className="text-white/70">{date}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 text-white/70 space-y-1">
          {description.map((item, index) => (
            <li key={index} className="truncate">{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
)

export function PortfolioComponent() {
  const [darkMode, setDarkMode] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)

      const geometry = new THREE.BufferGeometry()
      const vertices = []
      for (let i = 0; i < 5000; i++) {
        const x = (Math.random() - 0.5) * 2000
        const y = (Math.random() - 0.5) * 2000
        const z = (Math.random() - 0.5) * 2000
        vertices.push(x, y, z)
      }
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

      const material = new THREE.PointsMaterial({ color: 0xffffff, size: 2 })
      const points = new THREE.Points(geometry, material)
      scene.add(points)

      camera.position.z = 1000

      const animate = () => {
        requestAnimationFrame(animate)
        points.rotation.x += 0.0005
        points.rotation.y += 0.0005
        renderer.render(scene, camera)
      }

      animate()

      const handleResize = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen bg-black text-white ${darkMode ? 'dark' : ''}`}>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
      <div className="container mx-auto px-4 py-8 relative z-10 overflow-hidden">
        <header className="flex justify-between items-center mb-8">
          <motion.h1
            className="text-4xl font-bold truncate"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Md Danish
          </motion.h1>
          <div className="flex items-center space-x-4">
            <Button onClick={toggleDarkMode} className="bg-white text-black hover:bg-gray-200">
              {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Profile"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
          </div>
        </header>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4'>
            <h2 className="text-3xl font-semibold truncate">About Me</h2>
            <div className='flex justify-center space-x-4'>
              <Button variant="ghost" size="icon" onClick={() => window.open('https://github.com/letscodedanish', '_blank')}>
                <Github className="h-6 w-6 text-white" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open('https://www.linkedin.com/in/danish-khan-3354791b3', '_blank')}>
                <Linkedin className="h-6 w-6 text-white" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open('mailto:workwithdanish01@gmail.com', '_blank')}>
                <Mail className="h-6 w-6 text-white" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open('tel:+91 7987419412', '_blank')}>
                <Phone className="h-6 w-6 text-white" />
              </Button>
            </div>
          </div>
          <p className="text-white/70 text-lg truncate">
            Jr. Full Stack and DevOps Engineer focused on learning through experimentation and product development. Results-driven Freelance/Intern Developer specializing in designing and developing scalable and robust software/web applications.
          </p>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-4 truncate">Work Experience</h2>
          <ExperienceCard
            title="Full Stack Developer"
            company="Data Vidhya"
            date="2023"
            description={[
              'Designed and developed web applications using React.js and Node.js',
              'Implemented RESTful APIs and microservices for large-scale applications',
              'Integrated cloud-based services like AWS and Firebase'
            ]}
            certificateLink="#"
          />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-4 truncate">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Portfolio Website"
              description="A portfolio website to showcase my skills, projects, and experiences."
              tags={['React', 'Next.js', 'Tailwind CSS']}
              projectLink="#"
              githubLink="#"
            />
          </div>
        </motion.section>
      </div>
    </div>
  )
}
