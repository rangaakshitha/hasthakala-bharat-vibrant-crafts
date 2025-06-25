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
    image: "https://i0.wp.com/allabouthyderabad.com/wp-content/uploads/2025/01/Numaish-2025.webp?w=1500&ssl=1",
    tags: ["Handicrafts", "Traditional", "Annual"],
    link: "https://www.hyderabadnumaish.org/",
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
    image: "https://www.holidify.com/images/cmsuploads/compressed/8456788805_09b0433a1a_z_20180221130002.jpg",
    tags: ["Folk Art", "Cultural", "Handloom"],
    link: "https://surajkundmelaauthority.org/",
  },
  {
    id: 3,
    title: "Gifts World Expo",
    city: "New Delhi",
    state: "Kolkata,Bengaluru",
    startDate: "2025-07-24",
  endDate: "2025-07-26",
  description:
    "India’s biggest exhibition for gifting solutions, featuring corporate gifts, lifestyle products, personalized items, and more.",
    image: "https://giftsworldexpo.com/kol/wp-content/uploads/2025/05/8-2.jpg",
    tags: ["Corporate Gifts", "Lifestyle", "Personalized"],
    link: "https://www.giftsworldexpo.com/",
  },
  {
  id: 4,
  title: "Dastkar Nature Bazaar",
  city: "New Delhi",
  state: "Delhi",
  startDate: "2025-11-01",
  endDate: "2025-11-15",
  description:
    "A celebration of Indian crafts and handlooms with artisan participation from across the country, organized by Dastkar.",
  image: "https://www.dastkar.org/wp-content/uploads/2024/05/COE_24-25_Cover-min.jpg",
  tags: ["Handicrafts", "Handloom", "Artisan"],
  link: "https://dastkar.org/",
},
{
  id: 5,
  title: "Shilparamam Crafts Mela",
  city: "Hyderabad",
  state: "Telangana",
  startDate: "2025-12-15",
  endDate: "2026-01-01",
  description:
    "An ethnic crafts village hosting seasonal craft exhibitions, cultural shows, and folk art from across India.",
  image: "https://www.hyderabadtourism.travel/images/visiting-places/headers/shilparamam-hyderabad-tourism-entry-fee-timings-holidays-reviews-header.jpg",
  tags: ["Ethnic", "Crafts", "Cultural"],
  link: "https://shilparamam.in/",
},
{
  id: 6,
  title: "Saras Ajeevika Mela",
  city: "New Delhi",
  state: "Delhi",
  startDate: "2025-03-01",
  endDate: "2025-03-10",
  description:
    "A government-organized fair showcasing traditional handicrafts, handlooms, and foods made by self-help groups from rural India.",
  image: "https://www.kahajaun.com/wp-content/uploads/2024/02/Saras-Ajeevika-Mela-2024-Noida.png",
  tags: ["Rural", "Handicrafts", "Self-Help Groups"],
  link: "https://rural.nic.in/",
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
