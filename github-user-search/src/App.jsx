import { useState } from "react";
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";
import { fetchUserData } from "./services/githubService";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setError(true);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <UserProfile user={user} error={error} loading={loading} />
    </div>
  );
};

export default App;
