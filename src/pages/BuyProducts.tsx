import React, { useState, useEffect } from "react";
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
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [showWishlist, setShowWishlist] = useState(false);

  const categories = ["All", ...Array.from(new Set(etsyProducts.map(p => p.category)))];

  const toggleWishlist = (productId: number) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const getFilteredProducts = () => {
    let base = etsyProducts;

    if (showWishlist) {
      base = base.filter(p => wishlist.includes(p.id));
    }

    return base
      .filter(p => categoryFilter === "All" || p.category === categoryFilter)
      .sort((a, b) => {
        if (sortOption === "price-low") return a.price - b.price;
        if (sortOption === "price-high") return b.price - a.price;
        return 0;
      });
  };

  const filteredProducts = getFilteredProducts();
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const HeartIcon = ({ filled }: { filled: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "#ef4444" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#ef4444"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 7.5c0-2.9-2.35-5.25-5.25-5.25-1.74 0-3.29.83-4.25 2.13A5.25 5.25 0 006.75 2.25C3.85 2.25 1.5 4.6 1.5 7.5c0 7.22 10.5 13.5 10.5 13.5S21.75 14.72 21.75 7.5z"
      />
    </svg>
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

          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <label className="font-medium text-sm text-gray-700">Sort by:</label>
              <select
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <Button
              onClick={() => setShowWishlist(prev => !prev)}
              className={`px-4 py-2 text-sm rounded-md ${
                showWishlist ? "bg-pink-100 text-red-600" : "bg-orange-100 text-orange-700"
              } hover:bg-orange-200`}
            >
              {showWishlist ? "Hide Wishlist" : `Wishlist Items (${wishlist.length})`}
            </Button>
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
              <CardContent className="p-4 flex flex-col justify-between h-[190px] relative">
                <div className="flex justify-between items-start gap-2">
                  <div className="w-[85%]">
                    <CardTitle className="text-lg font-semibold text-gray-800 mb-1 truncate">
                      {product.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                    <p className="text-lg font-bold text-orange-700">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="mt-1 hover:scale-110 transition"
                    title={wishlist.includes(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                  >
                    <HeartIcon filled={wishlist.includes(product.id)} />
                  </button>
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
        {!showWishlist && totalPages > 1 && (
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
        )}
      </div>

      <Footer />
      <ChatBot />
    </>
  );
};

export default BuyProducts;
