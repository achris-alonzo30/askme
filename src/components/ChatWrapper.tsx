"use client";

import { useChat } from "ai/react";



export const ChatWrapper = ({ sessionId }: { sessionId: string }) => {
    const chat = useChat({
        api: "/api/chat-stream",
        body: { sessionId }
    });
    return (
        <div>

        </div>
    )
}


