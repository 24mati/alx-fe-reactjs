import { useState, useEffect } from 'react';
import recipeData from '../data.json';
import { Link } from 'react-router-dom';

// Replace the <a> element with:
<Link
  to={`/recipe/${recipe.id}`}
  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
>
  View Recipe →
</Link>
// In HomePage.jsx (near the main heading)
<div className="flex justify-between items-center mb-6">
  <h1 className="text-3xl font-bold text-gray-800">Recipes</h1>
  <Link
    to="/add-recipe"
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
  >
    Add Recipe
  </Link>
</div>
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                View Recipe →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;