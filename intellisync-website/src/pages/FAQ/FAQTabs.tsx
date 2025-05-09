import React from 'react';

interface FAQTabsProps {
  sections: string[];
  activeTab: number;
  setActiveTab: (idx: number) => void;
}

const FAQTabs: React.FC<FAQTabsProps> = ({ sections, activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center space-x-4">
      {sections.map((section, idx) => (
        <button
          key={section}
          className={`px-6 py-2 rounded-t-lg font-semibold transition-colors duration-200 focus:outline-none shadow-sm border-b-4  ${
  activeTab === idx
    ? 'bg-accent1/90 text-[#232946] border-cta shadow-lg'
    : 'bg-[#1a1a2e] text-accent1 border-transparent hover:bg-cta/20 hover:text-cta'
}`}
          onClick={() => setActiveTab(idx)}
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default FAQTabs;
