import React from "react";
// MUI
import { Card, CardContent, Typography, Link, Chip, Box, useTheme } from "@mui/material";
// Icon
import { GitHub as GitHubIcon } from "@mui/icons-material";
import { useCardStyle, useChipStyle } from "./Theme";

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

  // Styles
  // const cardStyle = {
  //   bgcolor: "background.paper",
  //   borderRadius: "1rem",
  //   border: 1,
  //   borderColor: "divider",
  //   flex: "1 1 100%",
  //   transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  //   "&:hover": {
  //     transform: "scale(1.03)",
  //     boxShadow: theme.palette.mode === "light"
  //       ? "0 8px 16px rgba(0,0,0,0.1)"
  //       : "0 8px 16px rgba(255,255,255,0.05)",
  //   },
  // };

  // const chipStyle = {
  //   borderRadius: 9999,
  //   fontWeight: 500,
  //   fontSize: "0.75rem",
  //   backgroundColor: theme.palette.mode === "light" ? "#dbeafe" : "#3f51b5",
  //   color: theme.palette.mode === "light" ? "#1e40af" : "#e0e0e0",
  //   "&:hover": {
  //     backgroundColor: theme.palette.mode === "light" ? "#bfdbfe" : "#5c6bc0",
  //   },
  // };

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
        <Typography
          variant="h3"
          sx={{
            mb: 1,
            color: theme.palette.text.primary,
            fontFamily: "monospace",
          }}
        >
          {/* {title} */}

            {githubLink ? (
              <Link href={githubLink} target="_blank" rel="noopener noreferrer" sx={linkStyle}>
              {title}
              <GitHubIcon />
            </Link>
          ): (title) }
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.secondary, mb: 2, fontFamily: "monospace" }}
        >
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
          {/* {githubLink && (
            <Link href={githubLink} target="_blank" rel="noopener noreferrer" sx={linkStyle}>
              <GitHubIcon />
            </Link>
          )} */}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;