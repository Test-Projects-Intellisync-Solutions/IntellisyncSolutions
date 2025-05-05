// src/lib/streamModelResponse.ts

/**
 * Helper function for streaming OpenAI API responses.
 * Sends user and system prompts to the backend and streams the response.
 * @param userPrompt - The user's input message
 * @param systemPrompt - The system/AI persona prompt
 * @returns The streamed response as a string
 */
export async function streamModelResponse(userPrompt: string, systemPrompt: string): Promise<string> {
  const controller = new AbortController();
  const messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt }
  ];
  const response = await fetch('/api/ai/stream', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
    signal: controller.signal,
  });
  if (!response.body) throw new Error('No response body');
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let result = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value, { stream: true });
    chunk.split('\n').forEach(line => {
      if (line.startsWith('data: ')) {
        try {
          const content = JSON.parse(line.replace('data: ', ''));
          result += content;
        } catch (error) {
          console.error('Error parsing chunk:', error);
        }
      }
    });
  }
  return result;
}
