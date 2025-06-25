import React, { useEffect, useState } from "react";
import axios from "axios";

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  created_at: string;
}

const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = async () => {
    const res = await axios.get("http://localhost:5000/api/reviews");
    setReviews(res.data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-xl font-bold">Recent Reviews</h2>
      {reviews.map(r => (
        <div key={r.id} className="bg-gray-100 p-4 rounded shadow">
          <div className="flex justify-between">
            <strong>{r.name}</strong>
            <span className="text-yellow-500">{"⭐".repeat(r.rating)}</span>
          </div>
          <p>{r.comment}</p>
          <small className="text-gray-500">{new Date(r.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
