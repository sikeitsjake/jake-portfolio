"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CDCG Dashboard",
    type: "work",
    tags: ["Next.js", "Data Entry"],
    description: "React based data entry application.",
    githubURL: "https://github.com/sikeitsjake/cdcg-dash",
  },
  {
    title: "Personal Portfolio",
    type: "personal",
    tags: ["React", "Tailwind"],
    description: "The site you are looking at!",
    githubURL: "https://github.com/sikeitsjake/jake-portfolio",
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const displayedProjects = projects.filter((p) =>
    activeFilter === "all" ? true : p.type === activeFilter,
  );
  return (
    <main className="max-w-5xl mx-auto p-8">
      <header className="mb-12">
        <h1 className="text-5xl font-black tracking-tighter">JAKE.DEV</h1>
        <div className="flex gap-4 mt-6">
          {/* ARROW FUNCTIONS inside onClick: These change the state */}
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
          >
            All
          </Button>
          <Button
            variant={activeFilter === "work" ? "default" : "outline"}
            onClick={() => setActiveFilter("work")}
          >
            Work
          </Button>
          <Button
            variant={activeFilter === "personal" ? "default" : "outline"}
            onClick={() => setActiveFilter("personal")}
          >
            Personal
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </main>
  );
}
