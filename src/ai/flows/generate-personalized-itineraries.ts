'use server';
/**
 * @fileOverview AI agent that generates personalized travel itineraries based on user preferences and search history.
 *
 * - generatePersonalizedItineraries - A function that generates personalized travel itineraries.
 * - GeneratePersonalizedItinerariesInput - The input type for the generatePersonalizedItineraries function.
 * - GeneratePersonalizedItinerariesOutput - The return type for the generatePersonalizedItineraries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedItinerariesInputSchema = z.object({
  interests: z
    .string()
    .describe('The interests of the user, e.g., history, art, food.'),
  budget: z.string().describe('The budget of the user, e.g., low, medium, high.'),
  travelStyle: z
    .string()
    .describe('The travel style of the user, e.g., adventure, relaxing, luxury.'),
  searchHistory: z
    .string()
    .describe('The search history of the user, e.g., Paris, Rome, Tokyo.'),
});

export type GeneratePersonalizedItinerariesInput = z.infer<
  typeof GeneratePersonalizedItinerariesInputSchema
>;

const GeneratePersonalizedItinerariesOutputSchema = z.object({
  itinerary: z.string().describe('The personalized travel itinerary.'),
});

export type GeneratePersonalizedItinerariesOutput = z.infer<
  typeof GeneratePersonalizedItinerariesOutputSchema
>;

export async function generatePersonalizedItineraries(
  input: GeneratePersonalizedItinerariesInput
): Promise<GeneratePersonalizedItinerariesOutput> {
  return generatePersonalizedItinerariesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedItinerariesPrompt',
  input: {schema: GeneratePersonalizedItinerariesInputSchema},
  output: {schema: GeneratePersonalizedItinerariesOutputSchema},
  prompt: `You are an expert travel agent specializing in creating personalized travel itineraries.

You will use the provided information about the user's interests, budget, travel style, and search history to generate a personalized travel itinerary.

Interests: {{{interests}}}
Budget: {{{budget}}}
Travel Style: {{{travelStyle}}}
Search History: {{{searchHistory}}}

Generate a detailed and engaging travel itinerary that caters to the user's specific preferences.`,
});

const generatePersonalizedItinerariesFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedItinerariesFlow',
    inputSchema: GeneratePersonalizedItinerariesInputSchema,
    outputSchema: GeneratePersonalizedItinerariesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
