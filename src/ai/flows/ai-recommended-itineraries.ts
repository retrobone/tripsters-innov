'use server';
/**
 * @fileOverview AI-powered itinerary recommendation flow.
 *
 * - aiRecommendedItineraries - A function that generates personalized travel itineraries based on user preferences.
 * - AIRecommendedItinerariesInput - The input type for the aiRecommendedItineraries function.
 * - AIRecommendedItinerariesOutput - The return type for the aiRecommendedItineraries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIRecommendedItinerariesInputSchema = z.object({
  preferences: z
    .string()
    .describe("User's travel preferences, including interests, budget, and travel style."),
  destination: z.string().describe('The desired destination for the trip.'),
  duration: z.string().describe('The desired duration of the trip in days.'),
});
export type AIRecommendedItinerariesInput = z.infer<typeof AIRecommendedItinerariesInputSchema>;

const AIRecommendedItinerariesOutputSchema = z.object({
  itinerary: z.string().describe('A detailed travel itinerary for the specified destination.'),
});
export type AIRecommendedItinerariesOutput = z.infer<typeof AIRecommendedItinerariesOutputSchema>;

export async function aiRecommendedItineraries(
  input: AIRecommendedItinerariesInput
): Promise<AIRecommendedItinerariesOutput> {
  return aiRecommendedItinerariesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiRecommendedItinerariesPrompt',
  input: {schema: AIRecommendedItinerariesInputSchema},
  output: {schema: AIRecommendedItinerariesOutputSchema},
  prompt: `You are a travel expert. Generate a detailed travel itinerary for the destination {{{destination}}}. The user's preferences are {{{preferences}}}. The trip duration is {{{duration}}} days.  The itinerary must be well-organized and include specific activities and locations.
`,
});

const aiRecommendedItinerariesFlow = ai.defineFlow(
  {
    name: 'aiRecommendedItinerariesFlow',
    inputSchema: AIRecommendedItinerariesInputSchema,
    outputSchema: AIRecommendedItinerariesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
