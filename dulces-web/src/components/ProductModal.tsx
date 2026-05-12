import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { useCart } from './CartContext'
import type { Product } from './CartContext'

type Props = {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ product, isOpen, onClose }: Props) {
  const { addToCart } = useCart()

  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* FONDO OSCURO (BACKDROP) */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* CONTENEDOR DEL MODAL */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[95vh] overflow-y-auto pointer-events-auto relative shadow-2xl"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* BOTÓN CERRAR */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur p-2 rounded-full text-zinc-900 hover:bg-zinc-100 transition shadow-sm"
              >
                <HiX size={24} />
              </button>

              <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
                {/* IMAGEN DEL PRODUCTO */}
                <div className="w-full md:w-1/2">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 md:h-full object-cover rounded-3xl shadow-sm" 
                  />
                </div>
                
                {/* DETALLES DEL PRODUCTO */}
                <div className="flex-1 flex flex-col justify-center">
                  {product.category && (
                    <span className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2 block">
                      {product.category}
                    </span>
                  )}
                  
                  <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-4">
                    {product.name}
                  </h2>
                  
                  {product.description && (
                    <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                      {product.description}
                    </p>
                  )}

                  {/* CAJA DE CONFIANZA / INOCUIDAD */}
                  <div className="bg-orange-50 border border-orange-100 p-5 rounded-2xl mb-8">
                    <p className="text-orange-900 text-sm font-medium leading-relaxed">
                      🛡️ Comprometidos con la inocuidad: aplicamos el análisis de peligros a todo el proceso de producción de principio a fin, garantizando la máxima calidad en cada dulce.
                    </p>
                  </div>

                  {/* PRECIO Y BOTÓN */}
                  <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-100">
                    <p className="text-4xl font-black text-zinc-900 w-full sm:w-auto text-left">
                      ${product.price} <span className="text-xl text-zinc-500">MXN</span>
                    </p>
                    
                    <button 
                      onClick={() => {
                        addToCart(product)
                        onClose() // Cerramos el modal después de añadir
                      }}
                      className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-orange-600 transition active:scale-95 shadow-lg shadow-orange-200"
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}