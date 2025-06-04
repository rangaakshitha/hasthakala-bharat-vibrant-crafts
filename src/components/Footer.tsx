
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const states = [
    'Andhra Pradesh', 'Assam', 'Bihar', 'Gujarat', 'Haryana', 'Karnataka', 
    'Kerala', 'Maharashtra', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Uttar Pradesh', 
    'West Bengal', 'All States'
  ];

  const materials = [
    'Clay', 'Wood', 'Metal', 'Bamboo', 'Paper', 'Cotton', 'Silk', 'Stone', 'Glass', 'All Materials'
  ];

  return (
    <footer className="bg-gradient-to-r from-saffron-800 to-emerald-800 text-white">
      {/* Filter Section */}
      <div className="container mx-auto px-4 py-12">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-6">
            <h3 className="font-garamond text-2xl font-bold text-center mb-6">
              Discover Crafts by Region & Material
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 font-devanagari">
                  Filter by State
                </label>
                <Select>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state.toLowerCase()}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 font-devanagari">
                  Filter by Material
                </label>
                <Select>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Select material" />
                  </SelectTrigger>
                  <SelectContent>
                    {materials.map((material) => (
                      <SelectItem key={material} value={material.toLowerCase()}>
                        {material}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 font-devanagari">
                  Search Crafts
                </label>
                <Input 
                  placeholder="Search by craft name..."
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">🏺</div>
              <div>
                <h3 className="font-cinzel text-xl font-bold">हस्तकला भारत</h3>
                <p className="text-sm font-devanagari">Hasthakala Bharat</p>
              </div>
            </div>
            <p className="text-white/80 font-devanagari mb-4">
              Preserving India's rich handicraft heritage and supporting artisan communities 
              across the nation. Join us in celebrating traditional craftsmanship.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-garamond text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-devanagari">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Artisan Stories</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Craft Workshops</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cultural Events</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Support Artisans</a></li>
            </ul>
          </div>

          {/* Craft Categories */}
          <div>
            <h4 className="font-garamond text-lg font-bold mb-4">Craft Categories</h4>
            <ul className="space-y-2 font-devanagari">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">🏺 Clay & Pottery</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">🪵 Woodcraft</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">⚱️ Metal Craft</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">🎋 Bamboo Craft</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">📜 Paper Craft</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-garamond text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 font-devanagari">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-white/80">info@hasthakala.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-white/80">+91-11-2345-6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-white/80">New Delhi, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium mb-2 font-devanagari">Stay Updated</h5>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email..."
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 text-sm"
                />
                <Button size="sm" className="bg-saffron-500 hover:bg-saffron-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 font-devanagari text-sm">
              © 2024 Hasthakala Bharat. All rights reserved. Proudly preserving Indian heritage.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
