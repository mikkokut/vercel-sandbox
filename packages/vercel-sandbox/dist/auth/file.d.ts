import { z } from "zod";
declare const AuthFile: z.ZodObject<{
    token: z.ZodOptional<z.ZodString>;
    refreshToken: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodOptional<z.ZodPipe<z.ZodNumber, z.ZodTransform<Date, number>>>;
}, z.core.$strip>;
type AuthFile = z.infer<typeof AuthFile>;
export declare const getAuth: () => {
    token?: string | undefined;
    refreshToken?: string | undefined;
    expiresAt?: Date | undefined;
} | null;
export declare function updateAuthConfig(config: AuthFile): void;
export {};
