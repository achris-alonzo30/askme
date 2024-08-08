"use client";

import { useChat } from "ai/react";



export const ChatWrapper = ({ sessionId }: { sessionId: string }) => {
    const {
        input,
        messages,
        handleSubmit,
        handleInputChange,
    } = useChat({
        api: "/api/chat-stream",
        body: { sessionId }
    });


    return (
        <section className="relative min-h-full bg-neutral-900 divide-y divide-neutral-700 flex justify-between gap-2">
            <article className="flex-1 text-black bg-neutral-800 justify-between flex flex-col">
                { }
            </article>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                />
                <button type="submit">Send</button>
            </form>

        </section>
    )
}


