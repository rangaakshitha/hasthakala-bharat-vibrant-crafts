export interface SubCategory {
  image: string;
  title: string;
  description: string;
  history: string;
  materials: string[];
  process: string[];
  culturalValue: string;
}
export interface CraftData {
  id: string;
  name: string;
  image: string;
  description: string;
  states: string[];
  icon: string;
  subcategories: SubCategory[];
}

export const craftsData: Record<string, CraftData> = {
  pottery: {
    id: "pottery",
    name: "Clay & Pottery",
    image: "https://img.freepik.com/premium-photo/hands-woman-working-with-clay-pottery-wheel-workshop-making-vase_508626-230.jpg",
    states: ["Rajasthan", "Gujarat", "West Bengal", "Uttar Pradesh", "Haryana", "Punjab", "Tamil Nadu"],
    icon: "🏺",
    description: 'Artisanal pottery crafted from natural clay, showcasing traditional shapes and earthy aesthetics.',
    subcategories: [
      {
        image: 'https://media.istockphoto.com/id/1135361606/photo/famous-terracotta-handicrafts-of-bishnupur-on-display-for-sale.jpg?s=170667a&w=0&k=20&c=zsfcu-upT-ctMQvUMVA3yk0pQuNyzTsxesHkNuIsXNI=',
        title: 'Terracotta Pottery',
        description: 'Terracotta pottery is handcrafted from natural clay and fired at low temperatures, giving it a warm, rustic appeal. It is widely used for decorative and functional purposes across India.',
        history: 'Blue Pottery originated from Persia and was brought to India during the Mughal era...',
  materials: ['Quartz', 'Multani mitti', 'Katira Gond'],
  process: ['Mix raw materials', 'Shape the pottery', 'Glaze with blue dye', 'Fire in kiln'],
  culturalValue: 'Represents a fusion of Persian and Indian art traditions...'
      },
      {
        image: 'https://c9admin.cottage9.com/uploads/2322/image_2023_01_20T09_08_11_450Z-1024x723.png',
        title: 'Blue Pottery',
        description: 'Blue Pottery is a unique Jaipur craft known for its vibrant cobalt blue glaze and intricate floral designs. Made without clay, it blends Persian art with Indian tradition.',
        history: 'Blue Pottery originated from Persia and was brought to India during the Mughal era...',
  materials: ['Quartz', 'Multani mitti', 'Katira Gond'],
  process: ['Mix raw materials', 'Shape the pottery', 'Glaze with blue dye', 'Fire in kiln'],
  culturalValue: 'Represents a fusion of Persian and Indian art traditions...'
      },
      {
        image: 'https://www.khurjapotteryhub.com/wp-content/uploads/2025/04/flower-vases.webp',
        title: 'Khurja Pottery',
        description: 'Khurja pottery is a centuries-old, GI-protected craft from Uttar Pradesh, known for its cream-background ceramics hand-painted with vivid blue, brown, and floral patterns. It combines local clay with quartz and feldspar to create durable and decorative kitchenware and decor.',
        history: 'Blue Pottery originated from Persia and was brought to India during the Mughal era...',
  materials: ['Quartz', 'Multani mitti', 'Katira Gond'],
  process: ['Mix raw materials', 'Shape the pottery', 'Glaze with blue dye', 'Fire in kiln'],
  culturalValue: 'Represents a fusion of Persian and Indian art traditions...'
      },
      {
        image: 'https://www.orangeskies.in/cdn/shop/files/DSC06948.jpg?v=1723744755&width=1946',
        title: 'Black Pottery',
        description: 'Black pottery is a traditional Indian craft known for its striking dark finish, achieved by firing clay in a smoky, low-oxygen environment. Styles like Nizamabad’s silver-etched designs and Manipur’s Longpi stoneware reflect deep cultural and tribal heritage.',
        history: 'Blue Pottery originated from Persia and was brought to India during the Mughal era...',
  materials: ['Quartz', 'Multani mitti', 'Katira Gond'],
  process: ['Mix raw materials', 'Shape the pottery', 'Glaze with blue dye', 'Fire in kiln'],
  culturalValue: 'Represents a fusion of Persian and Indian art traditions...'
      },
    ]
  },
  woodcraft: {
    id: "woodcraft",
    name: "Woodcraft",
    image: "https://th.bing.com/th/id/R.ae9de228913de6eaa5d047df1119779e?rik=97cu25mCL7pM5A&riu=http%3a%2f%2fgogalini.com%2fimages%2fprofile_images%2fp107%2fwoodcraft-voskakis_p107_55d849736d0b7.jpg&ehk=JOOo4MIE6ATom7vzDvhOZRD%2bA8hN8UAzEGjUOFvOgtY%3d&risl=&pid=ImgRaw&r=0",
    states: ["Kashmir", "Rajasthan", "Karnataka", "Kerala", "Uttar Pradesh", "Gujarat", "Assam"],
    icon: "🪵",
    description: 'Intricately carved wooden artifacts made by skilled artisans, blending utility with heritage.',
    subcategories: [
      {
        image: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6765a320ce29c0001dcd0e8c.jpg',
        title: 'Saharanpur wood carving',
        description: 'Saharanpur wood carving, rooted in Mughal-era craft traditions, is renowned for intricate fret (‘jali’) work, vine-leaf motifs, and brass inlay on fine woods like sheesham and teak. Artisans handcraft furniture, décor, and religious pieces earning the city its status as India’s ‘wood-carving capital.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      },
      {
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/walnut-wood-carvings-craft-hero?qlt=82&ts=1726641491579',
        title: 'Kashmiri walnut wood carving',
        description: 'Kashmiri walnut wood carving is a fine art form crafted from the region’s native walnut trees. Known for its deep relief work and delicate detailing, it decorates furniture, jewelry boxes, and wall panels with floral and paisley patterns.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      },
      {
        image: 'https://www.gitagged.com/wp-content/uploads/2017/12/Bastar-Art-Online-GI-TAGGED-1.jpg',
        title: 'Bastar wooden craft ',
        description: 'Bastar wooden craft from Chhattisgarh is a GI‑protected tribal art form dating back to the 10th century, carved by hand from local woods like teak, shisham, sal, and kikar. It vividly illustrates tribal mythology and everyday life—dancing figures, ritual pillars, masks, furniture—through deep relief motifs and raw, rustic finishes.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ten_Playing_Cards_%28Ganjifa%29_LACMA_M.2001.210.4.1-.10.jpg',
        title: 'Ganjifa wooden craft',
        description: 'Ganjifa is a historic hand‑painted wooden card game originating in Persia and flourishing in regions like Sawantwadi (Maharashtra) and Mysore (Karnataka). These circular cards feature vivid colours and mythological or courtly scenes, with sets like Dashavatara and Rashi reflecting local iconography.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      },
      {
        image: 'https://lh3.googleusercontent.com/ci/AL18g_S8HZ7pumB5AvYFT0AzuRRkJFLE9Y1lgOWIFP665UKfZqlS-SCsIE60NAkskHI5A-UQWW_ulorr',
        title: 'Sandook boxes',
        description: 'Sandook boxes are traditional Rajasthani wooden chests, richly decorated with carvings, meenakari or brass fittings, and vibrant motifs. Used historically to store valuables, clothing, or linens, they blend functionality with exquisite artistry and often appear in bridal trousseaus or royal interiors',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      },
    ]
  },
  metalcraft: {
    id: "metalcraft",
    name: "Metal Craft",
    image: "https://spiritofindia.co.in/wp-content/uploads/2022/01/History-of-Bidri-Craft-1536x1025.jpg",
    states: ["Rajasthan", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "West Bengal", "Maharashtra", "Orissa"],
    icon: "⚱",
    description: 'Elegant metal crafts forged using age-old techniques, often used in decor and rituals.',
    subcategories: [
      {
        image: 'https://cdn.shopify.com/s/files/1/0503/5442/1920/files/BRONZE_20.png?v=1723022454',
        title: 'Thatheras metal craft',
        description: 'Thatheras’ metal craft is an age-old Punjabi tradition of hand-beating brass, copper, and kansa into utensils and decorative ware. Honoured by UNESCO as an Intangible Cultural Heritage since 2014, each piece is forged, shaped, and polished using ancestral techniques passed down through generations.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      },
      {
        image: 'https://lsmedia.linker-cdn.net/282256/2021/7101757.jpeg?width=1200&height=1125',
        title: 'Dhokra',
        description: 'Dhokra is a 4,000+ year old tribal metalworking tradition, using the ancient lost-wax casting technique to create enchanting brass or bronze figurines, jewelry, and utility items. Celebrated for its primitive simplicity and rustic charm, motifs often depict animals, tribal deities, or daily life scenes.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bidriware_hookah_base_1750-1800.jpg/640px-Bidriware_hookah_base_1750-1800.jpg',
        title: 'Bidriware',
        description: 'Bidriware is a 14th-century metal craft from Bidar, Karnataka, featuring a blackened brass and zinc base inlaid with gleaming silver or occasionally gold. Each piece showcases exquisite floral, geometric, and figurative motifs, created through freehand engraving and a unique soil-based oxidation process.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      },
      {
        image: 'https://ptal.in/cdn/shop/files/69_b3513984-9016-48a6-8235-1a0ac40204ef.png?v=1719999994',
        title: 'Kansa Utensils',
        description: 'Kansa utensils, crafted from a traditional bronze alloy of copper and tin, have been used in Indian households for centuries. Revered in Ayurveda for their antimicrobial and alkalizing properties, they combine health benefits with timeless elegance.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      },
      {
        image: 'https://www.zineart.in/images/trk3.webp',
        title: 'Tarakasi',
        description: 'Tarakasi is an intricate silver filigree art from Cuttack, Odisha, where artisans twist fine silver wires into lace-like designs for jewelry, idols, and decorative pieces. With over 500 years of tradition, it reflects refined craftsmanship and cultural elegance.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      },
      {
        image: 'https://i.pinimg.com/474x/01/9c/b7/019cb7f1060568586c0a0ae5ebd92b92.jpg',
        title: 'Brass ware',
        description: 'Brass ware, traditionally known as ‘Pital’ ware, blends copper and zinc into functional and decorative utensils—like plates, bowls, lamps, and temple items—handcrafted in hubs like Mirzapur (UP) and Rewari (Haryana). Besides their enduring shine and durability, these vessels are prized in Ayurveda for their antimicrobial properties and ability to enhance food flavor.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      }
    ]
  },
  bamboo: {
    id: "bamboo",
    name: "Bamboo & Cane",
    image: "https://cdn.pixelbin.io/v2/patient-paper-41f385/original/Craft_Images/Bamboo_Craft/Bamboo_Craft_1(1).jpg",
    states: ["Assam", "West Bengal", "Tripura", "Karnataka", "Kerala", "Manipur", "Meghalaya"],
    icon: "🎋",
    description: 'Eco-friendly crafts woven from bamboo and cane, combining sustainability with artistry.',
    subcategories: [
      {
        image: '/images/blue-pottery.jpg',
        title: 'Blue Pottery',
        description: 'Delicate and vibrant, blue pottery is an iconic craft of Jaipur.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      },
      {
        image: '/images/terracotta.jpg',
        title: 'Terracotta',
        description: 'Traditional terracotta pottery known for its earthy charm and utility.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      }
    ]
  },
  
  stone: {
    id: "Stone",
    name: "Stone Craft",
    image: "https://static.thcdn.com/productimg/960/960/13231897-1064924144952856.jpg",
    states: ["Kashmir", "Rajasthan", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "Kerala", "West Bengal"],
    icon: "📜",
    description: 'Detailed sculptures and decor carved from stone, reflecting architectural and spiritual traditions.',
    subcategories: [
      {
        image: '/images/blue-pottery.jpg',
        title: 'Blue Pottery',
        description: 'Delicate and vibrant, blue pottery is an iconic craft of Jaipur.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      },
      {
        image: '/images/terracotta.jpg',
        title: 'Terracotta',
        description: 'Traditional terracotta pottery known for its earthy charm and utility.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      }
    ]
  },
  leather: {
    id: "Leather",
    name: "Leather Craft",
    image: "https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/12/Camel-leather-handicrafts.jpg?ssl=1",
    states: ["Kashmir", "Rajasthan", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "Kerala", "West Bengal"],
    icon: "📜",
    description: 'Durable and artistic leather goods, from accessories to decorative items.',
    subcategories: [
      {
        image: '/images/blue-pottery.jpg',
        title: 'Blue Pottery',
        description: 'Delicate and vibrant, blue pottery is an iconic craft of Jaipur.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      },
      {
        image: '/images/terracotta.jpg',
        title: 'Terracotta',
        description: 'Traditional terracotta pottery known for its earthy charm and utility.',
        history: "",
        materials: [],
        process: [],
        culturalValue: ""
      }
    ]
  }
  
};
