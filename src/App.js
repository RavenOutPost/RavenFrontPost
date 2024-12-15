import { useEffect, useState } from 'react';
import './App.css';
import { LoginPage } from './component/login_page';
import { MainPage } from './component/main_page';

export const App = () => {
  const [auth, setAuth] = useState(false)

  useEffect(() => localStorage.getItem('token') ? setAuth(true) : null, [])



  return (
    <div class='w-screen h-screen overflow-hidden'>
      {
      auth ? 
        <MainPage /> :
        <div class='m-auto flex justify-center align-center'>
          <LoginPage setAuth={setAuth}/>
        </div>
      }
    </div>
  );
}

