
import React, { useRef } from 'react';

interface ShowcaseProps {
  isDarkMode: boolean;
}

const Showcase: React.FC<ShowcaseProps> = ({ isDarkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const items = [
    { 
      title: "Expert Advisory", 
      desc: "Switch Labs provides senior-level advisory on tokenomics architecture, launch strategies, and competitive market positioning to ensure your protocol stands out in the crowded DeFi landscape through strategic intelligence.",
      img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Strategic Growth Roadmap", 
      desc: "We engineer detailed growth roadmaps and perform deep competitive analysis to guide your project from initial launch to global scale with precision, predictability, and data-driven market insights.",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" // Planning/Roadmap feel
    },
    { 
      title: "Community Moderation", 
      desc: "Our team provides professional 24/7 community moderation and organizes high-impact digital events to foster real growth and build deeply engaged, loyal digital communities across Discord and Telegram.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Strategy and Management", 
      desc: "We oversee comprehensive social media strategy and management, including influencer partnerships and strategic alliance facilitation designed to amplify your reach and build long-term trust in Web3.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Brand Identity", 
      desc: "Switch Labs specializes in premium brand identity development and positioning, creating unique visual languages and specialized UI/UX designs that define your project's architectural digital presence.",
      img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Podcast", 
      desc: "We help launch and scale dedicated podcast platforms featuring deep dives into crypto market trends, breaking news, and media relations that position your founders as industry thought leaders.",
      img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Blockchain App Development", 
      desc: "Our technical specialists handle full-stack blockchain application development and provide the robust infrastructure needed to power modern decentralized protocols and high-performance DeFi ecosystems.",
      img: "https://images.unsplash.com/photo-1642104704074-907c0698bcd9?auto=format&fit=crop&q=80&w=800" 
    },
  ];

  return (
    <section id="showcase" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-20 mb-12">
        <p className={`text-[10px] font-black uppercase tracking-[0.6em] ${isDarkMode ? 'opacity-30' : 'text-pink-600 opacity-50'} mb-2`}>
          Protocol Portfolio
        </p>
        <h2 className={`text-3xl font-black tracking-tighter uppercase ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Integrated Services</h2>
      </div>

      <div 
        ref={containerRef}
        className="flex gap-8 px-8 md:px-20 overflow-x-auto no-scrollbar scroll-smooth snap-x group/container pb-12"
      >
        {items.map((item, idx) => (
          <div 
            key={idx}
            className={`
              flex-shrink-0 w-80 md:w-[28rem] aspect-[3/4] rounded-[3.5rem] overflow-hidden relative cursor-pointer
              transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] snap-center
              group/card
              group-hover/container:blur-[2px] group-hover/container:scale-[0.98] group-hover/container:opacity-30
              hover:!blur-0 hover:!scale-105 hover:!opacity-100 hover:z-20
              ${isDarkMode ? 'bg-zinc-900 border border-white/5' : 'bg-white border border-pink-100 shadow-sm'}
            `}
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover grayscale opacity-70 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-1000 group-hover/card:scale-110" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-12">
              <div className="transform transition-transform duration-700 group-hover/card:-translate-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-4">Module_0{idx + 1}</p>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">{item.title}</h3>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed font-medium transition-all duration-500 opacity-90 group-hover/card:opacity-100 group-hover/card:text-white">
                  {item.desc}
                </p>
              </div>
              
              <div className={`mt-10 h-[2px] w-0 group-hover/card:w-full transition-all duration-1000 bg-gradient-to-r ${isDarkMode ? 'from-purple-500' : 'from-pink-500'} to-transparent rounded-full`} />
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Showcase;
