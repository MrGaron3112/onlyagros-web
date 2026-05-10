import { AnimatePresence, motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'

type Product = {
  name: string
  image: string
  price: string
}

type Props = {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({
  product,
  isOpen,
  onClose
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl relative">

              {/* CLOSE */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-zinc-700 hover:text-black text-2xl"
              >
                <HiX />
              </button>

              {/* IMAGE */}
              <div className="h-[320px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-8">

                <h2 className="text-3xl font-black text-zinc-900">
                  {product.name}
                </h2>

                <p className="mt-2 text-orange-500 text-2xl font-black">
                  {product.price}
                </p>

                <p className="mt-4 text-zinc-600">
                  Dulce artesanal inspirado en la tradición de Colima y Comala.
                </p>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">

                  <button className="flex-1 bg-orange-500 text-white py-4 rounded-2xl font-black hover:scale-105 transition">
                    Comprar ahora
                  </button>

                  <button className="flex-1 bg-green-500 text-white py-4 rounded-2xl font-black hover:scale-105 transition">
                    WhatsApp
                  </button>

                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}