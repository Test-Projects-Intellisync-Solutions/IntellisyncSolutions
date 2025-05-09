// Shared FAQ data for both frontend and backend usage
export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSection = {
  section: string;
  faqs: FAQItem[];
};

export const faqSections: FAQSection[] = [
  {
    section: 'General',
    faqs: [
      {
        question: 'What is Intellisync Solutions?',
        answer: 'Intellisync Solutions provides intelligent automation and integration tools for business or personal use of all sizes.'
      },
      {
        question: 'How can I contact support?',
        answer: 'You can reach our support team via the Contact page or by emailing chris.june@intellisync.ca.'
      },
      {
        question: 'What problems does Intellisync solve?',
        answer: 'We eliminate repetitive tasks—email triage, data entry, report generation—by deploying AI agents that run 24/7.'
      },
      {
        question: 'Do I need coding skills to use Intellisync products?',
        answer: 'No. All our dashboards are no‑code; if you can drag and drop files and type, you can run any of our AI workflows.'
      },
      {
        question: 'How long does it take to get started?',
        answer: 'Most clients launch a proof‑of‑concept agent within 2-3 weeks of kickoff.'
      },
      {
        question: 'Can I cancel at any time?',
        answer: 'Yes. All plans are month‑to‑month—no lock‑in, no hidden fees.'
      },
      {
        question: 'What are your support hours?',
        answer: 'Our human support team is available 9 AM–5 PM PT, Monday–Friday, with 24/7 monitoring for critical issues.'
      },
      {
        question: 'Our business has custom needs. Can you help?',
        answer: 'Yes. We can help you design and implement AI workflows to meet your specific needs.'
      },
      {
        question: 'What is your business model?',
        answer: 'We are a software company that provides AI first solutions to businesses and individuals.'
      }
    ]
  },
  {
    section: 'Acronyms',
    faqs: [
      {
        question: 'What does AI mean?',
        answer: 'AI stands for Artificial Intelligence—software that can learn and perform tasks typically requiring human intelligence.'
      },
      {
        question: 'What does ML mean?',
        answer: 'ML stands for Machine Learning, a subset of AI where models learn patterns from data to make predictions or decisions.'
      },
      {
        question: 'What does NLP mean?',
        answer: 'NLP stands for Natural Language Processing, the branch of AI focused on understanding and generating human language.'
      },
      {
        question: 'What does LLM mean?',
        answer: 'LLM stands for Large Language Model—a very large neural network trained on vast text data to generate human‑like language (e.g., chatbots).'
      },
      {
        question: 'What does API mean?',
        answer: 'API stands for Application Programming Interface—a set of rules that lets different software applications communicate with each other.'
      },
      {
        question: 'What does MCP mean?',
        answer: 'MCP stands for Model Context Protocol—Intellisync’s framework for safely swapping AI models and their context without downtime.'
      },
      {
        question: 'What does RAG mean?',
        answer: 'RAG stands for Retrieval‑Augmented Generation—an AI technique that first fetches relevant documents then uses them to craft accurate answers.'
      },
      {
        question: 'What does GPU mean?',
        answer: 'GPU stands for Graphics Processing Unit—a specialized chip that accelerates AI model training and inference.'
      },
      {
        question: 'What does UI mean?',
        answer: 'UI stands for User Interface—the part of a program or device that you interact with.'
      },
      {
        question: 'What does UX mean?',
        answer: 'UX stands for User Experience—the overall experience of using a product or service.'
      }
    ]
  },
  {
    section: 'Technical',
    faqs: [
      {
        question: 'Is my data secure?',
        answer: 'Yes, we use industry-standard security measures to protect your data.'
      },
      {
        question: 'Do you offer API access?',
        answer: 'Yes, API access is available on select plans. See our Pricing page for more details.'
      },
      {
        question: 'Do you offer a free trial?',
        answer: 'Yes, we offer a free trial for our AI products. See our Pricing page for more details.'
      },
      {
        question: 'Can you deploy on‑premises instead of the cloud?',
        answer: 'Absolutely. For organisations with strict data residency needs, we deploy private MCP servers inside your own VPC or on‑prem hardware.'
      },
      {
        question: 'What compliance standards do you meet?',
        answer: 'We operate under SOC 2 controls and can sign HIPAA or GDPR agreements for qualifying clients.'
      },
      {
        question: 'How is my data stored and retained?',
        answer: 'All customer data is encrypted at rest. Raw logs are retained for 30 days by default, after which they are purged or anonymised.'
      },
      {
        question: 'What is your uptime SLA?',
        answer: 'Paid plans include a 99.9 % uptime Service Level Agreement, with 24/7 monitoring and automated fail‑over clusters.'
      },
      {
        question: 'How do model updates work?',
        answer: 'Our MCP layer lets us hot‑swap new model versions. You can freeze or auto‑adopt updates per project.'
      },
      {
        question: 'Can I integrate with third‑party tools?',
        answer: 'Yes. We provide pre‑built connectors for Slack, Stripe, HubSpot, and Zapier, plus a REST API for anything else.'
      },
      {
        question: 'Is there a rate limit on the API?',
        answer: 'Free tier includes 1000 calls/day; higher tiers scale up to 1M calls/day or custom quotas.'
      },
      {
        question: 'Do you fine‑tune models with proprietary data?',
        answer: 'Yes. You can bring your own data to create domain‑specialised models. Fine‑tuned weights remain your intellectual property.'
      }
    ]
  }
];
