import { useState } from 'react'
import { services } from '../data/siteData'
import { ChevronRight, ChevronDown } from 'lucide-react'

import seoGif from '../assets/seo.gif'
import seoimg from '../assets/seoimg.png'
import desarrollo from '../assets/desarrollo.jpg'
import desarrollow from '../assets/desarrollow.gif'
import consultoria from '../assets/consultoria.jpg'
import disenococa from '../assets/disenococa.jpg'
import cocagif from '../assets/coca.gif'
import programacion from '../assets/programacion.jpg'
import programacionGif from '../assets/programacion.gif'
import asesorimg from '../assets/asesor.jpg'
import gestionredesimg from '../assets/gestionredes.jpg'
import iaimg from '../assets/ia.jpg'
function SectionLabel({ children }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-black/55 backdrop-blur-xl">
      {children}
    </div>
  )
}

const cardImages = [
  { static: disenococa,   hover: cocagif         },
  { static: desarrollo,   hover: desarrollow     },
  { static: seoimg,       hover: seoGif          },
  { static: gestionredesimg,  hover: gestionredesimg     },
  { static: programacion, hover: programacionGif },
  { static: consultoria,  hover: consultoria     },
  { static: iaimg, hover: iaimg },
  { static: asesorimg, hover: asesorimg },
]

function ServiceCard({ service, index }) {
  const Icon = service.icon
  return (
    <article className="group relative overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
      <img
        src={cardImages[index].static}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
      />
      <img
        src={cardImages[index].hover}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/5" />

      <div className="relative z-10 flex min-h-[280px] flex-col p-5 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
            <Icon className="h-4 w-4" />
          </div>
          <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/60">
            {service.tag}
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-1.5">
          <h3 className="text-[1.1rem] font-bold leading-tight tracking-tight text-white">
            {service.title}
          </h3>
          <p className="text-[0.78rem] leading-[1.6] text-white/75">
            {service.description}
          </p>
         <a
  href={`https://wa.me/51961105640?text=${encodeURIComponent(
    `Hola MarketIA Online, quiero información sobre el servicio: ${service.title}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-[#ff8a00] px-5 py-2 text-[0.78rem] font-semibold text-white transition-all duration-300 hover:bg-[#ff9d00]"
>
  Conversar ahora

  <ChevronRight className="h-3 w-3" />
</a>
        </div>
      </div>
    </article>
  )
}

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false)

  const rows = []
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3))
  }

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-[#f7f7f7] px-4 pt-10 pb-24 md:px-8 md:pt-12 md:pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,201,255,0.20),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,220,190,0.14),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <SectionLabel>Servicios</SectionLabel>
          <h2 className="mx-auto max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.05em] text-[#0b1446] md:text-6xl">
            Servicios más solicitados
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/60 md:text-lg">
            Estrategias digitales, contenido y soluciones visuales
            enfocadas en crecimiento, posicionamiento y resultados reales.
          </p>
        </div>

        {/* Filas */}
        <div className="flex flex-col" style={{ gap: '40px' }}>
          {rows.map((row, rowIndex) => {
            if (rowIndex > 0 && !showAll) return null
            return (
              <div key={rowIndex} className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {row.map((service, i) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    index={rowIndex * 3 + i}
                  />
                ))}
              </div>
            )
          })}
        </div>

        {/* BOTÓN */}
        {services.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#0b1446]/15 bg-white px-8 py-3.5 text-sm font-semibold text-[#0b1446] shadow-sm transition-all duration-300 hover:border-[#ff8a00] hover:text-[#ff8a00] hover:shadow-md active:scale-95"
            >
              {showAll ? 'Ver menos' : `Ver ${services.length - 3} servicios más`}
              <ChevronDown className={`h-4 w-4 transition-transform duration-500 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  )
}