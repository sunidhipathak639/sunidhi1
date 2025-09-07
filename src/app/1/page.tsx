'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Program1() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsVisible(true);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const programs = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-pulse"
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <div className="flex justify-center space-x-4">
            {programs.map((program) => (
              <Link
                key={program.id}
                href={`/${program.id}`}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                  program.active 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 scale-110' 
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white hover:scale-105'
                }`}
              >
                {program.id}
              </Link>
            ))}
          </div>
        </nav>

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block">
            <h1 className="text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Program 1
            </h1>
            <div className="text-2xl text-purple-300 font-semibold">LED Sequence Control</div>
          </div>
          
          {/* Glowing Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full shadow-lg shadow-purple-500/50"></div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Image Section */}
          <div className="mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Circuit Diagram</h3>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/images/p1.jpeg"
                    alt="LED Sequence Circuit"
                    className="w-full h-auto rounded-xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Section */}
          <div className="mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">💡</span>
                  Arduino LED Sequence Code
                </h3>
                
                <div className="bg-black/60 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                  <div className="mb-4 text-cyan-400 text-lg">// LED Pin Declarations</div>
                  <div className="text-yellow-300">int LED1 = 5;</div>
                  <div className="text-yellow-300">int LED2 = 6;</div>
                  <div className="text-yellow-300">int LED3 = 7;</div>
                  <div className="text-yellow-300">int LED4 = 8;</div>
                  <div className="text-yellow-300">int LED5 = 9;</div>
                  <div className="text-yellow-300">int del = 100;</div>
                  <br />
                  
                  <div className="mb-2 text-cyan-400 text-lg">// Setup Function</div>
                  <div className="text-purple-300">void setup() {`{`}</div>
                  <div className="ml-4 text-green-300">pinMode(LED1, OUTPUT);</div>
                  <div className="ml-4 text-green-300">pinMode(LED2, OUTPUT);</div>
                  <div className="ml-4 text-green-300">pinMode(LED3, OUTPUT);</div>
                  <div className="ml-4 text-green-300">pinMode(LED4, OUTPUT);</div>
                  <div className="ml-4 text-green-300">pinMode(LED5, OUTPUT);</div>
                  <div className="text-purple-300">{`}`}</div>
                  <br />
                  
                  <div className="mb-2 text-cyan-400 text-lg">// Main Loop</div>
                  <div className="text-purple-300">void loop() {`{`}</div>
                  <div className="ml-4 text-green-300">digitalWrite(LED1, HIGH);</div>
                  <div className="ml-4 text-orange-300">delay(del);</div>
                  <div className="ml-4 text-green-300">digitalWrite(LED1, LOW);</div>
                  <div className="ml-4 text-green-300">digitalWrite(LED2, HIGH);</div>
                  <div className="ml-4 text-orange-300">delay(del);</div>
                  <div className="ml-4 text-green-300">digitalWrite(LED2, LOW);</div>
                  <div className="ml-4 text-green-300">digitalWrite(LED3, HIGH);</div>
                  <div className="ml-4 text-orange-300">delay(del);</div>
                  <div className="ml-4 text-green-300">digitalWrite(LED3, LOW);</div>
                  <div className="ml-4 text-green-300">digitalWrite(LED4, HIGH);</div>
                  <div className="ml-4 text-orange-300">delay(del);</div>
                  <div className="ml-4 text-green-300">digitalWrite(LED4, LOW);</div>
                  <div className="ml-4 text-green-300">digitalWrite(LED5, HIGH);</div>
                  <div className="ml-4 text-orange-300">delay(del);</div>
                  <div className="ml-4 text-green-300">digitalWrite(LED5, LOW);</div>
                  <div className="ml-4 text-gray-400">// Reverse sequence...</div>
                  <div className="text-purple-300">{`}`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  How It Works
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-green-400">Sequential Control:</strong> LEDs light up one by one</li>
                  <li>• <strong className="text-blue-400">Timing Control:</strong> 100ms delay between each LED</li>
                  <li>• <strong className="text-purple-400">Bidirectional:</strong> Forward and reverse sequence</li>
                  <li>• <strong className="text-yellow-400">Continuous Loop:</strong> Pattern repeats infinitely</li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-2xl mr-3">🔧</span>
                  Components Used
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-red-400">5x LEDs:</strong> Digital pins 5-9</li>
                  <li>• <strong className="text-orange-400">5x Resistors:</strong> 220Ω current limiting</li>
                  <li>• <strong className="text-green-400">Arduino Uno:</strong> Microcontroller board</li>
                  <li>• <strong className="text-blue-400">Breadboard:</strong> Circuit connections</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Effect */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-gray-900/50 backdrop-blur-xl rounded-full px-8 py-4 border border-gray-700/50">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
              <span className="text-gray-400 ml-4">LED Sequence Animation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
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