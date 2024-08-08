"use client";

import { Button, Textarea } from "@nextui-org/react";
import { Send } from "lucide-react";
import { type useChat } from "ai/react";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];
interface ChatInputProps {
    input: string;
    handleInputchange: HandleInputChange;
    handleSubmit: HandleSubmit;
    setInput: SetInput;
}
export const ChatInput = ({
    input,
    handleInputchange,
    handleSubmit,
    setInput
}: ChatInputProps ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
            setInput("");
        }
    }


    return (
        <aside className="z-10 bg-neutral-900 absolute bottom-0 left-0 w-full">
            <div className="mx-2 flex flex-row gap-3 mx:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
                <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                    <div className="relative flex flex-col w-full flex-grow p-4">
                        <form onSubmit={handleSubmit} className="relative">
                            <Textarea
                                autoFocus
                                minRows={4}
                                value={input}
                                onKeyDown={handleKeyDown}
                                onChange={handleInputchange}
                                placeholder="Enter your question..."
                                className="resize-none bg-neutral-800 hover:bg-neutral-900 rounded-xl text-base"
                            />

                            <Button
                                size="sm"
                                type="submit"
                                className="absolute z-10 border border-border bg-neutral-900 right-2 bottom-2">
                                <Send className="size-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </aside>
    )
}