
import React from 'react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`py-24 border-t ${isDarkMode ? 'border-white/5' : 'border-black/5'} px-4`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
        <div className="space-y-6">
          <div className="flex items-center justify-center md:justify-start">
             <div className={`inline-flex items-center h-12 pl-5 pr-1.5 rounded-full border ${isDarkMode ? 'border-white/10 bg-zinc-950' : 'border-black/5 bg-white'}`}>
                <div className="flex flex-col text-[9px] leading-[1.1] font-bold tracking-tight uppercase mr-8 select-none">
                  <span className="opacity-60">The</span>
                  <span className={isDarkMode ? 'text-white' : 'text-black'}>Switch</span>
                  <span className={isDarkMode ? 'text-white' : 'text-black'}>Labs</span>
                </div>
                <div className={`w-9 h-9 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
             </div>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 leading-relaxed max-w-[220px] mx-auto md:mx-0 opacity-50">
            Digital architecture for the next era of decentralized finance.
          </p>
        </div>

        <div>
          <h5 className="font-black mb-8 uppercase text-[9px] tracking-[0.4em] opacity-30 text-current">Navigation</h5>
          <ul className="space-y-4 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <li><a href="#" className="hover:text-current transition-colors">Manifesto</a></li>
            <li><a href="#services" className="hover:text-current transition-colors">Protocol</a></li>
            <li><a href="#team" className="hover:text-current transition-colors">Elite Team</a></li>
            <li><a href="#" className="hover:text-current transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-black mb-8 uppercase text-[9px] tracking-[0.4em] opacity-30 text-current">Presence</h5>
          <ul className="space-y-4 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <li>hello@switchlabs.ai</li>
            <li>Abuja, Nigeria // HQ</li>
            <li>Digital Native</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-current/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-gray-500 text-[9px] tracking-[0.5em] uppercase font-black opacity-30">
          © {new Date().getFullYear()} Switch Labs Inc // Minimalist Future.
        </p>
        <div className="flex gap-10 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-current transition-colors opacity-40">Privacy</a>
          <a href="#" className="hover:text-current transition-colors opacity-40">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
