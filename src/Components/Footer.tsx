import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
             sx={{
               bgcolor: "background.paper",
               color: "text.secondary",
               textAlign: "center",
               p: { xs: 1, sm: 1.5 },
               borderRadius: "0 0 1rem 1rem",
               mt: "auto",
               width: "100%"
             }}
           >
             <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
               &copy; {new Date().getFullYear()} Aravind . All rights reserved.
             </Typography>
           </Box>
  );
};

export default React.memo(Footer);