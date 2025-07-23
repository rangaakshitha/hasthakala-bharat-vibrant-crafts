import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ChevronDown } from "lucide-react";
import { craftsData } from "@/data/craftsData"; // ✅ Import your crafts data

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <div className="text-2xl">🏺</div>
            <div>
              <h1 className="text-xl font-bold text-orange-600">Hasthakala Bharat</h1>
              <p className="text-xs text-gray-600">Indian Handicrafts</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="text-sm capitalize hover:bg-orange-300"
            >
              🏠Home
            </Button>

            {/* Categories Dropdown */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 text-sm hover:bg-orange-300"
              >
                🗂️Categories <ChevronDown size={16} />
              </Button>

              <div
                className={`absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50 transition-all duration-200 ${
                  isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {Object.entries(craftsData).map(([key, craft]) => (
                  <button
                    key={key}
                    onClick={() => {
                      navigate(`/craft/${key}`);
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-orange-100 capitalize text-sm"
                  >
                    {craft.name}
                  </button>
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/workshops")}
              className="text-sm capitalize hover:bg-orange-300"
            >
              🧑‍🏫Craft Workshops
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/buy-products")}
              className="text-sm capitalize hover:bg-orange-300"
            >
              🛒Buy Products
            </Button>
            <Button
              variant={isActive("/reviews") ? "default" : "ghost"}
              size="sm"
              onClick={() => navigate("/reviews")}
              className="text-sm capitalize hover:bg-orange-300"
            >
              💬Artisians Message
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/about-us")}
              className="text-sm capitalize hover:bg-orange-300"
            >
              🧑‍🤝‍🧑About Us
            </Button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
