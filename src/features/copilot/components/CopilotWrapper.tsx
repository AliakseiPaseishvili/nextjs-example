import React from "react";
import { Chat } from "./Chat";
import { ChatHistory } from "./ChatHistory";
import { DomainProvider, QuestionsProvider } from "../context/Provider";
import { Domains } from "./Domains";
import { History } from "./History";
import { Collections } from "./Collections";
import { Search } from "./Search";

export const CopilotWrapper = () => (
  <div className="w-full flex flex-col gap-4">
  <DomainProvider>
    <div className="w-full flex direction-row gap-4">
      <QuestionsProvider>
        <ChatHistory />
        <Domains />
        <Chat />
      </QuestionsProvider>
    </div>
    <div className="w-full flex direction-row gap-4">
      <History data={[]} />
      <Collections />
      <Search />
    </div>
  </DomainProvider>
  </div>
);
