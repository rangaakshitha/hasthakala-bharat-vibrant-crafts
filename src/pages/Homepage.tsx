
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
      craft.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      craft.states.some(state => state.toLowerCase().includes(searchTerm.toLowerCase()))
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
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-emerald-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 mandala-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <User className="h-6 w-6 text-saffron-600" />
                <span className="font-devanagari text-lg text-gray-700">
                  स्वागत / Welcome, {user.username}
                </span>
              </div>
              <Button 
                onClick={handleLogout}
                variant="outline"
                className="border-saffron-300 text-saffron-600 hover:bg-saffron-50"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
            
            <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-gradient mb-6">
              हस्तकला भारत
            </h1>
            <h2 className="font-garamond text-3xl md:text-4xl text-saffron-700 mb-4">
              Hasthakala Bharat
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-devanagari leading-relaxed">
              Discover the timeless beauty of Indian handicrafts. From ancient pottery traditions 
              to intricate woodwork, explore the rich heritage that has been passed down through 
              generations of skilled artisans.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-saffron-500" />
              <Input
                type="text"
                placeholder="Search crafts, states, or materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-lg border-saffron-200 focus:border-saffron-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Craft Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-garamond text-4xl font-bold text-center text-saffron-800 mb-12">
            Explore Our Craft Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCrafts.map((craft, index) => (
              <Card 
                key={craft.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-saffron-100 overflow-hidden"
                onClick={() => handleCraftClick(craft.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={craft.image} 
                    alt={craft.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 text-4xl bg-white/90 rounded-full w-12 h-12 flex items-center justify-center">
                    {craft.icon}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="font-garamond text-xl text-saffron-700 group-hover:text-saffron-800">
                    {craft.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 font-devanagari mb-4">
                    {craft.description}
                  </p>
                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700 mb-1">Famous in:</p>
                    <p className="text-sm text-saffron-600 font-devanagari">
                      {craft.states.slice(0, 3).join(', ')}
                      {craft.states.length > 3 && ` +${craft.states.length - 3} more`}
                    </p>
                  </div>
                  <Button 
                    className="w-full bg-saffron-500 hover:bg-saffron-600 text-white font-devanagari"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCraftClick(craft.id);
                    }}
                  >
                    Learn More / और जानें
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCrafts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 font-devanagari">
                No crafts found matching your search. Try different keywords.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-saffron-100 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-saffron-600 mb-2">5000+</div>
              <div className="text-gray-700 font-devanagari">Artisan Families</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-emerald-600 mb-2">28</div>
              <div className="text-gray-700 font-devanagari">States Covered</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-royal-600 mb-2">3000+</div>
              <div className="text-gray-700 font-devanagari">Years of Tradition</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-saffron-600 mb-2">100+</div>
              <div className="text-gray-700 font-devanagari">Craft Varieties</div>
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
