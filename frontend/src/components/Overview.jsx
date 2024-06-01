// components/Overview.js
import React from 'react';

const Overview = ({ carpetArea, project, floor, status, facing, age }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className=' w-32 text-sm'>
        <p className="text-gray-500">Carpet Area</p>
        <p>{carpetArea} sqft </p>
      </div>
      <div className=' w-32 text-sm'>
        <p className="text-gray-500">Location</p>
        <p>{project}</p>
      </div>
      <div className=' w-32 text-sm'>
        <p className="text-gray-500">Available for</p>
        <p>Girls Only</p>
      </div>
      <div className=' w-32 text-sm'>
        <p className="text-gray-500">Furnished Status</p>
        <p>{status}</p>
      </div>
      <div className=' w-32 text-sm'>
        <p className="text-gray-500">Age Of Construction</p>
        <p>{age}</p>
      </div>
      <div className=' w-32 text-sm'>
        <p className="text-gray-500">Electricity Bill</p>
        <p>Excluded</p>
      </div>
    </div>
  );
};

export default Overview;