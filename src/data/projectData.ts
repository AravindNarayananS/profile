interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    title: "Lanka Valley Resort Website",
    description:
      "A modern and responsive resort website showcasing accommodation, amenities, and booking information. The platform includes interactive galleries, location details, and a seamless user experience to help visitors explore the resort and plan their stay.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://www.lankavalley.in/",
  },
  {
    title: "Service Showcase Web App",
    description:
      "A front-end web application developed to present business services through structured sections such as services, about, and contact. The project demonstrates responsive design principles, reusable components, and modern UI practices.",
    technologies: ["React.js", "HTML5 & CSS3", "TypeScript"],
    liveLink: "https://magical-strudel-2e76ab.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "The very portfolio you are viewing right now! Built to showcase my skills in modern frontend development and design.",
    technologies: ["React", "TypeScript", "Material-UI"],
    githubLink: "https://github.com/AravindNarayananS/profile",
  },
];
