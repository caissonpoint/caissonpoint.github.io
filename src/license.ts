/** Trial key for caissonpoint.github.io. Env/secret overrides when set. */
const DEFAULT_LICENSE_KEY =
  'tldraw-2026-12-12/WyI0SEE1TlRuViIsWyIqIl0sMTYsIjIwMjYtMTItMTIiXQ.N2f6SrVZVM4yAzTP97DWVMITGXiMW7vXduJaiLCZATQigTwJ/B6kXm+Nie0o33L9no1wdt+Aonw1MEcc7PONVw'

/** Reads the public tldraw license key baked in at build time. */
export function getTldrawLicenseKey(): string | undefined {
  const key = import.meta.env.VITE_TLDRAW_LICENSE_KEY
  if (typeof key === 'string' && key.trim()) return key.trim()
  return DEFAULT_LICENSE_KEY
}

/**
 * Mirrors tldraw's own development-host check. Localhost is exempt from
 * production license enforcement; GitHub Pages is not.
 */
export function isTldrawDevelopmentHost(hostname: string): boolean {
  const host = hostname.replace(/^\[|\]$/g, '').toLowerCase()
  return host === 'localhost' || host === '::1' || /^127(?:\.\d{1,3}){3}$/.test(host)
}
