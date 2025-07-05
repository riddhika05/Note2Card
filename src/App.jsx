import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
   <div className="app">
     <Header />
     <Routes>
        <Route path="/home" element={<Home />} />
     </Routes>
   </div>
  )
}


