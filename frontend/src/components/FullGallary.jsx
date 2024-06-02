import React from 'react';
import { useLocation } from 'react-router-dom';

const FullGallery = () => {
  const location = useLocation();
  const images = location.state?.images || [];

  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <img src={image} alt={`Gallery Image ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullGallery;
