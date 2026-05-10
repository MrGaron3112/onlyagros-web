import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="bg-[#f8f3ed] min-h-screen">
      <Navbar />

      {/* AQUÍ CAMBIA EL CONTENIDO */}
      <Outlet />
    </div>
  )
}