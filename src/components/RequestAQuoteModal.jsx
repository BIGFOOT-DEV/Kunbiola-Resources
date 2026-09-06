import { useQuoteModal } from '../context/QuoteModalContext';
import {
  iconClose,
  iconWhatsappFoot,
  iconPhoneFoot,
  iconMailFoot,
  iconLocationFoot,
} from '../assets';

export default function RequestAQuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-hidden transition-opacity duration-300 animate-fadeIn"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      {/* Modal Card — Strictly constrained to viewport bounds & perfectly centered */}
      <div
        className="bg-primary w-full max-w-[1050px] max-h-[92dvh] overflow-y-auto rounded-[20px] p-6 sm:p-8 lg:px-14 lg:py-8 text-offwhite shadow-2xl relative border border-white/10 flex flex-col justify-center my-auto transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          aria-label="Close quote modal"
          className="absolute left-4 top-4 sm:left-6 sm:top-6 lg:left-8 lg:top-8 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-offwhite z-10"
        >
          <img src={iconClose} alt="Close" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
        </button>

        {/* Title */}
        <h2
          id="quote-modal-title"
          className="font-righteous text-accent tracking-wide text-center leading-tight uppercase select-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-6 sm:mt-2 lg:mt-0 mb-3 lg:mb-4 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl"
        >
          REQUEST A QUOTE
        </h2>

        {/* Instruction Paragraph */}
        <p className="font-inter text-offwhite text-xs sm:text-sm lg:text-base leading-relaxed text-center max-w-[850px] mx-auto mb-3 lg:mb-4">
          Please include product name, quantity, destination, and preferred delivery timeline in your request.
          <br className="hidden sm:inline" /> Our team will respond promptly.
        </p>

        {/* Sub-label */}
        <p className="font-inter text-mint text-xs sm:text-sm text-center mb-3 lg:mb-5">
          You can share your request through any of these channels…
        </p>

        {/* Contact Channels Grid */}
        <div className="max-w-[850px] mx-auto flex flex-col gap-3 lg:gap-4 w-full">
          {/* Row 1: WhatsApp + Phone */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full">
            {/* WhatsApp Pill */}
            <a
              href="https://wa.me/2348023229308"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-btn-hover hover:brightness-110 h-[44px] lg:h-[48px] rounded-[20px] flex items-center justify-center gap-3 px-6 text-offwhite font-inter font-bold text-xs sm:text-sm lg:text-base transition-all shadow-md"
            >
              <img src={iconWhatsappFoot} alt="WhatsApp" className="w-5 h-5 lg:w-[22px] lg:h-[22px] flex-shrink-0" />
              <span>+234 8023229308</span>
            </a>

            {/* Phone Pill */}
            <a
              href="tel:+2348034817525"
              className="flex-1 border border-offwhite/80 hover:bg-white/10 h-[44px] lg:h-[48px] rounded-[20px] flex items-center justify-center gap-3 px-6 text-offwhite font-inter font-bold text-xs sm:text-sm lg:text-base transition-all"
            >
              <img src={iconPhoneFoot} alt="Phone" className="w-5 h-5 lg:w-[22px] lg:h-[22px] flex-shrink-0" />
              <span>+234 8034817525</span>
            </a>
          </div>

          {/* Row 2: Email */}
          <a
            href="mailto:Kunbiola.resoures.ltd@gmail.com"
            className="w-full border border-offwhite/80 hover:bg-white/10 h-[44px] lg:h-[48px] rounded-[20px] flex items-center justify-center gap-3 px-6 text-offwhite font-inter font-bold text-xs sm:text-sm lg:text-base transition-all break-all"
          >
            <img src={iconMailFoot} alt="Email" className="w-5 h-5 lg:w-[22px] lg:h-[22px] flex-shrink-0" />
            <span>Kunbiola.resoures.ltd@gmail.com</span>
          </a>

          {/* Row 3: Physical Address */}
          <div className="flex items-center justify-center gap-2 pt-1 text-mint font-inter text-xs sm:text-sm text-center">
            <img src={iconLocationFoot} alt="Location" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span>No. 27 Igbosere Road, Lagos Island, Lagos.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
