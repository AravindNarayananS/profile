import React, { useState, useMemo, useCallback, Suspense, lazy } from "react";
//MUI
import { CssBaseline, ThemeProvider } from "@mui/material";
//layout
import Header from "../layout/Header";
import Footer from "../layout/Footer";
//theme
import { getAppTheme } from "../theme/theme";
//pages
import Project from "./Project";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillSection";
import ContactSection from "./ContactSection";
import DashboardOverview from "./DashboardOverview";
//styles
import { ContentWrapper, MainCard, PortfolioContainer } from "../styles/PortfolioPage.styles";


// Main Portfolio Page Component

const PortfolioPage: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  const toggleColorMode = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PortfolioContainer mode={mode}>
        <MainCard mode={mode}>
          <Header mode={mode} toggleColorMode={toggleColorMode} />
          <ContentWrapper>
              <AboutSection />
              <SkillsSection />
              <Project />
              <DashboardOverview />
              <ContactSection />
          </ContentWrapper>
          <Footer />
        </MainCard>
      </PortfolioContainer>
    </ThemeProvider>
  );
};

export default PortfolioPage;
