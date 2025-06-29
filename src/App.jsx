import { useState } from 'react'
import {BrowserRouter, Outlet, Route, RouterProvider, Routes} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Add from './pages/Add_page.jsx';
import Home from './pages/Home.jsx';
import Detail from './pages/Detail_page.jsx';
import Login from './pages/Login';
import Header from './layout/Header';
import Footer from './layout/Footer.jsx';

//App에서는 경로를 지정. view + url 합친 개념
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <main>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/detail" element={<Detail/>} />
        </Routes>
        <Footer/>
      </main>
    </BrowserRouter>
  )
}

export default App
