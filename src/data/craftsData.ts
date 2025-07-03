export interface SubCategory {
  placardMessage: string;
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
  care: {
  importance: string;
  dos: string[];
  donts: string[];
  endangered: string;
  special: string[];
  note: string;
  message: string;
};
  clusterLocation: string;
  image: string;
  images: string[];
  title: string;
  description: string;
  history: string;
  process: {
  title: string;
  description: string;
}[];
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
        placardMessage: "🕒 Takes ~20 hours to shape, dry, and fire to perfection",
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
        history: "Terracotta, meaning 'baked earth,' has been a part of Indian life since the time of the Indus Valley Civilization. This naturally occurring clay material has always held cultural and functional importance. Its light, porous, and durable nature made it ideal for crafting water vessels, sculptures, jewellery, temple décor, and even architectural tiles. From humble water pots still used in Indian villages today to the majestic terracotta horses in Tamil Nadu and Gujarat, this material has left a deep imprint on India’s artistic and utilitarian traditions.In ancient times, terracotta objects were used not just for household purposes but also in rituals and religious practices. Terracotta horses, in particular, are iconic representations found across regions like Bankura in West Bengal and Ayyanar shrines in Tamil Nadu. Jewellery and temple sculptures made from terracotta also gained popularity, especially among tribal and rural communities. In southern regions, the material was also used innovatively in roofing tiles and even fish breeding containers, showcasing its versatility. The process of making terracotta involves shaping iron-rich clay using moulds or by hand, drying the forms under the sun, and then firing them in kilns at temperatures ranging between 600°C and 1000°C. These pieces could be glazed or left unglazed, depending on their purpose. Despite its simplicity, terracotta offers durability and has a natural reddish-brown hue due to the presence of iron oxides. Globally, terracotta has had a parallel journey. It was used in Chinese pottery as early as 10,000 BCE, in Greek artefacts around 7,000 BCE, and in Roman architecture for decorative façades. The Terracotta Army of China, built around 209 BCE, remains one of the most famous examples of this craft on a monumental scale. In India, however, terracotta evolved uniquely, with the Gupta and Mauryan periods contributing life-sized statues, votive figures, and temple friezes that are still admired today. Several Indian regions have preserved and passed down unique terracotta traditions. The Bankura horse of West Bengal, known for its stylized and symbolic form, is officially recognized by the All India Handicrafts Board. Molela, a village in Rajasthan, is known for its shallow-relief terracotta plaques of deities—a craft protected under the Geographical Indication (GI) tag. Similarly, Villianur in Puducherry is famous for its massive terracotta statues and has artisans recognized by UNESCO for their expertise. Over time, the use of terracotta declined due to the advent of plastic, steel, and industrial ceramics. However, growing awareness around sustainability and the desire to return to eco-conscious, traditional lifestyles has led to a revival of interest. Today, terracotta is increasingly embraced for kitchenware such as curd setters, bakeware, tumblers, and cookware. It's also making a comeback in garden décor, flooring tiles, and home accents—valued not just for its rustic charm but also for its health and environmental benefits. Terracotta's natural ability to retain moisture, balance pH, and impart a unique earthy flavor to food makes it ideal for culinary use. It is biodegradable, cost-effective, and complements minimal or ethnic interior designs beautifully. Most importantly, promoting terracotta supports traditional Indian artisans and safeguards cultural heritage. By choosing terracotta, we not only bring timeless beauty into our homes but also help preserve centuries-old craftsmanship for future generations.",
        process: [
          {
            title: 'Clay Refining',
            description: 'The natural clay is carefully refined to remove dust particles, stones, and other impurities. This ensures a smooth, workable texture suitable for pottery.'
          },
          {
            title: 'Centering on the Potter’s Wheel',
            description: 'The refined clay is mounted at the center of the potter’s wheel. Our skilled artisans use traditional hand techniques to shape the clay into beautiful forms.'
          },
          {
            title: 'Sun Drying',
            description: 'Once the desired shape is achieved, the pottery is left to dry naturally under the sun for 2–3 days. This slow drying helps avoid cracks during firing.'
          },
          {
            title: 'Kiln Firing',
            description: 'The dried pottery is then fired in a kiln — an open furnace powered by eco-friendly, local fuels such as dry coconut leaves or small wooden pieces. This hardens the clay and gives it durability.'
          },
          {
            title: 'Glazing and Finishing',
            description: 'Finally, a transparent glaze is applied to the surface, enhancing the pottery’s beauty while giving it a smooth, refined finish.'
          }
        ],
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
        },
        care: {
  importance: "Terracotta Pottery is one of the oldest and most grounded crafts in India, representing a deep connection between earth and human creativity. Shaped from natural clay and fired in open kilns, each piece reflects tradition, simplicity, and the rich rural aesthetics of India.",

  dos: [
    "Clean gently using a dry or slightly damp soft cloth",
    "Use a soft brush to clean carved or textured surfaces",
    "Keep away from areas with excessive humidity to avoid mold formation",
    "Display in areas with low handling to prevent accidental chips",
    "Apply natural oils (like coconut or linseed oil) occasionally to enhance color and longevity"
  ],

  donts: [
    "Do not soak terracotta items in water for prolonged periods",
    "Avoid using chemical cleaners or harsh detergents",
    "Do not drop or knock pieces against hard surfaces — terracotta is fragile",
    "Avoid placing directly over flames or electric heaters unless made for cooking",
    "Do not stack without padding — it can cause scratches or breakage"
  ],

  endangered: "With the rise of plastic, metal, and machine-made alternatives, the demand for terracotta pottery has declined. Younger generations often migrate to other jobs due to poor returns and lack of exposure, leaving the skill at risk of extinction in many rural clusters.",

  special: [
    "Made using natural clay, hand-molded or wheel-thrown, and sun-dried before firing",
    "Eco-friendly, biodegradable, and deeply sustainable",
    "Used traditionally for cooking, storing water, and festive rituals",
    "Often decorated with tribal motifs, geometric patterns, or natural dyes",
    "Every piece is unique — shaped entirely by the potter’s hand and skill"
  ],

  note: "Terracotta items are porous and require careful storage and gentle cleaning. They are best used for traditional cooking, indoor plants, or decor. Their rustic appeal comes with fragility — treat them with the care you’d give to heirlooms.",

  message: "When you value Terracotta Pottery, you’re not just admiring earthen beauty —\nYou are preserving a sacred bond between tradition and soil.\nYour interest keeps these humble masterpieces alive in a modern world."
}
      },
      {
        image: 'https://c9admin.cottage9.com/uploads/2322/image_2023_01_20T09_08_11_450Z-1024x723.png',
        title: 'Blue Pottery',
        placardMessage: "🕒 Small items in 2–3h, but decorative pieces take 15–30 hours",
        description: 'Blue Pottery is a unique Jaipur craft known for its vibrant cobalt blue glaze and intricate floral designs. Made without clay, it blends Persian art with Indian tradition.',
        history: "The history of the art of pottery is as old as the history of mankind. Glass was discovered in the ancient civilizations of Egypt, Syria, Iran and Indus Valley. It was further discovered that when alkaline soil was mixed with copper and heated it gave a turquoise blue color. From Mohenjodaro and Harappan era right till the Gupta period glazed utensils, necklaces, beads and tiles were in vogue. This art greatly flourished during the Buddhist period. The Central Asian and Middle Eastern glazing techniques came to India with the several successive Islamic invasions while the Chinese porcelain continued to be imported to the Indian courts (both pre-Mughal and Mughal). The Baburnama, commissioned in 1590 in the reign of Akbar mentions that “Babur and his friends were regularly served kebabs and pilaus from dishes and plates that are sometimes golden, sometimes green and sometimes blue and white.- The miniatures paintings of the era also depict the same. Researches of the Archaeological Survey of India mentions the fact that the glazed tiles first appear in Delhi in the Tughlaq monuments dated between 1321 AD and 1414 AD. The designs of which are inspired from the Turkish patterns. Excavations at the Purana Qila have revealed glazed ware of the Sultanate period from 1206 to 1526. The pottery introduced to India in Delhi and Multan is believed to have come from Bokhara. Some of the earliest tile work can also be seen in Arab-ki-Sarai in Delhi near Humayuns tomb. The other centres of glazing and painting tiles opened up at Khurja, Agra, Meerut, Rampur, Bulandshahar due to the mushrooming of glazing kilns. When the city of Jaipur was founded in 1727 by Sawai Jai Singh I, craftsmen from all over the country were invited to come and make their home in this new city. Royal patronage, lucrative offers and the attraction of living in a beautiful city led many artisans and craftsmen to come and settle in Jaipur. By the beginning of the 19th century the city was well established as a thriving art centre. In keeping with the traditions of his forefathers, Sawai Ram Singh II (1835-1880) set up a school of art and continued to encourage artists and craftsmen. Blue Pottery took an interesting route in finding its home in Jaipur. Ram Singh II attended a kite flying session and watched as his kite masters were engaged in battle with two brothers from Achnera (near Agra). When the ruler saw that the brothers managed to bring down the royal kites almost every time, he was intrigued. He asked the brothers their secret. They told him that they were potters by profession and had coated their strings with the same blue green glass that they used for their pots. Sawai Ram Singh II was impressed so he invited the brothers to stay in Jaipur and teach this unique form of glazed pottery at his new art school. On the Verge of Extinction Blue Pottery had enormous potential and should have flourished, but over the years master potters refused to share their trade secrets with their fellow craftsmen so there was an eventual lowering of standards and a gradual dying out of the craft. Over the years the craft was kept alive by her Highness Gayatri Devi who widely promoted Blue Pottery. The craft received a much needed boost in the 1960s as internationally renowned artist; Kripal Singh Shekhawat entered the field of Blue Pottery and raised the bar. His presence brought a new excitement to the craft as his designs began selling very well.",
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
            description: 'Except for tiles and wall hangings, most of the pottery items are prepared in two or more parts. After the molded item is ready, a base is added below it. In rounded pots, it is done by putting it on the potter’s wheel. The wheel is set in motion and the pot is fixed at the center of the wheel. A little amount of dough is taken and with a touch of water, the base of the vessel is added. It is again left for drying for one to two days.'
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

        images: [
          "https://tse4.mm.bing.net/th/id/OIP.z6FHgaUSqQzePqWk-OykEQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
          "https://hindikrafts.com/wp-content/uploads/2020/09/1200px-Cobalt_Blue_Pottery_4782042700.jpg",
          "https://i.etsystatic.com/8692802/r/il/a8c0f7/3241421742/il_fullxfull.3241421742_r3ee.jpg",
          "https://www.bluerosepottery.com/mm5/graphics/00000001/category_home-decor.jpg",
          "https://live.staticflickr.com/803/40174260754_e2cf257799_b.jpg",
          "https://gaatha.org/wp-content/uploads/usage_2-47-768x445.jpg",
          "https://gaatha.org/wp-content/uploads/usage_4-35-768x445.jpg"
        ],
        care: {
          importance: "Blue Pottery is more than just art — it's a soulful representation of Jaipur’s heritage and an embodiment of Persian and Mughal artistic traditions fused with Rajasthani aesthetics. Its vibrant hues and intricate motifs bring timeless charm to any setting.",

          dos: [
            "Wipe gently with a soft, damp cloth to maintain shine and avoid scratches",
            "Use only mild, pH-neutral detergents if cleaning is necessary",
            "Store in a dust-free place or a display cabinet to preserve glaze quality",
            "Place with care on cushioned or padded surfaces, especially edges and corners",
            "Use anti-slip pads under items placed on glass or polished surfaces"
          ],

          donts: [
            "Do not use metal or abrasive scrubbers — they damage the glaze and motifs",
            "Avoid dishwashers or microwave ovens as blue pottery is not heat-resistant",
            "Do not stack items without using cloth or foam padding between them",
            "Avoid prolonged exposure to moisture — it weakens the glaze over time",
            "Do not expose items to direct flames or sudden temperature changes"
          ],

          endangered: "Blue Pottery is labor-intensive and involves high breakage rates during kiln firing. Because it's made from a non-clay base and glazed at low temperatures, pieces are delicate and often rejected during quality checks, discouraging newer generations of artisans.",

          special: [
            "Made from quartz, glass powder, multani mitti, borax, and katira gum — not clay",
            "Each item is hand-painted with oxide-based mineral colors and then glazed",
            "Uses traditional wood-fired kilns and low-temperature baking (~800°C)",
            "Iconic for Persian-style motifs — floral vines, arabesques, birds, and Mughal art",
            "Eco-friendly and lead-free variants are now being explored by newer artisans"
          ],

          note: "Blue Pottery is best treated as semi-functional — ideal for décor, light serving, and gifting. Handle it like glass or fine porcelain. Though strong in appearance, its true beauty lies in its delicate handwork.",
          message: "When you value Blue Pottery, you’re not just admiring design —\nYou are honoring a dying flame of India’s artisan heritage.\nYour curiosity and support are what keep this art breathing."
        },

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
        },
      },
      {
        image: 'https://www.khurjapotteryhub.com/wp-content/uploads/2025/04/flower-vases.webp',
        title: 'Khurja Pottery',
        placardMessage: "🕒 Clay preparation (15h) + firing (18–20h) ≈ ~35 hours total",
        description: 'Khurja pottery is a centuries-old, GI-protected craft from Uttar Pradesh, known for its cream-background ceramics hand-painted with vivid blue, brown, and floral patterns. It combines local clay with quartz and feldspar to create durable and decorative kitchenware and decor.',
        history: 'Khurja, a town in Uttar Pradesh’s Bulandshahr district, has long been recognized as one of India’s most historic and vibrant centers of glazed pottery. The origin of this age-old craft is surrounded by fascinating legends. One narrative suggests that over 600 years ago, Afghan king Taimur Lung brought with him skilled Egyptian and Syrian potters during his campaign through northern India, who then settled in the Khurja region. Another version attributes the rise of pottery here to the Mughal Empire, suggesting that artisans were moved to the area under royal patronage. Some sources argue that the tradition developed indigenously over time, shaped by local needs and artistic instincts. Regardless of which version is most accurate, what remains undisputed is that Khurja has earned its place as a hub of pottery heritage in India. Many local potters even identify themselves as ‘Multani Kumhars’, linking their roots to Multan, now in Pakistan, further enriching the cultural depth of this craft. Khurja’s modern journey in pottery began in 1942, when the government of Uttar Pradesh established a kiln factory during World War II. Although the original factory was closed in 1946 due to quality concerns, it was re-established in 1952 as the Pottery Development Centre, which continues to support artisans to this day. This marked a significant shift in the way pottery was produced in Khurja—bringing in institutional support, design improvements, and new production techniques. The craft also received a major boost in 1981 when the CSIR’s Central Glass and Ceramic Research Institute set up a regional center in Khurja to provide technical assistance on material quality, kiln efficiency, and sustainable practices. These initiatives modernized the industry while keeping its traditional charm intact. Over the decades, Khurja pottery has not only sustained local livelihoods but has grown into a nationally and internationally respected craft. The region today supports more than 500 production units and nearly 400 pottery factories. Around 15,000 official artisans and another 25,000 informal workers are engaged in this vibrant ecosystem. Khurja pottery is celebrated for its wide range of products including crockery, kitchenware, art pieces, sanitary goods, tiles, and even electrical insulators. In the financial year 1999–2000, production value crossed ₹2,500 million, with exports contributing over ₹148 million. These figures have only grown since, supported by around 23 export-focused units and an expanding global demand for handcrafted Indian ceramics.The unique appeal of Khurja pottery lies in its artistic patterns and signature glazes—especially the blue and brown motifs set against cream-colored clay. In recognition of its cultural and regional distinctiveness, Khurja pottery was granted a Geographical Indication (GI) tag in 2008–09. This not only protects the authenticity of the craft but also helps artisans receive fair economic value for their work.In recent years, under the Uttar Pradesh government’s “One District One Product” (ODOP) initiative and the Khurja Master Plan 2031, the pottery industry has received renewed attention. Efforts are being made to enhance production infrastructure, create marketing hubs like a dedicated Ceramic Haat, improve packaging standards, and boost export potential. These strategic steps have helped Khurja’s pottery industry generate an annual turnover of approximately USD $23 million. Today, Khurja pottery represents the perfect blend of tradition and innovation. From ancient legends to modern reforms, the story of Khurja is one of resilience, creativity, and cultural pride. It stands as a living heritage—connecting generations of artisans and admirers through the timeless beauty of handcrafted clay.',
        process: [
          {
            title: 'Preparing the Clay',
            description: 'The journey of Khurja pottery begins with clay preparation. Raw materials are blended in a specific ratio and ground in a Ball-mill machine for nearly 15 hours to create a uniform clay mixture. This ratio is a closely guarded trade secret passed down through generations. The refined mixture is then processed through a pan filter to control moisture levels, resulting in compact clay discs with a standard radius of 0.75 feet. These discs are then pugged using a Pug-mill machine, where an Archimedes screw mechanism continuously refines the clay. This process produces two types of clay—solid and liquid—both essential for different stages of pottery making.'
          },
          {
            title: 'Clay Moulding',
            description: 'Moulding is primarily used for larger pottery items like containers, pots, and storage vessels. The moulds are crafted from Plaster of Paris (POP), ensuring precision and consistency. The clay is blended thoroughly to eliminate any lumps before being poured into the prepared mould. Once the mould is filled, it is gently rotated to remove air bubbles and evenly distribute the clay along the interior. Only the required thickness of clay remains in the mould, ensuring durability without excess weight.'
          },
          {
            title: 'Surface Finishing and Painting',
            description: 'Once the shaped pieces are partially dried, the outer surface undergoes smoothening using fine sandpaper. This step helps achieve a refined and polished appearance. The decorative art on Khurja pottery can be categorized into two types: Mughal art and conventional art. Mughal designs are typically painted using a bluish cobalt color (Cb) and finished with a colorless lead-based glaze (Pb). In contrast, conventional art often features floral and geometric motifs that reflect the rich cultural heritage of the region.'
          },
          {
            title: 'Glazing',
            description: 'Glazing is one of the most crucial steps, as it not only beautifies the pottery but also makes it waterproof and more durable. Glazes are made from three key components: a glass former, a melter, and a binder. Depending on the artistic requirements, the glaze can have a transparent or translucent finish. Once applied, the glaze gives each piece its signature glossy appearance and enhances both functionality and aesthetic appeal.'
          },
          {
            title: 'Firing',
            description: 'The final stage in the process is firing. Earlier, artisans used traditional brick kilns; however, most now prefer modern electric kilns equipped with temperature control systems. These advanced kilns are safer and more efficient, allowing for consistent heating and reducing the risk of material loss. Firing hardens the clay and fuses the glaze to the pottery, giving it the final strength, color, and finish Khurja pottery is known for.'
          }
        ],
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
        },
        care: {
  importance: "Khurja Pottery, often called the 'Ceramic City of India', is known for its colorful, hand-painted designs and glossy glaze. This traditional ceramic craft from Uttar Pradesh marries utility with beauty, making it a vibrant part of Indian kitchenware and home decor.",

  dos: [
    "Clean gently using a soft sponge and mild detergent",
    "Wipe dry immediately to maintain the glossy finish",
    "Store on padded shelves to avoid scratches or chipping",
    "Use for dry or mildly warm items to extend the life of glaze",
    "Display in glass cabinets for dust protection and aesthetic appeal"
  ],

  donts: [
    "Do not use abrasive scrubbers or steel wool — they damage painted surfaces",
    "Avoid microwaving unless labeled microwave-safe",
    "Do not expose to extreme temperature changes — it may cause cracking",
    "Avoid using for cooking on open flames or stovetops",
    "Do not stack tightly without padding — it may lead to glaze damage"
  ],

  endangered: "Despite its popularity, Khurja Pottery faces competition from cheap factory-made ceramics. Artisans struggle with inconsistent market demand, rising material costs, and limited innovation support, pushing many to abandon the craft for better-paying jobs.",

  special: [
    "Made using refined clay fired at high temperatures for strength and finish",
    "Hand-painted with floral, geometric, and Mughal-inspired designs",
    "Glazed to achieve a shiny, crack-resistant surface",
    "Available in a wide range of functional items — plates, bowls, mugs, and tiles",
    "Environmentally safer alternatives to plastic or melamine ware"
  ],

  note: "Khurja Pottery is best used for décor or mild kitchen use. Though durable, its hand-painted glaze should be preserved with care. Treat it like glass — beautiful, functional, but deserving of gentle handling.",

  message: "When you value Khurja Pottery, you're not just buying a ceramic —\nYou're celebrating the vivid brushstrokes of generations.\nYour support helps artisan families shape clay into culture."
}
      },
      {
        image: 'https://www.orangeskies.in/cdn/shop/files/DSC06948.jpg?v=1723744755&width=1946',
        title: 'Black Pottery',
        placardMessage: "🕒 15–25 hours for end-to-end traditional process",
        description: 'Black pottery is a traditional Indian craft known for its striking dark finish, achieved by firing clay in a smoky, low-oxygen environment. Styles like Nizamabad’s silver-etched designs and Manipur’s Longpi stoneware reflect deep cultural and tribal heritage.',
        history: "Black pottery holds a unique place in India’s vast and diverse tradition of ceramic arts. Its origins trace back to the Chalcolithic and Harappan periods, making it one of the oldest known ceramic techniques in the country. Archaeological findings from sites like Harappa, Mohenjo-Daro, and Kalibangan have uncovered black and grey ware pottery used for ritual, domestic, and funerary purposes. These early pieces were characterized by simple, elegant forms and minimal ornamentation, often fired in open kilns with reduced oxygen to produce the signature black hue—a technique that continues in some rural regions even today. Over centuries, black pottery evolved not only as a utility craft but also as a symbol of spiritual and cultural expression. In Vedic traditions, black clay vessels were sometimes used in sacred rites, as they were believed to absorb and neutralize negative energy. The black color was seen as grounding and purifying. With the passage of time and the influence of regional dynasties, invasions, and trade, black pottery took on new aesthetics and techniques, incorporating metallic glazes, incised motifs, and engraved patterns influenced by Persian, Mughal, and tribal art. One of the most renowned centers of black pottery today is Nizamabad in Uttar Pradesh. The town's black pottery is noted for its deep black sheen and delicate silver inlay work, often resembling metal from a distance. This style is believed to have emerged during the Mughal era, blending indigenous pottery skills with Persian artistic influence. The silver ornamentation is achieved using natural compounds, and the entire process involves smoke-firing and meticulous handwork. In 2015, Nizamabad black pottery was granted a Geographical Indication (GI) tag, recognizing its unique cultural and geographical origin. In the northeastern state of Manipur, a distinct form of black pottery known as Longpi Ham is crafted without a potter’s wheel. Instead, artisans from the Tangkhul Naga tribe use a mixture of weathered rock and serpentine stone, shaping it by hand before firing. This tradition, rooted in tribal customs, is closely tied to the community’s identity and rituals. Longpi pottery is not only aesthetically appealing but also functional, as it retains heat well and is safe for cooking. Despite the challenges posed by industrialization and mass-produced goods, black pottery has endured, owing to its sustainability, craftsmanship, and timeless appeal. In recent years, designers and connoisseurs have rediscovered the elegance of black pottery, using it in modern décor, fine dining, and art installations. Its journey from ancient rituals to contemporary living spaces is a testament to the resilience of traditional Indian crafts and the ingenuity of the artisans who keep this heritage alive.",
        process: [
          {
            title: 'Clay Collection and Preparation',
            description: 'The process begins with the collection of fine, local clay, often mixed with sand or other natural minerals to improve strength. The clay is sieved, kneaded, and filtered to remove impurities and ensure a smooth, consistent texture suitable for shaping.'
          },
          {
            title: 'Shaping the Clay',
            description: 'The prepared clay is shaped either by hand or on a potter’s wheel, depending on the tradition. In places like Longpi (Manipur), artisans do not use the wheel but instead hand-mold the pottery into desired shapes like pots, plates, cups, and decorative items. Traditional motifs may be formed during this stage.'
          },
          {
            title: 'Drying',
            description: 'The shaped items are air-dried in the shade for several days, allowing the moisture to evaporate gradually. This prevents cracks or warping during firing. Sometimes, semi-dried pottery is further smoothened or refined using wooden or metal tools.'
          },
          {
            title: 'Polishing or Engraving(Optional)',
            description: 'In styles like Nizamabad black pottery, the surface may be engraved with intricate patterns using sharp tools. These carvings are later filled with a silver-colored paste made from metallic powders or natural minerals to give a rich, decorative appearance.'
          },
          {
            title: 'Smoke-Firing Process',
            description: 'The dried pottery is placed in a kiln or pit and covered with sawdust, rice husk, or other organic materials. It is then fired in a low-oxygen environment (reduction firing), which causes the clay to turn deep black. The smoke from the burning organic matter settles into the clay surface, creating the signature black color without the use of dyes.'
          },
          {
            title: 'Polishing and Finishing',
            description: 'After firing, the pottery is cooled slowly and then sometimes buffed or polished using oil, wax, or smooth stones to enhance its sheen. The decorative patterns in Nizamabad pottery may be highlighted further with hand-burnishing or metal rub-ins.'
          },
          {
            title: 'Quality Check and Usage',
            description: 'Finally, the products undergo a quality check to ensure no cracks or defects are present. The finished black pottery is known for its durability, heat resistance, and aesthetic elegance, making it suitable for both daily use and decorative purposes.'
          }
        ],
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
        },
        care: {
  importance: "Black Pottery is a rare and elegant form of earthenware known for its lustrous black finish and intricate engravings. Originating from places like Nizamabad in Uttar Pradesh, it combines age-old traditions with artistic finesse, reflecting the quiet sophistication of Indian craftsmanship.",

  dos: [
    "Dust regularly with a soft, dry cloth to preserve the sheen",
    "Handle with clean, dry hands to avoid oil stains",
    "Display in low-humidity areas to prevent moisture buildup",
    "Place gently on padded or stable surfaces to avoid edge chipping",
    "Keep away from prolonged direct sunlight to maintain natural black color"
  ],

  donts: [
    "Do not use harsh chemicals or abrasive sponges to clean",
    "Avoid soaking in water — the porous body can absorb moisture",
    "Do not place in dishwashers or microwave ovens",
    "Avoid stacking without padding — surface scratches easily",
    "Do not expose to sudden temperature changes (hot to cold or vice versa)"
  ],

  endangered: "The labor-intensive process and lack of widespread commercial demand have made Black Pottery less viable for younger artisans. Many traditional families are abandoning the craft due to limited income and lack of institutional support or modern market access.",

  special: [
    "Uses locally sourced clay mixed with vegetable matter and fired in low-oxygen kilns to get the black finish",
    "Decorated with silver-colored patterns made by rubbing with zinc or mercury amalgams",
    "Each item is hand-burnished and polished with mustard oil to enhance the sheen",
    "Eco-friendly and lead-free — safe for dry storage and decorative use",
    "A GI-tagged craft that blends tribal aesthetics with ancient firing techniques"
  ],

  note: "Black Pottery is mostly decorative, though some dry storage containers are functional. Due to its porous and delicate nature, it should be handled like fine art. Preserve it away from heat, water, and physical stress to retain its beauty for generations.",

  message: "When you value Black Pottery, you’re not just preserving design —\nYou are keeping alive a smoky legacy of fire, earth, and culture.\nYour appreciation fuels the dignity and survival of its artisan families."
}
      },
    ]
  },
  woodcraft: {
    id: "woodcraft",
    name: "Wood craft",
    image: "https://th.bing.com/th/id/R.ae9de228913de6eaa5d047df1119779e?rik=97cu25mCL7pM5A&riu=http%3a%2f%2fgogalini.com%2fimages%2fprofile_images%2fp107%2fwoodcraft-voskakis_p107_55d849736d0b7.jpg&ehk=JOOo4MIE6ATom7vzDvhOZRD%2bA8hN8UAzEGjUOFvOgtY%3d&risl=&pid=ImgRaw&r=0",
    states: ["Kashmir", "Rajasthan", "Karnataka", "Kerala", "Uttar Pradesh", "Gujarat", "Assam"],
    icon: "🪵",
    description: 'Intricately carved wooden artifacts made by skilled artisans, blending utility with heritage.',
    subcategories: [
      {
        image: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6765a320ce29c0001dcd0e8c.jpg',
        title: 'Saharanpur wood carving',
        placardMessage: "🕒 Large intricate pieces may need 40–100+ hours",
        description: 'Saharanpur wood carving, rooted in Mughal-era craft traditions, is renowned for intricate fret (‘jali’) work, vine-leaf motifs, and brass inlay on fine woods like sheesham and teak. Artisans handcraft furniture, décor, and religious pieces earning the city its status as India’s ‘wood-carving capital.',
        history: "Saharanpur, a town nestled in the foothills of the Shivalik range in Uttar Pradesh, holds the distinguished title of being India’s Wooden City, owing to its long-standing legacy of intricate wood carving. This rich craft tradition dates back nearly four centuries to the Mughal era. It is believed that artisans from Kashmir, renowned for their mastery of woodwork, were invited by the Mughals to settle in Saharanpur, where they brought with them their exceptional techniques, tools, and artistic sensibilities. Over time, these artisans trained local craftsmen, and a new generation of woodworkers emerged, blending Mughal aesthetics with indigenous creativity. The abundant supply of high-quality timber—especially sheesham, teak, rosewood, ebony, and sal—from nearby forests helped establish Saharanpur as a prime location for carving and furniture-making. Early designs were characterized by floral patterns, jaali (lattice) work, and delicate vine motifs, many of which reflected Persian and Islamic influences introduced during the Mughal period. As India transitioned through different historical phases—from Mughal to Maratha to British rule—Saharanpur’s woodwork adapted as well. During colonial times, British officers and elite Indian families commissioned furniture that incorporated European styles like Victorian, Rococo, and Louis XVI. This fusion of Western designs with traditional Indian carving created a distinct artistic language that appealed to both Indian and global patrons. The town’s fame spread far and wide, and Saharanpur woodwork began to appear in royal courts, colonial homes, and, eventually, international markets. In the 20th century, particularly after Indian independence, the craft received new impetus through small-scale industries and cooperative societies. By the 1980s and 90s, the demand for handcrafted wooden items—ranging from furniture to décor and utility products—was growing steadily both in India and abroad. Today, Saharanpur’s wood carving industry supports over half a million people, with thousands of micro units, workshops, and factories operating across the region. The artisans, many of whom belong to families that have practiced the craft for generations, continue to produce exquisite wooden products with both hand tools and modern equipment. The work is celebrated for its fine detailing, durability, and beauty—whether it's a carved room divider, ornate headboard, intricate tray, or religious idol. Despite the threats posed by mechanization, cheaper imports, and changing consumer trends, the tradition has shown resilience. Government initiatives like “One District One Product” (ODOP), as well as schemes promoting export and artisan welfare, have played a crucial role in reviving the craft. There is also a growing global appreciation for sustainable, handmade products, which has further boosted the market for Saharanpur wood carvings. Ultimately, this age-old tradition is not just a means of livelihood for thousands, but a living testimony to India’s rich cultural, artistic, and architectural heritage—where every carved piece tells a story of skill, history, and timeless beauty.",
        process: [
          {
            title: 'Selection of Wood',
            description: 'The process begins with selecting high-quality wood such as sheesham (Indian rosewood), teak, or mango wood, known for their strength and fine grain. The choice of wood depends on the type of product being created.'
          },
          {
            title: 'Seasoning the Wood',
            description: 'Once selected, the wood is naturally seasoned for several weeks to months to reduce moisture content. This helps prevent warping, cracking, and ensures the wood’s durability over time.'
          },
          {
            title: 'Cutting and Shaping',
            description: 'The seasoned wood is then cut into slabs or blocks based on the dimensions of the intended product. These pieces are shaped using saws and basic tools to prepare them for carving.'
          },
          {
            title: 'Sketching the Design',
            description: 'Skilled artisans hand-sketch intricate patterns on the wooden surface using pencils or chalk. The designs often include floral, geometric, Mughal-inspired, or jaali (lattice) motifs.'
          },
          {
            title: 'Hand Carving',
            description: 'This is the most intricate and important stage. Using traditional tools like chisels, hammers, and gouges, artisans carefully carve out the design. This requires years of experience, precision, and artistic skill.'
          },
          {
            title: 'Detailing and Refining',
            description: 'After the main carving is complete, the piece is smoothened and refined. Fine detailing is added, and any rough edges are polished with sandpaper or files to give a clean finish.'
          },
          {
            title: 'Assembling (If Needed)',
            description: 'For larger items like furniture, carved pieces are then joined or assembled using glue, nails, or dowels to create the final structure.'
          },
          {
            title: 'Finishing and Polishing',
            description: 'The final product is then polished or painted. Finishes can include natural polish, antique look, or hand-painted accents. This enhances the appearance and protects the wood.'
          },
          {
            title: 'Quality Check and Packaging',
            description: 'For larger items like furniture, carved pieces are then joined or assembled using glue, nails, or dowels to create the final structure.'
          },
          {
            title: 'Assembling (If Needed)',
            description: 'Each item goes through a strict quality check to ensure structural strength and fine detailing. Once approved, it is carefully packed, especially for export or display.'
          }
        ],
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
        },
        care: {
  importance: "Saharanpur Wood Carving is one of India’s most refined woodcraft traditions, renowned for its intricate floral patterns, latticework, and Mughal-inspired motifs. Every carved panel reflects the artisan’s skill, patience, and an age-old connection to Indian architectural heritage.",

  dos: [
    "Dust regularly using a soft, dry microfiber cloth",
    "Use natural beeswax or wood polish occasionally to preserve shine and texture",
    "Keep away from direct sunlight to prevent fading or cracking",
    "Maintain stable room humidity to avoid wood warping",
    "Place on even, stable surfaces to prevent stress on joints and carvings"
  ],

  donts: [
    "Do not wash with water or wet cloths — moisture damages wood and fine carvings",
    "Avoid using chemical cleaners or alcohol-based sprays",
    "Do not expose to extreme temperatures or damp environments",
    "Avoid dragging or dropping — the delicate carvings can break",
    "Do not cover with plastic sheets for long durations — it traps humidity and causes mold"
  ],

  endangered: "Due to the rise of machine-made furniture and cheap imports, handcrafted wood carving is losing demand. Younger artisans are drifting toward other trades because of declining income and lack of modern market access, putting this detailed craft at risk of vanishing.",

  special: [
    "Carved entirely by hand using chisels, gouges, and hammers",
    "Made from Sheesham (Indian rosewood), mango wood, or teak",
    "Inspired by Mughal jaali patterns, paisleys, vines, and temple motifs",
    "Used in furniture, panels, trays, doors, and home décor",
    "A GI-tagged craft from Saharanpur with global recognition for quality"
  ],

  note: "Saharanpur Wood Carving is both decorative and functional, but must be handled with respect for its craftsmanship. Ideal for heirloom furniture and artistic interiors, it brings a sense of regal heritage into any space.",

  message: "When you value Saharanpur Wood Carving, you're not just admiring furniture —\nYou are preserving generations of artisan wisdom and identity.\nYour curiosity and appreciation are what keep the chisels moving and the legacy alive."
}
      },
      {
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/walnut-wood-carvings-craft-hero?qlt=82&ts=1726641491579',
        title: 'Kashmiri walnut wood carving',
        placardMessage: "🕒 Traditional floral patterns take 40–80 hours",
        description: 'Kashmiri walnut wood carving is a fine art form crafted from the region’s native walnut trees. Known for its deep relief work and delicate detailing, it decorates furniture, jewelry boxes, and wall panels with floral and paisley patterns.',
        history: "The history of Kashmir walnut wood carving is a glorious chapter in India’s artisanal heritage, tracing back over 600 years. This fine art flourished during the reign of Sultan Zain-ul-Abidin (1420–1470), affectionately known as Budshah, who played a pivotal role in transforming the cultural landscape of the Kashmir Valley. A visionary ruler and patron of arts, he invited skilled craftsmen from Central Asia, particularly from Persia and Samarkand, to Kashmir. These artisans introduced a wide range of crafts, including carpet weaving, papier-mâché, embroidery, and most notably, intricate wood carving. The local population, already skilled in carpentry and woodworking, quickly absorbed and adapted these foreign influences, giving birth to what is now known as Kashmir walnut wood carving. What distinguishes this craft from others is the use of walnut wood (Juglans regia), sourced from the native walnut trees that grow abundantly in Kashmir’s temperate climate, especially in regions like Anantnag, Baramulla, Kupwara, and Srinagar. Walnut wood is unique for its rich, dark texture, fine grain, and workable quality, especially when freshly cut. The rarity of this wood, combined with the exceptional skill required to carve it, has made the craft both prestigious and exclusive. The artisans, called naqash or khandkars, often belong to families who have preserved the techniques for generations. Each artisan learns the craft through years of apprenticeship under master craftsmen, ensuring the continuity of this age-old tradition. Historically, walnut wood carving was used for decorating royal palaces, temples, mosques, and shrines. It adorned ceilings, panels, doors, and furniture, transforming plain wood into breathtaking works of art. The motifs carved into the wood are drawn from nature, spirituality, and Persian aesthetics, including lotus flowers, chinar leaves, grapevines, birds, creepers, paisleys, and sometimes Quranic verses or architectural jaali patterns. What makes the work truly unique is the depth of carving, which ranges from shallow relief to deep carving and undercut openwork.During the Mughal era, the demand for carved walnut furniture and interiors grew among nobility, further elevating the craft's status. Under British rule, Kashmiri walnut wood products became sought-after luxury items, exported widely to Europe and admired in colonial residences. By the 19th and 20th centuries, workshops in Srinagar and surrounding towns began producing decorative and functional items for an international clientele—including screens, boxes, trays, cupboards, beds, and intricate paneling. Each piece continues to be crafted entirely by hand, preserving its authentic character.Today, despite challenges from machine-made imitations, deforestation, and economic shifts, Kashmiri walnut wood carving holds its place as a GI (Geographical Indication)-tagged handicraft, protected by law and promoted by government and craft councils. Artisans are also experimenting with contemporary designs while retaining traditional carving styles, bridging the gap between heritage and modern aesthetics. Whether in museums, luxury homes, or craft fairs, a piece of carved walnut from Kashmir represents not just furniture or décor—but a living legacy of art, culture, and craftsmanship.",
        process: [
          {
            title: 'Selection of Wood',
            description: 'The process begins with choosing premium quality walnut wood (locally known as Doon Kul), sourced from trees that grow abundantly in the Kashmir Valley. The wood is prized for its fine grain, durability, and rich brown color.'
          },
          {
            title: 'Seasoning the Wood',
            description: 'Once harvested, the wood is naturally seasoned for 1–2 years to reduce moisture content. This prevents warping, cracking, and enhances its ability to hold fine carvings.'
          },
          {
            title: 'Cutting and Shaping',
            description: 'After seasoning, the wood is cut into blocks or panels based on the size of the product to be made—be it a tray, box, screen, or piece of furniture. These blocks are then roughly shaped using saws and traditional tools.'
          },
          {
            title: 'Design Sketching',
            description: 'Master artisans or designers draw intricate motifs directly onto the wood surface using pencils or chalk. These designs are inspired by floral patterns, chinar leaves, birds, creepers, Mughal art, and Persian motifs.'
          },
          {
            title: 'Hand Carving',
            description: 'Hand carving is the most crucial and intricate part of the Kashmir walnut wood carving process. Skilled craftsmen use traditional tools such as chisels, gouges, and mallets to carefully carve the designs that have been drawn onto the wood surface. The style and depth of the carving can vary depending on the design, ranging from plain surface patterns to deep, bold motifs. Some pieces involve undercut carving, which features detailed open-work designs, while others include fine latticework or jaali, known for its delicate and highly detailed perforations.'
          },
          {
            title: 'Smoothing and Refining',
            description: 'Once carved, the surface is smoothened with sandpaper or fine files to remove any roughness and refine details. This stage requires both skill and patience to preserve the intricacy of the work.'
          },
          {
            title: 'Assembly (if required)',
            description: 'In the case of furniture or multi-part items, carved pieces are assembled and joined using wood adhesives, traditional joints, or nails. The structure is then inspected for symmetry and strength.'
          },
          {
            title: 'Polishing and Finishing',
            description: 'Polishing and finishing form the final step of the Kashmir walnut wood carving process. This stage not only protects the wood but also enhances its natural beauty and highlights the intricacy of the carvings. Depending on the desired look, artisans may apply natural wax polish to give the piece a soft, matte, and earthy finish or use French polish or lacquer to achieve a glossy and rich appearance. In some cases, the wood is also stained to deepen its color and add more depth and warmth to the final product.'
          },
          {
            title: 'Quality Check and Packaging',
            description: 'Each item undergoes a quality check for carving precision, finish, and durability. Finally, the products are carefully packed, especially for export or gallery display.Each item undergoes a quality check for carving precision, finish, and durability. Finally, the products are carefully packed, especially for export or gallery display.'
          }
        ],
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
        },
        care: {
  importance: "Kashmir Walnut Wood Carving is a luxurious and deeply traditional craft that showcases the region's legacy of fine hand-carving on naturally rich walnut wood. Each piece reflects a harmony of nature and craftsmanship, admired globally for its depth, grain, and detail.",

  dos: [
    "Dust gently with a dry, soft microfiber cloth to preserve fine details",
    "Apply natural wood polish or linseed oil occasionally to maintain luster",
    "Keep in a cool, dry environment to avoid moisture absorption or cracking",
    "Use padded supports under large or heavy carved items",
    "Handle with care to prevent damage to fragile or projecting carvings"
  ],

  donts: [
    "Do not use water or wet cloths — moisture can swell or stain the wood",
    "Avoid commercial sprays and alcohol-based cleaners",
    "Do not place in direct sunlight — it may fade the wood's natural tone",
    "Avoid scraping or placing sharp items on the surface",
    "Do not store in plastic or sealed covers — it traps moisture"
  ],

  endangered: "Due to deforestation controls and the rising cost of walnut wood, combined with slow manual processes, many artisans are struggling to continue the craft. With few young carvers entering the trade, this elite tradition is gradually diminishing.",

  special: [
    "Made exclusively from walnut wood native to Kashmir — prized for strength and grain",
    "Carvings include motifs like chinar leaves, grapevines, lotuses, and paisleys",
    "Entirely hand-carved using traditional tools and age-old techniques",
    "Used in furniture, wall panels, jewelry boxes, trays, and décor items",
    "Represents centuries of Persian and Central Asian influence on Kashmiri culture"
  ],

  note: "Kashmir Walnut Wood Carving is not just woodwork — it's living heritage. Best suited for décor or statement furniture, it should be preserved with the care one gives to art. Display in respectful, climate-safe conditions.",

  message: "When you value Kashmir Walnut Wood Carving, you're not just appreciating beauty —\nYou're protecting a craft etched by hand into the memory of Kashmir.\nYour interest keeps chisels in motion and traditions breathing."
}
      },
      {
        image: 'https://www.gitagged.com/wp-content/uploads/2017/12/Bastar-Art-Online-GI-TAGGED-1.jpg',
        title: 'Bastar wooden craft ',
        placardMessage: "🕒 Small tribal items crafted in 10–20 hours",
        description: 'Bastar wooden craft from Chhattisgarh is a GI‑protected tribal art form dating back to the 10th century, carved by hand from local woods like teak, shisham, sal, and kikar. It vividly illustrates tribal mythology and everyday life—dancing figures, ritual pillars, masks, furniture—through deep relief motifs and raw, rustic finishes.',
        history: "Bastar wooden craft is a centuries-old tribal art form that originates from the Bastar district of Chhattisgarh, a region steeped in natural beauty and cultural diversity. Its roots can be traced as far back as the 10th century CE, when local tribal communities like the Badhai, Muria, and Gond began carving wood for both utilitarian and spiritual purposes. What began as a necessity—carving tools, doors, combs, cots, and other household items—gradually evolved into an intricate art form that conveyed stories, beliefs, and daily life through symbolic and decorative motifs. These early craftsmen often infused their work with tribal legends, deities, animals, forest life, and rituals, resulting in a deeply narrative and visually powerful style of woodwork. The region's dense forests provided a rich supply of hardwoods like teak, sal, shisham, and babool, which became the backbone of Bastar's woodcraft tradition. One of the most unique aspects of Bastar craft is that it is entirely handmade, using traditional tools that are often forged by the artisans themselves. Without the use of modern machinery, the craftsmanship reflects raw human skill, patience, and cultural expression. Historically, Bastar woodcraft held ritualistic significance and was prominently used in religious ceremonies, especially during local festivals such as Dussehra, where grand wooden chariots and ceremonial structures were created. Some of the earliest forms included wooden totems, masks, and statues used to honor village gods and ancestors. These items were not merely decorative; they served as mediums of communication with the divine and as a preservation of community heritage. As time passed, Bastar woodcraft expanded beyond its religious and domestic uses to include decorative and commercial products such as carved furniture, wall panels, tribal figurines, and accessories. Despite periods of decline due to industrialization and lack of awareness, the craft saw a revival through government and NGO support in the late 20th century. In 2008–2009, Bastar wooden craft received official recognition with a Geographical Indication (GI) tag, protecting its authenticity and boosting its presence in both national and international markets. Today, Bastar wooden craft is celebrated not only as a treasured cultural asset of Chhattisgarh but also as a symbol of India’s rich tribal heritage. It continues to be practiced by skilled artisans who pass down their knowledge through generations, ensuring the survival of this age-old craft. Its earthy aesthetics, storytelling elements, and handcrafted authenticity make it highly sought after by collectors, designers, and lovers of traditional Indian art.",
        process: [
          {
            title: 'Selection of Wood',
            description: 'Artisans begin by selecting durable and seasoned wood, usually teak, sal, shisham, or babool, sourced from the local forests of Bastar. The type of wood is chosen based on the intended product and design requirements.'
          },
          {
            title: 'Drying and Preparation ',
            description: 'The selected wood is cut into manageable sizes and naturally dried to reduce moisture. This prevents warping or cracking over time and ensures longevity.'
          },
          {
            title: 'Surface Levelling',
            description: 'The wooden blocks are leveled and shaped using traditional hand tools such as saws, axes, and planes to create a smooth base for carving.'
          },
          {
            title: 'Design Sketching',
            description: 'Traditional tribal designs are drawn directly onto the surface of the wood. These often depict folk tales, animals, deities, village life, or nature-inspired patterns.'
          },
          {
            title: 'Carving the Wood',
            description: 'Using chisels, hammers, and gouges, artisans carve the sketched designs in deep relief. This stage is highly intricate and requires skilled hands and precision to bring out detailed forms.'
          },
          {
            title: 'Detailing and Texturing',
            description: 'Fine details are added to enhance the figures and motifs. Patterns like dots, lines, and textures are meticulously hand-carved to create depth and richness.'
          },
          {
            title: 'Sanding and Finishing',
            description: 'Once carving is complete, the surface is smoothed using sandpaper or natural abrasives. This enhances the appearance and prepares the piece for final touches.'
          },
          {
            title: 'Polishing or Painting ',
            description: 'Depending on the artisan’s choice or market demand, the product may be polished with natural oils or painted using earthy colors to highlight its features while retaining the rustic charm.'
          },
          {
            title: 'Final Quality Check',
            description: 'The finished product is checked for consistency, durability, and aesthetic appeal before being sent to exhibitions, galleries, or customers.'
          }
        ],
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
        },
        care: {
  importance: "Bastar Wooden Craft is a tribal art form from Chhattisgarh, carved with raw, earthy aesthetics rooted in nature, folklore, and indigenous spirituality. It celebrates the everyday life and belief systems of the tribal communities, especially the Gonds and Marias.",

  dos: [
    "Clean gently using a dry, soft cloth or a soft-bristle brush to reach carved details",
    "Polish occasionally with natural oils like coconut or linseed oil to preserve wood quality",
    "Keep in shaded or indoor environments to protect from sun damage",
    "Use soft bases when placing on glass or marble to prevent scratches",
    "Display in areas free from moisture or high humidity"
  ],

  donts: [
    "Do not wash with water — excessive moisture weakens untreated wood",
    "Avoid exposure to direct sunlight or rain — it causes fading and warping",
    "Do not use chemical sprays or harsh cleaners",
    "Avoid placing heavy objects on intricately carved parts",
    "Do not stack or press pieces together without padding"
  ],

  endangered: "With increasing deforestation restrictions and market competition from mass-produced decor, traditional Bastar artisans face limited income. Younger generations often move away from carving due to lack of recognition and low commercial returns.",

  special: [
    "Carved from local woods like teak, sheesham, or sal — sourced sustainably",
    "Motifs inspired by tribal deities, animals, daily life, and mythology",
    "Carved entirely by hand using simple iron tools",
    "Often integrated with other tribal art forms like Dhokra metal casting",
    "Each piece is unique — no two carvings are ever identical"
  ],

  note: "Bastar Wooden Craft is not just decor — it’s tribal storytelling in wood. While rustic and sturdy in appearance, these items should be treated as sacred expressions of culture and handled with awareness of their cultural depth.",

  message: "When you admire Bastar Wooden Craft, you're not just supporting art —\nYou're preserving the voices and hands of India's forest-dwelling artisans.\nYour interest keeps their culture alive in every carved line and curve."
}
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ten_Playing_Cards_%28Ganjifa%29_LACMA_M.2001.210.4.1-.10.jpg',
        title: 'Ganjifa wooden craft',
        placardMessage: "🕒 A hand-painted card set takes 5–10 hours",
        description: 'Ganjifa is a historic hand‑painted wooden card game originating in Persia and flourishing in regions like Sawantwadi (Maharashtra) and Mysore (Karnataka). These circular cards feature vivid colours and mythological or courtly scenes, with sets like Dashavatara and Rashi reflecting local iconography.',
        history: "Ganjifa wooden craft is a distinguished example of India’s heritage of miniature painting and traditional craftsmanship, with roots tracing back to ancient and medieval India. The word Ganjifa comes from the Persian word “Ganjifeh,” meaning playing cards. This unique form of handmade playing cards was believed to have been introduced to India by the Mughals in the 16th century, though similar indigenous games existed even earlier. Over time, Indian artisans embraced the Persian style and infused it with local culture, mythological themes, and craftsmanship, creating a distinctively Indian art form that blended recreation with spiritual and philosophical storytelling.Initially, Ganjifa cards were made from various materials including palm leaves, cloth, paper, and later from wood—especially circular wooden discs that could be painted and preserved. The cards were lavishly hand-painted using natural colors, brushes made from fine animal hair, and often featured miniature depictions of gods, goddesses, kings, battles, animals, and floral motifs. These artworks were not mass-produced but were created with great devotion, making each set unique and culturally significant.During the Mughal era, Ganjifa gained popularity in royal courts as a noble pastime. However, the craft saw a deeper spiritual transformation under Hindu rulers, especially in regions like Puri (Odisha), Mysore (Karnataka), Nirmal (Telangana), and Sawantwadi (Maharashtra). Here, Ganjifa was no longer just a card game—it became a medium of religious expression. The Dashavatara Ganjifa, depicting the ten incarnations of Lord Vishnu, became especially prominent. Each suit in the game represented an avatar, with up to 120 intricately painted cards in a single set. The game was played in temples, monasteries, and among Brahmin scholars, making it an integral part of cultural and religious life.One of the most well-known centers for Ganjifa was Sawantwadi, a princely state in Maharashtra, where royal patronage helped keep the tradition alive. In Sawantwadi, artisans began painting Ganjifa cards on lacquered wooden discs, creating beautiful, durable, and highly detailed designs. The rulers of Sawantwadi actively encouraged the art and established schools and training programs to preserve it. Similarly, in Orissa (Odisha) and Karnataka, local variations of Ganjifa developed with distinct iconography and regional painting styles.Despite its glory, the popularity of Ganjifa started to wane during the colonial era and post-independence India. The rise of printed playing cards, western games, and modern entertainment led to a decline in demand. Many artisans left the craft due to lack of livelihood and support. By the late 20th century, Ganjifa was on the verge of extinction.Thankfully, recent years have seen a revival of interest in Ganjifa, driven by heritage enthusiasts, individual artists, NGOs, and museums. Efforts to preserve and promote the art through exhibitions, workshops, and academic research have helped bring Ganjifa back into public awareness. Today, surviving Ganjifa artists—especially in Sawantwadi, Odisha, and Karnataka—continue to practice and teach the craft, adapting it for decorative art, collectibles, and cultural exhibitions.Ganjifa wooden craft is now more than just a traditional game; it is a celebrated symbol of India’s rich storytelling tradition, artistic finesse, and cultural depth. Every card tells a story, every brushstroke carries heritage, and every set is a bridge between the past and the present.",
        process: [
          {
            title: 'Wood Preparation',
            description: 'The process begins with selecting soft, fine-grained wood like pine, eucalyptus, or Bombax (semul). The wood is cut into thin slices and sanded into smooth round or square shapes (traditionally round discs). These discs form the base of each Ganjifa card.'
          },
          {
            title: 'Smoothing and Priming',
            description: 'Each wooden piece is polished and coated with a natural primer—usually a mixture of chalk powder and tamarind seed paste or glue. This prepares the surface for painting and helps in better color absorption.'
          },
          {
            title: 'Drawing the Design',
            description: 'Traditional designs—often mythological, floral, or geometric—are sketched by hand using a pencil or charcoal. These outlines guide the miniature painting process. The themes typically relate to Hindu mythology, especially stories like Dashavatara, Ramayana, or Mahabharata.'
          },
          {
            title: 'Painting the Artwork',
            description: 'The designs are then hand-painted using natural mineral and vegetable colors. Brushes are made from fine squirrel or mongoose hair to allow detailed work. Each card is painted with immense care, with delicate lines, expressions, and ornaments reflecting miniature painting techniques.'
          },
          {
            title: 'Layering and Detailing',
            description: 'Multiple color layers are applied, and fine detailing is added in gold, silver, or contrasting colors for depth and clarity. This step requires great precision and steady hands, often taking several hours per card.'
          },
          {
            title: 'Drying and Final Touches',
            description: 'Once painted, the cards are dried naturally. A protective lacquer or varnish coating is applied to preserve the artwork and give the cards a glossy finish. This also makes the cards more durable and resistant to wear.'
          },
          {
            title: 'Packaging and Assembly',
            description: 'A full Ganjifa set may contain up to 120 cards, depending on the theme. The finished cards are carefully arranged, sometimes in handcrafted boxes, and prepared for display, sale, or game play.'
          }
        ],
        images: [
          "https://www.memeraki.com/cdn/shop/files/Wooden-Ganjifa-Bookmarks-Elephant-Lion-Camel-Peacock-by-Sawant-Bhonsle-1_1024x.jpg?v=1726240122",
          "https://www.memeraki.com/cdn/shop/products/Dashavtar-Darchitri-Ganjifa-set-of-120-handpainted-Ganjifa-cards-2_1024x.jpg?v=1726240322",
          "https://asiainch.org/wp-content/uploads/2019/09/GANJIFFA.jpg",
          "https://www.memeraki.com/cdn/shop/products/Tic-Tac-Toe-handpainted-in-Ganjifa-art-style-1_1024x.jpg?v=1726240294",
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhcvdmGczTZ8UwZ0go4x5HHOStHC709MD83cQuiphmL9HJLt5t1XV8IrapEa3uVtBVpTSG3TfXOzzGBrLou0jr0O7aG-RziF-Cd4QH6MV7wDNIk7cXz0G6nALyhbdCgGWKknIIed6rRbs/s1600/ganjifa-cards-img_2877_anurag-mallick.jpg",
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj22VjTUExioYgmRxhcOMMV1qCF6o20GpopA9zSqICuydBibXGSeGg3RfX3YLGF0U4vA6kDPoFR_uGumYoD7LyVr-HCb38pY1TExFYnjFe9xsZhFJHhWhTPbSt5fCaF8THW5buaFJ3bAuM/s400-rw/ganjifa-dashavatara-cards-of-vishnupur-west-bengal-BP16_l.jpg"
        ],
        clusterLocation: "Mysuru (Mysore), Karnataka",
        clusterDetails: {
          district: 'Mysuru (Mysore), Karnataka',
          population: 'Mysuru has over 1 million people; Ganjifa art is preserved by a few master artisans in specific parts of the city and nearby villages',
          language: 'Kannada',
          bestTime: 'October to March (pleasant climate and Dasara festival season)',
          stay: 'Mysuru city (wide range of accommodations including heritage stays and hotels)',
          howToReach: 'Mysuru is well-connected by train and road; nearest airport: Mysuru Airport (domestic) or Kempegowda International Airport, Bengaluru (about 170 km)',
          localTravel: 'Auto-rickshaws, city buses, taxis, and rental bikes within Mysuru',
          mustEat: 'Mysore Masala Dosa, Mysore Pak, Ragi Mudde, and Filter Coffee',
        },
        care: {
  importance: "Ganjifa Wooden Craft is a rare and historic form of hand-painted playing cards, traditionally made on circular wooden pieces. Originating from royal courts and spiritual centers, it blends artistic finesse with mythology and storytelling, especially from the Dashavatara and Ramayana.",

  dos: [
    "Wipe gently with a soft, dry cloth to preserve the painted surface",
    "Store in a cool, dry place away from humidity and direct sunlight",
    "Keep in a cushioned box or fabric-lined case to avoid scratches or fading",
    "Handle with clean, dry hands to protect intricate artwork",
    "Use archival-grade storage if preserving for long-term display"
  ],

  donts: [
    "Do not use water, solvents, or wet cloth — paint may smudge or peel",
    "Avoid stacking cards without a protective layer between each",
    "Do not expose to heat or sunlight — it fades the natural dyes and artwork",
    "Avoid placing under heavy objects or bending the wood surface",
    "Do not use chemical varnish unless advised by restoration experts"
  ],

  endangered: "Ganjifa art has nearly vanished due to lack of awareness and patronage. As handmade cards were replaced by factory-made decks, many artists abandoned the craft. Only a few families in places like Maharashtra and Odisha still continue this legacy.",

  special: [
    "Traditionally painted using natural dyes and fine squirrel-hair brushes",
    "Themes often drawn from Hindu mythology — especially the Dashavatara",
    "Crafted on small circular or square wooden/bamboo discs",
    "Each set is hand-painted with elaborate borders, figures, and symbols",
    "Recognized by UNESCO as an endangered traditional art form"
  ],

  note: "Ganjifa Wooden Craft is a collectible — more suited for décor and cultural display than for regular gameplay. Preserve it as you would ancient manuscripts or miniature paintings: delicately, respectfully, and with pride.",

  message: "When you cherish Ganjifa Wooden Craft, you're not just holding painted wood —\nYou're holding fragments of India's royal and spiritual legacy.\nYour interest is the hand that turns history into heritage."
}
      },
      {
        image: 'https://lh3.googleusercontent.com/ci/AL18g_S8HZ7pumB5AvYFT0AzuRRkJFLE9Y1lgOWIFP665UKfZqlS-SCsIE60NAkskHI5A-UQWW_ulorr',
        title: 'Sandook boxes',
        placardMessage: "🕒 Antique-style decorated trunks need 20–40 hours",
        description: 'Sandook boxes are traditional Rajasthani wooden chests, richly decorated with carvings, meenakari or brass fittings, and vibrant motifs. Used historically to store valuables, clothing, or linens, they blend functionality with exquisite artistry and often appear in bridal trousseaus or royal interiors',
        history: "The Sandook box, also known as a 'Sandooq', is a traditional wooden chest or trunk deeply rooted in the domestic and cultural life of India for centuries. Historically, these boxes served as personal storage chests, used by families to safely keep valuables such as jewelry, important documents, heirlooms, textiles, and ceremonial items. The word 'Sandook' has Persian and Arabic origins, meaning 'chest' or 'trunk,' and its usage spread widely across India during the Mughal and Sultanate periods, when intricate wooden craftsmanship flourished under royal patronage.These chests were often considered symbols of prosperity and family legacy, passed down through generations. In many Indian households, especially in Rajasthan, Gujarat, Maharashtra, and Uttar Pradesh, the Sandook was more than a utility object—it was an ornamental item, intricately carved and sometimes inlaid with brass, iron studs, or painted motifs reflecting regional styles. In some communities, a beautifully decorated Sandook was gifted to brides during their marriage, filled with clothes, jewelry, and dowry items, signifying the start of a new chapter.Over time, the Sandook evolved in design, showcasing the diverse woodcraft traditions of India—from Bastar’s tribal carvings to Rajasthan’s painted boxes and Saharanpur’s detailed floral motifs. Some Sandooks were made entirely of wood, while others incorporated metal locks, hinges, and reinforcements for durability. Despite modern furniture replacing traditional storage solutions, Sandooks remain popular today for their heritage value, aesthetic appeal, and timeless craftsmanship.Collectors, designers, and heritage connoisseurs now seek vintage and newly crafted Sandook boxes as both functional and decorative pieces—a testimony to India’s enduring legacy of woodworking and cultural storytelling through utility art.",
        process: [
          {
            title: 'Wood Selection',
            description: 'The process begins with the careful selection of high-quality wood such as teak, mango, sheesham (Indian rosewood), or sal, known for their strength, durability, and grain patterns. The wood is seasoned to remove moisture and prevent cracking or warping.'
          },
          {
            title: 'Design & Measurement',
            description: 'Skilled artisans plan the dimensions and structure of the Sandook box based on its intended purpose—small keepsake chests, bridal trunks, or large storage units. A blueprint or chalk outline is drawn directly on the wood panels.'
          },
          {
            title: 'Cutting and Assembly',
            description: 'The wood is cut into required panels for the base, sides, lid, and inner compartments. These panels are then joined using traditional woodworking techniques like dovetail joints or tongue and groove, ensuring a sturdy frame without modern screws or nails.'
          },
          {
            title: 'Carving and Decoration',
            description: 'The surface of the Sandook is often hand-carved with floral, geometric, tribal, or symbolic motifs, depending on regional styles. Some artisans also use techniques like inlay work, embossing, or metal studding to enhance the visual appeal.'
          },
          {
            title: 'Fitting Hinges and Locks',
            description: 'Traditional iron or brass hinges, latches, and padlock holders are then fixed to the lid and front face. Many Sandooks also feature metal handles on the sides for portability and decorative corner brackets for added durability.'
          },
          {
            title: 'Sanding and Smoothing',
            description: 'The entire piece is then hand-sanded to remove any rough edges, align joints, and smoothen the carved surfaces. This helps in preparing the wood for finishing.'
          },
          {
            title: 'Polishing or Painting',
            description: 'Depending on the design, the box is either polished with natural oils or wax to retain its wooden grain or painted with vibrant traditional patterns using natural or modern pigments. Some Sandooks are also finished with antique patina to give them a vintage look.'
          },
          {
            title: 'Final Inspection and Finishing Touches',
            description: 'The box undergoes a final quality check. Any minor adjustments are made, and sometimes felt lining or compartments are added inside. The final product is sturdy, ornamental, and ready for use or display.'
          }
        ],
        images: [
          "https://th.bing.com/th/id/OIP.H2TUm6vhSgHh1WnG-U_6UAHaGm?rs=1&pid=ImgDetMain",
          "https://th.bing.com/th/id/OIP.cEOZ8g8er6zqaWnrEy3nZwHaE8?rs=1&pid=ImgDetMain",
          "https://th.bing.com/th/id/OIP.yt0ZFhv-Yy9v99Slpfd6WgHaF_?rs=1&pid=ImgDetMain",
          "https://evolvekart.com/cdn/shop/products/trunk-sandook-wooden-sheesham-wood-furniture-online-1.jpg?v=1604495624",
          "https://cdn.shopify.com/s/files/1/0326/5760/4744/products/trunk-coffee-table-hathi-storage-sandook-evolvekart-doors_1024x1024.jpg?v=1624442755"
        ],
        clusterLocation: "Jodhpur, Rajasthan",
        clusterDetails: {
          district: 'Jodhpur, Rajasthan',
          population: 'Jodhpur is a large city with over 1 million people; many artisans and small workshops are dedicated to crafting and carving Sandook boxes',
          language: 'Hindi, Marwari',
          bestTime: 'October to March (pleasant weather and tourist season)',
          stay: 'Jodhpur city (plenty of options including heritage havelis and hotels)',
          howToReach: 'Well-connected by air (Jodhpur Airport), train, and road from major cities like Jaipur, Delhi, and Udaipur',
          localTravel: 'Auto-rickshaws, tuk-tuks, app-based cabs, and local buses',
          mustEat: 'Mirchi Bada, Mawa Kachori, Dal Baati Churma, and Gatte ki Sabzi',
        },
        care: {
  importance: "Sandook boxes, traditionally used as heirloom chests or dowry trunks, are rich in history and craftsmanship. Crafted from sturdy wood and often adorned with metalwork or carvings, they reflect a bygone era of royal storage, protection, and artistic pride.",

  dos: [
    "Dust regularly with a soft, dry cloth to maintain surface details",
    "Polish wooden surfaces occasionally with natural or beeswax-based polish",
    "Use anti-rust oil or cotton swabs for maintaining metallic elements",
    "Store in cool, dry spaces to prevent wood from warping or swelling",
    "Place felt or rubber padding under heavy Sandooks to protect flooring"
  ],

  donts: [
    "Do not expose to direct sunlight — it may fade colors or dry out the wood",
    "Avoid placing in damp or humid areas — can cause mold or rust",
    "Do not use harsh cleaners or water — especially on painted or antique boxes",
    "Avoid dragging the box on rough surfaces — it may damage the base or legs",
    "Do not overload with excessive weight that strains hinges or joints"
  ],

  endangered: "With modern storage solutions taking over, traditional Sandook making is now rare. The demand has declined, and only a few artisan families continue crafting or restoring them, often struggling to source materials and preserve the intricate heritage work.",

  special: [
    "Traditionally made from teak, mango, or rosewood for durability",
    "Often feature hand-carved motifs, brass inlay, or iron strapping",
    "Some include secret compartments or locking mechanisms",
    "Used historically in weddings, dowries, or as secure storage in royal homes",
    "Now adapted into heritage furniture and vintage-style décor"
  ],

  note: "Sandook boxes are heritage objects — treat them as both utility and art. They're best preserved in a stable environment and serve beautifully as centerpieces, trunks, or heirloom décor with cultural value.",

  message: "When you admire a Sandook box, you're not just seeing a trunk —\nYou're unlocking stories of families, traditions, and forgotten craftsmanship.\nYour interest gives old-world artistry a place in modern homes."
}
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
        placardMessage: "🕒 Shaping + heating spans over 30–50 hours",
        description: 'Thatheras’ metal craft is an age-old Punjabi tradition of hand-beating brass, copper, and kansa into utensils and decorative ware. Honoured by UNESCO as an Intangible Cultural Heritage since 2014, each piece is forged, shaped, and polished using ancestral techniques passed down through generations.',
        history: "Thathera metalworking traces its origins over 200 years ago, rooted in the reign of Maharaja Ranjit Singh in the 19th century. During this time, skilled brass and copper artisans—many from Kashmir and Kujranwala (now in Pakistan)—settled in Jandiala Guru, near Amritsar, forming a vibrant community of Thatheras (metal-beaters) and Kaseras (traders) They mastered the forging techniques—rather than casting—to hand-shape utensils by hammering heated metal plates in small, wood-fired furnaces, joining parts via brazing and riveting, and polishing the vessels before treating them with acid, sand, and tamarind to achieve a lustrous finish In the late 19th and early 20th centuries, Jandiala Guru became a bustling metalware hub, with Thatheras producing everything from household kitchenware—karahis, plates, storage pots—to ceremonial utensils favored by Gurdwaras and royal courts The renowned Amritsar District Gazetteer (1883) recorded brisk exports of brass and copper wares, indicating the craft’s deep economic roots even then However, post-independence and especially after the 1960s, the craft nearly vanished. Competition from aluminum and plastic products, rising fuel and raw material costs, changing market dynamics, and fading interest among youth reduced practicing families from around 500 to just 15–30 householdsA pivotal moment occurred in 2014, when UNESCO inscribed the Thathera utensil craft of Jandiala Guru on its Representative List of the Intangible Cultural Heritage of Humanity, marking it as the first living metal craft from India to gain this honor This recognition led to the launch of Project Virasat, backed by the Deputy Commissioner of Amritsar and a team from Enactus SRCC, which later evolved into the Punjabi Thathera Art Legacy (P‑TAL) Through this initiative, artisans were unified, new designs were developed, youth were encouraged back into the craft, and market access—including export platforms—was achieved. Today, P‑TAL supports artisans across India, enhancing their incomes by over 600% and reviving the signature ‘thak-thak’ of hammering metal Although modern challenges like cost pressures and changing consumer habits persist, Thathera craftsmanship has harnessed renewed momentum. With its century-old forging techniques and community identity preserved, this centuries-old metal craft stands as a vibrant symbol of Punjab’s resilience and heritage. Driven by global recognition, visionary revival efforts, and growing appreciation for traditional cookware, the Thatheras of Jandiala Guru are ensuring their craft endures into the future.",
        process: [
          {
            title: 'Material Selection',
            description: 'The process begins by selecting sheets of pure brass or copper. These metals are chosen for their traditional significance, durability, and Ayurvedic health benefits.'
          },
          {
            title: 'Metal Cutting',
            description: 'Artisans cut the metal sheets into precise circular shapes based on the size and type of utensil being made.'
          },
          {
            title: 'Heating',
            description: 'The cut metal discs are heated in a wood-fired furnace to soften them. This traditional heating makes the metal pliable for shaping.'
          },
          {
            title: 'Hammering (Beating)',
            description: 'After heating, the softened metal is hammered by hand over iron anvils to create the desired shape. This stage is known as thak-thak, after the rhythmic sound made during hammering. It requires immense skill and experience to get the shape and thickness just right.'
          },
          {
            title: 'Joining and Assembly',
            description: 'If the product requires separate parts—like a lid, spout, or base—they are joined using a brazing technique. This involves fusing parts with a filler metal, followed by further hammering to strengthen joints.'
          },
          {
            title: 'Surface Finishing',
            description: 'The surface is then scrubbed and polished using a mix of acid, tamarind, and sand, which cleans the metal and gives it a natural shine without chemicals.'
          },
          {
            title: 'Final Polishing and Quality Check',
            description: 'Each product is checked for dents, balance, and finish. The utensil is then polished by hand to enhance its glow, while retaining the handcrafted feel.'
          },
          {
            title: 'Etching or Custom Detailing (Optional)',
            description: "Some pieces may be engraved or marked with custom motifs, family symbols, or religious patterns, depending on the client's request or traditional use."
          }
        ],
        images: [
          "https://lh3.googleusercontent.com/ci/AL18g_Td1BoWEvg4rcd6wzn3H0LoL_vilKq-ZtYHdP8k9a2-3bqfhxoysH85CVPPdvvyUL1ICugxiA=s1200",
          "https://cdn.shopify.com/s/files/1/0503/5442/1920/files/4-min_480x480.png?v=1706601458",
          "https://d2vbj8g7upsspg.cloudfront.net/filters:format(webp)/30-stades/media/post_attachments/kTLNiL4tkJmf9mvRC8hV.jpg",
          "https://img-cdn.publive.online/fit-in/1200x675/30-stades/media/post_banners/dAAY8TcBiFwjJykdRaVa.jpg",
          "https://lh3.googleusercontent.com/ci/AL18g_SHeLuNdTz7-A30vJRxnnqKtxl4opPqoazfmKknkFgN6HX-iK-IxKN9NbIqTRarGTjEe1bMYW0",
          "https://vaishalisatelier.com/cdn/shop/files/8.jpg?v=1708870696&width=533"
        ],
        clusterLocation: "Jandiala Guru, Amritsar District, Punjab",
        clusterDetails: {
          district: 'Jandiala Guru, Amritsar District, Punjab',
          population: 'Jandiala Guru is a small town; the Thathera community here has preserved this traditional brass and copper craft for generations',
          language: 'Punjabi, Hindi',
          bestTime: 'November to February (cool weather and festival season)',
          stay: 'Amritsar city (just ~10 km from Jandiala Guru; wide range of hotels)',
          howToReach: 'Nearest airport: Sri Guru Ram Dass Jee International Airport, Amritsar; also well-connected by train and road from major North Indian cities',
          localTravel: 'Auto-rickshaws, cycle rickshaws, and taxis from Amritsar to Jandiala Guru',
          mustEat: 'Amritsari Kulcha, Chole, Lassi, and Makki di Roti with Sarson da Saag',
        },
        care: {
  importance: "Thatheras Metal Craft is a traditional art of hand-hammering brass and copper into utensils and decorative items. Rooted in the town of Jandiala Guru in Punjab, this craft is recognized by UNESCO for its cultural significance and technical finesse.",

  dos: [
    "Clean gently with a mixture of lemon and salt or mild brass cleaner to maintain shine",
    "Wipe dry immediately after cleaning to prevent water spots or corrosion",
    "Store in a dry place and keep away from direct moisture or rain",
    "Polish occasionally with natural polish or a soft cotton cloth to maintain luster",
    "Use soft scrubbers like sponge or cloth for cleaning — not metal pads"
  ],

  donts: [
    "Do not use abrasive cleaners or steel wool — they scratch the surface",
    "Avoid soaking in water for long periods — it may tarnish the metal",
    "Do not leave acidic food or liquids in the vessels for long durations",
    "Avoid exposure to direct flame unless the product is certified for cooking",
    "Do not stack pieces without padding — may cause dents or scratches"
  ],

  endangered: "With the rise of steel and plastic utensils, the demand for handcrafted metalware declined sharply. Thatheras face low income and lack of raw materials, leading many to abandon the trade. Efforts are ongoing to revive this dying tradition through design and policy support.",

  special: [
    "Made by skilled hammering techniques to shape metal sheets by hand",
    "Commonly uses copper, brass, and kansa (bell metal)",
    "Utensils believed to have Ayurvedic health benefits",
    "Tools and techniques passed down through generations without formal plans",
    "Recognized by UNESCO as Intangible Cultural Heritage in 2014"
  ],

  note: "Thatheras’ creations are not only utensils — they are utility blended with art. When treated with care, these pieces can last generations and serve as both functional and cultural heirlooms.",

  message: "When you choose Thatheras metalware, you’re not just picking tradition —\nYou’re fueling the forge of an ancient Punjabi legacy.\nYour interest shapes the future of a craft forged in fire and heritage."
}
      },
      {
        image: 'https://lsmedia.linker-cdn.net/282256/2021/7101757.jpeg?width=1200&height=1125',
        title: 'Dhokra',
        placardMessage: "🕒 Lost-wax casting process takes ~20 hours",
        description: 'Dhokra is a 4,000+ year old tribal metalworking tradition, using the ancient lost-wax casting technique to create enchanting brass or bronze figurines, jewelry, and utility items. Celebrated for its primitive simplicity and rustic charm, motifs often depict animals, tribal deities, or daily life scenes.',
        history: "Dhokra art, also known as Dokra metal craft, is one of the oldest surviving handicrafts in the world and a unique symbol of India’s tribal artistry and metallurgical legacy. Its origins date back to the Indus Valley Civilization, around 2300 BCE, with the iconic “Dancing Girl” figurine from Mohenjo-daro considered a classic example of the ancient lost-wax casting technique that Dhokra artisans continue to use today. The name 'Dhokra' is derived from the Dhokra Damar tribes of West Bengal, who were among the first to practice this sophisticated craft using non-ferrous metals like brass and bronze. Over centuries, these nomadic tribes migrated across central and eastern India, establishing Dhokra craft clusters in Odisha, Chhattisgarh, Jharkhand, Madhya Pradesh, and Telangana, each developing its own regional variations while staying true to the age-old methods. What sets Dhokra apart is its primitive simplicity, natural themes, and timeless elegance. Traditionally, Dhokra artisans create decorative and ritualistic items such as figurines of tribal deities, animals, lamps, jewellery, and utility objects. Common motifs include elephants, horses, peacocks, trees of life, and village scenes — often expressed with rhythmic patterns, coiled forms, and symbolic detailing. These objects are not only artistic but also spiritual and cultural, reflecting the belief systems, daily lives, and folklore of tribal communities. Dhokra’s aesthetic, often compared to modern art due to its abstract and earthy feel, has captured the attention of art collectors and designers around the world.Each Dhokra piece is handcrafted using the lost-wax casting method, a painstaking process involving clay modeling, wax layering, and metal pouring, ensuring that every item is unique. Unlike mass-produced items, no mold is reused, meaning every product carries its own story and character. Despite its ancient roots, Dhokra has remained relevant due to its adaptability. In recent decades, Dhokra artisans have innovated by creating modern lifestyle products such as home décor pieces, fashion accessories, and corporate gifts while retaining their traditional techniques and tribal identity.Some of the most prominent centers of Dhokra art today include Bastar in Chhattisgarh, Bikna and Dwariapur in West Bengal, Khurda and Mayurbhanj in Odisha, and Adilabad in Telangana, where the art was awarded a Geographical Indication (GI) tag in 2018. This GI status has helped protect the intellectual property of the craft and brought renewed attention to its cultural significance. Various government initiatives, NGOs, and design institutions have also stepped in to preserve and promote Dhokra by organizing exhibitions, training programs, and digital marketplaces.Despite challenges such as rising raw material costs, competition from imitation products, and migration of youth to urban jobs, Dhokra continues to survive and evolve. Its success lies in the resilience of its artisans, the timeless appeal of handmade craftsmanship, and the growing appreciation for sustainable and culturally rich products. Today, Dhokra is not just a relic of ancient India—it is a living tradition, carrying forward the legacy of India's tribal communities through fire, metal, and unmatched creativity.",
        process: [
          {
            title: 'Creating the Core Model (Clay Core)',
            description: 'A rough base of the intended figure is first shaped using locally sourced clay. This core forms the basic structure of the final object and is sun-dried until it hardens.'
          },
          {
            title: 'Layering with Beeswax (Wax Model)',
            description: 'Melted beeswax or a wax-resin mixture is rolled into fine threads or sheets and carefully wrapped around the clay core to form the detailed features of the final design. This is where the artisan adds all intricate elements like facial features, jewelry, ornaments, and patterns.'
          },
          {
            title: 'Applying the Outer Clay Layer (Mold)',
            description: 'Another layer of fine clay is then applied over the wax model to create the mold. This is done in multiple coatings, forming a hardened outer shell. Small vents are made to allow the wax to escape and metal to be poured in.'
          },
          {
            title: 'Drying the Mold',
            description: 'The entire structure is sun-dried thoroughly, making it ready for the firing and casting stage.'
          },
          {
            title: 'Heating and Wax Removal',
            description: 'The mold is fired in a furnace. As the temperature rises, the wax inside melts and drains out through the vents — leaving a hollow cavity between the core and outer clay shell. This is the critical step in the lost-wax process.'
          },
          {
            title: 'Pouring the Molten Metal',
            description: 'Molten brass or bronze (a mix of copper, zinc, and other metals) is poured into the cavity. It fills the space left by the wax, taking the exact shape of the artisan’s design.'
          },
          {
            title: 'Cooling and Breaking the Mold',
            description: 'Once the metal has cooled and solidified, the outer clay mold is carefully broken, revealing the raw Dhokra metal figure inside.'
          },
          {
            title: 'Finishing and Polishing',
            description: "The final product is cleaned, polished, and refined. Sometimes, patina or coloring agents are used to enhance the visual appeal. Each piece is unique — no two Dhokra artifacts are ever exactly the same."
          }
        ],
        images: [
          "https://housenama.com/cdn/shop/articles/the-art-of-dhokra-handmadeinindia-housenama.jpg?v=1720862777",
          "https://www.gitagged.com/wp-content/uploads/2020/10/Bastar-Dhokra-Swan-Art-GiTAGGED-6.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdPMHXrSUeI0JCtz3b65vnIj5CeZiz7yZJw&s",
          "https://theindiacrafthouse.com/cdn/shop/products/DhokraCraftCurio-CuriousDeer-SKD19@2x.jpg",
          "https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2022/12/dhokra.jpg",
          "https://www.shambhavicreations.co.in/cdn/shop/files/LRM_EXPORT_106553940619729_20190719_134929160_1_-min_d333e2aa-657d-4169-8674-bb4af7c05201_1080x.jpg?v=1675081508",
          "https://www.indianvillez.com/cdn/shop/articles/20200608103803_IMG_2675.jpg?v=1600935067"
        ],
        clusterLocation: "Bastar, Chhattisgarh",
        clusterDetails: {
          district: 'Bastar, Chhattisgarh',
          population: 'Bastar has around 1.4 million people; Dhokra is made by tribal communities like the Ghadwas in small village clusters',
          language: 'Hindi, Chhattisgarhi, Gondi',
          bestTime: 'October to February (comfortable weather and tribal festivals)',
          stay: 'Jagdalpur (main town in Bastar district with hotels and lodges)',
          howToReach: 'Nearest airport: Raipur (approx. 300 km); Jagdalpur has a railway station and road connectivity',
          localTravel: 'Auto-rickshaws, local buses, and hired cabs for nearby tribal villages',
          mustEat: 'Faraa (rice dumplings), Chana Samosa, Aamat (tribal stew), Mahua-based sweets',
        },
        care: {
  importance: "Dhokra is one of the oldest known metal casting techniques in the world, practiced by tribal communities in India using the lost-wax method. Its rustic elegance and handmade imperfections make every piece unique — a true expression of indigenous creativity and tradition.",

  dos: [
    "Dust regularly with a soft, dry cloth to retain the natural shine",
    "Use a soft-bristled brush to clean intricate or hard-to-reach carvings",
    "Apply a very small amount of coconut or olive oil occasionally to prevent dullness",
    "Keep in a dry, shaded space away from excessive humidity",
    "Handle gently — especially items with thin or protruding features"
  ],

  donts: [
    "Do not wash with water — moisture may cause tarnish or corrosion",
    "Avoid chemical cleaners or metal polish — they can damage the patina",
    "Don’t expose to direct sunlight for prolonged periods — it can fade the surface",
    "Avoid dropping or placing heavy objects on it — Dhokra is fragile despite being metal",
    "Do not store in plastic or airtight containers — can trap moisture"
  ],

  endangered: "Dhokra artisans face challenges like lack of market access, modern imitation products, and decreasing interest among youth due to low financial returns. While still practiced in states like Chhattisgarh, Odisha, and West Bengal, sustaining the tradition is a growing concern.",

  special: [
    "Uses the ancient lost-wax casting technique (over 4,000 years old)",
    "Crafted by tribal artisans, especially from the Damar tribe",
    "No two Dhokra pieces are identical — each mold is destroyed after one use",
    "Themes include tribal deities, animals, musicians, and village scenes",
    "Popular in museums and collectors’ circles for its raw, earthy aesthetic"
  ],

  note: "Dhokra is best treated as a decorative or symbolic object rather than functional ware. Appreciate it as tribal fine art — each piece carries ancestral stories and timeless techniques carved in bronze.",

  message: "When you value Dhokra, you’re not just collecting metal —\nYou’re preserving the spirit of tribal memory and timeworn tradition.\nYour interest is what keeps this ancient flame from fading into silence."
}
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bidriware_hookah_base_1750-1800.jpg/640px-Bidriware_hookah_base_1750-1800.jpg',
        title: 'Bidriware',
        placardMessage: "🕒 Inlay + oxidizing = 25–40 hours per elegant item",
        description: 'Bidriware is a 14th-century metal craft from Bidar, Karnataka, featuring a blackened brass and zinc base inlaid with gleaming silver or occasionally gold. Each piece showcases exquisite floral, geometric, and figurative motifs, created through freehand engraving and a unique soil-based oxidation process.',
        history: "Bidriware is one of India’s most iconic and refined metal crafts, renowned for its stunning contrast of lustrous silver inlay work against a deep black metal background. This distinctive craft originated in the town of Bidar in present-day Karnataka during the 14th century, under the rule of the Bahmani Sultanate. The name Bidri is derived directly from the town of Bidar, which remains the chief hub of production to this day.The art of Bidriware is believed to have been brought to India by skilled artisans from Persia, during the reign of Sultan Ahmed Shah Wali Bahmani. These Persian craftsmen introduced the damascening technique — an art form where precious metals are inlaid into a contrasting base — which was later adapted by local Indian artisans to form a unique Deccan style. Over time, the craft evolved as it absorbed Persian floral patterns, Turkish geometric designs, and Mughal elegance, fusing seamlessly with Indian sensibilities and religious symbolism. This synthesis created a highly distinctive style that quickly gained popularity in royal courts across South India.During the rule of the Mughals and the Deccan Sultanates, Bidriware became a symbol of status and sophistication. It was used to create luxurious items such as hookah bases, attar (perfume) bottles, paan boxes, trays, vases, candle stands, and jewelry boxes, many of which were exchanged as royal gifts and dowry items. The art was particularly favored in Hyderabad and other parts of the Deccan, where Nawabs and nobles patronized the craft and encouraged its development.What makes Bidriware truly unique is its striking black finish, which is achieved using a time-honored secret: a special blackening solution made from soil collected inside the Bidar Fort. This soil, rich in alkaline content and untouched by sunlight or water for centuries, reacts with the zinc-copper alloy base to turn it deep black — allowing the inlaid silver, brass, or gold patterns to stand out in bold relief.Bidriware is not just an artistic craft, but a living symbol of cultural synthesis, showcasing the fusion of Islamic, Persian, Turkish, and Indian traditions. While the number of skilled artisans has dwindled in the face of industrialization and cheaper alternatives, a few dedicated families in Bidar continue to preserve this heritage. The craft has been recognized with a Geographical Indication (GI) tag, ensuring its identity and originality are protected.Today, Bidriware is admired around the world for its timeless aesthetic and intricate workmanship. Museums, collectors, and art lovers treasure it for both its beauty and its rich cultural history. Its continued presence in exhibitions, state emporiums, and designer boutiques ensures that Bidriware lives on not just as a decorative art, but as a story of India's diverse artistic soul — cast in metal and adorned with history.",
        process: [
          {
            title: 'Preparation of the Base Alloy',
            description: 'The base of Bidriware is made from an alloy of zinc and copper, with zinc as the primary metal. The metals are melted and cast into molds to form the desired shape — such as a vase, box, or bowl.'
          },
          {
            title: 'Smoothening the Surface',
            description: 'Once cast, the object is filed and smoothened using hand tools and emery paper to create a perfectly even surface. This prepares the surface for intricate designs.'
          },
          {
            title: 'Designing and Engraving',
            description: "Traditional patterns — often floral, geometric, or Mughal-inspired — are drawn directly onto the metal surface. Using a sharp steel stylus called a 'kalam', skilled artisans engrave these designs into the surface by hand."
          },
          {
            title: 'Inlaying Silver',
            description: 'The engraved grooves are then filled with pure silver wires or sheets, which are carefully hammered and pressed into the patterns. This inlay work is the most distinctive feature of Bidriware, demanding precision and steady hands.'
          },
          {
            title: 'Smoothening the Surface Again',
            description: 'After the silver is inlaid, the surface is once again filed and buffed so that both the silver and the base metal are flush, giving a uniform look before blackening.'
          },
          {
            title: 'Blackening the Base Metal',
            description: 'The final and most magical step is the oxidation process. The object is dipped in a special paste made from soil sourced exclusively from inside the Bidar Fort, which is rich in nitrate and has remained untouched for centuries. This reacts with the zinc alloy, turning the surface jet black, while the silver inlay remains bright and untarnished — creating the signature contrast of Bidriware.'
          },
          {
            title: 'Finishing and Polishing',
            description: 'Lastly, the object is cleaned, polished, and sometimes coated with wax to enhance its shine and protect the finish. The result is a stunning piece of art — elegant, durable, and steeped in tradition.'
          }
        ],
        images: [
          "https://static.toiimg.com/photo/imgsize-866766,msid-68102322/68102322.jpg",
          "https://s7ap1.scene7.com/is/image/incredibleindia/bidriware-bidar-karnataka-craft-hero?qlt=82&ts=1726641338177",
          "https://d35l77wxi0xou3.cloudfront.net/collab/craft1582795978Bidri-Banner.jpg",
          "https://images.indianexpress.com/2023/08/shutterstock_1846909696.jpg?resize=600,401",
          "https://cdn.shopify.com/s/files/1/0582/4007/3878/files/bidriware.jpg?v=1634582546",
          "https://myflia.wordpress.com/wp-content/uploads/2020/02/naan.png?w=590",
          "https://images.tribuneindia.com/cms/gall_content/2019/2/2019_2$largeimg09_Saturday_2019_111120501.jpg"
        ],
        clusterLocation: "Bidar, Karnataka",
        clusterDetails: {
          district: 'Bidar, Karnataka',
          population: 'Bidar has around 2 lakh (200,000) people; Bidriware is crafted by skilled metal artisans in small family-run workshops',
          language: 'Kannada, Urdu',
          bestTime: 'October to February (pleasant weather for sightseeing and exploring artisan hubs)',
          stay: 'Bidar city (offers budget to mid-range hotels)',
          howToReach: 'Nearest airport: Hyderabad (about 140 km away); Bidar is connected by train and road from Hyderabad, Bengaluru, and Pune',
          localTravel: 'Auto-rickshaws, taxis, and buses within Bidar',
          mustEat: 'Hyderabadi Biryani, Jolad Roti with Brinjal Curry, and local sweets like Kunda',
        },
        care: {
  importance: "Bidriware is an exquisite form of metal inlay craft from Bidar, Karnataka, combining blackened alloy with delicate silver patterns. It’s a blend of Persian artistry and Indian tradition, symbolizing elegance, heritage, and centuries of skilled craftsmanship.",

  dos: [
    "Gently rub with a soft, dry cotton cloth to maintain the metallic shine",
    "Use a few drops of coconut or olive oil on the surface to restore luster",
    "Keep in a dry place and store wrapped in soft cloth when not in use",
    "If tarnished, lightly rub silver parts with a silver cleaning cloth — avoiding the blackened surface",
    "Display away from direct sunlight to preserve contrast between silver and black background"
  ],

  donts: [
    "Do not wash with water or soap — moisture may corrode the blackened surface",
    "Avoid using metal polish or abrasive materials — they damage the inlay",
    "Never scrub or soak — especially pieces with fine detailing",
    "Avoid contact with perfumes, sprays, or acidic substances",
    "Do not store in damp or humid environments — it weakens the finish"
  ],

  endangered: "Bidriware is declining due to its labor-intensive process, lack of awareness, and low income for artisans. Only a few families in Bidar continue this heritage craft, making it highly endangered despite its historical significance.",

  special: [
    "Made from a zinc-copper alloy and inlaid with pure silver designs",
    "Blackened using a unique soil from Bidar fort that contains special oxidizing properties",
    "Designs often feature Persian motifs, floral patterns, and geometric symmetry",
    "Each piece involves multiple stages: casting, engraving, inlaying, polishing, and oxidizing",
    "Traditionally used in hookahs, jewelry boxes, vases, and now adapted into modern décor"
  ],

  note: "Bidriware is a collector’s delight — a perfect fusion of art and metallurgy. It's more than décor; it’s a piece of royal craftsmanship meant to be handled with reverence and pride.",

  message: "When you admire Bidriware, you’re not just seeing beauty —\nYou’re celebrating the silence and skill of unseen hands.\nYour interest breathes life into the fading echoes of a regal tradition."
}
      },
      {
        image: 'https://ptal.in/cdn/shop/files/69_b3513984-9016-48a6-8235-1a0ac40204ef.png?v=1719999994',
        title: 'Kansa Utensils',
        placardMessage: "🕒 Hammer-polished utensils take 15–25 hours",
        description: 'Kansa utensils, crafted from a traditional bronze alloy of copper and tin, have been used in Indian households for centuries. Revered in Ayurveda for their antimicrobial and alkalizing properties, they combine health benefits with timeless elegance.',
        history: "The legacy of Kansa utensils dates back to the Indus Valley Civilization, making them one of the oldest known examples of India's metallurgical brilliance. Kansa, also referred to as bronze, is an alloy of copper and tin, and was highly esteemed in ancient Indian society — not merely as tableware but as an embodiment of spiritual, medicinal, and artisanal excellence.The term “Kansa” comes from the Sanskrit word “Kamsya”, which finds extensive mention in Ayurvedic texts, where it is praised for its health benefits and energetic properties. Ayurveda, India’s ancient science of life, prescribes eating and drinking from Kansa vessels to promote digestive health, reduce acidity, and balance the three doshas (Vata, Pitta, and Kapha). It was believed that the metal’s natural properties helped neutralize toxins, enhance immunity, and even calm the mind — a belief still practiced in many parts of India today.Historically, Kansa was the metal of the elite and the spiritually inclined. Kings, sages, priests, and householders who valued wellness and purity preferred Kansa utensils for their daily meals. This metal became an essential part of Hindu rituals and temple offerings, where Kansa lamps, bells, and plates were used during pujas and ceremonies due to their association with purity and divinity.The art of crafting Kansa utensils was once a flourishing industry, with familial guilds of metal artisans perfecting this skill over generations. Regions like Kumbharwada in Gujarat, Bell Metal towns of Odisha (like Balakati and Kantilo), Bastar in Chhattisgarh, and parts of Maharashtra and Madhya Pradesh became the key centers of Kansa craft. These artisan communities, often called “Kansari”, passed down this sacred knowledge as both a livelihood and a legacy.Each Kansa utensil was handmade using traditional processes that demanded patience, precision, and a deep understanding of metallurgy. Unlike industrial metalware, every Kansa piece carried a distinct signature of the maker’s hand, often with subtle imperfections that reflected its authenticity. Over time, Kansa became not just a utility item, but also a cultural heirloom passed from one generation to the next.With the advent of industrialization and cheaper alternatives like stainless steel and plastic, the usage of Kansa declined significantly in the 20th century. However, in recent decades, a renewed consciousness toward sustainable living, traditional healing, and handcrafted products has brought Kansa utensils back into the spotlight.Modern wellness movements now highlight the anti-inflammatory and alkalizing properties of Kansa, validating what Ayurveda knew centuries ago. This resurgence has also rejuvenated artisan clusters and helped preserve India’s intangible cultural heritage.Today, Kansa utensils are being reimagined not just as functional items, but as luxurious, meaningful lifestyle products — blending ancient wisdom with modern aesthetics. They are now found in eco-conscious kitchens, Ayurvedic resorts, cultural exhibitions, and even as collectible pieces of Indian craftsmanship.",
        process: [
          {
            title: 'Preparing the Alloy',
            description: 'Kansa is traditionally made by combining pure copper and tin in a specific ratio (usually 4:1). The metals are heated in a furnace until they melt and blend into a homogeneous molten alloy. This molten bronze is then poured into molds to form thick circular sheets or blocks for further shaping.'
          },
          {
            title: 'Sheet Formation and Cooling',
            description: 'Once poured, the alloy is allowed to cool and solidify. The resulting bronze blocks are then hammered or rolled into sheets of specific thickness depending on the product to be made — such as a thali (plate), katori (bowl), or tumbler.'
          },
          {
            title: 'Shaping by Hand or Hammer',
            description: "Using traditional hand tools or a lathe, the artisan cuts and shapes the sheet into the desired form. This involves beating and spinning techniques, often carried out on a manual or foot-powered lathe. The shaping process demands great skill and strength to ensure uniform curves and balance in the utensil."
          },
          {
            title: 'Fine Beating and Detailing',
            description: 'The semi-shaped product is then beaten repeatedly by hand using special hammers. This process not only perfects the shape but also increases the strength and density of the metal. This stage defines the smoothness, symmetry, and tactile quality of each piece.'
          },
          {
            title: 'Scraping and Finishing',
            description: 'Once the shape is refined, the surface is scraped and polished to remove irregularities. The artisan uses metal files and sandpaper to give the product a clean surface. This is followed by burnishing or rubbing with tamarind or acidic herbs to bring out the natural shine of the bronze.'
          },
          {
            title: 'Cleaning and Quality Check',
            description: 'The finished utensil is washed and cleaned thoroughly to remove residues. Artisans conduct a final inspection to ensure balance, durability, and aesthetic quality before its sent out.'
          },
          {
            title: 'Optional Step: Engraving (For Decorative Pieces)',
            description: 'In some regions, especially Odisha and Gujarat, additional hand engraving or stamping is done on the Kansa items to add traditional motifs, floral patterns, or geometric designs.'
          }
        ],
        images: [
          "https://m.media-amazon.com/images/I/41K+Yvpxf+L.jpg",
          "https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/1605148028999-5O8NWVU06FHNBMOF7RLI/IMG_5522.jpg?format=2500w",
          "https://zishta.com/cdn/shop/files/kansa-tulsi-cookware-handi-10-zishta-traditional-cookware.jpg?v=1742463489",
          "https://cdn.shopify.com/s/files/1/0560/0198/6604/files/lidbowls_6201abb3-9fbd-4ccd-8697-026400bd7252_480x480.jpg?v=1692886044",
          "https://codesustain.in/cdn/shop/files/handmade-antique-kansa-thali-set-bronze-12-inch-serveware-300.jpg?v=1746851931",
          "https://codesustain.in/cdn/shop/files/buy-handmade-kansa-cookware-online-bronze-kadai-tawa-and-milk-pan-983.png?v=1721501952",
          "https://static.wixstatic.com/media/92b8b8_d6962daac54545ef9bfda1ecd20536be~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
        ],
        clusterLocation: "Balakati, Khurda District, Odisha",
        clusterDetails: {
          district: 'Balakati, Khurda District, Odisha',
          population: 'Balakati is a small artisan village; a significant number of families are engaged in making kansa (bell metal) utensils',
          language: 'Odia',
          bestTime: 'November to February (cool weather and active craft season)',
          stay: 'Bhubaneswar (around 20 km from Balakati; has a range of hotels and stays)',
          howToReach: 'Nearest airport and railway station: Bhubaneswar; Balakati is easily reachable by road',
          localTravel: 'Auto-rickshaws, app-based cabs, and local buses from Bhubaneswar to Balakati',
          mustEat: 'Dalma, Pakhala Bhata, Chakuli Pitha, and Rasgulla (Odisha style)',
        },
        care: {
  importance: "Kansa, or bell metal, is an ancient alloy of copper and tin known for its healing properties and cultural relevance in Indian kitchens. Valued in Ayurveda, it’s not just a utensil — it’s a wellness tradition that balances health, aesthetics, and heritage.",

  dos: [
    "Wash with warm water and a mild, natural cleanser like tamarind or lemon",
    "Use soft scrubbers like sponge or cloth to avoid scratching the surface",
    "Dry thoroughly after washing to maintain luster and prevent water spots",
    "Polish occasionally with a paste of flour, salt, and vinegar for natural shine",
    "Store in dry places and keep utensils covered when not in use"
  ],

  donts: [
    "Do not use harsh detergents or metal scrubbers — they damage the finish",
    "Avoid dishwashers — handwashing is preferred for longevity",
    "Do not leave acidic food or water in Kansa vessels for prolonged periods",
    "Avoid direct high flames — Kansa can discolor or warp under extreme heat",
    "Don’t stack without padding — may cause surface scratches"
  ],

  endangered: "Despite its health benefits, Kansa is slowly being replaced by steel and non-stick cookware due to mass production and modern trends. Artisans face reduced demand, and younger generations often avoid entering the craft due to lower financial returns.",

  special: [
    "Made from a sacred alloy of copper and tin, known in Ayurveda for balancing the doshas",
    "Each piece is hand-hammered and shaped by skilled kansari artisans",
    "Naturally anti-bacterial and promotes gut health",
    "Used traditionally in temples, rituals, and households for centuries",
    "Every utensil has a warm, golden tone and a distinct, rustic character"
  ],

  note: "Kansa utensils are more than cooking tools — they’re vessels of tradition and health. Treat them like bronze heirlooms: use with respect, care for with love, and pass down as legacy.",

  message: "When you choose Kansa, you’re not just eating —\nYou’re nourishing your body while sustaining an ancient Indian wisdom.\nYour interest is the warmth that keeps this golden tradition glowing."
}
      },
      {
        image: 'https://www.zineart.in/images/trk3.webp',
        title: 'Tarakasi',
        placardMessage: "🕒 Extremely intricate filigree: 30–60 hours",
        description: 'Tarakasi is an intricate silver filigree art from Cuttack, Odisha, where artisans twist fine silver wires into lace-like designs for jewelry, idols, and decorative pieces. With over 500 years of tradition, it reflects refined craftsmanship and cultural elegance.',
        history: "Tarakasi, or Rupa Tarakasi, is the exquisite art of silver filigree that has been flourishing for over 500 years in Cuttack, Odisha, earning the city its well-deserved nickname, the “Silver City” Though filigree originates in ancient civilizations like Mesopotamia and Egypt, Cuttack’s tradition was shaped around the 13th–15th century, likely influenced through trade contacts with Persia and Southeast Asia, and later refined during Mughal patronage The craft’s golden era began to flourish locally when master goldsmiths—known in Odia as Roupyakaras or Rupa Banias—adapted the delicate Persian techniques to intricate motifs and cultural symbolism unique to Odisha The hallmark of Tarakasi is the delicate twisting and soldering of 90–99% pure silver wires, handcrafted into intricate lace-like designs. These wires form elaborate patterns—roses, jaalis, creepers, divine figures, animals, and miniature replicas of Odisha's iconic temples like the Konark Sun Temple and Puri Jagannath Temple Highlights of cultural importance include Chandi Medhas—massive silver backdrops created for Durga Puja pandals, first introduced in Cuttack around 1956 at Choudhury Bazaar, now featuring in over 30 pandals annually, some weighing 150–500 kg.Institutional support over the 20th century helped sustain the art: in 1897, Madhusudan Das founded the Odisha Art Wares Works to promote traditional crafts, and in 1962, the Kalinga Filigree Cooperative bolstered Tarakasi’s revival Despite these efforts, the craft has faced challenges—rising silver prices, industrial competition, labor-intensive methods, and dwindling artisan numbers. Today, around 400 artisans remain dedicated in Cuttack A major milestone came in March 2024, when Chandi Tarakasi was awarded a Geographical Indication (GI) tag, securing its authenticity and providing new hope for these artisans Renewed interest from art connoisseurs—alongside its integral use in Odissi dance, bridal jewelry, ceremonial items, and temple décor—has helped reinvigorate this delicate craft .Tarakasi stands today not just as an art form but as a living heritage—a shimmering testament to Cuttack’s cultural identity and India’s rich silver craftsmanship. Its future now depends on preserving its age-old techniques while introducing new designs and sustainable markets to keep this radiant tradition alive.",
        process: [
  {
    title: 'Silver Procurement and Purification',
    description: 'Pure silver (generally 90% to 99% purity) is melted and purified. This silver serves as the raw material for making delicate filigree wires.'
  },
  {
    title: 'Wire Drawing',
    description: 'The purified silver is beaten and drawn into extremely fine wires using a sequence of drawing plates with increasingly smaller holes. These wires can be as thin as 0.2 mm.'
  },
  {
    title: 'Flattening the Wires',
    description: 'Some of the drawn wires are passed through rollers to flatten them into thin strips. These flattened wires are essential for forming the intricate designs.'
  },
  {
    title: 'Design Sketching',
    description: 'A basic design is hand-drawn on a paper or metal sheet to serve as a guide. The motifs often include florals, jaalis (net-like patterns), animals, or religious symbols.'
  },
  {
    title: 'Framework Creation',
    description: 'Thicker silver wires are used to create the basic framework or outline of the design. This structure acts as the skeleton for the filigree work.'
  },
  {
    title: 'Filling with Filigree Work',
    description: 'Thinner wires are carefully twisted, coiled, and shaped into intricate patterns. These are then delicately arranged inside the framework like silver lacework.'
  },
  {
    title: 'Soldering',
    description: 'The assembled piece is gently heated and soldered using a mixture of borax and silver, which fuses the components without distorting the fine details.'
  },
  {
    title: 'Filing and Cleaning',
    description: 'Post-soldering, the piece is cleaned with dilute acid to remove any flux and impurities. Filing is done to smooth rough edges and refine the surface.'
  },
  {
    title: 'Polishing',
    description: 'The ornament is polished using soft tools or cloth to achieve a shiny finish. In some cases, oxidization is applied to create a two-tone antique look.'
  },
  {
    title: 'Final Touches',
    description: 'Optional additions such as stones, beads, or enamel are incorporated based on the design. The piece is then quality-checked before packaging.'
  }
],
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUe8yCj54zY0sUC_QQjeuqK2z8EXetJapTLg&s",
          "https://www.zineart.in/images/trk3.webp",
          "https://www.zineart.in/images/trk1.webp",
          "https://th-i.thgim.com/public/elections/tamil-nadu-assembly/y3rbq/article67911039.ece/alternates/FREE_1200/20240302295L.jpg",
          "https://thekalakart.in/cdn/shop/files/DSCF5784.jpg?v=1701190939&width=533",
          "https://www.zineart.in/images/trk2.webp",
          "https://www.odishabuzz.com/wp-content/uploads/2019/06/Silver-Filigree-cuttack.jpg"
        ],
        clusterLocation: "Cuttack, Odisha",
        clusterDetails: {
          district: 'Cuttack, Odisha',
          population: 'Cuttack has over 6 lakh (600,000) people; silver filigree is crafted by a specialized community of artisans known as "Rupa Shilpis"',
          language: 'Odia, Hindi',
          bestTime: 'November to February (cool and festive season; ideal for exploring local crafts)',
          stay: 'Cuttack city (has a variety of hotels and lodges across budgets)',
          howToReach: 'Nearest airport: Bhubaneswar (approx. 30 km); Cuttack is well-connected by train and road to all major cities in Odisha',
          localTravel: 'Auto-rickshaws, app-based cabs, and local buses within the city',
          mustEat: 'Dahi Bara Aloo Dum, Chhena Poda, Rasabali, and Bara Ghuguni',
        },
        care: {
  importance: "Tarakasi, the silver filigree craft of Cuttack, Odisha, is a breathtaking display of delicate artistry where thin strands of silver are twisted and soldered into intricate patterns. It's not just ornamentation — it's poetry in silver, passed down for generations.",

  dos: [
    "Clean gently with a soft, dry cloth to maintain natural sheen",
    "Use a silver polishing cloth specifically for delicate items, if needed",
    "Store pieces in soft pouches or velvet-lined boxes to prevent tangling and scratches",
    "Keep in a moisture-free environment to avoid tarnishing",
    "Handle with clean, dry hands — silver reacts with oils and sweat"
  ],

  donts: [
    "Do not use harsh chemicals or silver dips — they erode the delicate wires",
    "Avoid exposing the craft to perfumes, lotions, or sprays",
    "Do not bend or press filigree structures — they are extremely fragile",
    "Never wash with water or soap — it can cause blackening or tarnish",
    "Avoid storing with heavier jewelry — it can get crushed or deformed"
  ],

  endangered: "Tarakasi demands extremely skilled labor, yet offers low financial returns. With few takers and modern machine-made jewelry flooding the market, young artisans are stepping away, making the craft highly endangered despite its cultural significance.",

  special: [
    "Made from 90–95% pure silver drawn into ultra-fine wires",
    "Every design is handcrafted — no casting or molding involved",
    "Themes include peacocks, lotus, deities, and temple architecture",
    "Takes hours to days to complete even a small brooch or box",
    "Famous for bridal accessories, home décor, and ceremonial pieces"
  ],

  note: "Tarakasi is not everyday wear — it’s a collectible, a ceremonial piece, a symbol of tradition. Handle with reverence, and preserve in calm, clean spaces like a work of fine art.",

  message: "When you admire Tarakasi, you’re not just seeing jewelry —\nYou’re honoring centuries of silent silver craftsmanship.\nYour curiosity is the thread that keeps this fragile beauty from fading into history."
}
      },
      {
        image: 'https://i.pinimg.com/474x/01/9c/b7/019cb7f1060568586c0a0ae5ebd92b92.jpg',
        title: 'Brass ware',
        placardMessage: "🕒 Simple kitchenware: 10–15h | Decor: up to 40h",
        description: 'Brass ware, traditionally known as ‘Pital’ ware, blends copper and zinc into functional and decorative utensils—like plates, bowls, lamps, and temple items—handcrafted in hubs like Mirzapur (UP) and Rewari (Haryana). Besides their enduring shine and durability, these vessels are prized in Ayurveda for their antimicrobial properties and ability to enhance food flavor.',
        history: "Brassware has a deep and enduring legacy in the history of metalcraft, with its use spanning across ancient civilizations and evolving over centuries into a highly developed artisanal tradition. Brass, an alloy of copper and zinc, is admired for its durability, ease of shaping, and its distinctive golden hue, which closely resembles gold, making it a preferred material for both functional and ornamental purposes. Historical evidence suggests that brass was used as early as the 5th century BCE, particularly in ancient Egypt, Mesopotamia, Greece, and the Indus Valley civilization, where artisans crafted coins, religious icons, utensils, and jewelry. Its non-corrosive nature and malleability made it ideal for long-lasting and intricate designs.In India, brass holds a particularly significant place in craft history. The alloy has been central to the production of religious, domestic, and ceremonial objects for centuries. Traditional Indian households still use brass utensils, lamps (diyas), and puja items, not only for their practicality but also for their auspicious qualities. The spiritual significance of brass is evident in its use in temples, where brass bells, idols, and vessels are essential elements of worship.Among India’s brassworking centers, Moradabad in Uttar Pradesh stands out as a globally recognized hub. Known as the “Brass City,” Moradabad's artisans have been perfecting the art of brassware since the 17th century, especially under Mughal patronage. The city became renowned for its elaborately engraved and embossed brass items—ranging from trays and vases to lamps and figurines—that were often exported to the Middle East and Europe.Meanwhile, in the eastern state of Odisha, the Kansari community has nurtured a distinctive brass and bell metal craft tradition for generations. Their works, including cooking pots, serving utensils, temple artifacts, and musical instruments, are crafted using age-old techniques such as casting, lost-wax molding, and manual hammering. Many of these items are produced without modern machinery, preserving a slow and deliberate handmade aesthetic that is both functional and artistic.Brassware also saw significant artistic development during the Mughal period, when Persian influence inspired intricate inlay and engraving patterns. These designs, often floral or geometric, continue to be a hallmark of Indian brassware, passed down through generations of skilled artisans.In contemporary times, brassware has successfully transitioned into the modern world. Its applications now extend beyond religious use to include home décor, fashionable jewelry, and even musical instruments such as trumpets, saxophones, and tabla components. Brass items are popular in global markets for their vintage appeal and eco-friendliness, with many being handmade using sustainable techniques.Today, Indian brassware is supported through initiatives like Geographical Indication (GI) tagging, One District One Product (ODOP) schemes, and artisan cooperatives. These efforts aim to preserve traditional knowledge, uplift artisan communities, and bring the timeless beauty of brass to contemporary consumers. Thus, the history of brassware is not just a chronicle of metal but a story of cultural identity, evolving craftsmanship, and enduring artistic legacy.",
        process: [
  {
    title: 'Material Preparation',
    description: 'The process starts with preparing the brass alloy, typically a mix of copper and zinc. Depending on the item being crafted, either scrap or fresh metal is melted in a furnace to create the base material.'
  },
  {
    title: 'Melting and Casting',
    description: 'The molten brass is poured into specially crafted molds made from clay, sand, or metal. These molds determine the basic shape of the item—such as a pot, plate, lamp, or decorative figurine.'
  },
  {
    title: 'Cooling and Cleaning',
    description: 'Once cast, the metal is allowed to cool and solidify. The hardened object is then removed from the mold and thoroughly cleaned to eliminate dust, clay, and sand residues.'
  },
  {
    title: 'Shaping and Hammering',
    description: 'Using traditional tools like hammers and chisels, artisans refine the shape of the item. The object is tapped, bent, and trimmed to perfect its structure and finish.'
  },
  {
    title: 'Designing and Engraving',
    description: 'Decorative elements are added by hand through engraving or embossing. These intricate patterns often reflect local traditions and require both artistic skill and precision.'
  },
  {
    title: 'Polishing',
    description: 'The item is polished based on the desired final look. This could involve achieving a glossy shine, a subtle matte texture, or an antique finish.'
  },
  {
    title: 'Finishing Touches',
    description: 'Additional parts such as handles, stands, or attachments are fixed in place. The final product undergoes a quality check, is cleaned again, and then prepared for sale or export.'
  }
],
        images: [
          "https://trovecraftindia.com/cdn/shop/collections/Brass_Set1_9ed12fd7-0faf-47ff-8e26-400d534f67f3.jpg?v=1733212519",
          "https://zishta.com/cdn/shop/articles/brass-cookware-collection-zishta-traditional-cookware.jpg?v=1744346394&width=2048",
          "https://thesourceindia.net/cdn/shop/files/8087EACE-9F28-4177-8EDC-F377888C16A2.jpg?v=1705668225&width=533",
          "https://cdn.shopify.com/s/files/1/0831/2556/7787/files/Brass_480x480.webp?v=1728293490",
          "https://taajoo.com/wp-content/uploads/2023/02/001-1.jpg",
          "https://media.istockphoto.com/id/160910558/es/foto/mortero-con-mazo.jpg?s=612x612&w=0&k=20&c=7k9PhHwAETfMIbKHXHQ0JbR8ord68o1pW0gfy9nEOVE=",
          "https://ptal.in/cdn/shop/files/Rectangle_6021_2.jpg?v=1697107143"
        ],
        clusterLocation: "Moradabad, Uttar Pradesh",
        clusterDetails: {
          district: 'Moradabad, Uttar Pradesh',
          population: 'Moradabad has over 9 lakh (900,000) people; it is famously called the “Brass City of India” with thousands of artisans involved in brass handicrafts',
          language: 'Hindi, Urdu',
          bestTime: 'November to February (pleasant weather and active workshop activity)',
          stay: 'Moradabad city (wide range of hotels from budget to mid-range)',
          howToReach: 'Well-connected by train and road from Delhi (approx. 160 km); nearest airport: Indira Gandhi International Airport, Delhi',
          localTravel: 'Auto-rickshaws, e-rickshaws, and taxis within the city',
          mustEat: 'Korma, Roomali Roti, Seekh Kebabs, and local sweets like Rewri and Gajak',
        },
        care: {
  importance: "Brassware represents a golden legacy of Indian metallurgy — combining utility with elegance. Whether used in rituals, cooking, or décor, each handcrafted piece carries the warmth of tradition and the glow of cultural pride.",

  dos: [
    "Clean regularly with a mixture of lemon and salt or tamarind pulp to restore shine",
    "Use a soft cloth or sponge to scrub — rinse and dry immediately",
    "Polish with natural brass polish or homemade paste (flour, vinegar, salt)",
    "Store in dry, low-humidity places to prevent dullness or oxidation",
    "Use gloves or wipe fingerprints to avoid staining the metal surface"
  ],

  donts: [
    "Do not use steel wool or harsh abrasives — they scratch and damage the finish",
    "Avoid leaving water or acidic food in brass containers for long durations",
    "Do not use in microwave or dishwasher — brass reacts to high heat and detergents",
    "Avoid moisture-heavy areas — it accelerates tarnishing",
    "Do not stack heavy brass items without padding in between"
  ],

  endangered: "Traditional brass artisans are dwindling as industrial alternatives replace handmade wares. Cheaper, machine-made products dominate markets, and younger generations are moving away from this time-intensive skill.",

  special: [
    "Made using lost-wax casting or hand-hammering techniques by skilled artisans",
    "Popular in South India, Moradabad, and tribal regions for both ritual and daily use",
    "Every item — from lamps and thalis to statues — has cultural symbolism",
    "Naturally antimicrobial and durable when maintained properly",
    "Often adorned with hand-etched motifs or embossed detailing"
  ],

  note: "Brassware is built to last generations — but only if cared for. Treat it as you would a golden heirloom: polish it with patience and use it with pride.",

  message: "When you choose brass, you’re not just bringing home tradition —\nYou’re keeping alive the timeless fire of Indian craftsmanship.\nYour interest is the polish that keeps this golden heritage gleaming."
}
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
        placardMessage: "🕒 Traditional hat or shade takes 5–10 hours",
        description: 'A traditional conical bamboo-and-palm leaf hat, once worn by Assamese farmers and nobility, now richly hand-painted with motifs like butterflies and moon-shapes. It’s a cultural icon used in ceremonies and Bihu performances',
        history: "he Japi, also spelled Jaapi, is a distinctive conical hat from Assam, India, made by weaving bamboo or cane with wide palm leaves known as tokou paat. Its origins trace back over 1,400 years, with early records—a Chinese traveler Hiuen Tsang around the 7th century—mentioning its ceremonial use during royal welcomes. Originally a practical farmer’s hat used for sun and rain protection, the Japi evolved into a powerful cultural emblem of Assam. The craft thrived under indigenous communities such as the Sutiya and Baro-Bhuyans, whose guilds dominated the traditional Japi-hajiya Khel (hat-making guild) system during the Ahom and Chutia dynasties, spanning the 15th to 16th centuries Notably, in 1523–24, Sutiya kings gifted ornately embroidered gold and silver Japis to Ahom royalty as diplomatic presents, underscoring its importance in court protocol.As time passed, the Japi became more than a utilitarian object—it grew into a symbol of identity, status, and community pride. Under Ahom and Chutia patronage, specific types like Bordoi Japi (royal hat) and Sorudoi/Fulam Japi (floral decorative hat) emerged. Over centuries, the craft established production hubs in places like Nalbari, Sutarkuchi, Mugkuchi, and Cachar, where artisans developed decorative versions—now iconic in Assamese wedding rituals, Bihu dance, religious ceremonies, and institutional hospitality The transition from functional to ornamental was evident in the craftsmanship: while early Japis provided shade and protection, colourful Fulam Japis—embellished with cloth, lace, and motifs like crescents and butterflies—became central to cultural performances and domestic décor. Today, these hats adorn ceremonial gates, home interiors, and are presented as tokens of honor and Assamese hospitality .In 2023, recognizing its cultural significance and economic impact—with over 100,000 people employed—the Assamese Japi received a Geographical Indication (GI) tag, securing its heritage and authenticity However, the craft faces modern challenges: dwindling artisan numbers, competition from cheap umbrella imports, and low returns—artisans earn only ₹40–60 on a piece that sells for ₹200–300 Despite this, the Japi remains woven into Assam’s identity—whether as agrarian gear, royal regalia, bridal finery, or festival ornament. Its vibrant presence in Bihu celebrations, temple décor, national exhibitions, and global souvenirs is also a testament to its enduring craftsmanship and cultural relevance. Unless actively encouraged through supportive policies, however, this stunning symbol of Assamese heritage risks fading into history.Various types of Japis have developed over time, each serving distinct purposes and cultural roles.The Sorudoi Japi is a traditional farmer’s hat, while the Fulam Japi is a colorful, decorative version used in ceremonies. The Bordoi Japi is large and symbolic, often used for decoration or welcomes, and the Bridal Japi is ornate, crafted specially for weddings.",
        process: [
  {
    title: 'Collection of Raw Materials',
    description: 'The process begins with gathering natural materials such as bamboo, tokou paat (a type of palm leaf), cloth, thread, and natural dyes. The bamboo used is typically soft and flexible, making it ideal for weaving.'
  },
  {
    title: 'Preparation of Bamboo Strips',
    description: 'Bamboo is carefully cut, split, and smoothened into thin strips using traditional knives and tools. These strips are then dried to reduce moisture and prevent warping during weaving.'
  },
  {
    title: 'Frame Construction',
    description: 'A sturdy circular frame is constructed using thicker bamboo to form the outer edge of the Japi. Cross-supports are added inside to provide structural strength. The frame is shaped into a conical or semi-conical form depending on the style.'
  },
  {
    title: 'Weaving the Base',
    description: 'Fine bamboo strips are woven in a radial or criss-cross pattern to form the central surface of the Japi. The weaving needs to be tight and consistent to ensure durability and visual balance.'
  },
  {
    title: 'Leaf Layering (Tokou Paat)',
    description: 'Tokou leaves are sun-dried, cut to size, and then stitched or glued onto the bamboo surface to create a protective, waterproof outer layer. These leaves are chosen for their natural strength and weather resistance.'
  },
  {
    title: 'Drying',
    description: 'The entire Japi is placed in the sun for several hours. This helps the structure set properly and allows natural adhesives or bindings to dry and harden.'
  },
  {
    title: 'Decoration and Painting',
    description: 'Decorative Japis (like the Fulam Japi) are hand-painted using bright natural or synthetic colors—especially red, green, yellow, and white. They are often embellished with lacework, fabric appliqué, beads, mirrors, and symbolic Assamese motifs.'
  },
  {
    title: 'Edge Binding and Final Touches',
    description: 'The edges are reinforced and decorated using cloth strips or plastic lace to enhance durability and aesthetics. A final inspection ensures the Japi is symmetrical, strong, and visually appealing.'
  }
],
        images: [
          "https://rukminid2.flixcart.com/image/750/900/xif0q/hat/5/p/7/japi18-large-1-assamese-japi18-japi18-rchuz-assamese-japi-original-imagkk23thmbtge4.jpeg?q=90&crop=false",
          "https://media.istockphoto.com/id/1480721165/photo/a-jappi-and-gamucha-a-cultural-symbols-of-assamese.jpg?s=612x612&w=0&k=20&c=OsT6aa3DFa09KD1nbSRuR8gUGZYnI6B2LoZm9pkmMKk=",
          "https://th.bing.com/th/id/OIP.yZRJAOT1OmTKXOewblx2GwAAAA?r=0&rs=1&pid=ImgDetMain",
          "https://images-eu.ssl-images-amazon.com/images/I/81ZWQldekDL._AC_SR462,693_.jpg"
        ],
        clusterLocation: "Sivasagar, Assam",
        clusterDetails: {
          district: 'Sivasagar, Assam',
          population: 'Sivasagar has around 50,000+ people; Jappi-making is practiced in nearby rural areas by skilled bamboo and cane artisans',
          language: 'Assamese',
          bestTime: 'November to March (pleasant climate and Bihu festival season)',
          stay: 'Sivasagar town (has guesthouses and small hotels; better options available in nearby Jorhat)',
          howToReach: 'Nearest airport: Jorhat Airport (~75 km); Sivasagar is connected by train and road from Guwahati and Dibrugarh',
          localTravel: 'Cycle rickshaws, auto-rickshaws, and taxis within the town and surrounding villages',
          mustEat: 'Khar, Masor Tenga, Pitha, and Payas (rice kheer)',
        },
        care: {
  importance: "Jappi is not just a decorative hat — it symbolizes the spirit of Assamese hospitality and pride. Traditionally offered as a mark of respect and honor, each Jappi is handwoven using bamboo, cane, and palm leaves, reflecting rural craftsmanship and cultural dignity.",

  dos: [
    "Dust regularly with a dry, soft cloth or brush to remove accumulated dirt",
    "Keep away from direct sunlight to prevent color fading and brittleness",
    "Store in a cool, dry place to avoid moisture damage and insect infestation",
    "Use a natural polish (like lemon oil or linseed) occasionally to maintain luster",
    "Mount or hang with care to prevent deformation of the woven structure"
  ],

  donts: [
    "Do not expose to rain or damp areas — moisture can cause warping or mold",
    "Avoid pressing or placing heavy objects on it — the bamboo can break",
    "Don’t use strong chemical cleaners or sprays — they damage natural fibers",
    "Do not fold or attempt to reshape once woven — it may crack or fray",
    "Avoid contact with flames or high heat — it's a flammable natural product"
  ],

  endangered: "With modern gifting and decorative options flooding markets, the demand for traditional Jappis has declined. Many artisans have shifted to wage labor or alternative trades, threatening the continuity of this culturally rich, eco-friendly craft.",

  special: [
    "Made from finely split bamboo and tokou (palm leaf) with intricate woven patterns",
    "Used in cultural performances, welcome ceremonies, and Bihu festivals",
    "Can be plain or elaborately decorated with fabric, embroidery, or mirrors",
    "Lightweight, biodegradable, and entirely handmade with traditional tools",
    "A symbol of Assamese identity and rural craftsmanship"
  ],

  note: "Jappi is best preserved as a decorative or ceremonial piece. While light and simple, its real weight lies in the cultural heritage it represents. Treat it with the respect of a living legacy.",

  message: "When you admire a Jappi, you’re not just looking at a hat —\nYou’re tipping your head to centuries of Assamese artistry.\nYour interest is the breeze that keeps this cultural crown standing tall."
}
      },
      {
        image: 'https://orumindicus.com/wp-content/uploads/2023/02/193.png',
        title: 'Shital Pati',
        placardMessage: "🕒 Woven cooling mats crafted in 20–40 hours",
        description: 'Smooth, cool-to-the-touch mats woven from bamboo or cane strips; prized for their intricate patterns and comfort, popular in Bengal, Assam, and Meghalaya.',
        history: "Shital Pati, meaning 'cool mat' in Bengali, is a centuries-old traditional craft rooted deeply in the cultural and geographical landscape of Bengal. The origins of this craft trace back to the ancient and medieval periods, with historical accounts suggesting its presence in the homes of both common folk and nobility across the region. It gained prominence during the Mughal era, when finely woven Shital Patis were prized not only for their utility but also for their intricate aesthetics. It is said that Nawab Murshid Quli Khan, the first Nawab of Bengal, once gifted a finely crafted Shital Pati to Emperor Aurangzeb—a testament to the prestige and artistry associated with the craft.This unique mat is made from the murta plant (locally known as Schumannianthus dichotomus), which thrives in the marshy lands and riverbanks of northern Bengal and parts of Bangladesh, especially Sylhet and Cooch Behar. The stems of the murta plant are split, processed, and woven into mats that are cool to the touch, making them an essential household item in the hot, humid climate of the region. Traditionally, men are responsible for harvesting and processing the murta strips, while women skillfully weave them into mats, some of which feature 'nakshi' or decorative designs that reflect local flora, fauna, and geometric patterns.Shital Pati weaving is more than a craft—it is an integral part of the rural lifestyle and a symbol of sustainable living. The mats are used for sleeping, sitting, and religious rituals, and they also hold significant social value, often exchanged during marriages and festivals. In 2017, the Shital Pati weaving of Sylhet was inscribed by UNESCO as an Intangible Cultural Heritage of Humanity, which brought international recognition to this eco-friendly and culturally rich tradition.Despite modernization and the growing presence of synthetic alternatives, Shital Pati continues to endure through community-based efforts, government initiatives, and artisan clusters, particularly in places like Ghughumari in West Bengal. These centers not only keep the tradition alive but also provide livelihoods to hundreds of artisans, preserving a beautiful, functional, and environmentally friendly art form for generations to come.",
        process: [
  {
    title: 'Harvesting and Selection',
    description: 'The process begins along marshy riverbanks in northern Bengal and Sylhet, where mature murta (Schumannianthus dichotomus) canes are cut using a curved dao. After washing off the silt, the canes are sorted by thickness and color, with only the straight, blemish-free stalks selected for premium mat-making.'
  },
  {
    title: 'Splitting and Stripping',
    description: 'Each selected cane is sliced lengthwise and peeled in layers. The coarse inner chhotu layer is discarded, the mid-grade buka is kept for utility mats, and the glossy outer skin is shaved into ultra-thin slips called beti for high-quality mats. These slips are soaked immediately to maintain flexibility and bundled for further treatment.'
  },
  {
    title: 'Conditioning and Whitening',
    description: 'The bundled slips are soaked in rice-starch water for 24 hours, then boiled in the same water, rinsed, and sun-dried. This process removes sap and enhances a silky white finish. In some cases, cold-soaking is used instead to preserve the natural reddish hue for traditional laal sital pati.'
  },
  {
    title: 'Dyeing',
    description: 'For decorative or nakshi mats, selected slips are dyed using natural plant extracts or Azo-free vegetable dyes. The slips are boiled with pigments, soaked until fully colored, and then washed and dried. This creates a range of hues like white, russet, green, and deep crimson for weaving intricate motifs.'
  },
  {
    title: 'Weaving',
    description: 'Traditionally performed by women known as pati-kars, the weaving is done on the ground or on low hand-looms. The slips are interlocked in patterns such as two-over-two or three-over-three (gachha). Designs are built strip by strip, and complex nakshi motifs may take weeks to complete depending on size and detail.'
  },
  {
    title: 'Finishing and Dressing',
    description: 'Once the desired size is achieved, the mat is lightly beaten to flatten knots, trimmed to a square shape, and edges are folded back for strength. Some weavers rub the surface with smooth river pebbles to add a natural sheen. The finished Shital Pati is then rolled and ready for use or export.'
  }
],
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/5/50/Sheetal_Pati_Sunamganj.jpg",
          "https://i0.wp.com/purbashree.com/wp-content/uploads/2023/12/sitolpti-1.webp?resize=1024%2C576&ssl=1",
          "https://ich.unesco.org/img/photo/thumb/09856-BIG.jpg",
          "https://5.imimg.com/data5/MD/BH/WZ/ANDROID-213348/1561631263593-jpg-500x500.jpg",
          "https://cdn.dotpe.in/longtail/item_thumbnails/7551284/PmiapbMl.webp",
          "https://orumindicus.com/wp-content/uploads/2023/02/193.png",
          "https://5.imimg.com/data5/SELLER/Default/2021/11/PT/HI/OC/4137147/whatsapp-image-2021-11-23-at-5-53-01-pm-500x500.jpeg"
        ],
        clusterLocation: "Cooch Behar, West Bengal",
        clusterDetails: {
          district: 'Cooch Behar, West Bengal',
          population: 'Cooch Behar has around 77,000 people; Shital Pati is crafted in rural households, especially in villages like Ghughumari',
          language: 'Bengali',
          bestTime: 'October to February (pleasant winter weather)',
          stay: 'Cooch Behar town (has several budget to mid-range hotels)',
          howToReach: 'Nearest airport: Bagdogra (around 140 km); Cooch Behar has its own railway station and is connected by road to Siliguri and Jalpaiguri',
          localTravel: 'Auto-rickshaws, cycle rickshaws, and buses within the town and nearby villages',
          mustEat: 'Shorshe Ilish, Luchi with Aloo Dum, Chhanar Payesh, and Mishti Doi',
        },
        care: {
  importance: "Shital Pati, meaning 'cool mat', is a traditional craft of Assam and parts of West Bengal, woven from Murta reeds. Known for its naturally cooling texture, it's a symbol of eco-conscious living and refined hand-weaving passed through generations.",

  dos: [
    "Clean regularly with a soft dry cloth or gently shake off dust",
    "Air out in shade periodically to prevent mildew or musty odor",
    "Store rolled, not folded, to maintain shape and prevent creases",
    "Keep in a well-ventilated area to retain its natural coolness and texture",
    "Apply natural oils (like mustard or coconut oil) sparingly if it begins to dry out"
  ],

  donts: [
    "Do not expose to direct sunlight for long periods — it can make the fibers brittle",
    "Avoid damp or humid storage areas — moisture can lead to fungus or odor",
    "Do not fold — it creates permanent lines and weakens the weave",
    "Don’t use chemical sprays or cleaners — they harm the natural fibers",
    "Avoid placing extremely heavy furniture on top — it can warp or tear the mat"
  ],

  endangered: "With synthetic alternatives dominating the market, the demand for Shital Pati has dwindled. Artisans find it hard to sustain their livelihood, and the younger generation is reluctant to pursue this painstaking, low-paying craft.",

  special: [
    "Woven from Murta (Schumannianthus dichotomus) reeds found in marshy areas",
    "Naturally cooling, eco-friendly, and biodegradable",
    "Some mats are intricately designed with dyed patterns for special occasions",
    "Takes hours to prepare the reeds and weave a single pati by hand",
    "Used for prayer, seating, gifting, and as a symbol of hospitality in rural homes"
  ],

  note: "Shital Pati is best used indoors and appreciated for its natural elegance. Though humble in appearance, its softness and artistry make it a prized example of sustainable design.",

  message: "When you value Shital Pati, you’re not just choosing a mat —\nYou’re standing on centuries of gentle, green craftsmanship.\nYour support keeps this handwoven coolness alive in a warming world."
}
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZCLFJX9yZgOF9i0dXMsZ9KXH3L9EeKeZaQ&s',
        title: 'Khasi trap',
        placardMessage: "🕒 Fish/bird traps hand-woven in ~10–15 hours",
        description: 'Khasi bamboo weaving is a traditional craft of Meghalaya where artisans skillfully weave bamboo into daily-use items like baskets, storage containers, fish traps, and even house walls. The craft is functional, eco-friendly, and deeply rooted in tribal culture.',
        history: "The Khasi fish trap, traditionally known among the indigenous Khasi people of Meghalaya, is a brilliant example of sustainable and indigenous craftsmanship rooted in both necessity and cultural knowledge. This form of trap-making dates back several centuries and has been a vital part of the Khasi community's fishing practices, especially in the hilly, rain-fed regions of Northeast India. The traps, woven entirely by hand from local bamboo and cane, are designed to catch small fish in streams, rivers, and flooded paddy fields—often without harming the aquatic environment.The origins of the trap-making craft are deeply interwoven with the Khasi people's close relationship with nature. Living in a high rainfall zone, the Khasis developed a range of bamboo-based tools and household items suited to their terrain and lifestyle. The fish trap, often resembling an elongated funnel with a narrow neck, was crafted not just as a tool but as an extension of their traditional ecological knowledge. Each trap is functional and biomechanically intelligent—designed to allow fish in but not let them escape—requiring no modern technology, fuel, or even bait.Historically, the fish traps were part of daily subsistence life, especially for families living near rivers and streams. Boys and men would place them strategically in water channels, while the crafting itself—cutting, splitting, and weaving the bamboo—was often a communal task. Techniques were passed down orally and through observation, with children learning the craft by watching elders. Over time, different shapes and trap sizes emerged, suited to various water bodies and types of fish.This craft stands as part of a broader bamboo-weaving tradition among the Khasis, who are also known for making carrying baskets (khoh), storage containers, pig pens, rain shields, and floor mats. The fish traps especially reflect not just survival skills but an indigenous design sensibility—one that is environmentally sound, aesthetically simple, and functionally brilliant.In recent years, the craft has garnered interest not only from cultural anthropologists and eco-tourism initiatives but also from designers and collectors who value sustainable, handwoven goods. While modernization and plastic products pose a threat to the survival of such indigenous crafts, the Khasi fish trap remains a symbol of ingenuity, ecological harmony, and living heritage.",
        process: [
  {
    title: 'Bamboo Selection',
    description: 'Strong and flexible bamboo is carefully selected from local forests. The bamboo must be mature and free from cracks to ensure the trap is durable and long-lasting.'
  },
  {
    title: 'Splitting the Bamboo',
    description: 'The selected bamboo is cut into manageable lengths and then split into thin, uniform strips using traditional knives or blades. These strips form the primary material for weaving.'
  },
  {
    title: 'Soaking the Strips',
    description: 'The bamboo strips are soaked in water to make them soft and pliable. This step is essential to ensure smooth weaving and to prevent the strips from breaking during the process.'
  },
  {
    title: 'Weaving the Trap',
    description: 'Using skilled hands, artisans weave the softened strips into a cylindrical or conical shape. The design features a wide mouth at one end and a narrow, closed tip at the other, forming a tight, escape-proof pattern.'
  },
  {
    title: 'Adding the Inner Funnel (Optional)',
    description: 'In some variations, an internal reverse funnel is added. This structure makes it easy for fish to enter the trap but prevents them from escaping, increasing the trap’s effectiveness.'
  },
  {
    title: 'Drying',
    description: 'Once the weaving is complete, the trap is sun-dried for several hours. This process hardens the bamboo and helps retain the trap’s final shape.'
  },
  {
    title: 'Finishing Touches',
    description: 'Loose ends are trimmed, and the entire trap is inspected for structural integrity. It may be tested in water to ensure functionality before being used for actual fishing.'
  }
],
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lCPfjmkWWTKTcUCK93NRd0J3HzTlLGPGdw&s",
          "https://c8.alamy.com/comp/FFYHDA/handicraft-cane-baskets-meghalaya-india-FFYHDA.jpg",
          "https://www.camelcraft.com/meghalaya-handicrafts.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWGxzPz-f30C1prGAu3pepASAwEFJf5YCLGvu9RgOODb6kw-WWZlwKUL9slH0NXNOxnSw&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQReY9d5-4e3jNBi0nXqJmm8RpuD2YPnc0QvQ&s",
          "https://www.oddessemania.in/wp-content/uploads/2024/04/handicrafts-of-meghalaya-Cane-and-bamboo-products-1024x682.jpg"
        ],
        clusterLocation: "East Khasi Hills, Meghalaya",
        clusterDetails: {
          district: 'East Khasi Hills, Meghalaya',
          population: 'East Khasi Hills has over 8 lakh (800,000) people; traditional bamboo traps are made by rural Khasi communities using age-old techniques',
          language: 'Khasi, English',
          bestTime: 'October to April (dry season and ideal for visiting villages)',
          stay: 'Cooch Behar town (has several budget to mid-range hotels)',
          howToReach: 'Nearest airport: Shillong (Umroi Airport, ~30 km); major airport: Guwahati (approx. 120 km); connected by road to Shillong via scenic NH6',
          localTravel: 'Taxis, shared sumos, and local buses; some areas accessible by foot in villages',
          mustEat: 'Jadoh (rice and meat), Dohneiiong (pork with black sesame), Tungrymbai (fermented soybean), and Pumaloi (steamed rice flour)',
        },
        care: {
  importance: "The Khasi Trap is not just a tool — it's a reflection of indigenous knowledge systems and sustainable fishing practices of the Khasi tribe. Handwoven from bamboo, these traps blend function with ecological harmony, preserving a unique relationship with rivers and forests.",

  dos: [
    "Dust occasionally and clean with a dry or lightly damp cloth",
    "Store in cool, dry places to maintain the bamboo's integrity",
    "If used in water, allow to dry completely before storing",
    "Apply natural oils (like mustard or coconut oil) to maintain flexibility and shine",
    "Keep away from direct sunlight to prevent drying or cracking of bamboo"
  ],

  donts: [
    "Do not store in damp or enclosed areas — it encourages mold and decay",
    "Avoid harsh chemicals or soap during cleaning — they weaken the bamboo",
    "Do not expose to open flame or high heat — bamboo is flammable",
    "Do not bend or press with force — can cause breakage of woven joints",
    "Avoid prolonged water exposure without drying — it can lead to fiber weakening"
  ],

  endangered: "With modernization and changing fishing techniques, traditional traps like these are becoming obsolete. Younger generations often see little value in continuing this labor-intensive, low-return craft, threatening its survival.",

  special: [
    "Entirely handcrafted from split bamboo and cane by tribal artisans",
    "Designed with traditional knowledge to catch fish passively in rivers and streams",
    "No synthetic material used — fully biodegradable and sustainable",
    "Shape and weaving style vary by region and purpose",
    "A symbol of harmony between humans and nature in Khasi culture"
  ],

  note: "Khasi Traps, though humble in look, are complex in function. Whether used for display, educational purposes, or cultural preservation, treat it like a living heritage — sturdy, natural, and rare.",

  message: "When you appreciate a Khasi Trap, you’re not just seeing bamboo work —\nYou’re recognizing the wisdom of a people in balance with nature.\nYour curiosity keeps this quiet tradition flowing through time."
}
      }
    ]
  },
  
  stone: {
    id: "stone",
    name: "Stone & Marble",
    image: "https://static.thcdn.com/productimg/960/960/13231897-1064924144952856.jpg",
    states: ["Kashmir", "Rajasthan", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "Kerala", "West Bengal"],
    icon: "🪨",
    description: 'Detailed sculptures and decor carved from stone, reflecting architectural and spiritual traditions.',
    subcategories: [
      {
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/e7/1a/caption.jpg?w=300&h=300&s=1',
        title: 'Marble Inlay',
        placardMessage: "🕒 Stone cutting & inlay takes 30–60 hours",
        description: 'Agra Marble Inlay, locally known as Parchin Kari, is a fine art form where semi-precious stones like lapis lazuli, malachite, and onyx are delicately inlaid into white marble. Originating from Mughal times, this intricate craftsmanship is most famously seen in the Taj Mahal and is still practiced by artisans in Agra today.',
        history: "The exquisite art of marble inlay, known as Parchin Kari in Mughal India, is rooted in Italian pietra dura, which emerged during the 16th century in Florence. It was brought to India on the eve of the 17th century—likely via Persian and Italian craftsmen at the Mughal court—and evolved into the stunning Mughal variant seen today.Earliest Mughal structures—such as Humayun’s Tomb, Agra Fort, and Fatehpur Sikri during Akbar’s reign in the mid-1500s—feature modest inlay on red sandstone and marble, hinting at a growing interest in stone decoration . Under Emperor Jahangir and his influential wife, Nur Jahan, the craft evolved dramatically: the tomb of Itmad‑ud‑Daulah (1622–1628) is considered a pioneering masterpiece in white marble inlay artistry.The art reached its pinnacle during Shah Jahan’s reign, culminating in the Taj Mahal (1632–1648). The mausoleum’s inlay work—featuring lapis lazuli, turquoise, carnelian, jasper, agate, onyx, and mother-of-pearl—creates floral patterns, geometric motifs, and Quranic calligraphy of breathtaking delicacy and realism . The finesse is such that the stones seem to grow from the marble, thanks to meticulous cutting, setting, and polishing methods that remain largely unchanged today .Historically, this craft was executed by parachinkars, skilled artisans—many of whom were direct descendants of those who worked on Mughal monuments—using age-old techniques like henna-pattern engraving, diamond‑tipped chisels, manual stone shaping, and proprietary adhesives . Their work adorned not only the Taj Mahal but also imperial buildings like the Diwan‑i‑Am, Diwan‑i‑Khas, Agra Fort, Red Fort, and private Shah Jahan chambers .Following Mughal decline and British colonial rule, parchinkari experienced a revival as a handicraft industry. Tourism and patronage fueled a market for inlay inlay-topped tables, decorative boxes, and coasters. Today, Agra, Varanasi, and Rajasthan remain key centers. Under state initiatives like Uttar Pradesh’s ODOP program, the number of artisans has grown from around 810 to over 1,150 workshop units between 2018 and 2021—supporting approximately 12,000 skilled craftsmen .Despite a sharp decline in trained artisans—from about 10,000 two decades ago to some 3,000—descendants of original Mughal-era inlayers continue to uphold the tradition in Agra’s lanes near the Taj . Their work keeps alive a splendid heritage of artistry, devotion, and timeless elegance—carving history into every inlaid petal and motif.",
        process: [
  {
    title: 'Selection of Marble',
    description: 'High-quality white marble, typically sourced from Makrana in Rajasthan, is chosen for its smoothness and durability. The slab must be flawless and capable of holding delicate inlay work.'
  },
  {
    title: 'Design Sketching',
    description: 'An intricate design—often inspired by floral, geometric, or calligraphic patterns—is drawn on paper and then carefully transferred onto the marble surface using tracing or stencil techniques.'
  },
  {
    title: 'Engraving the Marble',
    description: 'Skilled artisans use chisels and small hammers to engrave the design onto the marble. These shallow grooves serve as cavities to house the inlay stones.'
  },
  {
    title: 'Stone Selection and Shaping',
    description: 'Semi-precious stones like lapis lazuli, turquoise, carnelian, malachite, mother-of-pearl, and jasper are selected. They are manually cut into petal, leaf, or geometric shapes using emery wheels and hand tools to perfectly fit the engraved outlines.'
  },
  {
    title: 'Inlaying the Stones',
    description: 'Each precisely shaped stone is carefully placed into its corresponding cavity using a natural adhesive or resin. This step demands accuracy to ensure a seamless and snug fit without visible gaps.'
  },
  {
    title: 'Smoothing and Polishing',
    description: 'After the inlay is complete, the surface is polished using fine abrasive powders and soft cloth. The result is a smooth, lustrous finish where the stones appear embedded within the marble.'
  },
  {
    title: 'Finishing Touches',
    description: 'The final piece is thoroughly inspected for alignment, color harmony, and surface perfection. Any irregularities are corrected, and a final polish is applied to enhance the artwork’s brilliance and longevity.'
  }
        ],
        images: [
          "https://www.stoneartbyskl.com/sklbackend/productimg/Product_37_In_Lay_Flooring_1350x900_3.jpg",
          "https://2.wlimg.com/product_images/bc-full/2024/10/13463019/white-marble-stone-inlay-jewellery-box-1727933125-7625618.jpeg",
          "https://somefinehandicrafts.com/wp-content/uploads/2021/07/marble-inlay-work-coffee-table-small3.jpg",
          "https://2.wlimg.com/product_images/bc-full/2024/8/12942855/marble-inlay-staircase-1724748370-7578936.jpeg",
          "https://c8.alamy.com/comp/2XNK08D/agra-india-02142024-hand-made-marble-and-precious-stone-inlay-tables-on-display-at-a-local-workshop-2XNK08D.jpg",
          "https://i.etsystatic.com/46871724/r/il/d17444/5562592035/il_570xN.5562592035_jios.jpg"
        ],
        clusterLocation: "Agra, Uttar Pradesh",
        clusterDetails: {
          district: 'Agra, Uttar Pradesh',
          population: 'Agra has over 1.6 million people; marble inlay (also called Parchin Kari) is practiced by artisans descended from those who worked on the Taj Mahal',
          language: 'Hindi, Urdu',
          bestTime: 'October to March (cool weather and ideal for sightseeing and shopping)',
          stay: 'Agra city (wide range of accommodations from budget to luxury, including heritage stays)',
          howToReach: 'Nearest airport: Pandit Deen Dayal Upadhyay Airport, Agra; Agra is well-connected by train (Gatimaan Express, Shatabdi) and road from Delhi',
          localTravel: 'Auto-rickshaws, e-rickshaws, app-based cabs, and tourist buses',
          mustEat: 'Petha (a sweet made from ash gourd), Bedai with Aloo Sabzi, Mughlai Biryani, and Jalebi',
        },
        care: {
  importance: "Marble Inlay is a centuries-old art where semi-precious stones are meticulously embedded into marble to form intricate floral, geometric, or architectural patterns. It represents the pinnacle of Mughal craftsmanship, with iconic examples seen in the Taj Mahal and Agra’s heritage workshops.",

  dos: [
    "Clean gently with a soft, dry or slightly damp cloth",
    "Use pH-neutral cleaners specifically meant for natural stone surfaces",
    "Place on sturdy, even surfaces to prevent accidental tipping or cracking",
    "Use coasters and mats if placing drinks or hot items on inlay tables",
    "Dust regularly to keep the stone’s natural shine intact"
  ],

  donts: [
    "Avoid acidic cleaners like vinegar, lemon, or bleach — they erode marble",
    "Do not scrub with harsh brushes or metal pads — they can scratch the inlay",
    "Avoid dropping or knocking heavy objects onto it — marble chips easily",
    "Do not use the item outdoors if not sealed — weather damages the stone",
    "Don’t allow water to sit on the surface — it causes staining and dullness"
  ],

  endangered: "Marble Inlay is time-consuming and demands high precision, but current market competition from machine-made imitations undervalues this handmade art. Younger generations often leave the profession due to low earnings and lack of recognition.",

  special: [
    "Uses semi-precious stones like lapis lazuli, malachite, coral, turquoise, onyx, and mother-of-pearl",
    "Each design is handcrafted and stone chips are individually set into marble grooves",
    "Polished to a glass-like finish that enhances the luster of each stone",
    "Artisans typically learn the craft through family lineage over generations",
    "Seen in heritage buildings like the Taj Mahal, and continues in Agra and Rajasthan"
  ],

  note: "Marble Inlay is functional but best appreciated as a luxury décor piece. While strong, it is still delicate — treat it like heirloom art. Even a small coaster holds centuries of stone-carving legacy.",

  message: "When you admire Marble Inlay, you're not just seeing a polished surface —\nYou're witnessing a legacy carved stone by stone, in silence and skill.\nYour interest helps preserve this jewel of India's imperial heritage."
}
      },
      {
        image: 'https://m.media-amazon.com/images/I/81vBpJ6pNpL._AC_UF1000,1000_QL80_.jpg',
        title: 'Pashan Kala',
        placardMessage: "🕒 Sandstone sculptures require 40–80 hours",
        description: 'Pashan Kala refers to the traditional soapstone carving craft practiced in regions like Odisha and Karnataka. Artisans sculpt soft, easily workable stone into detailed idols, lamps, and home décor, known for smooth texture and fine detailing.',
        history: "Pashan Kala, or the Stone Age, marks the earliest and one of the most important phases of human history. It is defined by the widespread use of stone tools and covers a vast time period from around 2.5 million years ago to about 3,300 BCE. The Stone Age is traditionally divided into three phases: the Paleolithic (Old Stone Age), Mesolithic (Middle Stone Age), and Neolithic (New Stone Age). These stages represent a gradual but significant evolution in human technology, society, and culture.The Paleolithic period, stretching from 2.5 million years ago to around 10,000 BCE, is the longest phase of the Stone Age. During this era, early humans lived as nomadic hunter-gatherers. They used crude stone tools made of flint and quartzite to hunt animals and gather edible plants. These tools included hand axes, scrapers, and cleavers. Evidence of Paleolithic settlements has been found at several archaeological sites in India, such as Bhimbetka in Madhya Pradesh, Attirampakkam in Tamil Nadu, and Belan Valley in Uttar Pradesh. Some of these sites also feature prehistoric cave paintings, providing a glimpse into the lives and beliefs of early humans.The Mesolithic period, or Middle Stone Age, followed the Paleolithic and lasted roughly from 10,000 BCE to 4,000 BCE. This period saw the development of more refined and specialized stone tools, especially microliths—small, sharp blades used for hunting and cutting. Humans during this era began to adopt semi-nomadic lifestyles, with early signs of fishing, animal domestication, and gathering of wild grains and fruits. Mesolithic people likely lived in temporary shelters and had started to engage in basic forms of social organization. Sites like Chopani Mando (Uttar Pradesh) and Bagor (Rajasthan) reveal the technological and cultural developments of this transitional phase.The Neolithic period, or New Stone Age, marked a revolutionary change in human life and society. It began around 4,000 BCE and lasted until 1,000 BCE in the Indian subcontinent. This era saw the advent of agriculture and domestication of animals, leading to the establishment of permanent settlements. Humans started cultivating crops like wheat, barley, and rice and rearing cattle, sheep, and goats. Polished stone tools, pottery, weaving, and the construction of homes—sometimes pit dwellings—became common. Important Neolithic sites in India include Koldihwa (Uttar Pradesh), Burzahom (Kashmir), Mehrgarh (now in Pakistan), and Chirand (Bihar). These places provide evidence of early farming, social organization, and cultural practices, such as ritual burials and community life.Overall, the Pashan Kala was a foundational period in human history. It traces the journey of humans from simple, nomadic life to the beginnings of settled civilizations. The development of tools, food production, social structures, and culture during this period laid the groundwork for the Bronze Age and the rise of urban societies. The archaeological sites and remains from the Stone Age offer invaluable insight into our early ancestors and the evolution of human life on the Indian subcontinent.",
        process: [
  {
    title: 'Beginning with Basic Stone Tools and Nomadic Life',
    description: 'Early humans used crude stone tools such as hand axes and scrapers made from rocks. They led a nomadic lifestyle, living in caves or open areas and surviving by hunting animals and gathering wild fruits and roots.'
  },
  {
    title: 'Discovery of Fire and Early Communication',
    description: 'The discovery and control of fire marked a major milestone. It allowed humans to cook food, stay warm, and protect themselves. During this time, simple language, sounds, and gestures began to develop for communication.'
  },
  {
    title: 'Advancements in Tools and Settling Patterns',
    description: 'Humans started crafting refined tools like microliths for specific tasks. They began fishing, taming animals, and staying longer in one location—indicating a shift from purely nomadic to semi-nomadic lifestyles.'
  },
  {
    title: 'Agricultural Revolution and Permanent Settlements',
    description: 'With the advent of agriculture in the Neolithic period, humans began farming and domesticating animals. This led to permanent villages, better tools, pottery making, and more organized community life.'
  },
  {
    title: 'Cultural and Social Development',
    description: 'People started creating pottery, weaving cloth, and engaging in rituals like burials. Early social hierarchies formed, and artistic expression appeared in the form of cave paintings and decorated tools, marking the roots of human culture.'
  }
],
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Stone_work_at_Konark_Orissa_India.jpg/500px-Stone_work_at_Konark_Orissa_India.jpg",
          "https://mollisarts.com/upload/1031217705.jpg",
          "https://s.alicdn.com/@sc04/kf/U12260855d9de4489a0e8554bfe3f6ebdq.jpg_720x720q50.jpg",
          "https://s.alicdn.com/@sc04/kf/A85ecee109a8d4b05abb6851d10193adca.jpg_720x720q50.jpg",
          "https://s.alicdn.com/@sc04/kf/A39e599ee0b214b55a12afb9d26235d02f.jpg_720x720q50.jpg"
        ],
        clusterLocation: "Varanasi, Uttar Pradesh",
        clusterDetails: {
          district: 'Varanasi, Uttar Pradesh',
          population: 'Varanasi has over 12 lakh (1.2 million) people; stone carving is practiced in areas like Gaurakshni and Chunar (nearby), famous for sculptures, idols, and temple architecture',
          language: 'Hindi, Bhojpuri',
          bestTime: 'October to March (cool weather, festive season, and ideal for exploring craft hubs)',
          stay: 'Varanasi city (extensive range of hotels, lodges, and heritage stays along the ghats)',
          howToReach: 'Nearest airport: Lal Bahadur Shastri International Airport; Varanasi is well-connected by train and road to major Indian cities',
          localTravel: 'Auto-rickshaws, e-rickshaws, taxis, and boats along the Ganga',
          mustEat: 'Banarasi Kachori-Sabzi, Tamatar Chaat, Malaiyo (winter delicacy), and Banarasi Paan',
        },
        care: {
  importance: "Pashan Kala, or Stone Craft, reflects India's ancient mastery over sculpting divine and decorative forms from hard rock. From temple idols to intricate figurines and home décor, it carries the spiritual and cultural pulse of our land carved into timeless stone.",

  dos: [
    "Dust regularly with a soft, dry cloth to preserve detailing",
    "For deeper cleaning, use a slightly damp cloth — wipe gently and dry immediately",
    "Place on sturdy, flat surfaces to prevent falls or tipping",
    "Use felt pads or cushioning below to avoid scratches on surfaces",
    "Apply natural polish (like beeswax) on some stone types to retain sheen"
  ],

  donts: [
    "Do not use acidic or abrasive cleaners — they corrode or discolor the stone",
    "Avoid exposing the piece to direct sunlight for long hours — it may cause fading",
    "Never drop or strike — even hard stones can chip at detailed carvings",
    "Do not use metal scrubbers or harsh brushes",
    "Avoid placing outdoors unless the stone is weather-sealed"
  ],

  endangered: "With cheaper machine-made idols flooding the market and reduced patronage, many master artisans of Pashan Kala are shifting to other livelihoods. This heritage risks fading away unless consciously preserved through ethical buying and awareness.",

  special: [
    "Crafted from marble, granite, sandstone, soapstone, or basalt — depending on region",
    "Each piece is hand-chiseled using traditional tools and techniques",
    "Often features mythological, religious, or natural themes",
    "Practiced in states like Odisha, Rajasthan, Tamil Nadu, and Madhya Pradesh",
    "Used in architecture, sculpture, utility ware, and temple décor for centuries"
  ],

  note: "Pashan Kala is more than just sculpture — it is spirit frozen in stone. Every curve and contour carries the rhythm of a hammer guided by faith, history, and intuition. Handle it with reverence.",

  message: "When you appreciate Pashan Kala, you're not just collecting stone —\nYou're honoring a spiritual rhythm shaped by patience and devotion.\nYour interest carves a future for the hands that chisel India’s soul."
}
      },
      {
        image: 'https://kevinstandagephotography.wordpress.com/wp-content/uploads/2018/04/ksp_5094.jpg?w=890',
        title: 'Khajuraho',
        placardMessage: "🕒 Exquisite temple carving: 100+ hours",
        description: 'Khajuraho Stone Sculptures are world-famous for their intricate and expressive carvings on sandstone temples, depicting divine figures, dancers, and symbolic human forms. These masterpieces from the 9th to 12th centuries showcase the artistic zenith of Chandela dynasty craftsmanship.',
        history: "The Khajuraho Group of Monuments, located in Madhya Pradesh, India, represents one of the finest examples of Indian architectural and sculptural traditions. These temples were constructed primarily during the rule of the Chandela dynasty, between 950 CE and 1050 CE. The Chandelas were great patrons of art, architecture, and religion, and their capital, Khajuraho (historically known as Kharjuravāhaka), became a significant cultural and religious center.The construction of the temples began under King Yashovarman in the 10th century, with notable early temples like the Lakshmana Temple, dedicated to Lord Vishnu. His successors, including King Dhanga and King Vidyadhara, continued the tradition, leading to the construction of architectural masterpieces like the Kandariya Mahadeva Temple, known for its towering spire and intricate carvings.What distinguishes Khajuraho is its unique Nagara-style architecture, characterized by tall shikharas (spires), complex layouts, and highly ornate exteriors. The temples are made primarily of sandstone, and what truly sets them apart is the extraordinary stone carving. Over 20 surviving temples feature thousands of sculptures depicting gods, goddesses, mythical beings, celestial nymphs (apsaras), musicians, dancers, and scenes of daily life. A small but iconic portion of these carvings includes erotic sculptures, which have led to global curiosity and academic interest. These carvings are not isolated but deeply integrated with themes of spirituality, cosmic union, and the celebration of life.The temples were divided into three geographical groups: Western, Eastern, and Southern. The Western group is the largest and most artistically accomplished, housing the Kandariya Mahadeva, Lakshmana, and Vishwanath temples. The Eastern group includes significant Jain temples like Parsvanatha and Adinatha, reflecting Khajuraho's pluralistic religious environment. The Southern group is smaller but continues the artistic tradition.After the decline of the Chandela dynasty, Khajuraho was gradually abandoned, and its temples were overtaken by the forest. The site remained largely unknown until it was rediscovered in 1838 by British surveyor T.S. Burt, who was astonished by the grandeur of the sculptures. This rediscovery led to a revival of interest in Indian temple art and sculpture.In 1986, the Khajuraho Group of Monuments was designated a UNESCO World Heritage Site, recognizing its global significance. The craftsmanship seen in Khajuraho reflects not just religious devotion, but also deep knowledge of human anatomy, stone engineering, symbolism, and aesthetics. Today, Khajuraho stands as a testimony to India’s rich medieval craft heritage, combining architecture, sculpture, and philosophy into a singular artistic expression that continues to attract visitors and scholars from around the world.",
        process: [
  {
    title: 'Selection of Site and Planning',
    description: 'The temple construction began with selecting a sacred site based on vastu shastra principles. Detailed planning included axial alignments, cardinal directions, and symbolic mandala-based layouts to ensure spiritual and cosmic harmony.'
  },
  {
    title: 'Procurement and Transport of Sandstone',
    description: 'Fine-grained sandstone, typically buff, pink, or pale yellow, was sourced locally. Large blocks were transported to the site using wooden rollers, elephants, and human labor—requiring immense coordination and strength.'
  },
  {
    title: 'Carving Before Assembly',
    description: 'In contrast to modern methods, artisans pre-carved the stone blocks on the ground. Sculptors etched motifs, patterns, and figures before the stones were positioned within the structure.'
  },
  {
    title: 'Temple Construction Without Mortar',
    description: 'The temples were constructed using a dry technique called corbelling. Stones were precisely cut and stacked without mortar, held together by gravity and a tongue-and-groove interlocking system that ensured durability.'
  },
  {
    title: 'Detailed Sculptural Work',
    description: 'After assembly, skilled sculptors added elaborate carvings on the walls, ceilings, and pillars—depicting deities, mythical beings, apsaras, musicians, and even erotic scenes. Each sculpture conveyed spiritual and philosophical meanings.'
  },
  {
    title: 'Integration of Architecture and Art',
    description: 'Built in the Nagara style, each temple featured a sanctum (garbhagriha), assembly hall (mandapa), and a towering spire (shikhara). The design followed intricate architectural canons that combined structural purpose with visual elegance.'
  },
  {
    title: 'Final Polishing and Finishing Touches',
    description: 'Once the construction and sculpting were complete, artisans polished the stone surfaces to enhance the carvings. Ritual consecration ceremonies followed, marking the temple’s readiness as a spiritual and cultural center.'
  }
        ],
        images: [
          "https://www.travelclix.in/wp-content/uploads/2020/04/templae-wall-architecture-1-khajuraho-travelShot.jpg",
          "https://magikindia.com/wp-content/uploads/2017/05/khajuraho-1.jpg",
          "https://smarthistory.org/wp-content/uploads/2023/11/13630306625_f7d72f37aa_o-2048x1479.jpg",
          "https://smarthistory.org/wp-content/uploads/2023/11/6334563652_203ca2291a_o-870x1308.jpg",
          "https://cisindus.org/wp-content/uploads/2020/01/1-9.jpg"
        ],
        clusterLocation: "Chhatarpur, Madhya Pradesh",
        clusterDetails: {
          district: 'Chhatarpur, Madhya Pradesh',
          population: 'Khajuraho is a small town with around 20,000 people; stone carving is a traditional craft kept alive by local artisans inspired by the ancient temple sculptures',
          language: 'Hindi, Bundeli',
          bestTime: 'October to March (pleasant weather and perfect for temple and artisan tours)',
          stay: 'Khajuraho town (offers a variety of hotels from budget to luxury resorts near the temple complex)',
          howToReach: 'Nearest airport: Khajuraho Airport (domestic); well-connected by train and road from Jhansi, Satna, and Delhi',
          localTravel: 'Auto-rickshaws, cycle-rickshaws, and rental bikes available within the town',
          mustEat: 'Poha, Bhutte ka Kees, Dal Bafla, and local sweets like Mawa Bati',
        },
        care: {
  importance: "Khajuraho Stone Craft is a continuation of the majestic artistry seen in the UNESCO World Heritage temples of Khajuraho. Each sculpture captures divine grace, mythological storytelling, and sensual elegance, carved from sandstone using centuries-old techniques.",

  dos: [
    "Dust regularly with a soft brush or microfiber cloth to protect intricate details",
    "Use a slightly damp cloth for cleaning and dry immediately to avoid moisture stains",
    "Display in stable environments — away from excessive humidity or sunlight",
    "Apply a mild stone polish once in a while (if unpainted) to maintain surface finish",
    "Handle with both hands to avoid accidental drops or pressure on delicate parts"
  ],

  donts: [
    "Avoid harsh chemical or acidic cleaners — they erode natural sandstone",
    "Do not scrub carvings with metal or stiff-bristle brushes",
    "Do not place in water or expose to prolonged damp conditions",
    "Avoid direct exposure to strong sunlight — it may lead to surface fading",
    "Never place heavy objects on top of or against the carvings"
  ],

  endangered: "Modern architectural preferences and reduced tourism have led to a decline in the demand for handmade Khajuraho-style sculptures. Young artisans are discouraged by low returns and long training periods, endangering this deeply spiritual craft.",

  special: [
    "Crafted from local sandstone, the same used in Khajuraho temples",
    "Inspired by themes of divinity, dance, music, love, and mythology",
    "Each piece is hand-chiseled using traditional tools passed down through generations",
    "Famous for sensual and expressive postures known as 'Mudras'",
    "Maintains the artistic and spiritual legacy of Chandela-era temple art"
  ],

  note: "Khajuraho Stone Craft isn't just décor — it's a whisper from India's classical soul. Every sculpture speaks of sacred geometry, passion, and faith that once adorned temple walls. Treat it as sacred heritage, not just stone.",

  message: "When you cherish Khajuraho Stone Craft, you're not just admiring sculpture —\nYou're keeping divine storytelling alive in every chisel mark.\nYour interest fuels the memory of India's stone-carved legacy."
}
      },
      {
        image: 'https://www.surfacesreporter.com/myuploads/square/20220121051843.jpg',
        title: 'Kalinga',
        placardMessage: "🕒 Decorative pieces made in 25–50 hours",
        description: "Kalinga Stone is a brand known for producing engineered surfaces like marble, quartz, and terrazzo. They offer a wide range of designs inspired by natural stones, with a focus on both aesthetics and durability. KalingaStone's products are exported to numerous countries and are used in various applications, from countertops to statement walls.",
        history: "Kalinga, the ancient name for the coastal region of present-day Odisha, is celebrated for its enduring legacy of craftsmanship that stretches back thousands of years. Renowned for its strategic geographical location and rich cultural interactions, Kalinga developed a distinctive craft tradition shaped by dynastic patronage, maritime trade, and local ingenuity.In the earliest phases of its history, archaeological findings from the Chalcolithic era indicate a thriving craft culture, with evidence of pottery, stone tools, and copper artifacts. These discoveries suggest that the roots of Kalinga’s artistic expression were already established long before the rise of major Indian empires. Under the Nanda dynasty, the region witnessed economic and cultural development, as seen in the evolution of pottery styles and early coinage systems. Kalinga’s eventual assertion of independence during the Mauryan period marked its emergence as a vibrant, self-sustaining center of arts and crafts.Kalinga’s maritime heritage played a crucial role in shaping its craft traditions. As an active participant in sea trade with Sri Lanka, Southeast Asia, and beyond, Kalinga not only exported textiles, jewelry, and stoneware but also absorbed diverse cultural influences. These exchanges enriched its artistic vocabulary, giving rise to crafts that bore traces of both local tradition and international aesthetics.The region saw its golden age during the Ganga and Gajapati dynasties (11th–15th centuries), when monumental temple-building projects like the Sun Temple at Konark and the Jagannath Temple in Puri became showcases of architectural brilliance. The intricate stone carvings, woodwork, and metalwork found in these temples are a testament to the advanced craftsmanship of the time. These dynasties also patronized the performing and visual arts, further embedding artistic skills into the cultural fabric of Kalinga.Among Kalinga’s most iconic crafts is Pattachitra, a form of scroll painting on palm leaf or cloth, known for its vibrant palette and themes from Hindu mythology. Tarakasi, or silver filigree work, demonstrates the high level of precision and artistry developed in Cuttack, where fine silver wires are twisted and soldered into intricate designs. Dhokra, an ancient method of metal casting using the lost-wax technique, continues to thrive in tribal belts of Odisha, producing everything from jewelry to ritual figurines. Appliqué work, particularly from Pipili, involves hand-stitching cut-out fabric pieces onto base cloth to create decorative temple hangings, umbrellas, and home décor. The region also boasts Sambalpuri Ikat (Bandhakala), a complex tie-dye weaving technique passed down for generations.Other traditional crafts such as Kalinga weaving, practiced in villages like Mabilong, highlight the cultural depth of Odisha’s textiles, where handwoven blankets and garments reflect both utility and aesthetic.In recent decades, Kalinga's artisans have shown a remarkable ability to adapt their age-old techniques to suit contemporary tastes and markets. While maintaining authenticity in materials and methods, modern designers and craftsmen now incorporate traditional motifs into fashion, home décor, and export items, giving these heritage crafts renewed relevance.In summary, the crafts of Kalinga stand as living legacies of a region that has always valued creativity, spirituality, and skill. Shaped by dynastic influence, trade networks, and an artistic ethos deeply rooted in tradition, Kalinga’s craft history continues to inspire and evolve—connecting its ancient soul with a modern global audience.",
        process: [
  {
    title: 'Material Selection',
    description: 'Artisans begin by selecting high-quality natural materials unique to each craft. For instance, palm leaves or cotton cloth are used for Pattachitra, pure silver for Tarakasi filigree, beeswax and metal for Dhokra casting, colored fabrics for Appliqué, and hand-spun yarn for Ikat weaving.'
  },
  {
    title: 'Preparation of Base',
    description: 'Each craft involves a specialized preparation step: Pattachitra cloth is stiffened with tamarind seed paste; silver in Tarakasi is melted and drawn into fine wires; Appliqué cloth is washed and precisely cut; Ikat yarn is tied and dyed before weaving; Dhokra artisans prepare a wax model as the base for casting.'
  },
  {
    title: 'Designing and Drawing',
    description: 'Traditional motifs are drawn or mapped on the prepared surfaces. Pattachitra artists sketch mythological scenes; Tarakasi designs are mapped before twisting wires; Appliqué features floral and geometric templates traced on fabric; in Ikat, designs are visualized and pre-planned during yarn tying.'
  },
  {
    title: 'Crafting and Detailing',
    description: 'Artisans then create the detailed artwork: Pattachitra painters fill outlines with natural colors; Tarakasi workers shape silver wires into intricate lacework; Dhokra involves creating a clay mold from a wax model; Appliqué artisans stitch fabric pieces onto a base; Ikat weavers interlace dyed threads into pre-visualized patterns.'
  },
  {
    title: 'Finishing Touches',
    description: 'Each item is refined for durability and presentation: Pattachitra paintings are lacquered; Tarakasi ornaments are polished; Dhokra pieces are cleaned and brushed post-casting; Appliqué is ironed and stitched cleanly; Ikat fabrics are washed and pressed.'
  },
  {
    title: 'Quality Check and Marketing',
    description: 'Final inspection ensures perfection. Crafts are then sold in local markets, exhibitions, or online. Many products are also adapted to contemporary styles while preserving traditional methods for wider appeal and global reach.'
  }
],
        images: [
          "https://jugyah-dev-property-photos.s3.ap-south-1.amazonaws.com/Screenshot_2024_12_16_174719_d0026fdd40.webp",
          "https://jugyah-dev-property-photos.s3.ap-south-1.amazonaws.com/Screenshot_2024_12_16_174639_52dc1992ec.webp",
          "http://jugyah-dev-property-photos.s3.ap-south-1.amazonaws.com/Screenshot_2024_12_16_174834_4ae22e953f.webp",
          "https://static.wixstatic.com/media/d6c03a_b280641bba0346c4b5ace9bfe0846b4e~mv2.jpeg/v1/fill/w_504,h_499,al_c,lg_1,q_80,enc_avif,quality_auto/d6c03a_b280641bba0346c4b5ace9bfe0846b4e~mv2.jpeg",
          "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202310/kalinga-stone-guide/elegant-kalinga-stone-design.jpg"
        ],
        clusterLocation: "Puri, Odisha",
        clusterDetails: {
          district: 'Puri, Odisha',
          population: 'Puri has around 2 lakh (200,000) people; Kalinga stone carving is practiced in villages like Pipili and Raghurajpur, continuing the architectural traditions seen in the Sun Temple at Konark and the Jagannath Temple',
          language: 'Hindi, Bundeli',
          bestTime: 'November to February (cool weather and festival season like Rath Yatra)',
          stay: 'Puri city (many hotels, guesthouses, and beach resorts available)',
          howToReach: 'Nearest airport: Bhubaneswar (~60 km); Puri is well-connected by train and road to Bhubaneswar and other cities',
          localTravel: 'Auto-rickshaws, cycle rickshaws, cabs, and buses; travel to artisan villages like Raghurajpur is common',
          mustEat: 'Dalma, Khichdi from Jagannath Temple (Mahaprasad), Rasgulla (Odisha version), and Chhena Poda',
        },
        care: {
  importance: "Kalinga Stone Craft is a proud legacy of Odisha, rooted in the temple architecture of Konark and Lingaraj. Carved from soft, workable stones like soapstone and sandstone, it reflects divine symbolism, intricate floral designs, and deep spiritual essence passed down from temple builders.",

  dos: [
    "Dust regularly with a soft, dry cloth or soft brush to preserve fine carvings",
    "Use a damp cloth only for occasional cleaning and dry immediately",
    "Place on stable and cushioned bases to avoid chipping",
    "Keep away from direct sources of heat or cold to prevent cracks",
    "Use stone-safe polish occasionally to maintain natural luster (if unpainted)"
  ],

  donts: [
    "Avoid water soaking or exposure to high moisture — it can erode soft stone",
    "Do not use acidic or chemical cleaners — they damage the natural surface",
    "Avoid rough handling, especially at sharp or detailed sections",
    "Do not keep under direct sunlight for prolonged hours — fading or cracks may occur",
    "Do not place heavy objects against the sculpture or relief"
  ],

  endangered: "Kalinga Stone Craft, once revered for temple sculpture, now faces decline as demand shifts to synthetic décor. Fewer young artisans take up the trade due to labor intensity, low profits, and limited market exposure.",

  special: [
    "Uses soft stone like chlorite (soapstone) and sandstone native to Odisha",
    "Traditionally crafted by the 'Sthapatis' — temple builders and sculptors",
    "Themes range from deities, dancers, and mythical creatures to floral patterns",
    "Tools include traditional chisels, hammers, and polishing stones",
    "Seen in Odisha’s world-famous temples, especially Bhubaneswar and Konark"
  ],

  note: "Kalinga Stone Craft is a sacred craft lineage — it’s not just sculpture, but a form of devotion passed hand-to-hand. Treat every piece with the respect due to sacred relics.",

  message: "When you appreciate Kalinga Stone Craft, you're not just admiring sculpture —\nYou're echoing centuries of divine storytelling etched in stone.\nYour interest keeps this spiritual legacy alive for generations to come."
}
      }

    ]
  },
  fibre: {
    id: "fibre",
    name: "Natural Fibre",
    image: "https://media.istockphoto.com/id/133418818/photo/natural-wool-yarns.jpg?s=612x612&w=0&k=20&c=xNBvQ3d3hi1ETo31fu5Xi30Qr5CweLjIzl0NVI4RAAU=",
    states: ["Assam", "West Bengal", "Odisha", "Kerala", "Tamil Nadu", "Manipur", "Jharkhand"],
    icon: "🌾",
    description: "Eco-friendly crafts made from jute, coir, banana fiber, and other natural materials, blending utility with tradition.",
    subcategories: [
      {
        image: 'https://www.memeraki.com/cdn/shop/files/Winter-in-Ghazipur-Wall-Hanging-by-Md.-Matim-1.jpg?v=1724398731',
        title: 'Ghazipur Wall Hangings',
        placardMessage: "🕒 Detailed embroidery takes 20–40 hours",
        description: 'Ghazipur Wall Hangings are traditional decorative pieces from Uttar Pradesh, crafted using jute and cotton with intricate floral and geometric patterns, reflecting rich regional artistry and vibrant folk aesthetics.',
        history: "Ghazipur wall hangings have a long and culturally rich history rooted in the vibrant textile traditions of eastern Uttar Pradesh, India. The craft is believed to have originated during the Mughal era, a period that saw significant artistic flourishing across North India. Ghazipur, known historically for its skilled weavers and artisans, became a prominent hub for handloom-based decorative textiles. Over generations, the artisans of this region developed a unique style of wall décor using locally available materials like jute and cotton, combining utility with beauty. These hangings were not just ornamental pieces; they served as expressions of cultural narratives, religious beliefs, and regional identity.The intricate designs found on Ghazipur wall hangings often reflect a fusion of influences—ranging from Persian floral patterns and Mughal motifs to depictions of local myths, festivals, and nature. This artistic blend gave rise to a highly stylized form of textile art, distinguished by its detailed embroidery, zari (metallic thread) work, mirror embellishments, and vibrant color schemes achieved using natural dyes. The use of natural fibers not only adds a rustic charm to each piece but also makes the craft environmentally sustainable. Traditionally, these wall hangings were used in homes during religious ceremonies or festivals, and as gifts during special occasions—signifying their role in social and spiritual life.Over time, as industrialization challenged handmade crafts, Ghazipur artisans continued to preserve their skills through community-based learning and cooperative societies. In recognition of the historical and artistic value of this craft, the Ghazipur wall hanging was awarded the Geographical Indication (GI) tag in 2018. This designation helped protect the authenticity of the craft and opened up new opportunities for market expansion and artisan empowerment. Today, this heritage art form is actively promoted under initiatives like the One District One Product (ODOP) scheme and supported by institutions such as NABARD, which assist in capacity building, quality improvement, and digital marketing.Despite the pressures of modernization, Ghazipur wall hangings have adapted well to contemporary tastes while retaining their traditional charm. Artisans now create a range of products, from wall panels and home décor items to customized pieces for urban and global consumers. The craft continues to be a source of livelihood for many families across Ghazipur, symbolizing not just artistic excellence, but also resilience, identity, and cultural pride.",
        process: [
  {
    title: 'Material Preparation and Dyeing',
    description: 'Natural fibers such as jute and cotton are thoroughly cleaned, spun into yarns, and dyed using bright natural or synthetic dyes to create vibrant base materials for the wall hangings.'
  },
  {
    title: 'Designing and Weaving',
    description: 'Traditional or contemporary motifs are drawn or conceptualized. The fabric is either handwoven on looms or selected from pre-woven jute or cotton cloth based on the intended design.'
  },
  {
    title: 'Embellishment',
    description: 'Artisans enhance the fabric with decorative techniques such as zari (metal thread) work, mirror work, appliqué, and hand embroidery. These embellishments bring texture and visual richness to the piece.'
  },
  {
    title: 'Finishing and Assembly',
    description: 'The finished piece is stitched, cleaned, and pressed. Loops or rods are added for hanging, and a final quality check is done before packaging and distribution.'
  }
],
        images: [
          "https://www.memeraki.com/cdn/shop/files/Houses-and-Boatsin-Ghazipur-Wall-Hanging-by-Md.-Matim-2_2400x.png?v=1724398746",
          "https://www.gitagged.com/wp-content/uploads/2019/05/GHAZIPUR-002-YELLOW-HOME-S2-03-1.jpg",
          "https://i0.wp.com/thevillg.design.blog/wp-content/uploads/2020/07/dsc_5093.jpg?fit=1200%2C800&ssl=1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhhpukiDtRzpI6t86IJRaXPJMJWmg42bPTg&s",
          "https://www.memeraki.com/cdn/shop/files/Peacock-in-Ghazipur-Wall-Hanging-by-Md.-Matim-2_800x.png?v=1724398725"
        ],
        clusterLocation: "Ghazipur, Uttar Pradesh",
        clusterDetails: {
  district: 'Ghazipur, Uttar Pradesh',
  population: 'Approximately 1.1 million (11 lakhs)',
  language: 'Hindi, Bhojpuri, Urdu',
  bestTime: 'November to February – Cool and pleasant weather, ideal for exploring local crafts and markets',
  stay: 'Budget hotels and guest houses are available in Ghazipur; better accommodation options in nearby cities like Varanasi',
  howToReach: 'Nearest railway station: Ghazipur City Railway Station (well-connected to Varanasi, Lucknow, and other major cities); Nearest airport: Varanasi (Lal Bahadur Shastri Airport), ~75 km away; also accessible by road via NH-31 and NH-233',
  localTravel: 'Auto-rickshaws, cycle rickshaws, e-rickshaws, and shared tempos are commonly used; cycle rickshaws are widely used for short distances and local markets',
  mustEat: 'Litti Chokha, Samosa with Jalebi, and local sweets like Thekua and Khurma'
},
        care: {
  importance: "Ghazipur Wall Hangings are a vibrant expression of traditional Indian embroidery and zari work. Crafted by skilled artisans, these wall hangings blend floral patterns, mythological themes, and Mughal-inspired motifs into decorative textiles that brighten any space with cultural depth.",

  dos: [
    "Dust regularly using a soft cloth or handheld vacuum with low suction",
    "If needed, dry clean only — avoid machine washing or soaking",
    "Hang in areas away from direct sunlight to prevent fading of colors",
    "Use anti-rust hooks or padded rods to support the hanging evenly",
    "Store rolled with acid-free paper when not in use to preserve fabric quality"
  ],

  donts: [
    "Do not wash with water — it can damage zari, sequins, and threads",
    "Avoid direct contact with oils, perfumes, or moisture",
    "Do not fold — folding may cause permanent creases or thread breaks",
    "Avoid using pins, nails, or clips that puncture or stretch the fabric",
    "Do not iron directly — if needed, use a cloth barrier on low heat"
  ],

  endangered: "The demand for handcrafted wall hangings has dropped due to mass-produced alternatives and limited promotion of Ghazipur’s regional artistry. Younger artisans often leave the craft for more sustainable income sources, putting this legacy at risk.",

  special: [
    "Made with cotton, silk, zari (metallic threads), and sometimes beads or sequins",
    "Designs inspired by Mughal gardens, Indian mythology, and traditional folk art",
    "Each piece is handcrafted — combining hand-stitching and embroidery",
    "Used in home décor, gifting, and ceremonial displays",
    "Ghazipur is a GI (Geographical Indication) tagged region for this craft"
  ],

  note: "These hangings are not just textiles — they are storytelling canvases woven by tradition. Handle with respect and preserve them as you would heirlooms.",

  message: "When you admire Ghazipur Wall Hangings, you're not just decorating walls —\nYou're supporting the threads of history stitched with devotion.\nYour interest gives life to the hands that keep this legacy alive."
}
      },
      {
        image: 'https://ddnews.gov.in/wp-content/uploads/2023/10/dolls-dying-of-the-light-puppet.jpg',
        title: 'Kathputlis',
        placardMessage: "🕒 Puppet making (wood + dress): 10–20 hours",
        description: 'Kathputlis are traditional Rajasthani string puppets made of wood and cloth, known for their vibrant costumes and expressive features, used in folk storytelling and cultural performances.',
        history: "Kathputli puppetry is one of the oldest and most iconic folk art traditions of Rajasthan, deeply rooted in its cultural and storytelling heritage. Believed to be over a thousand years old, this unique form of string puppetry is traditionally practiced by the Bhat community, also known as Nat Bhatt or Putli Bhatt, who have carried forward this legacy through generations. Originating as a form of nomadic entertainment, Kathputli artists would travel from village to village, performing heroic tales, legends, and folklore through skillfully crafted wooden puppets.The art form flourished under the patronage of Rajput rulers, who saw Kathputli as a powerful medium for storytelling, education, and royal amusement. These performances were not just theatrical; they served as oral histories, preserving regional legends, local values, and community memory. Each puppet, adorned with traditional Rajasthani attire and bright colors, embodied characters from epics, folk stories, and even historical figures.What makes Kathputli unique is not only its vivid puppets and engaging narratives but also its connection to community identity. The Bhat families passed down the craft and performance skills from one generation to the next, keeping the tradition alive despite changing times. Over the years, while the nomadic lifestyle of puppeteers has diminished, the art form itself has evolved. Today, modern Kathputli artists often incorporate social messages, contemporary issues, and educational themes into their performances, making the craft relevant in today’s world.Kathputli puppetry has become a symbol of Rajasthani culture, frequently showcased at cultural festivals, fairs, and tourist events. Despite challenges, it continues to thrive as a testament to Rajasthan’s rich artistic heritage and the enduring storytelling spirit of its people.",
        process: [
  {
    title: 'Wood Carving',
    description: 'The puppet-making process begins with carving the head and upper torso from lightweight wood, traditionally Aadu (Indian mango) or sevan wood. Artisans shape basic facial features using fine chisels and knives.'
  },
  {
    title: 'Painting the Face',
    description: 'After carving, expressive facial features are painted by hand using bright natural or acrylic colors. Large eyes, arched eyebrows, and vivid lips are key features that define the puppet’s character.'
  },
  {
    title: 'Making the Body and Limbs',
    description: 'The puppet’s body and limbs are created separately, using either wood or cloth-wrapped sticks. These are proportioned and shaped to match the head and ensure smooth movement.'
  },
  {
    title: 'Stitching the Costume',
    description: 'Traditional Rajasthani fabrics are stitched into vibrant costumes, such as ghagras for females and turbans or kurtas for male characters. The attire reflects the puppet’s role and local cultural styles.'
  },
  {
    title: 'Assembling the Puppet',
    description: 'All the parts—head, body, and limbs—are connected using multiple strings (usually five to eight). These strings are arranged strategically to allow lifelike movement of the puppet’s arms, head, and torso.'
  },
  {
    title: 'Decorating and Detailing',
    description: 'The puppet is adorned with decorative elements like sequins, beads, mirror work, and gota. These details enhance its visual appeal and preserve the aesthetic essence of traditional Rajasthani craft.'
  },
  {
    title: 'Stringing for Performance',
    description: 'Finally, the puppet is tied to a T-shaped wooden controller. Artisans test the balance and articulation, ensuring it performs smoothly during live shows with realistic motion.'
  }
],
        images: [
          "https://ddnews.gov.in/wp-content/uploads/2023/10/dolls-dying-of-the-light-puppet.jpg",
          "https://s7ap1.scene7.com/is/image/incredibleindia/kathputli-ka-khel-jaipur-rajasthan-1-craft-hero?qlt=82&ts=1726641305694",
          "https://5.imimg.com/data5/MV/FG/XE/SELLER-5333512/rajasthani-puppet-kathputli.jpg",
          "https://5.imimg.com/data5/CG/FL/MY-5333512/rajasthani-puppet-kathputly.jpg",
          "https://i.pinimg.com/originals/15/85/6c/15856cda5baed3f81acdc4a25a97cd4e.jpg",
          "https://c8.alamy.com/comp/2BJNG96/traditional-rajasthani-doll-dance-puppet-show-kathputli-dance-in-jaipur-rajasthan-india-2BJNG96.jpg",
          "https://www.rajasthantourplanner.com/blog/wp-content/uploads/2021/05/Kathputli-Dance-Rajasthan.jpg"
        ],
        clusterLocation: "Jaipur, Jodhpur, Udaipur, Rajasthan",
        clusterDetails: {
  district: 'Jaipur, Jodhpur, Udaipur, Rajasthan',
  population: 'Around 5,000 artisans (mostly from the Putli Bhatt community) are engaged in Kathputli making and performance, especially concentrated in Jaipur',
  language: 'Rajasthani (Marwari, Mewari), Hindi',
  bestTime: 'October to March – Pleasant weather and time of cultural fairs and festivals',
  stay: 'Heritage hotels, guesthouses, and budget hotels available in Jaipur, Udaipur, and Jodhpur',
  howToReach: 'Nearest stations: Jaipur Junction, Udaipur City, Jodhpur Junction; Airports: Jaipur International Airport, Maharana Pratap Airport (Udaipur), Jodhpur Airport; Well connected by train, road, and air from major Indian cities',
  localTravel: 'Auto-rickshaws, taxis, local buses, two-wheelers, and cycle rickshaws in older city areas',
  mustEat: 'Dal Baati Churma, Gatte ki Sabzi, Kachori, Mirchi Bada, Ghevar'
},
        care: {
  importance: "Kathputlis are more than puppets — they are carriers of Rajasthan's folk stories, satire, and social messages. With vibrant costumes and expressive faces, these handcrafted marionettes breathe life into India’s centuries-old puppetry tradition.",

  dos: [
    "Store hanging in a dry, dust-free space to preserve the strings and costume",
    "Dust gently using a soft brush or cloth, especially around the painted face",
    "Keep away from moisture and direct sunlight to prevent fabric fading",
    "Handle strings carefully to avoid tangling or breaking",
    "Use soft padding if storing in boxes to prevent damage to limbs and face"
  ],

  donts: [
    "Do not wash the puppet — fabric colors and facial paint may bleed or fade",
    "Avoid pulling or yanking the strings roughly",
    "Don’t expose to rain or humid environments — mold can damage fabric and wood",
    "Do not fold or compress the puppet — it can distort the limbs",
    "Avoid letting children handle unsupervised — fragile parts can snap"
  ],

  endangered: "With shrinking audiences for live puppet shows and rise of digital entertainment, traditional puppeteers face declining income. Younger generations are reluctant to carry forward the art, making this vibrant storytelling form vulnerable to extinction.",

  special: [
    "Made with wood, cloth, and natural dyes — each puppet is handcrafted",
    "Faces are painted with natural colors; costumes reflect Rajasthani attire",
    "Used in folk theatre to narrate epic tales and contemporary issues",
    "Operated by a single puppeteer using skillful string manipulation",
    "Symbol of Rajasthan’s cultural pride and artistic imagination"
  ],

  note: "Kathputlis are not toys — they are theatrical characters rooted in oral tradition. Preserve them as living folklore, not just collectibles.",

  message: "When you support Kathputlis, you’re not just buying a puppet —\nYou’re giving voice to folk storytellers who speak through strings.\nYour interest helps keep the magic of traditional puppetry alive."
}
      },
        {
        image: 'https://www.artisansoul.in/cdn/shop/collections/0E9A8054_Runr.jpg?v=1605178137',
        title: 'Madur Kathi Mat Weaving',
        placardMessage: " 🕒 Each mat needs 15–30 hours",
        description: 'Madur Kathi is a traditional mat-weaving craft from West Bengal, made from natural reed grass and known for its lightweight, durable, and beautifully patterned mats used in homes and rituals.',
        history: "Madur Kathi is a traditional mat-weaving craft native to West Bengal, India, deeply intertwined with the region’s historical, cultural, and economic heritage. The name 'Madur Kathi' comes from the grass-like reed Cyperus corymbosus, which is abundantly grown in the alluvial plains of Bengal and forms the core raw material of this eco-friendly craft.The historical roots of Madur Kathi weaving can be traced back to ancient India, with references to reed mats appearing in classical texts such as the Satapatha Brahmana, Mahabharata, and Atharvaveda. However, it was during the Muslim rule in Bengal, especially under the Mughal era, that the craft gained significant prominence. The finely woven mats, known as Masland, were highly valued for their quality and aesthetic appeal. These mats were not only used in royal households but were also integrated into the revenue system of the time. Under the Jaigirdari system, high-quality Masland mats were collected as a form of tax or tribute, emphasizing their value in administrative and economic contexts.The significance of the craft was further solidified in 1744 when Nawab Alivardi Khan issued a royal charter that made it mandatory to supply Masland mats to the district collectorate. This endorsement from the ruling elite boosted the status of Madur Kathi weaving, particularly in the Midnapore region (now Paschim Medinipur), which became the hub of production.Over the centuries, the craft evolved through innovation and transmission of skills from generation to generation. Local artisans, especially women, developed intricate weaving techniques and unique designs that distinguish Madur Kathi products. These mats became a staple in Bengali households—not just as floor coverings, but also as symbols of cultural heritage and artistic expression.In recognition of its historical and cultural significance, Madur Kathi weaving was awarded the Geographical Indication (GI) tag in 2018 by the Government of West Bengal. Today, the craft continues to thrive in rural Bengal, supported by government initiatives and artisan cooperatives. Madur Kathi products—ranging from traditional mats to contemporary table runners, bags, and wall hangings—are celebrated for their sustainability, durability, and eco-friendliness, making them relevant even in modern contexts.In essence, the story of Madur Kathi is one of tradition, resilience, and cultural pride—woven into the fabric of Bengal's rural life and artistic identity.",
        process: [
  {
    title: 'Harvesting the Madur Kathi Reed',
    description: 'The process begins with harvesting Madur Kathi (Cyperus corymbosus) reeds from the marshy regions of West Bengal, typically during the monsoon season when the reeds are tall, flexible, and at peak strength.'
  },
  {
    title: 'Drying and Sorting',
    description: 'Harvested reeds are thoroughly cleaned and sun-dried to remove all moisture. They are then sorted by length, thickness, and quality, ensuring only the finest reeds are selected for weaving.'
  },
  {
    title: 'Splitting the Reeds',
    description: 'The dried reeds are carefully split into thin strips using sharp knives or specialized tools. The strips are smoothened to eliminate rough edges, making them suitable for precise and clean weaving.'
  },
  {
    title: 'Coloring (Optional)',
    description: 'In decorative variants, the reed strips are dyed using natural or synthetic dyes. The strips are soaked in colored water, dried again, and used to create vibrant patterns in the mat design.'
  },
  {
    title: 'Weaving the Mat',
    description: 'Weaving is done manually on a bamboo frame or ground loom. Cotton threads act as the warp, while the reed strips are woven through as the weft. Artisans create intricate geometric or floral designs during this process.'
  },
  {
    title: 'Finishing Touches',
    description: 'After weaving, the mat is trimmed neatly. Edges are often stitched or reinforced with cloth or cotton piping to enhance both durability and visual appeal.'
  },
  {
    title: 'Drying and Pressing',
    description: 'The finished mat is sun-dried once again to eliminate any residual moisture. It is then pressed flat—sometimes under weighted boards—to ensure smoothness and an even surface.'
  }
],
        images: [
          "https://sahasa.in/wp-content/uploads/2021/03/madur-kathi-west-bengal.jpg",
          "https://joynagar.com/cdn/shop/products/Natural_Madur_kathi_eco_friendly_floor_mat_joynagar_handicraft_1.jpg?v=1622822131",
          "https://www.mizizi.in/wp-content/uploads/2021/12/Madurkathi-2nd-Chatai-1st-view.jpg",
          "https://www.artisansoul.in/cdn/shop/products/0E9A8044-Mat.jpg?v=1605157263",
          "https://www.mizizi.in/wp-content/uploads/2021/12/Madurkathi-3rd-Chatai-1st-view.jpg"
        ],
        clusterLocation: "Paschim Medinipur, West Bengal",
        clusterDetails: {
  district: 'Paschim Medinipur, West Bengal',
  population: 'Around 4,500 artisans are involved in Madur Kathi weaving, mainly women from rural households in Paschim Medinipur district',
  language: 'Bengali',
  bestTime: 'September to November (peak harvesting and weaving season with pleasant weather)',
  stay: 'Budget guesthouses and homestays available in towns like Midnapore; more comfortable options in Kharagpur or Kolkata',
  howToReach: 'Nearest railway stations: Midnapore and Kharagpur; well connected by road and rail to Kolkata. Buses and taxis are available from Kolkata and nearby cities',
  localTravel: 'Auto-rickshaws, buses, and cycle rickshaws for local travel between villages and markets',
  mustEat: 'Shorshe Ilish (Hilsa in mustard gravy), Begun Bhaja (fried eggplant), Mishti Doi (sweet curd)',
},
        care: {
  importance: "Madur Kathi mats are traditional floor and prayer mats woven from a special reed grass native to West Bengal. Lightweight, eco-friendly, and beautifully patterned, they represent a confluence of rural craftsmanship, utility, and cultural aesthetics.",

  dos: [
    "Wipe gently with a dry or slightly damp cloth to clean",
    "Air out periodically to prevent moisture build-up",
    "Roll loosely when storing to maintain shape and prevent creasing",
    "Store in a cool, dry place away from direct sunlight",
    "Keep off wet floors or damp surfaces to preserve reed quality"
  ],

  donts: [
    "Do not wash or soak in water — it can weaken the reed fibers",
    "Avoid folding sharply — it can crack the mat over time",
    "Do not expose to rain or high humidity",
    "Avoid placing heavy furniture on top to prevent permanent dents",
    "Do not use harsh brushes or vacuum cleaners — it may fray the weaving"
  ],

  endangered: "Madur Kathi weaving is mostly practiced by women in rural Bengal. Despite its eco-friendliness, the craft faces decline due to competition from synthetic alternatives and lack of consistent market demand.",

  special: [
    "Woven from 'madur kathi' reed grass (Cyperus pangorei)",
    "Traditionally woven by women artisans in Medinipur, West Bengal",
    "Natural dyes and geometric patterns give each piece a unique identity",
    "Used for sitting, sleeping, yoga, and ritual purposes",
    "Awarded GI (Geographical Indication) tag for authenticity and origin"
  ],

  note: "Madur Kathi is more than a mat — it is a story of sustainability and self-reliance woven by rural women. Handle it as both functional art and cultural heritage.",

  message: "When you value Madur Kathi, you’re not just choosing a mat —\nYou are empowering rural women and preserving Bengal’s eco-craft traditions.\nYour interest keeps this quiet, beautiful legacy alive."
}
      },
        {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-h-4BYYqkdJr2uwbxCR1rPTznT2cMF7Kvg&s',
        title: 'Pipli Applique Work',
        placardMessage: "🕒 Vibrant applique takes 20–40 hours per item",
        description: 'Pipli Applique Work from Odisha is a vibrant textile craft where colorful fabric pieces are stitched onto a base cloth to create intricate designs, often used in canopies, wall hangings, and festive decorations.',
        history: "Pipli appliqué traces its origins to the 12‑century Jagannath cult in coastal Odisha. Temple chronicles record that the Gajapati kings of Puri commissioned vast appliquéd canopies (chandua), umbrellas and banners for Lord Jagannath’s annual Rath Yatra, giving the craft a sacred role from its inception. The craft cluster that grew around the small halting town of Pipli—roughly 25 km from Puri—took charge of making these ritual textiles, and the colour code fixed by temple tradition is still followed today: green‑red for Balabhadra, black‑red for Subhadra and yellow‑red for Jagannath. Under sustained royal patronage, Pipli’s tailors refined a repertoire of cut‑cloth motifs—solar discs, crescent moons, the demon Rahu, peacocks, elephants, parrots, lotus blooms and creepers—hand‑stitching them onto stout cotton bases with ornamental stitches. These dazzling panels were joined into ceremonial tents, chariot awnings, pillows and seat‑covers for the deities, turning every major temple festival into a mobile exhibition of appliqué art. As pilgrimage traffic grew along the Bhubaneswar‑Puri highway, the craft left the temple precincts. From the late‑19th century onward, Pipli artisans began selling smaller items—garden umbrellas, wallets, lamp‑shades, wall hangings—to devotees and traders who carried them across India. After Independence the craft was further popularised by state‑run emporia; by the 1980s appliqué products had become a visual shorthand for Odisha’s folk identity, with workshops spreading to nearby villages such as Kanchana and Khurda. Modern times have brought both opportunity and strain. Tourist demand and export orders encouraged new colour palettes, synthetic fabrics and machine stitching, yet artisan incomes remain fragile—something starkly exposed during the COVID‑19 shutdown, when temple closures and vanished tourism halted sales for nearly three years. Even so, community elders continue to train younger tailors, and designers now collaborate with Pipli clusters to create fashion accessories and home décor that respect traditional iconography while appealing to urban buyers. Recognising its cultural and economic importance, the craft secured a Geographical Indication (GI) tag in 2008 (Registration No. 86/108), which safeguards the name “Pipli Appliqué Work” and helps artisans access branding and market‑linkage schemes run by the state’s handicrafts department. Thanks to this support, plus the renewed visibility the Rath Yatra enjoys online, Pipli appliqué endures as a vivid emblem of Odisha—stitched history that still billows over chariot canopies every summer and now brightens homes around the world.",
        process: [
  {
    title: 'Material Selection',
    description: 'Artisans start by selecting a sturdy base cloth—usually thick cotton or canvas—and bright, contrasting fabrics like cotton, silk, or poly-cotton for the appliqué motifs.'
  },
  {
    title: 'Design Tracing',
    description: 'Motifs such as the sun, moon, elephants, peacocks, and geometric shapes are sketched on paper or stiff card to create templates. These templates are then traced onto colored fabric using chalk or pencils.'
  },
  {
    title: 'Cutting the Motifs',
    description: 'Using fine scissors, the traced motifs are carefully cut out with a small margin. For multi-colored or detailed designs, motifs may be cut in multiple layers to achieve dimensional depth.'
  },
  {
    title: 'Edge Turning & Pressing',
    description: 'To prevent fraying, the raw edges of the motifs are turned under by 3–4 mm and lightly pressed or tacked. This step ensures sharp, clean edges and helps with precise placement during stitching.'
  },
  {
    title: 'Layout on the Base Cloth',
    description: 'The prepared motifs are arranged on the base fabric following a radial, mirrored, or narrative layout. They are temporarily fixed in place with pins or basting stitches to prepare for final sewing.'
  },
  {
    title: 'Hand-Stitching / Machine-Stitching',
    description: 'Traditionally, motifs are secured using decorative hand stitches like chain, herringbone, or satin stitch. Nowadays, artisans often use treadle or electric sewing machines for efficiency, while still hand-finishing edges for precision.'
  },
  {
    title: 'Embellishment',
    description: 'Appliqué pieces are enhanced with small mirrors (shisha), sequins, beads, or gota ribbons. These decorative elements add shimmer and ceremonial richness, especially for umbrellas, canopies, and wall hangings.'
  },
  {
    title: 'Joining & Backing (for larger pieces)',
    description: 'For large items such as temple canopies or wall panels, multiple appliquéd sections are stitched together using flat seams. A backing or interlining is added to strengthen the piece and improve its finish.'
  },
  {
    title: 'Finishing Touches',
    description: 'Edges are neatly hemmed or bound using contrasting bias tape. Loose threads are trimmed, and the entire piece is lightly pressed to fix the stitches and enhance presentation.'
  },
  {
    title: 'Quality Check & Packing',
    description: 'A final inspection is done to ensure strong stitching, vibrant color retention, and design symmetry. The completed work is then folded, packed, and dispatched to temple committees, craft fairs, or export buyers.'
  }
],
        images: [
          "https://indianfolkart.org/wp-content/uploads/2021/06/Indian-Handicraft-Bhibuti-Bhusan-06.jpg",
          "https://premlathasinternational.com/storage/2024/02/applique_work.jpeg",
          "https://5.imimg.com/data5/CV/IO/RS/SELLER-2589477/canopy-ceiling-velvet-cloth-pipili-applique-work.jpg",
          "https://i0.wp.com/jewelsofsayuri.com/wp-content/uploads/2022/01/pipli.jpg?fit=1200%2C1200&ssl=1",
          "https://c8.alamy.com/comp/FFXWAN/pipili-applique-work-pipili-puri-orissa-odisha-india-FFXWAN.jpg",
          "https://www.auchitya.com/wp-content/uploads/2021/01/pipli-work.jpg"
        ],
        clusterLocation: "Puri, Odisha",
        clusterDetails: {
  district: 'Puri, Odisha',
  population: 'Around 150 craftsmen and 500 women artisans are actively engaged in Pipli appliqué work in Pipli town',
  language: 'Odia',
  bestTime: 'September to November (active season before major Odia festivals like Durga Puja and Kartik Purnima)',
  stay: 'Budget hotels and guest houses are available in Pipli; more accommodation options in Bhubaneswar and Puri',
  howToReach: 'Nearest railway stations: Puri Junction (~40 km) and Bhubaneswar (~20 km). Nearest airport: Biju Patnaik International Airport, Bhubaneswar. Pipli is well-connected by road on the Bhubaneswar–Puri highway',
  localTravel: 'Auto-rickshaws, local buses, and cycle rickshaws are commonly used within Pipli and surrounding areas',
  mustEat: 'Dalma (lentils with vegetables), Chhena Poda (baked cottage cheese dessert), Pakhala Bhata (fermented rice with curd and fried accompaniments)',
},
        care: {
  importance: "Pipli Appliqué Work is a vibrant textile craft from Odisha, where colorful fabric pieces are hand-stitched onto a base cloth to form intricate patterns of animals, flowers, mythological figures, and folk motifs. It is both decorative and symbolic of regional pride and spirituality.",

  dos: [
    "Dry clean or gently hand wash in cold water with mild detergent",
    "Iron on reverse side using low heat to preserve applique and stitches",
    "Store folded with tissue or muslin to avoid friction damage",
    "Keep in a dry area to prevent mildew or color bleeding",
    "Use padded hangers or flat surfaces for display to maintain shape"
  ],

  donts: [
    "Do not machine wash or tumble dry — it can fray delicate stitching",
    "Avoid bleach or strong chemicals that damage fabric and dyes",
    "Do not expose to direct sunlight for long periods — it causes fading",
    "Avoid hanging in damp spaces where mold may develop",
    "Do not scrub the appliqué or embroidered portions roughly"
  ],

  endangered: "The fast-paced rise of synthetic home décor and low-cost factory textiles has diminished the market for slow handmade work like Pipli Appliqué. Artisans struggle with inconsistent incomes, pushing younger generations to move away from this craft.",

  special: [
    "Each piece is made using hand-cut fabric motifs stitched onto a base cloth",
    "Traditionally used for temple decorations, canopies, umbrellas, and wall hangings",
    "Originates from Pipli village in Odisha, a GI-tagged region",
    "Bright primary colors and mythological themes make it highly distinctive",
    "Eco-conscious and fully hand-stitched — no digital or machine appliqué used"
  ],

  note: "Pipli Appliqué is more than just festive décor — it’s a ritual art of celebration. Treat it as both craft and cultural treasure, deserving of mindful care.",

  message: "When you admire Pipli Appliqué, you’re not just drawn to its colors —\nYou’re connecting with centuries of temple traditions and folk narratives.\nYour interest helps this radiant legacy live on, one stitch at a time."
}
      }
    ]
  }
  
};
