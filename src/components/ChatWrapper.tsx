"use client";

import { useChat } from "ai/react";



export const ChatWrapper = ({ sessionId }: { sessionId: string }) => {
    const { messages, handleInputChange, input } = useChat({
        api: "/api/chat-stream",
        body: { sessionId }
    });


    return (
        <section className="relative min-h-full bg-neutral-900 divide-y divide-neutral-700 flex justify-between gap-2">
            <article className="flex-1 text-black bg-neutral-800 justify-between flex flex-col">
                { }
            </article>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
            />
        </section>
    )
}


