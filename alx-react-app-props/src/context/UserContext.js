import { createContext, useContext, useState } from "react";

// Create Context
const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
    const [userData] = useState({ name: "Jane Doe", email: "jane.doe@example.com" });

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};

// Custom Hook for consuming the context
export const useUser = () => useContext(UserContext);

export default UserContext;
