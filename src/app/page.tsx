import React from "react";
import { Typography } from "@/components/Typography";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography component="h1">Test NextJS Application</Typography>
      <Typography component="p">
        This is test web application that will show knowledges in Web: React,
        NextJS, Typescript, Tailwind and React hooks
      </Typography>
      <Typography component="p">Made by Aliaksei Paseishvili</Typography>
    </main>
  );
};

export default Home;
