
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Steps from './components/Steps';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`${isDarkMode ? 'dark bg-black text-white' : 'bg-[#fafafa] text-zinc-900'} min-h-screen transition-colors duration-500 selection:bg-pink-500/30 font-sans`}>
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ${isDarkMode ? 'hero-glow' : 'opacity-100'}`} 
           style={!isDarkMode ? { background: 'radial-gradient(circle at 50% 50%, rgba(219, 39, 119, 0.05) 0%, transparent 70%)' } : {}} />
      
      {/* High-end Web3 Background Animation */}
      <BackgroundEffect isDarkMode={isDarkMode} />
      
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero isDarkMode={isDarkMode} />
        <Showcase isDarkMode={isDarkMode} />
        <Steps isDarkMode={isDarkMode} />
        <Team isDarkMode={isDarkMode} />
        <FAQ isDarkMode={isDarkMode} />
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
