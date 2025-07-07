import RouterProvider from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import router from "./router";

//App에서는 경로를 지정. view + url 합친 개념
function App() {
  return <RouterProvider router={router} />;
}

export default App
