import { makeAutoObservable } from "mobx";
type chatProp = {
    content: string;
    role: string;
};
class ChatStore {
   chatContent:chatProp[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  addChat(content:string, role:string) {
    this.chatContent = [...this.chatContent, {"content":content, "role":role}];
  }
}

const chatStore = new ChatStore();
export default chatStore;