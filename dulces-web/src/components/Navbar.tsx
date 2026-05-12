import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { useCart } from './CartContext'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [bump, setBump] = useState(false)

  const { cart, openCart } = useCart()
  const location = useLocation() // 🔍 Detectamos la ruta actual

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (cart.length > 0) {
      setBump(true)
      const timer = setTimeout(() => {
        setBump(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [cart.length])

  // 🛠️ LÓGICA DE FONDO: Sólido si hay scroll O si NO estamos en el inicio
  const isSolid = scrolled || location.pathname !== '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isSolid
            ? 'bg-white/90 backdrop-blur-2xl shadow-xl border-b border-orange-100 py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/">
            <h1
              className={`font-black tracking-tight transition-colors duration-500 text-xl sm:text-2xl md:text-3xl ${
                isSolid ? 'text-orange-500' : 'text-white drop-shadow-lg'
              }`}
            >
              OnlyAgros
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <nav
            className={`hidden md:flex items-center gap-6 lg:gap-10 font-semibold transition-colors duration-500 ${
              isSolid ? 'text-zinc-800' : 'text-white'
            }`}
          >
            <Link to="/" className="hover:text-orange-500 transition">Inicio</Link>
            <Link to="/productos" className="hover:text-orange-500 transition">Productos</Link>
          </nav>

          {/* DESKTOP CART */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={openCart}
              className={`px-5 sm:px-6 py-2 sm:py-3 rounded-full font-black transition-all flex items-center gap-2 ${
                isSolid
                  ? 'bg-zinc-900 text-white hover:bg-orange-500'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              } transition-transform duration-300 ease-out ${
                bump ? 'scale-110' : 'scale-100'
              }`}
            >
              🛒 {cart.length}
            </button>
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-3">
            {/* CART MOBILE */}
            <button
              onClick={openCart}
              className={`text-xl sm:text-2xl px-3 py-2 rounded-full font-black relative transition-transform duration-300 ease-out ${
                bump ? 'scale-110' : 'scale-100'
              } ${isSolid ? 'text-zinc-900' : 'text-white'}`}
            >
              🛒 {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </button>

            {/* MENU */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-3xl sm:text-4xl transition-colors duration-500 ${
                isSolid ? 'text-zinc-900' : 'text-white'
              }`}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU (Mantiene su estilo oscuro) */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 text-white text-2xl sm:text-3xl font-black transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
        <Link to="/productos" onClick={() => setMenuOpen(false)}>Productos</Link>
        <button onClick={() => setMenuOpen(false)}>Cerrar</button>
      </div>
    </>
  )
}