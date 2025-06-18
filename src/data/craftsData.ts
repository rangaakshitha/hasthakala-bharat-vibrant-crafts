export interface SubCategory {
  clusterDetails: {
    district: string;
    population: string;
    language: string;
    bestTime: string;
    stay: string;
    howToReach: string;
    localTravel: string;
    mustEat: string;
  };
  clusterLocation: string;
  image: string;
  images: string[];
  title: string;
  description: string;
  history: string;
  materials: string[];
  process: {
  title: string;
  description: string;
}[];

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
        images: [
          "https://webneel.com/daily/sites/default/files/images/daily/05-2020/1-terracotta-sculpture-god-tamilnadu-karuppu-swamy.preview.jpg",
          "https://webneel.com/daily/sites/default/files/images/daily/05-2020/2-terracotta-sculpture-india-mahishasur-laxmi-saraswati.preview.jpg",
          "https://webneel.com/daily/sites/default/files/images/daily/05-2020/9-indian-terracotta-sculpture-couple-shweta-kevale-naik.preview.jpeg",
          "https://webneel.com/daily/sites/default/files/images/daily/05-2020/11-terracotta-sculpture-horse-shop.preview.jpg",
          "https://webneel.com/daily/sites/default/files/images/daily/05-2020/12-terracotta-sculpture-horse-kondagaon-chatisgar.jpg",
          "https://webneel.com/daily/sites/default/files/images/daily/05-2020/15-indian-terracotta-sculpture-gupta-head-god.preview.jpg",
          "https://webneel.com/daily/sites/default/files/images/daily/05-2020/16-terracotta-sculpture-horse.preview.jpg"
        ],
        description: 'Terracotta pottery is handcrafted from natural clay and fired at low temperatures, giving it a warm, rustic appeal. It is widely used for decorative and functional purposes across India.',
        history: 'Blue Pottery originated from Persia and was brought to India during the Mughal era...',
        materials: ['Quartz', 'Multani mitti', 'Katira Gond'],
        process: [
  {
    title: 'Mix raw materials',
    description: 'Combine clay with water and natural minerals to achieve the desired consistency and texture.'
  },
  {
    title: 'Shape the pottery',
    description: 'Use a wheel or hand techniques to mold the clay into various forms such as pots or vases.'
  },
  {
    title: 'Glaze with blue dye',
    description: 'Apply a traditional blue dye glaze made from natural sources for both aesthetic and protection.'
  },
  {
    title: 'Fire in kiln',
    description: 'Place the items in a kiln and fire at high temperatures to harden and finish the product.'
  }
],
        culturalValue: 'Represents a fusion of Persian and Indian art traditions...',
        clusterLocation: "Molela, Rajsamand District, Rajasthan",
        clusterDetails: {
            district: 'Molela, Rajsamand District, Rajasthan',
            population: 'Molela is a small artisan village with approximately 2,000–3,000 people, many involved in terracotta craft',
            language: 'Hindi, Rajasthani',
            bestTime: 'October to March (cool and comfortable climate)',
            stay: 'Udaipur (around 50 km from Molela)',
            howToReach: 'Nearest airport and railway station: Udaipur; from there, Molela can be reached by road in about 1.5 hours',
            localTravel: 'Taxis, buses, and private vehicles from Udaipur to Molela',
            mustEat: 'Dal Baati Churma, Gatte ki Sabzi, Ghevar',
        }
      },
      {
        image: 'https://c9admin.cottage9.com/uploads/2322/image_2023_01_20T09_08_11_450Z-1024x723.png',
        title: 'Blue Pottery',
        description: 'Blue Pottery is a unique Jaipur craft known for its vibrant cobalt blue glaze and intricate floral designs. Made without clay, it blends Persian art with Indian tradition.',
        history: "The history of the art of pottery is as old as the history of mankind. Glass was discovered in the ancient civilizations of Egypt, Syria, Iran and Indus Valley. It was further discovered that when alkaline soil was mixed with copper and heated it gave a turquoise blue color. From Mohenjodaro and Harappan era right till the Gupta period glazed utensils, necklaces, beads and tiles were in vogue. This art greatly flourished during the Buddhist period. The Central Asian and Middle Eastern glazing techniques came to India with the several successive Islamic invasions while the Chinese porcelain continued to be imported to the Indian courts (both pre-Mughal and Mughal). The Baburnama, commissioned in 1590 in the reign of Akbar mentions that “Babur and his friends were regularly served kebabs and pilaus from dishes and plates that are sometimes golden, sometimes green and sometimes blue and white.- The miniatures paintings of the era also depict the same. Researches of the Archaeological Survey of India mentions the fact that the glazed tiles first appear in Delhi in the Tughlaq monuments dated between 1321 AD and 1414 AD. The designs of which are inspired from the Turkish patterns. Excavations at the Purana Qila have revealed glazed ware of the Sultanate period from 1206 to 1526. The pottery introduced to India in Delhi and Multan is believed to have come from Bokhara. Some of the earliest tile work can also be seen in Arab-ki-Sarai in Delhi near Humayuns tomb. The other centres of glazing and painting tiles opened up at Khurja, Agra, Meerut, Rampur, Bulandshahar due to the mushrooming of glazing kilns. When the city of Jaipur was founded in 1727 by Sawai Jai Singh I, craftsmen from all over the country were invited to come and make their home in this new city. Royal patronage, lucrative offers and the attraction of living in a beautiful city led many artisans and craftsmen to come and settle in Jaipur. By the beginning of the 19th century the city was well established as a thriving art centre. In keeping with the traditions of his forefathers, Sawai Ram Singh II (1835-1880) set up a school of art and continued to encourage artists and craftsmen. Blue Pottery took an interesting route in finding its home in Jaipur. Ram Singh II attended a kite flying session and watched as his kite masters were engaged in battle with two brothers from Achnera (near Agra). When the ruler saw that the brothers managed to bring down the royal kites almost every time, he was intrigued. He asked the brothers their secret. They told him that they were potters by profession and had coated their strings with the same blue green glass that they used for their pots. Sawai Ram Singh II was impressed so he invited the brothers to stay in Jaipur and teach this unique form of glazed pottery at his new art school. On the Verge of Extinction Blue Pottery had enormous potential and should have flourished, but over the years master potters refused to share their trade secrets with their fellow craftsmen so there was an eventual lowering of standards and a gradual dying out of the craft. Over the years the craft was kept alive by her Highness Gayatri Devi who widely promoted Blue Pottery. The craft received a much needed boost in the 1960s as internationally renowned artist; Kripal Singh Shekhawat entered the field of Blue Pottery and raised the bar. His presence brought a new excitement to the craft as his designs began selling very well.",
        materials: ['Quartz', 'Multani mitti', 'Katira Gond'],
        process: [
  {
    title: 'Preparation of the Dough',
    description: 'The dough used for molding is prepared by mixing five ingredients. These are quartz stone powder (40 kilograms) which is the major item, powdered glass (5 kilograms), Katira gond powder (1 kilogram) and a mixture of multani mitti and saaji (1kilogram). These are put on the hard floor and are thoroughly mixed till the mixture becomes homogeneous. After that, water (25 liters) is mixed into it till a smooth non-sticky dough is made. The dough is rested for 8 – 10 hours.'
  },
  {
    title: 'Pressing it into Molds',
    description: 'A small amount of prepared dough is taken and then rolled by hand on the base stone. It is cut in equal parts (using a) according to the item being prepared. After this the dough is flattened with the help of a flattening tool till it takes the form of a 4 – 5 millimeter thick ‘Chapatti’ (pancake). The ‘Chapatti’ is carefully put into the mold which is shaken lightly so that the chapatti sets in the mold. After that, a mixture of fine ‘Bajri’ (stones) and ‘Raakh’ (ash made from burnt wood) is put into the mold and is lightly pressed so that the dough takes the exact shape of the mold. The extra dough is cut off with a knife. The mold is then turned upside down on the base stone and removed. The dough made with bajri and raakh, is left to dry for one to two days.'
  },
  {
    title: 'Cleaning',
    description: 'The dried dough is now in the shape of the mold. It is again turned upside down and the raakh and bajri mix is removed from it. During the process of drying, some raakh sticks to the pottery item. It is cleaned with the help of a small broom made from husk.'
  },
  {
    title: 'Shaping Process',
    description: 'Once the pottery item is ready; it is rubbed lightly by hand on the base stone to even out the edges. After doing this, the pot becomes evenly shaped.'
  },
  {
    title: 'Adding Base',
    description:'Except for tiles and wall hangings, most of the pottery items are prepared in two or more parts. After the molded item is ready, a base is added below it. In rounded pots, it is done by putting it on the potter’s wheel. The wheel is set in motion and the pot is fixed at the center of the wheel. A little amount of dough is taken and with a touch of water, the base of the vessel is added. It is again left for drying for one to two days.'
  },
  {
    title: 'Polishing Process',
    description: 'The pot is now ready in form. It is rubbed with ‘Regmaal’ to polish the surface. A little amount of wet dough is taken and applied on the vessel. It is removed with a knife thereby burnishing the vessel. The process is repeated two to three time still the vessel becomes absolutely even. It is then left for drying. After it dries, it is again rubbed with sandpaper.'
  },
  {
    title: 'Coating with Mixture',
    description: 'After this process a solution of quartz powder (10 kilograms), powdered glass (3 kilograms), edible flour (maida) and water is made. The vessel is dipped in this solution and taken out in such a way that it is evenly coated. It is then left to dry.'
  },
  {
    title: 'Designing',
    description: 'A design is made on the dried, coated vessel with a solution of cobalt oxide and edible gum. The initial rings on the vessel (if circular) are made by keeping it on the potter’s wheel and touching the brush tip on the vessel. The later intricate design is then made by brushes of varying thicknesses.'
  },
  {
    title: 'Coloring',
    description: 'Once the design of the vessel is complete; the coloring is done by using oxides of various metals. These oxides are mixed with edible gum and then ground on the stone. The color is carefully filled with a brush. The vessel is left for drying.'
  },
  {
    title: 'Glazing',
    description: 'After this, a coating of glaze is done on the vessel. The mixture of glaze is prepared by mixing the following things in their respective proportions: Powdered glass (21 kilograms), borax orsuhaaga (17.5 kilograms), zinc oxide (1.5 kilograms), potassium nitrate (2.5 kilograms) and Boric acid (7.5 kilograms). This mixture is heated in the kiln till it melts. On cooling, the mixture transforms into small pebbles. It is then ground to a powdered form in the grinding machine. The mixture is mixed with water and maida (used as an adhesive). The solution is then coated on to the vessel.'
  },
  {
    title: 'Firing',
    description: 'Finally, the prepared vessels are heated in the closed kiln fuelled with charcoal for four to five hours at temperatures of 800 to 850 degrees Celsius. Most of the material melts, but 80 per cent of the quartz is left behind, and this maintains the form of the vessel. The kiln is left to cool for three days, avoiding any rapid temperature change which cracks the china very easily. Care is taken that no two vessels touch each other as they may turn black. After cooling, the vessels are taken out and are ready for sale.'
  }
],

        culturalValue: 'Represents a fusion of Persian and Indian art traditions...',
        images: [
          "https://i.pinimg.com/originals/7a/2f/c0/7a2fc0ef123d78ca940b2992db4efa4d.jpg",
          "https://hindikrafts.com/wp-content/uploads/2020/09/1200px-Cobalt_Blue_Pottery_4782042700.jpg",
          "https://i.pinimg.com/originals/87/1e/19/871e191d121dce470345e0f6b111faf0.jpg",
          "https://www.bluerosepottery.com/mm5/graphics/00000001/category_home-decor.jpg",
          "https://live.staticflickr.com/803/40174260754_e2cf257799_b.jpg",
          "https://gaatha.org/wp-content/uploads/usage_2-47-768x445.jpg",
          "https://gaatha.org/wp-content/uploads/usage_4-35-768x445.jpg"
        ],
        clusterLocation: "Jaipur, Rajasthan",
        clusterDetails: {
            district: 'Jaipur, Rajasthan',
            population: 'Jaipur is a major city with over 3 million people; blue pottery is practiced by a niche artisan community within the city',
            language: 'Hindi, Rajasthani',
            bestTime: 'October to March (pleasant weather and peak tourist season)',
            stay: 'Jaipur city (wide range of hotels from budget to heritage palaces)',
            howToReach: 'Well-connected by air (Jaipur International Airport), train, and road from major cities like Delhi, Mumbai, and Ahmedabad',
            localTravel: 'Auto-rickshaws, app-based cabs, local buses, and rental scooters/cars',
            mustEat: 'Dal Baati Churma, Laal Maas, Ghevar, Pyaz Kachori',
        }
      },
      {
        image: 'https://www.khurjapotteryhub.com/wp-content/uploads/2025/04/flower-vases.webp',
        title: 'Khurja Pottery',
        description: 'Khurja pottery is a centuries-old, GI-protected craft from Uttar Pradesh, known for its cream-background ceramics hand-painted with vivid blue, brown, and floral patterns. It combines local clay with quartz and feldspar to create durable and decorative kitchenware and decor.',
        history: 'Blue Pottery originated from Persia and was brought to India during the Mughal era...',
        materials: ['Quartz', 'Multani mitti', 'Katira Gond'],
        process: [
  {
    title: 'Mix raw materials',
    description: 'Combine clay with water and natural minerals to achieve the desired consistency and texture.'
  },
  {
    title: 'Shape the pottery',
    description: 'Use a wheel or hand techniques to mold the clay into various forms such as pots or vases.'
  },
  {
    title: 'Glaze with blue dye',
    description: 'Apply a traditional blue dye glaze made from natural sources for both aesthetic and protection.'
  },
  {
    title: 'Fire in kiln',
    description: 'Place the items in a kiln and fire at high temperatures to harden and finish the product.'
  }
],
        culturalValue: 'Represents a fusion of Persian and Indian art traditions...',
        images: [
          "https://www.hisour.com/wp-content/uploads/2020/09/Khurja-pottery.jpg",
          "https://images.yourstory.com/cs/21/a4a991303fda11edaf0685335aa182ce/Imagekci5-1664800811438.jpg?fm=png&auto=format&blur=500",
          "https://hindikrafts.com/wp-content/uploads/2020/09/Khurja-Pottery.jpg",
          "https://images.indianexpress.com/2022/06/WhatsApp-Image-2022-06-17-at-2.12.43-PM-4.jpeg?w=630",
          "https://imgs.mongabay.com/wp-content/uploads/sites/30/2024/04/11103823/Banner-Khurja-pottery.jpg"
        ],
        clusterLocation: "Khurja, Bulandshahr District, Uttar Pradesh",
        clusterDetails: {
            district: 'Khurja, Bulandshahr District, Uttar Pradesh',
            population: 'Approximately 1.5 lakh (150,000); large artisan community engaged in pottery-making for generations',
            language: 'Hindi, Urdu',
            bestTime: 'October to March (cool weather and active pottery production season)',
            stay: 'Khurja town (basic hotels available) or nearby cities like Bulandshahr or Greater Noida for better accommodations',
            howToReach: 'Nearest major city: Delhi (around 85 km); well-connected by road and train — regular buses and trains run from Delhi to Khurja',
            localTravel: 'Cycle rickshaws, auto-rickshaws, and taxis within the town',
            mustEat: 'Bedmi Puri, Aloo Sabzi, Jalebi, and local sweets from Khurja halwais',
        }
      },
      {
        image: 'https://www.orangeskies.in/cdn/shop/files/DSC06948.jpg?v=1723744755&width=1946',
        title: 'Black Pottery',
        description: 'Black pottery is a traditional Indian craft known for its striking dark finish, achieved by firing clay in a smoky, low-oxygen environment. Styles like Nizamabad’s silver-etched designs and Manipur’s Longpi stoneware reflect deep cultural and tribal heritage.',
        history: 'Blue Pottery originated from Persia and was brought to India during the Mughal era...',
        materials: ['Quartz', 'Multani mitti', 'Katira Gond'],
        process: [
  {
    title: 'Mix raw materials',
    description: 'Combine clay with water and natural minerals to achieve the desired consistency and texture.'
  },
  {
    title: 'Shape the pottery',
    description: 'Use a wheel or hand techniques to mold the clay into various forms such as pots or vases.'
  },
  {
    title: 'Glaze with blue dye',
    description: 'Apply a traditional blue dye glaze made from natural sources for both aesthetic and protection.'
  },
  {
    title: 'Fire in kiln',
    description: 'Place the items in a kiln and fire at high temperatures to harden and finish the product.'
  }
],
        culturalValue: 'Represents a fusion of Persian and Indian art traditions...',
        images: [
          "https://www.civitatis.com/f/colombia/ibague/taller-ceramica-negra-chamba-r32.jpg",
          "https://th.bing.com/th/id/OIP.6S1G4J2uZ2bA-v4kpWGnSAHaE0?rs=1&pid=ImgDetMain",
          "https://editorial01.shutterstock.com/preview-440/13685992h/76a5edb6/Shutterstock_13685992h.jpg",
          "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f9dec877233903.5c8171f9c8e8d.jpg",
          "https://th.bing.com/th/id/R.db2da6c0c7b85d724392beaa42bd2e27?rik=EK9JKMeWUf13Fg&riu=http%3a%2f%2fwww.folkartopedia.com%2fwp-content%2fuploads%2f2021%2f07%2fBLACK-POTTERY-OF-NIZAMABAD-SOURCE-INTACH.png&ehk=QpRBBu%2bHbtCYs33PUOfsgwy5Ul7YvAiEBTyz30M%2fLsY%3d&risl=&pid=ImgRaw&r=0"
        ],
        clusterLocation: "Nizamabad, Uttar Pradesh",
        clusterDetails: {
            district: 'Nizamabad, Uttar Pradesh',
            population: 'Small artisan town with a few thousand residents; black pottery is the main livelihood',
            language: 'Hindi, Bhojpuri',
            bestTime: 'November to February',
            stay: 'Azamgarh (nearest city with hotel options)',
            howToReach: 'Nearest railway station: Azamgarh; nearest airport: Varanasi (about 100 km away); Nizamabad is well-connected by road',
            localTravel: 'Auto-rickshaws and shared vehicles between Azamgarh and Nizamabad',
            mustEat: 'Thekua, Khurma, Poori-Sabzi',
        }
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
        culturalValue: "",
        images: [
          "https://cultureandheritage.org/wp-content/uploads/2021/10/abcd-24.jpg",
          "https://th.bing.com/th/id/R.bf09b8a3488b4f7daca4afeab6c782c1?rik=XPQpRzbXFRfAjQ&riu=http%3a%2f%2fwww.dsource.in%2fsites%2fdefault%2ffiles%2fgallery%2f17635%2f3.jpg&ehk=ywHpZlOcSCoVB3wYE4RSNnd2hzPwDK1lcpmd%2bbL9oxk%3d&risl=&pid=ImgRaw&r=0",
          "https://th.bing.com/th/id/OIP.Y03qKWEH3pq6kYU-JPzoCgAAAA?o=7rm=3&rs=1&pid=ImgDetMain",
          "https://anuna.com/images/eea32189-2115-40eb-832f-8be327e839f0.jpg?1625651947610",
          "https://anuna.com/images/d5135b43-56cc-4bf6-b3ba-700e657395ba.jpg?1625652110227"
        ],
        clusterLocation: "Saharanpur, Uttar Pradesh",
        clusterDetails: {
            district: 'Saharanpur, Uttar Pradesh',
            population: 'Large city with over 7 lakh (700,000) people; thousands involved in the wood carving industry',
            language: 'Hindi, Urdu',
            bestTime: 'October to March',
            stay: 'Saharanpur city (variety of hotels and guesthouses available)',
            howToReach: 'Well-connected by train and road; nearest airport: Dehradun (approx. 90 km away)',
            localTravel: 'Auto-rickshaws, e-rickshaws, and local taxis within the city',
            mustEat: 'Nihari, Korma, Sheermal, and local sweets like Balushahi',
        }
      },
      {
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/walnut-wood-carvings-craft-hero?qlt=82&ts=1726641491579',
        title: 'Kashmiri walnut wood carving',
        description: 'Kashmiri walnut wood carving is a fine art form crafted from the region’s native walnut trees. Known for its deep relief work and delicate detailing, it decorates furniture, jewelry boxes, and wall panels with floral and paisley patterns.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [
          "https://www.sahapedia.org/sites/default/files/styles/share_1200_630/public/2020-05/A-polisher-(roshangaar)-at-work.jpg?itok=B8Yyyipx",
          "https://www.gyawun.com/wp-content/uploads/2021/03/kashmiri-walnut-carving-1.jpg",
          "https://www.kashmirnewsobserver.com/userfiles/image/s_638397762869502521_Walnut_wood.jpg",
          "https://miro.medium.com/v2/resize:fit:750/format:webp/0*tnGkqxevJPQuZUTZ.jpg",
          "https://miro.medium.com/v2/resize:fit:828/format:webp/0*bZYawqgfEc0VmMcs.jpg"
        ],
        clusterLocation: "Srinagar, Jammu & Kashmir",
        clusterDetails: {
            district: 'Srinagar, Jammu & Kashmir',
            population: 'Srinagar is a major city with over 1.2 million people; walnut wood carving is practiced by skilled Kashmiri artisans in specific areas',
            language: 'Kashmiri, Urdu',
            bestTime: 'April to October (spring to autumn; ideal for sightseeing and artisan visits)',
            stay: 'Srinagar (houseboats, hotels, and guesthouses available across all budgets)',
            howToReach: 'Srinagar has a well-connected airport (Sheikh ul-Alam Airport); road connectivity via Jammu; train service is available up to Jammu or Banihal',
            localTravel: 'Auto-rickshaws, taxis, and shikaras on Dal Lake for local travel',
            mustEat: 'Rogan Josh, Yakhni, Dum Aloo, Kahwa, and Noon Chai',
        }
      },
      {
        image: 'https://www.gitagged.com/wp-content/uploads/2017/12/Bastar-Art-Online-GI-TAGGED-1.jpg',
        title: 'Bastar wooden craft ',
        description: 'Bastar wooden craft from Chhattisgarh is a GI‑protected tribal art form dating back to the 10th century, carved by hand from local woods like teak, shisham, sal, and kikar. It vividly illustrates tribal mythology and everyday life—dancing figures, ritual pillars, masks, furniture—through deep relief motifs and raw, rustic finishes.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/3/30/022a-bastar_ladies_all_togather.jpg",
          "https://www.toptourist.com/wp-content/uploads/2015/08/handi-1920x900.jpg",
          "https://static.wixstatic.com/media/901fe1_64cee99eac5b44c89d6168953845925a~mv2.jpg/v1/fill/w_512,h_512,al_c,q_80,enc_auto/901fe1_64cee99eac5b44c89d6168953845925a~mv2.jpg",
          "https://www.gitagged.com/wp-content/uploads/2018/06/Wooden-Crafts-Online-GI-TAGGED-1-500x500.jpg",
          "https://th.bing.com/th/id/R.f94db761302db841ff3371c4ef867e97?rik=Kk0ciM%2fZftP3fw&riu=http%3a%2f%2fbungamati.info%2fimages%2fWood_Crafts%2fjay_sambho%2fimgC.jpg&ehk=iSfVAmbCmYbXED2xwKW7Qvvitrsg9DKMnlaxPn1AdIk%3d&risl=&pid=ImgRaw&r=0",
          "https://i.etsystatic.com/8479346/r/il/248ae4/1257918923/il_1140xN.1257918923_35qt.jpg"
        ],
        clusterLocation: "Bastar, Chhattisgarh",
        clusterDetails: {
            district: 'Bastar, Chhattisgarh',
            population: 'Bastar is a tribal district with over 1.4 million people; wood carving is done by tribal artisans using traditional methods',
            language: 'Hindi, Chhattisgarhi, Gondi',
            bestTime: 'October to February (cool and suitable for visiting tribal regions and craft centers)',
            stay: 'Jagdalpur (main town in Bastar district; offers hotels and basic stays)',
            howToReach: 'Nearest airport: Raipur (approx. 300 km); Jagdalpur has a railway station and is also connected by road from Raipur and Visakhapatnam',
            localTravel: 'Auto-rickshaws, local buses, and hired cabs for rural travel',
            mustEat: 'Chana Samosa, Faraa, Aamat (tribal stew), and Mahua-based sweets',
        }
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ten_Playing_Cards_%28Ganjifa%29_LACMA_M.2001.210.4.1-.10.jpg',
        title: 'Ganjifa wooden craft',
        description: 'Ganjifa is a historic hand‑painted wooden card game originating in Persia and flourishing in regions like Sawantwadi (Maharashtra) and Mysore (Karnataka). These circular cards feature vivid colours and mythological or courtly scenes, with sets like Dashavatara and Rashi reflecting local iconography.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [
          "https://www.memeraki.com/cdn/shop/files/Wooden-Ganjifa-Bookmarks-Elephant-Lion-Camel-Peacock-by-Sawant-Bhonsle-1_1024x.jpg?v=1726240122",
          "https://www.memeraki.com/cdn/shop/products/Dashavtar-Darchitri-Ganjifa-set-of-120-handpainted-Ganjifa-cards-2_1024x.jpg?v=1726240322",
          "https://asiainch.org/wp-content/uploads/2019/09/GANJIFFA.jpg",
          "https://www.memeraki.com/cdn/shop/products/Tic-Tac-Toe-handpainted-in-Ganjifa-art-style-1_1024x.jpg?v=1726240294",
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhcvdmGczTZ8UwZ0go4x5HHOStHC709MD83cQuiphmL9HJLt5t1XV8IrapEa3uVtBVpTSG3TfXOzzGBrLou0jr0O7aG-RziF-Cd4QH6MV7wDNIk7cXz0G6nALyhbdCgGWKknIIed6rRbs/s1600/ganjifa-cards-img_2877_anurag-mallick.jpg",
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj22VjTUExioYgmRxhcOMMV1qCF6o20GpopA9zSqICuydBibXGSeGg3RfX3YLGF0U4vA6kDPoFR_uGumYoD7LyVr-HCb38pY1TExFYnjFe9xsZhFJHhWhTPbSt5fCaF8THW5buaFJ3bAuM/s400-rw/ganjifa-dashavatara-cards-of-vishnupur-west-bengal-BP16_l.jpg"
        ],
        clusterLocation: "",
        clusterDetails: undefined
      },
      {
        image: 'https://lh3.googleusercontent.com/ci/AL18g_S8HZ7pumB5AvYFT0AzuRRkJFLE9Y1lgOWIFP665UKfZqlS-SCsIE60NAkskHI5A-UQWW_ulorr',
        title: 'Sandook boxes',
        description: 'Sandook boxes are traditional Rajasthani wooden chests, richly decorated with carvings, meenakari or brass fittings, and vibrant motifs. Used historically to store valuables, clothing, or linens, they blend functionality with exquisite artistry and often appear in bridal trousseaus or royal interiors',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [
          "https://th.bing.com/th/id/OIP.H2TUm6vhSgHh1WnG-U_6UAHaGm?rs=1&pid=ImgDetMain",
          "https://th.bing.com/th/id/OIP.cEOZ8g8er6zqaWnrEy3nZwHaE8?rs=1&pid=ImgDetMain",
          "https://th.bing.com/th/id/OIP.yt0ZFhv-Yy9v99Slpfd6WgHaF_?rs=1&pid=ImgDetMain",
          "https://evolvekart.com/cdn/shop/products/trunk-sandook-wooden-sheesham-wood-furniture-online-1.jpg?v=1604495624",
          "https://cdn.shopify.com/s/files/1/0326/5760/4744/products/trunk-coffee-table-hathi-storage-sandook-evolvekart-doors_1024x1024.jpg?v=1624442755"
        ],
        clusterLocation: "",
        clusterDetails: undefined
      },
    ]
  },
  metalcraft: {
    id: "metalcraft",
    name: "Metal Craft",
    image: "https://spiritofindia.co.in/wp-content/uploads/2022/01/History-of-Bidri-Craft-1536x1025.jpg",
    states: ["Rajasthan", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "West Bengal", "Maharashtra", "Orissa"],
    icon: "🔩",
    description: 'Elegant metal crafts forged using age-old techniques, often used in decor and rituals.',
    subcategories: [
      {
        image: 'https://cdn.shopify.com/s/files/1/0503/5442/1920/files/BRONZE_20.png?v=1723022454',
        title: 'Thatheras metal craft',
        description: 'Thatheras’ metal craft is an age-old Punjabi tradition of hand-beating brass, copper, and kansa into utensils and decorative ware. Honoured by UNESCO as an Intangible Cultural Heritage since 2014, each piece is forged, shaped, and polished using ancestral techniques passed down through generations.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
      },
      {
        image: 'https://lsmedia.linker-cdn.net/282256/2021/7101757.jpeg?width=1200&height=1125',
        title: 'Dhokra',
        description: 'Dhokra is a 4,000+ year old tribal metalworking tradition, using the ancient lost-wax casting technique to create enchanting brass or bronze figurines, jewelry, and utility items. Celebrated for its primitive simplicity and rustic charm, motifs often depict animals, tribal deities, or daily life scenes.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bidriware_hookah_base_1750-1800.jpg/640px-Bidriware_hookah_base_1750-1800.jpg',
        title: 'Bidriware',
        description: 'Bidriware is a 14th-century metal craft from Bidar, Karnataka, featuring a blackened brass and zinc base inlaid with gleaming silver or occasionally gold. Each piece showcases exquisite floral, geometric, and figurative motifs, created through freehand engraving and a unique soil-based oxidation process.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
      },
      {
        image: 'https://ptal.in/cdn/shop/files/69_b3513984-9016-48a6-8235-1a0ac40204ef.png?v=1719999994',
        title: 'Kansa Utensils',
        description: 'Kansa utensils, crafted from a traditional bronze alloy of copper and tin, have been used in Indian households for centuries. Revered in Ayurveda for their antimicrobial and alkalizing properties, they combine health benefits with timeless elegance.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
      },
      {
        image: 'https://www.zineart.in/images/trk3.webp',
        title: 'Tarakasi',
        description: 'Tarakasi is an intricate silver filigree art from Cuttack, Odisha, where artisans twist fine silver wires into lace-like designs for jewelry, idols, and decorative pieces. With over 500 years of tradition, it reflects refined craftsmanship and cultural elegance.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
      },
      {
        image: 'https://i.pinimg.com/474x/01/9c/b7/019cb7f1060568586c0a0ae5ebd92b92.jpg',
        title: 'Brass ware',
        description: 'Brass ware, traditionally known as ‘Pital’ ware, blends copper and zinc into functional and decorative utensils—like plates, bowls, lamps, and temple items—handcrafted in hubs like Mirzapur (UP) and Rewari (Haryana). Besides their enduring shine and durability, these vessels are prized in Ayurveda for their antimicrobial properties and ability to enhance food flavor.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
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
        image: 'https://images.picxy.com/cache/2021/4/12/301adc949dfa43c5340053385161427d.webp',
        title: 'Jappi',
        description: 'A traditional conical bamboo-and-palm leaf hat, once worn by Assamese farmers and nobility, now richly hand-painted with motifs like butterflies and moon-shapes. It’s a cultural icon used in ceremonies and Bihu performances',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
      },
      {
        image: 'https://orumindicus.com/wp-content/uploads/2023/02/193.png',
        title: 'Shital Pati',
        description: 'Smooth, cool-to-the-touch mats woven from bamboo or cane strips; prized for their intricate patterns and comfort, popular in Bengal, Assam, and Meghalaya.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZCLFJX9yZgOF9i0dXMsZ9KXH3L9EeKeZaQ&s',
        title: 'Khasi trap',
        description: 'Khasi bamboo weaving is a traditional craft of Meghalaya where artisans skillfully weave bamboo into daily-use items like baskets, storage containers, fish traps, and even house walls. The craft is functional, eco-friendly, and deeply rooted in tribal culture.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
      }
    ]
  },
  
  stone: {
    id: "Stone",
    name: "Stone Craft",
    image: "https://static.thcdn.com/productimg/960/960/13231897-1064924144952856.jpg",
    states: ["Kashmir", "Rajasthan", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "Kerala", "West Bengal"],
    icon: "🪨",
    description: 'Detailed sculptures and decor carved from stone, reflecting architectural and spiritual traditions.',
    subcategories: [
      {
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/e7/1a/caption.jpg?w=300&h=300&s=1',
        title: 'Marble Inlay',
        description: 'Agra Marble Inlay, locally known as Parchin Kari, is a fine art form where semi-precious stones like lapis lazuli, malachite, and onyx are delicately inlaid into white marble. Originating from Mughal times, this intricate craftsmanship is most famously seen in the Taj Mahal and is still practiced by artisans in Agra today.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
      },
      {
        image: 'https://m.media-amazon.com/images/I/81vBpJ6pNpL._AC_UF1000,1000_QL80_.jpg',
        title: 'Pashan Kala',
        description: 'Pashan Kala refers to the traditional soapstone carving craft practiced in regions like Odisha and Karnataka. Artisans sculpt soft, easily workable stone into detailed idols, lamps, and home décor, known for smooth texture and fine detailing.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
      },
      {
        image: 'https://kevinstandagephotography.wordpress.com/wp-content/uploads/2018/04/ksp_5094.jpg?w=890',
        title: 'Khajuraho',
        description: 'Khajuraho Stone Sculptures are world-famous for their intricate and expressive carvings on sandstone temples, depicting divine figures, dancers, and symbolic human forms. These masterpieces from the 9th to 12th centuries showcase the artistic zenith of Chandela dynasty craftsmanship.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
      },
      {
        image: 'https://www.surfacesreporter.com/myuploads/square/20220121051843.jpg',
        title: 'Kalinga',
        description: "Kalinga Stone is a brand known for producing engineered surfaces like marble, quartz, and terrazzo. They offer a wide range of designs inspired by natural stones, with a focus on both aesthetics and durability. KalingaStone's products are exported to numerous countries and are used in various applications, from countertops to statement walls.",
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
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
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
      },
      {
        image: '/images/terracotta.jpg',
        title: 'Terracotta',
        description: 'Traditional terracotta pottery known for its earthy charm and utility.',
        history: "",
        materials: [],
        process: [],
        culturalValue: "",
        images: [],
        clusterLocation: "",
        clusterDetails: undefined
      }
    ]
  }
  
};
