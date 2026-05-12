import { useState } from 'react'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import type { Product } from './CartContext' // Tipado estricto

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

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
  }
]

  return (
    <section className="py-20 px-6 bg-[#f8f3ed]">
      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mt-10">
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
    </section>
  )
}