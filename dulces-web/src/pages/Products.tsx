import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import { useCart } from '../components/CartContext'

export default function Products() {
  const { addToCart } = useCart()
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

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
    },
    {
      name: 'Alegrías de Amaranto',
      image:
        'https://images.unsplash.com/photo-1604908812004-1b0a1b7f1b4a?q=80&w=1200&auto=format&fit=crop',
      price: 85
    }
  ]

  return (
    <section
      className="
        min-h-screen
        py-24
        px-6
        bg-[#f8f3ed]
      "
    >

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-black text-zinc-900">
          Todos los productos
        </h1>

        <p className="mt-4 text-zinc-600">
          Catálogo completo de dulces artesanales
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-10">

        {products.map((p, i) => (
          <ProductCard
            key={i}
            name={p.name}
            image={p.image}
            price={p.price}
            onClick={() => setSelectedProduct(p)}
            onAdd={() => addToCart(p)}
          />
        ))}

      </div>

      {/* MODAL */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </section>
  )
}