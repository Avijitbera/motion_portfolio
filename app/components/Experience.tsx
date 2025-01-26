"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Roomlalo private limited",
    period: "2021 - 2022",
    description: "Join in early stage startup. Developed and maintained multiple client projects. Using React, Node.js, Flutter, and Dart.",
    technologies: ["React","Node.js", "Flutter", "Dart"],
  },
  {
    title: "Flutter Developer",
    company: "Fitnearn Meditate",
    period: "2024 - Prasent",
    description: "Developed and maintained swasthi app. Deployed and implementing new features.",
    technologies: ["Flutter", "Dart", "Node.js", "NestJs", "PostgreSQL"],
  }
];

export default function Experience() {
  return (
    <section className="bg-muted/50 py-20" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}