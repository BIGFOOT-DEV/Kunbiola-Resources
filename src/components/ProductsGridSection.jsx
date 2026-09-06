import {
  imgGinger, imgCocoa, imgSesameSeed, imgGarlic, imgHibiscus, imgSheaButter,
  imgCopper, imgGumArabic, imgCashew, imgIronOre, imgMagnisium, imgCharcoal,
  imgShishiCharcoal, imgGemStones, imgLeadOre,
} from '../assets';

/**
 * Full product catalogue — 15 products as defined in Figma.
 * Desktop: 6-column grid (Row 1: 6, Row 2: 6, Row 3: 3 centred).
 * Mobile:  2-column grid (Rows 1-7: 2 items each, Row 8: 1 item centred).
 */
const ALL_PRODUCTS = [
  { name: 'GINGER',          img: imgGinger        },
  { name: 'COCOA',           img: imgCocoa         },
  { name: 'SESAME SEEDS',    img: imgSesameSeed    },
  { name: 'GARLIC',          img: imgGarlic        },
  { name: 'HIBISCUS',        img: imgHibiscus      },
  { name: 'SHEA BUTTER',     img: imgSheaButter    },
  { name: 'COPPER',          img: imgCopper        },
  { name: 'GUM ARABIC',      img: imgGumArabic     },
  { name: 'RAW CASHEW NUT',  img: imgCashew        },
  { name: 'IRON ORE',        img: imgIronOre       },
  { name: 'MAGNISIUM ORE',   img: imgMagnisium     },
  { name: 'CHARCOAL',        img: imgCharcoal      },
  { name: 'SHISHI CHARCOAL', img: imgShishiCharcoal },
  { name: 'GEM STONES',      img: imgGemStones     },
  { name: 'LEAD ORE',        img: imgLeadOre       },
];

function ProductCard({ name, img }) {
  return (
    <div className="group flex flex-col items-center gap-3 lg:gap-4 w-full max-w-[210px] cursor-pointer">
      {/* Image with rounded rectangle clipping & interactive hover zoom */}
      <div className="w-full aspect-square rounded-[20px] overflow-hidden flex-shrink-0 bg-white shadow-sm group-hover:shadow-md transition-all duration-300">
        <img
          src={img}
          alt={`${name.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())} — Nigerian commodity for export`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      {/* Label */}
      <p className="font-inter font-normal text-primary text-xs sm:text-sm lg:text-base leading-tight text-center w-full group-hover:text-btn-hover transition-colors duration-200">
        {name}
      </p>
    </div>
  );
}

export default function ProductsGridSection() {
  return (
    <section
      id="all-products"
      aria-label="Full product catalogue — agricultural and mineral commodities from Nigeria"
      className="bg-offwhite w-full px-6 sm:px-12 lg:px-20 xl:px-24 py-12 lg:py-20 flex flex-col items-center"
    >
      <div className="w-full max-w-[1248px]">
        {/* Unified Responsive CSS Grid for all 15 products with 15th item centered on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 justify-items-center w-full">
          {ALL_PRODUCTS.map((p, idx) => {
            const isLast = idx === ALL_PRODUCTS.length - 1;
            return (
              <div
                key={p.name}
                className={`w-full flex justify-center ${isLast ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <ProductCard name={p.name} img={p.img} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
