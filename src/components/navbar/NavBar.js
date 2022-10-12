import { Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowIcon, AvatarIcon, SmsIcon } from "../icons/Icons";
import { PeaqockLogo } from "../logos/PeaqockLogo";
import "./nav_styles.scss";

export function NavBar() {
  //this is a named export
  const items = [
    {
      key: "2",
      label: "ABOUT",
      icon: <ArrowIcon />,
      onClick: () => {
        navigate("/about");
      },
    },
    {
      key: "3",
      icon: <ArrowIcon />,
      label: "MEMBERSHIP",
      onClick: () => {
        navigate("/member");
      },
    },
    {
      key: "4",
      icon: <ArrowIcon />,
      label: "NEW & EVENTS",
      onClick: () => {
        navigate("/news");
      },
    },
    {
      label: "CONTACT US",
      key: "5",
      icon: <ArrowIcon />,
      children: [
        {
          label: "Option 1",
          key: "setting:1",
          onClick: () => {
            navigate("/subpage1");
          },
        },
        {
          label: "Option 2",
          key: "setting:2",
        },
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
  ];
  const items2 = [
    {
      key: "6",
      label: "LET'S TALK",
      icon: <SmsIcon />,
      onClick: () => {
        navigate("/opt");
      },
    },
    {
      label: <AvatarIcon />,
      key: "7",
      icon: <ArrowIcon />,
      children: [
        {
          label: "Your profile",
          key: "8",
          onClick: () => {
            navigate("/test");
          },
        },
        {
          label: "Log out",
          key: "9",
          onClick: () => {
            alert(`logged out !`);
          },
        },
      ],
    },
  ];
  const highlight = () => {
    if (selectedKey === "/") {
      return ["1"];
    } else if (selectedKey === "/about") {
      return ["2"];
    } else if (selectedKey === "/member") {
      return ["3"];
    } else if (selectedKey === "/news") {
      return ["4"];
    } else if (selectedKey === "/subpage1") {
      return ["4"];
    }
  };
  let navigate = useNavigate();
  const selectedKey = useLocation().pathname;

  return (
    <div style={{ display: "flex" }} className="navbar">
      <div
        className="navbar-left-container"
        style={{
          width: "83%",
        }}
      >
        <div className="navbar-logo-wrapper">
          <Link to={`/`}>
            <div className="navbar-logo-wrapper__logo">
              <PeaqockLogo />
            </div>
          </Link>
        </div>
        <Menu
          className="navbar-left"
          mode="horizontal"
          // theme="dark"
          defaultSelectedKeys={["1"]}
          selectedKeys={highlight()}
          items={items}
        />
      </div>
      <Menu
        className="navbar-right"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        selectedKeys={highlight()}
        items={items2}
        style={{
          background: "linear-gradient(90deg, #F7AE28 -9.83%, #F8D061 104%)",
          width: "17%",
        }}
      />
    </div>
  );
}
