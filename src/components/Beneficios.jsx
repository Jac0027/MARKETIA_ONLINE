import { useReveal } from '../hooks/useReveal'

function SectionLabel({ children }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-black/55 backdrop-blur-xl">
      {children}
    </div>
  )
}

const benefits = [
  {
    title: 'Certificación',
      color: '#ff8a00',
    description: 'Obtén tu certificado oficial al completar el curso y valida tus nuevas habilidades digitales.',
  },
  {
    title: 'Clases en vivo',
     color: '#4f46e5',
    description: 'Sesiones interactivas en tiempo real con expertos. Aprende, pregunta y practica al instante.',
  },
  {
    title: 'Acceso virtual',
    color: '#0891b2',
    description: 'Ingresa desde cualquier dispositivo y lugar del mundo, sin límites geográficos ni horarios rígidos.',
  },
  {
    title: 'Material digital',
    color: '#16a34a',
    description: 'Recursos, guías, plantillas y herramientas descargables para aplicar desde el primer día.',
  },
  {
    title: 'Grabaciones disponibles',
    color: '#dc2626',
    description: 'Accede a todas las clases grabadas cuando quieras y repasa los temas a tu propio ritmo.',
  },
  {
    title: 'Comunidad de WhatsApp',
    color: '#25d366',
    description: 'Únete a nuestra comunidad exclusiva para resolver dudas, hacer networking y crecer juntos.',
  },
]

export default function Beneficios() {
  const ref = useReveal('.benefit-card', { y: 30, stagger: 0.08 })

  return (
    <section
      id="beneficios"
      ref={ref}
      className="relative overflow-hidden bg-[#f7f7f7] px-4 py-20 md:px-8 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,201,255,0.20),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,220,190,0.14),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-5 text-center">
          <SectionLabel>Beneficios</SectionLabel>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#0b1446] md:text-5xl">
            Todo lo que incluye tu formación
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-black/55 md:text-lg">
            Diseñamos cada detalle para que tengas la mejor experiencia de aprendizaje digital.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="benefit-card flex flex-col gap-3 rounded-2xl border border-black/[0.07] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#ff8a00]/30 hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)]"
            >
              <h3 className="text-[0.95rem] font-bold tracking-tight text-[#0b1446]">
                {benefit.title}
              </h3>
              <p className="text-[0.78rem] leading-[1.7] text-black/50">
                {benefit.description}
              </p>
              <div className="mt-auto h-[3px] w-8 rounded-full" style={{ background: benefit.color }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}