import React, { useState, useMemo } from "react";
import profilePic from './Asset/profile-pic.JPG';
import {
  Typography,
  Button,
  Box,
  Avatar,
  Card,
  CardContent,
  Link,
  Chip,
  IconButton,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Person as PersonIcon,
  Code as CodeIcon,
  Work as WorkIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  BarChart, // For dashboard card
  TrendingUp, // For dashboard card
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Function to create the theme based on the mode (now local to App.tsx)
const getAppTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#2563eb" : "#90caf9", // Blue-600 light, Light Blue-200 dark
      },
      secondary: {
        main: mode === "light" ? "#4f46e5" : "#bb86fc", // Indigo-700 light, Purple-200 dark
      },
      background: {
        default: mode === "light" ? "#f3f4f6" : "#121212", // Gray-100 light, Very Dark Gray dark
        paper: mode === "light" ? "#ffffff" : "#1e1e1e", // White light, Dark Gray dark
      },
      text: {
        primary: mode === "light" ? "#374151" : "#e0e0e0", // Gray-800 light, Light Gray dark
        secondary: mode === "light" ? "#4b5563" : "#b0b0b0", // Gray-700 light, Medium Gray dark
      },
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: "2.5rem", // sm:text-4xl
        fontWeight: 700,
      },
      h2: {
        fontSize: "2rem", // sm:text-3xl
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.5rem", // text-xl
        fontWeight: 600,
      },
      body1: {
        fontSize: "1rem", // text-base
        lineHeight: 1.6,
      },
      body2: {
        fontSize: "0.875rem", // text-sm
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 9999, // rounded-full
            textTransform: "none", // Prevent uppercase
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "1rem", // rounded-xl
            transition: "box-shadow 0.2s ease-in-out",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 9999, // rounded-full
            fontWeight: 500, // font-medium
            fontSize: "0.875rem", // text-sm
            padding: "0.25rem 0.75rem", // px-4 py-2
            // Dynamic chip colors based on mode
            backgroundColor: mode === "light" ? "#dbeafe" : "#3f51b5", // blue-100 light, darker blue dark
            color: mode === "light" ? "#1e40af" : "#e0e0e0", // blue-800 light, light gray dark
            "&:hover": {
              backgroundColor: mode === "light" ? "#bfdbfe" : "#5c6bc0", // blue-200 light, even darker blue dark
            },
          },
        },
      },
    },
  });

