'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Program2() {
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
    { id: 2, active: true },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-teal-900/20 to-blue-900/20"></div>
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/40 rounded-full animate-pulse"
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
          className="absolute w-96 h-96 bg-gradient-radial from-green-500/20 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 font-medium transition-colors duration-300 mb-6">
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
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg shadow-green-500/50 scale-110' 
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
            <h1 className="text-6xl font-black bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Program 2
            </h1>
            <div className="text-2xl text-green-300 font-semibold">Variables & Data Types</div>
          </div>
          
          {/* Glowing Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mt-6 rounded-full shadow-lg shadow-green-500/50"></div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Concept Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">🔢</span>
                  Integer Variables
                </h3>
                
                <div className="bg-black/60 rounded-xl p-6 font-mono text-sm">
                  <div className="text-green-400 mb-2">{/* Integer Declaration */}// Integer Declaration</div>
                  <div className="text-yellow-300">int age = 25;</div>
                  <div className="text-yellow-300">int count = 0;</div>
                  <div className="text-yellow-300">int temperature = -10;</div>
                  <br />
                  <div className="text-cyan-400">{/* Range: -32,768 to 32,767 */}// Range: -32,768 to 32,767</div>
                </div>
                
                <div className="mt-4 text-gray-300">
                  <p>Integers store whole numbers without decimal points. Perfect for counting, indexing, and mathematical operations.</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">🔤</span>
                  String Variables
                </h3>
                
                <div className="bg-black/60 rounded-xl p-6 font-mono text-sm">
                  <div className="text-blue-400 mb-2">{/* String Declaration */}// String Declaration</div>
                  <div className="text-yellow-300">String name = &quot;Arduino&quot;;</div>
                  <div className="text-yellow-300">String message = &quot;Hello World&quot;;</div>
                  <div className="text-yellow-300">String sensor = &quot;Temperature&quot;;</div>
                  <br />
                  <div className="text-cyan-400">{/* Text data storage */}// Text data storage</div>
                </div>
                
                <div className="mt-4 text-gray-300">
                  <p>Strings store text data. Essential for displaying messages, sensor names, and user communication.</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">🎯</span>
                  Boolean Variables
                </h3>
                
                <div className="bg-black/60 rounded-xl p-6 font-mono text-sm">
                  <div className="text-purple-400 mb-2">{/* Boolean Declaration */}// Boolean Declaration</div>
                  <div className="text-yellow-300">bool isOn = true;</div>
                  <div className="text-yellow-300">bool sensorActive = false;</div>
                  <div className="text-yellow-300">bool ledState = HIGH;</div>
                  <br />
                  <div className="text-cyan-400">{/* True or False values */}// True or False values</div>
                </div>
                
                <div className="mt-4 text-gray-300">
                  <p>Booleans store true/false values. Perfect for flags, states, and conditional logic in your programs.</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">📊</span>
                  Float Variables
                </h3>
                
                <div className="bg-black/60 rounded-xl p-6 font-mono text-sm">
                  <div className="text-orange-400 mb-2">{/* Float Declaration */}// Float Declaration</div>
                  <div className="text-yellow-300">float voltage = 3.14;</div>
                  <div className="text-yellow-300">float temperature = 25.6;</div>
                  <div className="text-yellow-300">float distance = 12.45;</div>
                  <br />
                  <div className="text-cyan-400">{/* Decimal point numbers */}// Decimal point numbers</div>
                </div>
                
                <div className="mt-4 text-gray-300">
                  <p>Floats store decimal numbers. Essential for precise measurements, sensor readings, and calculations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Example */}
          <div className="mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">⚡</span>
                  Practical Arduino Example
                </h3>
                
                <div className="bg-black/60 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                  <div className="mb-4 text-cyan-400 text-lg">{/* Variable Declarations */}// Variable Declarations</div>
                  <div className="text-yellow-300">int ledPin = 13;           {/* LED connected to pin 13 */}// LED connected to pin 13</div>
                  <div className="text-yellow-300">int sensorPin = A0;        {/* Sensor on analog pin A0 */}// Sensor on analog pin A0</div>
                  <div className="text-yellow-300">bool ledState = false;     {/* LED current state */}// LED current state</div>
                  <div className="text-yellow-300">float sensorValue = 0.0;   {/* Sensor reading */}// Sensor reading</div>
                  <div className="text-yellow-300">String status = &quot;OFF&quot;;     {/* System status */}// System status</div>
                  <br />
                  
                  <div className="mb-2 text-cyan-400 text-lg">{/* Setup Function */}// Setup Function</div>
                  <div className="text-purple-300">void setup() {`{`}</div>
                  <div className="ml-4 text-green-300">Serial.begin(9600);</div>
                  <div className="ml-4 text-green-300">pinMode(ledPin, OUTPUT);</div>
                  <div className="text-purple-300">{`}`}</div>
                  <br />
                  
                  <div className="mb-2 text-cyan-400 text-lg">{/* Main Loop */}// Main Loop</div>
                  <div className="text-purple-300">void loop() {`{`}</div>
                  <div className="ml-4 text-green-300">sensorValue = analogRead(sensorPin);</div>
                  <div className="ml-4 text-green-300">sensorValue = sensorValue * (5.0 / 1023.0);</div>
                  <br />
                  <div className="ml-4 text-orange-300">if (sensorValue &gt; 2.5) {`{`}</div>
                  <div className="ml-8 text-green-300">ledState = true;</div>
                  <div className="ml-8 text-green-300">status = "ON";</div>
                  <div className="ml-8 text-green-300">digitalWrite(ledPin, HIGH);</div>
                  <div className="ml-4 text-orange-300">{`}`} else {`{`}</div>
                  <div className="ml-8 text-green-300">ledState = false;</div>
                  <div className="ml-8 text-green-300">status = "OFF";</div>
                  <div className="ml-8 text-green-300">digitalWrite(ledPin, LOW);</div>
                  <div className="ml-4 text-orange-300">{`}`}</div>
                  <br />
                  <div className="ml-4 text-blue-300">Serial.print("Sensor: ");</div>
                  <div className="ml-4 text-blue-300">Serial.print(sensorValue);</div>
                  <div className="ml-4 text-blue-300">Serial.print(" Status: ");</div>
                  <div className="ml-4 text-blue-300">Serial.println(status);</div>
                  <div className="ml-4 text-orange-300">delay(1000);</div>
                  <div className="text-purple-300">{`}`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Type Comparison */}
          <div className="mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3">📋</span>
                  Data Type Comparison
                </h3>
                
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-black/40 rounded-lg p-4 text-center">
                    <div className="text-green-400 font-bold text-lg mb-2">int</div>
                    <div className="text-gray-300 text-sm">Whole numbers</div>
                    <div className="text-gray-400 text-xs mt-2">-32,768 to 32,767</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 text-center">
                    <div className="text-blue-400 font-bold text-lg mb-2">float</div>
                    <div className="text-gray-300 text-sm">Decimal numbers</div>
                    <div className="text-gray-400 text-xs mt-2">6-7 digits precision</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 text-center">
                    <div className="text-purple-400 font-bold text-lg mb-2">bool</div>
                    <div className="text-gray-300 text-sm">True/False</div>
                    <div className="text-gray-400 text-xs mt-2">1 bit storage</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 text-center">
                    <div className="text-yellow-400 font-bold text-lg mb-2">String</div>
                    <div className="text-gray-300 text-sm">Text data</div>
                    <div className="text-gray-400 text-xs mt-2">Variable length</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 bg-gray-900/50 backdrop-blur-xl rounded-full px-8 py-4 border border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-sm">int</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-blue-400 text-sm">float</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-purple-400 text-sm">bool</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-400 text-sm">String</span>
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