// ReviewForm.tsx
import React, { useState } from "react";
import axios from "axios";

const ReviewForm: React.FC<{ onNewReview: () => void }> = ({ onNewReview }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const reviewData: any = { name, email, phone, comment };
    if (rating !== null) reviewData.rating = rating;

    await axios.post("http://localhost:5000/api/reviews", reviewData);
    setName("");
    setEmail("");
    setPhone("");
    setComment("");
    setRating(null);
    onNewReview();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold">Artisians message/Review</h2>
      <input
        className="w-full p-2 border"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full p-2 border"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 border"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        className="w-full p-2 border"
        placeholder="Your Message"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <select
        className="w-full p-2 border text-gray-600"
        value={rating ?? ''}
        onChange={(e) => setRating(e.target.value ? +e.target.value : null)}
      >
        <option value="">Give a rating (optional)</option>
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r}>{r} Star{r > 1 && 's'}</option>
        ))}
      </select>
      <button className="bg-saffron-600 text-white px-4 py-2 rounded" type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
