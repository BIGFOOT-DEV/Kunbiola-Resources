import SectionHeader from './SectionHeader';
import { iconDiamond, iconSupport, iconPriceCheck, iconBox } from '../assets';

const features = [
  {
    icon: iconDiamond,
    title: 'Quality Assurance',
    desc: 'Strict checks for premium commodities',
  },
  {
    icon: iconSupport,
    title: 'Customer Care',
    desc: 'Dedicated help, whenever you need it',
  },
  {
    icon: iconPriceCheck,
    title: 'Competitive Pricing',
    desc: 'Fair rates without compromising quality',
  },
  {
    icon: iconBox,
    title: 'Secure Supply',
    desc: 'Reliable sourcing, safe global delivery',
  },
];

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="w-full max-w-[294px] lg:w-[294px] flex flex-col items-center gap-4 p-[15px] border border-primary shadow-card bg-offwhite">
      <img src={icon} alt={title} className="w-[33px] h-[33px]" />
      <div className="w-full flex flex-col gap-2 text-center">
        <p className="font-inter text-primary text-base lg:text-lg leading-5 lg:leading-6">{title}</p>
        <p className="font-inter text-muted-green text-sm lg:text-base leading-5 lg:leading-[26px]">{desc}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-offwhite w-full px-6 lg:px-24 py-8 lg:py-[50px] flex flex-col items-center gap-8 lg:gap-[50px]"
    >
      <SectionHeader title="WHY CHOOSE US?" variant="light" />

      {/* Mobile: vertical stack; Desktop: horizontal row */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-center w-full lg:shadow-btn">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
