import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook
// Simulate authentication check
const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., by checking localStorage, a token, or an auth context)
  return localStorage.getItem('isAuthenticated') === 'true';
};

function ProtectedRoute() {
  // Check authentication status
  const authenticated = isAuthenticated();

  // If authenticated, render the child routes (via Outlet)
  // If not authenticated, redirect to the login page
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;