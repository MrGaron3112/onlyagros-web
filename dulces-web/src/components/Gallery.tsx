import { motion } from 'framer-motion'
import Reveal from './Reveal'
import ParallaxImage from './ParallaxImage'

const images = [
  {
    image:
      'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1200&auto=format&fit=crop',
    height: 'h-[500px]'
  },

  {
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop',
    height: 'h-[320px]'
  },

  {
    image:
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop',
    height: 'h-[400px]'
  },

  {
    image:
      'https://images.unsplash.com/photo-1481391032119-d89fee407e44?q=80&w=1200&auto=format&fit=crop',
    height: 'h-[600px]'
  },

  {
    image:
      'https://images.unsplash.com/photo-1516747773440-3b54d2b8e5a5?q=80&w=1200&auto=format&fit=crop',
    height: 'h-[350px]'
  }
]

export default function Gallery() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-orange-500 uppercase tracking-[0.3em] font-black text-sm">
              Galería
            </span>

            <h2 className="mt-6 text-5xl md:text-6xl font-black text-zinc-900 leading-tight">
              Inspirado en la tradición mexicana.
            </h2>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Colores, sabores y texturas que representan la esencia artesanal
              de Colima y Comala.
            </p>
          </div>
        </Reveal>

        {/* Masonry */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-20 space-y-6">
          {images.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10
              }}
              transition={{
                duration: 0.4
              }}
              className={`relative overflow-hidden rounded-[36px] ${item.height} group break-inside-avoid shadow-2xl`}
            >
              {/* Image */}
              <ParallaxImage
                src={item.image}
                alt="Gallery"
                className="w-full h-[120%] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition duration-500" />

              {/* Floating Text */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-300 font-black">
                  OnlyAgros
                </p>

                <h3 className="mt-3 text-3xl font-black leading-tight">
                  Dulces Regionales
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}