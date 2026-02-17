export function extractIdFromUrl(url: string): string | undefined {
  if (!url) return undefined;
  const segments = url.split('/');
  return segments.length ? segments.pop() : undefined;
}