const App: React.FC = () => {
  // State to manage the color mode (light or dark)
  const [mode, setMode] = useState<"light" | "dark">("dark"); // Start in dark mode

  // Function to toggle the color mode
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Memoize the theme creation using the local getAppTheme function
  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides a consistent baseline for CSS */}
      <Box
        sx={{
          minHeight: "100vh",
          background:
            mode === "light"
              ? "linear-gradient(to bottom right, #f9fafb, #e5e7eb)"
              : "linear-gradient(to bottom right, #121212, #212121)", // Dynamic gradient
          fontFamily: "Inter, sans-serif",
          color: "text.primary", // Use theme text color
          p: { xs: 2, sm: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: "960px",
            width: "100%",
            borderRadius: "1rem",
            bgcolor: "background.paper", // Use theme paper background
            boxShadow:
              mode === "light"
                ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                : "0 8px 20px rgba(0, 0, 0, 0.7)",
            overflow: "hidden",
            transform: "scale(1)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.01)",
              boxShadow:
                mode === "light"
                  ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  : "0 12px 25px rgba(0, 0, 0, 0.9)",
            },
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              position: "relative",
              background:
                mode === "light"
                  ? "linear-gradient(to right, #2563eb, #4f46e5)"
                  : "linear-gradient(to right, #1a237e, #424242)", // Dynamic gradient
              color: "white",
              p: { xs: 3, sm: 4 },
              borderRadius: "1rem 1rem 0 0",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Profile Picture Placeholder */}
              <Avatar
                 alt="https://placehold.co/128x128/000000/FFFFFF?text=JD" 
                 src={profilePic}
                sx={{
                  width: { xs: 96, sm: 128 },
                  height: { xs: 96, sm: 128 },
                  bgcolor: "white",
                  border: "4px solid",
                  borderColor: mode === "light" ? "#93c5fd" : "#64b5f6", // Dynamic border color
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <PersonIcon
                  sx={{
                    width: { xs: 64, sm: 80 },
                    height: { xs: 64, sm: 80 },
                    color: "#2563eb",
                  }}
                />
              </Avatar>
              <Box
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                  mt: { xs: 2, sm: 0 },
                }}
              >
                <Typography variant="h1" sx={{ mb: 0.5 }}>
                  Aravind Narayanan
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  Software Engineer | Web Developer
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mt: { xs: 3, sm: 0 } }}>
              {/* Social Links */}
              <Button
                component={Link}
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  minWidth: 0,
                  p: 1.5,
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "50%",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                  },
                }}
                aria-label="GitHub Profile"
              >
                <GitHubIcon sx={{ color: "white" }} />
              </Button>
              <Button
                component={Link}
                // href="https://linkedin.com/in/yourusername"
                href="http://linkedin.com/in/aravindnarayanans"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  minWidth: 0,
                  p: 1.5,
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "50%",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                  },
                }}
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon sx={{ color: "white" }} />
              </Button>
              <Button
                // component={Link}
                component="a"
                href="https://mail.google.com/mail/?view=cm&to=aravindnarayanan4296@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  minWidth: 0,
                  p: 1.5,
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "50%",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                  },
                }}
                aria-label="Email"
              >
                <EmailIcon sx={{ color: "white" }} />
              </Button>
              {/* Theme Toggle Button */}
              <IconButton
                sx={{
                  ml: { xs: 0, sm: 2 },
                  p: 1.5,
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "50%",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                  },
                }}
                onClick={toggleColorMode}
                color="inherit"
                aria-label="toggle light/dark mode"
              >
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          </Box>

          {/* Main Content Area */}
          <Box sx={{ p: { xs: 3, sm: 4 }, bgcolor: "background.paper" }}>
            {/* About Section */}
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
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Frontend Developer with 3+ years of experience building
                responsive, enterprise-grade web apps using React. Contributed
                to{" "}
                <Link
                  href="https://www.siemens.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  Siemens
                </Link>{" "}
                digital platforms via a vendor engagement, with hands-on work on
                Siemens, a comprehensive facility management system. Delivered
                critical features across modules like space management,
                inventory, and maintenance. Collaborated with .NET teams on
                backend integration and testing. Skilled in Bootstrap, Material
                UI, and PrimeReact, with a strong focus on performance and UX.
                While specialising in JavaScript, I’m keen to expand into Java
                and Node.js, bringing adaptability and a full-stack mindset.
              </Typography>
            </Box>

            {/* Skills Section */}
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
                <CodeIcon sx={{ mr: 1, fontSize: "1.75rem" }} /> Skills
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                {[
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "HTML5",
                  "CSS3",
                  "Material-UI",
                  "Node.js",
                  "SDLC",
                  "Git",
                  "REST APIs",
                  "SQL",
                  "Agile Methadologies"
                ].map((skill, index) => (
                  <Chip key={index} label={skill} />
                ))}
              </Box>
            </Box>

            {/* Projects Section (Placeholder) */}
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
                  gap: 3,
                }}
              >
                {/* Project Card 1 */}
                <Card
                  sx={{
                    bgcolor: "background.default",
                    border: 1,
                    borderColor: "divider",
                    flex: "1 1 100%",
                    maxWidth: { md: "calc(50% - 12px)" },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h3"
                      sx={{ mb: 1, color: "text.primary" }}
                    >
                      Project Alpha
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      A brief description of Project Alpha, highlighting its
                      purpose and the technologies used. This project
                      demonstrated my ability to build a full-stack application.
                    </Typography>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "primary.main",
                        fontWeight: 500,
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      View Project &rarr;
                    </Link>
                  </CardContent>
                </Card>
                {/* Project Card 2 */}
                <Card
                  sx={{
                    bgcolor: "background.default",
                    border: 1,
                    borderColor: "divider",
                    flex: "1 1 100%",
                    maxWidth: { md: "calc(50% - 12px)" },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h3"
                      sx={{ mb: 1, color: "text.primary" }}
                    >
                      Project Beta
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      Description of Project Beta, focusing on a specific
                      feature or challenge overcome. Showcased my
                      problem-solving skills and attention to detail.
                    </Typography>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "primary.main",
                        fontWeight: 500,
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      View Project &rarr;
                    </Link>
                  </CardContent>
                </Card>
              </Box>
              <Typography
                variant="body1"
                sx={{ textAlign: "center", color: "text.secondary", mt: 3 }}
              >
                More projects coming soon!
              </Typography>
            </Box>

            {/* NEW: Dashboard Overview Section */}
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
                <BarChart sx={{ mr: 1, fontSize: "1.75rem" }} /> Dashboard
                Overview
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, color: "text.secondary" }}
              >
                A quick glance at some key metrics or highlights.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // Stack on small, row on medium+
                  gap: 3,
                }}
              >
                {/* Dashboard Card 1: Active Projects */}
                <Card
                  sx={{
                    bgcolor: "background.default",
                    border: 1,
                    borderColor: "divider",
                    flex: "1 1 100%",
                    maxWidth: { sm: "calc(50% - 12px)" }, // Two cards per row on small+
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
                    >
                      <BarChart color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h3" sx={{ color: "text.primary" }}>
                        Active Projects
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      Currently working on 3 exciting projects.
                    </Typography>
                    <Chip
                      label="Ongoing"
                      sx={{
                        bgcolor: theme.palette.info.light,
                        color: theme.palette.info.contrastText,
                      }}
                    />
                  </CardContent>
                </Card>

                {/* Dashboard Card 2: Skill Development */}
                <Card
                  sx={{
                    bgcolor: "background.default",
                    border: 1,
                    borderColor: "divider",
                    flex: "1 1 100%",
                    maxWidth: { sm: "calc(50% - 12px)" },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
                    >
                      <TrendingUp color="secondary" sx={{ mr: 1 }} />
                      <Typography variant="h3" sx={{ color: "text.primary" }}>
                        New Skills
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      Recently added Machine Learning to my tech stack.
                    </Typography>
                    <Chip
                      label="Learning"
                      sx={{
                        bgcolor: theme.palette.warning.light,
                        color: theme.palette.warning.contrastText,
                      }}
                    />
                  </CardContent>
                </Card>
              </Box>
              <Typography
                variant="body2"
                sx={{ textAlign: "center", color: "text.secondary", mt: 3 }}
              >
                This is a small, integrated dashboard. Customize it with your
                own data!
              </Typography>
            </Box>

            {/* Contact Section */}
            <Box>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  color: "primary.main",
                }}
              >
                <EmailIcon sx={{ mr: 1, fontSize: "1.75rem" }} /> Get In Touch
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3 }}
              >
                I'm always open to new opportunities, collaborations, or just a
                friendly chat. Feel free to reach out!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: 2, sm: 3 },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  component="a"
                  href="https://mail.google.com/mail/?view=cm&to=aravindnarayanan4296@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 3,
                    py: 1.5,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      bgcolor: "primary.dark",
                      transform: "scale(1.05)",
                    },
                    transition: "transform 0.2s ease-in-out",
                  }}
                  startIcon={<EmailIcon />}
                >
                  Send Email
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  href="http://linkedin.com/in/aravindnarayanans"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 3,
                    py: 1.5,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      bgcolor: "secondary.dark",
                      transform: "scale(1.05)",
                    },
                    transition: "transform 0.2s ease-in-out",
                  }}
                  startIcon={<LinkedInIcon />}
                >
                  Connect on LinkedIn
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
      {/* Footer */}
      <Box
        sx={{
          bgcolor: "background.paper",
          color: "text.secondary",
          textAlign: "center",
          p: { xs: 2, sm: 3 },
          borderRadius: "0 0 1rem 1rem",
          mt: "auto",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Aravind Narayanan. All rights
          reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;
