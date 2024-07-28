import React from 'react'
import { useAuthContext } from "../context/AuthContext";
import { useState, useEffect } from 'react';
import RenderAllRooms from '../components/RenderAllRooms';
import axios from 'axios';


const Favourites = () => {

  const [propertyCards, setPropertyCards] = useState([]);
  const {authUser} = useAuthContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/api/users/getFavoriteRooms" ,
          {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }}
        );
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
      <h1 className=' m-2 p-2 font-bold text-xl'>Favourite Rooms</h1>
      <RenderAllRooms propertyCards={propertyCards} authUser={authUser}/>
    </div>
  )
}

export default Favourites
