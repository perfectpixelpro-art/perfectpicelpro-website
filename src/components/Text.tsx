const slide = {
  brand: "hydracelt",
  tagline: "EXCELLENCE IS A HABIT",
  image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=900&q=80",
};

const sideImages = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
];

export default function Text() {
  return (
    <section
      className="w-full bg-white px-6 md:px-16 lg:px-32 py-10"
      style={{ fontFamily: "'Archivo', sans-serif" }}
    >
      <div className="pt-4 pb-10">

        {/* Heading */}
        <h2 className="font-bold tracking-[-0.04em] leading-[1.05] text-black mb-10">
          <span className="block text-[36px] sm:text-[52px] md:text-[66px] lg:text-[80px]">
            Events That Make a
          </span>
          <span className="block">
            <span
              className="italic font-bold text-black text-[36px] sm:text-[52px] md:text-[66px] lg:text-[80px]"
            >
              Lasting
            </span>
            <span
              className="ml-3 text-[#FF1616] font-extrabold text-[36px] sm:text-[52px] md:text-[66px] lg:text-[80px]"
            >
              Impression
            </span>
          </span>
        </h2>

        {/* Photo Grid */}
        <div className="relative flex flex-col md:flex-row gap-3 ">

          {/* View All — top right of grid */}
          <a
            href="#"
            className="absolute top-0 right-0 -translate-y-12 flex items-center gap-2 text-black text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 mt-6 group hover:text-[#FF1616]"
          >
            View All
            <span className="text-[#FF1616] group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>

          {/* Left — Large Slide Image */}
          <div className="relative w-full md:w-[55%] h-[320px] sm:h-[420px] md:h-[520px] overflow-hidden rounded-2xl flex-shrink-0 group">
            <img
              src={slide.image}
              alt={slide.brand}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Brand label bottom-left */}
            <div className="absolute bottom-5 left-5">
              <p className="text-white font-bold text-lg leading-none italic">{slide.brand}</p>
              <p className="text-white/60 text-[10px] tracking-widest uppercase mt-1">{slide.tagline}</p>
            </div>

            
          </div>

          {/* Right — Two Stacked Images */}
          <div className="flex flex-col gap-3 w-full md:w-[45%] md:h-[520px]">
            {sideImages.map((src, i) => (
              <div
                key={i}
                className="relative w-full overflow-hidden rounded-2xl flex-1"
              >
                <img
                  src={src}
                  alt={`event-${i}`}
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                {i === 1 && (
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-[#3B82F6] pointer-events-none" />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
