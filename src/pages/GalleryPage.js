import React from 'react';

const galleryItems = [
  { id: 1, title: 'The Interior Ambiance', category: 'Restaurant View' },
  { id: 2, title: 'Our Grilled Salmon Dish', category: 'From the Menu' },
  { id: 3, title: 'A Special Event Night', category: 'Behind the Scenes' },
  { id: 4, title: 'The Cozy Corner Table', category: 'Restaurant View' },
  { id: 5, title: 'Our Famous Tiramisu', category: 'From the Menu' },
  { id: 6, title: 'Chef in the Kitchen', category: 'Behind the Scenes' },
];

const GalleryPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-12">Gallery</h1>
    {/* Lightbox feature (FR-13) would be implemented here by wrapping the grid items */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryItems.map((item) => (
        <div key={item.id} className="group aspect-square bg-amber-100 rounded-xl flex items-center justify-center border-2 border-amber-200 overflow-hidden cursor-pointer">
          <div className="text-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-3 text-amber-400 group-hover:text-amber-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-amber-800 font-medium block">{item.title}</span>
            <span className="text-amber-600 text-sm">{item.category}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GalleryPage;