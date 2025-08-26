import { useEffect, useState } from "react";
import "./GithubProfileFinder.css";
import UserProfile from "./UserProfile";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("AdamKhelladi");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleClickSearch() {
    fetchGithubUserData();
    setUsername("");
  }

  function handleChangeInput(CurrentInputUsername) {
    setUsername(CurrentInputUsername);
  }

  async function fetchGithubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data) {
      setUserData(data);
      console.log(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h3>Loading Data, Please Wait !</h3>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(event) => {
            handleChangeInput(event.target.value);
          }}
        />
        <button
          className="search-btn"
          disabled={!username}
          onClick={() => {
            handleClickSearch();
          }}
        >
          Search
        </button>
      </div>

      {userData !== null ? <UserProfile user={userData} /> : null}
    </div>
  );
}
