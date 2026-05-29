import { useReveal } from '../hooks/useReveal'
import bederMeza        from '../assets/team/Beder_Meza.jpeg'
import emilySuarez      from '../assets/team/Emily_Suarez.jpeg'
import danielaContreras from '../assets/team/Daniela_Contreras.jpeg'
import kelyReyes        from '../assets/team/Kely_Reyes.jpeg'
import marcoZamudio     from '../assets/team/Marco_Zamudio.jpeg'
import erickCaceres     from '../assets/team/Erick_Caceres.jpeg'

const team = [
  {
    id: 1,
    name: 'Beder Meza',
    role: 'CEO / Director Ejecutivo',
    summary: 'Liderar la visión estratégica de MarketIA Online.',
    description: 'Define cursos, alianzas, modelo de negocio e innovación, supervisando el crecimiento y éxito de la plataforma.',
    image: bederMeza,
  },
  {
    id: 2,
    name: 'Emily Suarez',
    role: 'Community Manager y Ventas',
    summary: 'Crear comunidad y captar alumnos.',
    description: 'Gestionar redes, crear contenido, responder mensajes, realizar WhatsApp marketing, fidelizar y cerrar ventas.',
    image: emilySuarez,
  },
  {
    id: 3,
    name: 'Daniela Contreras',
    role: 'Consultor Google Ads',
    summary: 'Generar tráfico y prospectos.',
    description: 'Crear campañas en Google Ads, diseñar landing pages y optimizar conversiones para generar resultados.',
    image: danielaContreras,
  },
  {
    id: 4,
    name: 'Kely Reyes',
    role: 'Paid Media Manager',
    summary: 'Escalar ventas mediante publicidad.',
    description: 'Gestionar campañas en Facebook e Instagram Ads, remarketing, embudos de venta y análisis de datos.',
    image: kelyReyes,
  },
  {
    id: 5,
    name: 'Marco Zamudio',
    role: 'Programador Full Stack',
    summary: 'Construir y mantener la plataforma.',
    description: 'Desarrollo web, integración IA, automatización, LMS, bases de datos y seguridad.',
    image: marcoZamudio,
  },
  {
    id: 6,
    name: 'Erick Cáceres',
    role: 'Diseñador UX/UI y Creador Audiovisual',
    summary: 'Diseñar la imagen visual y contenido multimedia.',
    description: 'Crear identidad visual, UI/UX, flyers, reels, videos y contenido creativo que conecta.',
    image: erickCaceres,
  },
]
 
function SectionLabel({ children }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-white/60">
      {children}
    </div>
  )
}
 
function TeamCard({ member }) {
  return (
    <article className="team-item group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0b1a35] shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:shadow-[0_20px_60px_rgba(56,132,255,0.10)]">
 
      {/* ── Foto limpia ── */}
      <div className="w-full overflow-hidden" style={{ height: '260px' }}>
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 10%',
            display: 'block',
          }}
          className="transition duration-700 group-hover:scale-105"
        />
      </div>
 
      {/* ── Bloque de texto centrado ── */}
      <div className="flex flex-1 flex-col items-center px-4 py-5 gap-2 text-center">
 
        {/* Badge rol — centrado, multilínea controlada */}
        <span className="rounded-lg bg-blue-500/15 border border-blue-400/25 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-blue-400 leading-snug">
          {member.role}
        </span>
 
        {/* Nombre — grande, blanco, centrado */}
        <h3 className="text-base font-extrabold tracking-tight text-white leading-tight">
          {member.name}
        </h3>
 
        {/* Línea separadora corta centrada */}
        <div className="h-[2px] w-8 rounded-full bg-blue-500/60" />
 
        {/* Resumen — azul, semibold */}
        <p className="text-[11px] font-semibold text-blue-300 leading-snug">
          {member.summary}
        </p>
 
        {/* Descripción — texto justificado, suave */}
        <p className="text-[10px] leading-relaxed text-white/40" style={{ textAlign: 'justify' }}>
          {member.description}
        </p>
 
      </div>
    </article>
  )
}
 
export default function TeamSection() {
  // const ref = useReveal('.team-item', { y: 40, stagger: 0.1 })
 
  return (
    <section
      id="equipo"
      // ref={ref}
      className="relative overflow-hidden bg-[#050d1f] px-4 py-20 md:px-8 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,132,255,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(120,80,255,0.10),transparent_40%)]" />
 
      <div className="relative mx-auto max-w-7xl">
        <SectionLabel>Nuestro Equipo</SectionLabel>
 
        {/* ── Header ── */}
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2 className="max-w-4xl text-4xl font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-6xl">
            Conoce a nuestro{' '}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              equipo técnico
            </span>
          </h2>
          <p className="max-w-xl text-base leading-7 text-white/50 lg:ml-auto lg:text-right">
            Expertos en tecnología, marketing e innovación trabajando juntos
            para tu crecimiento digital.
          </p>
        </div>
 
        {/* ── Grid ── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-3">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
 
        {/* ── Footer ── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 sm:flex-row">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
              15 años de experiencia
            </p>
            <p className="text-xs text-white/50">
              Diseñando soluciones que transforman ideas en resultados.
            </p>
          </div>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Innovación · Educación · Resultados
          </p>
        </div>
      </div>
    </section>
  )
}
 