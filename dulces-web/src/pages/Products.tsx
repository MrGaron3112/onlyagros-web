import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import type { Product } from '../components/CartContext' // Importamos el tipo

export default function Products() {
  // 1. Quitamos el "any" y usamos el tipo correcto
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // 2. Agregamos categorías y descripciones para que el Modal y la Tarjeta luzcan bien
  const products: Product[] = [
    {
    name: 'Caja de degustación',
    description: 'Recorrido artesanal por Colima: Rollo de guayaba, alfajor, mazapán y pellizcos de tamarindo. Tradición que se disfruta en cada mordida.',
    image: 'images/products/producto1.webp',
    price: 129,
    category: 'Snack Tradicional'
  },
  {
    name: 'Rollo de Guayaba',
    description: 'Elaborado con guayabas seleccionadas de la región, cocidas artesanalmente para lograr una textura suave y un balance dulce perfecto.',
    image: 'images/products/producto2.webp',
    price: 35,
    category: 'Tradicional'
  },
  {
    name: 'Pulpa de Tamarindo Enchilada',
    description: 'Pulpa de tamarindo natural con nuestra mezcla especial de chiles. Una explosión agridulce que no podrás dejar de comer.',
    image: 'images/products/producto3.webp',
    price: 85,
    category: 'Picante'
  },
    {
      name: 'Cacahuates Garapiñados',
      description: 'Cacahuates tostados con una capa crujiente de caramelo artesanal. El snack clásico con el toque secreto de OnlyAgros.',
      image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop',
      price: 85,
      category: 'Snack'
    },
    {
      name: 'Alegrías de Amaranto',
      description: 'Amaranto tostado mezclado con miel de abeja y piloncillo. Un dulce nutritivo, ligero y lleno de energía.',
      image: 'https://images.unsplash.com/photo-1604908812004-1b0a1b7f1b4a?q=80&w=1200&auto=format&fit=crop',
      price: 85,
      category: 'Tradicional'
    }
  ]

  return (
    // 3. Cambiamos a pt-32 para que el Navbar no tape el título
    <section className="min-h-screen pt-32 pb-24 px-6 bg-[#f8f3ed]">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-black text-zinc-900">
          Todos los productos
        </h1>

        <p className="mt-4 text-zinc-600 text-lg">
          Catálogo completo de dulces artesanales
        </p>

        {/* 4. AVISO DE ZONAS DE ENTREGA */}
        <div className="mt-6 inline-block bg-orange-100/50 border border-orange-200 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold">
          📍 Entregas locales rápidas en Colima, Villa de Álvarez y Comala.
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((p, i) => (
          <ProductCard
            key={i}
            name={p.name}
            image={p.image}
            price={p.price}
            category={p.category} // Pasamos la categoría
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

    </section>
  )
}