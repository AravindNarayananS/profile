//MUI
import { Box, Card, CardContent, Typography, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";

// Dashboard Container
export const DashboardContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

// Dashboard Heading
export const DashboardHeading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  color: theme.palette.primary.main,
  fontFamily: "monospace",
}));

// Dashboard Description
export const DashboardDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
  fontFamily: "monospace",
}));

// FlipCard Outer Wrapper
export const FlipCardWrapper = styled(Box)(({ theme }) => ({
  perspective: "1000px",
  flex: 1,
  height: 220,
}));

// Inner rotating box
export const FlipCardInner = styled(Box)(({ isFlipped }: { isFlipped: boolean }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  transformStyle: "preserve-3d",
  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  cursor: "pointer",
}));

// Front / Back card base
export const FlipCardBase = styled(Card)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.divider}`,
  display: "flex",
  flexDirection: "column",
}));

export const FlipCardBack = styled(FlipCardBase)(() => ({
  transform: "rotateY(180deg)",
}));

// Card Content
export const FlipCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
}));

// Skill chip
export const SkillChip = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  fontFamily: "monospace",
}));

// Progress wrapper
export const ProgressWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));