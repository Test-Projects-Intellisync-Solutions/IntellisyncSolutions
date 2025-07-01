import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AIContextType {
  eventContext: string;
  setEventContext: (context: string) => void;
}

const AIContext = createContext<AIContextType | undefined>(undefined);

export const AIContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [eventContext, setEventContext] = useState<string>('');

  return (
    <AIContext.Provider value={{ eventContext, setEventContext }}>
      {children}
    </AIContext.Provider>
  );
};

export const useAIContext = () => {
  const context = useContext(AIContext);
  if (context === undefined) {
    throw new Error('useAIContext must be used within an AIContextProvider');
  }
  return context;
};
