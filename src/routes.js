import React from 'react'
import { Route, Routes } from 'react-router';
import "./App.css";
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';

const MyRoutes = () => {
  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home/>} />
        </Routes>
    </div>
  )
}

export default MyRoutes;
