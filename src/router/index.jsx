import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/Layout";
import Home from "../pages/Home";
import Add from "../pages/Add_page";
import Detail from "../pages/Detail_page";
import Login from "../pages/Login";

// createBrowserRouter 사용 (권장 방식)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // 공통 레이아웃 (Header + Footer)
    children: [
      { path: "", element: <Home /> },
      { path: "add", element: <Add /> },
      { path: "login", element: <Login /> },
      { path: "detail", element: <Detail /> },
    ],
  },
]);

export default router;

//이름이 index.jsx이지 호출되는 함수 이름은 router임
