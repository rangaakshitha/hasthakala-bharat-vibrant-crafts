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

      <div className="min-h-screen bg-orange-50 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-orange-700">
            Artisans' Messages
          </h1>

          <ReviewForm onNewReview={() => setRefresh(!refresh)} />
          <ReviewList refreshTrigger={refresh} />
        </div>
      </div>

      <Footer />
      <ChatBot />
    </>
  );
};

export default ReviewsPage;