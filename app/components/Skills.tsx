"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  // Blocks,
  // Box,
  Browser,
  // Code2,
  Database,
  FileJson,
  Flask,
  Git,
  Globe,
  Layout,
  Layers,
  MessageSquare,
  Palette,
  Server,
  Settings,
  Smartphone,
  Terminal,
  Gitlab 
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Palette className="h-6 w-6" />,
    items: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "TailwindCSS",  },
      { name: "Redux",  },
    ],
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    items: [
      { name: "Flutter"},
      { name: "Dart" },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: [
      { name: "Node.js" },
      { name: "Python"},
      { name: "Flask" },
      { name: "Deno" },
      { name: "Golang" },
      { name: "NestJS" },
      { name: "Socket.io" },
    ],
  },
  {
    category: "Databases",
    icon: <Database className="h-6 w-6" />,
    items: [
      { name: "PostgreSQL", },
      { name: "MongoDB", },
      { name: "Neo4j",  },
      { name: "Redis",  },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <Settings className="h-6 w-6" />,
    items: [
      { name: "Docker",  },
      { name: "AWS",  },
      { name: "Kubernetes", },
      { name: "AWS Lambda",  },
      { name: "Serverless", },
    ],
  },
  {
    category: "Tools & Others",
    icon: <Gitlab  className="h-6 w-6" />,
    items: [
      { name: "Git",  },
      { name: "RabbitMQ",  },
      { name: "Microservices", },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge
                      key={item.name}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {/* {item.icon} */}
                      {item.name}
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