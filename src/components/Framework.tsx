import { useState } from "react";

const items = [
  {
    id: "01",
    title: <>Built for <span className="text-[#F70D1A]">speed.</span></>,
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using repetitive content.",
    tags: ["Brand Identity", "Visual Design", "Motion Graphics"],
  },
  {
    id: "02",
    title: <>Built for <span className="text-[#F70D1A]">precision.</span></>,
    body: "Every pixel is crafted with intent. We don't settle for close enough — we deliver exact results that align perfectly with your brand vision. Our process is thorough, detail-driven, and built around your goals.",
    tags: ["Strategy", "Art Direction", "Production"],
  },
  {
    id: "03",
    title: <>Built for <span className="text-[#F70D1A]">impact.</span></>,
    body: "Results that move the needle. From awareness to conversion, we build creative that performs. Whether it's a brand launch or a full campaign, we bring ideas to life that audiences remember and act on.",
    tags: ["Brand Film", "Commercial Reel", "Growth"],
  },
];

export default function Framework() {
  const [open, setOpen] = useState<string>("01");

  return (
    <div
      className="w-full bg-white px-6 md:px-12 lg:px-20 py-12"
      style={{ fontFamily: "'Archivo', sans-serif" }}
    >
      {/* Heading */}
      <h2 className="text-[28px] sm:text-[65px] font-extrabold tracking-tight text-black mb-8">
        PPP frame<span className="text-[#F70D1A]">work</span>
      </h2>

      {/* Grid */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">

        {/* Image */}
        <div className="w-full md:w-[42%] flex-shrink-0 rounded-2xl overflow-hidden min-h-[340px]">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
            alt="Framework"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Accordion — stretches full height */}
        <div className="w-full md:w-[58%] flex flex-col border border-gray-200 rounded-2xl overflow-hidden">
          {items.map((item, idx) => {
            const isOpen = open === item.id;
            return (
              <div
                key={item.id}
                className={`flex flex-col ${idx !== items.length - 1 ? "border-b border-gray-200" : ""} ${isOpen ? "flex-1" : ""}`}
              >
                {/* Header row */}
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? "" : item.id)}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-lg font-semibold text-gray-400 w-7 shrink-0">{item.id}</span>
                    <span className="text-[22px] sm:text-[26px] md:text-[40px] font-bold text-black leading-tight">
                      {item.title}
                    </span>
                  </div>
                  {isOpen ? (
                    <span className="text-[#F70D1A] text-base font-light ml-4 shrink-0">✕</span>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400 shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </button>

                {/* Body — expands and fills remaining space */}
                {isOpen && (
                  <div className="px-6 pb-6 flex-1 flex gap-5">
                    {/* Spacer matching the number column */}
                    <div className="w-7 shrink-0" />
                    <div>
                      <p className="text-gray-500 text-md leading-relaxed mb-4 max-w-md">
                        {item.body}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-[#F70D1A] text-gray-600 text-xs px-3 py-1 rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
