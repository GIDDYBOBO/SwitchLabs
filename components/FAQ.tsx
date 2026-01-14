
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  isDarkMode: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, isDarkMode }) => {
  return (
    <div className={`border-b ${isDarkMode ? 'border-white/10' : 'border-black/10'} overflow-hidden transition-all duration-500`}>
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-sm md:text-base font-black uppercase tracking-[0.15em] transition-colors duration-300 ${isOpen ? (isDarkMode ? 'text-white' : 'text-black') : 'opacity-40 group-hover:opacity-70'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? <Minus size={18} className="opacity-40" /> : <Plus size={18} className="opacity-40" />}
        </div>
      </button>
      <div 
        className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-gray-500 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
          {answer}
        </div>
      </div>
    </div>
  );
};

interface FAQProps {
  isDarkMode: boolean;
}

const FAQ: React.FC<FAQProps> = ({ isDarkMode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly is The Switch Labs?",
      answer: "The Switch Labs is a specialized Web3 agency dedicated to the cryptocurrency and DeFi sectors. We focus on achieving sustainable growth for our partners through a combination of strategic marketing, deep community building, and architectural brand development."
    },
    {
      question: "What is your core mission?",
      answer: "We guide Web3 projects from the initial launch phase through to global scaling. Our mission is to combine practical, field-tested strategies with creative execution to build measurable growth and highly engaged communities for the next generation of decentralized finance."
    },
    {
      question: "What services do you provide for Web3 projects?",
      answer: (
        <div className="space-y-4">
          <p>Our expertise spans four critical pillars of the Web3 ecosystem:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li><strong className={isDarkMode ? 'text-white/80' : 'text-black/80'}>Strategy & Growth:</strong> Tokenomics advisory, launch roadmaps, and market positioning.</li>
            <li><strong className={isDarkMode ? 'text-white/80' : 'text-black/80'}>Community:</strong> Moderation, influencer partnerships, and strategic alliances.</li>
            <li><strong className={isDarkMode ? 'text-white/80' : 'text-black/80'}>Creative:</strong> Video production, UI/UX design, and brand identity.</li>
            <li><strong className={isDarkMode ? 'text-white/80' : 'text-black/80'}>Technical:</strong> Blockchain application development and infrastructure support.</li>
          </ul>
        </div>
      )
    },
    {
      question: "Why should we work with Switch Labs?",
      answer: "We bring together a collective of experienced professionals with deep-rooted expertise in DeFi and crypto markets. Our methodology combines data-driven strategy with high-end creative execution to deliver tangible results: stronger communities, significantly greater visibility, and lasting user loyalty."
    },
    {
      question: "Do you offer technical blockchain development?",
      answer: "Absolutely. Beyond growth and creative services, we provide comprehensive technical support including blockchain application development and specialized infrastructure for DeFi projects to ensure a robust foundation for your protocol."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">04 / Frequently Asked</p>
          <h2 className={`text-2xl md:text-3xl font-black tracking-[0.2em] uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Switchlabs Intelligence
          </h2>
          <div className={`h-[1px] w-12 transition-all duration-700 ${isDarkMode ? 'bg-white/20' : 'bg-black/10'}`} />
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
