// businessData.js
// Central source of truth for Intellisync Solutions product and contact info

export const businessData = {
  company: "Intellisync Solutions",
  products: [
    {
      name: "EducationOne",
      description: "A customizable tutoring engine that spans Grade 5 to post-secondary. It adapts across knowledge domains and supports both learners and educators with intelligent scaffolding."
    },
    {
      name: "BusinessOne",
      description: "An AI-driven business plan platform that helps users build and submit comprehensive business plans with ease. Packed with built-in financial calculators and AI-powered analytics, it demystifies key financials — from profitability to leverage ratios — making it perfect for startups and entrepreneurs."
    },
    {
      name: "GPT Builder",
      description: "A no-code chatbot builder for small businesses. It combines NLP, RAG (Retrieval Augmented Generation), semantic search, vector databases, and pre-scripted embeddings — all so users can copy-paste functional AI into any website like absolute legends."
    },
    {
      name: "Mnemos",
      description: "The intelligent meeting summarizer. Users upload documents, transcriptions, and notes — Mnemos does the rest. Generates formatted meeting summaries, creates actionable follow-ups, and helps humans pretend they took notes all along."
    },
    {
      name: "PersonalOne",
      description: "A financial planning platform for the rest of us. Low-touch, high-value, with smart calculators and intuitive AI guidance to improve financial well-being. Tracks goals, reduces waste, and boosts cashflow like a pocket-sized financial Jedi."
    }
  ],
  contacts: [
    {
      name: "Chris June",
      title: "Founder, AI Systems Engineer",
      email: [
        { address: "chris.june@intellisync.ca", region: "Canada" },
        { address: "chris.june@intellisyncsolutions.io", region: "Global" }
      ],
      emoji: "🇨🇦 🌍"
    },
    {
      name: "Aimee June",
      title: "Co-Founder & COO",
      email: [
        { address: "aimee.june@intellisyncsolutions.io", region: "Global" }
      ]
    },
    {
      name: "Courtney June",
      title: "CMO",
      email: [
        { address: "courtney.june@intellisyncsolutions.io", region: "Global" }
      ]
    },
    {
      name: "Abigail June",
      title: "Testing & Quality Control",
      note: "(She sees everything. Be respectful.)"
    }
  ]
};
