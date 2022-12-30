import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import {useStateValue} from './StateProvider';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { auth } from './firebase';


function App() {
  const [{user},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      dispatch({
        type:"SET_USER",
        user:user
      })
    })
  },[])
  return (
    <div className='app'>
    {!user ? (
      <Login/>
    ):(
      <div className="app__body">
      <Router>
      <Sidebar/>
        <Routes>
        <Route path="/rooms/:roomId" element={<Chat/>}></Route>
        <Route path="/" element={<Chat/>} ></Route>
      </Routes>
      </Router>
      </div>

      )}
    </div>
  );
}

export default App;