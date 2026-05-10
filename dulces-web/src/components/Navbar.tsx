import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { useCart } from './CartContext'
import CartDrawer from './CartDrawer'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [bump, setBump] = useState(false)

  const { cart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 🎯 animación del carrito cuando cambia cantidad
  useEffect(() => {
    if (cart.length > 0) {
      setBump(true)

      const timer = setTimeout(() => {
        setBump(false)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [cart.length])

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

          {/* LOGO */}
          <h1
            className={`font-black tracking-tight transition-all duration-500 text-xl sm:text-2xl md:text-3xl ${
              scrolled ? 'text-orange-500' : 'text-white drop-shadow-lg'
            }`}
          >
            OnlyAgros
          </h1>

          {/* DESKTOP MENU */}
          <nav
            className={`hidden md:flex items-center gap-6 lg:gap-10 font-semibold transition-colors ${
              scrolled ? 'text-zinc-800' : 'text-white'
            }`}
          >
            <a href="#inicio" className="hover:text-orange-500 transition">
              Inicio
            </a>

            <Link to="/productos" className="hover:text-orange-500 transition">
              Productos
            </Link>

            <a href="#contacto" className="hover:text-orange-500 transition">
              Contacto
            </a>
          </nav>

          {/* DESKTOP CART */}
          <div className="hidden md:flex items-center gap-4">

            <button
              onClick={() => setCartOpen(true)}
              className={`px-5 sm:px-6 py-2 sm:py-3 rounded-full font-black transition-all flex items-center gap-2 ${
                scrolled
                  ? 'bg-zinc-900 text-white'
                  : 'bg-white/10 text-white border border-white/20'
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
              onClick={() => setCartOpen(true)}
              className={`text-xl sm:text-2xl px-3 py-2 rounded-full font-black relative transition-transform duration-300 ease-out ${
                bump ? 'scale-110' : 'scale-100'
              } ${
                scrolled ? 'text-zinc-900' : 'text-white'
              }`}
            >
              🛒 {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </button>

            {/* MENU */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-3xl sm:text-4xl ${
                scrolled ? 'text-zinc-900' : 'text-white'
              }`}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>

          </div>

        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 text-white text-2xl sm:text-3xl font-black transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <a href="#inicio" onClick={() => setMenuOpen(false)}>
          Inicio
        </a>

        <Link to="/productos" onClick={() => setMenuOpen(false)}>
          Productos
        </Link>

        <a href="#contacto" onClick={() => setMenuOpen(false)}>
          Contacto
        </a>
      </div>

      {/* CART DRAWER */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  )
}