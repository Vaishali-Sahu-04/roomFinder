import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Reviews = () => {
    const {roomId} = useParams();
    const [reviews, setReviews] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newReview, setNewReview] = useState({ role: '', comment: '', rating: ''});

    useEffect(() => {
      async function fetchReviews(){
        const response = await axios.get(`http://localhost:5000/api/reviews/${roomId}`);
        //console.log(response.data.data);
        setReviews(response.data.data);
      }
      fetchReviews();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = axios.post(`http://localhost:5000/api/reviews/add-review/${roomId}`, newReview)
        if(response.status === 200) console.log("Review submitted");
        console.log(response);
        //setReviews()
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

  return (
    <div className='border border-gray-500 p-4 rounded-md w-8/12'>
        <h1 className='font-semibold font-serif text-2xl'>Reviews and Ratings</h1>
        <button className='py-1 border bg-slate-800 text-white px-3  mt-4 rounded-md text-slate-800'
            onClick={() => setShowForm(true)}>
            Write a Review
        </button>
        {showForm && (
            <div className='mt-4'>
            <form onSubmit={handleSubmit}>
              <div className='mb-2'>
                <label className='block font-semibold'>Role:</label>
                <select id="property-type" name="property-type" 
                className="border border-gray-300 rounded-lg text-sm text-gray-700 p-1 bg-white">
                  <option value="owner">I own a property here</option>
                  <option value="live">I currenlt/used to live here</option>
                  <option value="local-agent">I am a local agent</option>
                  <option value="visiter">I visited the project</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className='mb-2'>
                <label className='block font-semibold'>Comment:</label>
                <textarea
                  name='comment'
                  value={newReview.comment}
                  onChange={handleInputChange}
                  className='border border-gray-300 outline-none text-sm text-gray-700 p-1 rounded-md w-full'
                  required
                ></textarea>
              </div>
              <div className='mb-2'>
              <label className='block font-semibold'>Rating:</label>
              <select
                name='rating'
                value={newReview.rating}
                onChange={handleInputChange}
                className='border border-gray-300 text-sm text-gray-700 py-1 px-2 rounded-md w-full'
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
        {
          reviews.length > 0 && (
            reviews.map((review) => (
              <div className="shadow-md mt-5 pb-2" key={review._id}>
                <div className='flex gap-4'>
                    <img className='w-12 h-12'
                    src="https://static.thenounproject.com/png/363640-200.png" alt="" />
                    <div>
                        <h2 className='font-semibold block'>{review.userFullName}</h2>
                        <p className='text-sm'>{review.role}</p>
                    </div>
                </div>
                <div className=' mt-3'>
                    <p>
                        {review.comment}
                    </p>
                </div>
              </div>
            ))
          )
        }
    </div>
  )
}

export default Reviews
