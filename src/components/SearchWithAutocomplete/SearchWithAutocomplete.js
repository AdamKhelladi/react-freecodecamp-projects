import { useEffect, useState } from "react";
import "./SearchWithAutocomplete.css";

export default function SearchWithAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilterdUsers] = useState([]);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      // console.log(data.users);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.lastName));
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeInput(currentInput) {
    const query = currentInput.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) >= 0)
          : [];

      setFilterdUsers(filteredData);
      setShowDropdown(true);

      // console.log(filteredUsers);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClickUser(clickedUser) {
    // console.log(clickedUser);
    setSearchParam(clickedUser);
    setShowDropdown(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    <h3 style={{ color: "#fff", textAlign: "center" }}>
      Loading Data, Please Wait !
    </h3>;
  }

  return (
    <div className="autocomplete-container">
      <div className="the-input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Enter GitHub Username"
          value={searchParam}
          onChange={(event) => {
            handleChangeInput(event.target.value);
          }}
        />
        <button className="search-btn">Search</button>
      </div>

      {showDropdown ? (
        <div className="results">
          {filteredUsers.map((filteredUser, index) => (
            <p key={index} onClick={(event) => {
              handleClickUser(event.target.innerText);
            }}>
              {filteredUser}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
