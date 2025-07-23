import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Review {
  id: number;
  name: string;
  email: string;
  phone: string;
  comment: string;
  rating: number | null;
  created_at?: string;
}

interface ReviewListProps {
  refreshTrigger: boolean;
}

const ReviewList: React.FC<ReviewListProps> = ({ refreshTrigger }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/reviews');
      setReviews(res.data);
    } catch (err) {
      console.error('❌ Failed to load reviews:', err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [refreshTrigger]);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-brown-700">All Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map(review => (
            <div
              key={review.id}
              className="border border-gray-300 p-4 rounded-lg bg-orange-50 shadow-sm"
            >
              <p><strong>Name:</strong> {review.name}</p>
              <p><strong>Email:</strong> {review.email}</p>
              <p><strong>Phone:</strong> {review.phone}</p>
              <p><strong>Comment:</strong> {review.comment}</p>
              <p><strong>Rating:</strong> {review.rating ?? 'N/A'}</p>
              {review.created_at && (
                <p className="text-xs text-gray-500 mt-1">Submitted on: {review.created_at}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewList;