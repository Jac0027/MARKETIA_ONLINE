import { Routes, Route } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Home from './pages/Home'
import { FaWhatsapp } from 'react-icons/fa'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* WhatsApp flotante */}
     <a
  href="https://wa.me/51961105640?text=Hola%20MarketIA%20Online,%20quiero%20más%20información."
  target="_blank"
  rel="noopener noreferrer"
  className="group fixed bottom-5 right-5 z-[9999] flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-[0_10px_40px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_50px_rgba(37,211,102,0.60)]"
>
  {/* Glow */}
  <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 blur-xl transition-all duration-500 group-hover:opacity-70" />

  {/* Ícono */}
  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#25D366] shadow-inner">
    <FaWhatsapp className="h-7 w-7" />
  </div>

  {/* Texto */}
  <div className="relative z-10 hidden sm:block">
    <p className="text-xs font-medium leading-none text-white/80">
      ¿Necesitas ayuda?
    </p>

    <p className="mt-1 text-sm font-bold leading-none text-white">
      Escríbenos
    </p>
  </div>
</a>
    </>
  )
}