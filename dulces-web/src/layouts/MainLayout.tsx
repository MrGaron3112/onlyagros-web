import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import CartDrawer from '../components/CartDrawer'
import { useCart } from '../components/CartContext'

export default function MainLayout() {
  const { isCartOpen, closeCart } = useCart()

  return (
    <div className="bg-[#f8f3ed] min-h-screen">
      <Navbar />

      {/* AQUÍ CAMBIA EL CONTENIDO */}
      <Outlet />

      {/* CARRITO GLOBAL */}
      <CartDrawer open={isCartOpen} onClose={closeCart} />
    </div>
  )
}