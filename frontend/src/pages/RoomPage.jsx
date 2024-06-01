// App.js
import React from 'react';
import RoomHeader from '../components/RoomHeader';
import PropertyDetails from '../components/PropertyDetails';
import Overview from '../components/Overview';
import Gallery from '../components/Gallary';
import Actions from '../components/Actions';
import Reviews from '../components/Reviews';

const RoomPage = () => {
  const propertyData = {
    price: 18500,
    address: '2 BHK Flat 1120 Sq.ft. For Rent in Shiv Vatika Brij Residency, Nipania, Indore',
    beds: 2,
    baths: 2,
    balcony: 1,
    furnished: 'Unfurnished',
    carpetArea: 850,
    project: 'Shiv Vatika Brij Residency',
    floor: '4 (Out of 6 Floors)',
    status: 'Immediately',
    facing: 'North',
    age: '5 to 10 years',
    gallery: [
      'path/to/image1.jpg',
      'path/to/image2.jpg',
      'path/to/image3.jpg'
    ]
  };

  return (
  
    <div className="container mt-5 px-4 flex flex-col items-center justify-center gap-4">
        <div className='border border-gray-500 font-serif p-4 rounded-md w-8/12'>
            <RoomHeader price={propertyData.price} address={propertyData.address} />
            <div className='flex gap-6'>
                <Gallery images={propertyData.gallery} />
                <div>
                    <PropertyDetails
                        beds={propertyData.beds}
                        baths={propertyData.baths}
                        balcony={propertyData.balcony}
                        furnished={propertyData.furnished}
                    />
                    <Overview
                        carpetArea={propertyData.carpetArea}
                        project={propertyData.project}
                        floor={propertyData.floor}
                        status={propertyData.status}
                        facing={propertyData.facing}
                        age={propertyData.age}
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
