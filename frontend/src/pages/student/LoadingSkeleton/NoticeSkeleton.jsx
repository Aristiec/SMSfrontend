import React from "react";
import { Skeleton, Box, Stack } from "@mui/material";

const NoticeSkeleton = () => {
  return (
    <Box sx={{ p: 3, height: "100vh" }}>
      {/* Navbar skeleton */}
      <Skeleton variant="rectangular" width="100%" height={50} sx={{ mb: 3 }} />

      {/* 5–6 Notice rows */}
      <Stack spacing={2}>
        <Skeleton variant="rectangular" width="100%" height={80} />
        <Skeleton variant="rectangular" width="100%" height={80} />
        <Skeleton variant="rectangular" width="100%" height={80} />
        <Skeleton variant="rectangular" width="100%" height={80} />
        <Skeleton variant="rectangular" width="100%" height={80} />
        <Skeleton variant="rectangular" width="100%" height={80} />
      </Stack>
    </Box>
  );
};

export default NoticeSkeleton;
