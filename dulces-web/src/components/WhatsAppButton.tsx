import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/523120000000"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl z-50 transition hover:scale-110"
    >
      <FaWhatsapp />
    </a>
  )
}