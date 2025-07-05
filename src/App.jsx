import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from './components/Header'
import Home from './components/Pages/Home';
import Notes from './components/Pages/Notes';
import Cards from './components/Pages/Cards';
import About from './components/Pages/About';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
   <div className="app">
     <Header />
     <Routes>
         
        <Route path="/home" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/about" element={<About />} />
     </Routes>
    
   </div>
  )
}


