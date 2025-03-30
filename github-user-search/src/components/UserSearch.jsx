import { useState } from "react";
import { fetchGitHubUser } from "../services/githubService";

const UserSearch = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);

    const handleSearch = async () => {
        if (!username) return;
        const data = await fetchGitHubUser(username);
        setUser(data);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter GitHub username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {user && (
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <img src={user.avatar_url} alt="Avatar" width={100} />
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                </div>
            )}
        </div>
    );
};

export default UserSearch;
