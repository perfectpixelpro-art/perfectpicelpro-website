import { useState } from "react";

const NEWS_LABEL = "NEWS";

interface Article {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  span?: "full" | "half";
  dark?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    category: "LEADERSHIP",
    date: "April 15, 2026",
    title: "IMPACT OVER OUTPUT: INSIDE THE NEW AGENCY",
    excerpt:
      "Global CEO Nancy Reyes and global CCO Chris Beresford-Hill talk to LBB's Addison Capper about navigating merger-driven change, demanding creativity that solves real business problems, and how 'Do Big Things' is bringing its global community together.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    span: "full",
    dark: true,
  },
  {
    id: 2,
    category: "AWARD",
    date: "March 10, 2026",
    title: "NAMED TO FAST COMPANY'S MOST INNOVATIVE COMPANIES LIST",
    excerpt: "Recognized for creative impact and transformative campaigns.",
    image: "",
    span: "half",
    dark: false,
  },
  {
    id: 3,
    category: "CAMPAIGN",
    date: "February 12, 2026",
    title: "WINS SUPER BOWL 60 WITH MOST ADS IN THE BIG GAME",
    excerpt:
      "A historic night as the agency dominates the Super Bowl ad showcase with multiple brand campaigns.",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80",
    span: "half",
    dark: true,
  },
  
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function RedAccentCard() {
  return (
    <div className="relative w-full h-full min-h-[320px] bg-[#F70D1A] flex flex-col justify-end p-6 sm:p-8 overflow-hidden group cursor-pointer">
      {/* Big decorative logo mark */}
      <div className="absolute top-6 right-6 grid grid-cols-2 gap-1.5 opacity-30">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-6 h-6 bg-white rounded-sm" />
        ))}
      </div>

      {/* Fast Company badge */}
      <div className="mb-4">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-sm">
          <div className="text-white font-black text-xs tracking-widest uppercase">
            Fast Company
          </div>
        </div>
      </div>

      <div className="text-white">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-white/60">
          AWARD · March 10, 2026
        </p>
        <h3
          className="font-black text-2xl sm:text-3xl leading-[1.05] uppercase mb-4 tracking-tight"
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          Most<br />
          <span className="italic font-black">Innovative</span><br />
          Companies
          <br />
          <span className="text-white/80">2026</span>
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">
            Named to Fast Company's most prestigious annual list.
          </p>
          <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#F70D1A] transition-all duration-300">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const [hovered, setHovered] = useState(false);

  if (!article.image) {
    if (article.id === 2) return <RedAccentCard />;
    // Plain dark card
    return (
      <div
        className="relative w-full h-full min-h-[320px] bg-zinc-900 border border-white/5 flex flex-col justify-end p-6 sm:p-8 group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="absolute inset-0 bg-[#F70D1A] transition-transform duration-500 origin-bottom"
          style={{ transform: hovered ? "scaleY(1)" : "scaleY(0)" }}
        />
        <div className="relative z-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-white/50 group-hover:text-white/70 transition-colors">
            {article.category} · {article.date}
          </p>
          <h3
            className="font-black text-2xl sm:text-3xl leading-[1.05] uppercase mb-4 text-white tracking-tight"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            {article.title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-white/60 text-sm leading-relaxed max-w-[260px]">
              {article.excerpt}
            </p>
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-[#F70D1A] transition-all duration-300 ml-4 shrink-0">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full min-h-[320px] overflow-hidden group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image */}
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

      {/* Red accent strip on hover */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-[#F70D1A] transition-all duration-500"
        style={{ width: hovered ? "100%" : "0%" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-white/60">
          {article.category} · {article.date}
        </p>
        <div className="flex items-end justify-between gap-4">
          <h3
            className="font-black text-2xl sm:text-3xl leading-[1.05] uppercase text-white tracking-tight"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            {article.title}
          </h3>
          <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-white group-hover:bg-[#F70D1A] group-hover:border-[#F70D1A] transition-all duration-300 shrink-0">
            <ArrowIcon />
          </div>
        </div>
        <p
          className="text-white/70 text-sm leading-relaxed mt-3 max-w-[520px] transition-all duration-300"
          style={{
            maxHeight: hovered ? "80px" : "0px",
            overflow: "hidden",
            opacity: hovered ? 1 : 0,
          }}
        >
          {article.excerpt}
        </p>
      </div>
    </div>
  );
}

export default function Blogs() {
  const [featured, ...rest] = articles;
  const row2 = rest.slice(0, 2);
  const row3 = rest.slice(2, 4);

  return (
    <section
      className="bg-black min-h-screen w-full"
      style={{ fontFamily: "Archivo, sans-serif" }}
    >
      {/* Google Font import via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,800;1,900&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-1 h-10 bg-[#F70D1A]" />
            <h2
              className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              News
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 text-white/50 hover:text-[#F70D1A] text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 group"
          >
            All Stories
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </div>

        {/* Vertical NEWS text — desktop only */}
        <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 pr-2">
          <p
            className="text-[#F70D1A] font-black text-[120px] leading-none tracking-tight"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              opacity: 0.08,
              letterSpacing: "-0.05em",
            }}
          >
            {NEWS_LABEL}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="relative z-10 flex flex-col gap-2 sm:gap-3">

          {/* Row 1 — Featured full-width card */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
              {/* Left: image */}
              <div className="min-h-[280px] sm:min-h-[380px] overflow-hidden relative group cursor-pointer">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/60" />
              </div>

              {/* Right: text content */}
              <div className="bg-zinc-950 border border-white/5 flex flex-col justify-center p-6 sm:p-10 min-h-[280px] group cursor-pointer relative overflow-hidden">
                <div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#F70D1A] transition-all duration-500 group-hover:w-full"
                  style={{ width: "0%" }}
                />
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-[#F70D1A]">
                  {featured.category} · {featured.date}
                </p>
                <h2
                  className="text-white font-black text-2xl sm:text-3xl lg:text-4xl leading-[1.05] uppercase mb-5 tracking-tight"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  {featured.title}
                </h2>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-[440px]">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F70D1A] flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#F70D1A] transition-all duration-300">
                    <ArrowIcon />
                  </div>
                  <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">
                    Read Article
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 — Two equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {row2.map((article) => (
              <div key={article.id} className="min-h-[320px] sm:min-h-[380px]">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>

          {/* Row 3 — Two equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {row3.map((article) => (
              <div key={article.id} className="min-h-[320px] sm:min-h-[380px]">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>

        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-6 flex justify-center">
          <a
            href="#"
            className="flex items-center gap-2 border border-white/20 text-white/60 hover:text-white hover:border-[#F70D1A] px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200"
          >
            All Stories →
          </a>
        </div>

      </div>
    </section>
  );
}