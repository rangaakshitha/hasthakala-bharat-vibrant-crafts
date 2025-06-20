import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from '@/components/Navigation';
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { etsyProducts } from "@/data/etsyProducts";

const ITEMS_PER_PAGE = 8;

const BuyProducts = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", ...Array.from(new Set(etsyProducts.map(p => p.category)))];

  const filteredProducts = etsyProducts
    .filter(p => categoryFilter === "All" || p.category === categoryFilter)
    .sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <Navigation />
      <div className="min-h-screen px-6 py-6 bg-neutral-50">
        <h1 className="text-4xl font-bold text-center text-orange-700 mb-6">
          Buy Handicrafts Online
        </h1>

        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-md shadow-sm px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <label className="font-medium text-sm text-gray-700">Filter by Category:</label>
            <select
              value={categoryFilter}
              onChange={e => {
                setCategoryFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full sm:w-auto"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <label className="font-medium text-sm text-gray-700">Sort by:</label>
            <select
              value={sortOption}
              onChange={e => setSortOption(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full sm:w-auto"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedProducts.map(product => (
            <Card
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-lg transition-transform hover:-translate-y-1 duration-300"
            >
              <CardHeader className="p-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-52 object-cover rounded-t-xl"
                />
              </CardHeader>
              <CardContent className="p-4 flex flex-col justify-between h-[180px]">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-800 mb-1 truncate">
                    {product.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                  <p className="text-lg font-bold text-orange-700">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                </div>
                <Button
                  asChild
                  className="mt-3 w-full bg-orange-600 hover:bg-orange-700 text-white text-sm rounded-md"
                >
                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    Buy Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-4 py-2 rounded-full font-semibold ${
                currentPage === idx + 1
                  ? "bg-orange-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <Footer />
      <ChatBot />
    </>
  );
};

export default BuyProducts;
