'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Program3() {
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
    { id: 3, active: true },
    { id: 4, active: false },
    { id: 5, active: false }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-pink-900/20"></div>
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-400/40 rounded-full animate-pulse"
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
          className="absolute w-96 h-96 bg-gradient-radial from-red-500/20 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <Link href="/" className="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors duration-300 mb-6">
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
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/50 scale-110' 
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
            <h1 className="text-6xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Program 3
            </h1>
            <div className="text-2xl text-red-300 font-semibold">Intrusion Detection System</div>
          </div>
          
          {/* Glowing Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-6 rounded-full shadow-lg shadow-red-500/50"></div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Image Section */}
          <div className="mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
                  <span className="text-3xl mr-3">🚨</span>
                  Security System Circuit
                </h3>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/p3.jpeg"
                    alt="Intrusion Detection Circuit"
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
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">🛡️</span>
                  Arduino Intrusion Detection Code
                </h3>
                
                <div className="bg-black/60 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                  <div className="mb-4 text-cyan-400 text-lg">{/* Intrusion Detection System - Pin Declarations */}// Intrusion Detection System - Pin Declarations</div>
                  <div className="text-yellow-300">int trigger_pin = 2;</div>
                  <div className="text-yellow-300">int echo_pin = 3;</div>
                  <div className="text-yellow-300">int buzzer_pin = 10;</div>
                  <div className="text-yellow-300">int time;</div>
                  <div className="text-yellow-300">int distance;</div>
                  <br />
                  
                  <div className="mb-2 text-cyan-400 text-lg">{/* Setup Function */}// Setup Function</div>
                  <div className="text-purple-300">void setup() {`{`}</div>
                  <div className="ml-4 text-green-300">Serial.begin(9600);</div>
                  <div className="ml-4 text-green-300">pinMode(trigger_pin, OUTPUT);</div>
                  <div className="ml-4 text-green-300">pinMode(echo_pin, INPUT);</div>
                  <div className="ml-4 text-green-300">pinMode(buzzer_pin, OUTPUT);</div>
                  <div className="text-purple-300">{`}`}</div>
                  <br />
                  
                  <div className="mb-2 text-cyan-400 text-lg">{/* Main Loop */}// Main Loop</div>
                  <div className="text-purple-300">void loop() {`{`}</div>
                  <div className="ml-4 text-gray-400">{/* Send ultrasonic pulse */}// Send ultrasonic pulse</div>
                  <div className="ml-4 text-green-300">digitalWrite(trigger_pin, HIGH);</div>
                  <div className="ml-4 text-orange-300">delayMicroseconds(10);</div>
                  <div className="ml-4 text-green-300">digitalWrite(trigger_pin, LOW);</div>
                  <br />
                  <div className="ml-4 text-gray-400">{/* Measure pulse duration and calculate distance */}// Measure pulse duration and calculate distance</div>
                  <div className="ml-4 text-green-300">time = pulseIn(echo_pin, HIGH);</div>
                  <div className="ml-4 text-green-300">distance = (time * 0.034) / 2;</div>
                  <br />
                  <div className="ml-4 text-gray-400">{/* Check for intrusion (distance ≤ 10cm) */}// Check for intrusion (distance ≤ 10cm)</div>
                  <div className="ml-4 text-orange-300">if (distance &lt;= 10) {`{`}</div>
                  <div className="ml-8 text-red-300">Serial.print(&quot;Door Open&quot;);</div>
                  <div className="ml-8 text-blue-300">Serial.print(&quot; Distance=&quot;);</div>
                  <div className="ml-8 text-blue-300">Serial.println(distance);</div>
                  <div className="ml-8 text-red-300">digitalWrite(buzzer_pin, HIGH);</div>
                  <div className="ml-4 text-orange-300">{`}`} else {`{`}</div>
                  <div className="ml-8 text-green-300">Serial.print(&quot;Door Closed&quot;);</div>
                  <div className="ml-8 text-blue-300">Serial.print(&quot; Distance=&quot;);</div>
                  <div className="ml-8 text-blue-300">Serial.println(distance);</div>
                  <div className="ml-8 text-green-300">digitalWrite(buzzer_pin, LOW);</div>
                  <div className="ml-4 text-orange-300">{`}`}</div>
                  <div className="ml-4 text-orange-300">delay(500);</div>
                  <div className="text-purple-300">{`}`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Serial Monitor Output */}
          <div className="mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">📟</span>
                  Serial Monitor Output
                </h3>
                
                <div className="bg-black/80 rounded-xl p-6 font-mono text-sm">
                  <div className="mb-2 text-green-400">{/* When door is closed (distance > 10cm) */}// When door is closed (distance &gt; 10cm)</div>
                  <div className="text-green-300">Door Closed Distance=25</div>
                  <div className="text-green-300">Door Closed Distance=24</div>
                  <div className="text-green-300">Door Closed Distance=26</div>
                  <div className="text-green-300">Door Closed Distance=23</div>
                  <br />
                  <div className="mb-2 text-red-400">{/* When intrusion is detected (distance ≤ 10cm) */}// When intrusion is detected (distance ≤ 10cm)</div>
                  <div className="text-red-300 animate-pulse">Door Open Distance=8</div>
                  <div className="text-red-300 animate-pulse">Door Open Distance=7</div>
                  <div className="text-red-300 animate-pulse">Door Open Distance=9</div>
                  <div className="text-red-300 animate-pulse">Door Open Distance=6</div>
                  <br />
                  <div className="mb-2 text-green-400">{/* Back to normal state */}// Back to normal state</div>
                  <div className="text-green-300">Door Closed Distance=22</div>
                  <div className="text-green-300">Door Closed Distance=25</div>
                  <div className="text-green-300">Door Closed Distance=24</div>
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
                  <span className="text-2xl mr-3">📡</span>
                  How It Works
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-blue-400">Ultrasonic Sensor:</strong> Measures distance using sound waves</li>
                  <li>• <strong className="text-green-400">Distance Calculation:</strong> (time × 0.034) / 2 formula</li>
                  <li>• <strong className="text-red-400">Intrusion Detection:</strong> Triggers when distance ≤ 10cm</li>
                  <li>• <strong className="text-yellow-400">Alert System:</strong> Buzzer activates on detection</li>
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
                  <li>• <strong className="text-blue-400">HC-SR04:</strong> Ultrasonic distance sensor</li>
                  <li>• <strong className="text-red-400">Buzzer:</strong> Audio alert system</li>
                  <li>• <strong className="text-green-400">Arduino Uno:</strong> Main controller</li>
                  <li>• <strong className="text-yellow-400">Jumper Wires:</strong> Circuit connections</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Security Status Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 bg-gray-900/50 backdrop-blur-xl rounded-full px-8 py-4 border border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">SECURE</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 text-sm">INTRUSION</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-yellow-400 text-sm">MONITORING</span>
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