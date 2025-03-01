import React from "react";
import { UserProvider } from "./context/UserContext"; // Import from context folder
import MainContent from "./components/MainContent";

function App() {
    return (
        <UserProvider>
            <MainContent />
        </UserProvider>
    );
}

export default App;
