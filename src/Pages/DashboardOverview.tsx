import React, { useState } from "react";
//MUI
import { Box, Typography, LinearProgress } from "@mui/material";
import { BarChart } from "@mui/icons-material";
//theme
import { useChipStyle } from "../theme/theme";
//styles
import {
  DashboardContainer,
  DashboardHeading,
  DashboardDescription,
  SkillChip,
  ProgressWrapper,
} from "../styles/DashboardOverview.styles";
//component
import SkillFlipCard from "../components/skillFlipCard";


const DashboardOverview: React.FC = () => {
  const chipStyle = useChipStyle();
  const [flipped, setFlipped] = useState({ card1: false, card2: false });

  const toggleFlip = (card: "card1" | "card2") => {
    setFlipped((prev) => ({ ...prev, [card]: !prev[card] }));
  };

  const skills = ["Node.js", "Redux Toolkit", "Express", "PrimeReact", "Bootstrap", "Postman"];

  return (
    <DashboardContainer>
      <DashboardHeading variant="h2">
        <BarChart sx={{ mr: 1, fontSize: "1.75rem" }} /> Dashboard Overview
      </DashboardHeading>
      <DashboardDescription variant="body1">
        A snapshot of my current stack and the technologies I'm mastering next.
      </DashboardDescription>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3 }}>
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
              <SkillChip key={skill} label={skill} sx={chipStyle} />
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
          {[{ name: "Java", val: 60 }, { name: "Spring Boot", val: 70 }].map((item) => (
            <ProgressWrapper key={item.name}>
              <Typography variant="body2" sx={{ mb: 0.5, fontFamily: "monospace" }}>
                {item.name}
              </Typography>
              <LinearProgress variant="determinate" value={item.val} sx={{ height: 8, borderRadius: 5 }} />
            </ProgressWrapper>
          ))}
        </SkillFlipCard>
      </Box>
    </DashboardContainer>
  );
};

export default DashboardOverview;