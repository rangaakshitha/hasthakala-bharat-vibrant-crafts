import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from '@/components/Navigation';
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { etsyProducts } from "@/data/etsyProducts";

const ITEMS_PER_PAGE = 6;

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
      <div className="min-h-screen px-6 py-10 bg-neutral-50">
        <h1 className="text-4xl font-bold text-center text-orange-700 mb-8">
          Buy Handicrafts Online
        </h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <select
            value={categoryFilter}
            onChange={e => {
              setCategoryFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={sortOption}
            onChange={e => setSortOption(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="default">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-3 gap-20">
          {paginatedProducts.map(product => (
            <Card key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border">
              <CardHeader className="p-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
              </CardHeader>
              <CardContent className="p-4 flex flex-col justify-between h-[200px]">
                <div>
                  <CardTitle className="text-lg font-semibold text-orange-700 mb-1">
                    {product.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>
                  <p className="mt-2 text-lg font-bold text-gray-800">₹{product.price}</p>
                </div>
                <Button
                  asChild
                  className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white font-medium"
                >
                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    Buy on Etsy
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center gap-3 flex-wrap">
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
