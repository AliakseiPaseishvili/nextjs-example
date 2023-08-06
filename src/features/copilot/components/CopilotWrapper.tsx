import React from "react";
import { Chat } from "./Chat";
import { ChatHistory } from "./ChatHistory";
import { QuestionsProvider } from "../context/Provider";
import { Domains } from "./Domains";

export const CopilotWrapper = () => (
  <div className="w-full flex direction-row gap-4">
    <QuestionsProvider>
      <ChatHistory />
      <Domains />
      <Chat />
    </QuestionsProvider>
  </div>
);
