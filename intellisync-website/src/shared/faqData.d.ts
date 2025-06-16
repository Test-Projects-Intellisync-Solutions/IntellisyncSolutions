export interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface FAQSection {
  section: string;
  faqs: FAQItem[];
}

export const faqSections: FAQSection[];
