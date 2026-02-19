import React, { useState, useMemo } from "react";
import profilePic from "../Asset/profile-pic.jpg";
import {
  Typography,
  Button,
  Box,
  Avatar,
  Card,
  Link,
  IconButton,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Person as PersonIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Import your projects data
import SkillsSection from "./SkillSection";
import ContactSection from "./ContactSection";
import AboutSection from "./AboutSection";

// This is your theme logic. You can keep it here or move it to a separate file.
const getAppTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#2563eb" : "#90caf9",
      },
      secondary: {
        main: mode === "light" ? "#4f46e5" : "#bb86fc",
      },
      background: {
        default: mode === "light" ? "#f3f4f6" : "#121212",
        paper: mode === "light" ? "#ffffff" : "#1e1e1e",
      },
      text: {
        primary: mode === "light" ? "#374151" : "#e0e0e0",
        secondary: mode === "light" ? "#4b5563" : "#b0b0b0",
      },
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.6,
      },
      body2: {
        fontSize: "0.875rem",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 9999,
            textTransform: "none",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "1rem",
            transition: "box-shadow 0.2s ease-in-out",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 9999,
            fontWeight: 500,
            fontSize: "0.875rem",
            padding: "0.25rem 0.75rem",
            backgroundColor: mode === "light" ? "#dbeafe" : "#3f51b5",
            color: mode === "light" ? "#1e40af" : "#e0e0e0",
            "&:hover": {
              backgroundColor: mode === "light" ? "#bfdbfe" : "#5c6bc0",
            },
          },
        },
      },
    },
  });

const PortfolioPage: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background:
            mode === "light"
              ? "linear-gradient(to bottom right, #f9fafb, #e5e7eb)"
              : "linear-gradient(to bottom right, #121212, #212121)",
          fontFamily: "Inter, sans-serif",
          color: "text.primary",
          p: { xs: 2, sm: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Card
          sx={{
            maxWidth: "960px",
            width: "100%",
            borderRadius: "1rem",
            bgcolor: "background.paper",
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
                  : "linear-gradient(to right, #1a237e, #424242)",
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
              <Avatar
                alt="https://placehold.co/128x128/000000/FFFFFF?text=JD"
                src={profilePic}
                sx={{
                  width: { xs: 96, sm: 128 },
                  height: { xs: 96, sm: 128 },
                  bgcolor: "white",
                  border: "4px solid",
                  borderColor: mode === "light" ? "#93c5fd" : "#64b5f6",
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
                  Aravind
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  Software Engineer
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mt: { xs: 3, sm: 0 } }}>
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
                component="a"
                href="https://mail.google.com/mail/?view=cm&to=aravindnarayanans4296@gmail.com"
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
            <AboutSection />

            {/* Skill Section */}
            <SkillsSection />

            {/* Projects Section */}
            {/* <Project/> */}

            {/* Dashboard Overview Section */}
            {/* <DashboardOverview theme={theme}/> */}

            {/* Contact Section */}
            <ContactSection />
          </Box>
        </Card>
        {/* Footer */}
        <Box
          sx={{
            bgcolor: "background.paper",
            color: "text.secondary",
            textAlign: "center",
            p: { xs: 2, sm: 3 },
            borderRadius: "0 0 1rem 1rem",
            mt: "auto",
            width: "100%",
            maxWidth: "960px",
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Aravind . All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PortfolioPage;
