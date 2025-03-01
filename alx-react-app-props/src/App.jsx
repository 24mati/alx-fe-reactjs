import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";

function App() {
  const user = {
    name: "Matiyos Kidane",
    age: 25,
    location: "Ethiopia",
  };

  return (
    <div>
      <Header title="Welcome to My App" />
      <MainContent content="This is the main content of the page." />
      <UserProfile user={user} />
      <Footer text="© 2025 All rights reserved." />
    </div>
  );
}

export default App;
