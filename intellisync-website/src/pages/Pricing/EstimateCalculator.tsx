import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { hourlyRates, discountOptions } from './pricingData';

// Separate out the annual prepay bonus

import type { DiscountOption } from './pricingData';

const annualPrepayOption: DiscountOption | undefined = discountOptions.find((opt: DiscountOption) => opt.term === 'Annual Prepay Bonus');
const regularDiscountOptions: DiscountOption[] = discountOptions.filter((opt: DiscountOption) => opt.term !== 'Annual Prepay Bonus');

const scenarios = [
  { label: 'Custom AI', value: 'customai' },
  { label: 'AI Integration', value: 'integration' },
  { label: 'Custom AI Function & Tool Calls', value: 'ai' },
  { label: 'MCP Servers', value: 'server' },
  { label: 'MCP Tools', value: 'tool' },
  { label: 'Websites', value: 'website' },
  { label: 'Custom Build', value: 'custom' },
];

const defaultInputs = {
  hours: 0, // additional hours above minimum
  integrations: 1,
  serverSize: 'Small',
  aiCalls: 1000,
};

const serverOptions = [
  {
    label: 'Small',
    multiplier: 1,
    description: '1 vCPU, 2GB RAM, 50GB SSD. Ideal for basic websites, prototypes, or low-traffic applications (under 5,000 visits/month).'
  },
  {
    label: 'Medium',
    multiplier: 1.5,
    description: '4 vCPU, 4GB RAM, 100GB SSD. Great for small to medium web apps with moderate API usage or traffic up to ~25,000 monthly visits.'
  },
  {
    label: 'Large',
    multiplier: 2,
    description: '4 vCPU, 8GB RAM, 200GB SSD. Recommended for advanced integrations, MCP services, or high-traffic apps exceeding 100,000 monthly visits.'
  }
];

function getBaseRate(clientType: string) {
  // Only After Care Plan Clients get the discounted rate
  if (clientType === 'After Care Plan Clients') {
    const discounted = hourlyRates.find(r => r.clientType === 'After Care Plan Clients');
    return discounted ? discounted.rate : 150;
  } else {
    const standard = hourlyRates.find(r => r.clientType === 'One-Off or Out-of-Scope Work');
    return standard ? standard.rate : 250;
  }
}

function applyDiscount(base: number, discount: number) {
  return base * (1 - discount / 100);
}

