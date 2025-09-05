import React, { useEffect, useRef, useState } from 'react';

const statsData = [
  { label: 'Years of Innovation', value: 6 },
  { label: 'Project Completed', value: 16 },
];

const NebulaHero = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    // --- Dynamic counter logic ---
    let interval;
    let resetTimeout;

    const animate = () => {
      let progress = 0;
      interval = setInterval(() => {
        progress += 1;
        setCounts(statsData.map((stat) => Math.min(stat.value, Math.floor((progress / 100) * stat.value))));

        if (progress >= 100) {
          clearInterval(interval);
          resetTimeout = setTimeout(() => {
            setCounts(statsData.map(() => 0));
            animate(); // restart loop
          }, 3000);
        }
      }, 30); // speed of counting
    };

    animate();

    return () => {
      clearInterval(interval);
      clearTimeout(resetTimeout);
    };
  }, []);

  // --- Vanta background effect (your original code) ---
  useEffect(() => {
    const loadVanta = () => {
      if (window.VANTA && window.THREE) {
        vantaEffect.current = window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x5e62ff,
          color2: 0x9966ff,
          size: 1.5,
          backgroundColor: 0x000000,
        });
      }
    };

    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    threeScript.onload = () => {
      const vantaScript = document.createElement('script');
      vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js';
      vantaScript.onload = loadVanta;
      document.head.appendChild(vantaScript);
    };
    document.head.appendChild(threeScript);

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Vanta Background */}
      <div ref={vantaRef} className="absolute inset-0 z-0"></div>

      <main className="relative z-10 px-6 pt-32 pb-24"> {/* shifted down with pt-32 */}
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              We build{' '}
              <span
                className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(90deg, #5E62FF, #9966FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                immersive worlds
              </span>{' '}
              that inspire
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mb-10">
              Pioneering digital experiences that fuse art with technology to transform brands and create meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* SVG Blob Button for View Portfolio */}
              <div className="relative">
                <svg
                  viewBox="45 60 400 320"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-80 h-25 cursor-pointer"
                  style={{
                    filter: 'drop-shadow(0 0 40px rgba(0, 0, 0, 0.3))',
                  }}
                >
                  <defs>
                    <mask id="knockout-text">
                      <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
                      <text
                        x="140"
                        y="227"
                        fill="#000"
                        style={{
                          fontSize: '38px',
                          fontFamily: 'Raleway, serif',
                          fontWeight: '900',
                        }}
                      >
                        PORTFOLIO
                      </text>
                    </mask>
                  </defs>
                  <path
                    fill="#fff"
                    d="M 90 210 C 90 180 90 150 90 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 390 150 C 390 150 390 180 390 210 C 390 240 390 270 390 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 90 270 C 90 270 90 240 90 210"
                    mask="url(#knockout-text)"
                    className="hover:fill-gray-100 transition-colors"
                    style={{
                      cursor: 'pointer',
                      animation: 'blob 2s infinite forwards',
                      transformOrigin: '50% 50%',
                    }}
                  />
                </svg>
              </div>
            </div>

            {/* Keyframe animation styles */}
            <style jsx>{`
              @import url("https://fonts.googleapis.com/css?family=Raleway:900");
              
              @keyframes blob {
                25% {
                  d: path("M 90 210 C 90 180 110 160 130 160 C 160 160 180 140 200 130 C 230 120 270 100 290 140 C 310 170 360 100 380 140 C 400 160 420 180 420 210 C 420 240 410 290 380 280 C 360 270 330 280 310 290 C 290 300 260 300 250 290 C 230 270 190 310 170 280 C 160 260 90 240 90 210");
                  transform: rotate(-5deg);
                }
                50% {
                  d: path("M 90 210 C 90 180 100 150 120 130 C 150 100 180 140 200 130 C 230 120 270 100 290 140 C 300 160 350 130 380 140 C 420 150 420 180 420 210 C 420 240 410 300 380 280 C 360 270 340 230 300 260 C 280 280 240 310 220 290 C 200 270 180 280 160 280 C 130 280 90 240 90 210");
                }
                75% {
                  d: path("M 90 210 C 90 180 110 180 130 170 C 150 160 170 130 200 130 C 240 130 260 150 290 140 C 310 130 360 120 380 140 C 400 160 420 180 420 210 C 420 240 410 260 380 270 C 350 280 320 270 300 260 C 270 250 250 280 230 290 C 200 310 150 300 130 280 C 110 260 90 240 90 210");
                  transform: rotate(5deg);
                }
              }
            `}</style>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 text-center">
            {statsData.map((stat, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="text-indigo-500 text-4xl font-bold mb-1">
                  {counts[i]}+
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Load Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default NebulaHero;
