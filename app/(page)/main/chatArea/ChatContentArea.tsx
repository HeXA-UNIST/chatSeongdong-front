
import { useEffect, useState } from "react";
import chatStore from "./chatStore";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
interface Typewriter {
    text: string;
    speed: number;
}
const Typewriter = ({ text, speed }: Typewriter) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);

            return () => clearTimeout(timeoutId);
        }
    }, [index, text, speed]);

    return <div>{displayedText}</div>;
};


const ChatContentArea = () => {
    const chatContent = chatStore.chatContent;
    // useEffect(() => {
    //     chatStore.addChat("안녕하세요 성동구 누리집입니다. 무엇을 도와드릴까요?", "bot");
    // }, [chatContent]);
    return (
        <div className='px-16 py-8 h-[90vh] w-full flex-grow overflow-y-auto'>
            <div className="flex flex-col gap-3">
                {chatContent.map((content, index) => {
                    return (
                        <div key={index} className="flex flex-row items-center gap-3">
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-row gap-2">
                                    {content.role === "ChatSeongDong" ? <Image src="/images/logo.png" alt="logo" width={30} height={30} /> : 
                                    <Icon icon="mingcute:user-4-line" width={30} height={30}/>} 
                                    <div className="font-bold text-xl text-black/60">{content.role}</div>
                                </div>
                                <div className="font-bold text-lg text-black/30">
                                    <Typewriter text={content.content} speed={10} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
export default ChatContentArea;