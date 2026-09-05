import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    demoUrl: z.string().url().optional().or(z.string().startsWith('/')).or(z.literal('')),
    githubUrl: z.string().url().optional().or(z.literal('')),
    image: z.string().optional(),
    badge: z.string().optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    type: z.enum(['post', 'note', 'talk']).default('post'),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  writing,
};
