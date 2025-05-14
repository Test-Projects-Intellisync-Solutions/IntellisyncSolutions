// Centralized pricing data for Intellisync Solutions

export const planTiers = [
  {
    name: 'Launchpad',
    price: 99,
    supportRequests: 1,
    systemUpdates: 'Annual',
    includedHours: 1,
    extras: 'Light support & uptime stability',
  },
  {
    name: 'Momentum',
    price: 149,
    supportRequests: 3,
    systemUpdates: 'Annual',
    includedHours: 3,
    extras: 'Uptime monitoring, quick response time',
  },
  {
    name: 'Ascent',
    price: 249,
    supportRequests: 5,
    systemUpdates: 'Semi-Annual',
    includedHours: 5,
    extras: 'Performance insights, analytics, strategy reviews',
  },
  {
    name: 'Continuum',
    price: 449,
    supportRequests: 'High-volume',
    systemUpdates: 'Quarterly + SEO Optimization',
    includedHours: '5+',
    extras: 'SEO audits, content refreshes, long-term planning',
    note: 'Starting at',
  },
];

export const bankedHours = {
  description: 'Banked Hours are pre-included development time in your After Care Plan that can be used for minor improvements, content updates, technical tweaks, or consultations. They offer flexibility without surprise charges and are ideal for keeping your platform agile, optimized, and evolving.',
  details: [
    { plan: 'Launchpad', hours: 1 },
    { plan: 'Momentum', hours: 3 },
    { plan: 'Ascent & Continuum', hours: 5 }, 
  ],
  usage: [
    'Use hours for enhancements, tweaks, or quick builds',
    'Unused hours roll over for 90 days',
    'After 90 days, unused hours expire',
  ],
  notes: [
    'Banked Hours are billed at a discounted rate of $150/hr if exceeded.',
    'Roll over hours are capped at 90 days—after which they expire.',
    'Work exceeding the plan or unrelated to the original scope may require a new estimate.',
    'Unused Banked Hours cannot be refunded or exchanged.',
    'Priority support is given to clients with active After Care Plans.'
  ],
  rates: [
    { type: 'Included work', rate: 150 },
    { type: 'New clients or non-plan holders', rate: 250 },
  ],
};

export type DiscountOption = { term: string; discount: number; note?: string };

export const discountOptions: DiscountOption[] = [
  { term: '2-Year Plan', discount: 5 },
  { term: '3-Year Plan', discount: 10 },
  { term: '4-Year Plan', discount: 15 },
  { term: '5-Year Plan', discount: 20 },
  { term: 'Annual Prepay Bonus', discount: 10, note: 'Add another 10% off' },
];

export const hourlyRates = [
  { clientType: 'After Care Plan Clients', rate: 150, note: 'discounted' },
  { clientType: 'One-Off or Out-of-Scope Work', rate: 250, note: 'standard' },
];

export const useCases = [
  'Content updates',
  'Design improvements',
  'AI chat optimizations',
  'SEO & performance tuning',
  'Accessibility or legal compliance updates',
  'Embedded tool upgrades',
];

export const afterCareNotes = [
  'All After Care Plans apply to your website and AI assistant integrations.',
  'Standalone apps like BusinessOne, PersonalOne, and GPTBuilder are managed separately.',
];
