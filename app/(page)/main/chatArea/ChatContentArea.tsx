
import { useEffect, useState } from "react";
import chatStore from "./chatStore";
interface Typewriter {
    text: string;
    speed: number;
}
const Typewriter = ({ text, speed }: Typewriter) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;

        const intervalId = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return <div>{displayedText}</div>;
};


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
                                <Typewriter text={content.content} speed={50} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
export default ChatContentArea;