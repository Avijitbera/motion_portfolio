"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "./projects/ProjectCard";
import { projects } from "./projects/projectsData";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "other", label: "Other" }
];

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          Featured Projects
        </motion.h2>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex w-full justify-center space-x-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 py-2"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.category === category.id)
                  .map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={index}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}