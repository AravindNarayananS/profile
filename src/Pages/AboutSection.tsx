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
          Full-stack developer with experience delivering secure SaaS
          applications in regulated environments. Strong expertise in React,
          TypeScript, C#, .NET, Node.js, and Express, building scalable APIs and
          front-end architectures. Passionate about clean code, performance
          optimisation, and Agile productdriven development. Skilled at cloud
          deployment and CI/CD automation using Azure and AWS
        </Typography>

        {/* Certifications */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 1, color: "text.primary" }}
        >
          Certifications
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "text.secondary",
            "& strong": { fontWeight: 700, color: "primary.main" },
          }}
        >
          Advanced React – <strong>Meta</strong>&nbsp;|&nbsp; Node.Js + Express –
          <strong>IBM</strong>&nbsp;|&nbsp; React Js – <strong>Great Learning</strong>&nbsp;|&nbsp; Python – <strong>OneTeam</strong>
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
