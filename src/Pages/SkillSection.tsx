// src/components/SkillsSection.tsx

import React from "react";
import { Box, Typography, Chip, useTheme } from "@mui/material";
import { Code as CodeIcon } from "@mui/icons-material";

interface SkillGroup {
  category: string;
  skills: string[];
}

const technicalSkills: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Redux Thunk",
      "Zustand",
      "React Hooks",
      "GraphQL",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Document Object Model (DOM)",
      "Material-UI",
      "Bootstrap",
      "Webpack",
      "Axios",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      ".NET MVC",
      ".NET Framework",
      "SQL",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    category: "Development Practices",
    skills: [
      "Git",
      "Agile Methodologies",
      "Agile Environment",
      "Agile Project Management",
      "Continuous Integration and Continuous Delivery (CI/CD)",
      "SDLC",
      "Agile Web Development",
      "Agile Application Development",
    ],
  },
  {
    category: "Additional Skills",
    skills: [
      "Python",
      "C++",
      "Computer Vision",
      "Deep Learning",
      "Performance Optimization",
      "Model Deployment",
      "Code Refactoring",
    ],
  },
  {
    category: "Specialized Domains",
    skills: ["Facility Management", "Retail"],
  },
];

const SkillsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 4, pb: 4, borderBottom: 1, borderColor: "divider" }}>
      <Typography
        variant="h2"
        sx={{
          mb: 2,
          display: "flex",
          alignItems: "center",
          color: "primary.main",
        }}
      >
        <CodeIcon sx={{ mr: 1, fontSize: "1.75rem" }} /> Technical Skills
      </Typography>

      {technicalSkills.map((group, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 1,
              color: theme.palette.text.primary,
            }}
          >
            {group.category}:
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            {group.skills.map((skill, skillIndex) => (
              <Chip key={skillIndex} label={skill} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SkillsSection;
