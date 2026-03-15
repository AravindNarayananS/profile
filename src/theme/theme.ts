import { createTheme, useTheme } from "@mui/material/styles";

export const getAppTheme = (mode: "light" | "dark") =>
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

export const useChipStyle = () => {
  const theme = useTheme(); 

  return {
    borderRadius: 9999,
    fontWeight: 500,
    fontSize: "0.875rem",
    fontFamily: "monospace",
    backgroundColor: theme.palette.mode === "light" ? "#dbeafe" : "#3f51b5",
    color: theme.palette.mode === "light" ? "#1e40af" : "#e0e0e0",
    "&:hover": {
      backgroundColor: theme.palette.mode === "light" ? "#bfdbfe" : "#5c6bc0",
    },
  };
};

export const useCardStyle = () => {
  const theme = useTheme(); 

  return {
    bgcolor: "background.paper",
    borderRadius: "1rem",
    border: 1,
    borderColor: "divider",
    flex: "1 1 100%",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: theme.palette.mode === "light"
        ? "0 8px 16px rgba(0,0,0,0.1)"
        : "0 8px 16px rgba(255,255,255,0.05)",
    },
  };
};