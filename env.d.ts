interface ImportMetaEnv {
  readonly VITE_ARTICLES_BASE_URL: string;
  readonly VITE_ARTICLES_API_KEY: string;
  // Add other VITE_ vars here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
