
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/home')}
          >
            <div className="text-2xl">🏺</div>
            <div>
              <h1 className="text-xl font-bold text-orange-600">
                Hasthakala Bharat
              </h1>
              <p className="text-xs text-gray-600">Indian Handicrafts</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant={isActive('/home') ? 'default' : 'ghost'}
              onClick={() => navigate('/home')}
              className={isActive('/home') ? 'bg-orange-500 hover:bg-orange-600' : ''}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            
            <div className="hidden md:flex space-x-2">
              {['pottery', 'woodcraft', 'metalcraft', 'bamboo', 'paper'].map((craft) => (
                <Button
                  key={craft}
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(`/craft/${craft}`)}
                  className="text-sm capitalize hover:bg-orange-50"
                >
                  {craft}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
