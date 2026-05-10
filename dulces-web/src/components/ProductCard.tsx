import { useCart } from './CartContext'

type Props = {
  name: string
  image: string
  price: number
  onClick?: () => void
}

export default function ProductCard({
  name,
  image,
  price,
  onClick
}: Props) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition">

      {/* IMAGE */}
      <div
        onClick={onClick}
        className="h-[400px] overflow-hidden cursor-pointer"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">

        <h3 className="font-black text-xl text-zinc-900">
          {name}
        </h3>

        <p className="text-orange-500 font-bold">
          ${price} MXN
        </p>

        <button
          onClick={() =>
            addToCart({
              name,
              image,
              price
            })
          }
          className="w-full bg-orange-500 text-white py-3 rounded-xl font-black hover:bg-orange-600 transition active:scale-95"
        >
          Agregar
        </button>

      </div>

    </div>
  )
}