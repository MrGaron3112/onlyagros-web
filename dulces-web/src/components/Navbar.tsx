import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">
            OnlyAgros
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 text-white font-semibold">
            <a href="#inicio" className="hover:text-orange-300 transition">
              Inicio
            </a>

            <a href="#productos" className="hover:text-orange-300 transition">
              Productos
            </a>

            <a href="#contacto" className="hover:text-orange-300 transition">
              Contacto
            </a>
          </nav>

          {/* Desktop Button */}
          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-black shadow-2xl transition hover:scale-105">
            Comprar
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-4xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 text-white text-3xl font-black transition-all duration-500 ${
          menuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      >
        <a
          href="#inicio"
          onClick={() => setMenuOpen(false)}
          className="hover:text-orange-300 transition"
        >
          Inicio
        </a>

        <a
          href="#productos"
          onClick={() => setMenuOpen(false)}
          className="hover:text-orange-300 transition"
        >
          Productos
        </a>

        <a
          href="#contacto"
          onClick={() => setMenuOpen(false)}
          className="hover:text-orange-300 transition"
        >
          Contacto
        </a>

        <button className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-2xl text-xl shadow-2xl transition hover:scale-105">
          Comprar
        </button>
      </div>
    </>
  )
}