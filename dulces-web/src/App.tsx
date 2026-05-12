import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import ScrollToTop from './components/ScrollToTop'
import { CartProvider } from './components/CartContext' // 1. Importamos tu proveedor del carrito

function App() {
  return (
    // 2. Envolvemos TODA la aplicación con CartProvider
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="productos" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App