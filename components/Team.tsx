
import React, { useRef, useState, useEffect } from 'react';
import { Send, Twitter, Linkedin } from 'lucide-react';

interface TeamProps {
  isDarkMode: boolean;
}

const Team: React.FC<TeamProps> = ({ isDarkMode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(2); 
  const [isVisible, setIsVisible] = useState(false);

  const members = [
    { id: 1, name: "Crypto Chef", role: "Founder & Lead", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" },
    { id: 2, name: "Web3 Wizard", role: "CTO", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Buddy" },
    { id: 3, name: "Design Ninja", role: "Creative Dir", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jasper" },
    { id: 4, name: "DeFi Analyst", role: "Strategy", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Misty" },
    { id: 5, name: "Alpha Ghost", role: "Developer", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ghost" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const children = container.children;
    
    let closestIdx = 0;
    let minDistance = Number.MAX_VALUE;
    const containerCenter = scrollLeft + containerWidth / 2;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = i;
      }
    }

    if (closestIdx !== activeIdx) {
      setActiveIdx(closestIdx);
    }
  };

  // Center initial item on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const targetIdx = 2; // Middle item
        const middleItem = container.children[targetIdx] as HTMLElement;
        if (middleItem) {
          const scrollPos = middleItem.offsetLeft - (container.offsetWidth / 2) + (middleItem.offsetWidth / 2);
          container.scrollTo({ left: scrollPos, behavior: 'auto' });
          setActiveIdx(targetIdx);
        }
      }
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} id="team" className="py-32 px-4 relative overflow-hidden">
      <div className={`max-w-7xl mx-auto text-center space-y-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="space-y-4">
          <p className={`text-[10px] font-black uppercase tracking-[0.5em] ${isDarkMode ? 'opacity-30' : 'text-pink-600 opacity-50'}`}>03 / Specialized Personnel</p>
          <h2 className={`text-3xl md:text-5xl font-black tracking-tighter uppercase ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
            Elite Team
          </h2>
          <div className={`h-[2px] w-12 mx-auto rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'} ${isDarkMode ? 'bg-white/10' : 'bg-pink-500/20'}`} />
        </div>
        
        <div className="relative">
          {/* Edge Vignettes for focus effect */}
          <div className={`absolute left-0 top-0 bottom-0 w-[15vw] z-20 pointer-events-none bg-gradient-to-r ${isDarkMode ? 'from-black to-transparent' : 'from-[#fafafa] to-transparent'} hidden md:block`} />
          <div className={`absolute right-0 top-0 bottom-0 w-[15vw] z-20 pointer-events-none bg-gradient-to-l ${isDarkMode ? 'from-black to-transparent' : 'from-[#fafafa] to-transparent'} hidden md:block`} />

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-12 md:gap-20 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-[20vw] md:px-[35vw] py-20"
          >
            {members.map((member, idx) => {
              const isActive = activeIdx === idx;
              
              return (
                <div 
                  key={member.id} 
                  className={`
                    flex-shrink-0 w-[280px] md:w-[320px] aspect-[4/5] rounded-[4rem] snap-center
                    relative group flex flex-col items-center justify-center p-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${isDarkMode ? 'bg-zinc-900/50 border-white/5' : 'bg-white border-pink-100 shadow-xl shadow-pink-500/5'} border
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                    ${isActive ? 'scale-110 blur-0 z-10 opacity-100' : 'scale-75 blur-[12px] opacity-20 pointer-events-none'}
                    hover:!scale-110 hover:!blur-0
                  `}
                >
                  {/* Subtle Glow Background for active card */}
                  <div className={`absolute inset-0 rounded-[4rem] transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'} pointer-events-none overflow-hidden`}>
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient ${isDarkMode ? 'from-white/5 to-transparent' : 'from-pink-500/10 to-transparent'}`} />
                  </div>

                  <div className={`relative w-32 h-32 mb-8 transition-all duration-1000 ease-out ${isVisible ? 'scale-100 rotate-0' : 'scale-50 rotate-12'} group-hover:-translate-y-2`}>
                    <div className={`absolute inset-0 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40 ${isDarkMode ? 'bg-white' : 'bg-pink-500'}`} />
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-contain relative z-10 grayscale-0" 
                    />
                  </div>

                  <div className={`text-center space-y-3 mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h4 className={`text-xl font-black uppercase tracking-tight leading-none ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{member.name}</h4>
                    <p className={`text-[10px] font-black uppercase tracking-[0.4em] ${isDarkMode ? 'text-white/30' : 'text-pink-600/50'}`}>{member.role}</p>
                  </div>
                  
                  <div className={`flex gap-6 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {[
                      { icon: <Send className="w-4 h-4" />, href: "#" },
                      { icon: <Twitter className="w-4 h-4" />, href: "#" },
                      { icon: <Linkedin className="w-4 h-4" />, href: "#" }
                    ].map((link, i) => (
                      <a 
                        key={i} 
                        href={link.href} 
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white hover:text-black' : 'bg-pink-50 border-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white'}`}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .bg-radial-gradient {
          background: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
        }
      `}</style>
    </section>
  );
};

export default Team;
