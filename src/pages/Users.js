import React from "react";
import UsersCollection from "../assets/data/users.js";
import { UserList } from "../components/sections/users/UserList";
import { UsersHeader } from "../components/sections/users/UsersHeader";

function Users() {
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = UsersCollection.filter((user) => {
        return (
          Object.values(user.userName)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          Object.values(user.email)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          Object.values(user.country)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          Object.values(user.company)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          Object.values(user.registrationDate)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        );
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(UsersCollection);
    }
  };
  return (
    <div style={{ padding: "100px 100px 100px 300px" }}>
      <div>
        <UsersHeader {...{ searchItems }}></UsersHeader>
      </div>

      <div>
        {searchInput?.length >= 1 ? ( //if something is being typed in the search input field
          <UserList filteredResults={filteredResults} />
        ) : (
          <UserList UsersCollection={UsersCollection}></UserList>
        )}
      </div>
    </div>
  );
}

export default Users;
