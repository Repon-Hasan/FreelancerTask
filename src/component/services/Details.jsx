// import React from 'react'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async';

function Details({item}) {

    const {id,
        thumbnail,
        name,
        techCategory,
        price,
        frequency,
        viewMore,description} = item
  return (
    <div className=''>

      <div className="card bg-base-100 w-96 shadow-sm h-[400px]">
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
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"> <Link to={`details/${id}`}>View More.. </Link> </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Details



// import React, { useState } from 'react';
// import { Link } from 'react-router';
// import { Helmet } from 'react-helmet-async';

// function Details({ item }) {
//   const {
//     id,
//     thumbnail,
//     name,
//     techCategory,
//     price,
//     frequency,
//     viewMore,
//     description,
//   } = item;

//   const [reviewText, setReviewText] = useState('');
//   const [rating, setRating] = useState('');
//   const [reviews, setReviews] = useState([]);

//   const handleReviewSubmit = () => {
//     const ratingNumber = Number(rating);
//     if (!reviewText || ratingNumber < 1 || ratingNumber > 5) {
//       alert('Please enter a review and a rating between 1 and 5.');
//       return;
//     }

//     const newReview = {
//       text: reviewText,
//       rating: ratingNumber,
//     };

//     setReviews([newReview, ...reviews]);
//     setReviewText('');
//     setRating('');
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>Details About Product</title>
//         <meta name="description" content="View product details" />
//       </Helmet>

//       <div className="card bg-base-100 w-96 shadow-sm h-auto mx-auto mb-6">
//         <figure>
//           <img className="w-full" src={thumbnail} alt="image" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">{name}</h2>
//           <p className="text-gray-400">{description}</p>
//           <div className="font-semibold">
//             <p>{techCategory}</p>
//             <p>{frequency}</p>
//           </div>

//           <div className="card-actions justify-end">
//             <button className="btn btn-primary">
//               <Link to={`details/${id}`}>View More..</Link>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Review Form */}

//     </div>
//   );
// }

// export default Details;

