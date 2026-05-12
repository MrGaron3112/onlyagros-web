import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import ProductsSection from '../components/ProductsSection'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import MouseGlow from '../components/MouseGlow'
import SmoothScroll from '../components/SmoothScroll'

export default function Home() {
  return (
    <div className="bg-[#f8f3ed] overflow-hidden">
      <SmoothScroll />
      
      <MouseGlow />

      {/* Como ahora el Navbar y el CartDrawer están en el MainLayout, 
          podríamos quitar el Navbar de aquí si ya lo renderizas globalmente, 
          pero lo dejamos intacto por ahora según tu código */}
      <Navbar />

      <Hero />

      <Benefits />

      <ProductsSection />

      <Gallery />

      <Footer />
    </div>
  )
}