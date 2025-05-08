// Waitlist configuration for Business and Personal variants
import { QuestionType, WaitlistConfig } from '../types/waitlist';

// Define the configuration with proper type annotations
export const waitlistConfig: Record<string, WaitlistConfig> = {
  business: {
    variant: "business",
    steps: [
      {
        id: "workflow-pain-point",
        question: "Which workflow could use an AI sidekick first?",
        type: "single" as QuestionType,
        options: [
          "Document processing & analysis",
          "Customer support automation",
          "Meeting summaries & follow-ups",
          "Data insights & reporting",
          "Project management",
          "Something else entirely"
        ],
        helper: "Select the area where AI could save you the most time"
      },
      {
        id: "existing-tools",
        question: "What tools are you currently using?",
        type: "multi" as QuestionType,
        options: [
          "Microsoft 365 / Google Workspace",
          "Slack / Teams",
          "CRM (Salesforce, HubSpot, etc.)",
          "Project management (Asana, Monday, etc.)",
          "Custom internal systems",
          "None of these"
        ],
        helper: "We'll prioritize integrations with your stack"
      },
      {
        id: "desired-outcomes",
        question: "What outcomes are you hoping AI will deliver?",
        type: "multi" as QuestionType,
        options: [
          "Reduce operational costs",
          "Improve customer experience",
          "Accelerate decision making",
          "Automate repetitive tasks",
          "Enable new capabilities",
          "Enhance employee productivity"
        ],
        helper: "Select all that apply to your business goals"
      },
      {
        id: "company-size",
        question: "What's your company size?",
        type: "single" as QuestionType,
        options: [
          "Just me (solo)",
          "Small team (2-10)",
          "Growing business (11-50)",
          "Mid-size (51-200)",
          "Enterprise (201+)"
        ],
        helper: "Helps us tailor our solution to your scale"
      },
      {
        id: "implementation-timeline",
        question: "How soon are you looking to implement?",
        type: "single" as QuestionType,
        options: [
          "ASAP - we have urgent needs",
          "This quarter",
          "Next 3-6 months",
          "Just exploring options",
          "Depends on what I see"
        ],
        helper: "No pressure - we're curious about your timeline"
      }
    ],
    final_cta: {
      headline: "Get early access to Intellisync for Business",
      subcopy: "Join our priority list for GPT Builder, AI Workflow Automation, and Custom Integrations.",
      button_label: "Join the Waitlist"
    }
  },
  personal: {
    variant: "personal",
    steps: [
      {
        id: "life-area",
        question: "What part of daily life would you love an AI boost for?",
        type: "single" as QuestionType,
        options: [
          "Productivity & organization",
          "Health & wellness",
          "Learning & education",
          "Creative projects",
          "Home management",
          "Something else"
        ],
        helper: "We'll prioritize features for your selected area"
      },
      {
        id: "ai-personality",
        question: "What AI personality would you prefer?",
        type: "single" as QuestionType,
        options: [
          "Efficient & direct",
          "Friendly & conversational",
          "Thoughtful & detailed",
          "Encouraging & supportive",
          "Adaptable to my mood"
        ],
        helper: "Your AI assistant's communication style"
      },
      {
        id: "interaction-frequency",
        question: "How often would you interact with your AI?",
        type: "single" as QuestionType,
        options: [
          "Multiple times daily",
          "Once a day check-in",
          "A few times per week",
          "For specific projects only",
          "Not sure yet"
        ],
        helper: "Helps us optimize your experience"
      },
      {
        id: "tech-comfort",
        question: "How would you describe your tech comfort level?",
        type: "single" as QuestionType,
        options: [
          "Tech enthusiast - I love new tools",
          "Comfortable - I use tech daily",
          "Average - I use the basics well",
          "Learning - I'm getting better",
          "Cautious - I prefer simplicity"
        ],
        helper: "We'll adjust the interface complexity accordingly"
      },
      {
        id: "feature-priority",
        question: "Which feature matters most to you?",
        type: "single" as QuestionType,
        options: [
          "Voice conversations",
          "Text-based chat",
          "Automated routines",
          "Learning my preferences",
          "Integration with my apps"
        ],
        helper: "We'll prioritize your preferred interaction method"
      }
    ],
    final_cta: {
      headline: "Get early access to your personal AI assistant",
      subcopy: "Join our priority list for Personal AI Assistant, Life-Admin Automation, and Wellness Coach AI.",
      button_label: "Join the Waitlist"
    }
  }
};
