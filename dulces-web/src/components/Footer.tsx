import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-zinc-950 text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        <div>
          <h3 className="text-5xl font-black text-orange-400 tracking-tight">
            OnlyAgros
          </h3>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-md">
            Dulces regionales inspirados en la tradición de Comala y Colima
            con una presentación moderna y premium.
          </p>
        </div>

        <div>
          <h4 className="text-2xl font-black mb-6">
            Navegación
          </h4>

          <div className="flex flex-col gap-4 text-zinc-400 text-lg">
            {/* ENLACES FUNCIONALES CON REACT ROUTER */}
            <Link to="/" className="hover:text-orange-400 transition">
              Inicio
            </Link>

            <Link
              to="/productos"
              className="hover:text-orange-400 transition"
            >
              Productos
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-black mb-6">
            Contacto
          </h4>

          <div className="space-y-4 text-zinc-400 text-lg">
            <p>📍 Comala, Colima</p>
            <p>📧 onlyagros@email.com</p>
            <p>📱 +52 312 000 0000</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-16 pt-8 text-center text-zinc-500">
        © 2026 OnlyAgros • Dulces Regionales Artesanales
      </div>
    </footer>
  )
}