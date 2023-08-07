"use client";
import React, { useContext } from "react";
import { Input } from "@/components/Input";
import { CHAT_FIELDS } from "../constants";
import { useChatForm } from "../hooks";
import { Typography } from "@/components/Typography";
import { Button } from "@/components/Button";
import { ChatAnswer } from "./ChatAnswer";
import { DomainContext, QuestionsContext } from "../context/Context";

export const Chat = () => {
  const { register, onSubmit } = useChatForm();
  const { index, selectQuestion } = useContext(QuestionsContext);
  const { setDomain } = useContext(DomainContext);
  return (
    <form className="flex flex-col grow basis-1/2 rounded-md border bg-gray-900 border-gray-700 p-4">
      <div className="mb-4 flex flex-row justify-between items-center">
        <Typography component="h2">Chat: Question and Answer</Typography>
        {typeof index === "number" && (
          <Button onClick={() => {
            selectQuestion(null);
            setDomain(null);
          }}>Clear Form</Button>
        )}
      </div>
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
      <ChatAnswer />
      <Button onClick={onSubmit}>Search</Button>
    </form>
  );
};
