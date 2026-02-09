// src/utils/requestIdGenerator.ts
import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a new unique request ID.
 * @returns {string} A UUID v4 string.
 */
export const generateRequestId = (): string => {
  return uuidv4();
};