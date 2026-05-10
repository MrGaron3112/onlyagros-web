import { useState } from 'react'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import CartDrawer from './CartDrawer'
import { useCart } from './CartContext'

export default function ProductsSection() {
  const { cart } = useCart()

  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [cartOpen, setCartOpen] = useState(false)

  const products = [
    {
      name: 'Rollo de Guayaba',
      image:
        'https://images.unsplash.com/photo-1481391032119-d89fee407e44?q=80&w=1200&auto=format&fit=crop',
      price: 120
    },
    {
      name: 'Cocadas Artesanales',
      image:
        'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop',
      price: 90
    },
    {
      name: 'Tamarindo Enchilado',
      image:
        'https://images.unsplash.com/photo-1516747773440-3b54d2b8e5a5?q=80&w=1200&auto=format&fit=crop',
      price: 110
    }
  ]

  return (
    <section className="py-20 px-6 bg-[#f8f3ed]">

      {/* CART BUTTON */}
      <div className="max-w-7xl mx-auto flex justify-end mb-6">
        <button
          onClick={() => setCartOpen(true)}
          className="bg-white px-6 py-3 rounded-full shadow font-black hover:scale-105 transition"
        >
          🛒 {cart.length}
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {products.map((p, i) => (
          <ProductCard
            key={i}
            name={p.name}
            image={p.image}
            price={p.price}
            onClick={() => setSelectedProduct(p)}
          />
        ))}

      </div>

      {/* MODAL */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* CART */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />

    </section>
  )
}