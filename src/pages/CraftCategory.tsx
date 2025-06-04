
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
            onClick={() => navigate('/home')}
            variant="outline"
            className="mb-6 border-saffron-300 text-saffron-600 hover:bg-saffron-50"
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
              <p className="text-xl text-gray-700 mb-6 font-devanagari leading-relaxed">
                {craft.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {craft.states.slice(0, 5).map((state) => (
                  <Badge key={state} variant="secondary" className="bg-saffron-100 text-saffron-700">
                    <MapPin className="h-3 w-3 mr-1" />
                    {state}
                  </Badge>
                ))}
                {craft.states.length > 5 && (
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                    +{craft.states.length - 5} more
                  </Badge>
                )}
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

      {/* Artisan Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="glass-effect border-saffron-200 mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <img 
                    src={craft.artisanImage} 
                    alt="Skilled Artisan"
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-garamond text-2xl font-bold text-saffron-700 mb-4">
                    Meet Our Skilled Artisans
                  </h3>
                  <p className="text-gray-700 font-devanagari text-lg leading-relaxed">
                    Behind every beautiful {craft.name.toLowerCase()} piece is a skilled artisan who has 
                    dedicated their life to preserving this ancient craft. These master craftspeople 
                    carry forward traditions that have been passed down through generations, combining 
                    time-honored techniques with their own creative vision.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-saffron-50 p-1 rounded-xl">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
              >
                <Clock className="h-4 w-4 mr-2" />
                History
              </TabsTrigger>
              <TabsTrigger 
                value="materials"
                className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
              >
                <Wrench className="h-4 w-4 mr-2" />
                Materials
              </TabsTrigger>
              <TabsTrigger 
                value="process"
                className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
              >
                Process
              </TabsTrigger>
              <TabsTrigger 
                value="culture"
                className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
              >
                <Heart className="h-4 w-4 mr-2" />
                Cultural Value
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <Card className="border-saffron-200">
                <CardHeader>
                  <CardTitle className="font-garamond text-2xl text-saffron-700 flex items-center">
                    <Clock className="h-6 w-6 mr-2" />
                    Historical Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-devanagari text-lg leading-relaxed">
                    {craft.history}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materials" className="mt-8">
              <Card className="border-saffron-200">
                <CardHeader>
                  <CardTitle className="font-garamond text-2xl text-saffron-700 flex items-center">
                    <Wrench className="h-6 w-6 mr-2" />
                    Materials & Tools Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {craft.materials.map((material, index) => (
                      <div 
                        key={index} 
                        className="flex items-center p-3 bg-saffron-50 rounded-lg border border-saffron-100"
                      >
                        <div className="w-2 h-2 bg-saffron-500 rounded-full mr-3" />
                        <span className="font-devanagari text-gray-700">{material}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="mt-8">
              <Card className="border-saffron-200">
                <CardHeader>
                  <CardTitle className="font-garamond text-2xl text-saffron-700">
                    Step-by-Step Crafting Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {craft.process.map((step, index) => (
                      <div 
                        key={index} 
                        className="flex items-start p-4 bg-emerald-50 rounded-lg border border-emerald-100"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                          {index + 1}
                        </div>
                        <span className="font-devanagari text-gray-700 text-lg">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="culture" className="mt-8">
              <Card className="border-saffron-200">
                <CardHeader>
                  <CardTitle className="font-garamond text-2xl text-saffron-700 flex items-center">
                    <Heart className="h-6 w-6 mr-2" />
                    Cultural Significance & Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-devanagari text-lg leading-relaxed">
                    {craft.culturalValue}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* States Map Section */}
      <section className="py-12 bg-gradient-to-r from-saffron-100 to-emerald-100">
        <div className="container mx-auto px-4">
          <h2 className="font-garamond text-3xl font-bold text-center text-saffron-800 mb-8">
            Practicing States Across India
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {craft.states.map((state, index) => (
              <Card 
                key={state}
                className="text-center p-4 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-2">
                  <MapPin className="h-6 w-6 text-saffron-500 mx-auto mb-2" />
                  <p className="font-devanagari font-medium text-gray-700">{state}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default CraftCategory;
