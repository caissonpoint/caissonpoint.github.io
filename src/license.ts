/** Reads the public tldraw license key baked in at build time. */
export function getTldrawLicenseKey(): string | undefined {
  const key = import.meta.env.VITE_TLDRAW_LICENSE_KEY
  return typeof key === 'string' && key.trim() ? key.trim() : undefined
}

/**
 * Mirrors tldraw's own development-host check. Localhost is exempt from
 * production license enforcement; GitHub Pages is not.
 */
export function isTldrawDevelopmentHost(hostname: string): boolean {
  const host = hostname.replace(/^\[|\]$/g, '').toLowerCase()
  return host === 'localhost' || host === '::1' || /^127(?:\.\d{1,3}){3}$/.test(host)
}
