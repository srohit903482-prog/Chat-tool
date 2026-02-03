// Input validation utilities
import { z } from 'zod';

export const emailSchema = z.string().email('Invalid email address');
export const nameSchema = z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters');
export const passwordSchema = z.string().min(6, 'Password must be at least 6 characters');
export const urlSchema = z.string().url('Invalid URL');

export const validateEmail = (email: string) => {
  const result = emailSchema.safeParse(email);
  return result.success;
};

export const validatePassword = (password: string) => {
  const result = passwordSchema.safeParse(password);
  return result.success;
};

export const validateUrl = (url: string) => {
  const result = urlSchema.safeParse(url);
  return result.success;
};