import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Example protected component

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/blog/1">Blog Post 1</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />
        {/* Protected Route */}
        <Route path="/protected" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;