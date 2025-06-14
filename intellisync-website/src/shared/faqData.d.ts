export interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface FAQSection {
  title: string;
  items: FAQItem[];
}

export const faqSections: FAQSection[];
