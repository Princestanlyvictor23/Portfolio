export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Healthcare Assistant",
    description:
      "LLM-powered assistant that helps doctors with diagnosis support and treatment suggestions during live consultations.",
    techStack: ["React", "TypeScript", "Node.js", "LLM", "Vite"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Agentic Workflow Platform",
    description:
      "B2B platform that automates business workflows using AI agents and integrates with existing systems.",
    techStack: ["React", "FastAPI", "PostgreSQL"],
    link: "#",
    github: "#",
  },
];
