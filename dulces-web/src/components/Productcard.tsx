type ProductCardProps = {
  name: string
  image: string
  price: string
}

export default function ProductCard({
  name,
  image,
  price
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-[36px] overflow-hidden shadow-2xl hover:-translate-y-4 transition duration-700 border border-orange-100">
      <div className="relative h-[420px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h3 className="text-4xl font-black leading-tight">
            {name}
          </h3>

          <p className="mt-3 text-orange-300 text-2xl font-black">
            {price}
          </p>
        </div>
      </div>

      <div className="p-8">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl transition hover:scale-[1.02]">
          Comprar Ahora
        </button>
      </div>
    </div>
  )
}