export function getEnv(key: string): string {
  if (key === "VITE_ARTICLES_API_KEY") return "test-api-key";
  return "";
}
