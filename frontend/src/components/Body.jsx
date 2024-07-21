import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import PropertyCard from './PropertyCard';
import { useAuthContext } from "../context/AuthContext";

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

const Body = () => {

  const [propertyCards, setPropertyCards] = useState([]);
  const {authUser} = useAuthContext();

  useEffect(() => {
    console.log("authUser-> ",authUser);
    async function fetchData() {
      try {
        const response =await axios.get(`http://localhost:5000/api/rooms`);
        //console.log("response",response.data.data);
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
        <Link key={card._id} to={`/room/${card._id}`}>
          <PropertyCard {...card} initialFavourite={authUser && authUser.loggedInUser.favourites.includes(card._id)} />
        </Link>
      ))}
    </div>
  </div>
);
}

export default Body;
