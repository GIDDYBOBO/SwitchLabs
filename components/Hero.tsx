
import React, { useState, useEffect } from 'react';
import { X, ChevronRight, Activity, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [tickerData, setTickerData] = useState({ sentiment: 30.0, vol: 115.0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerData({
        sentiment: 29.5 + Math.random() * 1.0, // Stays around 30%
        vol: 80 + Math.random() * 70 // Range 80K to 150K
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mnjnegae", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setShowForm(false);
          setIsSuccess(false);
        }, 3000);
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("Submission failed. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-8 py-4 rounded-2xl border focus:outline-none transition-all text-xs font-bold ${
    isDarkMode 
      ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50' 
      : 'bg-black/5 border-black/10 text-black placeholder:text-black/30 focus:border-pink-500/50'
  }`;

  return (
    <section className="relative pt-48 pb-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Protocol Status Ticker */}
        <div className={`mb-10 mono-font text-[9px] uppercase tracking-[0.3em] flex items-center gap-6 ${isDarkMode ? 'opacity-40' : 'text-pink-600 opacity-80'}`}>
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-green-500' : 'bg-pink-500'} animate-pulse`} />
            <span>SWITCHLABS_ACTIVE</span>
          </div>
          <div className={`hidden md:flex gap-6 border-l ${isDarkMode ? 'border-current/20' : 'border-pink-200'} pl-6`}>
            <span>Sentiment: {tickerData.sentiment.toFixed(2)}%</span>
            <span>Index_Vol: {tickerData.vol.toFixed(1)}K</span>
            <span>Region: Global_Edge</span>
          </div>
        </div>

        {/* 01. Trust Badge */}
        <div className={`mb-12 inline-flex items-center gap-4 ${isDarkMode ? 'bg-white/[0.03] border-white/10 text-white/60' : 'bg-pink-50 border-pink-100 text-pink-900/60'} border rounded-full px-5 py-2 transition-all hover:scale-[1.02] cursor-default`}>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i} 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i*22}`} 
                className={`w-6 h-6 rounded-full border-2 ${isDarkMode ? 'border-zinc-950' : 'border-white'}`} 
                alt="user"
              />
            ))}
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">
            <span className={isDarkMode ? 'text-white' : 'text-pink-700'}>12+</span> Partnered Protocols
          </span>
        </div>

        {/* 02. Heading Block - Balanced Spacing */}
        <div className="mb-14 text-center">
          <h1 className={`text-4xl md:text-9xl font-black tracking-tighter uppercase ${isDarkMode ? 'text-white' : 'text-zinc-900'} leading-[0.85] mb-10`}>
            ENGINEERED <br /> GROWTH
          </h1>
          <p className={`max-w-xl mx-auto text-sm md:text-lg leading-relaxed font-medium ${isDarkMode ? 'opacity-50' : 'text-zinc-500'}`}>
            We provide architectural project supervision and high-performance advisory for the next era of DeFi. Move beyond marketing—start scaling your digital future.
          </p>
        </div>

        {/* 03. High Precision Metrics Bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl p-8 rounded-[2rem] mb-16 border ${isDarkMode ? 'bg-white/[0.02] border-white/5' : 'bg-white border-pink-100 shadow-sm'}`}>
          {[
            { label: "TVL Managed", val: "$200K+" },
            { label: "Growth Index", val: "2.2x" },
            { label: "Code Audited", val: "15" },
            { label: "Avg Sentiment", val: "48%" }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <p className={`text-[9px] font-black uppercase tracking-[0.3em] ${isDarkMode ? 'opacity-30' : 'text-pink-600/40'}`}>{stat.label}</p>
              <p className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? '' : 'text-pink-900'}`}>{stat.val}</p>
            </div>
          ))}
        </div>

        {/* CTA and Connection Line */}
        <div className="flex flex-col items-center gap-12">
          <button 
            onClick={() => setShowForm(true)}
            className={`group relative flex items-center gap-4 ${isDarkMode ? 'bg-white text-black' : 'bg-pink-600 text-white shadow-lg shadow-pink-200'} px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.4em] transition-all hover:scale-[1.05] active:scale-95`}
          >
            Initialize Switchlabs
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex flex-col items-center gap-6">
            <div className={`w-[1px] h-20 ${isDarkMode ? 'bg-gradient-to-b from-white/30 via-white/10 to-transparent' : 'bg-gradient-to-b from-pink-400 via-pink-100 to-transparent'}`} />
            <p className={`text-[9px] uppercase tracking-[0.7em] font-black ${isDarkMode ? 'text-gray-400 opacity-40' : 'text-pink-600 opacity-50'}`}>
              Building Your Digital Future
            </p>
          </div>
        </div>
      </div>

      {/* Form Modal (Enhanced) */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className={`${isDarkMode ? 'bg-zinc-950 border-white/10 text-white' : 'bg-white border-pink-100 text-zinc-900'} w-full max-w-lg p-12 rounded-[3.5rem] border shadow-[0_0_100px_rgba(219,39,119,0.15)] relative animate-in zoom-in-95`}>
            {isSuccess ? (
              <div className="flex flex-col items-center text-center py-12 animate-in zoom-in-90">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${isDarkMode ? 'bg-green-500/20 text-green-500' : 'bg-pink-100 text-pink-600'}`}>
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Transmission Received</h3>
                <p className="text-sm font-medium opacity-50">Our team will process your inquiry shortly.</p>
              </div>
            ) : (
              <>
                <button onClick={() => setShowForm(false)} className="absolute top-10 right-10 p-2 hover:bg-current/10 rounded-full transition-colors"><X size={20} /></button>
                <div className="mb-10 text-center">
                   <div className={`inline-flex p-3 rounded-2xl mb-6 ${isDarkMode ? 'bg-purple-500/10 text-purple-500' : 'bg-pink-100 text-pink-600'}`}>
                     <Activity size={24} />
                   </div>
                   <h3 className={`text-3xl font-black uppercase tracking-tighter mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Request Onboarding</h3>
                   <p className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">Phase 0: Project Validation</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input required name="name" type="text" className={inputClasses} placeholder="Founder Name" />
                    <input required name="email" type="email" className={inputClasses} placeholder="Work Email" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="twitter" type="text" className={inputClasses} placeholder="Twitter Handle" />
                    <input name="discord" type="text" className={inputClasses} placeholder="Discord Username" />
                  </div>
                  <textarea required name="message" rows={4} className={`${inputClasses} resize-none py-5`} placeholder="Briefly describe your protocol mission..."></textarea>
                  <button disabled={isSubmitting} className={`w-full py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] ${isDarkMode ? 'bg-white text-black' : 'bg-pink-600 text-white'} hover:opacity-90 disabled:opacity-50 transition-all`}>
                    {isSubmitting ? 'Processing...' : 'Secure Transmission'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
