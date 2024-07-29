import React, { useEffect, useState } from 'react';
import axios from 'axios'
import RenderAllRooms from './RenderAllRooms';
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
  }, [authUser])

  return (
  <div>
    <RenderAllRooms propertyCards={propertyCards} authUser={authUser}/>
  </div>
);
}

export default Body;
