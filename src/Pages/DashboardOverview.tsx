import React from "react";
import { Typography, Box, Card, CardContent, Chip } from "@mui/material";
import { BarChart, TrendingUp } from "@mui/icons-material";

// Import your projects data

type Themes = {
  theme: any;
};

const DashboardOverview: React.FC<Themes> = ({ theme }) => {
  return (
    <Box sx={{ mb: 4, pb: 4, borderBottom: 1, borderColor: "divider" }}>
      <Typography
        variant="h2"
        sx={{
          mb: 2,
          display: "flex",
          alignItems: "center",
          color: "primary.main",
        }}
      >
        <BarChart sx={{ mr: 1, fontSize: "1.75rem" }} /> Dashboard Overview
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        A quick glance at some key metrics or highlights.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
        }}
      >
        <Card
          sx={{
            bgcolor: "background.default",
            border: 1,
            borderColor: "divider",
            flex: "1 1 100%",
            maxWidth: { sm: "calc(50% - 12px)" },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
              <BarChart color="primary" sx={{ mr: 1 }} />
              <Typography variant="h3" sx={{ color: "text.primary" }}>
                Active Projects
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
              Currently working on 3 exciting projects.
            </Typography>
            <Chip
              label="Ongoing"
              sx={{
                bgcolor: theme.palette.info.light,
                color: theme.palette.info.contrastText,
              }}
            />
          </CardContent>
        </Card>
        <Card
          sx={{
            bgcolor: "background.default",
            border: 1,
            borderColor: "divider",
            flex: "1 1 100%",
            maxWidth: { sm: "calc(50% - 12px)" },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
              <TrendingUp color="secondary" sx={{ mr: 1 }} />
              <Typography variant="h3" sx={{ color: "text.primary" }}>
                New Skills
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
              Recently added Machine Learning to my tech stack.
            </Typography>
            <Chip
              label="Learning"
              sx={{
                bgcolor: theme.palette.warning.light,
                color: theme.palette.warning.contrastText,
              }}
            />
          </CardContent>
        </Card>
      </Box>
      <Typography
        variant="body2"
        sx={{ textAlign: "center", color: "text.secondary", mt: 3 }}
      >
        This is a small, integrated dashboard. Customize it with your own data!
      </Typography>
    </Box>
  );
};

export default DashboardOverview;
