import { Icon } from '@iconify/react';
import { useState } from 'react';
import chatStore from './chatStore';
const Question = ({ text }: { text?: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    const sendMessage = async() => {
        if (text === undefined) return;
        chatStore.addChat(text, "user");
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.CHATGPT_API_KEY}` // replace with your key
            },
            body: JSON.stringify({
                messages: [{ "role": "user", "content": text }],
                max_tokens: 64,
                model: "gpt-3.5-turbo",
                temperature: 0.7,
                n: 1,
            })
        });
        const data = await response.json();
        chatStore.addChat(data.choices[0].message.content, "bot");
    }
    return (
        <div className="flex flex-col gap-3">
            <div className="transform-none">
                <button className="btn relative btn-neutral group w-full whitespace-nowrap 
                rounded-xl py-2 px-2 bg-slate-50 hover:brightness-50 text-left 
                text-gray-700 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.02)] dark:text-gray-300 md:whitespace-normal
                border-solid border-2 border-gray-400 bg-gray-200
                "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={sendMessage}
                >
                    <div className="flex w-full gap-2 items-center justify-between">
                        <div className="truncate font-semibold text-sm">
                            {text}
                        </div>
                        {isHovered ? <Icon icon="material-symbols:send" /> :
                            <Icon icon="material-symbols:send" className='text-slate-400 text-opacity-0' />}
                    </div>
                </button>
            </div>
        </div>
    )
}
const FAQArea = () => {
    return (
        <div className='flex flex-col items-center gap-3 py-4'>
            <div className='flex flex-row items-center gap-3'>
                <div className="font-bold text-xl text-black/30">
                    자주 물어보는 질문
                </div>
                <Icon icon="flat-color-icons:faq" className='h-6 w-6' />
            </div>
            <div className="grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 max-w-[580px]">
                <Question text="성동구에서 얻을 수 있는 혜택은?"/>
                <Question text="성동구의 오늘의 행사를 알려줘"/>
                <Question text="성동구의 깨끗한 식당을 알려줘?"/>
                <Question text="성동구에서 얻을 수 있는 혜택은?"/>
            </div>
        </div>
    )
}
export default FAQArea