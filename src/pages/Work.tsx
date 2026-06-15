import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    title: "hydracelt",
    description: "Creative direction and storytelling crafted to elevate brand perception.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    title: "The black in HR",
    description: "Motion-driven content designed to capture attention and drive engagement.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    title: "Gaiinsights",
    description: "Brand identity built to communicate expertise and trust.",
  },
];

const gridProjects = [
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?w=800&q=80",
    title: "Brand Campaign",
    description: "Creative direction and storytelling crafted to elevate brand perception.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    title: "Product Launch",
    description: "Motion-driven content designed to capture attention and drive engagement.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    title: "Brand Campaign",
    description: "Creative direction and storytelling crafted to elevate brand perception.",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    title: "Product Launch",
    description: "Motion-driven content designed to capture attention and drive engagement.",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    title: "Social Campaign",
    description: "Strategy and execution for high-impact social media rollouts.",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    title: "Event Coverage",
    description: "Full-scale event production and content capture from start to finish.",
  },
];

const INITIAL_COUNT = 4;
const LOAD_MORE_COUNT = 2;

export default function Work() {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const shownGrid = gridProjects.slice(0, visible);
  const hasMore = visible < gridProjects.length;

  return (
    <>
      <Navbar />

      <main
        className="w-full bg-white px-6 md:px-16 lg:px-32 pt-10 pb-20"
        style={{ fontFamily: "'Archivo', sans-serif" }}
      >
        {/* Heading */}
        <h1 className="text-[42px] sm:text-[56px] font-extrabold tracking-tight text-black mb-10">
          The <span className="text-[#F70D1A]">Work</span>
        </h1>

        {/* Row 1 — featured layout: large left + two stacked right */}
        <div className="flex flex-col md:flex-row gap-2 mb-4">

          {/* Left — large tall card */}
          <div className="w-full md:w-1/2 group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl" style={{ height: "632px", width: "100%", maxWidth: "667px" }}>
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <h3 className="text-black font-semibold text-[15px]">{projects[0].title}</h3>
                <p className="text-gray-500 text-[13px] mt-0.5">{projects[0].description}</p>
              </div>
              <span className="text-[#F70D1A] text-lg shrink-0 ml-3">→</span>
            </div>
          </div>

          {/* Right — two stacked cards */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {[projects[1], projects[2]].map((p) => (
              <div key={p.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl" style={{ height: "281px", width: "100%", maxWidth: "667px" }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-black font-semibold text-[15px]">{p.title}</h3>
                    <p className="text-gray-500 text-[13px] mt-0.5">{p.description}</p>
                  </div>
                  <span className="text-[#F70D1A] text-lg shrink-0 ml-3">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {shownGrid.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl" style={{ height: "320px" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-black font-semibold text-[15px]">{project.title}</h3>
                <p className="text-gray-500 text-[13px] mt-0.5">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See more button */}
        {hasMore && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setVisible((v) => Math.min(v + LOAD_MORE_COUNT, gridProjects.length))}
              className="border border-black text-black text-sm font-medium px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-200"
            >
              See more work
            </button>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
