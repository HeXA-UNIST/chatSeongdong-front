'use client'
import Image from "next/image";
import TextArea from "./TextArea";
import FAQArea from "./FAQArea";
import RelativeButton from "./RelativeButton";
import chatStore from "./chatStore";
import ChatContentArea from "./ChatContentArea";
import { observer } from "mobx-react-lite";
const ChatArea = observer(() => {
    const chatContent = chatStore.chatContent;
    console.log(chatContent.length);
    return (
        <div className="flex h-[100vh] flex-col w-[100%] bg-slate-50 items-center justify-between pb-6">
            {chatContent.length < 1 ?
                <div className="flex flex-row items-center h-[40vh] md:py-[8vh] md:px-[12vw]">

                    <Image src="/images/logo.png" alt="logo" width={180} height={180} />
                    <div className="font-bold text-4xl text-black/30">
                        Chat SeongDong
                    </div>
                </div> :
                    <ChatContentArea />
                }
            <div>
                {chatContent.length < 1 && <FAQArea />}
                <TextArea />
            </div>
            <RelativeButton />
        </div>
    )
})
export default ChatArea;