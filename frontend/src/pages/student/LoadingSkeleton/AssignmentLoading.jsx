import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function LoadingSkeleton() {
  return (
    <Box sx={{ p: 2, width: "100%" }}>
      {/* Two Navbars */}
      <Skeleton variant="rectangular" width="100%" height={40} sx={{ mb: 2 }} />
      <Skeleton variant="rectangular" width="100%" height={40} sx={{ mb: 4 }} />

      {/* Paragraph Row */}
      <Box sx={{ display: "flex", gap: 2 }}>
        {/* Left side big para */}
        <Skeleton variant="rectangular" width="70%"  height={"70vh"}/>

        {/* Right side small para */}
        <Skeleton variant="rectangular" width="30%" height={"70vh"}/>
      </Box>
    </Box>
  );
}
