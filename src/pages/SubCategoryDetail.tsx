import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { craftsData, CraftData, SubCategory } from '@/data/craftsData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SubCategoryDetail = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  const navigate = useNavigate();

  const [craft, setCraft] = useState<CraftData | null>(null);
  const [subCat, setSubCat] = useState<SubCategory | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'history' | 'process' | 'cluster'>('history');

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

  const clusterDetails = subCat.clusterDetails || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF3E0] via-white to-[#E6F4EA]">
      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="mb-6 border-saffron-300 text-saffron-600 hover:bg-saffron-50"
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

        {/* Tabs Centered */}
        <div className="w-full flex justify-center mb-10">
          <div className="flex gap-4 border-b border-saffron-400">
            <button
              onClick={() => setActiveTab('history')}
              className={`py-2 px-4 font-semibold ${
                activeTab === 'history'
                  ? 'text-saffron-700 border-b-2 border-saffron-600'
                  : 'text-gray-600'
              }`}
            >
              History
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`py-2 px-4 font-semibold ${
                activeTab === 'process'
                  ? 'text-saffron-700 border-b-2 border-saffron-600'
                  : 'text-gray-600'
              }`}
            >
              Process
            </button>
            <button
              onClick={() => setActiveTab('cluster')}
              className={`py-2 px-4 font-semibold ${
                activeTab === 'cluster'
                  ? 'text-saffron-700 border-b-2 border-saffron-600'
                  : 'text-gray-600'
              }`}
            >
              Cluster
            </button>
          </div>
        </div>

        {/* Content Left-Aligned */}
        <div className="max-w-5xl mx-auto px-4 text-left text-gray-800 space-y-6">
          {activeTab === 'history' && (
            <div>
              <h2 className="text-xl font-semibold text-saffron-700 mb-2">History & Origin</h2>
              <p>{subCat.history}</p>
            </div>
          )}
         {activeTab === 'process' && (
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-saffron-700 mb-4">Process:</h1>
  {subCat.process.map((step, i) => (
    <div key={i}>
      <h3 className="text-lg font-semibold text-warmbrown-800">{step.title}</h3>
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
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  subCat.clusterLocation || ''
                )}&output=embed`}
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubCategoryDetail;