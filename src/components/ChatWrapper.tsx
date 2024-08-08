"use client";

import { useChat } from "ai/react";
import { Messages } from "./Messages";
import { ChatInput } from "./ChatInput";



export const ChatWrapper = ({ sessionId }: { sessionId: string }) => {
    const {
        input,
        messages,
        setInput,
        handleSubmit,
        handleInputChange,
    } = useChat({
        api: "/api/chat-stream",
        body: { sessionId }
    });


    return (
        <section className="relative min-h-full bg-neutral-900 divide-y divide-neutral-700 flex justify-between gap-2">
            <article className="flex-1 text-black bg-neutral-800 justify-between flex flex-col">
                <Messages messages={messages} />
            </article>
            <ChatInput 
                input={input}
                handleInputchange={handleInputChange}
                handleSubmit={handleSubmit}
                setInput={setInput}
            />

        </section>
    )
}


