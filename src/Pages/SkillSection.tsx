// SkillsSection.tsx
import React from "react";
// MUI
import { Box, Typography, Chip, useTheme } from "@mui/material";
// Icon
import { Code as CodeIcon } from "@mui/icons-material";
import { useChipStyle } from "../Components/Theme";

// Interface for skills group
interface SkillGroup {
  category: string;
  skills: string[];
}

// Data for technical skills
const technicalSkills: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML", "CSS", "Material UI", "Bootstrap", "Redux"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", ".NET", "REST APIs", "GraphQL", "Microservices", "JWT"],
  },
  {
    category: "Databases & Storage",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "NoSQL concepts"],
  },
  {
    category: "Development Practices",
    skills: ["Git", "Agile Methodologies", "Agile Project Management", "CI/CD", "SDLC"],
  },
  {
    category: "Other Tools",
    skills: ["Git", "Jira", "Confluence", "Postman", "Swagger/OpenAPI"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Azure", "AWS", "Docker", "Jenkins", "Kubernetes", "GitHub Actions", "Cloud Monitoring"],
  },
  {
    category: "Architecture & Design",
    skills: ["Responsive Design", "Scalable Patterns", "Design Systems", "Microservices Architecture", "API Design"],
  },
];

// Reusable SkillGroup Component
const SkillGroupComponent: React.FC<{ group: SkillGroup }> = ({ group }) => {
  const theme = useTheme();

  // const chipStyle = {
  //   borderRadius: 9999,
  //   fontWeight: 500,
  //   fontSize: "0.875rem",
  //   fontFamily: "monospace",
  //   backgroundColor: theme.palette.mode === "light" ? "#dbeafe" : "#3f51b5",
  //   color: theme.palette.mode === "light" ? "#1e40af" : "#e0e0e0",
  //   "&:hover": {
  //     backgroundColor: theme.palette.mode === "light" ? "#bfdbfe" : "#5c6bc0",
  //   },
  // };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", mb: 1, color: theme.palette.text.primary, fontFamily: "monospace" }}
      >
        {group.category}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: { xs: "center", sm: "flex-start" } }}>
        {group.skills.map((skill, i) => (
          <Chip key={i} label={skill} sx={useChipStyle} />
        ))}
      </Box>
    </Box>
  );
};

// Main SkillsSection Component
const SkillsSection: React.FC = () => {
  return (
    <Box sx={{ mb: 4, pb: 4, borderBottom: 1, borderColor: "divider" }}>
      <Typography
        variant="h2"
        sx={{ mb: 2, display: "flex", alignItems: "center", color: "primary.main", fontFamily: "monospace" }}
      >
        <CodeIcon sx={{ mr: 1, fontSize: "1.75rem" }} /> Technical Skills
      </Typography>

      {technicalSkills.map((group, index) => (
        <SkillGroupComponent key={index} group={group} />
      ))}
    </Box>
  );
};

export default SkillsSection;