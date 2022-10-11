import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Tooltip } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";

const { Content, Sider } = Layout;

const Page1 = () => {
  return (
    <h4>
      <div>
        <span>hey , page 1</span>
      </div>
    </h4>
  );
};

const Page2 = () => {
  return (
    <h4>
      <div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          doloribus id modi nesciunt vel animi, eius, neque voluptas, architecto
          voluptates molestias explicabo labore! Reprehenderit nobis nam fugit
          nulla eaque facere.
        </span>
        <div>
          <img
            // src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
        </div>
      </div>
    </h4>
  );
};

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  let navigate = useNavigate();
  const selectedKey = useLocation().pathname;

  const highlight = () => {
    if (selectedKey === "/") {
      return ["1"];
    } else if (selectedKey === "/page2") {
      return ["2"];
    }
  };

  return (
    <Layout className="site-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <Tooltip
            placement="right"
            arrowPointAtCenter
            title="Expand / Shrink Menu"
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggleCollapsed,
              }
            )}
          </Tooltip>
        </div>
        <Menu
          mode="vertical"
          theme="dark"
          defaultSelectedKeys={["1"]}
          selectedKeys={highlight()}
          style={{ height: "100%", borderRight: 0 }}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Page 1",
              onClick: () => {
                navigate("/");
              },
            },
            {
              key: "2",
              icon: <TeamOutlined />,
              label: "Page 2",
              onClick: () => {
                navigate("/page2");
              },
            },
          ]}
        />
      </Sider>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Page1 />} /> */}
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
