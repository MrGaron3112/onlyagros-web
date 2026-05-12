import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiTrash } from 'react-icons/hi'
import { useState } from 'react'
import { useCart } from './CartContext'

type Props = {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: Props) {
  const { cart, removeFromCart, clearCart, total } = useCart()
  const [checkout, setCheckout] = useState(false)

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* DRAWER */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col"
            initial={{ x: "100%" }} 
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
          >
            {/* HEADER */}
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-xl font-black">Carrito</h2>
              <button onClick={onClose}>
                <HiX size={24} />
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-zinc-500 mt-10">
                  Tu carrito está vacío
                </p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 bg-zinc-50 p-4 rounded-2xl"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl"
                    />

                    <div className="flex-1">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-orange-500 font-black">
                        ${item.price}
                      </p>
                      <p className="text-xs text-zinc-500">
                        Cantidad: {item.quantity}
                      </p>
                      <p className="text-xs font-bold text-zinc-700">
                        Subtotal: ${item.subtotal.toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-red-500"
                    >
                      <HiTrash size={20} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER */}
            <div className="p-6 border-t space-y-3 bg-white">
              <div className="flex justify-between font-black text-lg pb-2">
                <span>Total:</span>
                <span className="text-orange-500">
                  ${total.toFixed(2)} MXN
                </span>
              </div>

              {/* BOTÓN PRINCIPAL DE PAGO */}
              <button
                onClick={() => setCheckout(true)}
                className="w-full bg-orange-500 text-white py-4 rounded-xl font-black hover:bg-orange-600 transition"
              >
                Proceder al pago
              </button>

              <button
                onClick={clearCart}
                className="w-full text-zinc-500 py-2 text-sm font-bold hover:text-zinc-800 transition mt-2"
              >
                Vaciar carrito
              </button>
            </div>

            {/* CHECKOUT SCREEN (PANTALLA DE CONFIRMACIÓN DE EJEMPLO) */}
            {checkout && (
              <motion.div
                className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-10 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h1 className="text-4xl font-black text-orange-500">
                  ¡Pedido confirmado! 🎉
                </h1>
                <p className="mt-4 text-zinc-600">
                  Gracias por tu compra en OnlyAgros
                </p>
                <p className="mt-6 text-2xl font-black">
                  Total: ${total.toFixed(2)} MXN
                </p>

                <button
                  onClick={() => {
                    clearCart()
                    setCheckout(false)
                    onClose()
                  }}
                  className="mt-10 bg-orange-500 text-white px-8 py-4 rounded-2xl font-black"
                >
                  Volver al inicio
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}