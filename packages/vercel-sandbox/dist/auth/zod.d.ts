import { z } from "zod";
/**
 * A Zod codec that serializes and deserializes JSON strings.
 */
export declare const json: z.ZodPipe<z.ZodString, z.ZodTransform<unknown, string>>;
