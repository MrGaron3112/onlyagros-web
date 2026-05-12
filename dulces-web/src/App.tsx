import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'

import { CartProvider } from './components/CartContext'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // LOADER GLOBAL
  if (loading) {
    return <Loader />
  }

  return (
    <CartProvider>
      <BrowserRouter>

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<MainLayout />}>

            <Route index element={<Home />} />

            <Route
              path="productos"
              element={<Products />}
            />

          </Route>
        </Routes>

      </BrowserRouter>
    </CartProvider>
  )
}

export default App