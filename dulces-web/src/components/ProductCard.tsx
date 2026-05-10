import { motion } from 'framer-motion'

type ProductProps = {
  name: string
  image: string
  price: string
}

export default function ProductCard({
  name,
  image,
  price
}: ProductProps) {
  return (
    <motion.div
      whileHover={{
        y: -15,
        rotateX: 4,
        rotateY: -4
      }}
      transition={{
        duration: 0.4
      }}
      className="group relative bg-white rounded-[36px] overflow-hidden border border-orange-100 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-orange-400/0 group-hover:bg-orange-400/10 transition duration-700 z-10 pointer-events-none" />

      {/* Image */}
      <div className="relative h-[420px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Floating Badge */}
        <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-white text-sm font-black uppercase tracking-widest">
          Artesanal
        </div>

        {/* Text */}
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h3 className="text-4xl font-black leading-tight">
            {name}
          </h3>

          <p className="mt-3 text-orange-300 text-2xl font-black">
            {price}
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="p-8 bg-white">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl transition duration-300 hover:scale-[1.03] hover:shadow-orange-300/40">
          Comprar Ahora
        </button>
      </div>
    </motion.div>
  )
}