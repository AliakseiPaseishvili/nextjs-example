import React, { FC } from "react";
import { Typography } from "@/components/Typography";

type AnswerProps = {
  answer?: string | boolean;
};

export const Answer: FC<AnswerProps> = ({ answer }) => {
  return (
    <div className="w-full bg-gray-800 rounded-md border border-gray-700 p-4 mb-4">
      <Typography component="p">
        {answer || "Answer will be here ...."}
      </Typography>
    </div>
  );
};
