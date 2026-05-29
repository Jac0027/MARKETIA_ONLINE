import { useReveal } from '../hooks/useReveal'
import { ChevronRight } from 'lucide-react'

function SectionLabel({ children }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-black/55 backdrop-blur-xl">
      {children}
    </div>
  )
}

const posts = [
  {
    tag: 'Inteligencia Artificial',
    title: '¿Cómo usar IA en marketing digital?',
    excerpt: 'Descubre cómo las herramientas de IA están revolucionando las estrategias de marketing y cómo puedes aplicarlas hoy.',
    read: '5 min',
    href: 'https://www.ibm.com/es-es/think/topics/ai-in-marketing',
  },
  {
    tag: 'Tendencias',
    title: 'Tendencias digitales 2026',
    excerpt: 'Las tendencias que están marcando el mundo digital este año: IA generativa, contenido corto, automatización y más.',
    read: '15 min',
    href: 'https://www.empresaactual.com/tendencias-marketing-digital/?gad_source=1&gad_campaignid=23267410305&gbraid=0AAAAAo-fdC8nWHtQgQIC13n0UE8txVy2M&gclid=Cj0KCQjwz9_QBhD_ARIsADnSCfCUwiCLzbWzTlsY5ECW42ozUSi68BvyLTrYQ6FY3R_dtcdNLR1U72gaAk4pEALw_wcB',
  },
  {
    tag: 'Herramientas',
    title: 'Herramientas IA para emprendedores',
    excerpt: 'Las mejores herramientas de IA que todo emprendedor debe conocer para ahorrar tiempo y crecer más rápido.',
    read: '15 min',
    href: 'https://vilmanunez.com/herramientas-de-ia-para-emprendedores-2026/',
  },
  {
    tag: 'Redes Sociales',
    title: 'Cómo vender más con redes sociales',
    excerpt: 'Estrategias probadas para convertir tus redes en un canal de ventas efectivo sin grandes presupuestos.',
    read: '5 min',
    href: 'https://www.questionpro.com/blog/es/como-vender-en-redes-sociales/',
  },
  {
    tag: 'ChatGPT',
    title: 'Qué es ChatGPT aplicado al marketing',
    excerpt: 'Aprende qué es ChatGPT y cómo usarlo para crear contenido, anuncios e ideas de negocio fácilmente.',
    read: '4 min',
    href: 'https://eseid.com/chatgpt-para-marketing-digital-usos-ejemplos-y-beneficios/',
  },
]

const tagColors = {
  'Inteligencia Artificial': { bg: 'rgba(79,70,229,0.1)',  color: '#4f46e5' },
  'Tendencias':              { bg: 'rgba(8,145,178,0.1)',   color: '#0891b2' },
  'Herramientas':            { bg: 'rgba(22,163,74,0.1)',   color: '#16a34a' },
  'Redes Sociales':          { bg: 'rgba(255,138,0,0.1)',   color: '#ff8a00' },
  'ChatGPT':                 { bg: 'rgba(220,38,38,0.1)',   color: '#dc2626' },
}

export default function BlogSection() {
  const ref = useReveal('.blog-card', { y: 40, stagger: 0.1 })

  return (
    <section
      id="blog"
      ref={ref}
      className="relative overflow-hidden bg-[#f7f7f7] px-4 py-24 md:px-8 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,201,255,0.20),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,220,190,0.14),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-1 text-center">
          <SectionLabel>Blog</SectionLabel>
          <h2 className="mx-auto max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#0b1446] md:text-5xl">
            Aprende con nuestros artículos
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-black/55">
            Contenido práctico sobre marketing digital, inteligencia artificial y estrategias para emprendedores.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="blog-card flex flex-col justify-between rounded-2xl border border-black/[0.07] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)]"
            >
              {/* Contenido */}
              <div>
                <span
                  className="mb-4 inline-block rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em]"
                  style={{ background: tagColors[post.tag].bg, color: tagColors[post.tag].color }}
                >
                  {post.tag}
                </span>

                <h3 className="text-[1rem] font-bold leading-snug tracking-tight text-[#0b1446]">
                  {post.title}
                </h3>

                <p className="mt-3 text-[0.8rem] leading-[1.75] text-black/50">
                  {post.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-black/[0.06] pt-4">
                <span className="text-[10px] uppercase tracking-[0.18em] text-black/30">
                  {post.read} lectura
                </span>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[0.78rem] font-semibold text-[#ff8a00] transition-all duration-200 hover:gap-2"
                >
                  Leer más <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}