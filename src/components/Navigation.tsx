
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Search } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-saffron-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/home')}
          >
            <div className="text-3xl">🏺</div>
            <div>
              <h1 className="font-cinzel text-xl font-bold text-saffron-600">
                हस्तकला भारत
              </h1>
              <p className="text-xs text-gray-600 font-devanagari">Hasthakala Bharat</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Button
              variant={isActive('/home') ? 'default' : 'ghost'}
              onClick={() => navigate('/home')}
              className={isActive('/home') ? 'bg-saffron-500 hover:bg-saffron-600' : 'text-saffron-600 hover:text-saffron-700 hover:bg-saffron-50'}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            
            <div className="flex items-center space-x-2 text-sm font-devanagari text-gray-600">
              <span>Craft Categories:</span>
              <div className="flex space-x-2">
                {['pottery', 'woodcraft', 'metalcraft', 'bamboo', 'paper'].map((craft) => (
                  <Button
                    key={craft}
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate(`/craft/${craft}`)}
                    className="text-xs text-saffron-600 hover:text-saffron-700 hover:bg-saffron-50 capitalize"
                  >
                    {craft}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => navigate('/home')}
              className="text-saffron-600"
            >
              <Home className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
