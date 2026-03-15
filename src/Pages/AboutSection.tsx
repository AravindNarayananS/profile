// AboutSection.tsx
import React from "react";
// MUI
import { Typography, Box, Link } from "@mui/material";
// Icon
import { Person as PersonIcon } from "@mui/icons-material";

// Reusable Section Component
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Box sx={{ mb: 3 }}>
    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        mb: 1,
        color: "text.primary",
        fontFamily: "monospace",
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

// Data Arrays
const certifications = [
  { name: "Advanced React", org: "Meta" },
  { name: "Node.Js + Express", org: "IBM" },
  { name: "Front-End Fundamentals", org: "Meta" },
  { name: "Python", org: "OneTeam" },
];

const technicalExpertise = [
  "Bootstrap",
  "Material UI",
  "PrimeReact",
  ".NET backend integration",
  "Performance optimization",
  "User experience design",
];

const professionalDevelopment = [
  "JavaScript (core expertise)",
  "Java",
  "Node.js",
  "Full-stack adaptability",
];

const keyAchievements = [
  {
    text: "Delivered mission-critical features for ",
    link: "https://www.siemens.com",
    highlight: "Siemens",
  },
  {
    text: "Collaborated effectively with cross-functional ",
    highlight: "backend",
  },
  {
    text: "Maintained high standards for ",
    highlight: "responsive design and enterprise-grade application development",
  },
];

const AboutSection = () => {
  const bodyTextStyle = {
    mb: 3,
    color: "text.secondary",
    fontFamily: "monospace",
    "& strong": { fontWeight: 700, color: "primary.main" },
  };

  return (
    <Box sx={{ p: { xs: 3, sm: 4 }, bgcolor: "background.paper" }}>
      
      {/* Header */}
      <Box sx={{ mb: 4, pb: 4, borderBottom: 1, borderColor: "divider" }}>
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            display: "flex",
            alignItems: "center",
            color: "primary.main",
            fontFamily: "monospace",
          }}
        >
          <PersonIcon sx={{ mr: 1, fontSize: "1.75rem" }} /> About Me
        </Typography>

        {/* Professional Summary */}
        <Section title="Professional Summary">
          <Typography variant="body1" sx={bodyTextStyle}>
            Full-stack developer with experience delivering secure SaaS
            applications in regulated environments. Strong expertise in React,
            TypeScript, C#, .NET, Node.js, and Express, building scalable APIs
            and front-end architectures. Passionate about clean code,
            performance optimisation, and Agile product-driven development.
            Skilled at cloud deployment and CI/CD automation using Azure and
            AWS.
          </Typography>
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <Typography variant="body1" sx={bodyTextStyle}>
            {certifications.map((cert, i) => (
              <span key={i}>
                {cert.name} – <strong>{cert.org}</strong>
                {i !== certifications.length - 1 && " | "}
              </span>
            ))}
          </Typography>
        </Section>

        {/* Technical Expertise */}
        <Section title="Technical Expertise">
          <Typography variant="body1" sx={bodyTextStyle}>
            Proficient in modern frontend frameworks and libraries including{" "}
            {technicalExpertise.map((tech, i) => (
              <span key={i}>
                <strong>{tech}</strong>
                {i !== technicalExpertise.length - 1 && ", "}
              </span>
            ))}
            .
          </Typography>
        </Section>

        {/* Professional Development */}
        <Section title="Professional Development">
          <Typography variant="body1" sx={bodyTextStyle}>
            Whilst maintaining core <strong>JavaScript</strong> expertise,
            actively pursuing expansion into{" "}
            {professionalDevelopment.map((skill, i) => (
              <span key={i}>
                <strong>{skill}</strong>
                {i !== professionalDevelopment.length - 1 && ", "}
              </span>
            ))}
            .
          </Typography>
        </Section>

        {/* Key Achievements */}
        <Section title="Key Achievements">
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
            {keyAchievements.map((ach, idx) => (
              <li key={idx}>
                {ach.text}
                {ach.link ? (
                  <Link
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    {ach.highlight}
                  </Link>
                ) : (
                  <strong>{ach.highlight}</strong>
                )}
              </li>
            ))}
          </Box>
        </Section>
      </Box>
    </Box>
  );
};

export default AboutSection;
