import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddRecipeForm = () => {
  // ... (keep existing state and handler logic unchanged)

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Back to Recipes
      </Link>

      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2 md:text-base">
              Recipe Title
            </label>
            <input
              type="text"
              // ... (keep existing input props)
              className={`w-full px-3 py-2 border rounded-lg shadow-sm ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-400 md:py-3`}
            />
            {/* ... (keep error message) */}
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2 md:text-base">
                Ingredients (one per line)
              </label>
              <textarea
                // ... (keep existing textarea props)
                className={`w-full px-3 py-2 border rounded-lg shadow-sm ${
                  errors.ingredients ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-400 md:h-48`}
              />
              {/* ... (keep error message) */}
            </div>

            <div className="mt-6 md:mt-0">
              <label className="block text-gray-700 text-sm font-semibold mb-2 md:text-base">
                Preparation Steps (one step per line)
              </label>
              <textarea
                // ... (keep existing textarea props)
                className={`w-full px-3 py-2 border rounded-lg shadow-sm ${
                  errors.steps ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-400 md:h-64`}
              />
              {/* ... (keep error message) */}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 md:text-lg"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;