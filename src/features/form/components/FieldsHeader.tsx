import { Typography } from "@/components/Typography";
import React, { FC } from "react";

type FieldsHeaderProps = {
  labels: string[];
};

export const FieldsHeader: FC<FieldsHeaderProps> = ({ labels }) => {
  return (
    <div className="flex direction-row gap-2 justify-start items-center">
      {labels.map((name) => (
        <Typography key={name} className="grow-0 basis-1/3">
          {name}
        </Typography>
      ))}
    </div>
  );
};
