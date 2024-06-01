// components/Actions.js
import React from 'react';

const Actions = () => {
  return (
    <div className="flex justify-start gap-4 items-center mb-4">
      <button className="bg-red-500 text-white py-2 px-4 rounded">Contact Owner</button>
      <button className="bg-gray-200 py-2 px-4 rounded">Available now</button>
    </div>
  );
};

export default Actions;