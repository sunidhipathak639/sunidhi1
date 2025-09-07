'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const programs = [
    {
      id: 1,
      title: "Program 1",
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      icon: "💡",
      description: "LED Sequence"
    },
    {
      id: 2,
      title: "Program 2", 
      gradient: "from-green-500 via-teal-500 to-blue-500",
      icon: "🔧",
      description: "Variables & Data"
    },
    {
      id: 3,
      title: "Program 3",
      gradient: "from-orange-500 via-red-500 to-pink-500", 
      icon: "🚨",
      description: "Intrusion Detection"
    },
    {
      id: 4,
      title: "Program 4",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      icon: "⚡",
      description: "Motor Control"
    },
    {
      id: 5,
      title: "Program 5",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      icon: "💡",
      description: "Smart Street Light"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Mouse Follower Gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h1 className="text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6 tracking-tight">
              Programming
            </h1>
            <div className="text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Notes
            </div>
          </div>
          
          {/* Glowing Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-8 rounded-full shadow-lg shadow-purple-500/50"></div>
          
          {/* Subtitle */}
          <p className="text-gray-300 text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
            Explore cutting-edge Arduino projects with interactive code examples
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Link
              key={program.id}
              href={`/${program.id}`}
              className="group block"
              onMouseEnter={() => setHoveredCard(program.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative">
                {/* Card Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${program.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                  
                  {/* Card Number Badge */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r ${program.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {program.id}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {program.description}
                  </p>

                  {/* Animated Arrow */}
                  <div className="mt-6 flex items-center text-gray-500 group-hover:text-purple-400 transition-colors duration-300">
                    <span className="text-sm font-medium">Explore</span>
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Hover Effect Lines */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5</div>
              <div className="text-gray-400 text-sm">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-400 text-sm">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">🚀</div>
              <div className="text-gray-400 text-sm">Innovation</div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-gray-500 text-sm">
            <p>Built with Next.js • Powered by Arduino • Designed for the Future</p>
          </div>
        </div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
}