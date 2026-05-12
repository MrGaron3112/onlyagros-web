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
      image: 'images/products/producto6.webp',
      price: 85,
      category: 'Snack'
    },
  {
    name: 'Mazapán Tradicional',
    description: 'El clásico sabor de Colima en un tamaño ideal para compartir. Elaborado con cacahuate seleccionado e ingredientes 100% naturales. Una receta que se deshace en la boca.',
    image: 'images/products/producto5.webp',
    price: 15, // Precio sugerido (puedes ajustarlo)
    content: '50g',
    category: 'Snack Tradicional'
  },
  {
    name: 'Pellizcos de Tamarindo',
    description: 'Bolitas artesanales de tamarindo cubiertas con azúcar. El equilibrio perfecto entre dulce y acidito que te transporta a los sabores de nuestra tierra.',
    image: 'images/products/producto4.webp',
    price: 35, // Precio sugerido (puedes ajustarlo)
    content: '200g',
    category: 'Snack Tradicional'
  },
  {
  name: 'Alfajor Colimote',
  description: 'El tradicional sabor de nuestra tierra en un bocado. Alfajor artesanal con su clásica capa rosa, elaborado con ingredientes 100% naturales. Textura suave y un dulzor inconfundible.',
  image: 'images/products/producto7.webp', // Aquí iría la ruta de tu imagen
  price: 20, // Precio sugerido al ser una porción individual de 50g
  content: '50g',
  category: 'Snack Tradicional'
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