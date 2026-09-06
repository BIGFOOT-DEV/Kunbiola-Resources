import React from 'react';
import SectionHeader from './SectionHeader';
import {
  dotSvg, arrowSvg,
  iconReceiveQuote, iconSourceProduct, iconWarehouse, iconShipping, iconGlobe,
} from '../assets';

const steps = [
  { label: 'RECEIVE QUOTE',    icon: iconReceiveQuote  },
  { label: 'SOURCE PRODUCT',   icon: iconSourceProduct },
  { label: 'COMPOUND PRODUCE', icon: iconWarehouse     },
  { label: 'LOGISTICS',        icon: iconShipping      },
  { label: 'GLOBAL SHIPPING',  icon: iconGlobe         },
];

export default function HowWeDeliver() {
  return (
    <section
      id="deliver"
      className="bg-primary w-full px-6 lg:px-24 py-8 lg:py-[50px] flex flex-col items-center gap-8 lg:gap-[50px] overflow-hidden"
    >
      <SectionHeader title="HOW WE DELIVER" variant="dark" />

      {/* ── DESKTOP: horizontal progress bar + labels ── */}
      <div className="hidden lg:flex w-full max-w-[1248px] flex-col gap-6">
        {/* Progress bar with dots and arrows */}
        <div className="relative w-full h-6 bg-offwhite rounded-[40px] flex items-center justify-between px-[82px]">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="w-[10px] h-[10px] flex-shrink-0 relative z-10">
                <img src={dotSvg} alt="" className="w-full h-full" />
              </div>
              {i < steps.length - 1 && (
                <div className="w-4 h-auto flex-shrink-0">
                  <img src={arrowSvg} alt="" className="w-full" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step labels with icons */}
        <div className="flex items-start justify-between w-full">
          {steps.map((step) => (
            <div key={step.label} className="flex flex-col items-center gap-2 text-center w-[161px]">
              <img src={step.icon} alt={step.label} className="w-6 h-6" />
              <p className="font-inter font-bold text-offwhite text-base leading-8 whitespace-pre-wrap">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE: vertical stepper ── */}
      <div className="flex lg:hidden w-full max-w-[345px] flex-col">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-stretch gap-4">
            {/* Left column: dot + connecting line */}
            <div className="flex flex-col items-center flex-shrink-0 w-[10px]">
              {/* Dot */}
              <div className="w-[10px] h-[10px] rounded-full bg-offwhite flex-shrink-0 mt-[19px]" />
              {/* Connector line (not shown after last step) */}
              {i < steps.length - 1 && (
                <div className="flex-1 w-[2px] bg-offwhite/40 my-1" />
              )}
            </div>

            {/* Right column: icon + label */}
            <div className="flex items-center gap-3 py-3">
              <img src={step.icon} alt={step.label} className="w-6 h-6 flex-shrink-0" />
              <p className="font-inter font-bold text-offwhite text-sm leading-6">
                {step.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Description paragraph */}
      <div className="max-w-[345px] lg:max-w-[628px] text-center px-0 lg:px-[10px]">
        <p className="font-inter text-mint text-sm lg:text-base leading-6 lg:leading-[26px]">
          From your first quote to global delivery, Kunbiola's streamlined process ensures
          Nigeria's finest commodities reach you, wherever you are.
        </p>
      </div>
    </section>
  );
}
