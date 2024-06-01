// components/PropertyDetails.js
import React from 'react';

const PropertyDetails = ({ beds, baths, balcony, furnished }) => {
    return (
        <div className="flex items-center gap-10 mb-4 bg-gray-200 justify-center p-4 rounded-md">
          <div className="flex items-center mr-4">
            {/* <svg className="w-6 h-6 mr-2 text-gray-500" viewBox="0 0 24 24">
               {Bed icon} </svg> */}
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center mr-4">
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center mr-4">
            <span>{balcony} Balcony</span>
          </div>
          <div className="flex items-center">
            <span>{furnished}</span>
          </div>
        </div>
      );
};

export default PropertyDetails;