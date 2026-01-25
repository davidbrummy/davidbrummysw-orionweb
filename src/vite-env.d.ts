// src/vite-env.d.ts (or env.d.ts)
/// <reference types="vite/client" />

// VITE_PUBLIC_URL=https://api.example.com
//VITE_API_URL=https://api.example.com/v1
//VITE_API_KEY=your-api-key-here
//VITE_ENV=global

interface ImportMetaEnv {
  readonly VITE_PUBLIC_URL: string;
  readonly VITE_API_URL: string;
  readonly VITE_API_KEY: string;
  readonly VITE_ENV: string;
  // add other variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
