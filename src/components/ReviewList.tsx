// ReviewList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Review {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  comment: string;
  rating?: number;
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
            <div>
              <strong>{r.name}</strong>
              {(r.email || r.phone) && (
                <div className="text-xs text-gray-600">
                  {r.email && <div>Email: {r.email}</div>}
                  {r.phone && <div>Phone: {r.phone}</div>}
                </div>
              )}
            </div>
            {r.rating ? (
              <span className="text-yellow-500">{"\u2B50".repeat(r.rating)}</span>
            ) : (
              <span className="text-gray-400 text-sm italic">No Rating</span>
            )}
          </div>
          <p>{r.comment}</p>
          <small className="text-gray-500">{new Date(r.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
