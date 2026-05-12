import { useState, useEffect } from 'react' // 1. Importamos useEffect
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import Loader from '../components/Loader' // 2. Importamos TU Loader
import type { Product } from '../components/CartContext' 

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true) // 3. Estado de carga

  // 4. Efecto para mostrar el loader por 800 milisegundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

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
      price: 15,
      content: '50g',
      category: 'Snack Tradicional'
    },
    {
      name: 'Pellizcos de Tamarindo',
      description: 'Bolitas artesanales de tamarindo cubiertas con azúcar. El equilibrio perfecto entre dulce y acidito que te transporta a los sabores de nuestra tierra.',
      image: 'images/products/producto4.webp',
      price: 35,
      content: '200g',
      category: 'Snack Tradicional'
    },
    {
      name: 'Alfajor Colimote',
      description: 'El tradicional sabor de nuestra tierra en un bocado. Alfajor artesanal con su clásica capa rosa, elaborado con ingredientes 100% naturales. Textura suave y un dulzor inconfundible.',
      image: 'images/products/producto7.webp',
      price: 20,
      content: '50g',
      category: 'Snack Tradicional'
    }
  ]

  // 5. Si está cargando, mostramos el Loader y no renderizamos los productos aún
  if (loading) {
    return <Loader />
  }

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-[#f8f3ed]">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-black text-zinc-900">
          Todos los productos
        </h1>

        <p className="mt-4 text-zinc-600 text-lg">
          Catálogo completo de dulces artesanales
        </p>

        {/* AVISO DE ZONAS DE ENTREGA */}
        <div className="mt-6 inline-block bg-orange-100/50 border border-orange-200 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold shadow-sm">
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
            category={p.category}
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