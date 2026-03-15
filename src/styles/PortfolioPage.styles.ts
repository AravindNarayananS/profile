import { Box, Card, styled } from "@mui/material";
// Styled Components
export const PortfolioContainer = styled(Box)(
  ({ theme, mode }: { theme?: any; mode: "light" | "dark" }) => ({
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: "monospace",
    color: theme.palette.text.primary,
    padding: theme.spacing(4),
    background:
      mode === "light"
        ? "linear-gradient(to bottom right, #f9fafb, #f9fafb)"
        : "linear-gradient(to bottom right, #121212, #212121)",
  }),
);

export const MainCard = styled(Card)(
  ({ theme, mode }: { theme?: any; mode: "light" | "dark" }) => ({
    maxWidth: 1000,
    width: "100%",
    borderRadius: "1rem",
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      mode === "light"
        ? "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)"
        : "0 8px 20px rgba(0,0,0,0.7)",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow:
        mode === "light"
          ? "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)"
          : "0 12px 25px rgba(0,0,0,0.9)",
    },
  }),
);

export const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));
