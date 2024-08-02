import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'

const MyRoomCard = ({ type, price, area, location, availableFor, images, _id, setRefresh }) => {

  async function handleDelete(e){
    e.preventDefault();
    console.log("response");
    try {
      const response = await axios.get(`/api/rooms/deleteRoom/${_id}`)
      //console.log("response");
      if(response.status === 200) 
      {
        toast.success("Room deleted successfully");
        setRefresh(prev => !prev);
      }

    } catch (error) {
      console.log("error in deleting room -> ",error.message);
      toast.error("Error in deleting room");
    }
  }
  return (
    <div className="max-w-[320px] w-full rounded overflow-hidden shadow-lg">
            <img className="w-full h-60" src={images[0]} alt={type} />
            <div className="px-6 py-4">
                <div className=" flex justify-between text-xl mb-2">
                    {type}
                    <button 
                        className=" text-xs bg-purple-300 px-2 font-serif py-1 rounded-xl">
                        Edit
                    </button>
                </div>
                <div className='flex justify-between'>
                  <p className="text-gray-700 text-base">₹{price}  |  {area}</p>
                  <button onClick={handleDelete}
                          className=" text-xs bg-slate-700 text-white px-2 font-serif py-1 rounded-sm ">
                          Delete
                  </button>
                </div>
                <p className="text-gray-700 text-base">{location}</p>
                <p className="text-gray-700 text-base">Available for {availableFor}</p>
            </div>
    </div>
  )
}

export default MyRoomCard
