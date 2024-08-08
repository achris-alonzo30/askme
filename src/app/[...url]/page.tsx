import { ChatWrapper } from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat"
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";

interface PageProps {
    params: {
        url: string | string[] | undefined
    }
}

function reconstructUrl({ url }: { url: string[] }) {
    const decoded = url.map((u) => decodeURIComponent(u));

    return decoded.join("/")
}


const UrlPage = async ({ params }: PageProps) => {
    const sessionCookie = cookies().get("sessionId")?.value;
    const filteredParams = reconstructUrl({
        url: params.url as string[]
    });

    const sessionId = (filteredParams + "--" + sessionCookie).replace(/\//g, "");

    // Checks if the url is already in the history
    const isStored = await redis.sismember("history", filteredParams);


    // if not then add the url to the history
    if (!isStored) {
        const chat = await ragChat.context.add({
            type: "html",
            source: filteredParams,
            config: {
                chunkOverlap: 50,
                chunkSize: 200
            }
        });

        // Add the url to the history
        await redis.sadd("history", filteredParams);
    }


    return (
        <ChatWrapper sessionId={sessionId} />
    )
}

export default UrlPage
