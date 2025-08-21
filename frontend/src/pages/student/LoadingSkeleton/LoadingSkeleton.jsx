import React from "react";
import { Skeleton, Stack } from "@mui/material";

const LoadingSkeleton = () => {
  return (
    <Stack spacing={2}>
      {/* Circle avatar skeleton */}
      <Skeleton variant="circular" width={72} height={72} />

      {/* Text skeletons */}
      <Skeleton variant="text" width={200} height={30} />
      <Skeleton variant="text" width={150} height={25} />

      {/* Button skeleton */}
      <Skeleton variant="rectangular" width={150} height={40} />
    </Stack>
  );
};

export default LoadingSkeleton;
