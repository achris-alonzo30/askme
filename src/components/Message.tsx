import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface MessageProps {
    message: string;
    isUser: boolean;
}

export const Message = ({
    message,
    isUser
}: MessageProps) => {
    return (
        <div className={cn("bg-neutral-800", isUser && "bg-neutral-700")}>
            <div className="p-6">
                <div className="max-w-3xl mx-auto flex items-start gap-2.5">
                    <span className={cn("size-10 shrink-0 aspect-square rounded-full border border-neutral-900 flex justify-center items-center",
                        isUser && "bg-emerald-950 broder-emerald-700 text-neutral-200"
                    )}>
                        {isUser ? <User className="size-4" /> : <Bot className="size-4" />}
                    </span>
                    <div className="flex flex-col ml-6 w-full">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{isUser ? "You" : "Bot"}</span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-neutral-900 dark:text-neutral-100">
                            {message}
                        </p>
                    </div>
                </div>  
            </div>
        </div>
    )
}