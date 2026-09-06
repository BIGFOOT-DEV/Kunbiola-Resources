import { leafOrnamentDark, leafOrnamentLight } from '../assets';

/**
 * Reusable section heading with gold title + decorative leaf ornament.
 * @param {string} title - Section title text
 * @param {'dark'|'light'} variant - 'dark' for dark green bg, 'light' for white bg
 */
export default function SectionHeader({ title, variant = 'light' }) {
  const ornament = variant === 'dark' ? leafOrnamentLight : leafOrnamentDark;

  return (
    <div className="flex flex-col items-center w-full">
      <h2
        className="font-righteous text-accent leading-none text-center"
        style={{
          fontSize: 'clamp(28px, 4vw, 40px)',
          textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
        }}
      >
        {title}
      </h2>
      <div className="w-[160px] h-[36px] lg:w-[248px] lg:h-[56px] mt-1 flex-shrink-0">
        <img src={ornament} alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
