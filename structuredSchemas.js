// structuredSchemas.js
// This file contains Zod schemas and helpers for structured outputs from the AI.
import { z } from 'zod';

// Business info schema for Intellisync Solutions
export const BusinessInfoSchema = z.object({
  products: z.array(z.string()).optional(),
  services: z.array(z.string()).optional(),
  contact: z.object({
    email: z.string().email().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    website: z.string().url().optional(),
  }).optional(),
  freeform: z.string().optional(), // For conversational extra response
});

// Helper: detect if a query is for business info
export function isBusinessInfoQuery(userInput) {
  const patterns = [
    /product/i,
    /service/i,
    /contact/i,
    /how (do|can) i (reach|contact)/i,
    /email/i,
    /phone/i,
    /address/i,
    /what does intellisync do/i,
    /who (can|should) i (contact|talk to|reach)/i,
    /someone to contact/i,
    /looking for.*contact/i,
    /get in touch/i,
    /speak to (someone|a person|a rep|an agent)/i,
    /customer (support|service)/i,
    /help.*contact/i
  ];
  return patterns.some((re) => re.test(userInput));
}

