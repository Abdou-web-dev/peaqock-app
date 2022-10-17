import { Layout } from "antd";
import "antd/dist/antd.min.css";
// import { Footer } from "antd/lib/layout/layout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app_styles.scss";
import { NavBar } from "./components/navbar/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MemberShip from "./pages/MemberShip";
import News from "./pages/News";
import SubPage1 from "./pages/SubPage";

const { Header, Content, Footer } = Layout; //destructuring of Layout comp

const App = () => {
  return (
    <Layout className="app-layout">
      <Header className="app-layout__header">
        <NavBar></NavBar>
      </Header>
      <Content style={{ paddingTop: "29px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/member" element={<MemberShip text={`testsss`} />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subpage1" element={<SubPage1 />} />
        </Routes>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          paddingTop: `400px`,
          // border: "1px solid",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
