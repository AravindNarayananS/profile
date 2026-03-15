import React, { useState, useMemo } from "react";
//MUI
import { Box, Card } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
// Sections | Pages
import Project from "./Project";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillSection";
import ContactSection from "./ContactSection";
import DashboardOverview from "./DashboardOverview";
import { getAppTheme } from "../theme/theme";

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
              ? "linear-gradient(to bottom right, #f9fafb, #f9fafb)"
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
