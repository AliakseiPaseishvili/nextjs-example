import React, { FC } from "react";
import { Typography } from "@/components/Typography";

type BlockHeader = {
  title: string;
};

export const BlockHeader: FC<BlockHeader> = ({ title }) => (
  <Typography component="h4" className="mb-4">
    {title}
  </Typography>
);
