import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RoomHeader from '../components/RoomHeader';
import PropertyDetails from '../components/PropertyDetails';
import Overview from '../components/Overview';
import Gallery from '../components/Gallary';
import Actions from '../components/Actions';
import Reviews from '../components/Reviews';

const RoomPage = () => {
  // const propertyData = {
  //   price: 18500,
  //   address: '2 BHK Flat 1120 Sq.ft. For Rent in Shiv Vatika Brij Residency, Nipania, Indore',
  //   beds: 2,
  //   baths: 2,
  //   balcony: 1,
  //   furnished: 'Unfurnished',
  //   carpetArea: 850,
  //   project: 'Shiv Vatika Brij Residency',
  //   floor: '4 (Out of 6 Floors)',
  //   status: 'Immediately',
  //   facing: 'North',
  //   age: '5 to 10 years',
  //   gallery: [
  //     'path/to/image1.jpg',
  //     'path/to/image2.jpg',
  //     'path/to/image3.jpg'
  //   ]
  // };
  const { roomId } = useParams();
  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRoomData() {
      try {
        const response = await fetch(`http://localhost:5000/api/rooms/${roomId}`,{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPropertyData(data.data); // Adjust according to your API response structure
        setLoading(false);
      } catch (error) {
        console.error('Error in fetching room data:',error.message);
        setLoading(false);
      }
    }

    fetchRoomData();
  }, [roomId]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!propertyData) {
    return <div className='flex justify-center items-center h-96 font-serif text-3xl'>Oops! Room not found</div>;
  }
  return (
    <div className="container mt-5 px-4 flex flex-col items-center justify-center gap-4">
        <div className='border border-gray-500 font-serif p-4 rounded-md w-8/12'>
            <RoomHeader price={propertyData.price} address={propertyData.location} />
            <div className='flex gap-6'>
                <Gallery images={propertyData.images} />
                <div>
                    <PropertyDetails
                        beds={propertyData.beds}
                        baths={propertyData.baths}
                        balcony={propertyData.balcony}
                        furnished={propertyData.furnished}
                    />
                    <Overview
                        carpetArea={propertyData.area}
                        type={propertyData.type}
                        availableFor={propertyData.availableFor}
                        status={propertyData.furnished}
                        age={propertyData.constructionAge}
                        electricity={propertyData.electricity}
                    />
                </div>
            </div>
            <Actions />
        </div>
        <Reviews/>
    </div>
  );
};

export default RoomPage;
