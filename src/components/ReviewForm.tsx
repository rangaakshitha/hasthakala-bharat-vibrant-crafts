import React, { useState } from 'react';
import axios from 'axios';

interface ReviewFormProps {
  onNewReview?: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onNewReview }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number | ''>('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const reviewData = {
      name,
      email,
      phone,
      comment,
      rating: rating === '' ? null : rating,
    };

    try {
      const res = await axios.post('http://localhost:5000/api/reviews', reviewData);

      if (res.status === 201) {
        setMessage('Review submitted successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setComment('');
        setRating('');

        onNewReview?.(); // ✅ Trigger refresh in parent
      } else {
        setMessage('Unexpected response from server.');
      }
    } catch (err) {
      console.error('❌ Submit failed:', err);
      setMessage('Something went wrong while submitting.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-4 text-brown-800">Submit a Review</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        required
        onChange={e => setName(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        required
        onChange={e => setPhone(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
      />

      <textarea
        placeholder="Message / Comment"
        value={comment}
        required
        onChange={e => setComment(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-300"
      />

      <input
        type="number"
        placeholder="Rating (optional)"
        min="1"
        max="5"
        value={rating}
        onChange={e => setRating(e.target.value === '' ? '' : Number(e.target.value))}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
      />

      <button
        type="submit"
        className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Submit
      </button>

      {message && <p className="text-center text-green-600 font-medium mt-2">{message}</p>}
    </form>
  );
};

export default ReviewForm;