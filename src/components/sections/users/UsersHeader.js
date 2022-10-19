import { Button, Input } from "antd";
import { useState } from "react";
import filterIcon from "../../../assets/images/filterIcon.svg";
import { Search } from "../../icons/Search";
import "./usHeader_styles.scss";

export function UsersHeader({ searchItems }) {
  const [searchValue, setSearchValue] = useState();
  const handleChange = (e) => {
    // setSearchValue(e.target.value);
    searchItems(e.target.value);
  };
  const handlePressEnter = () => {
    handleClick();
  };
  const handleClick = () => {};

  return (
    <div className="user-header">
      <div>
        <Button
          className="user-header-filter-btn"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <img src={filterIcon} alt="" />
        </Button>
      </div>
      <div>
        <Input
          className="user-header-input"
          style={{ width: "800px" }}
          value={searchValue}
          placeholder=" &nbsp;Search by keyword"
          allowClear
          onChange={handleChange}
          onPressEnter={(e) => {
            handlePressEnter(e);
          }}
        />
      </div>
      <div>
        <Button onClick={handleClick} className="user-header-search-btn">
          <Search />
          <span>Search</span>
        </Button>
      </div>
    </div>
  );
}
