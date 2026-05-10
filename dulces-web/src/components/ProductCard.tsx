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
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl">

      {/* IMAGE */}
      <div onClick={onClick} className="h-[400px] overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">

        <h3 className="font-black text-xl">{name}</h3>

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
          className="w-full bg-orange-500 text-white py-3 rounded-xl font-black hover:bg-orange-600 transition"
        >
          Agregar
        </button>

      </div>

    </div>
  )
}