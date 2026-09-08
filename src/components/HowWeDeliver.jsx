import React from 'react';
import SectionHeader from './SectionHeader';
import {
  dotSvg,
  arrowSvg,
  iconReceiveQuote,
  iconSourceProduct,
  iconWarehouse,
  iconShipping,
  iconGlobe,
} from '../assets';

const steps = [
  { label: 'RECEIVE QUOTE',    icon: iconReceiveQuote  },
  { label: 'SOURCE PRODUCT',   icon: iconSourceProduct },
  { label: 'COMPOUND PRODUCE', icon: iconWarehouse     },
  { label: 'LOGISTICS',        icon: iconShipping      },
  { label: 'GLOBAL SHIPPING',  icon: iconGlobe         },
];

/**
 * How We Deliver section — Rebuilt to exact Figma specifications:
 * - Desktop (Figma node 2069:1694 / 2069:1732):
 *   - Solid rounded pill track (h-6, rounded-[40px], bg-offwhite) with 5 dots & 4 arrows
 *   - 5 evenly distributed step labels directly below the track with icons & uppercase bold typography
 * - Mobile (Figma node 2067:1371 / 2081:2053):
 *   - Vertical rounded pill track (w-6, rounded-[40px], bg-offwhite) with 5 dots & 4 downward arrows
 *   - 5 step items aligned alongside the vertical track
 * - Bottom summary paragraph in brand mint text
 */
export default function HowWeDeliver() {
  return (
    <section
      id="deliver"
      className="bg-primary w-full px-6 lg:px-24 py-10 lg:py-[50px] flex flex-col items-center gap-8 lg:gap-12 overflow-hidden"
    >
      <SectionHeader title="HOW WE DELIVER" variant="dark" />

      {/* ── DESKTOP: Horizontal Progress Bar + Step Labels (Matching Figma Frame 2069:1732) ── */}
      <div className="hidden lg:flex w-full max-w-[1248px] flex-col gap-6">
        {/* Progress bar track with dots and arrows */}
        <div className="relative w-full h-6 bg-offwhite rounded-[40px] flex items-center justify-between px-12 xl:px-16 shadow-sm">
          {steps.map((step, i) => (
            <React.Fragment key={step.label}>
              <div className="w-[10px] h-[10px] flex-shrink-0 flex items-center justify-center">
                <img src={dotSvg} alt="" className="w-full h-full" />
              </div>
              {i < steps.length - 1 && (
                <div className="w-4 h-auto flex-shrink-0 flex items-center justify-center">
                  <img src={arrowSvg} alt="" className="w-full" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 5 Step labels with icons — evenly distributed across 5 grid columns */}
        <div className="grid grid-cols-5 w-full">
          {steps.map((step) => (
            <div
              key={step.label}
              className="flex items-center justify-center gap-2.5 text-center px-2"
            >
              <img
                src={step.icon}
                alt=""
                className="w-6 h-6 flex-shrink-0 object-contain"
              />
              <span className="font-inter font-bold text-offwhite text-sm xl:text-base leading-tight whitespace-nowrap">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE: Vertical Stepper with Pill Track (Matching Figma Frame 2081:2053) ── */}
      <div className="flex lg:hidden w-full max-w-[345px] items-stretch justify-center gap-5 sm:gap-6 py-2">
        {/* Left Column: Vertical White Pill Track with 5 dots & 4 downward arrows */}
        <div className="w-6 bg-offwhite rounded-[40px] flex flex-col items-center justify-between py-7 flex-shrink-0 shadow-sm min-h-[480px]">
          {steps.map((step, i) => (
            <React.Fragment key={step.label}>
              <div className="w-[10px] h-[10px] flex-shrink-0 flex items-center justify-center">
                <img src={dotSvg} alt="" className="w-full h-full" />
              </div>
              {i < steps.length - 1 && (
                <div className="w-3.5 h-auto flex-shrink-0 flex items-center justify-center rotate-90 my-1">
                  <img src={arrowSvg} alt="" className="w-full" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Right Column: 5 Step items aligned with the vertical dots */}
        <div className="flex flex-col justify-between flex-1 py-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.label}
              className="flex items-center gap-3.5 min-h-[36px]"
            >
              <img
                src={step.icon}
                alt=""
                className="w-6 h-6 flex-shrink-0 object-contain"
              />
              <span className="font-inter font-bold text-offwhite text-sm leading-tight whitespace-nowrap">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Description paragraph (Matching Figma Frame 2069:1764 & 2067:1441) */}
      <div className="max-w-[345px] lg:max-w-[628px] text-center px-2">
        <p className="font-inter text-mint text-xs sm:text-sm lg:text-base leading-relaxed lg:leading-[26px]">
          From your first quote to global delivery, Kunbiola’s streamlined process ensures
          Nigeria’s finest commodities reach you, wherever you are.
        </p>
      </div>
    </section>
  );
}
