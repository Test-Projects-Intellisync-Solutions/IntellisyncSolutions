// Types for the waitlist stepper components

export type WaitlistVariant = "business" | "personal";

export type QuestionType = "single" | "multi" | "text";

export interface WaitlistStep {
  id: string;
  question: string;
  type: QuestionType;
  options?: string[];
  helper?: string;
}

export interface FinalCTA {
  headline: string;
  subcopy: string;
  button_label: string;
}

export interface WaitlistConfig {
  variant: WaitlistVariant;
  steps: WaitlistStep[];
  final_cta: FinalCTA;
}

export interface WaitlistAnswer {
  stepId: string;
  answer: string | string[];
}

export interface WaitlistSubmission {
  email: string;
  name: string;
  variant: WaitlistVariant;
  answers: WaitlistAnswer[];
}

// Local storage interface
export interface WaitlistProgress {
  variant?: WaitlistVariant;
  currentStep: number;
  answers: WaitlistAnswer[];
  email?: string;
  name?: string;
}
