"use client";
import React from "react";
import { Input } from "@/components/Input";
import { Typography } from "@/components/Typography";
import { useForm } from "react-hook-form";
import { CHAT_FIELDS } from "../constants";
import { Answer } from "./Answer";
import { Button } from "@/components/Button";

export const Search = () => {
  const { register } = useForm();
  return (
    <form className="flex flex-col grow basis-1/2 rounded-md border bg-gray-900 border-gray-700 p-4">
      <Typography component="h2">Search: Question and Results</Typography>
      <Input
        {...register(CHAT_FIELDS.SEARCH)}
        label="Write Your Question"
        placeholder="Ask something about the domain?"
        marginBottom="mb-4"
      />
      <Answer />
      <Button>Add to Prompt</Button>
    </form>
  );
};
