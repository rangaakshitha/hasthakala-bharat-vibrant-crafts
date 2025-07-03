import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { craftsData, CraftData, SubCategory } from '@/data/craftsData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Speaker from "@/components/ui/Speaker";

const recommendationsData: Record<string, string[]> = {
  "Clay & Pottery": ["Teracotta Pottery", "Blue Pottery", "Khurja Pottery", "Black Pottery"],
  "Wood craft": ["Saharanpur wood carving", "Kashmir walnut wood carving", "Bastan wooden craft", "Ganjifa wooden craft", "Sandook boxes"],
  "Metal Craft": ["Thatheras metal Craft", "Dhokra", "Bidriware", "Kansa Utensils", "Tarakasi", "Brass ware"],
  "Bamboo & Cane": ["Jappi", "Shital pati", "Khasi trap"],
  "Stone & Marble": ["Marble Inlay", "Pashan Kala", "Khajuraho", "Kalinga"],
  "Natural Fibre": ["Ghazipur Wall Hangings", "Kathputlis", "Madur Kathi Mat Weaving", "Pipli Applique Work"]
};


const SubCategoryDetail = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  const navigate = useNavigate();

  const [craft, setCraft] = useState<CraftData | null>(null);
  const [subCat, setSubCat] = useState<SubCategory | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'history' | 'process' | 'cluster' | 'care'>('history');

  useEffect(() => {
    const selectedCraft = craftsData[category || ''];
    if (!selectedCraft) {
      navigate('/home');
      return;
    }

    const matchedSub = selectedCraft.subcategories.find((sub) =>
      sub.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') === subcategory
    );

    if (!matchedSub) {
      navigate(`/category/${category}`);
      return;
    }

    setCraft(selectedCraft);
    setSubCat(matchedSub);
    setCurrentImageIndex(0);
  }, [category, subcategory, navigate]);

  if (!craft || !subCat) return null;

  const images = subCat.images && subCat.images.length > 0 ? subCat.images : [subCat.image];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

 const renderRecommendations = () => {
  if (!craft || !subCat) return null;

  const matchingCategoryKey = Object.keys(recommendationsData).find(
    key => key.toLowerCase() === craft.name.toLowerCase()
  );

  const recommendedTitles = matchingCategoryKey
    ? recommendationsData[matchingCategoryKey].filter(title => title !== subCat.title)
    : [];

  // Collect all matching subcategories
  const allRecommendations: {
    title: string;
    image: string;
    categorySlug: string;
    subSlug: string;
  }[] = [];

  Object.entries(craftsData).forEach(([catKey, craftObj]) => {
    craftObj.subcategories.forEach(sub => {
      if (recommendedTitles.includes(sub.title)) {
        allRecommendations.push({
          title: sub.title,
          image: sub.image,
          categorySlug: catKey,
          subSlug: sub.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
        });
      }
    });
  });

  // Shuffle the recommendations
  const shuffled = allRecommendations.sort(() => 0.5 - Math.random());
  const topThree = shuffled.slice(0, 3);

  if (topThree.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 pt-12 pb-20">
      <h2 className="text-3xl font-bold text-saffron-700 mb-6 text-center drop-shadow">Recommended for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topThree.map((rec, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/category/${rec.categorySlug}/${rec.subSlug}`)}
            className="cursor-pointer bg-white border border-saffron-200 rounded-xl shadow hover:shadow-lg transition-transform duration-200 hover:-translate-y-1"
          >
            <img
              src={rec.image}
              alt={rec.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-saffron-800 mb-2">{rec.title}</h3>
              <p className="text-sm text-gray-600">Discover more about the beauty of {rec.title} crafts in India.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF3E0] via-white to-[#E6F4EA]">
      <Navigation />
      {subCat.placardMessage && (
      <div className="absolute top-[90px] right-4 z-50 w-[180px] sm:w-[200px] md:w-[220px]">
        <div className="relative">
          <img
            src="/images/boy-placard.png"
            alt="Craft Message"
            className="w-full object-contain"
          />
          <div className="absolute top-[9%] left-[14%] w-[72%] h-[34%] flex items-center justify-center text-[10px] sm:text-xs md:text-sm text-black font-semibold text-center px-1 leading-tight break-words">
            {subCat.placardMessage}
          </div>
        </div>
      </div>
    )}


      <section className="container mx-auto px-4 py-12">
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="mb-6 border-saffron-300 text-saffron-600 hover:bg-saffron-100 hover:text-saffron-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <h1 className="text-5xl font-extrabold text-saffron-700 mb-6 text-center drop-shadow-sm">
          {subCat.title}
        </h1>
        
        {/* Image Carousel */}
        <div className="relative flex justify-center items-center max-w-6xl mx-auto h-[350px] mb-6 overflow-hidden px-4">
          {images.length > 1 && (
            <div className="absolute left-0 h-full flex items-center pl-2">
              <img
                src={images[(currentImageIndex - 1 + images.length) % images.length]}
                className="h-72 w-56 object-cover rounded-xl opacity-30 blur-sm scale-95 transition-all"
                alt="Previous Preview"
              />
            </div>
          )}

          <img
            src={images[currentImageIndex]}
            alt={`Craft image ${currentImageIndex + 1}`}
            className="h-full max-w-[500px] object-contain rounded-2xl shadow-lg z-10"
          />

          {images.length > 1 && (
            <div className="absolute right-0 h-full flex items-center pr-2">
              <img
                src={images[(currentImageIndex + 1) % images.length]}
                className="h-72 w-56 object-cover rounded-xl opacity-30 blur-sm scale-95 transition-all"
                alt="Next Preview"
              />
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>

        {/* Tabs */}
        <div className="w-full flex justify-center mb-10">
          <div className="flex gap-4 border-b border-saffron-400">
            {['history', 'process', 'cluster', 'care'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`py-2 px-4 font-semibold ${
                  activeTab === tab ? 'text-saffron-700 border-b-2 border-saffron-600' : 'text-gray-600'
                }`}
              >
                {tab === 'history' && 'History'}
                {tab === 'process' && 'Process'}
                {tab === 'cluster' && 'Cluster'}
                {tab === 'care' && 'Maintenance & Care'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 text-left text-gray-800 space-y-6">
          {activeTab === 'history' && (
            <div>
              <h2 className="text-xl font-semibold text-saffron-700 mb-2">
                History & Origin <Speaker text={subCat.history} />
              </h2>
              <p className="text-justify leading-relaxed text-gray-700">{subCat.history}</p>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold text-saffron-700 mb-4">Process:</h1>
              {subCat.process.map((step, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-warmbrown-800">{step.title}</h3>
                    <Speaker text={`${step.title}. ${step.description}`} />
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'cluster' && (
            <div>
              <h2 className="text-xl font-semibold text-saffron-700 mb-2">Craft Cluster Location</h2>
              <iframe
                title="Google Map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(subCat.clusterLocation || '')}&output=embed`}
                className="w-full h-80 rounded-lg border"
                loading="lazy"
              ></iframe>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-800">
                {subCat.clusterDetails.district && (
                  <div>
                    <h4 className="font-semibold text-gray-600">District / State</h4>
                    <p>{subCat.clusterDetails.district}</p>
                  </div>
                )}
                {subCat.clusterDetails.population && (
                  <div>
                    <h4 className="font-semibold text-gray-600">Population</h4>
                    <p>{subCat.clusterDetails.population}</p>
                  </div>
                )}
                {subCat.clusterDetails.language && (
                  <div>
                    <h4 className="font-semibold text-gray-600">Language</h4>
                    <p>{subCat.clusterDetails.language}</p>
                  </div>
                )}
                {subCat.clusterDetails.bestTime && (
                  <div>
                    <h4 className="font-semibold text-gray-600">Best Time to Visit</h4>
                    <p>{subCat.clusterDetails.bestTime}</p>
                  </div>
                )}
                {subCat.clusterDetails.stay && (
                  <div>
                    <h4 className="font-semibold text-gray-600">Stay At</h4>
                    <p>{subCat.clusterDetails.stay}</p>
                  </div>
                )}
                {subCat.clusterDetails.howToReach && (
                  <div>
                    <h4 className="font-semibold text-gray-600">How to Reach</h4>
                    <p>{subCat.clusterDetails.howToReach}</p>
                  </div>
                )}
                {subCat.clusterDetails.localTravel && (
                  <div>
                    <h4 className="font-semibold text-gray-600">Local Travel</h4>
                    <p>{subCat.clusterDetails.localTravel}</p>
                  </div>
                )}
                {subCat.clusterDetails.mustEat && (
                  <div>
                    <h4 className="font-semibold text-gray-600">Must Eat</h4>
                    <p>{subCat.clusterDetails.mustEat}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'care' && (
  <div className="space-y-10">
    {/* Title */}
    <h2 className="text-3xl font-bold text-saffron-700 flex items-center gap-2">
      🛠️ Maintenance & Care
    </h2>

    {/* Importance */}
    <div className="bg-saffron-50 border-l-4 border-saffron-400 shadow-sm p-4 rounded-lg text-gray-800 text-base">
      <p>{subCat.care?.importance || "Information not available."}</p>
    </div>

    {/* Do's and Don'ts */}
    {(subCat.care?.dos?.length || subCat.care?.donts?.length) && (
      <div>
        <h3 className="text-2xl font-semibold text-saffron-700 mb-4">🧽 Do's & Don’ts</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* DO */}
          <div className="bg-green-50 border border-green-200 p-4 rounded-xl shadow-sm">
            <h4 className="text-green-700 font-semibold text-lg mb-2">✅ DO</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {subCat.care.dos.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          {/* DON'T */}
          <div className="bg-red-50 border border-red-200 p-4 rounded-xl shadow-sm">
            <h4 className="text-red-600 font-semibold text-lg mb-2">❌ DON'T</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {subCat.care.donts.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )}

    {/* Endangered Info */}
    {subCat.care?.endangered && (
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-yellow-800 mb-2">⚠️ Why It’s Endangered</h3>
        <p className="text-gray-800">{subCat.care.endangered}</p>
      </div>
    )}

    {/* Special Features */}
    {subCat.care?.special && (
      <div>
        <h3 className="text-xl font-semibold text-indigo-700 mb-2">✨ What Makes It Special</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800 bg-indigo-50 border border-indigo-100 p-4 rounded-lg shadow-sm">
          {subCat.care.special.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    )}
    {/* Heartfelt Message */}
    {subCat.care?.message && (
      <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mt-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-pink-700 mb-2">💖 Why Your Interest Keeps It Alive</h3>
        <p className="text-gray-800 whitespace-pre-line">{subCat.care.message}</p>
      </div>
    )}
    {/* Note */}
    {subCat.care?.note && (
      <div className="bg-gray-100 border-l-4 border-gray-400 p-4 mt-6 rounded text-gray-600 italic shadow-sm">
        📝 <strong>Note:</strong> {subCat.care.note}
      </div>
    )}
  </div>
)}


        </div>
      </section>
      {/* Personalized Recommendations */}
      {renderRecommendations()}
      <Footer />
    </div>
  );
};

export default SubCategoryDetail;
