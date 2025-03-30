import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  Array.isArray(userData) && userData.map(/* ... */)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetchUserData(username);
      setUserData(response);
    } catch (err) {
      // Add the exact error message here
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Enter GitHub username"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      
      {/* Display the exact error message */}
      {error && <p className="text-red-500">"Looks like we cant find the user"</p>}

      {userData && (
        <div className="border p-4 rounded">
          <img
            src={userData.avatar_url}
            alt="Avatar"
            className="w-20 h-20 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">{userData.name || userData.login}</h2>
          <a
            href={userData.html_url}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;