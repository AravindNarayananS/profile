import React from "react";
//Assets
import profilePic from "../assets/profile-pic.jpg";
//MUI
import { Box, Avatar, Typography, Button, IconButton, Link } from "@mui/material";
//icon
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  Person as PersonIcon,
} from "@mui/icons-material";

interface HeaderProps {
  mode: "light" | "dark";
  toggleColorMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ mode, toggleColorMode }) => {
  return (
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
          <Typography
            variant="h1"
            sx={{ fontWeight: 300, fontFamily: "monospace" }}
          >
            <span className="typing">Aravind</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 300, fontFamily: "monospace" }}
          >
            <span className="typing">Software Engineer</span>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 2, mt: { xs: 3, sm: 0 } }}>
        <Button
          component={Link}
          href="https://github.com/AravindNarayananS"
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
  );
};

export default React.memo(Header);
