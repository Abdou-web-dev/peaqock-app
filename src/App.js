import { Layout } from "antd";
import "antd/dist/antd.min.css";
// import { Footer } from "antd/lib/layout/layout";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./app_styles.scss";
import { LateralMenu } from "./components/menus/LateralMenu";
import { NavBar } from "./components/navbar/NavBar";
import About from "./pages/About";
import Category from "./pages/Category.js";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MemberShip from "./pages/MemberShip";
import News from "./pages/News";
import Search from "./pages/Search";
import Settings from "./pages/Settings.js";
import SubPage1 from "./pages/SubPage";
import Users from "./pages/Users.js";

const { Header, Content, Footer } = Layout; //destructuring of Layout comp

const App = () => {
  const myLocation = useLocation().pathname;
  return (
    <Layout className="app-layout">
      <Header className="app-layout__header">
        {myLocation === "/search" ||
        myLocation === "/category" ||
        myLocation === "/users" ||
        myLocation === "/settings" ? (
          <>
            <NavBar></NavBar> <LateralMenu></LateralMenu>
          </>
        ) : (
          <NavBar></NavBar>
        )}
      </Header>
      <Content style={{ paddingTop: "29px" }}>
        {myLocation === "/search" ||
        myLocation === "/category" ||
        myLocation === "/users" ||
        myLocation === "/settings" ? (
          <Routes>
            <Route path="/category" element={<Category />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/member" element={<MemberShip />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/subpage1" element={<SubPage1 />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        )}
      </Content>
      {/* <Footer></Footer> */}
    </Layout>
  );
};

export default App;
