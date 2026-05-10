import { createContext, useContext, useState, ReactNode } from 'react'

export type Product = {
  name: string
  image: string
  price: string
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
}

const CartContext = createContext<CartContextType | null>(null)

// 🧠 PARSEO SEGURO DE PRECIO (evita NaN)
const parsePrice = (price: string) => {
  const clean = price.replace(/[^0-9.]/g, '')
  return Number(clean) || 0
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // ➕ ADD TO CART (con cantidad + subtotal)
  const addToCart = (product: Product) => {
    const priceNumber = parsePrice(product.price)

    setCart((prev) => {
      const existing = prev.find((p) => p.name === product.name)

      if (existing) {
        return prev.map((p) =>
          p.name === product.name
            ? {
                ...p,
                quantity: p.quantity + 1,
                subtotal: (p.quantity + 1) * priceNumber
              }
            : p
        )
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
          subtotal: priceNumber
        }
      ]
    })
  }

  // ➖ REMOVE FROM CART
  const removeFromCart = (name: string) => {
    setCart((prev) =>
      prev
        .map((p) => {
          if (p.name === name) {
            const priceNumber = parsePrice(p.price)
            const newQty = p.quantity - 1

            return {
              ...p,
              quantity: newQty,
              subtotal: newQty * priceNumber
            }
          }
          return p
        })
        .filter((p) => p.quantity > 0)
    )
  }

  // 🧹 CLEAR CART
  const clearCart = () => {
    setCart([])
  }

  // 💰 TOTAL GENERAL
  const total = cart.reduce((acc, item) => acc + item.subtotal, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total
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