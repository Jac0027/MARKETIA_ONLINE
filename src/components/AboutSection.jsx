import { useReveal } from '../hooks/useReveal'
import editorialImage from '../assets/artesania-visual.jpg'
import manifiesto from '../assets/manifiesto.gif'
import manifiestoimage from '../assets/manifiesto.jpg'
import aboutGif from '../assets/artesania-visual.gif'

function SectionLabel({ children }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-white/70 backdrop-blur-xl">
      {children}
    </div>
  )
}
export default function AboutSection() {
  const ref = useReveal('.about-reveal', { y: 30, stagger: 0.08 })

  const cardHoverClasses = "transition duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_30px_70px_rgba(0,0,0,0.2)]"
  const staticImgClass = "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 opacity-60 group-hover:opacity-0"
  const gifImgClass = "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105"

  return (
    <section
      id="nosotros"
      ref={ref}
      className="relative px-4 pt-10 pb-20 md:px-8 md:pt-14 md:pb-28"
      style={{ background: 'linear-gradient(135deg, #07111f 0%, #0f172a 35%, #172554 70%, #1e3a8a 100%)' }}
    >
      {/* Orbes de fondo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -bottom-20 -right-10 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* — GRID PRINCIPAL — */}
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">

          {/* COLUMNA IZQUIERDA */}
          <div className="about-reveal lg:pt-6">
            <SectionLabel>Nosotros</SectionLabel>

            <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-white/30 font-medium">
              Plataforma   · Especializada en marketing digital 
            </p>

            <h2 className="max-w-lg text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-6xl">
              No construimos páginas.{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Diseñamos percepción de marca.
              </span>
            </h2>

<p className="mt-6 max-w-md text-justify text-base leading-8 text-white/55 md:text-lg">
  MarketIA Online es una plataforma de formación digital especializada en marketing digital e inteligencia artificial aplicada a negocios y emprendimientos.
  Brindamos cursos prácticos, talleres y capacitaciones orientadas al desarrollo de competencias digitales para estudiantes, emprendedores y profesionales.
</p>

            {/* Métricas */}
          </div>

          {/* GRID DE CARDS */}
          <div className="grid gap-5 md:grid-cols-4 md:auto-rows-[160px]">

            {/* 1. MANIFESTO */}
            <article className={`about-reveal group relative overflow-hidden rounded-[2rem] border border-white/15 hover:border-cyan-400/30 bg-white/5 backdrop-blur-2xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.3)] md:col-span-2 md:row-span-2 ${cardHoverClasses}`}>
              <img src={manifiestoimage} className={staticImgClass} alt="" />
              <img src={manifiesto} className={gifImgClass} alt="" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col justify-between z-10">
                <div className="flex">
                  <span className="text-[11px] uppercase tracking-[0.3em] rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white backdrop-blur-xl">Manifiesto</span>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-2">MARKETIA ONLINE</p>
                  <p className="max-w-sm text-lg leading-7 text-white/90 font-light">
                    Somos una agencia de marketing enfocada en estética, estrategia
                    y ejecución técnica de alto nivel. Cada proyecto es una oportunidad
                    de crear algo que el mercado recuerde.
                  </p>
                </div>
              </div>
            </article>

            {/* 2. ACERCAMIENTO */}
            <article className={`about-reveal group relative overflow-hidden rounded-[2rem] border border-white/15 hover:border-cyan-400/30 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] md:col-span-2 md:row-span-1 ${cardHoverClasses}`}>
              <img src={editorialImage} className={staticImgClass} alt="" />
              <img src={aboutGif} className={gifImgClass} alt="" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex">
                  <span className="text-[11px] uppercase tracking-[0.3em] rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white backdrop-blur-xl">Visión</span>
                </div>
                <p className="max-w-[220px] text-sm leading-tight text-slate-200 font-light">Ser una plataforma líder en formación digital e innovación tecnológica en Latinoamérica.</p>
              </div>
            </article>

            {/* 3. GESTIÓN */}
            <article className={`about-reveal group relative overflow-hidden rounded-[2rem] border border-white/15 hover:border-cyan-400/30 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1 ${cardHoverClasses}`}>
              <img src={editorialImage} className={staticImgClass} alt="" />
              <img src={aboutGif} className={gifImgClass} alt="" />
              <div className="relative flex h-full flex-col justify-between z-10">
                <div className="flex">
                  <span className="text-[11px] uppercase tracking-[0.3em] rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white backdrop-blur-xl">Gestión</span>
                </div>
                <p className="text-[13px] leading-snug text-white/80 font-light">Interfaces diseñadas para elevar tu autoridad de marca.</p>
              </div>
            </article>

            {/* 4. VISUAL CRAFT */}
            <article className={`about-reveal group relative overflow-hidden rounded-[2rem] border border-white/15 hover:border-cyan-400/30 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] md:col-start-4 md:row-start-2 md:row-span-3 ${cardHoverClasses}`}>
              <img src={editorialImage} className={staticImgClass} alt="" />
              <img src={aboutGif} className={gifImgClass} alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur-xl z-20">Misión</div>
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <p className="text-[12px] text-white/60 font-light leading-snug">Capacitar personas en herramientas digitales e inteligencia artificial para mejorar su competitividad y crecimiento profesional.</p>
              </div>
            </article>

            {/* 5. IMPACTO */}
            <article className={`about-reveal group relative overflow-hidden rounded-[2rem] border border-white/15 hover:border-cyan-400/30 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)] md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-2 ${cardHoverClasses}`}>
              <img src={editorialImage} className={staticImgClass} alt="" />
              <img src={aboutGif} className={gifImgClass} alt="" />
              <div className="relative flex h-full flex-col justify-between z-10">
                <span className="self-start rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.4em] text-white backdrop-blur-xl">Impacto</span>
                <p className="text-sm leading-6 text-white/80 font-light">Autoridad, confianza y valor percibido — en cada entrega.</p>
              </div>
            </article>

            {/* 6. ENFOQUE */}
            <article className={`about-reveal group relative overflow-hidden rounded-[2rem] border border-white/15 hover:border-cyan-400/30 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)] md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-2 ${cardHoverClasses}`}>
              <img src={editorialImage} className={staticImgClass} alt="" />
              <img src={aboutGif} className={gifImgClass} alt="" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.2),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col justify-between z-10">
                <div className="flex">
                  <span className="text-[11px] uppercase tracking-[0.3em] rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white backdrop-blur-xl">Enfoque</span>
                </div>
                <p className="text-base leading-7 text-white/80 font-light">
                  Sensibilidad editorial, lógica de negocio y precisión frontend —
                  la fórmula de MARKETIA ONLINE para crear experiencias que el mercado recuerda.
                </p>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}