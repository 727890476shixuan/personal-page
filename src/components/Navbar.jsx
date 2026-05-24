import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: '关于', href: '#about' },
  { label: '经历', href: '#education' },
  { label: '技能', href: '#skills' },
  { label: '联系', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-medium tracking-wide text-dark">
          谢施炫 <span className="font-light text-gray-400">Sean</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-dark/70 hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-dark/70 hover:text-accent transition-colors"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile slide-in menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-64 bg-cream shadow-lg animate-slide-in">
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} className="text-dark/70 hover:text-accent transition-colors">
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-col gap-6 px-8 pt-4 text-lg font-light tracking-wide">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-dark/70 hover:text-accent transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
