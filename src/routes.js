import React from 'react'
import { Route, Routes } from 'react-router';
import App from './App';
import "./App.css";

const MyRoutes = () => {
  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={<App/>} />
        </Routes>
    </div>
  )
}

export default MyRoutes;
