import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage.jsx'

function App() {

  return (
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    </Routes>
  )
}

export default App