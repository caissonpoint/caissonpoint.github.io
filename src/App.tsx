import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import './App.css'
import { getTldrawLicenseKey, isTldrawDevelopmentHost } from './license'

export default function App() {
  const licenseKey = getTldrawLicenseKey()
  const canRunWithoutLicense = isTldrawDevelopmentHost(window.location.hostname)

  if (!licenseKey && !canRunWithoutLicense) {
    return <LicenseSetup />
  }

  return (
    <div className="canvas-root">
      <Tldraw persistenceKey="caissonpoint-canvas" licenseKey={licenseKey} />
    </div>
  )
}

function LicenseSetup() {
  return (
    <main className="license-setup">
      <div className="license-setup__card">
        <p className="license-setup__eyebrow">caissonpoint.github.io</p>
        <h1>This canvas needs a tldraw license</h1>
        <p>
          The GitHub Pages deploy is working. tldraw 5 only stays visible in
          production when it has a license key. Without one, the editor appears
          for a few seconds and then goes blank.
        </p>
        <ol>
          <li>
            Get a free 100-day trial at{' '}
            <a href="https://tldraw.dev/pricing" target="_blank" rel="noreferrer">
              tldraw.dev/pricing
            </a>{' '}
            (key is emailed immediately), or apply for a hobby license at{' '}
            <a
              href="https://tldraw.dev/get-a-license/hobby"
              target="_blank"
              rel="noreferrer"
            >
              tldraw.dev/get-a-license/hobby
            </a>
            . Use domain <code>caissonpoint.github.io</code>.
          </li>
          <li>
            In this repo, add a GitHub Actions secret named{' '}
            <code>VITE_TLDRAW_LICENSE_KEY</code> with that key.
          </li>
          <li>
            Re-run the <code>Deploy to GitHub Pages</code> workflow, or push to{' '}
            <code>main</code>. The next build will include the key and the
            canvas will stay up.
          </li>
        </ol>
        <p className="license-setup__note">
          Local development on localhost already works without a key.
        </p>
      </div>
    </main>
  )
}
