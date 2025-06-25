import React, { useState } from "react";
import axios from "axios";

const ReviewForm: React.FC<{ onNewReview: () => void }> = ({ onNewReview }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/reviews", {
      name,
      comment,
      rating
    });
    setName("");
    setComment("");
    setRating(5);
    onNewReview();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold">Leave a Review</h2>
      <input className="w-full p-2 border" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea className="w-full p-2 border" placeholder="Your comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      <select className="w-full p-2 border" value={rating} onChange={(e) => setRating(+e.target.value)}>
        {[5,4,3,2,1].map(r => <option key={r} value={r}>{r} Star{r > 1 && 's'}</option>)}
      </select>
      <button className="bg-saffron-600 text-white px-4 py-2 rounded" type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
