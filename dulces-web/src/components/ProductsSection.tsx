import ProductCard from './ProductCard'
import Reveal from './Reveal'

export default function ProductsSection() {
  const products = [
    {
      name: 'Rollo de Guayaba',
      image:
        'https://images.unsplash.com/photo-1481391032119-d89fee407e44?q=80&w=1200&auto=format&fit=crop',
      price: '$120 MXN'
    },

    {
      name: 'Cocadas Artesanales',
      image:
        'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop',
      price: '$90 MXN'
    },

    {
      name: 'Tamarindo Enchilado',
      image:
        'https://images.unsplash.com/photo-1516747773440-3b54d2b8e5a5?q=80&w=1200&auto=format&fit=crop',
      price: '$110 MXN'
    }
  ]

  return (
    <section
      id="productos"
      className="py-28 px-6 bg-[#f8f3ed]"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-orange-500 uppercase tracking-[0.3em] font-black text-sm">
              Destacados
            </span>

            <h2 className="mt-5 text-5xl md:text-6xl font-black text-zinc-900 leading-tight">
              Nuestros productos destacados.
            </h2>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
             Una selección especial de dulces regionales artesanales inspirados en la tradición de Comala y Colima.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="grid md:grid-cols-3 gap-10 mt-20">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}