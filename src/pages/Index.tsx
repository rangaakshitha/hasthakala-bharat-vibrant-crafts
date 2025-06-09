import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('hasthakala_token');
    if (token) {
      navigate('/homepage');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">🏺</div>
        <h1 className="text-3xl font-bold text-orange-600 mb-4">
          Hasthakala Bharat
        </h1>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default Index;
