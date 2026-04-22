import { Instagram, ExternalLink, Heart } from 'lucide-react'

const footerLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
]

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-on-surface">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="col-span-1">
            <p className="font-jakarta font-extrabold text-surface text-xl tracking-tight mb-2">
              H AND K <span style={{ color: '#ffdbc8' }}>Cafe</span>
            </p>
            <p className="font-manrope text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,248,241,0.55)' }}>
              A cozy café in Rohini, Delhi — where every cup tells a story and every bite is a memory.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/handkcafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(255,248,241,0.1)' }}
                aria-label="Instagram"
              >
                <Instagram size={16} style={{ color: 'rgba(255,248,241,0.7)' }} />
              </a>
              <a
                href="https://www.zomato.com/ncr/h-and-k-cafe-rohini-new-delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(255,248,241,0.1)' }}
                aria-label="Zomato"
              >
                <ExternalLink size={15} style={{ color: 'rgba(255,248,241,0.7)' }} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-jakarta font-semibold text-sm mb-4" style={{ color: 'rgba(255,248,241,0.4)' }}>
              NAVIGATE
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="font-manrope text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,248,241,0.6)' }}
                    onMouseEnter={e => e.target.style.color = '#fff8f1'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,248,241,0.6)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-jakarta font-semibold text-sm mb-4" style={{ color: 'rgba(255,248,241,0.4)' }}>
              CONTACT
            </p>
            <ul className="flex flex-col gap-3">
              <li className="font-manrope text-sm leading-relaxed" style={{ color: 'rgba(255,248,241,0.6)' }}>
                Ground Floor, 276, Pocket 7,<br />
                Sector 24, Rohini,<br />
                New Delhi 110085
              </li>
              <li>
                <a
                  href="tel:+919414485952"
                  className="font-manrope text-sm transition-colors duration-200"
                  style={{ color: 'rgba(255,248,241,0.6)' }}
                  onMouseEnter={e => e.target.style.color = '#fff8f1'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,248,241,0.6)'}
                >
                  +91 94144 85952
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@handkcafe.com"
                  className="font-manrope text-sm transition-colors duration-200"
                  style={{ color: 'rgba(255,248,241,0.6)' }}
                  onMouseEnter={e => e.target.style.color = '#fff8f1'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,248,241,0.6)'}
                >
                  contact@handkcafe.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.zomato.com/ncr/h-and-k-cafe-rohini-new-delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-manrope text-sm flex items-center gap-1.5 transition-colors duration-200"
                  style={{ color: 'rgba(255,248,241,0.6)' }}
                  onMouseEnter={e => e.target.style.color = '#fff8f1'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,248,241,0.6)'}
                >
                  Order on Zomato <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,248,241,0.08)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-manrope text-xs" style={{ color: 'rgba(255,248,241,0.3)' }}>
            © 2024 H AND K Cafe. All rights reserved.
          </p>
          <p className="font-manrope text-xs flex items-center gap-1" style={{ color: 'rgba(255,248,241,0.3)' }}>
            Made with <Heart size={11} className="text-accent-orange fill-accent-orange" /> in Rohini, New Delhi
          </p>
        </div>
      </div>
    </footer>
  )
}
