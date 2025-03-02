import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'; // Import RecipeDetails

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} /> {/* Home Route */}
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} /> {/* Recipe Details Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
