import React from "react";

function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
    </div>
  );
}

export default UserProfile;
