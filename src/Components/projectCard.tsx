import React from "react";
// MUI
import { Card, CardContent, Typography, Link, Chip, Box, useTheme } from "@mui/material";
// Icon
import { GitHub as GitHubIcon } from "@mui/icons-material";
//theme
import { useCardStyle, useChipStyle } from "../theme/theme";

// Props interface
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
  const theme = useTheme();
  const linkStyle = {
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    "&:hover": {
      textDecoration: "underline",
    },
  };

  return (
    <Card sx={useCardStyle}>
      <CardContent sx={{ p: 3 }}>

        {/* Project Title */}
        <Typography variant="h3" sx={{ mb: 1, color: theme.palette.text.primary, fontFamily: "monospace"}} >
            {githubLink ? (
              <Link href={githubLink} target="_blank" rel="noopener noreferrer" sx={linkStyle}>
              {title}
              <GitHubIcon />
            </Link>
          ): (title) }
        </Typography>

        {/* Description */}
        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 2, fontFamily: "monospace" }}>
          {description}
        </Typography>

        {/* Technologies */}
        <Box sx={{ mb: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
          {technologies.map((tech, index) => (
            <Chip key={index} label={tech} size="small" sx={useChipStyle} />
          ))}
        </Box>

        {/* Links */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
          {liveLink && (
            <Link href={liveLink} target="_blank" rel="noopener noreferrer" sx={linkStyle}>
              Live Demo &rarr;
            </Link>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;