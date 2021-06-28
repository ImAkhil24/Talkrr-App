import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";


const chatFeed = (props) => {
  // console.log(props);
  const { chats, activeChat, userName, messages } = props;
  
  // first extracting the active chat from the chats object

  const chat = chats && chats[activeChat];
  // console.log(chat);

  const renderReadReceipts = (message, isMyMessage) => {
    // the last_read gets the id of last message.

    // wasted so much time the return keyword was missing.
    return chat.people.map((person, index) => person.last_read === message.id && (
      <div
        key={index}
        className="read-receipt"
        style={{
          float: isMyMessage? 'right' : 'left',
          backgroundImage:`url(${person.person.avatar})`
        }}
      > </div>
    ))
  }



  const renderMessages = () => {
    // extract the message ids from the messages
    const messageId = Object.keys(messages);
    // the messages are gonna have the read receipt and my message is going to render differently.


    return messageId.map((messageId,index) =>{
      const message = messages[messageId];
      const lastMessageId = index === 0 ? null : messageId[index-1];
      const isMyMessage = userName === message.sender.username;

      // I don't know whether the messageId will be always unique
      // console.log(message,"this is inside the renderMessages");
      return (
        <div key = {index} style ={{width:'100%'}}>
          <div className="message-block">
          {
            isMyMessage ?
            <MyMessage message = {message}/>
            : <TheirMessage message = {message} lastMessage = {messages[lastMessageId]}/>
          }
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ?'18px':'0px', marginLeft: isMyMessage ? '0px': '68px'}}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  }

  if(!chat) 
    return (<div>Loading your chats.....</div>);

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) =>` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      {/* add some spacing here */}
      <div className="message-form-container">
        <MessageForm {... props} chatId={activeChat}/>
      </div>
    </div>
  );
}

export default chatFeed;