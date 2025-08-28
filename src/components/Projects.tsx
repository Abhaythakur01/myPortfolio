import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern, full-stack e-commerce solution built with React, Node.js, and PostgreSQL.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebSockets'],
      github: '#',
      live: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with interactive charts and real-time data.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Python', 'MongoDB', 'Docker'],
      github: '#',
      live: '#',
    },
    {
      title: 'Social Media Platform',
      description: 'A social media platform with real-time messaging, photo sharing, and advanced privacy controls.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io', 'Redis'],
      github: '#',
      live: '#',
    },
  ];

  useEffect(() => {
    const totalWidth = horizontalRef.current?.scrollWidth || 0;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    gsap.to(horizontalRef.current, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);

  return (
    <section ref={containerRef} className="relative w-screen bg-[#7A9B8E]">
      {/* Horizontal container */}
      <div ref={horizontalRef} className="flex h-screen w-max">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card h-screen w-screen flex-shrink-0 flex flex-col justify-center items-center relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-[#7A9B8E]/70"></div>
            <div className="relative z-10 p-8 text-center max-w-xl">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#F4F1E8' }}>{project.title}</h2>
              <p className="mb-6 text-base" style={{ color: '#F4F1E8' }}>{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-sm border border-[#F4F1E8]" style={{ color: '#F4F1E8' }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href={project.github}
                  className="px-4 py-2 rounded-lg flex items-center gap-2 transition"
                  style={{ backgroundColor: '#F97316', color: '#F4F1E8' }}
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.live}
                  className="px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition"
                  style={{ backgroundColor: '#F97316', color: '#F4F1E8' }}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
