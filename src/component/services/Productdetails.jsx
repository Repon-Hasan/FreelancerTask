import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData, useParams } from 'react-router'

function Productdetails() {
    const {id}=useParams();
    const data=useLoaderData()
    const products = data.find(product=> product.id === parseInt(id))
    //console.log(products)
    const {
        thumbnail,
        name,
        techCategory,
        price,
        frequency,
        viewMore,description} = products

        const [reviewText, setReviewText] = useState('');
        const [rating, setRating] = useState('');
        const [reviews, setReviews] = useState([]);
      
        const handleReviewSubmit = () => {
          const ratingNumber = Number(rating);
          if (!reviewText || ratingNumber < 1 || ratingNumber > 5) {
            alert('Please enter a review and a rating between 1 and 5.');
            return;
          }
      
          const newReview = {
            text: reviewText,
            rating: ratingNumber,
          };
      
          setReviews([newReview, ...reviews]);
          setReviewText('');
          setRating('');
        };

  return (
    <div className=''>
                  <Helmet>
        <title>"Details About product"</title>
        <meta name="description" content={"View product details"} />
      </Helmet>
      
    <div className="card bg-base-100 w-96 shadow-sm  mx-auto mt-6">
<figure>
  <img className='w-full'
    src={thumbnail}
    alt="image" />
</figure>
<div className="card-body">
  <h2 className="card-title">{name}</h2>
  <p className='text-gray-400'>{description}</p>
  <div className='font-semibold'>
      <p>{techCategory}</p>
      <p>{frequency}</p>
      <p>${price}</p>
  </div>

       
       <div className="max-w-md  p-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">Submitted Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <ul className="space-y-2">
            {reviews.map((r, index) => (
              <li key={index} className="p-2 border  border-gray-300 rounded">
                <strong>Rating:</strong> {r.rating} <br />
                <strong>Review:</strong> {r.text}
              </li>
            ))}
          </ul>
        )}
      </div>



  <div className="max-w-md mx-auto p-4 rounded shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Leave a Review</h3>
        <input
          className="textarea textarea-bordered w-full mb-2"
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <input
          type="number"
          className="input input-bordered w-full mb-2"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min={1}
          max={5}
        />

        <button className="btn btn-success w-full" onClick={handleReviewSubmit}>
          Submit Review
        </button>
      </div>


 
  <div className="card-actions justify-end">
    <button className="btn btn-primary"> <Link to='/'> Back to Home </Link> </button>
  </div>
</div>
</div>

  </div>
      
    
  )
}

export default Productdetails
