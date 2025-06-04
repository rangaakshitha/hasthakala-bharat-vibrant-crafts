
export interface CraftData {
  id: string;
  name: string;
  description: string;
  image: string;
  artisanImage: string;
  states: string[];
  history: string;
  materials: string[];
  process: string[];
  culturalValue: string;
  icon: string;
}

export const craftsData: Record<string, CraftData> = {
  pottery: {
    id: "pottery",
    name: "Clay & Pottery",
    description: "Ancient art of shaping clay into beautiful vessels and sculptures",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    artisanImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
    states: ["Rajasthan", "Gujarat", "West Bengal", "Uttar Pradesh", "Haryana", "Punjab", "Tamil Nadu"],
    history: "Pottery in India dates back to the Indus Valley Civilization (3300-1300 BCE). The ancient art form has been passed down through generations, with each region developing its unique style and techniques. From the blue pottery of Jaipur to the terracotta work of Bengal, Indian pottery reflects the diverse cultural heritage of the subcontinent.",
    materials: [
      "Clay (various types depending on region)",
      "Water for molding",
      "Potter's wheel",
      "Natural pigments and glazes",
      "Kiln for firing",
      "Brushes for painting",
      "Traditional tools like ribs and wires"
    ],
    process: [
      "Selection and preparation of clay",
      "Kneading and removing air bubbles",
      "Shaping on the potter's wheel or by hand",
      "First drying in shade",
      "First firing (bisque firing)",
      "Glazing and painting with natural colors",
      "Second firing for final finish",
      "Quality checking and finishing touches"
    ],
    culturalValue: "Pottery holds deep spiritual significance in Hindu traditions, with clay pots used in religious ceremonies and festivals. The craft represents the cycle of life - earth to earth. It provides livelihood to thousands of artisan families and preserves ancient techniques that connect us to our ancestors.",
    icon: "🏺"
  },
  woodcraft: {
    id: "woodcraft",
    name: "Woodcraft",
    description: "Intricate carving and crafting of wood into beautiful art pieces",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    artisanImage: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop",
    states: ["Kashmir", "Rajasthan", "Karnataka", "Kerala", "Uttar Pradesh", "Gujarat", "Assam"],
    history: "Wood carving in India has a history spanning over 3000 years. From the intricate work on temple architecture to decorative household items, woodcraft has been an integral part of Indian culture. The Sandalwood carvings of Karnataka and Walnut wood work of Kashmir are world-renowned for their exquisite craftsmanship.",
    materials: [
      "Various woods (Sandalwood, Rosewood, Teak, Walnut)",
      "Carving tools and chisels",
      "Sandpaper of different grits",
      "Natural wood stains and polishes",
      "Measuring tools and templates",
      "Hand saws and power tools",
      "Protective gear for artisans"
    ],
    process: [
      "Selection of appropriate wood type",
      "Seasoning and drying of wood",
      "Design sketching and template creation",
      "Rough cutting and shaping",
      "Detailed carving with fine tools",
      "Sanding and smoothing",
      "Application of stains and finishes",
      "Final polishing and quality inspection"
    ],
    culturalValue: "Woodcraft is deeply embedded in Indian architecture and religious practices. Temple carvings tell stories of gods and goddesses, while household items like furniture and decorative pieces reflect regional artistic traditions. The craft supports rural communities and keeps alive the ancient techniques of wood working.",
    icon: "🪵"
  },
  metalcraft: {
    id: "metalcraft",
    name: "Metal Craft",
    description: "Traditional metalworking creating utensils, jewelry, and decorative items",
    image: "https://images.unsplash.com/photo-1608149962412-3cff4af0b281?w=800&h=600&fit=crop",
    artisanImage: "https://images.unsplash.com/photo-1551079711-2986943402cb?w=600&h=400&fit=crop",
    states: ["Rajasthan", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "West Bengal", "Maharashtra", "Orissa"],
    history: "Metal craft in India dates back to the Bronze Age with the famous Dancing Girl of Harappa being a prime example. The tradition continued through various dynasties, with each region specializing in different metals and techniques. Bidriware from Karnataka and brass work from Rajasthan showcase the diversity and skill of Indian metal artisans.",
    materials: [
      "Various metals (Brass, Bronze, Copper, Silver, Iron)",
      "Hammers and anvils",
      "Furnace and bellows",
      "Acids for etching",
      "Wire brushes and files",
      "Measuring and marking tools",
      "Polishing compounds and cloths"
    ],
    process: [
      "Metal selection and preparation",
      "Heating and shaping on anvil",
      "Hammering and forming techniques",
      "Detailed engraving and etching",
      "Inlay work with other metals",
      "Polishing and finishing",
      "Quality testing and inspection",
      "Final cleaning and packaging"
    ],
    culturalValue: "Metal craft holds immense religious and cultural significance in India. From temple bells to ceremonial vessels, metal items are integral to Hindu rituals. The craft represents prosperity and durability, with many families passing down metal heirlooms through generations. It provides livelihood to skilled artisans and preserves metallurgical knowledge.",
    icon: "⚱️"
  },
  bamboo: {
    id: "bamboo",
    name: "Bamboo Craft",
    description: "Eco-friendly craft using bamboo to create furniture and decorative items",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
    artisanImage: "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=600&h=400&fit=crop",
    states: ["Assam", "West Bengal", "Tripura", "Karnataka", "Kerala", "Manipur", "Meghalaya"],
    history: "Bamboo craft has been practiced in India for over 4000 years, especially in the northeastern states where bamboo grows abundantly. The craft has deep roots in tribal communities who have used bamboo for everything from homes to musical instruments. Today, bamboo craft is recognized globally for its eco-friendly nature and artistic value.",
    materials: [
      "Various bamboo species",
      "Sharp cutting tools and knives",
      "Measuring scales and rulers",
      "Natural dyes and colors",
      "Binding materials (cane, rope)",
      "Sandpaper for smoothing",
      "Protective coatings and varnish"
    ],
    process: [
      "Selection of mature bamboo",
      "Cutting and seasoning",
      "Splitting into required sizes",
      "Shaping and bending techniques",
      "Weaving and joining methods",
      "Smoothing and finishing",
      "Application of natural colors",
      "Final inspection and quality check"
    ],
    culturalValue: "Bamboo craft represents sustainability and harmony with nature in Indian philosophy. It's considered auspicious in many cultures and is used in religious ceremonies. The craft supports tribal communities and promotes eco-friendly living. Bamboo items symbolize flexibility, strength, and growth in Indian culture.",
    icon: "🎋"
  },
  paper: {
    id: "paper",
    name: "Paper Craft",
    description: "Traditional paper-making and crafting techniques creating beautiful art",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
    artisanImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
    states: ["Kashmir", "Rajasthan", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "Kerala", "West Bengal"],
    history: "Paper craft in India has ancient origins with the art of paper-making arriving through trade routes. Kashmir's papier-mâché work and Rajasthan's handmade paper industry have made significant contributions to this craft. The tradition includes everything from religious manuscripts to decorative items and toys.",
    materials: [
      "Recycled paper and pulp",
      "Natural fibers (cotton, jute)",
      "Water and binding agents",
      "Natural dyes and pigments",
      "Brushes and rollers",
      "Screens and molds",
      "Cutting and folding tools"
    ],
    process: [
      "Collection and sorting of raw materials",
      "Pulp preparation and cleaning",
      "Sheet formation using molds",
      "Pressing and drying",
      "Surface treatment and smoothing",
      "Decoration and painting",
      "Cutting and shaping",
      "Final finishing and packaging"
    ],
    culturalValue: "Paper craft in India is closely linked to knowledge preservation and artistic expression. Ancient manuscripts, religious texts, and folk art have been created on handmade paper. The craft promotes recycling and environmental consciousness while providing livelihood to artisan communities. It represents the fusion of utility and beauty.",
    icon: "📜"
  }
};
