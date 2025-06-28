import { useState } from 'react'
import {BrowserRouter, Outlet, Route, RouterProvider, Routes} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import Header from './layout/Header';

//App에서는 경로를 지정. view + url 합친 개념
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <main>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
