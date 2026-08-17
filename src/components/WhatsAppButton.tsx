'use client';

export default function WhatsAppButton() {
  const defaultMessage = "Hello Prime Asia Tours! I would like to inquire about your holiday packages, visa services, and travel offers.";
  const whatsappUrl = `https://wa.me/971558597360?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating Greeting Pill Tooltip */}
      <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-white text-slate-800 rounded-full shadow-lg border border-slate-100 text-xs font-extrabold animate-bounce">
        <span>Chat with us!</span>
        <span className="text-base">👋</span>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 group cursor-pointer relative"
        aria-label="Chat on WhatsApp"
      >
        {/* Outer pulsing ripple ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none -z-10" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.969 4.463-9.969 9.969 0 1.763.458 3.42 1.258 4.887l-1.3 4.75 4.87-1.277c1.428.799 3.056 1.255 4.791 1.255 5.507 0 9.969-4.463 9.969-9.969s-4.463-9.969-9.969-9.969zm5.52 14.198c-.24.676-1.4 1.22-1.92 1.27-.47.046-.95.22-3.04-.6-2.67-1.046-4.38-3.77-4.51-3.95-.13-.18-1.11-1.48-1.11-2.81 0-1.33.7-1.98.95-2.25.25-.27.54-.34.72-.34.18 0 .35 0 .51.01.16.01.38-.06.6.46.22.53.76 1.85.83 1.99.07.14.11.29.02.47-.09.18-.13.29-.27.45-.14.16-.28.35-.4.47-.14.14-.28.28-.12.55.16.27.7 1.15 1.5 1.86.63.56 1.17.79 1.47.91.3.12.47.1.65-.1.18-.21.77-.89.98-1.19.21-.3.41-.25.69-.15.28.1 1.79.84 2.1.99.31.15.52.22.6.34.07.12.07.7-.17 1.38z" />
        </svg>
      </a>
    </div>
  );
}

