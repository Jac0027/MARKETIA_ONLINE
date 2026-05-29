import { useLayoutEffect, useRef } from 'react'
import { ArrowRight, MoveRight, Play, Star } from 'lucide-react'
import { gsap } from 'gsap'
import bgImage from '../assets/agencia.jpg'

export default function Hero() {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.from('.hero-kicker', { y: 24, opacity: 0, duration: 0.8 })
        .from('.hero-title-line', { yPercent: 120, opacity: 0, stagger: 0.12, duration: 1.1 }, '-=0.45')
        .from('.hero-subtitle', { y: 26, opacity: 0, duration: 0.8 }, '-=0.55')
        .from('.hero-cta', { y: 18, opacity: 0, stagger: 0.1, duration: 0.7 }, '-=0.45')
        .from('.hero-panel', { scale: 0.94, opacity: 0, duration: 1.1 }, '-=0.9')
    }, heroRef)

    return () => ctx.revert()
  }, [])

   return (
    <section
  ref={heroRef}
  className="relative overflow-hidden px-4 pb-20 pt-36 md:px-8 md:pb-28 md:pt-40"
>
  <div
  className="absolute inset-0 bg-cover bg-center opacity-20"
  style={{ backgroundImage: `url(${bgImage})` }}
/>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_20%,transparent_80%,rgba(255,255,255,0.03))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
     <div className="space-y-2 text-[clamp(2rem,4.5vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-blue-950 hero-title">
  
  <div className="overflow-hidden">
    <div className="hero-title-line">
      Transforma tu futuro
    </div>
  </div>

  <div className="overflow-hidden">
    <div className="hero-title-line text-blue-800">
      digital con IA
    </div>
  </div>

  <div className="overflow-hidden py-2">
    <div className="hero-title-line">
      y Marketing Online.
    </div>
  </div>

  <div className="overflow-hidden">
    <div className="hero-title-line bg-gradient-to-r from-blue-950 via-blue-700 to-cyan-500 bg-clip-text text-transparent">
      
    </div>
  </div>

</div>
          <p className="hero-subtitle mt-8 max-w-2xl text-base leading-8 text-black/70 md:text-lg">
            Creamos experiencias digitales de élite para quienes quieren proyectar autoridad,
            diferenciarse con elegancia y convertir percepción premium en resultados reales.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
<a
  href="https://wa.me/51961105640?text=Hola%20MarketIA%20Online,%20quiero%20agendar%20una%20cita."
  target="_blank"
  rel="noopener noreferrer"
  className="group relative inline-flex items-center gap-6 overflow-hidden rounded-full border border-blue-200/60 bg-white/20 px-8 py-4 backdrop-blur-xl transition-all duration-500 hover:border-blue-400 hover:bg-white/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
>
  {/* Glow animado */}
  <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
    <span className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/20 blur-2xl transition-all duration-700 group-hover:left-[120%]" />
  </span>

  {/* Texto */}
  <span className="relative z-10 text-lg font-semibold tracking-wide text-blue-950 transition-all duration-300 group-hover:text-blue-700">
    Agenda tu cita
  </span>

  {/* Círculo animado */}
  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-blue-300 bg-white/40 transition-all duration-500 group-hover:w-20 group-hover:border-cyan-400 group-hover:bg-cyan-100/40">
    
    {/* Línea */}
    <span className="absolute h-[2px] w-6 bg-blue-400 transition-all duration-500 group-hover:w-10 group-hover:bg-cyan-500" />

    {/* Flecha */}
    <ArrowRight className="relative h-5 w-5 text-blue-600 transition-all duration-500 group-hover:translate-x-2 group-hover:text-cyan-600" />
  </div>
</a>
         {/*
<a href="#contact" className="hero-cta group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
  Iniciar proyecto
  <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</a>
*/}
           {/*  <a href="#portfolio" className="hero-cta group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white backdrop-blur-xl transition hover:bg-white/10">
              Ver trabajos
              <Play className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>*/}
          </div>
        </div>

    <div className="relative rounded-[1.5rem] border border-white/10 bg-black/40 p-5 md:p-7">
  <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
    <span>MARKETIA ONLINE</span>
    <span>IA + Marketing</span>
  </div>

  <div className="grid gap-4">

    <div className="overflow-hidden rounded-[1.4rem] border border-cyan-500/20 bg-[linear-gradient(135deg,rgba(59,130,246,0.25),rgba(6,182,212,0.05))] p-5">
      <div className="mb-8 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.28em] text-white/70">
          Crecimiento Digital
        </span>

        <span className="rounded-full border border-cyan-400/20 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-300">
          Premium
        </span>
      </div>

      <h3 className="text-3xl font-semibold text-white">
        Impulsa tu marca con IA
      </h3>

      <p className="mt-3 text-sm text-white/60">
        Automatización, marketing estratégico y posicionamiento digital para empresas modernas.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4">

      <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.28em] text-white/50">
          Alcance
        </p>

        <p className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-cyan-400">
          +250%
        </p>

        <p className="mt-2 text-sm text-white/50">
          Incremento promedio en visibilidad digital
        </p>
      </div>

      <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.28em] text-white/50">
          Automatización IA
        </p>

        <p className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-blue-400">
          24/7
        </p>

        <p className="mt-2 text-sm text-white/50">
          Atención y captación de clientes automatizada
        </p>
      </div>

    </div>

  </div>
</div>
      </div>
    </section>
  )
}