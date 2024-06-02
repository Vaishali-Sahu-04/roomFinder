import React from 'react'

const UploadRoom = () => {
  return (
    <div className='p-4 w-auto ml-10 '>
      <h1 className=' font-semibold mb-6 text-blue-950 text-2xl'>Rent your Property</h1>
      <form className=''>
        <div className="flex flex-col text-sm w-64">
        <label htmlFor="property-type" className="mb-1 font-medium text-gray-700">Property Type:</label>
        <select id="property-type" name="property-type" className="border border-gray-300 rounded-lg bg-white">
          <option value="" disabled selected>Select Property Type</option>
          <option value="1bhk">1BHK</option>
          <option value="2bhk">2BHK</option>
          <option value="3bhk">3BHK</option>
          <option value="1bk">1BK</option>
          <option value="studio">Studio</option>
        </select>
        </div>
        <div className=' mt-10 flex flex-col'>
            <h1 className=' font-medium'>Property Location</h1>
            <div className=' flex flex-col gap-1 mt-2 text-sm'>
              <label htmlFor="city">City</label>
              <input className=' outline-none border-none border-b'
              placeholder='Enter city' type="text" />
              <div className=' border-b'></div>
            </div>
            <div className=' flex flex-col gap-1 mt-2 text-sm'>
              <label htmlFor="city">Locality</label>
              <input className=' outline-none border-none border-b'
              placeholder='Enter locality' type="text" />
              <div className=' border-b'></div>
            </div>
        </div>
        <div className=' mt-10 flex flex-col'>
            <h1 className=' font-medium'>Property Features</h1>
            <div className='flex text-sm gap-4 w-64 mt-4'>
              <label htmlFor="property-type" className="mb-1 text-sm text-gray-700">Bedrooms:</label>
              <select id="property-type" name="property-type" className="border border-gray-300 outline-none rounded-lg bg-white">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <label htmlFor="property-type" className="mb-1 text-sm text-gray-700">Bathrooms:</label>
              <select id="property-type" name="property-type" className="border border-gray-300 outline-none rounded-lg bg-white">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <label htmlFor="property-type" className="mb-1 text-sm text-gray-700">Balconies:</label>
              <select id="property-type" name="property-type" className="border border-gray-300 outline-none rounded-lg bg-white">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <label className="block text-gray-700 text-sm mt-4 font-bold mb-2">
              Furnished Status
            </label>
            <div className="flex text-sm space-x-4">
              <div>
                <input
                  type="radio"
                  id="furnished"
                  name="furnishing"
                  value="Furnished"
                  // checked={selectedFurnishing === 'Furnished'}
                  // onChange={handleSelection}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="furnished" className="text-gray-700">
                  Furnished
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="unfurnished"
                  name="furnishing"
                  value="Unfurnished"
                  // checked={selectedFurnishing === 'Unfurnished'}
                  // onChange={handleSelection}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="unfurnished" className="text-gray-700">
                  Unfurnished
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="semi-furnished"
                  name="furnishing"
                  value="Semi-furnished"
                  // checked={selectedFurnishing === 'Semi-furnished'}
                  // onChange={handleSelection}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="semi-furnished" className="text-gray-700">
                  Semi-furnished
                </label>
              </div>
            </div>
            <label className="block text-gray-700 text-sm mt-4 font-bold mb-2">
              Electricity Bill
            </label>
            <div className="flex text-sm space-x-4">
              <div>
                <input
                  type="radio"
                  id="included"
                  name="included"
                  value="Included"
                  // checked={selectedFurnishing === 'Furnished'}
                  // onChange={handleSelection}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="furnished" className="text-gray-700">
                  Included
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="excluded"
                  name="excluded"
                  value="Excluded"
                  // checked={selectedFurnishing === 'Excluded'}
                  // onChange={handleSelection}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="excluded" className="text-gray-700">
                  Excluded
                </label>
              </div>
            </div>
            <label className='text-gray-700 text-sm mt-4 font-bold mb-1' 
            htmlFor="ageOFConstruction">Age of Construction</label>
            <input className=' outline-none border-none border-b text-sm'
            placeholder='In years' type="String" />
            <div className=' border-b'></div>
            <label className='flex flex-col gap-1 mb-1 mt-4 text-sm font-bold text-gray-700' htmlFor="covered-area">Covered Area:</label>
            <input className=' outline-none text-sm border-none border-b'
                placeholder='Covered Area in sq.ft' type="Number" />
                <div className=' border-b'></div>
              
        </div>
        <div className=' mt-10 flex flex-col'>
            <h1 className=' font-medium'>Availability</h1>
            <label className='text-gray-700 text-sm mt-4 font-bold mb-1' 
            htmlFor="price">Available for</label>
            <div className="flex text-sm space-x-4">
              <div>
                <input
                  type="radio"
                  id="girls"
                  name="girls"
                  value="girls"
                  // checked={selectedFurnishing === 'girls'}
                  // onChange={handleSelection}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="girls" className="text-gray-700">
                  Girls
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="boys"
                  name="boys"
                  value="boys"
                  // checked={selectedFurnishing === 'boys'}
                  // onChange={handleSelection}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="boys" className="text-gray-700">
                  Boys
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="family"
                  name="family"
                  value="family"
                  // checked={selectedFurnishing === 'family'}
                  // onChange={handleSelection}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="family" className="text-gray-700">
                  Family
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="anyone"
                  name="anyone"
                  value="anyone"
                  // checked={selectedFurnishing === 'Furnished'}
                  // onChange={handleSelection}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="anyone" className="text-gray-700">
                  Anyone
                </label>
              </div>
            </div>
            <label className='text-gray-700 text-sm mt-4 font-bold mb-1' 
            htmlFor="price">Available</label>
            <div className="flex text-sm space-x-4">
              <div>
                <input
                  type="radio"
                  id="yes"
                  name="yes"
                  value="yes"
                  // checked={selectedFurnishing === 'yes'}
                  // onChange={handleSelection}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="yes" className="text-gray-700">
                  yes
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="no"
                  name="no"
                  value="no"
                  // checked={selectedFurnishing === 'no'}
                  // onChange={handleSelection}
                  className="mr-2 leading-tight"
                />
                <label htmlFor="no" className="text-gray-700">
                  no
                </label>
              </div>
            </div>
        </div>
        <div className=' mt-10 flex flex-col'>
            <h1 className=' font-medium'>Price Details</h1>
            <label className='text-gray-700 text-sm mt-4 font-bold mb-1' 
            htmlFor="price">Expexted Price</label>
            <input className=' outline-none border-none border-b text-sm'
            placeholder='per month' type="Number" />
            <div className=' border-b'></div>
        </div>
        <div className=' mt-10 flex flex-col'>
          <h1 className=' font-medium'>Contact Details</h1>
          <label className='text-gray-700 text-sm mt-4 font-bold mb-1' 
            htmlFor="contact">Contact number</label>
            <input className=' outline-none border-none border-b text-sm'
            placeholder='Enter your contact number' type="Number" />
            <div className=' border-b'></div>
        </div>
        <div className=' mt-10 flex flex-col mb-10'>
          <h1 className=' font-medium'>Upload Images</h1>
          <input
          type='file'
          multiple
          className='mt-3 rounded-sm text-sm'
          />
          <button className=' w-20 px-2 py-1 rounded-md mt-3 font-serif bg-gray-300'>
            Upload
          </button>
        </div>
      </form>
    </div>
  )
}

export default UploadRoom
