import { useEffect, useRef, useState } from "react";

// Archivo font via Google Fonts — add to your index.html or layout:
// <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;700;900&display=swap" rel="stylesheet">

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-white font-sans"
      style={{ fontFamily: "'Archivo', sans-serif" }}
    >
      {/* ── Main hero text block ── */}
      <div className="flex flex-col items-center justify-center text-center px-6 pt-16 pb-10 md:pt-24 md:pb-14 lg:pt-32 lg:pb-20">

        {/* Line 1 — thin serif-ish display */}
        <h2
          className={`
            leading-none tracking-tight text-black transition-all duration-700 ease-out
            text-[clamp(2rem,8vw,7rem)] font-light uppercase
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{
            fontWeight: 300,
            transitionDelay: "0ms",
          }}
        >
          Good Things Happen
        </h2>

        {/* Line 2 — heavy black */}
        <h2
          className={`
            leading-none tracking-tight text-black transition-all duration-700 ease-out
            text-[clamp(2rem,8vw,7rem)] font-black uppercase
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{
            transitionDelay: "120ms",
          }}
        >
          When You Say
        </h2>

        {/* Line 3 — accent red */}
        <h2
          className={`
            leading-none tracking-tight transition-all duration-700 ease-out
            text-[clamp(2.4rem,9.5vw,8.5rem)] font-black uppercase
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{
            color: "#F70D1A",
            transitionDelay: "240ms",
          }}
        >
          &ldquo;Hello&rdquo;
        </h2>

        {/* Contact block */}
        <div
          className={`
            mt-8 md:mt-10 flex flex-col items-center gap-1 text-black
            text-sm md:text-base transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          style={{ transitionDelay: "380ms" }}
        >
          <p className="font-light text-gray-500 text-xs uppercase tracking-widest mb-1">
            Get in touch
          </p>
          <a
            href="mailto:eric@wearejuliet.com"
            className="font-medium hover:text-[#F70D1A] transition-colors duration-200"
          >
            Info@perfectpixelpro.com
          </a>
          <p className="text-gray-500 text-sm">
            1306 Queen St E Toronto ON M4L 1C4
          </p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className={`
          border-t border-gray-200 px-6 py-5
          flex flex-col-reverse gap-4 items-center text-center
          sm:flex-row sm:justify-between sm:text-left sm:gap-0
          transition-all duration-700 ease-out
          ${visible ? "opacity-100" : "opacity-0"}
        `}
        style={{ transitionDelay: "500ms" }}
      >
        {/* Left — legal links */}
        <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest text-gray-400">
          <a href="/privacy" className="hover:text-[#F70D1A] transition-colors duration-200">
            Work
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#F70D1A] transition-colors duration-200">
            Life at PPP
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#F70D1A] transition-colors duration-200">
            News
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#F70D1A] transition-colors duration-200">
            Contact 
          </a>
        </div>

        {/* Right — copyright */}
        <p className="text-[11px] uppercase tracking-widest text-gray-400">
          ©{new Date().getFullYear()} Perfect Pixel Pro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;