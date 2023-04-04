import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Loading from './components/loding/Loading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Header></Header>
     
     <Loading></Loading>
      
   <Outlet></Outlet>
  
    </div>
  )
}

export default App
