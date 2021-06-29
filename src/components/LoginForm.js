import { useState } from "react";
import axios from 'axios';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    // from the api documentation of authentication
    const authObject = {'Project-ID':'aee9bd71-18dc-4a15-b8fb-15b3d16f665e', 'User-Name':username, 'User-Secret':password}

    try{

      await axios.get('https://api.chatengine.io/users/me/',{headers:authObject});
      // if correct then store the username and password at the local-storage

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();

    } catch(error){
      setError('Incorrect Credentials!!!')
    }
  }


  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat App</h1>
        <form onSubmit={submitHandler}>
          <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="Username" required/>

          <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="Password" required/>

          <div align="center">
            <button type="submit" className="button">
              <span>Log in</span>
            </button> 
          </div>
          <div className="error">{error}</div>
        </form>
      </div>
    </div>
  );

}

export default LoginForm;