import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import MyRoomCard from '../components/MyRoomCard';

// const PropertyCards = [
//     {
//       id: 1,
//       type: '1 BHK Flat',
//       rent: '₹10,000',
//       area: '400 sqft',
//       location: 'Vijay Nagar, Indore',
//       status: 'Available for Girls',
//       imgSrc: 'room.jpg',
//     },
//   ];
const PropertyCard = ({ type, rent, area, location, status, imgSrc }) => (
<div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={imgSrc} alt={type} />
    <div className="px-6 py-4">
    <div className=" text-xl mb-2">{type}</div>
    <p className="text-gray-700 text-base">{rent} | {area}</p>
    <p className="text-gray-700 text-base">{location}</p>
    <p className="text-gray-700 text-base">{status}</p>
    </div>
</div>
);
const MyRooms = () => {
    const navigate = useNavigate();

    const [propertyCards, setPropertyCards] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(()=>{

      async function fetchMyRooms(){
        const response = await axios.get("/api/rooms/owner-room",
          {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
          });
          //console.log(response.data.data);
         const data=response.data.data;
         setPropertyCards(data);
      }
      fetchMyRooms();
    },[refresh])
   
  return (
    <div className=' mt-4 p-4'>
      <button onClick={() => navigate('/upload-room')}
        className=' bg-red-700 font-serif text-white px-4 py-1 rounded'>Upload Room</button>
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 pr-2 md:grid-cols-4 gap-4">
        {propertyCards.length>0 && propertyCards.map((card) => (
            <Link key={card.id} to={`/room/${card._id}`}><MyRoomCard {...card} setRefresh={setRefresh} /></Link>
        ))}
        </div>
       </div>
    </div>
  )
}

export default MyRooms
