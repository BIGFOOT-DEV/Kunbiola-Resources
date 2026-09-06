import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import {
  imgGinger, imgCocoa, imgSesameSeed, imgGarlic, imgHibiscus, imgSheaButter,
  imgCopper, imgGumArabic, imgCashew, imgIronOre, imgMagnisium, imgCharcoal,
} from '../assets';

const products = [
  { name: 'GINGER',         img: imgGinger      },
  { name: 'COCOA',          img: imgCocoa       },
  { name: 'SESAME SEEDS',   img: imgSesameSeed  },
  { name: 'GARLIC',         img: imgGarlic      },
  { name: 'HIBISCUS',       img: imgHibiscus    },
  { name: 'SHEA BUTTER',    img: imgSheaButter  },
  { name: 'COPPER',         img: imgCopper      },
  { name: 'GUM ARABIC',     img: imgGumArabic   },
  { name: 'RAW CASHEW NUT', img: imgCashew      },
  { name: 'IRON ORE',       img: imgIronOre     },
  { name: 'MAGNISIUM ORE',  img: imgMagnisium   },
  { name: 'CHARCOAL',       img: imgCharcoal    },
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

export default function ProductsSection() {
  return (
    <section
      id="products"
      aria-label="Our commodity products"
      className="bg-offwhite w-full px-6 sm:px-12 lg:px-20 xl:px-24 py-12 lg:py-20 flex flex-col items-center gap-8 lg:gap-14"
    >
      <SectionHeader title="PRODUCTS" variant="light" />

      {/* Responsive Grid with Mobile 4-Item Display & Fade Overlay */}
      <div className="w-full max-w-[1248px] relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 justify-items-center w-full">
          {products.map((p, idx) => (
            <div
              key={p.name}
              className={`w-full flex justify-center ${idx >= 4 ? 'hidden sm:flex' : 'flex'}`}
            >
              <ProductCard name={p.name} img={p.img} />
            </div>
          ))}
        </div>

        {/* Mobile bottom fade gradient overlay */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-offwhite via-offwhite/80 to-transparent pointer-events-none sm:hidden"
          aria-hidden="true"
        />
      </div>

      {/* Product Catalogue button */}
      <Link
        to="/products"
        className="bg-mint border border-primary rounded-[20px] shadow-btn px-6 py-3 font-inter font-semibold text-primary text-sm lg:text-base leading-6 whitespace-nowrap hover:bg-primary hover:text-offwhite transition-all transform hover:scale-105 active:scale-95 z-10"
      >
        PRODUCT CATALOGUE
      </Link>
    </section>
  );
}
