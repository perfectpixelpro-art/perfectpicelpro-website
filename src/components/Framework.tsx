import { useState } from "react";

interface Metric {
  label: string;
  value: number;
  red: boolean;
}

interface Avatar {
  initials: string;
  bg: string;
}

const metrics: Metric[] = [
  { label: "Speed", value: 94, red: true },
  { label: "Accuracy", value: 88, red: false },
  { label: "Output", value: 72, red: false },
  { label: "Uptime", value: 99, red: false },
];

const LIT_INDICES = new Set([0, 6, 12, 17]);
const dots: boolean[] = Array.from({ length: 20 }, (_, i) => LIT_INDICES.has(i));

const avatars: Avatar[] = [
  { initials: "A", bg: "bg-blue-600" },
  { initials: "M", bg: "bg-violet-600" },
  { initials: "R", bg: "bg-[#F70D1A]" },
];

function ArrowIcon(): JSX.Element {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}

export default function Framework(): JSX.Element {
  const [, setHovered] = useState<boolean>(false);

  return (
    <div
      className="w-full bg-white px-6 md:px-12 lg:px-20 py-10"
      style={{ fontFamily: "'Archivo', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap');`}</style>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden min-h-[560px] border border-neutral-200">

        {/* LEFT: Text panel */}
        <div className="flex flex-col justify-center px-10 lg:px-14 py-16 bg-white border-b md:border-b-0 md:border-r border-neutral-200">

          {/* Pill tag */}
          <span className="inline-flex items-center gap-2 self-start border border-[#F70D1A] text-[#F70D1A] text-[11px] font-semibold tracking-widest uppercase px-3.5 py-1 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F70D1A] shrink-0" />
            New release
          </span>

          {/* Heading */}
          <h1 className="text-[2.4rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-neutral-950 mb-5">
            Built for{" "}
            <span className="text-[#F70D1A]">speed.</span>
            <br />
            Designed for humans.
          </h1>

          {/* Body */}
          <p className="text-[15px] leading-[1.75] text-neutral-500 mb-9 max-w-md">
            A focused product that respects your time and amplifies your
            output. No clutter, no noise — just what you need to move fast.
          </p>

          {/* Actions */}
          <div className="flex items-center gap-5 flex-wrap">
            <button
              type="button"
              className="group inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white text-[13.5px] font-medium px-6 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-px"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Get started
              <ArrowIcon />
            </button>

            <a
              href="#"
              className="text-[13.5px] font-medium text-neutral-950 border-b-[1.5px] border-[#F70D1A] pb-px hover:text-[#F70D1A] transition-colors duration-200"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* RIGHT: Dark image panel */}
        <div className="relative bg-[#0f0f0f] flex items-center justify-center px-10 py-16 overflow-hidden">

          {/* Grid texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />

          {/* Red glow blob */}
          <div
            className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(247,13,26,0.14) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Dot grid */}
          <div
            className="absolute top-7 left-7 grid gap-[6px] z-10"
            style={{ gridTemplateColumns: "repeat(5, 6px)" }}
            aria-hidden="true"
          >
            {dots.map((lit, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  lit ? "bg-[#F70D1A] opacity-70" : "bg-white/10"
                }`}
              />
            ))}
          </div>

          {/* UI card */}
          <div className="relative z-10 w-full max-w-[360px] bg-[#1a1a1a] border border-white/[0.08] rounded-xl p-7 flex flex-col gap-5">

            {/* Card header */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium tracking-widest uppercase text-white/35">
                Performance
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#F70D1A] border border-[#F70D1A]/40 px-2 py-0.5 rounded-full">
                Live
              </span>
            </div>

            {/* Card title */}
            <h2 className="text-[1.25rem] font-bold text-white leading-snug">
              Weekly output
              <br />
              at a glance.
            </h2>

            {/* Metric bars */}
            <div className="flex flex-col gap-3.5">
              {metrics.map(({ label, value, red }: Metric) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[11px] text-white/40">
                    <span>{label}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-[5px] bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        red ? "bg-[#F70D1A]" : "bg-white/20"
                      }`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Card footer */}
            <div className="flex items-center gap-2.5 pt-2 border-t border-white/[0.06]">
              <div className="flex" aria-hidden="true">
                {avatars.map(({ initials, bg }: Avatar, i: number) => (
                  <div
                    key={initials}
                    className={`w-6 h-6 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center text-[8px] font-bold text-white ${bg} ${
                      i !== 0 ? "-ml-1.5" : ""
                    }`}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-[11px] text-white/30">
                3 team members active now
              </span>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}