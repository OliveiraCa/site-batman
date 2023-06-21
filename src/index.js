import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStore } from './componentss/contexts/useContexts';
import ScrollButton from './componentss/button-rolagem/buttonRolagem';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <UserStore>
    <App />
    <ScrollButton/>
   </UserStore>
  </React.StrictMode>
  

);


