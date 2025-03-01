import ProfilePage from "./ProfilePage";
import { UserProvider } from "./context/UserContext"; // Import Context Provider

function App() {
    return (
        <UserProvider>
            <ProfilePage />
        </UserProvider>
    );
}

export default App;
