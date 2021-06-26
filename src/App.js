import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'
// import './App.css';

const app = () => {
  return (
    <ChatEngine
      height = '100vh'
      projectID = 'aee9bd71-18dc-4a15-b8fb-15b3d16f665e'
      userName = 'akhil'
      userSecret = 'akhil123'
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default app;