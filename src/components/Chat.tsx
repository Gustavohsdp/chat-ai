"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";

import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full space-y-4 pr-4">
          {messages.map((message) => {
            return (
              <div
                className="flex gap-3 text-slate-600 text-sm mb-4"
                key={message.id}
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>GH</AvatarFallback>
                    <AvatarImage src="https://github.com/Gustavohsdp.png" />
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="https://github.com/openai.png" />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-800">
                    {message.role === "user" ? "Gustavo Henrique" : "AI"}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
