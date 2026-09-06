import { aboutFacility } from '../assets';

/**
 * Main content section for the About Us page.
 * - Top: Company Overview narrative + Produce sorting facility image (about-facility.png).
 * - Bottom: OUR MISSION and OUR VISION cards with gold Righteous titles.
 *
 * Desktop: 2-column split layouts (1248px max width).
 * Mobile: Single-column vertical stacked layout (345px max width).
 */
export default function AboutContentSection() {
  return (
    <section
      id="about-content"
      className="bg-offwhite w-full px-6 lg:px-24 py-10 lg:py-[60px] flex flex-col items-center"
    >
      <div className="w-full max-w-[1248px] flex flex-col gap-12 lg:gap-[60px]">
        {/* ── Top Part: Company Narrative + Facility Photo ── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-[48px]">
          {/* Left Column (Desktop): Text narrative */}
          <div className="flex-1 flex flex-col gap-5 text-primary font-inter">
            <p className="text-sm lg:text-base leading-relaxed lg:leading-[26px] text-justify lg:text-left">
              Kunbiola is a sourcing, distribution, and export company specializing in agricultural and mineral commodities such as raw cashew nuts, ginger, gum Arabic, charcoal, sesame seeds, shea butter, garlic, cocoa, iron ore, magnesium ore, and lead ore.
            </p>
            <p className="text-sm lg:text-base leading-relaxed lg:leading-[26px] text-justify lg:text-left">
              With a supply chain network spanning major towns and cities across Nigeria, we partner with both local farmers and international companies to procure the finest quality commodities at competitive prices. Guided by our motto, “Supplying Global Markets,” Kunbiola stands at the intersection of local expertise and global market demand.
            </p>
          </div>

          {/* Right Column (Desktop): Facility Photo */}
          <div className="w-full lg:w-[612px] h-[240px] sm:h-[320px] lg:h-[416px] flex-shrink-0 rounded-[20px] overflow-hidden shadow-md">
            <img
              src={aboutFacility}
              alt="Kunbiola agricultural produce sorting and processing facility"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* ── Bottom Part: OUR MISSION & OUR VISION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[50px] pt-4">
          {/* OUR MISSION */}
          <div className="flex flex-col gap-3 lg:gap-5">
            <h2 className="font-righteous text-accent leading-none" style={{ fontSize: 'clamp(24px, 3.5vw, 32px)' }}>
              OUR MISSION
            </h2>
            <p className="font-inter text-primary text-sm lg:text-base leading-relaxed lg:leading-[26px] text-justify lg:text-left">
              We empower farmers and suppliers across Nigeria by sourcing, aggregating, and exporting high quality agricultural and mineral products. Through our robust supply chain and experience, we deliver excellence to domestic and global buyers while fostering local economic growth.
            </p>
          </div>

          {/* OUR VISION */}
          <div className="flex flex-col gap-3 lg:gap-5">
            <h2 className="font-righteous text-accent leading-none" style={{ fontSize: 'clamp(24px, 3.5vw, 32px)' }}>
              OUR VISION
            </h2>
            <p className="font-inter text-primary text-sm lg:text-base leading-relaxed lg:leading-[26px] text-justify lg:text-left">
              To be Africa’s trusted gateway for agricultural and mineral commodities, connecting local producers to domestic and global markets with integrity, efficiency, and sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
