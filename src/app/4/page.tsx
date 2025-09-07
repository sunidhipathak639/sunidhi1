'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Program4() {
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
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: true },
    { id: 5, active: false }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-indigo-900/20"></div>
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
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
          className="absolute w-96 h-96 bg-gradient-radial from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 mb-6">
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
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/50 scale-110' 
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
            <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Program 4
            </h1>
            <div className="text-2xl text-cyan-300 font-semibold">DC Motor Control</div>
          </div>
          
          {/* Glowing Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full shadow-lg shadow-cyan-500/50"></div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Images Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-6 text-center">Motor Circuit Diagram</h3>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/p4_1.jpeg"
                    alt="DC Motor Circuit"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-6 text-center">Motor Control Setup</h3>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/p4_2.jpeg"
                    alt="Motor Control Setup"
                    width={800}
                    height={600}
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
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">⚡</span>
                  Arduino DC Motor Control Code
                </h3>
                
                <div className="bg-black/60 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                  <div className="mb-4 text-cyan-400 text-lg">{/* DC Motor Control Pin */}</div>
                  <div className="text-yellow-300">int pin = 9;</div>
                  <br />
                  
                  <div className="mb-2 text-cyan-400 text-lg">{/* Setup Function */}</div>
                  <div className="text-purple-300">void setup() {`{`}</div>
                  <div className="ml-4 text-gray-400">{/* Set pin 9 as output for motor control */}</div>
                  <div className="ml-4 text-green-300">pinMode(pin, OUTPUT);</div>
                  <div className="text-purple-300">{`}`}</div>
                  <br />
                  
                  <div className="mb-2 text-cyan-400 text-lg">{/* Main Loop */}</div>
                  <div className="text-purple-300">void loop() {`{`}</div>
                  <div className="ml-4 text-gray-400">{/* Turn motor ON */}</div>
                  <div className="ml-4 text-green-300">digitalWrite(pin, HIGH);</div>
                  <div className="ml-4 text-orange-300">delay(1000); {/* Wait for 1000 milliseconds */}</div>
                  <br />
                  <div className="ml-4 text-gray-400">{/* Turn motor OFF */}</div>
                  <div className="ml-4 text-red-300">digitalWrite(pin, LOW);</div>
                  <div className="ml-4 text-orange-300">delay(1000); {/* Wait for 1000 milliseconds */}</div>
                  <div className="text-purple-300">{`}`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Motor Behavior Output */}
          <div className="mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">🔄</span>
                  Motor Behavior Output
                </h3>
                
                <div className="bg-black/80 rounded-xl p-6 font-mono text-sm">
                  <div className="mb-2 text-blue-400">{/* Motor Operation Cycle */}</div>
                  <div className="text-green-300 animate-pulse">Motor ON  - Pin 9: HIGH (5V) - Duration: 1000ms</div>
                  <div className="text-red-300">Motor OFF - Pin 9: LOW  (0V) - Duration: 1000ms</div>
                  <div className="text-green-300 animate-pulse">Motor ON  - Pin 9: HIGH (5V) - Duration: 1000ms</div>
                  <div className="text-red-300">Motor OFF - Pin 9: LOW  (0V) - Duration: 1000ms</div>
                  <div className="text-green-300 animate-pulse">Motor ON  - Pin 9: HIGH (5V) - Duration: 1000ms</div>
                  <div className="text-red-300">Motor OFF - Pin 9: LOW  (0V) - Duration: 1000ms</div>
                  <br />
                  <div className="mb-2 text-yellow-400">{/* Physical Motor Response */}</div>
                  <div className="text-cyan-300">→ Motor starts rotating (clockwise)</div>
                  <div className="text-gray-400">→ Motor stops (1 second pause)</div>
                  <div className="text-cyan-300">→ Motor starts rotating (clockwise)</div>
                  <div className="text-gray-400">→ Motor stops (1 second pause)</div>
                  <div className="text-cyan-300">→ Motor starts rotating (clockwise)</div>
                  <div className="text-gray-400">→ Motor stops (1 second pause)</div>
                  <div className="text-white">→ Cycle repeats continuously...</div>
                </div>
              </div>
            </div>
          </div>

          {/* Timing Diagram */}
          <div className="mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">📊</span>
                  Timing Diagram
                </h3>
                
                <div className="bg-black/40 rounded-xl p-6">
                  <div className="font-mono text-sm">
                    <div className="mb-4 font-semibold text-white">Pin 9 Digital Output:</div>
                    <div className="flex items-center mb-2">
                      <span className="w-16 text-xs text-gray-400">HIGH |</span>
                      <span className="bg-green-500 h-6 w-20 mr-2 rounded animate-pulse"></span>
                      <span className="bg-gray-700 h-6 w-20 mr-2 rounded"></span>
                      <span className="bg-green-500 h-6 w-20 mr-2 rounded animate-pulse"></span>
                      <span className="bg-gray-700 h-6 w-20 rounded"></span>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="w-16 text-xs text-gray-400">LOW  |</span>
                      <span className="bg-gray-700 h-6 w-20 mr-2 rounded"></span>
                      <span className="bg-red-500 h-6 w-20 mr-2 rounded"></span>
                      <span className="bg-gray-700 h-6 w-20 mr-2 rounded"></span>
                      <span className="bg-red-500 h-6 w-20 rounded"></span>
                    </div>
                    <div className="flex items-center text-xs mt-4 text-gray-400">
                      <span className="w-16"></span>
                      <span className="w-20 text-center">1s</span>
                      <span className="w-20 text-center ml-2">1s</span>
                      <span className="w-20 text-center ml-2">1s</span>
                      <span className="w-20 text-center ml-2">1s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚙️</span>
                  How It Works
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-cyan-400">Digital Control:</strong> Pin 9 controls motor state</li>
                  <li>• <strong className="text-green-400">ON State:</strong> HIGH signal (5V) starts motor</li>
                  <li>• <strong className="text-red-400">OFF State:</strong> LOW signal (0V) stops motor</li>
                  <li>• <strong className="text-yellow-400">Timing:</strong> 1 second ON, 1 second OFF cycle</li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-2xl mr-3">🔧</span>
                  Components Used
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-blue-400">DC Motor:</strong> 5V/6V motor for rotation</li>
                  <li>• <strong className="text-green-400">Arduino Uno:</strong> Main controller board</li>
                  <li>• <strong className="text-yellow-400">Transistor:</strong> Motor driver circuit</li>
                  <li>• <strong className="text-red-400">Resistor:</strong> Base current limiting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Motor Status Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 bg-gray-900/50 backdrop-blur-xl rounded-full px-8 py-4 border border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">MOTOR ON</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-red-400 text-sm">MOTOR OFF</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-spin"></div>
                <span className="text-blue-400 text-sm">ROTATING</span>
              </div>
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