import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { craftsData, CraftData, SubCategory } from '@/data/craftsData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SubCategoryDetail = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  const navigate = useNavigate();

  const [craft, setCraft] = useState<CraftData | null>(null);
  const [subCat, setSubCat] = useState<SubCategory | null>(null);

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
  }, [category, subcategory, navigate]);

  if (!craft || !subCat) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-emerald-50">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={subCat.image}
              alt={subCat.title}
              className="w-full h-96 object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-saffron-700 mb-4">{subCat.title}</h1>
            <p className="text-lg text-gray-800 leading-relaxed">{subCat.description}</p>
            <div className="mt-6 text-gray-600 text-sm">
              <strong>Category:</strong> {craft.name}
              <br />
              <strong>Regions:</strong> {craft.states.join(', ')}
            </div>
          </div>
        </div>
        
      </section>

      <Footer />
    </div>
  );
};

export default SubCategoryDetail;
