// components/Header.js
import React from 'react';

const RoomHeader = ({ price, address }) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold">₹{price}</h2>
      <p className="text-gray-600">{address}</p>
    </div>
  );
};

export default RoomHeader;