function basePrefix(): string {
  const base = import.meta.env.BASE_URL;
  return base.endsWith("/") ? base : `${base}/`;
}

/** Public asset path with Astro `base` (GitHub Pages: /narciss-hair/). */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${basePrefix()}${clean}`;
}

/** Site route with base prefix (e.g. legal-notice/). */
export function route(path: string = ""): string {
  if (!path || path === "/") return basePrefix();
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${basePrefix()}${clean}`;
}

/** Home-page section anchor that works under project Pages base. */
export function anchor(hash: string): string {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  return `${basePrefix()}#${id}`;
}
