'use client';

import React, { useState, useEffect } from 'react';

export default function OfficePage() {
  const [timeLeft, setTimeLeft] = useState(50 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => setIsActive(!isActive);

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#4A4A4A] font-sans p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Doodles / Aesthetic Elements */}
      <div className="absolute top-10 left-10 opacity-20 transform -rotate-12">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20,50 Q40,20 60,50 T100,50" />
        </svg>
      </div>

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        {/* Left Side: Illustration Area */}
        <div className="relative w-full md:w-1/2 aspect-square bg-[#E8DCC4] rounded-3xl border-4 border-[#8B5E3C] shadow-[8px_8px_0px_0px_rgba(139,94,60,0.2)] flex items-end justify-center p-4">
          {/* Wooden Desk Line */}
          <div className="absolute bottom-0 w-full h-1/4 bg-[#8B5E3C] rounded-b-2xl opacity-80"></div>
          
          {/* Desk Items */}
          <div className="relative z-20 flex items-end gap-4 mb-2">
            {/* Laptop Doodle */}
            <div className="w-32 h-20 bg-gray-300 border-2 border-gray-600 rounded-t-lg relative">
               <div className="absolute inset-2 bg-white rounded-sm"></div>
               <div className="absolute -bottom-2 -left-2 w-36 h-2 bg-gray-400 border-2 border-gray-600 rounded-full"></div>
            </div>

            {/* Steaming Mug */}
            <div className="relative flex flex-col items-center">
               <div className="flex gap-1 mb-1">
                 <div className="w-1 h-4 bg-gray-400 rounded-full animate-bounce"></div>
                 <div className="w-1 h-6 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                 <div className="w-1 h-4 bg-gray-400 rounded-full animate-bounce delay-150"></div>
               </div>
               <div className="w-12 h-10 bg-white border-2 border-[#4A4A4A] rounded-b-xl relative">
                 <div className="absolute -right-3 top-2 w-4 h-4 border-2 border-[#4A4A4A] rounded-full border-l-0"></div>
               </div>
            </div>

            {/* Spirit Shrine (San Phra Phum - simplified) */}
            <div className="relative flex flex-col items-center ml-4">
              <div className="w-16 h-20 bg-[#FFD700] border-2 border-[#DAA520] rounded-sm relative shadow-sm">
                {/* Roof */}
                <div className="absolute -top-6 left-0 w-full h-6 bg-[#B22222] clip-path-polygon-[50%_0%,0%_100%,100%_100%] border-x-2 border-t-2 border-[#800000]"></div>
                {/* Pink Garland */}
                <div className="absolute top-4 -left-1 -right-1 h-2 bg-pink-300 rounded-full border border-pink-400"></div>
                {/* Strawberry Soda */}
                <div className="absolute -right-4 bottom-0 w-4 h-6 bg-red-400 border border-red-600 rounded-sm">
                  <div className="w-1 h-4 bg-white opacity-50 mx-auto mt-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Timer UI */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2 tracking-tight text-[#2D3436]">Office Workers Mu</h1>
          <p className="text-lg mb-8 opacity-70 italic font-medium">Sacred focus for the modern salaryman.</p>
          
          <div className="bg-white p-10 rounded-[3rem] border-4 border-[#FFD700] shadow-[12px_12px_0px_0px_rgba(255,215,0,0.15)] flex flex-col items-center">
            <span className="text-7xl font-mono font-black text-[#4A4A4A] mb-8 tracking-widest">
              {formatTime(timeLeft)}
            </span>
            
            <button 
              onClick={toggleTimer}
              className={`px-10 py-4 rounded-full text-xl font-bold transition-all transform active:scale-95 ${
                isActive 
                ? 'bg-red-100 text-red-600 border-2 border-red-200' 
                : 'bg-[#FFD700] text-white shadow-[0_4px_0_0_#DAA520] hover:translate-y-1 hover:shadow-none'
              }`}
            >
              {isActive ? 'Pause Flow' : 'Start Focus'}
            </button>
          </div>
          
          <p className="mt-8 text-sm text-[#8B5E3C] font-semibold uppercase tracking-widest">
            Blessings upon your deliverables
          </p>
        </div>
      </div>

      {/* Decorative footer text */}
      <footer className="absolute bottom-8 text-xs opacity-30">
        © 2026 Moolek • Minimal Mu Spirit
      </footer>

      <style jsx global>{`
        .clip-path-polygon {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
}
