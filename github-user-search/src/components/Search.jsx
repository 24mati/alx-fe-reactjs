import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async (event) => {
    event.preventDefault(); // Prevent page reload
    if (!username) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
      setError("Looks like we can't find the user");
      setUserData(null);
    }

    setLoading(false);
  };

  return (
    <div className="search-container">
      <form onSubmit={fetchUser}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {userData && (
        <div className="user-profile">
          <img src={userData.avatar_url} alt="User avatar" width="100" />
          <h2>{userData.login}</h2>
        </div>
      )}
    </div>
  );
};

export default Search;
