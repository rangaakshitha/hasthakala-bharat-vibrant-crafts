
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, User, LogOut } from 'lucide-react';
import { craftsData } from '@/data/craftsData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Homepage = () => {
  const [user, setUser] = useState<{username: string} | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCrafts, setFilteredCrafts] = useState(Object.values(craftsData));
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('hasthakala_user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  useEffect(() => {
    const filtered = Object.values(craftsData).filter(craft =>
      craft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      craft.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCrafts(filtered);
  }, [searchTerm]);

  const handleLogout = () => {
    localStorage.removeItem('hasthakala_user');
    navigate('/login');
  };

  const handleCraftClick = (craftId: string) => {
    navigate(`/craft/${craftId}`);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700">Welcome, {user.username}</span>
              </div>
              <Button 
                onClick={handleLogout}
                variant="outline"
                className="border-gray-300"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
            
            <h1 className="text-5xl font-bold text-orange-600 mb-4">
              🏺 Hasthakala Bharat
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Discover the beauty of Indian handicrafts. From pottery to woodwork, 
              explore traditions passed down through generations.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search crafts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Craft Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCrafts.map((craft) => (
              <Card 
                key={craft.id}
                className="simple-card cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleCraftClick(craft.id)}
              >
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={craft.image} 
                    alt={craft.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">
                    {craft.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {craft.description}
                  </p>
                  <p className="text-sm text-orange-600 mb-3">
                    Famous in: {craft.states.slice(0, 2).join(', ')}
                    {craft.states.length > 2 && ' +more'}
                  </p>
                  <Button 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCraftClick(craft.id);
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCrafts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No crafts found. Try different keywords.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">5000+</div>
              <div className="text-gray-700">Artisan Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">28</div>
              <div className="text-gray-700">States Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">3000+</div>
              <div className="text-gray-700">Years of Tradition</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-700">Craft Varieties</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Homepage;
