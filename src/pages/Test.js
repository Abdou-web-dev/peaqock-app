import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import "antd/dist/antd.css"; //this import is essential in antd
import React, { useState } from "react";

const items = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: `djhdjhdjhd`,
    key: "alipay",
  },
];
const Home = () => {
  //   console.log(items[1]);
  const { Header, Content, Footer } = Layout;

  const [current, setCurrent] = useState("mail");

  const handleMenuClick = (e, item, key, keyPath) => {
    setCurrent(e.key);
    // console.log(e.key);
    if (e.key === `app`) {
      console.log("clicked");
    }
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />

        <Menu
          onClick={handleMenuClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
      <div>
        <Row style={{ border: `1px solid red`, padding: `100px 30px` }}>
          <Col
            style={{ border: `1px solid green`, marginBottom: `30px` }}
            xs={2}
            sm={4}
            md={6}
            lg={8}
            xl={24}
          >
            test 1
          </Col>

          <Col style={{ border: `1px solid blue`, padding: "15px" }} span={24}>
            <span>
              Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet c
            </span>
            <Button>TEST BTN</Button>
            assumenda unde corporis explicabo quisquam. Explicabo amet
          </Col>
          <Col style={{ border: `1px solid`, padding: "15px" }} span={18}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              neque illo tempore voluptatibus blanditiis quia consequatur non
              aut, necessitatibus cupiditate! Culpa, architecto? Fugiat eos
              fugit, iure iste ipsum repudiandae enim alias cupiditate, est
              voluptas id corporis ipsam magni! Necessitatibus voluptatibus
              ducimus perspiciatis modi vel voluptates similique nulla ipsum eum
              cum exercitationem sit placeat maiores quam, laudantium odio
              aliquid fugit deserunt praesentium totam. Similique soluta ex
              voluptas, tenetur dicta enim culpa! Repudiandae error ipsam vitae,
              corrupti consequuntur exercitationem expedita vel quo tenetur
              facilis cumque est necessitatibus doloremque adipisci, at hic
              aspernatur eligendi? Ad placeat accusantium nostrum omnis harum
              corporis. Voluptate, optio!
            </span>
            <div style={{ overflow: "hidden" }}>
              <img
                width={`100%`}
                style={{ margin: `` }}
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error
              ratione reprehenderit veritatis, possimus quibusdam voluptatibus
              laudantium delectus hic dolore. Reiciendis distinctio sed fugit
              sequi est quam sit nostrum aut architecto pariatur nihil provident
              consequuntur necessitatibus dolores quaerat vitae suscipit,
              deleniti a similique facere facilis quos nobis. Error, laborum
              officiis.
            </p>
          </Col>

          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            Col
          </Col>
          <Col style={{ border: `` }} xs={2} sm={4} md={6} lg={8} xl={10}>
            Col
          </Col>
        </Row>
      </div>
    </Layout>
    // className="search-form__button_size_m"
  );
};

export default Home;
