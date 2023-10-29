
import chatStore from "./chatStore";

const ChatContentArea = () => {
    const chatContent = chatStore.chatContent;
    return (
        <div className="flex flex-col gap-3 w-[45vw]">
            {chatContent.map((content, index) => {
                return (
                    <div key={index} className="flex flex-row items-center gap-3">
                        <div className="flex flex-col gap-1">
                            <div className="font-bold text-xl text-black/60">
                                {content.role}
                            </div>
                            <div className="font-bold text-xl text-black/30">
                                {content.content}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
export default ChatContentArea;