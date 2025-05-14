// Centralized pricing data for Intellisync Solutions

export const planTiers = [
  {
    name: 'Essential Care',
    price: 99,
    supportRequests: 1,
    systemUpdates: 'Annual',
    includedHours: 1,
    extras: 'Light support & uptime stability',
  },
  {
    name: 'Basic Care',
    price: 149,
    supportRequests: 3,
    systemUpdates: 'Annual',
    includedHours: 3,
    extras: 'Uptime monitoring, quick response time',
  },
  {
    name: 'Enhanced Care',
    price: 249,
    supportRequests: 5,
    systemUpdates: 'Semi-Annual',
    includedHours: 5,
    extras: 'Performance insights, analytics, strategy reviews',
  },
  {
    name: 'Partner Care',
    price: 449,
    supportRequests: 'High-volume',
    systemUpdates: 'Quarterly + SEO Optimization',
    includedHours: '5+',
    extras: 'SEO audits, content refreshes, long-term planning',
    note: 'Starting at',
  },
];

export const bankedHours = {
  description: 'Get flexible, discounted dev time built into your plan.',
  details: [
    { plan: 'Essential', hours: 1 },
    { plan: 'Basic', hours: 3 },
    { plan: 'Enhanced & Partner', hours: 5 },
  ],
  usage: [
    'Use hours for enhancements, tweaks, or quick builds',
    'Unused hours roll over for 90 days',
    'After 90 days, unused hours expire',
  ],
  rates: [
    { type: 'Included work', rate: 150 },
    { type: 'New clients or non-plan holders', rate: 250 },
  ],
};

export const discountOptions = [
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
