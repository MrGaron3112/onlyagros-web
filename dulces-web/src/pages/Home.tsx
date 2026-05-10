import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import ProductsSection from '../components/ProductsSection'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import Gallery from '../components/Gallery'
import MouseGlow from '../components/MouseGlow'
import SmoothScroll from '../components/SmoothScroll'

export default function Home() {
  return (
    <div className="bg-[#f8f3ed] overflow-hidden">
      <SmoothScroll />
      
      <MouseGlow />

      <Navbar />

      <Hero />

      <Benefits />

      <ProductsSection />

      <Gallery />

      <Footer />

      <WhatsAppButton />
    </div>
  )
}