import { motion } from 'framer-motion'
import {
  Leaf,
  Gift,
  Star,
  Truck
} from 'lucide-react'

const benefits = [
  {
    icon: Leaf,
    title: 'Artesanal',
    description:
      'Elaborados con recetas tradicionales y esencia regional.'
  },

  {
    icon: Gift,
    title: 'Presentación Premium',
    description:
      'Diseños modernos ideales para regalo y eventos especiales.'
  },

  {
    icon: Star,
    title: 'Calidad Selecta',
    description:
      'Ingredientes cuidadosamente seleccionados para mejor sabor.'
  },

  {
    icon: Truck,
    title: 'Entrega Segura',
    description:
      'Empaque protegido y atención personalizada.'
  }
]

export default function Benefits() {
  return (
    <section className="relative py-32 px-6 bg-[#f8f3ed] overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1
          }}
          viewport={{
            once: true
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-orange-500 uppercase tracking-[0.3em] font-black text-sm">
            ¿Porque OnlyAgros?
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-zinc-900 leading-tight">
            Tradición con una experiencia premium.
          </h2>

          <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
            Inspirados en los sabores auténticos de Colima y Comala,
            combinando tradición artesanal con diseño moderno.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {benefits.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2
                }}
                viewport={{
                  once: true
                }}
                className="group bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] p-10 shadow-2xl hover:-translate-y-3 transition duration-500"
              >
                <div className="w-20 h-20 rounded-3xl bg-orange-100 flex items-center justify-center">
                  <Icon
                    size={38}
                    className="text-orange-500"
                  />
                </div>

                <h3 className="mt-8 text-3xl font-black text-zinc-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}