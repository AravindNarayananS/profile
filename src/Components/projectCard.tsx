// src/components/ProjectCard.tsx

import React from "react";
import { Card, CardContent, Typography, Link, Chip, Box } from "@mui/material";
import { GitHub as GitHubIcon } from "@mui/icons-material";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  liveLink,
  githubLink,
}) => {
  return (
    <Card
      sx={{
        bgcolor: "background.default",
        border: 1,
        borderColor: "divider",
        flex: "1 1 100%",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h3" sx={{ mb: 1, color: "text.primary" }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
          {description}
        </Typography>
        <Box sx={{ mb: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
          {technologies.map((tech, index) => (
            <Chip key={index} label={tech} size="small" />
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontWeight: 500 }}
            >
              Live Demo &rarr;
            </Link>
          )}
          {githubLink && (
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </Link>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
