
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, MapPin, Clock, Wrench, Heart } from 'lucide-react';
import { craftsData, CraftData } from '@/data/craftsData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import Speaker from "@/components/ui/Speaker";


const CraftCategory = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [craft, setCraft] = useState<CraftData | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (category && craftsData[category]) {
      setCraft(craftsData[category]);
    } else {
      navigate('/home');
    }
  }, [category, navigate]);

  if (!craft) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-emerald-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-12 mandala-bg">
        <div className="container mx-auto px-4">
          <Button 
            onClick={() => navigate('/')}
            variant="outline"
            className="mb-6 border-saffron-300 text-saffron-600 hover:bg-saffron-100 hover:text-saffron-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="text-6xl mb-4">{craft.icon}</div>
              <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-gradient mb-4">
                {craft.name}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {craft.states.slice(0, 5).map((state) => (
                  <Badge key={state} variant="secondary" className="bg-saffron-100 text-saffron-700">
                    <MapPin className="h-3 w-3 mr-1" />
                    {state}
                  </Badge>
                ))}
              </div>
              
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={craft.image} 
                  alt={craft.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
  <div className="container mx-auto px-4">
    {craft.subcategories.map((subCat, index) => (
      <Card
        key={index}
        className="bg-[#fff7e6] border border-saffron-200 backdrop-blur-lg shadow-lg rounded-2xl mb-10 transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl"
      >
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-center">
            <div className="md:col-span-1 overflow-hidden rounded-xl">
              <img
                src={subCat.image}
                alt={subCat.title}
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-md"
              />
            </div>

            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-saffron-700 mb-3 font-garamond">
                {subCat.title}
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed font-devanagari mb-4">
                <p className="text-lg">
  {subCat.description}
  <Speaker text={subCat.description} />
</p>

              </p>
              <Button
                onClick={() =>navigate(`/category/${craft.id}/${subCat.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}`)}
                className="bg-orange-500 text-white font-semibold text-sm px-6 py-2 mt-2 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
              >
                Explore
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</section>
<Footer />
      <ChatBot />
    </div>
  );
};

export default CraftCategory;
