import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";


const chatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  console.log(typeof chats, typeof activeChat, typeof userName, typeof messages);
  console.log( chats,  activeChat,  userName,  messages);
  console.log("lalal");

  return (
    <div>
      ChatFeed
    </div>
  );
}

export default chatFeed;