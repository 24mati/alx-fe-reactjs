const UserProfile = ({ user, error, loading }) => {
    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Looks like we can't find the user.</p>;
    if (!user) return null;
  
    return (
      <div className="p-4 border rounded shadow-lg max-w-md mx-auto">
        <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mx-auto" />
        <h2 className="text-xl font-bold text-center mt-2">{user.name || user.login}</h2>
        <p className="text-center text-gray-500">@{user.login}</p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="block text-center text-blue-500">
          View GitHub Profile
        </a>
      </div>
    );
  };
  
  export default UserProfile;
  