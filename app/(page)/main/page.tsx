'use client'
import ChatArea from "./chatArea/chatArea"
import LeftMenu from "./leftMenu"

const Main = () => {
    return (
        <div className="flex flex-row">
            <LeftMenu/>
            <ChatArea/>
        </div>
    )
}
export default Main