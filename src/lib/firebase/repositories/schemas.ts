import { z } from 'zod';
import { techIcons } from '@/lib/shadcn/variable';
import { TechType } from '@/types/tech-type';

const techTypeValues = techIcons.map((t) => t.name) as [TechType, ...TechType[]];

const dateSchema = z.union([z.string(), z.date()]).transform((v) => new Date(v));
const nullableDateSchema = z.union([dateSchema, z.null()]);

export const projectInputSchema = z.object({
  image: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  techUsed: z.array(z.enum(techTypeValues)).min(1),
  link: z.string().nullable().optional(),
  hidden: z.boolean().optional(),
  order: z.number().optional(),
});

export const careerInputSchema = z.object({
  image: z.string().min(1),
  title: z.string().min(1),
  linkTitle: z.string().min(1),
  link: z.string(),
  company: z.string().min(1),
  location: z.string().min(1),
  countryCode: z.string().min(1),
  startDate: dateSchema,
  endDate: nullableDateSchema,
  workingType: z.string().min(1),
  workingSchema: z.enum(['Onsite', 'hybrid', 'Remote']),
  responsibilities: z.array(z.string().min(1)).min(1),
  order: z.number().optional(),
});

export const educationInputSchema = z.object({
  image: z.string().min(1),
  univ: z.string().min(1),
  major: z.string().min(1),
  link: z.string(),
  location: z.string().min(1),
  countryCode: z.string().min(1),
  endDate: dateSchema,
  order: z.number().optional(),
});
