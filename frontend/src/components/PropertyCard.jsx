import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const PropertyCard = ({ type, price, area, location, availableFor, images, _id, initialFavourite }) => {

    const {authUser}= useAuthContext();
    console.log("isFavourite ",initialFavourite)
    const [isFavourite, setIsFavourite] = useState(initialFavourite);
    const toggleFavorite = async (e) => {
        e.preventDefault();
        console.log(_id);
        try {
          if (!isFavourite) {
             await axios.post('http://localhost:5000/api/users/addRoomToFavorite', { roomId: _id },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
            });
            toast.success("Room added into the favorites")
            setIsFavourite(true)
          } 
          else {
            console.log("Else part in toggling favourite")
             await axios.post(`http://localhost:5000/api/users/removeFavorite`,{ roomId: _id },
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            toast.success("Room removed from the favorites")
            setIsFavourite(false)
          }
        } 
        catch (error) {
            console.error('Error toggling favorite:', error);
            toast.error("Error in toggling favourite")
        }
    };

    return(
        <div className="max-w-sm w-80 rounded overflow-hidden shadow-lg">
        <img className="w-full h-60" src={images[0]} alt={type} />
        <div className="px-6 py-4">
            <div className=" flex justify-between text-xl mb-2">
            {type}
            {authUser && <button onClick={toggleFavorite}
                 className=" text-xs bg-purple-300 px-2 font-serif py-1 rounded-xl">
                {!isFavourite ? 'AddToFavorite' : 'RemoveFavorite'}
            </button>}
            </div>
            <p className="text-gray-700 text-base">₹{price}  |  {area} sqft</p>
            <p className="text-gray-700 text-base">{location}</p>
            <p className="text-gray-700 text-base">Available for {availableFor}</p>
        </div>
        </div>
    )
};

export default PropertyCard;