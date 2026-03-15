
import React from "react";
//MUI
import { Box, Typography } from "@mui/material";
import { TrendingUp } from "@mui/icons-material";
// styles
import {
  FlipCardWrapper,
  FlipCardInner,
  FlipCardBase,
  FlipCardBack,
  FlipCardContent,
} from "../styles/DashboardOverview.styles";

// Props interface
interface SkillFlipCardProps {
  title: string;
  backTitle: string;
  description: string;
  quote: string;
  children: React.ReactNode;
  isFlipped: boolean;
  onFlip: () => void;
}

// Flip Card component
const SkillFlipCard: React.FC<SkillFlipCardProps> = ({
  title,
  backTitle,
  description,
  quote,
  children,
  isFlipped,
  onFlip,
}) => {
  return (
    <FlipCardWrapper>
      <FlipCardInner isFlipped={isFlipped} onClick={onFlip}>
        {/* FRONT */}
        <FlipCardBase>
          <FlipCardContent>
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
                  fontFamily: "monospace",
                  fontStyle: "italic",
                  color: "text.secondary",
                  padding: "10px",
                }}
              >
                {quote}
              </Typography>
            </Box>
          </FlipCardContent>
        </FlipCardBase>

        {/* BACK */}
        <FlipCardBack>
          <FlipCardContent>
            <Typography variant="h3" sx={{ mb: 2, fontFamily: "monospace" }}>
              {backTitle}
            </Typography>
            {children}
          </FlipCardContent>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardWrapper>
  );
};

export default SkillFlipCard;