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
      className="bg-offwhite w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-[60px] flex flex-col items-center"
    >
      <div className="w-full max-w-[1248px] flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-[60px]">
        {/* ── Top Part: Company Narrative + Facility Photo ── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 lg:gap-[48px]">
          {/* Left Column (Desktop): Text narrative */}
          <div className="flex-1 flex flex-col gap-5 sm:gap-6 md:gap-7 text-primary font-inter">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-justify lg:text-left">
              Kunbiola is a sourcing, distribution, and export company specializing in agricultural and mineral commodities such as raw cashew nuts, ginger, gum Arabic, charcoal, sesame seeds, shea butter, garlic, cocoa, iron ore, magnesium ore, and lead ore.
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-justify lg:text-left">
              With a supply chain network spanning major towns and cities across Nigeria, we partner with both local farmers and international companies to procure the finest quality commodities at competitive prices. Guided by our motto, “Supplying Global Markets,” Kunbiola stands at the intersection of local expertise and global market demand.
            </p>
          </div>

          {/* Right Column (Desktop): Facility Photo */}
          <div className="w-full lg:w-[480px] xl:w-[612px] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[400px] xl:h-[416px] flex-shrink-0 rounded-[20px] overflow-hidden shadow-md">
            <img
              src={aboutFacility}
              alt="Kunbiola agricultural produce sorting and processing facility"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* ── Bottom Part: OUR MISSION & OUR VISION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] pt-4">
          {/* OUR MISSION */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <h2 className="font-righteous text-accent text-[21px] sm:text-[32px] md:text-[44px] lg:text-[54px] xl:text-[64px] leading-tight text-center w-full uppercase">
              OUR MISSION
            </h2>
            <p className="font-inter text-primary text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-justify lg:text-left">
              We empower farmers and suppliers across Nigeria by sourcing, aggregating, and exporting high quality agricultural and mineral products. Through our robust supply chain and experience, we deliver excellence to domestic and global buyers while fostering local economic growth.
            </p>
          </div>

          {/* OUR VISION */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <h2 className="font-righteous text-accent text-[21px] sm:text-[32px] md:text-[44px] lg:text-[54px] xl:text-[64px] leading-tight text-center w-full uppercase">
              OUR VISION
            </h2>
            <p className="font-inter text-primary text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-justify lg:text-left">
              To be Africa’s trusted gateway for agricultural and mineral commodities, connecting local producers to domestic and global markets with integrity, efficiency, and sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
