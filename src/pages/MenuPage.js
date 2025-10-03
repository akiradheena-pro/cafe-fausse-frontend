import React from 'react';

const menuData = [
  {
    category: 'Starters',
    items: [
      { name: 'Bruschetta', description: 'Fresh tomatoes, basil, olive oil, and toasted baguette slices', price: 8.50 },
      { name: 'Caesar Salad', description: 'Crisp romaine with homemade Caesar dressing', price: 9.00 },
    ],
  },
  {
    category: 'Main Courses',
    items: [
      { name: 'Grilled Salmon', description: 'Served with lemon butter sauce and seasonal vegetables', price: 22.00 },
      { name: 'Ribeye Steak', description: '12 oz prime cut with garlic mashed potatoes', price: 28.00 },
      { name: 'Vegetable Risotto', description: 'Creamy Arborio rice with wild mushrooms', price: 18.00 },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Tiramisu', description: 'Classic Italian dessert with mascarpone', price: 7.50 },
      { name: 'Cheesecake', description: 'Creamy cheesecake with berry compote', price: 7.00 },
    ],
  },
  {
    category: 'Beverages',
    items: [
      { name: 'Red Wine (Glass)', description: 'A selection of Italian reds', price: 10.00 },
      { name: 'White Wine (Glass)', description: 'Crisp and refreshing', price: 9.00 },
      { name: 'Craft Beer', description: 'Local artisan brews', price: 6.00 },
      { name: 'Espresso', description: 'Strong and aromatic', price: 3.00 },
    ],
  },
];

const MenuPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-12">Our Menu</h1>
    <div className="max-w-4xl mx-auto space-y-8">
      {menuData.map((section) => (
        <div key={section.category} className="border-b border-amber-200 pb-6 last:border-b-0">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4">{section.category}</h2>
          <div className="space-y-4">
            {section.items.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-800 font-semibold">{item.name}</span>
                  <span className="text-amber-700 font-bold">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MenuPage;