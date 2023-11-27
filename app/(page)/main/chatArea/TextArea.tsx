'use client'
import { cn } from "@/libs/utils";
import { useRef, useState } from "react";
import { Icon } from '@iconify/react';
import chatStore from "./chatStore";
const TextArea = () => {
    const [chat, setChat] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    
    const overFlowY = () => {
        if (!textAreaRef.current) return "hidden";
        return textAreaRef.current.scrollHeight > 200 ? "scroll" : "hidden";
    }
    const textAreaHeight = () => {
        // get the number of rows in chat 
        const rows = chat.split("\n").length;
        if (rows < 2) return 56;
        return 56 + 24 * (rows - 1);
    }
    const HandleChat = (e: any) => {
        setChat(e.target.value)
    }
    const sendMessage = async (e: any) => {
        e.preventDefault();
        if (!chat) return;
        chatStore.addChat(chat, "user");
        setChat("");
        let url = "http://127.0.0.1:8080/ask";
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `user_input=${encodeURIComponent(chat)}`
        });
        const data = await response.json();
        console.log(data);
        chatStore.addChat(data.response, "bot");
        
    }
    return (
        <div className="flex flex-row bg-slate-100 rounded-lg items-center shadow-sm ring-1 ring-black ring-opacity-25">
            <textarea className={cn("w-[500px] resize-none bg-transparent px-[10px] py-[12px] box-border",
                "scrollbar-thin scrollbar-rounded-full scrollbar-track-gray-100 scrollbar-thumb-gray-200",
                "focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent")}
                ref={textAreaRef}
                placeholder="채팅을 입력하세요."
                onChange={HandleChat}
                value={chat}
                style={{
                    maxHeight: "200px",
                    overflowY: overFlowY(),
                    height: textAreaHeight(),
                }}>
            </textarea>
            <button className="rounded-lg border-0 p-2 bg-tr hover:bg-gray-300" onClick={sendMessage}>
                <Icon icon="material-symbols:send" className="w-6 h-6 opacity-60" />
            </button>
        </div>
    )
}
export default TextArea