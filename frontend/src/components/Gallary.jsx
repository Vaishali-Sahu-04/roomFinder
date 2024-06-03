import React from 'react';
import { useNavigate } from 'react-router-dom';

const Gallery = ({images}) => {
  const navigate = useNavigate();
  // const images = [
  //   '/room.jpg',
  //   '/room.jpg',
  //   '/room.jpg',
  //   '/room.jpg',
  // ];

  const handleViewMore = () => {
    navigate('/full-gallery', { state: { images } });
  };

  return (
    <div className="mb-4">
      <img className="w-80 h-60" src="/room.jpg" alt="Gallery Image 1" />
      {images.length > 1 && (
        <button
          onClick={handleViewMore}
          className="mt-4 text-blue-500 hover:text-blue-700"
        >
          +{images.length - 1} Photos
        </button>
      )}
    </div>
  );
};

export default Gallery;