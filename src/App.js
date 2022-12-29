import './App.css';
import MainPage from './components/MainPage';
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import Profile from './components/Profile';
import Registration from './components/Registration';
import Contact from './components/Contact'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/contactus' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;