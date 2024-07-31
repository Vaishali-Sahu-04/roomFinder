// components/Actions.js
import React, { useState } from 'react';

const Actions = ({phone, email, available}) => {

  const [showContact, setShowContact] = useState(false);

  return (
    <div className="flex justify-start gap-4 items-center mb-4">
      <button className="bg-gray-200 py-2 px-4 rounded">{available ? "Available now":"Unavailable"}</button>
      <button onClick={() => setShowContact(!showContact)}
        className="bg-red-500 text-white py-2 px-4 rounded">Contact Owner
      </button>
      {showContact && 
        <div className=' font-serif text-sm bg-red-100 p-2 rounded-sm'>
          <p>{phone}</p>
          {email && <p>{email}</p>}
        </div>
      }
    </div>
  );
};

export default Actions;