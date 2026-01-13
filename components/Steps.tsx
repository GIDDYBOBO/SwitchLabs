
import React from 'react';

interface StepsProps {
  isDarkMode: boolean;
}

const Steps: React.FC<StepsProps> = ({ isDarkMode }) => {
  const steps = [
    {
      id: "01",
      title: "REACH OUT TO OUR TEAM",
      desc: "Just few minutes, describe what you want to build."
    },
    {
      id: "02",
      title: "WATCH US COOK",
      desc: "Settle down and watch us design, build and cook while involving you in every step we take."
    },
    {
      id: "03",
      title: "SIT BACK AND RELAX",
      desc: "After we meet and conclude, relax and chill as we make our idea come to life."
    }
  ];

  return (
    <section id="services" className={`py-24 px-4 transition-colors ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {steps.map((step) => (
          <div key={step.id} className="text-center space-y-6 group">
            <div className="inline-block">
              <span className={`text-sm font-bold block mb-2 tracking-[0.3em] ${isDarkMode ? 'opacity-40' : 'text-pink-500 opacity-60'}`}>{step.id}</span>
              <div className={`w-14 h-14 mx-auto ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-pink-50 border-pink-100'} rounded-full flex items-center justify-center border transition-all duration-500 group-hover:scale-110`}>
                <div className={`w-6 h-6 ${isDarkMode ? 'bg-white' : 'bg-pink-600'} rounded-full flex items-center justify-center transition-colors`}>
                  <div className={`w-3 h-3 ${isDarkMode ? 'bg-black' : 'bg-white'} rounded-full`} />
                </div>
              </div>
            </div>
            <h3 className={`text-xl font-bold tracking-wider leading-tight uppercase ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              {step.title}
            </h3>
            <p className={`text-sm leading-relaxed max-w-[280px] mx-auto font-medium ${isDarkMode ? 'text-gray-500' : 'text-zinc-500'}`}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
