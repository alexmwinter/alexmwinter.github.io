export interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoLink: string | null;
  githubLink: string | null;
}

export const projects: Project[] = [
  {
    title: "Beyond Bot",
    description: "Collaborated on a special team to design, develop, and deploy BMCS’ first ever Private RAG AI bot, designed to support the company’s day-to-day operations, from cybersecurity work to HR initiatives.",
    techStack: ["RAG", "AI/LLM", "Python", "Vector DB"],
    demoLink: null,
    githubLink: null
  },
  {
    title: "Dietary Restriction App",
    description: "Developed a website for users picking recipes based on dietary restrictions or preferences, utilizing the D3.js library for complex interactive data visualizations.",
    techStack: ["JavaScript", "D3.js", "Data Visualization"],
    demoLink: "https://ibirle.github.io/590V-viz/",
    githubLink: null
  },
  {
    title: "Bread Baking Competition Site",
    description: "Created a full-stack application and working prototype of a competition website for bread baking, successfully hosted and deployed via Heroku.",
    techStack: ["Full Stack", "Heroku", "Web Development"],
    demoLink: null,
    githubLink: null
  }
];
