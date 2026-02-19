import { Typography, Button, Box } from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

// Import your projects data

function ContactSection() {
  return (
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
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
        I'm always open to new opportunities, collaborations, or just a friendly
        chat. Feel free to reach out!
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
          href="https://mail.google.com/mail/?view=cm&to=aravindnarayanans4296@gmail.com"
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
  );
}

export default ContactSection;
