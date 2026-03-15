import React, { useState } from "react";
// MUI
import { Typography, Box, Card, CardContent, Chip, LinearProgress } from "@mui/material";
// icons
import { BarChart, TrendingUp } from "@mui/icons-material";
//theme
import { useChipStyle } from "../theme/theme";

/* --- Reusable FlipCard Sub-component --- */
interface SkillFlipCardProps {
  title: string;
  backTitle: string;
  description: string;
  quote: string;
  children: React.ReactNode;
  isFlipped: boolean;
  onFlip: () => void;
}

const SkillFlipCard: React.FC<SkillFlipCardProps> = ({
  title,
  backTitle,
  description,
  quote,
  children,
  isFlipped,
  onFlip,
}) => {
  const cardBase = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    bgcolor: "background.default",
    border: 1,
    borderColor: "divider",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Box sx={{ perspective: "1000px", flex: 1, height: 220 }}>
      <Box
        onClick={onFlip}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          cursor: "pointer",
        }}
      >
        {/* FRONT */}
        <Card sx={cardBase}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
              <TrendingUp color="secondary" sx={{ mr: 1 }} />
              <Typography variant="h3" sx={{ fontFamily: "monospace" }}>
                {title}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
              {description}
            </Typography>
            <Box sx={{ textAlign: "left", mt: 5 }}>
            <Typography
              variant="caption"
              sx={{
                mt: "auto",
                fontFamily: "monospace",
                fontStyle: "italic",
                color: "text.secondary",
                padding: "10px",
              }}
            >
              {quote}
            </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* BACK */}
        <Card
          sx={{
            ...cardBase,
            transform: "rotateY(180deg)",
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h3" sx={{ mb: 2, fontFamily: "monospace" }}>
              {backTitle}
            </Typography>
            {children}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

/* --- Main Component --- */
const DashboardOverview: React.FC = () => {
  const chipStyle = useChipStyle();
  const [flipped, setFlipped] = useState({ card1: false, card2: false });

  // Common font style
  const mono = { fontFamily: "monospace" };

  const toggleFlip = (card: "card1" | "card2") => {
    setFlipped((prev) => ({ ...prev, [card]: !prev[card] }));
  };

  const skills = [
    "Node.js",
    "Redux Toolkit",
    "Express",
    "PrimeReact",
    "Bootstrap",
    "Postman",
  ];

  return (
    <Box sx={{ mb: 4, pb: 4, borderBottom: 1, borderColor: "divider" }}>
      {/* 1. DASHBOARD OVERVIEW */}
      <Typography
        variant="h2"
        sx={{
          mb: 2,
          display: "flex",
          alignItems: "center",
          color: "primary.main",
          ...mono,
        }}
      >
        <BarChart sx={{ mr: 1, fontSize: "1.75rem" }} /> Dashboard Overview
      </Typography>

      {/* 2. DESCRIPTION */}
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary", ...mono }}>
        A snapshot of my current stack and the technologies I'm mastering next.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
        }}
      >
        {/* CARD 1: NEW SKILLS */}
        <SkillFlipCard
          title="New Skills"
          backTitle="Newly Acquired"
          description="Click to flip and explore my skills 💻"
          quote="It is not that I'm so smart. But I stay with the problems much longer — Albert Einstein"
          isFlipped={flipped.card1}
          onFlip={() => toggleFlip("card1")}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{ ...chipStyle, ...mono, mr: 1, mb: 1 }}
              />
            ))}
          </Box>
        </SkillFlipCard>

        {/* CARD 2: LEARNING */}
        <SkillFlipCard
          title="Currently Learning"
          backTitle="Skill Quest"
          description="Click to flip and check what I’m learning 🚀"
          quote="Programming is the art of telling another human being exactly what one wants the computer to do. — Donald Knuth"
          isFlipped={flipped.card2}
          onFlip={() => toggleFlip("card2")}
        >
          {[
            { name: "Java", val: 60 },
            { name: "Spring Boot", val: 70 },
          ].map((item) => (
            <Box key={item.name} sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 0.5, ...mono }}>
                {item.name}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={item.val}
                sx={{ height: 8, borderRadius: 5 }}
              />
            </Box>
          ))}
        </SkillFlipCard>
      </Box>
    </Box>
  );
};

export default DashboardOverview;