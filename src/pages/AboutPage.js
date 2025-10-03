import React from 'react';

const AboutPage = () => (
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-8">About Us</h1>
    <div className="prose prose-amber max-w-none">
      <p className="text-gray-700 mb-6">
        Café Fausse was founded in 2020 by Chef Élodie Moreau and sommelier Julien Dubois.
        Our philosophy blends French culinary tradition with modern, sustainable practices.
      </p>
      <p className="text-gray-700 mb-8">
        We source ingredients locally and change our menu seasonally to ensure freshness and creativity.
        Our intimate 30-seat dining room offers an unforgettable experience in the heart of Paris.
      </p>
      <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
        <h2 className="font-bold text-amber-900 text-xl mb-3">Awards & Recognition</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Michelin Guide Recommended (2023, 2024)</li>
          <li>“Best New Restaurant” – City Eats Magazine</li>
          <li>Wine Spectator Award of Excellence</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AboutPage;