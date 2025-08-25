import { Typography, Box, Link } from "@mui/material";
import { Person as PersonIcon } from "@mui/icons-material";

// Import your projects data
const AboutSection = () => {
  return (
    <Box sx={{ p: { xs: 3, sm: 4 }, bgcolor: "background.paper" }}>
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
          <PersonIcon sx={{ mr: 1, fontSize: "1.75rem" }} /> About Me
        </Typography>

        {/* Professional Summary */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 1, color: "text.primary" }}
        >
          Professional Summary
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "text.secondary",
            "& strong": { fontWeight: 700, color: "primary.main" },
          }}
        >
          Experienced Full-Stack Developer specialising in responsive,
          enterprise-grade web applications built with <strong>React</strong>.
          Demonstrated expertise through vendor engagement with{" "}
          <Link
            href="https://www.siemens.com"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            Siemens
          </Link>{" "}
          , contributing to their digital platforms including comprehensive
          facility management systems. Successfully delivered critical
          functionality across multiple modules encompassing space management,
          inventory control, and maintenance operations.
        </Typography>

        {/* Technical Expertise */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 1, color: "text.primary" }}
        >
          Technical Expertise
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "text.secondary",
            "& strong": { fontWeight: 700, color: "primary.main" },
          }}
        >
          Proficient in modern frontend frameworks and libraries including{" "}
          <strong>Bootstrap</strong>, <strong>Material UI</strong>, and{" "}
          <strong>PrimeReact</strong>, with particular emphasis on performance
          optimisation and user experience design. Experienced in collaborative
          development with <strong>.NET</strong> backend teams, covering
          integration work and comprehensive testing protocols.
        </Typography>

        {/* Professional Development */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 1, color: "text.primary" }}
        >
          Professional Development
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "text.secondary",
            "& strong": { fontWeight: 700, color: "primary.main" },
          }}
        >
          Whilst maintaining core <strong>JavaScript</strong> expertise,
          actively pursuing expansion into <strong>Java</strong> and{" "}
          <strong>Node.js</strong> technologies. Committed to bringing
          adaptability and comprehensive full-stack capabilities to development
          projects.
        </Typography>

        {/* Key Achievements */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 1, color: "text.primary" }}
        >
          Key Achievements
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "text.secondary",
            m: 0,
            pl: 2,
            "& li": { mb: 1 },
            "& strong": { fontWeight: 700, color: "primary.main" },
          }}
        >
          <li>
            Delivered mission-critical features for{" "}
            <Link
              href="https://www.siemens.com"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              Siemens
            </Link>{" "}
            facility management platforms
          </li>
          <li>
            Collaborated effectively with cross-functional{" "}
            <strong>backend</strong> development teams
          </li>
          <li>
            Maintained high standards for <strong>responsive design</strong> and{" "}
            <strong>enterprise-grade</strong> application development
          </li>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
