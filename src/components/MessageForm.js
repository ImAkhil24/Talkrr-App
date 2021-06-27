import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined} from '@ant-design/icons';

const MessageForm = (props) => {

  const [value, setvalue] = useState('');
  const { chatId, creds } = props;

  const submitHandler = (event) => {
    event.preventDefault();
    // no allowed to submit if the message is empty
    const text = value.trim();

    if(text.length > 0)  sendMessage(creds, chatId, {text});
    setvalue('');
  }


  const changeHandler = (event) => {
    setvalue(event.target.value);

    isTyping(creds, chatId); // from documentation it is mentioned that it needs creds and chatId
   
  }

  const uploadHandler  = (event) => {
    sendMessage(creds, chatId, { files:event.target.files, text: '' })
  }

  return (
    <form className="message-form" onSubmit={submitHandler}>
      <input
        className="message-input"
        placeholder="Type here to send...."
        value={value}
        onChange={changeHandler}
        onSubmit={submitHandler}
      />
      {/* now time to add an image field */}
      <label htmlFor="upload-button">
         <span className="image-button">
           <PictureOutlined className="picture-icon"/>
         </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{display:'none'}}
        onChange={uploadHandler}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon"/>
      </button>

    </form>
  )

}

export default MessageForm;