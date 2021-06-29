import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css';

const app = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height = '100vh'
      projectID = 'aee9bd71-18dc-4a15-b8fb-15b3d16f665e'
      userName = {localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default app;