"use client";
import React from "react";
import { Input } from "@/components/Input";
import { CHAT_FIELDS } from "../constants";
import { useChatForm } from "../hooks";
import { Typography } from "@/components/Typography";

export const Chat = () => {
  const { register } = useChatForm();
  return (
    <form className="flex flex-col grow basis-1/2 rounded-md border bg-gray-900 border-gray-700 p-4">
      <Input
        {...register(CHAT_FIELDS.QUESTION)}
        label="Write Your Question"
        placeholder="Ask something about the domain?"
        marginBottom="mb-4"
      />
      <Input
        {...register(CHAT_FIELDS.CONTEXT)}
        label="Add context (optional)"
        placeholder="Describe any context that would be helpful to answer the question?"
        marginBottom="mb-4"
      />
      <div className="w-full bg-gray-800 rounded-md border border-gray-700 p-4">
        <Typography>
          Answer will be here ....
        </Typography>
      </div>
    </form>
  );
};