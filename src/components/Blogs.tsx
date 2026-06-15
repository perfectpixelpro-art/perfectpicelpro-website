export default function Blogs() {
  return (
    <section className="w-full bg-black py-12 px-6 md:px-20 lg:px-36" style={{ fontFamily: "'Archivo', sans-serif" }}>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-white text-[40px] sm:text-[52px] font-bold tracking-tight">News</h2>
        <a
          href="#"
          className="flex items-center gap-2 text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 group hover:text-[#F70D1A]"
        >
          View All News
          <span className="text-[#F70D1A] group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </div>

      {/* Grid */}
      <div className="flex flex-col gap-4">

        {/* Row 1 — full width split card */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden min-h-[380px]">
          {/* Left: image */}
          <div className="relative min-h-[220px] md:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
              alt="news 1"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>

          {/* Right: dark text panel */}
          <div className="relative bg-[#111111] flex flex-col justify-between p-8 md:p-10 group cursor-pointer">
            {/* Arrow top-right */}
            <div className="flex justify-end">
              <span className="text-[#F70D1A] text-xl">↗</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-[22px] sm:text-[26px] md:text-[28px] leading-tight mb-3">
                Built for speed. Designed for humans.
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Motion-driven content designed to capture attention and drive engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 — two equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Card: image + red overlay */}
          <div className="relative rounded-2xl overflow-hidden min-h-[480px] group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
              alt="news 2"
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#F70D1A] p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-white font-bold text-[20px] sm:text-[22px] leading-tight">
                  Built for speed. Designed for humans.
                </h3>
                <span className="text-white text-lg shrink-0 mt-0.5">↗</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mt-2">
                Motion-driven content designed to capture attention and drive engagement.
              </p>
            </div>
          </div>

          {/* Card: B&W image + dark overlay */}
          <div className="relative rounded-2xl overflow-hidden min-h-[480px] group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80"
              alt="news 3"
              className="w-full h-full object-cover absolute inset-0 grayscale transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-white font-bold text-[20px] sm:text-[22px] leading-tight">
                  Built for speed. Designed for humans.
                </h3>
                <span className="text-[#F70D1A] text-lg shrink-0 mt-0.5">↗</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mt-2">
                Motion-driven content designed to capture attention and drive engagement.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
