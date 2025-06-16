import { WaitlistSubmission } from "../types/waitlist";

// API service for waitlist submissions
export const waitlistApi = {
  // Submit waitlist entry and send email notification
  submitWaitlist: async (data: WaitlistSubmission): Promise<{ success: boolean; message: string }> => {
    try {
      // Import the waitlist config to get question texts
      const { waitlistConfig } = await import('../data/waitlistConfig');
      
      // Get the config for the selected variant
      const config = waitlistConfig[data.variant];
      
      // Create a map of stepId to question text
      const questionMap = new Map<string, string>();
      config.steps.forEach(step => {
        questionMap.set(step.id, step.question);
      });
      
      // Format the email body with the waitlist submission details
      const emailSubject = `New Waitlist Submission - ${data.variant} - ${data.name}`;
      const emailBody = `New waitlist submission received:\n\n` +
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Variant: ${data.variant.charAt(0).toUpperCase() + data.variant.slice(1)}\n\n` +
        `Answers:\n` +
        data.answers.map(a => {
          const answer = Array.isArray(a.answer) ? a.answer.join(', ') : a.answer;
          const questionText = questionMap.get(a.stepId) || a.stepId;
          return `- ${questionText}: ${answer}`;
        }).join('\n\n');

      // Create mailto link
      const mailtoLink = `mailto:chris.june@intellisync.ca?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open user's default email client with pre-filled email
      window.location.href = mailtoLink;

      // Log the submission for debugging
      console.log('Waitlist submission:', data);
      
      return { 
        success: true, 
        message: 'Successfully joined the waitlist! Please check your email to complete the submission.' 
      };
    } catch (error) {
      console.error('Error submitting waitlist entry:', error);
      
      // Return success even if email client fails to open
      // This prevents users from getting stuck if they have email issues
      return { 
        success: true, 
        message: 'Successfully joined the waitlist! If you have any questions, please contact us at chris.june@intellisync.ca' 
      };
    }
  }
};

// Local storage service for waitlist progress
export const waitlistStorage = {
  // Key for localStorage
  STORAGE_KEY: 'intellisync_waitlist_progress',

  // Save progress to localStorage
  saveProgress: (data: any) => {
    try {
      localStorage.setItem(waitlistStorage.STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Error saving waitlist progress:', error);
      return false;
    }
  },

  // Load progress from localStorage
  loadProgress: () => {
    try {
      const data = localStorage.getItem(waitlistStorage.STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error loading waitlist progress:', error);
      return null;
    }
  },

  // Clear progress from localStorage
  clearProgress: () => {
    try {
      localStorage.removeItem(waitlistStorage.STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing waitlist progress:', error);
      return false;
    }
  }
};
