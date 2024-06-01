// components/Gallery.js
import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="mb-4">
        <img className=' w-80 h-60'
        src="/room.jpg" alt="" />
      {/* <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <img src={image} alt={`Gallery Image ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div> */}
      <button className="mt-4 text-blue-500 hover:text-blue-700">+5 Photos</button>
    </div>
  );
};

export default Gallery;