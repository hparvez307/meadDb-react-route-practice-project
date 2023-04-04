import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Loading from './components/loding/Loading.jsx'

function App() {
  

  return (
    <div className="App">
    <Header></Header>
  
      
   <Outlet></Outlet>
   
  
    </div>
  )
}

export default App
