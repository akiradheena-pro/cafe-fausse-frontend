import React from 'react';

const MenuPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-12">Our Seasonal Menu</h1>
    <div className="max-w-4xl mx-auto space-y-8">
      {[
        { category: 'Starters', items: ['Truffle Arancini', 'Heirloom Tomato Tartare', 'Foie Gras Mousse'] },
        { category: 'Mains', items: ['Duck Confit', 'Wild Mushroom Risotto', 'Grilled Sea Bass'] },
        { category: 'Desserts', items: ['Chocolate Soufflé', 'Crème Brûlée', 'Seasonal Fruit Tart'] },
        { category: 'Drinks', items: ['French Wine Selection', 'Craft Cocktails', 'Artisanal Coffee'] }
      ].map((section) => (
        <div key={section.category} className="border-b border-amber-200 pb-6">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4">{section.category}</h2>
          <div className="space-y-3">
            {section.items.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2">
                <span className="text-gray-800 font-medium">{item}</span>
                <span className="text-amber-700 font-semibold">${18 + i * 2}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MenuPage;