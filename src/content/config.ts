import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    readingTime: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { blog };
