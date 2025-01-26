"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Project } from "./types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="overflow-hidden">
        <div className="relative h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
          <p className="mb-4 text-muted-foreground">{project.description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4">
           {project.githubUrl != "" && <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
              Code
            </a>}

            {project.liveUrl != "" && <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <ExternalLink className="h-5 w-5" />
              Live Demo
            </a>}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}