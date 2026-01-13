
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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const middleItem = container.children[2] as HTMLElement;
        if (middleItem) {
          const scrollPos = middleItem.offsetLeft - (container.offsetWidth / 2) + (middleItem.offsetWidth / 2);
          container.scrollTo({ left: scrollPos, behavior: 'instant' });
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} id="team" className="py-24 px-4 overflow-hidden">
      <div className={`max-w-7xl mx-auto text-center space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">03 / Key Personnel</p>
          <h2 className={`text-2xl md:text-3xl font-black tracking-[0.2em] uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Elite Team
          </h2>
          <div className={`h-[1px] w-8 mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'} ${isDarkMode ? 'bg-white/30' : 'bg-black/20'}`} />
        </div>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-[25vw] md:px-[35vw] pb-10"
        >
          {members.map((member, idx) => {
            const isActive = activeIdx === idx;
            
            return (
              <div 
                key={member.id} 
                style={{ transitionDelay: `${isVisible ? idx * 100 : 0}ms` }}
                className={`
                  flex-shrink-0 w-[240px] md:w-[280px] aspect-square rounded-[3rem] snap-center
                  relative group flex flex-col items-center justify-center p-8 transition-all duration-700
                  ${isDarkMode ? 'bg-zinc-900 border-white/5 shadow-2xl shadow-black' : 'bg-gray-50 border-black/5 shadow-xl shadow-black/5'} border
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                  ${isActive ? 'scale-110 blur-0 z-10 border-current/20' : 'scale-90 blur-[6px] opacity-20'}
                  hover:!blur-0 hover:!scale-110 hover:!opacity-100 hover:!z-20
                `}
              >
                <div className={`relative w-24 h-24 mb-6 transition-all duration-1000 ease-out ${isVisible ? 'scale-100 rotate-0' : 'scale-50 rotate-12'} group-hover:-translate-y-2`}>
                  <div className={`absolute inset-0 rounded-full blur-2xl opacity-10 transition-opacity group-hover:opacity-30 ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-contain relative z-10" 
                  />
                </div>

                <div className={`text-center space-y-2 mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <h4 className="text-lg font-black uppercase tracking-tight leading-none">{member.name}</h4>
                  <p className="text-[9px] font-bold opacity-40 uppercase tracking-[0.3em]">{member.role}</p>
                </div>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a href="#" className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-white/5 hover:bg-white hover:text-black' : 'bg-black/5 hover:bg-black hover:text-white'} flex items-center justify-center transition-all`}>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-white/5 hover:bg-white hover:text-black' : 'bg-black/5 hover:bg-black hover:text-white'} flex items-center justify-center transition-all`}>
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-white/5 hover:bg-white hover:text-black' : 'bg-black/5 hover:bg-black hover:text-white'} flex items-center justify-center transition-all`}>
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
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
      `}</style>
    </section>
  );
};

export default Team;
