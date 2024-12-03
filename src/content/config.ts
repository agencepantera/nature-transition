import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    category: z.enum(['energie', 'biodiversite', 'developpement-durable', 'agriculture', 'transport', 'dechets']),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  articles,
};
