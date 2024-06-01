import React, { useState } from 'react'

const Reviews = () => {
    const [review, setReviews] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newReview, setNewReview] = useState({ role: '', comment: '', rating: ''});

    const handleSubmit = () => {
        e.preventDefault();
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

  return (
    <div className='border border-gray-500 p-4 rounded-md w-8/12'>
        <h1 className='font-semibold text-2xl'>Reviews and Ratings</h1>
        <button className='py-1 border border-slate-800 px-3  mt-4 rounded-md text-slate-800'
            onClick={() => setShowForm(true)}>
            Write a Review
        </button>
        {showForm && (
            <div className='mt-4'>
            <form onSubmit={handleSubmit}>
              <div className='mb-2'>
                <label className='block'>Role:</label>
                <input
                  type='text'
                  name='role'
                  value={newReview.role}
                  onChange={handleInputChange}
                  className='border border-gray-300 p-1 rounded-md w-full'
                  required
                />
              </div>
              <div className='mb-2'>
                <label className='block'>Comment:</label>
                <textarea
                  name='comment'
                  value={newReview.comment}
                  onChange={handleInputChange}
                  className='border border-gray-300 p-1 rounded-md w-full'
                  required
                ></textarea>
              </div>
              <div className='mb-2'>
              <label className='block'>Rating:</label>
              <select
                name='rating'
                value={newReview.rating}
                onChange={handleInputChange}
                className='border border-gray-300 py-1 px-2 rounded-md w-full'
                required
              >
                <option value=''>Select Rating</option>
                {[...Array(5).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
              <button
                type='submit'
                className='py-1 bg-slate-600 px-3 mt-2 rounded-md text-white'
              >
                Submit
              </button>
            </form>
          </div>
        )}
        <div className="shadow-md mt-5 pb-2">
            <div className='flex gap-4'>
                <img className='w-12 h-12'
                src="https://static.thenounproject.com/png/363640-200.png" alt="" />
                <div>
                    <h2 className='font-semibold block'>Vaishali Sahu</h2>
                    <p>Owner</p>
                </div>
            </div>
            <div className=' mt-3'>
                <p>
                    Its a good place for group of three friends.
                </p>
            </div>
        </div>
        <div className="shadow-md mt-5 pb-2">
            <div className='flex gap-4'>
                <img className='w-12 h-12'
                src="https://static.thenounproject.com/png/363640-200.png" alt="" />
                <div>
                    <h2 className='font-semibold block'>Vaishali Sahu</h2>
                    <p>Owner</p>
                </div>
            </div>
            <div className=' mt-3'>
                <p>
                    Its a good place for group of three friends.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Reviews
