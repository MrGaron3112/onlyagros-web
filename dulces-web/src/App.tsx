import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/CartContext'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'

export default function App() {
  return (
    <CartProvider>
      <Routes>

        {/* LAYOUT GLOBAL */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
        </Route>

      </Routes>
    </CartProvider>
  )
}