export const EstimateCalculator: React.FC = () => {
  const [scenario, setScenario] = useState(scenarios[0].value);
  const [inputs, setInputs] = useState(defaultInputs);
  const [clientType, setClientType] = useState(hourlyRates[0].clientType);
  const [discount, setDiscount] = useState(0);
  const [annualPrepay, setAnnualPrepay] = useState('none'); // 'none' or 'annual'

  // Calculation logic
  let estimate = 0;
  if (scenario === 'customai' || scenario === 'website' || scenario === 'tool' || scenario === 'custom') {
    // Always charge for at least 10 hours, plus any additional
    estimate = (10 + Math.max(0, inputs.hours)) * getBaseRate(clientType);
  } else if (scenario === 'integration') {
    estimate = Math.max(10, inputs.integrations * 5) * getBaseRate(clientType); // at least 10 hours
  } else if (scenario === 'server') {
    const server = serverOptions.find(s => s.label === inputs.serverSize) || serverOptions[0];
    estimate = Math.max(10, 20 * server.multiplier) * getBaseRate(clientType); // at least 10 hours
  } else if (scenario === 'ai') {
    estimate = Math.max(10 * getBaseRate(clientType), (inputs.aiCalls / 1000) * 100); // $100 per 1k calls or 10hr min
  }
  if (discount > 0) {
    estimate = applyDiscount(estimate, discount);
  }
  if (annualPrepay === 'annual' && annualPrepayOption) {
    estimate = applyDiscount(estimate, annualPrepayOption.discount);
  }

  return (
    <motion.section
      className="bg-gradient-to-br from-[#181c2b] via-[#21243a] to-[#232946] rounded-xl p-8 my-8 shadow-xl max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">Estimate Calculator</h2>
      <p className="text-gray-300 mb-6">Select a scenario and enter your details to get a quick estimate. Actual costs may vary. <span className="italic">Contact us for a precise quote!</span></p>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Scenario</label>
        <select
          className="w-full p-2 rounded bg-[#232946] text-white border border-gray-600"
          value={scenario}
          onChange={e => setScenario(e.target.value)}
        >
          {scenarios.map(s => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Client Type</label>
        <select
          className="w-full p-2 rounded bg-[#232946] text-white border border-gray-600"
          value={clientType}
          onChange={e => setClientType(e.target.value)}
        >
          {hourlyRates.map(r => (
            <option key={r.clientType} value={r.clientType}>
              {r.clientType} ({r.clientType === 'After Care Plan Clients' ? 'Banked Rate' : 'Standard Rate'} - ${r.rate}/hr)
            </option>
          ))}
        </select>
        <div className="text-xs text-gray-400 mt-1">
          <span className="font-semibold">Note:</span> Banked Hours rates are only available to After Care Plan clients. Others pay the standard hourly rate.
        </div>
      </div>
      {(scenario === 'customai' || scenario === 'website' || scenario === 'tool' || scenario === 'custom') && (
        <div className="mb-4">
          <label className="block text-gray-200 mb-2">
            Additional Hours <span className="text-xs text-gray-400">(First 10 hours minimum charge applies)</span>
          </label>
          <input
            type="number"
            min={0}
            step={1}
            inputMode="numeric"
            pattern="[0-9]*"
            className="w-full p-2 rounded bg-[#232946] text-white border border-gray-600"
            value={inputs.hours === 0 ? '' : inputs.hours}
            placeholder="0"
            onChange={e => {
              const val = e.target.value === '' ? 0 : Math.max(0, Number(e.target.value));
              setInputs({ ...inputs, hours: val });
            }}
          />
        </div>
      )}
      {scenario === 'integration' && (
        <div className="mb-4">
          <label className="block text-gray-200 mb-2">Number of Integrations</label>
          <input
            type="number"
            min={1}
            className="w-full p-2 rounded bg-[#232946] text-white border border-gray-600"
            value={inputs.integrations}
            onChange={e => setInputs({ ...inputs, integrations: Number(e.target.value) })}
          />
        </div>
      )}
      {scenario === 'server' && (
  <div className="mb-4">
    <label className="block text-gray-200 mb-2">Server Size</label>
    <select
      className="w-full p-2 rounded bg-[#232946] text-white border border-gray-600"
      value={inputs.serverSize}
      onChange={e => setInputs({ ...inputs, serverSize: e.target.value })}
    >
      {serverOptions.map(s => (
        <option key={s.label} value={s.label}>{s.label}</option>
      ))}
    </select>
    {/* Show description for the selected server size */}
    <div className="mt-2 text-gray-400 text-sm">
      {serverOptions.find(s => s.label === inputs.serverSize)?.description}
    </div>
  </div>
)}
      {scenario === 'ai' && (
        <div className="mb-4">
          <label className="block text-gray-200 mb-2">AI Function Calls (per month)</label>
          <input
            type="number"
            min={100}
            step={100}
            className="w-full p-2 rounded bg-[#232946] text-white border border-gray-600"
            value={inputs.aiCalls}
            onChange={e => setInputs({ ...inputs, aiCalls: Number(e.target.value) })}
          />
        </div>
      )}
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Term Discount</label>
        <select
          className="w-full p-2 rounded bg-[#232946] text-white border border-gray-600"
          value={discount}
          onChange={e => setDiscount(Number(e.target.value))}
        >
          <option value={0}>None</option>
          {regularDiscountOptions.map(opt => (
            <option key={opt.term} value={opt.discount}>{opt.term} ({opt.discount}% off)</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Annual Prepay Bonus</label>
        <select
          className="w-full p-2 rounded bg-[#232946] text-white border border-gray-600"
          value={annualPrepay}
          onChange={e => setAnnualPrepay(e.target.value)}
        >
          <option value="none">No Annual Prepay</option>
          <option value="annual">Apply Annual Prepay Bonus{annualPrepayOption ? ` (${annualPrepayOption.discount}% off)` : ''}</option>
        </select>
        <div className="text-xs text-gray-400 mt-1">
          The annual prepay bonus can be combined with a term discount for extra savings.
        </div>
      </div>
      <motion.div
        className="mt-6 bg-[#1a1a2e] rounded-lg p-6 text-center shadow-lg border border-[#232946]"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-gray-400 mb-2">Estimated Cost</div>
        <div className="text-3xl font-bold text-green-400">${estimate.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
        <div className="text-xs text-gray-500 mt-2">* This is a quick estimate. Final pricing may vary based on project scope and requirements.</div>
      </motion.div>
    </motion.section>
  );
};

export default EstimateCalculator;
