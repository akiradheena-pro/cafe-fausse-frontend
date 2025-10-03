import React from 'react';

const GalleryPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-12">Gallery</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="aspect-square bg-amber-100 rounded-xl flex items-center justify-center border-2 border-amber-200 overflow-hidden">
          <div className="text-center p-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3" />
            <span className="text-amber-800 font-medium">Restaurant Photo {i}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GalleryPage;