import Navbar from '../components/Navbar'
import Footer from '../components/Footer' // 1. Importamos el Footer
import { Outlet } from 'react-router-dom'
import CartDrawer from '../components/CartDrawer'
import { useCart } from '../components/CartContext'

export default function MainLayout() {
  const { isCartOpen, closeCart } = useCart()

  return (
    // 2. Agregamos flex y flex-col para controlar el alto de la página
    <div className="bg-[#f8f3ed] min-h-screen flex flex-col">
      <Navbar />

      {/* 3. El flex-1 empuja al Footer siempre hacia abajo */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* 4. El Footer ahora es global */}
      <Footer />

      {/* CARRITO GLOBAL */}
      <CartDrawer open={isCartOpen} onClose={closeCart} />
    </div>
  )
}