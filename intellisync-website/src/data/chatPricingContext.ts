import { planTiers, bankedHours } from '../pages/Pricing/pricingData';

/**
 * Structured pricing information for chat context
 * This provides natural language descriptions of pricing plans
 * that can be used by the chat to answer questions
 */

export const chatPricingContext = {
  // General pricing introduction
  introduction: "Intellisync Solutions offers flexible pricing plans tailored to different business needs. Here's an overview of our plans and what they include:",
  
  // Plan summaries for quick reference
  planSummaries: planTiers.map(plan => ({
    name: plan.name,
    price: plan.price,
    keyFeatures: [
      `${plan.supportRequests} support request${plan.supportRequests === 1 ? '' : 's'} included`,
      `System updates: ${plan.systemUpdates}`,
      `Includes ${plan.includedHours} hour${plan.includedHours === 1 ? '' : 's'} of development time`,
      plan.extras
    ],
    note: plan.note ? `*${plan.note}*` : undefined
  })),
  
  // Banked hours explanation
  bankedHours: {
    description: bankedHours.description,
    plans: bankedHours.details.map(detail => ({
      plan: detail.plan,
      hours: detail.hours
    })),
    usage: bankedHours.usage,
    rates: [
      'After Care Plan Clients: $150/hr (discounted rate)',
      'Standard Rate: $250/hr (for one-off or out-of-scope work)'
    ],
    notes: [
      'Banked Hours are billed at a discounted rate of $150/hr if exceeded',
      'Roll over hours expire after 90 days',
      'Work exceeding the original scope may require a new estimate',
      'Unused Banked Hours cannot be refunded or exchanged',
      'Priority support is given to clients with active After Care Plans'
    ]
  },
  
  // Long term discounts
  longTermDiscounts: {
    description: 'Save more with our long-term commitment discounts. The longer you commit, the more you save!',
    options: [
      { term: '2-Year Plan', discount: '5%' },
      { term: '3-Year Plan', discount: '10%' },
      { term: '4-Year Plan', discount: '15%' },
      { term: '5-Year Plan', discount: '20%' },
      { term: 'Annual Prepay Bonus', discount: 'Additional 10% off', note: 'Can be combined with long-term discounts' }
    ],
    notes: [
      'Discounts apply to the monthly plan price',
      'Long-term plans require upfront payment for the full term',
      'Discounts cannot be combined with other promotions',
      'Annual prepay bonus is stackable with long-term discounts'
    ]
  },
  
  // Common questions and answers
  faq: [
    {
      question: "What's included in the support requests?",
      answer: "Support requests cover troubleshooting, minor adjustments, and guidance on using your platform. Each request is tracked separately and should be specific to a single issue or question."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. When upgrading, you'll be charged a prorated amount. When downgrading, changes will take effect at the start of your next billing cycle."
    },
    {
      question: "What happens if I don't use all my banked hours?",
      answer: "Unused banked hours expire after 90 days. We recommend using them for small improvements or saving them for future updates."
    },
    {
      question: "Are there any additional costs?",
      answer: "The pricing includes all listed features. Additional development work beyond the included hours is billed at our standard rate of $250.00 per hour or at the After Care rate of $150.00 per hour when on a subscription plan."
    }
  ],
  
  // Call to action
  cta: "Would you like more details about a specific plan or help choosing the right one for your needs?"
};

/**
 * Gets a natural language description of pricing plans
 * @returns A string describing all available pricing plans
 */
export function getPricingOverview(): string {
  return [
    "Intellisync Solutions offers the following plans:",
    ...planTiers.map(plan => 
      `- **${plan.name}**: $${plan.price}/month - Includes ${plan.supportRequests} support requests, ${plan.systemUpdates} system updates, and ${plan.includedHours} hours of development time. ${plan.extras}${plan.note ? ` (${plan.note})` : ''}`
    ),
    "\n**Banked Hours:**",
    "- Included in all After Care Plans at a discounted rate of $150/hr",
    "- Standard rate for one-off work: $250/hr",
    "- Unused hours expire after 90 days",
    "- Priority support for active plan holders",
    "\n**Long Term Discounts:**",
    "- Save 5-20% with 2-5 year commitments",
    "- Additional 10% off with annual prepay",
    "- Discounts apply to monthly plan price",
    "- Long-term plans require full upfront payment. Or we take your children's allowance money"
  ].join('\n');
}
