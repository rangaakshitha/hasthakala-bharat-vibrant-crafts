
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const userData = localStorage.getItem('hasthakala_user');
    if (userData) {
      navigate('/home');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  // Show loading state while redirecting
  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-emerald-50 mandala-bg flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="text-6xl mb-4">🏺</div>
        <h1 className="font-cinzel text-4xl font-bold text-gradient mb-4">
          हस्तकला भारत
        </h1>
        <p className="text-gray-600 font-devanagari">Loading your craft journey...</p>
      </div>
    </div>
  );
};

export default Index;
