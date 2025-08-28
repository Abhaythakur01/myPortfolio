import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const TextMaskPortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // GSAP MotionPath for multiple images
  useEffect(() => {
    if (imageRefs.current.length > 0) {
      imageRefs.current.forEach((el, index) => {
        if (!el) return;

        gsap.set(el, { scale: 0.6, autoAlpha: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
          },
        });

        tl.to(el, {
          duration: 5,
          autoAlpha: 1,
          ease: "power1.inOut",
          motionPath: {
            path: "#path",
            align: "#path",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
          },
        })
          .to(el, { autoAlpha: 0, duration: 2 }, "+=1"); // fade out after travel
      });
    }
  }, []);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1635001177743-7d3f60102fb2?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1634017839442-8e03adbb6cd2?w=400&h=400&fit=crop",
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden cursor-none flex"
      style={{ backgroundColor: "#7A9B8E" }}
    >
      {/* LEFT SIDE - Text */}
      <div className="flex-1 relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16">
        <h1
          className="text-6xl md:text-8xl font-black leading-tight max-w-4xl"
          style={{ color: "#F4F1E8" }}
        >
          Challenging the limits of visual comfort, feeding the inherent drive
          to create.
        </h1>
      </div>

      {/* RIGHT SIDE - Motion Path Images */}
      <div className="flex-1 relative h-full">
        <svg
          id="motionPath"
          viewBox="-20 0 557 190"
          className="absolute right-0 top-1/4 h-2/3 w-full z-30"
        >
          <path
            id="path"
            fill="none"
            stroke="transparent" // invisible path
            strokeWidth="2"
            d="M8,102 C15,83 58,25 131,24 206,24 233,63 259,91 
               292,125 328,155 377,155 464,155 497,97 504,74"
          />
          {backgroundImages.map((img, index) => (
            <g
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="motion-image"
            >
              <image href={img} width="80" height="80" clipPath="circle(40)" />
            </g>
          ))}
        </svg>
      </div>

      {/* Profile Section */}
      <div className="absolute bottom-8 left-8 z-30 flex items-center space-x-3">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#E67E22" }}
        >
          <span className="text-white font-bold">YN</span>
        </div>
      </div>

      {/* Custom Cursor */}
      <div
        className="absolute w-4 h-4 rounded-full pointer-events-none z-40 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: "scale(1.2)",
          backgroundColor: "#E67E22",
        }}
      />
    </div>
  );
};

export default TextMaskPortfolio;
