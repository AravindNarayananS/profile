import React from "react";
// MUI
import { Typography, Button, Box } from "@mui/material";
// Icons
import {
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

function ContactSection() {
  // Shared Monospace font style
  const mono = { fontFamily: "monospace" };

  // Shared Button styles to keep the JSX clean (DRY principle)
  const buttonStyle = {
    px: 3,
    py: 1.5,
    ...mono,
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    },
  };

  return (
    <Box component="section" sx={{ py: 4 }}>
      {/* 1. HEADER */}
      <Typography
        variant="h2"
        sx={{
          mb: 2,
          display: "flex",
          alignItems: "center",
          color: "primary.main",
          ...mono, // Monospace applied
        }}
      >
        <EmailIcon sx={{ mr: 1, fontSize: "1.75rem" }} /> Get In Touch
      </Typography>

      {/* 2. DESCRIPTION */}
      <Typography 
        variant="body1" 
        sx={{ color: "text.secondary", mb: 4, ...mono }} // Monospace applied
      >
        I'm always open to new opportunities, collaborations, or just a friendly
        chat. Feel free to reach out!
      </Typography>

      {/* 3. BUTTON CONTAINER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: { xs: 2, sm: 3 },
        }}
      >
        {/* EMAIL BUTTON */}
        <Button
          variant="contained"
          color="primary"
          component="a"
          href="https://mail.google.com/mail/?view=cm&to=aravindnarayanans4296@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<EmailIcon />}
          sx={buttonStyle}
        >
          Send Email
        </Button>

        {/* LINKEDIN BUTTON */}
        <Button
          variant="contained"
          color="secondary"
          component="a"
          href="http://linkedin.com/in/aravindnarayanans"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<LinkedInIcon />}
          sx={buttonStyle}
        >
          Connect on LinkedIn
        </Button>
      </Box>
    </Box>
  );
}

export default ContactSection;