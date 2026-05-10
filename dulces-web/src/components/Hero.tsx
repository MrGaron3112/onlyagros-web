import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const heroImages = [
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',

    'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?q=80&w=1600&auto=format&fit=crop',

    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1600&auto=format&fit=crop'
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Hero"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ${
              currentImage === index
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-110'
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center text-white px-6 max-w-5xl"
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-sm uppercase tracking-[0.3em] font-black"
        >
          Dulces Regionales de Colima
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-10 text-6xl md:text-8xl font-black leading-[0.95]"
        >
          El sabor artesanal de Comala.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 text-xl md:text-2xl text-zinc-200 leading-relaxed max-w-3xl mx-auto"
        >
          Dulces tradicionales mexicanos elaborados con recetas auténticas,
          ingredientes seleccionados y una presentación premium.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 flex justify-center gap-6 flex-wrap"
        >
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl text-lg font-black shadow-2xl transition hover:scale-105">
            Ver Catálogo
          </button>

          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-2xl text-lg font-bold transition">
            WhatsApp
          </button>
        </motion.div>
      </motion.div>

      {/* Indicators */}
      <div className="absolute bottom-10 flex gap-4 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-3 rounded-full transition-all duration-500 ${
              currentImage === index
                ? 'w-14 bg-orange-400'
                : 'w-3 bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Gradient Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f8f3ed] to-transparent" />
    </section>
  )
}