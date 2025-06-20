// src/pages/CraftsWorkshops.tsx

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from '@/components/Navigation';
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

interface CraftWorkshop {
  id: number;
  title: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const workshops: CraftWorkshop[] = [
  {
    id: 1,
    title: "Numaish Exhibition",
    city: "Hyderabad",
    state: "Telangana",
    startDate: "2025-01-01",
    endDate: "2025-02-15",
    description:
      "India's largest annual consumer exhibition featuring arts, crafts, handlooms, and cultural performances.",
    image: "/images/numaish.jpg",
    tags: ["Handicrafts", "Traditional", "Annual"],
    link: "https://example.com/numaish",
  },
  {
    id: 2,
    title: "Surajkund Mela",
    city: "Faridabad",
    state: "Haryana",
    startDate: "2025-02-01",
    endDate: "2025-02-15",
    description:
      "One of the world's largest crafts fairs celebrating Indian folk traditions, arts, music, and food.",
    image: "/images/surajkund.jpg",
    tags: ["Folk Art", "Cultural", "Handloom"],
    link: "https://example.com/surajkund",
  },
];

const CraftsWorkshops: React.FC = () => {
  const today = new Date();

  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Page Content */}
      <div className="container py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-600 flex items-center justify-center gap-2">
  <span className="text-4xl">🧵</span>
  <span>Explore Upcoming Crafts Workshops & Exhibitions</span>
</h1>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((event) => {
            const isPast = new Date(event.endDate) < today;

            return (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.03 }}
                className="transition-transform duration-300"
              >
                <Card className="shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-52 object-cover"
                  />
                  <CardHeader className="bg-gray-100 px-5 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold">
                        {event.title}
                      </CardTitle>
                      <Badge
                        variant={isPast ? "outline" : "default"}
                        className={`text-xs ${
                          isPast ? "text-gray-500" : "bg-green-600"
                        }`}
                      >
                        {isPast ? "Past Event" : "Upcoming"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      {event.city}, {event.state}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4" />
                      {new Date(event.startDate).toLocaleDateString()} –{" "}
                      {new Date(event.endDate).toLocaleDateString()}
                    </div>
                  </CardHeader>

                  <CardContent className="px-5 py-4">
                    <p className="text-sm text-gray-700 mb-3">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs px-2"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          Know More <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* ChatBot Floating */}
      <div className="fixed bottom-4 right-4 z-50">
        <ChatBot />
      </div>
    </>
  );
};

export default CraftsWorkshops;
