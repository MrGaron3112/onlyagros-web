import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type Product = {
  name: string
  image: string
  price: number
  description?: string // Añadido
  category?: string    // Añadido
  content?: string
}

export type CartItem = Product & {
  quantity: number
  subtotal: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (name: string) => void
  clearCart: () => void
  total: number
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // ➕ ADD
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.name === product.name)

      if (existing) {
        return prev.map((p) =>
          p.name === product.name
            ? {
                ...p,
                quantity: p.quantity + 1,
                subtotal: (p.quantity + 1) * product.price
              }
            : p
        )
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
          subtotal: product.price
        }
      ]
    })
  }

  // ➖ REMOVE
  const removeFromCart = (name: string) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.name === name
            ? {
                ...p,
                quantity: p.quantity - 1,
                subtotal: (p.quantity - 1) * p.price
              }
            : p
        )
        .filter((p) => p.quantity > 0)
    )
  }

  // 🧹 CLEAR
  const clearCart = () => {
    setCart([])
  }

  // 💰 TOTAL
  const total = cart.reduce((acc, item) => acc + item.subtotal, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 🧠 HOOK
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }
  return context
}