import React from 'react';

const AboutPage = () => (
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-8">About Café Fausse</h1>
    <div className="prose prose-amber max-w-none text-gray-700">
      <p className="mb-6">
        Founded in 2010 by Chef Antonio Rossi and restaurateur Maria Lopez, Café Fausse blends traditional Italian flavors with modern culinary innovation. Our mission is to provide an unforgettable dining experience that reflects both quality and creativity.
      </p>
      <p className="mb-8">
        We are committed to unforgettable dining, excellent food, and locally sourced ingredients. Our team works tirelessly to create a seasonal menu that delights the senses and an atmosphere that feels both elegant and welcoming.
      </p>
      <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
        <h2 className="font-bold text-amber-900 text-xl mb-3">Awards & Recognition</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Culinary Excellence Award – 2022</li>
          <li>Restaurant of the Year – 2023</li>
          <li>Best Fine Dining Experience – Foodie Magazine, 2023</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="font-bold text-amber-900 text-xl mb-3">Customer Reviews</h2>
        <blockquote className="border-l-4 border-amber-300 pl-4 italic">
          <p>"Exceptional ambiance and unforgettable flavors." – Gourmet Review</p>
        </blockquote>
        <blockquote className="border-l-4 border-amber-300 pl-4 italic mt-4">
          <p>"A must-visit restaurant for food enthusiasts." – The Daily Bite</p>
        </blockquote>
      </div>
    </div>
  </div>
);

export default AboutPage;