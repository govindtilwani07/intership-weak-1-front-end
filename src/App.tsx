import React from 'react';
import { ChefHat, Clock, Users, Utensils } from 'lucide-react';
import RecipeCard from './components/RecipeCard';
import Header from './components/Header';

function App() {
  const recipes = [
    {
      id: 1,
      title: "Homemade Margherita Pizza",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800&q=80",
      chef: "Maria Garcia",
      prepTime: "30 mins",
      servings: 4,
      difficulty: "Medium",
      description: "Classic Italian pizza with fresh basil, mozzarella, and tomatoes."
    },
    {
      id: 2,
      title: "Thai Green Curry",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
      chef: "Alex Chen",
      prepTime: "45 mins",
      servings: 6,
      difficulty: "Medium",
      description: "Aromatic and creamy curry with vegetables and coconut milk."
    },
    {
      id: 3,
      title: "Classic French Toast",
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80",
      chef: "Sophie Martin",
      prepTime: "20 mins",
      servings: 2,
      difficulty: "Easy",
      description: "Golden-brown French toast dusted with powdered sugar."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Recipes</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Share Recipe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;