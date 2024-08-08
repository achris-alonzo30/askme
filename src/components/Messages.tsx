import { type Message as TMessage } from "ai/react";
import { Message } from "./Message";
import { MessageSquare } from "lucide-react";
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
                <div className="flex-1 flex flex-col items-center justify-center gap-2 ">
                    <MessageSquare className="size-8 text-emerald-500" />
                    <h3 className="font-semibold text-xl">You&apos;re all set!</h3>
                    <p className="text-neutral-500 text-sm">Get started</p>
                </div>
            )}
        </aside>
    )
}