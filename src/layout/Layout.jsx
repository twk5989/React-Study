//여기에 헤더와 푸터를 정의하고 그리고 다시 router에 호출된다.
//그리고 그 라우터는 App.jsx에 호출된다

import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <Header/>
        <main>
             <Outlet /> {/*템플릿 안에 들어갈 본문 페이지 영역(메모추가,삭제 페이지 등)*/}
        </main>
        <Footer/>
        </>
    );
};





export default Layout;