import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href, label) => {
    setMobileOpen(false)
    setActive(label)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#1a0f00]/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-[70px] flex items-center justify-between">

          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home', 'Home') }}
            className="flex items-center gap-2 select-none">
            <div className="flex flex-col leading-none">
              <span className="font-black text-white text-xl tracking-widest uppercase">
                H<span className="text-[#F97316]">&</span>K
              </span>
              <span className="text-[#F97316] text-[10px] tracking-[0.3em] uppercase font-semibold -mt-0.5">
                — Cafe —
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href, link.label) }}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-200 font-sans ${
                  active === link.label
                    ? 'text-[#F97316]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {active === link.label && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#F97316] rounded-full"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#menu"
              onClick={(e) => { e.preventDefault(); handleNavClick('#menu', 'Menu') }}
              className="hidden md:inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6500] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-[0_4px_15px_rgba(249,115,22,0.4)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95"
            >
              Order Now →
            </a>
            <button
              className="md:hidden p-2 rounded-lg text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#1a0f00]/97 backdrop-blur-md pt-[70px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col items-center justify-center gap-6 h-full pb-20">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href, link.label) }}
                  className={`font-black text-2xl tracking-wide transition-colors uppercase ${
                    active === link.label ? 'text-[#F97316]' : 'text-white hover:text-[#F97316]'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#menu"
                onClick={(e) => { e.preventDefault(); handleNavClick('#menu', 'Menu') }}
                className="mt-4 bg-[#F97316] text-white font-bold px-8 py-3 rounded-full text-lg shadow-[0_4px_15px_rgba(249,115,22,0.4)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                Order Now →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
