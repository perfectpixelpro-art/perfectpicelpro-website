import { useEffect, useRef } from "react";
import "@fontsource/archivo/300.css";
import "@fontsource/archivo/300-italic.css";
import heroVideo from "../assets/herovideo.mp4";
import heroVideo2 from "../assets/herovideo2.mp4";
import heroVideo3 from "../assets/herovideo3.mp4";
import heroVideo4 from "../assets/herovideo4.mp4";
import heroVideo5 from "../assets/herovideo5.mp4";
import heroVideo6 from "../assets/herovideo6.mp4";



const projects = [
  {
    video: heroVideo,
    name: "Brand Campaign",
    description:
      "Creative direction and storytelling crafted to elevate brand perception.",
  },
  {
    video: heroVideo2,
    name: "Product Launch",
    description:
      "Motion-driven content designed to capture attention and drive engagement.",
  },
  {
    video: heroVideo3,
    name: "Fashion Editorial",
    description:
      "Premium visual narratives created for modern lifestyle audiences.",
  },
  {
    video: heroVideo4,
    name: "Social Campaign",
    description:
      "Short-form content engineered for reach, retention and impact.",
  },
  {
    video: heroVideo5,
    name: "Brand Film",
    description:
      "Cinematic production focused on emotional storytelling and identity.",
  },
  {
    video: heroVideo6,
    name: "Commercial Reel",
    description:
      "Performance-focused creative built to convert attention into action.",
  },
];

function VideoBlock({
  video,
  name,
  description,
}: {
  video: string;
  name: string;
  description: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = "scale(1.10)";
        } else {
          el.style.transform = "scale(1)";
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col style={{ fontFamily: 'Archivo, sans-serif' }}">
      {/* Video */}
      <div className="overflow-hidden rounded-[10px]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-[200px] sm:h-[250px] md:h-[290px] lg:h-[320px] xl:h-[360px] object-cover rounded-[10px]"
          style={{
            transform: "scale(1)",
            transition:
              "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Project Info */}
<div className="mt-4 pt-2 ">
  <h3
    className="
      text-[40px]
      sm:text-[30px]
      lg:text-[50px]
      leading-[0.95]
      tracking-[-0.04em]
      text-black
      transition-all
      duration-300
      hover:text-[#FF1616]
    "
    style={{
      fontFamily: '"Archivo", serif',
      fontSize: "25px",
    }}
  >
    {name}
  </h3>

  <p className="mt-3 max-w-[500px] text-[14px] sm:text-[15px] leading-relaxed text-neutral-500">
    {description}
  </p>
</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-white mt-10">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 lg:pt-20">

        {/* Hero Heading */}
        <div className="text-center">
          <h1 className="font-semibold tracking-[-0.06em] leading-[0.9] text-black">
            <span className="block text-[40px] sm:text-[70px] md:text-[80px] lg:text-[95px]">
              Look like you've
            </span>

            <span className="block">
              <span
                className="italic font-normal tracking-[-0.06em] text-black text-[38px] sm:text-[50px] md:text-[68px] lg:text-[90px]"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                }}
              >
                already
              </span>

              <span className="ml-2 text-[#FF1616] font-extrabold tracking-[-0.06em] text-[42px] sm:text-[56px] md:text-[80px] lg:text-[110px]">
                won.
              </span>
            </span>
          </h1>
        </div>

        {/* Video Grid */}
        <div className="mt-10 pb-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 text-black ">
            {projects.map((project, index) => (
              <VideoBlock
                key={index}
                video={project.video}
                name={project.name}
                description={project.description}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}