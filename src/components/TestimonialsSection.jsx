import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    quote: 'Aprendí a vender por redes sociales gracias al curso. En pocas semanas ya tenía una estrategia clara.',
    author: 'María Fernanda R.',
    role: 'Emprendedora Digital',
  },
  {
    quote: 'Ahora utilizo IA para crear contenido más rápido y de mejor calidad. Lo que antes me tomaba horas, hoy lo hago en minutos.',
    author: 'Carlos Mendoza',
    role: 'Community Manager',
  },
  {
    quote: 'Excelente metodología y clases prácticas. Se nota que los instructores dominan el tema y siempre estuvieron disponibles.',
    author: 'Lucía Herrera',
    role: 'Diseñadora de Contenido',
  },
]

function SectionLabel({ children }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-white/60 backdrop-blur-xl">
      {children}
    </div>
  )
}

export default function TestimonialsSection() {
  const ref = useReveal('.testimonial-card', { y: 45, stagger: 0.12 })

  return (
    <section
  id="testimonios"
  ref={ref}
  className="relative overflow-hidden bg-[#0b1446] px-4 py-24 md:px-8 md:py-20"
>

      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,138,0,0.07),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.10),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl">

        <SectionLabel>Testimonios</SectionLabel>

        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
            Confianza construida con resultados reales.
          </h2>
      
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.author}
              className="testimonial-card rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              {/* Comillas */}
              <div className="mb-8 text-white/20">
                <svg width="44" height="32" viewBox="0 0 44 32" fill="none" className="h-9 w-12">
                  <path d="M17.2 0C7.9 5.4 1.8 14.2 0 24.6C0 28.9 3.2 32 7.4 32C11.6 32 15 28.7 15 24.5C15 20.9 12.7 18 9.2 17.2C10.6 11.1 14.6 5.9 20.6 2L17.2 0ZM40.6 0C31.3 5.4 25.2 14.2 23.4 24.6C23.4 28.9 26.6 32 30.8 32C35 32 38.4 28.7 38.4 24.5C38.4 20.9 36.1 18 32.6 17.2C34 11.1 38 5.9 44 2L40.6 0Z" fill="currentColor" />
                </svg>
              </div>

              {/* Estrellas */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-[#ff8a00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[17px] leading-8 text-justify font-light tracking-[0.015em] text-white/80">
  {item.quote}
</p>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff8a00]/20 text-sm font-bold text-[#ff8a00]">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="text-base font-medium text-white">{item.author}</p>
                  <p className="mt-0.5 text-sm uppercase tracking-[0.22em] text-white/40">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}