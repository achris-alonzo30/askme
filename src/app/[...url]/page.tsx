import { ChatWrapper } from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat"
import { redis } from "@/lib/redis";

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
    const filteredParams = reconstructUrl({
        url: params.url as string[]
    })

    // Checks if the url is already in the history
    const isStored = await redis.sismember("history", filteredParams);

    const session = "mock-session";

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
        <ChatWrapper sessionId={session} />
    )
}

export default UrlPage
