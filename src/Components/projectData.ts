
interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A social media platform built to connect developers. It features a real-time chat and a project collaboration board.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "#", // Replace with your live demo link
    githubLink: "https://github.com/yourusername/project-alpha",
  },
  {
    title: "Project Beta",
    description:
      "An e-commerce site for handmade goods, designed with a focus on a smooth user experience and secure payments.",
    technologies: ["React", "TypeScript", "Stripe API", "Material-UI"],
    liveLink: "#",
    githubLink: "https://github.com/yourusername/project-beta",
  },
  {
    title: "Portfolio Website",
    description:
      "The very portfolio you are viewing right now! Built to showcase my skills in modern frontend development and design.",
    technologies: ["React", "TypeScript", "Material-UI", "Vite"],
    githubLink: "https://github.com/AravindNarayananS/profile",
  },
];
