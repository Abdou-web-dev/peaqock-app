import { Button, Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AvatarIconSearchWhite,
  CategoryIcon,
  HomeIcon,
  LogoutIcon,
  PeaqockWhiteLogo,
  SettingsIcon,
} from "../icons/Icons";
import "./sidenav_styles.scss";

export function LateralMenu({}) {
  let navigate = useNavigate();
  const selectedKey = useLocation().pathname;
  const [iconBorder, seticonBorder] = useState("");
  const [fillTop, setfillTop] = useState("");
  const [fillBottom, setfillBottom] = useState("");

  useEffect(() => {
    seticonBorder(`3px solid #f7ae28`);
    setfillTop(`#f7ae28`);
    setfillBottom(`#f7ae28`);
    setTimeout(() => {
      seticonBorder(``);
      setfillTop(`white`);
      setfillBottom(`white`);
    }, 2000);
  }, []);

  const items = [
    {
      key: "1",
      icon: <HomeIcon />,
      label: null,
      onClick: () => {
        navigate("/");
      },
    },
    {
      icon: <CategoryIcon />,

      key: "2",
      label: null,
      onClick: () => {
        navigate("/category");
      },
    },
    {
      icon: (
        <div style={{ borderRight: iconBorder }}>
          <AvatarIconSearchWhite fillTop={fillTop} fillBottom={fillBottom} />
        </div>
      ),
      key: "3",
      label: null,
      onClick: () => {
        navigate("/users");
      },
    },
    {
      icon: <SettingsIcon />,
      key: "4",
      label: null,
      onClick: () => {
        navigate("/settings");
      },
    },
  ];

  return (
    <div
      className="navbar-search"
      style={{
        zIndex: 999,
      }}
    >
      <div className="navbar-search-top-icon">
        <PeaqockWhiteLogo />
      </div>
      <Menu
        className="navbar-search-menu"
        style={{
          background: "#127682",
        }}
        mode="vertical"
        items={items}
      />
      <div className="navbar-search-bottom-icon">
        <Button className="navbar-search-bottom-icon__btn">
          <LogoutIcon />
        </Button>
      </div>
    </div>
  );
}
