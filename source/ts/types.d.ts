// Fixes TypeScript thinking this isn't a correct module.
export {};

declare global {
  interface Window {
    // These are created in `vite.config.ts` and defined by Vite at build time.
    blinkCommitHash: string;
    blinkVersion: string;
  }
}
