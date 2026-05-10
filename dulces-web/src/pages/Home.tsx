import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductsSection from '../components/ProductsSection'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <div className="bg-[#f8f3ed] overflow-hidden">
      <Navbar />
      <Hero />
      <ProductsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}