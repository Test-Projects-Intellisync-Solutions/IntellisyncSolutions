import { WaitlistSubmission } from "../types/waitlist";

// API service for waitlist submissions
export const waitlistApi = {
  // Submit waitlist entry
  submitWaitlist: async (data: WaitlistSubmission): Promise<{ success: boolean; message: string }> => {
    try {
      // In a real implementation, this would be an actual API endpoint
      // For now, we'll simulate a successful API call
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // For development purposes, simulate a successful response
      // In production, you would handle the actual API response
      if (!response.ok) {
        throw new Error('Failed to submit waitlist entry');
      }

      return { 
        success: true, 
        message: 'Successfully joined the waitlist!' 
      };
    } catch (error) {
      console.error('Error submitting waitlist entry:', error);
      
      // For development, simulate success even on error
      // In production, you would return an error message
      return { 
        success: true, 
        message: 'Successfully joined the waitlist!' 
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
