
import React from 'react';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6">
      <div className={`w-full max-w-5xl flex items-center justify-between ${isDarkMode ? 'bg-white/[0.03] border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : 'bg-white/80 border-pink-100 shadow-[0_8px_32px_rgba(219,39,119,0.05)]'} backdrop-blur-3xl border px-10 py-4 rounded-full transition-all`}>
        
        {/* Brand */}
        <div className="flex items-center gap-12">
          <div className="flex flex-col text-[10px] leading-[1.1] font-black tracking-tight uppercase select-none">
            <span className="opacity-40">The</span>
            <span className={isDarkMode ? 'text-white' : 'text-pink-600'}>Switch</span>
            <span className={isDarkMode ? 'text-white' : 'text-pink-600'}>Labs</span>
          </div>

          <nav className={`hidden lg:flex items-center gap-10 text-[9px] font-black uppercase tracking-[0.4em] ${isDarkMode ? 'opacity-40' : 'opacity-60 text-zinc-600'}`}>
            <a href="#" className="hover:text-pink-600 hover:opacity-100 transition-all">Protocol</a>
            <a href="#services" className="hover:text-pink-600 hover:opacity-100 transition-all">Strategy</a>
            <a href="#team" className="hover:text-pink-600 hover:opacity-100 transition-all">Collective</a>
          </nav>
        </div>
        
        {/* Utilities */}
        <div className="flex items-center gap-6">
          <button 
            onClick={toggleTheme}
            className={`p-2.5 rounded-full transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-pink-50 text-pink-600'}`}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a 
            href="mailto:hello@switchlabs.ai"
            className={`hidden md:flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] border px-6 py-2.5 rounded-full transition-all ${isDarkMode ? 'border-white/10 text-white hover:bg-white hover:text-black' : 'border-pink-200 text-pink-600 hover:bg-pink-600 hover:text-white hover:border-pink-600'}`}
          >
            Inquire
            <ArrowUpRight size={10} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
