import { type Message as TMessage } from "ai/react";
import { Message } from "./Message";
interface MessagesProps {
    messages: TMessage[]
}
export const Messages = ({ messages }: MessagesProps) => {

    return (
        <aside className="flex max-h-[calc(100vh-3.5rem-7rem)= flex-1 flex-col overflow-y-auto">
            {messages ? messages.map((message, i) => (
                <Message 
                    key={i} 
                    message={message.content} 
                    isUser={message.role === "user"} 
                />
            )) : (
                <></>
            )}
        </aside>
    )
}