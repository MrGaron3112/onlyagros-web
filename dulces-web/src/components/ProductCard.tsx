import { useCart } from './CartContext'

type Props = {
  name: string
  image: string
  price: number
  category?: string
  onClick: () => void
}

export default function ProductCard({ name, image, price, category, onClick }: Props) {
  const { addToCart } = useCart()

  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-square mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
        />
        {/* ETIQUETA DE CATEGORÍA */}
        {category && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-800">
            {category}
          </span>
        )}
      </div>
      
      <div className="flex justify-between items-end mt-auto pt-2">
        <div>
          <h3 className="font-black text-xl text-zinc-800">{name}</h3>
          <p className="text-orange-500 font-black text-lg">${price} MXN</p>
        </div>
        
        {/* BOTÓN DE AÑADIDO RÁPIDO */}
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Evita que se abra el modal al dar clic en el botón
            addToCart({ name, image, price });
          }}
          className="bg-zinc-900 text-white p-3 rounded-xl hover:bg-orange-500 transition-colors shadow-md hover:scale-105 active:scale-95"
          title="Añadir al carrito"
        >
          ➕
        </button>
      </div>
    </div>
  )
}