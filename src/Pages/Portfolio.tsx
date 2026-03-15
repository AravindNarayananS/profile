import React, { useState, useMemo } from "react";
//MUI
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Card } from "@mui/material";
//Theme
import { getAppTheme } from "../Components/Theme";
// Sections / Pages
import Project from "./Project";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillSection";
import ContactSection from "./ContactSection";
import DashboardOverview from "./DashboardOverview";

// THEME SETUP FUNCTION
// const getAppTheme = (mode: "light" | "dark") =>
//   createTheme({
//     palette: {
//       mode,
//       primary: {
//         main: mode === "light" ? "#2563eb" : "#90caf9",
//       },
//       secondary: {
//         main: mode === "light" ? "#4f46e5" : "#bb86fc",
//       },
//       background: {
//         default: mode === "light" ? "#f3f4f6" : "#121212",
//         paper: mode === "light" ? "#ffffff" : "#1e1e1e",
//       },
//       text: {
//         primary: mode === "light" ? "#374151" : "#e0e0e0",
//         secondary: mode === "light" ? "#4b5563" : "#b0b0b0",
//       },
//     },
//     typography: {
//       fontFamily: "Inter, sans-serif",
//       h1: {
//         fontSize: "2.5rem",
//         fontWeight: 700,
//       },
//       h2: {
//         fontSize: "2rem",
//         fontWeight: 600,
//       },
//       h3: {
//         fontSize: "1.5rem",
//         fontWeight: 600,
//       },
//       body1: {
//         fontSize: "1rem",
//         lineHeight: 1.6,
//       },
//       body2: {
//         fontSize: "0.875rem",
//       },
//     },
//     components: {
//       MuiButton: {
//         styleOverrides: {
//           root: {
//             borderRadius: 9999,
//             textTransform: "none",
//           },
//         },
//       },
//       MuiCard: {
//         styleOverrides: {
//           root: {
//             borderRadius: "1rem",
//             transition: "box-shadow 0.2s ease-in-out",
//           },
//         },
//       },
//       MuiChip: {
//         styleOverrides: {
//           root: {
//             borderRadius: 9999,
//             fontWeight: 500,
//             fontSize: "0.875rem",
//             padding: "0.25rem 0.75rem",
//             backgroundColor: mode === "light" ? "#dbeafe" : "#3f51b5",
//             color: mode === "light" ? "#1e40af" : "#e0e0e0",
//             "&:hover": {
//               backgroundColor: mode === "light" ? "#bfdbfe" : "#5c6bc0",
//             },
//           },
//         },
//       },
//     },
//   });

  

// MAIN PORTFOLIO COMPONENT
const PortfolioPage: React.FC = () => {
  //States
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const theme = useMemo(() => getAppTheme(mode), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

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
          fontFamily: "monospace",
          color: "text.primary",
          p: { xs: 2, sm: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* MAIN CARD CONTAINER */}
        <Card
          sx={{
            maxWidth: "1000px",
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
          <Header mode={mode} toggleColorMode={toggleColorMode} />
          {/* MAIN CONTENT SECTIONS */}
          <Box sx={{ p: { xs: 3, sm: 4 }, bgcolor: "background.paper" }}>
            <AboutSection />
            <SkillsSection />
            <Project />
            <DashboardOverview/>
            <ContactSection />
          </Box>
        <Footer />
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default PortfolioPage;
