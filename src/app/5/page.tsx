'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Program5() {
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
    { id: 4, active: false },
    { id: 5, active: true }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-red-900/20"></div>
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse"
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
          className="absolute w-96 h-96 bg-gradient-radial from-yellow-500/20 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-300 mb-6">
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
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg shadow-yellow-500/50 scale-110' 
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
            <h1 className="text-6xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
              Program 5
            </h1>
            <div className="text-2xl text-yellow-300 font-semibold">Smart Street Light System</div>
          </div>
          
          {/* Glowing Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-6 rounded-full shadow-lg shadow-yellow-500/50"></div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Images Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-6 text-center flex items-center justify-center">
                  <span className="text-2xl mr-3">🔌</span>
                  Smart Street Light Circuit
                </h3>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/images/p5_1.jpeg"
                    alt="Smart Street Light Circuit Diagram"
                    className="w-full h-auto rounded-xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-6 text-center flex items-center justify-center">
                  <span className="text-2xl mr-3">📊</span>
                  LDR Sensor Response
                </h3>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/images/p5_2.jpeg"
                    alt="LDR Sensor Light Response Graph"
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
                  <span className="text-3xl mr-3">💡</span>
                  Arduino Smart Street Light System
                </h3>
                
                <div className="bg-black/60 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                  <div className="mb-4 text-cyan-400 text-lg">// Smart Street Light System using LDR</div>
                  <div className="text-yellow-300">int led = 10;      // LED connected to digital pin 10</div>
                  <div className="text-yellow-300">int ldr = A0;      // LDR connected to analog pin A0</div>
                  <br />
                  
                  <div className="mb-2 text-cyan-400 text-lg">// Setup Function</div>
                  <div className="text-purple-300">void setup() {`{`}</div>
                  <div className="ml-4 text-green-300">Serial.begin(9600);        // Initialize serial communication</div>
                  <div className="ml-4 text-green-300">pinMode(led, OUTPUT);       // Set LED pin as output</div>
                  <div className="ml-4 text-green-300">pinMode(ldr, INPUT);        // Set LDR pin as input</div>
                  <div className="text-purple-300">{`}`}</div>
                  <br />
                  
                  <div className="mb-2 text-cyan-400 text-lg">// Main Loop</div>
                  <div className="text-purple-300">void loop() {`{`}</div>
                  <div className="ml-4 text-green-300">int ldrStatus = analogRead(ldr);   // Read LDR sensor value</div>
                  <br />
                  <div className="ml-4 text-gray-400">// Print sensor value for debugging</div>
                  <div className="ml-4 text-blue-300">Serial.print("LDR Value: ");</div>
                  <div className="ml-4 text-blue-300">Serial.println(ldrStatus);</div>
                  <br />
                  <div className="ml-4 text-gray-400">// If light level is low (dark), turn ON the street light</div>
                  <div className="ml-4 text-orange-300">if (ldrStatus &lt;= 300) {`{`}</div>
                  <div className="ml-8 text-green-300">digitalWrite(led, HIGH);    // Turn ON LED (Street Light)</div>
                  <div className="ml-8 text-blue-300">Serial.println("Street Light: ON (Dark detected)");</div>
                  <div className="ml-4 text-orange-300">{`}`} else {`{`}</div>
                  <div className="ml-8 text-red-300">digitalWrite(led, LOW);     // Turn OFF LED (Street Light)</div>
                  <div className="ml-8 text-blue-300">Serial.println("Street Light: OFF (Sufficient light)");</div>
                  <div className="ml-4 text-orange-300">{`}`}</div>
                  <br />
                  <div className="ml-4 text-orange-300">delay(500);  // Wait for half second before next reading</div>
                  <div className="text-purple-300">{`}`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Serial Monitor Output */}
          <div className="mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">📟</span>
                  Serial Monitor Output
                </h3>
                
                <div className="bg-black/80 rounded-xl p-6 font-mono text-sm">
                  <div className="mb-2 text-blue-400">// During daytime (bright light)</div>
                  <div className="text-white">LDR Value: 850</div>
                  <div className="text-gray-400">Street Light: OFF (Sufficient light)</div>
                  <div className="text-white">LDR Value: 820</div>
                  <div className="text-gray-400">Street Light: OFF (Sufficient light)</div>
                  <div className="text-white">LDR Value: 780</div>
                  <div className="text-gray-400">Street Light: OFF (Sufficient light)</div>
                  <br />
                  <div className="mb-2 text-yellow-400">// During evening/night (low light)</div>
                  <div className="text-orange-300 animate-pulse">LDR Value: 250</div>
                  <div className="text-green-300 animate-pulse">Street Light: ON (Dark detected)</div>
                  <div className="text-orange-300 animate-pulse">LDR Value: 180</div>
                  <div className="text-green-300 animate-pulse">Street Light: ON (Dark detected)</div>
                  <div className="text-orange-300 animate-pulse">LDR Value: 120</div>
                  <div className="text-green-300 animate-pulse">Street Light: ON (Dark detected)</div>
                  <br />
                  <div className="mb-2 text-blue-400">// Back to daylight</div>
                  <div className="text-white">LDR Value: 450</div>
                  <div className="text-gray-400">Street Light: OFF (Sufficient light)</div>
                  <div className="text-white">LDR Value: 650</div>
                  <div className="text-gray-400">Street Light: OFF (Sufficient light)</div>
                </div>
              </div>
            </div>
          </div>

          {/* System Operation */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-2xl mr-3">🌞</span>
                  Light Detection
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-green-400">LDR Value &gt; 300:</strong> Sufficient light</li>
                  <li>• <strong className="text-red-400">LDR Value ≤ 300:</strong> Dark condition</li>
                  <li>• <strong className="text-yellow-400">Threshold:</strong> 300 (adjustable)</li>
                  <li>• <strong className="text-blue-400">Reading Interval:</strong> 500ms</li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="text-2xl mr-3">💡</span>
                  Street Light Control
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-green-400">Dark:</strong> LED ON (HIGH signal)</li>
                  <li>• <strong className="text-red-400">Bright:</strong> LED OFF (LOW signal)</li>
                  <li>• <strong className="text-blue-400">Response:</strong> Immediate</li>
                  <li>• <strong className="text-yellow-400">Power Saving:</strong> Auto OFF in daylight</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">🔧</span>
                  System Benefits
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/40 rounded-lg p-4">
                    <h5 className="text-lg font-semibold text-green-400 mb-2">⚡ Energy Saving</h5>
                    <p className="text-gray-300 text-sm">Automatic ON/OFF based on ambient light conditions</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4">
                    <h5 className="text-lg font-semibold text-blue-400 mb-2">🤖 No Manual Control</h5>
                    <p className="text-gray-300 text-sm">Fully automated operation without human intervention</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4">
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">🎛️ Adjustable Sensitivity</h5>
                    <p className="text-gray-300 text-sm">Threshold can be modified for different environments</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4">
                    <h5 className="text-lg font-semibold text-purple-400 mb-2">📊 Real-time Monitoring</h5>
                    <p className="text-gray-300 text-sm">Serial output provides debugging and status information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Light Status Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 bg-gray-900/50 backdrop-blur-xl rounded-full px-8 py-4 border border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-yellow-400 text-sm">DAYLIGHT</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-400 text-sm">EVENING</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-blue-400 text-sm">NIGHT</span>
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