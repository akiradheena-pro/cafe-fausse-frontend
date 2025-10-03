import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-6">Welcome to Café Fausse</h1>
      <p className="text-lg text-gray-700 mb-8">
        An elegant fine-dining experience in the heart of Paris.
        Reserve your table or explore our seasonal menu crafted with local ingredients.
      </p>
      <div className="mt-8">
        <Link
          to="/reservations"
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Make a Reservation
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;