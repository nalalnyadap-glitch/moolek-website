'use client';

import React, { useState } from 'react';

const popularDreams = ['ฝันเห็นงู', 'ฝันว่าท้อง', 'ฝันว่าได้ทอง', 'ฝันเห็นช้าง', 'ฝันว่าฟันหัก'];

export default function DreamPage() {
  const [dream, setDream] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateLuckyNumbers = () => {
    const twoDigits = Math.floor(Math.random() * 90 + 10).toString();
    const threeDigits = Math.floor(Math.random() * 900 + 100).toString();
    const supplementary = [
      Math.floor(Math.random() * 90 + 10),
      Math.floor(Math.random() * 90 + 10)
    ];
    return { twoDigits, threeDigits, supplementary };
  };

  const handlePredict = (e) => {
    e?.preventDefault();
    if (!dream.trim()) return;

    setIsAnimating(true);
    setPrediction(null);

    // Simulate spiritual calculation delay
    setTimeout(() => {
      setPrediction({
        text: `ความฝันเกี่ยวกับ "${dream}" ของท่านเป็นมงคลยิ่งนัก โชคลาภกำลังเดินทางมาหาท่านในไม่ช้า ขอให้ท่านตั้งจิตอธิษฐานและใช้สติในการเสี่ยงโชค`,
        numbers: generateLuckyNumbers()
      });
      setIsAnimating(false);
    }, 800);
  };

  const handleQuickTagClick = (tag) => {
    setDream(tag);
    // Trigger prediction automatically for tags
    setTimeout(() => {
        setIsAnimating(true);
        setPrediction(null);
        setTimeout(() => {
            setPrediction({
                text: `ความฝันเกี่ยวกับ "${tag}" ของท่านเป็นมงคลยิ่งนัก โชคลาภกำลังเดินทางมาหาท่านในไม่ช้า ขอให้ท่านตั้งจิตอธิษฐานและใช้สติในการเสี่ยงโชค`,
                numbers: generateLuckyNumbers()
            });
            setIsAnimating(false);
        }, 800);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-slate-950 to-black text-white p-6 font-sans">
      <div className="max-w-2xl mx-auto pt-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] mb-4">
            ทำนายความฝันนำโชค
          </h1>
          <p className="text-purple-300 text-lg opacity-80">ตีเลขเด็ดจากนิมิตฝัน มูเลข (MOOLEK) แม่นยำทุกงวด</p>
        </div>

        {/* Search Bar Section */}
        <form onSubmit={handlePredict} className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              placeholder="ท่านฝันเห็นสิ่งใด..."
              className="flex-1 bg-black/60 border-2 border-yellow-700/50 rounded-xl px-6 py-4 text-xl focus:outline-none focus:border-yellow-500 text-yellow-50 placeholder-purple-300/40 backdrop-blur-xl"
            />
            <button
              type="submit"
              disabled={isAnimating}
              className="bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-xl transition-all transform active:scale-95 shadow-[0_0_20px_rgba(202,138,4,0.4)] disabled:opacity-50"
            >
              {isAnimating ? 'กำลังคำนวณ...' : 'ตีเลขเด็ด'}
            </button>
          </div>
        </form>

        {/* Popular Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {popularDreams.map((tag) => (
            <button
              key={tag}
              onClick={() => handleQuickTagClick(tag)}
              className="bg-purple-900/40 border border-purple-700/50 hover:border-yellow-600/50 hover:bg-purple-800/60 px-4 py-1.5 rounded-full text-sm text-purple-200 transition-all"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Prediction Output Card */}
        {prediction && (
          <div className="relative animate-in fade-in zoom-in duration-700">
            <div className="absolute -inset-2 bg-yellow-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-slate-900 to-black border-2 border-yellow-600/60 rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Snake/Mystical Accent Decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
              </div>

              <div className="text-center">
                <h3 className="text-yellow-500 font-bold text-xl mb-4">คำทำนายมงคล</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-8 italic">
                  "{prediction.text}"
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-black/40 border border-yellow-800/30 rounded-2xl p-4">
                    <span className="text-purple-400 text-xs uppercase tracking-widest block mb-2">เลขเด่น 2 ตัว</span>
                    <span className="text-4xl font-black text-yellow-400 tracking-tighter drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
                      {prediction.numbers.twoDigits}
                    </span>
                  </div>
                  <div className="bg-black/40 border border-yellow-800/30 rounded-2xl p-4">
                    <span className="text-purple-400 text-xs uppercase tracking-widest block mb-2">เลขเด่น 3 ตัว</span>
                    <span className="text-4xl font-black text-yellow-400 tracking-tighter drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
                      {prediction.numbers.threeDigits}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-yellow-900/30">
                  <p className="text-purple-300/60 text-sm mb-3">เลขรองมงคล</p>
                  <div className="flex justify-center gap-4">
                    {prediction.numbers.supplementary.map((num, i) => (
                      <span key={i} className="text-2xl font-bold text-yellow-600/80">{num}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
