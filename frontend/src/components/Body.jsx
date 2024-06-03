import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

// const PropertyCards = [
//   {
//     id: 8,
//     type: '1 BHK Flat',
//     rent: '₹10,000',
//     area: '400 sqft',
//     location: 'Vijay Nagar, Indore',
//     availableFor: 'Girls',
//     imgSrc: 'room.jpg',
//   },
// ];


const PropertyCard = ({ type, price, area, location, availableFor, images }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={images[0]} alt={type} />
    <div className="px-6 py-4">
      <div className=" text-xl mb-2">{type}</div>
      <p className="text-gray-700 text-base">₹{price}  |  {area} sqft</p>
      <p className="text-gray-700 text-base">{location}</p>
      <p className="text-gray-700 text-base">Available for {availableFor}</p>
    </div>
  </div>
);

const Body = () => {

  const [propertyCards, setPropertyCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response =await axios.get(`http://localhost:5000/api/rooms`);
        console.log("response",response.data.data);
        setPropertyCards(response.data.data);
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [])
  return (
  <div className="container mx-auto py-4">
    <div className="grid grid-cols-1 pl-2 pr-2 md:grid-cols-4 gap-4">
      {propertyCards.length > 0 && propertyCards.map((card) => (
        <Link key={card._id} to={`/room/${card._id}`}><PropertyCard {...card} /></Link>
      ))}
    </div>
  </div>
);
}

export default Body;
