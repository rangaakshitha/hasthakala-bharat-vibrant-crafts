import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HandHelping,
  Users,
  Star,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-orange-50 py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Page Title */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-orange-700 mb-2">
              About Hasthakala Bharat
            </h1>
            <p className="text-gray-600 text-lg">
              Celebrating the Soul of Indian Handicrafts
            </p>
          </div>

          {/* Intro Section */}
          <Card className="bg-white shadow-xl rounded-2xl">
            <CardContent className="p-8 text-lg text-gray-700 space-y-4 leading-relaxed">
              <p>
                <strong className="text-orange-700">Hasthakala Bharat</strong> is a
                cultural initiative to preserve and promote the age-old traditions of
                Indian handicrafts. We connect skilled artisans with a global audience
                through storytelling, workshops, and ethical e-commerce.
              </p>
              <p>
                Rooted in heritage, powered by technology — we ensure that every
                handmade piece finds its rightful place in the world.
              </p>
            </CardContent>
          </Card>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Our Mission",
                icon: <HandHelping size={36} className="text-orange-600" />,
                desc: "To uplift artisan communities and safeguard India’s craft legacy with dignity and innovation.",
              },
              {
                title: "Our Community",
                icon: <Users size={36} className="text-orange-600" />,
                desc: "A growing circle of craftsmen, culture lovers, students, and conscious buyers.",
              },
              {
                title: "What We Offer",
                icon: <Star size={36} className="text-orange-600" />,
                desc: "Handicraft categories, virtual workshops and handcrafted product discovery.",
              },
              {
                title: "Why It Matters",
                icon: <Lightbulb size={36} className="text-orange-600" />,
                desc: "Many artforms are vanishing. We strive to preserve them through access, awareness, and appreciation.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-orange-100 via-white to-orange-50 shadow-lg rounded-xl"
              >
                <CardContent className="p-6 flex space-x-4">
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-orange-700 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-4xl font-bold text-orange-700 text-center mb-6">
               Contact Us
            </h2>

            <Card className="bg-white rounded-2xl shadow-xl">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-start space-x-4">
                  <Mail size={22} className="text-orange-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-base font-medium">
                      contact@hasthakalabharat.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone size={22} className="text-orange-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-base font-medium">+91 98765 43210</p>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;