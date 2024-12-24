"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  Mail,
  Phone,
  Github,
  Linkedin,
  FileText,
  ExternalLink,
} from "lucide-react";
import port from "../app/favicon.ico";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-[16px] rounded-md bg-primary/10 rounded-full px-3 py-1 font-semibold mr-2 mb-2 shadow-md ">
    {children}
  </span>
);

const ProjectCard = ({
  title,
  description,
  tags,
  projectLink,
  githubLink,
}: {
  title: string;
  description: string;
  tags: string[];
  projectLink: string;
  githubLink: string;
}) => (
  <motion.div whileHover={{ scale: 1.05 }}>
    <Card className="h-full sm:w-full md:min-w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(projectLink, "_blank")}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(githubLink, "_blank")}
            >
              <Github className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground -mt-4">{description}</p>
        <div className="mt-4">
          {tags.map((tag) => (
            <SkillTag key={tag}>{tag}</SkillTag>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export function PortfolioComponent() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="lg:pl-[200px] lg:pr-[200px]">
      <div
        className={`min-h-screen w-[100%] text-pretty mx-auto bg-gray-500 ${
          darkMode ? "dark" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Ashish Bhagwan Patel</h1>
            <div className="flex items-center space-x-4">
              <Button onClick={toggleDarkMode}>
                {darkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
              <Image
                src={port}
                alt="Profile"
                width={32}
                height={32}
                className="w-10 h-10 rounded-full hidden sm:block"
              />
            </div>
          </header>

          <section className="mb-8">
            <div className="flex gap-10 content-baseline">
              <h2 className="text-lg font-semibold mb-4 hidden sm:block">
                About Me
              </h2>
              <div className="flex justify-center space-x-4 -mt-1.5">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    window.open("https://github.com/ashishpatel2406", "_blank")
                  }
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/ashish-bhagwan-patel-995890224/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    window.open("mailto:ashishgurjar2421@gmail.com", "_blank")
                  }
                >
                  <Mail className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("tel:+91 8602717190", "_blank")}
                >
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="text-muted-foreground text-sm sm:text-center lg:text-left">
              Full Stack Engineer focused on learning through
              experimentation and product development. Results-driven
              Freelance/Intern Developer specializing in designing and
              developing scalable and robust software/web applications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Work Experience</h2>

            <Card className="mb-4">
              <CardHeader>
                <div className="flex justify-between items-center -mb-1">
                  <CardTitle className="leading-5">
                    Defence Research and Development Organisation (DRDO)
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1gz1bD83fFXxNWakcbS3tsJQg7aKmT1Ce/view?usp=sharing",
                          "_blank"
                        )
                      }
                    >
                      <FileText className="h-4 w-4 ml-4" />
                    </Button>
                    <p className="text-muted-foreground text-sm">
                      Jan 2024 - Feb 2024
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Project Intern | RCI-Hyderabad
                </p>
              </CardHeader>
              <CardContent className="-mt-4">
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>
                    Developed a{" "}
                    <strong>
                      Security Information and Event Management (SIEM) system
                    </strong>
                    , optimizing log reception using{" "}
                    <strong>UDP sockets</strong> and leveraging the{" "}
                    <strong>concurrent.futures library</strong>, including the
                    Process Pool Executor for efficient multithreading.
                  </li>
                  <li>
                    Facilitated{" "}
                    <strong>
                      secure data transfer from RCI-net (Intranet) to Internet
                      PCs
                    </strong>{" "}
                    through logical unit number masking. Implemented{" "}
                    <strong>batch script</strong> for streamlined server
                    management, ensuring efficient and secure transmission.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardHeader>
                <div className="flex justify-between items-center -mb-1">
                  <CardTitle className="leading-5">
                    Hellbent Software and Educational Services
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1XdQSSj6QZwl_TqQ9VGBW12loB309GPr3/view?usp=sharing",
                          "_blank"
                        )
                      }
                    >
                      <FileText className="h-4 w-4 ml-4" />
                    </Button>
                    <p className="text-muted-foreground text-sm">
                      Nov 2022 - Apr 2023
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Jr. Software Developer Intern | Bhopal
                </p>
              </CardHeader>
              <CardContent className="-mt-4">
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>
                    Efficiently coordinated{" "}
                    <strong>collaborative teamwork</strong>, resulting in a{" "}
                    <strong>90% increase</strong> in overall project efficiency
                    and a <strong>70% improvement</strong> in project delivery
                    within tight deadlines.
                  </li>
                  <li>
                    Overhauled websites user interfaces using{" "}
                    <strong>MongoDB, Express.js, React.js, and Node.js</strong>,
                    leading to an <strong>85% efficiency boost</strong> and
                    positively impacting over <strong>1000+ users</strong>.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap">
              {[
                "C++",
                "Python",
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "PostgreSQL",
                "SQL",
                "Docker",
                "AWS",
                "Git",
                "Linux",
                "Kubernetes",
                "DevOps",
                "TypeScript",
                "CI/CD",
                "Data Structures/Algorithms",
                "Touch Typing (100 wpm)",
              ].map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
              {/* New Projects */}
              <ProjectCard
                title="Advance IDE"
                description="Advance IDE is a comprehensive, web-based integrated development environment (IDE) that allows users to create, edit, and deploy projects. The platform provides isolated environments for each user, supports multiple programming languages, and offers advanced features like auto-scaling, one-click GitHub integration, and long-running backend support."
                tags={[
                  "React.js/Next.js",
                  "Node.js",
                  "Express.js",
                  "AWS",
                  "Docker/Kubernetes",
                  "PostgreSQL",
                  "Socket.io",
                  "Clerk",
                  "CI/CD",
                ]}
                projectLink="https://ide.danish100x.me"
                githubLink="https://github.com/ashishpatel2406"
              />

              {/* Existing Projects */}
              <ProjectCard
                title="StackOverflow Q&A Platform"
                description="A complex Q&A platform for developers to ask questions, share knowledge, and learn from each other. Built with Next.js, TypeScript, Tailwind CSS, Clerk, and MongoDB, it includes advanced features like AI-generated answers, a recommendation system, badge/reputation, and more."
                tags={[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Clerk",
                  "MongoDB",
                  "Vercel",
                  "TinyMCE",
                  "Prism.js",
                  "Zod",
                  "Svix",
                  "Shadcn-UI",
                  "ESLint",
                  "Prettier",
                ]}
                projectLink="https://stackoverflow.danish100x.me/"
                githubLink="https://github.com/ashishpatel2406"
              />

              <ProjectCard
                title="Study Notion - EdTech Platform"
                description="Study Notion is an EdTech web application built with the MERN stack, offering secure user authentication, course management, progress tracking, and payment integration via Razorpay, aimed at enhancing the learning experience for students and instructors."
                tags={[
                  "MERN",
                  "JWT",
                  "Razorpay",
                  "MongoDB",
                  "React.js",
                  "Node.js",
                  "Express.js",
                ]}
                projectLink="https://studynotion-master.vercel.app/"
                githubLink="https://github.com/ashishpatel2406"
              />

              <ProjectCard
                title="Discord Server"
                description="FullStack Discord Clone: Client form validation and handling using react-hook-form, Send attachments as messages using UploadThing, 1:1 video calls between members"
                tags={[
                  "Next.js",
                  "TypeScript",
                  "Plaid",
                  "Dwolla",
                  "ShadCN",
                  "Prisma ORM",
                  "PostgreSQL",
                  "AWS SDK",
                  "OpenAI API",
                  "Stripe",
                  "Neon Database Serverless",
                ]}
                projectLink="https://discord-server-three.vercel.app/"
                githubLink="https://github.com/ashishpatel2406"
              />

              <ProjectCard
                title="Security Information and Event Management (SIEM)"
                description="Built for DRDO, this Security Information and Event Management (SIEM) system provides real-time monitoring, log parsing via UDP, and storage in MongoDB. It features anomaly detection on parsed data and offers a web interface for querying and visualizing security events."
                tags={[
                  "SIEM",
                  "Log Parsing",
                  "Security",
                  "Anomaly Detection",
                  "TCP/IP,UDP",
                  "DRDO",
                  "Potential AI Integration",
                ]}
                projectLink="https://siem-project.vercel.app/"
                githubLink="https://github.com/ashishpatel2406"
              />
            </div>
          </section>

          <footer className="mt-8 flex justify-center space-x-4">
            <section className="mb-8">
              <div className="flex gap-10 content-baseline">
                <div className="flex justify-center space-x-4 -mt-1.5">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      window.open(
                        "https://github.com/ashishpatel2406",
                        "_blank"
                      )
                    }
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/ashish-bhagwan-patel-995890224/",
                        "_blank"
                      )
                    }
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      window.open("mailto:ashishgurjar2421@gmail.com", "_blank")
                    }
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open("tel:+91 8602717190", "_blank")}
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </section>
          </footer>
        </div>
      </div>
    </div>
  );
}
