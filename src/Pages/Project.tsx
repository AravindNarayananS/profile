//MUI
import { Typography, Box } from "@mui/material";
//Icons
import { Work as WorkIcon } from "@mui/icons-material";
// component
import ProjectCard from "../components/projectCard";
// data
import { projects } from "../data/projectData";

const Project = () => {
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
        <WorkIcon sx={{ mr: 1, fontSize: "1.75rem" }} /> Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {projects.map((project: any, index: any) => (
          <Box key={index} sx={{ flex: "1 1 45%", minWidth: { md: 400 } }}>
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Project;
