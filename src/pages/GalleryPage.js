import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
  { id: 1, src: '/images/gallery-cafe-interior.webp', title: 'The Interior Ambiance' },
  { id: 2, src: '/images/gallery-ribeye-steak.webp', title: 'Our Grilled Ribeye Steak' },
  { id: 3, src: '/images/gallery-special-event.webp', title: 'A Special Event Night' },
  { id: 4, src: '/images/home-cafe-fausse.webp', title: 'Artisan Coffee Creations' },
  { id: 5, src: '/images/gallery-outdoor-seating.png', title: 'Outdoor Seating Area' },
  { id: 6, src: '/images/gallery-dessert-platter.webp', title: 'Decadent Dessert Platter' },
];

const slides = galleryImages.map(({ src }) => ({ src }));

const GalleryPage = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-12">Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, i) => (
          <div 
            key={image.id} 
            className="group relative cursor-pointer overflow-hidden rounded-xl" 
            onClick={() => setIndex(i)}
          >
            <img src={image.src} alt={image.title} className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
              <p className="text-white text-lg font-semibold text-center px-2">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </div>
  );
};

export default GalleryPage;