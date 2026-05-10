import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl shadow-xl border-b border-orange-100 py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          <h1
            className={`font-black tracking-tight transition-all duration-500 text-xl sm:text-2xl md:text-3xl ${
              scrolled ? 'text-orange-500' : 'text-white drop-shadow-lg'
            }`}
          >
            OnlyAgros
          </h1>

          {/* Desktop */}
          <nav
            className={`hidden md:flex items-center gap-6 lg:gap-10 font-semibold transition-colors ${
              scrolled ? 'text-zinc-800' : 'text-white'
            }`}
          >
            <a href="#inicio" className="hover:text-orange-500 transition">
              Inicio
            </a>
            <a href="#productos" className="hover:text-orange-500 transition">
              Productos
            </a>
            <a href="#contacto" className="hover:text-orange-500 transition">
              Contacto
            </a>
          </nav>

          <button
            className={`hidden md:block px-4 sm:px-6 py-2 sm:py-3 rounded-full font-black transition-all hover:scale-105 ${
              scrolled
                ? 'bg-orange-500 text-white'
                : 'bg-white/10 text-white border border-white/20'
            }`}
          >
            Comprar
          </button>

          {/* Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden text-3xl sm:text-4xl ${
              scrolled ? 'text-zinc-900' : 'text-white'
            }`}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 text-white text-2xl sm:text-3xl font-black transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="#productos" onClick={() => setMenuOpen(false)}>Productos</a>
        <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>

        <button className="bg-orange-500 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl">
          Comprar
        </button>
      </div>
    </>
  )
}