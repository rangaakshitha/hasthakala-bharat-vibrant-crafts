import React, { useState } from "react";
import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const ReviewsPage: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <Navigation />
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-warmbrown-900">
          Feedback & Reviews
        </h1>
        <ReviewForm onNewReview={() => setRefresh(!refresh)} />
        <ReviewList key={String(refresh)} />
      </div>
      <Footer />
      <ChatBot />
    </>
  );
};

export default ReviewsPage;
