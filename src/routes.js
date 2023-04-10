import React from 'react'
import { Route, Routes } from 'react-router';
// import App from './App';
import "./App.css";
import Login from './Pages/Login/Login';

const MyRoutes = () => {
  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={<Login/>} />
        </Routes>
    </div>
  )
}

export default MyRoutes;
