import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ChevronRight, ChevronDown } from 'lucide-react'

import chatgpt_img from '../assets/chatgpt.jpg'
import usmarketing_digital_img from '../assets/usmarketing_digital.jpg'
import facebook_instagram_img from '../assets/facebook_instagram.png'
import TikTok_Ads_img from '../assets/TikTok_Ads.png'
import Canva_img from '../assets/Canva.jpg'
import marca_img from '../assets/marca.jpg'
import manager_img from '../assets/manager.jpg'
import redes_img from '../assets/redes.jpg'
import automatizacionIA_img from '../assets/automatizacionIA.jpg'
import negocios_img from '../assets/negocios.jpg'

function SectionLabel({ children }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-black/55 backdrop-blur-xl">
      {children}
    </div>
  )
}

const courses = [
  {
    num: '01',
    title: 'Inteligencia Artificial Aplicada al Marketing Digital',
    description: 'Automatiza estrategias y mejora resultados digitales con herramientas IA de última generación.',
    tag: 'IA + Marketing',
    img: usmarketing_digital_img,
  },
  {
    num: '02',
    title: 'ChatGPT para Emprendedores y Negocios',
    description: 'Crea contenido, anuncios, ideas y automatizaciones usando inteligencia artificial.',
    tag: 'ChatGPT',
    img: chatgpt_img,
  },
  {
    num: '03',
    title: 'Publicidad Digital con Facebook Ads y Instagram Ads',
    description: 'Domina campañas publicitarias en Meta Ads para aumentar ventas y alcance.',
    tag: 'Meta Ads',
    img: facebook_instagram_img,
  },
  {
    num: '04',
    title: 'TikTok Marketing y TikTok Ads',
    description: 'Aprende estrategias virales y publicidad en TikTok para negocios y marcas personales.',
    tag: 'TikTok',
    img: TikTok_Ads_img,
  },
  {
    num: '05',
    title: 'Diseño de Contenido con Canva y Canva AI',
    description: 'Crea diseños profesionales, reels, banners y publicaciones para redes sociales.',
    tag: 'Diseño',
    img: Canva_img,
  },
  {
    num: '06',
    title: 'Branding y Marca Personal Digital',
    description: 'Desarrolla una identidad digital fuerte para destacar en internet.',
    tag: 'Branding',
    img: marca_img,
  },
  {
    num: '07',
    title: 'Community Manager Profesional',
    description: 'Gestiona redes sociales, comunidades digitales y estrategias de engagement.',
    tag: 'Community',
    img: manager_img,
  },
  {
    num: '08',
    title: 'Creación de Contenido para Redes Sociales',
    description: 'Aprende técnicas modernas para crear contenido atractivo y de alto impacto.',
    tag: 'Contenido',
    img: redes_img,
  },
  {
    num: '09',
    title: 'Automatización de Marketing con IA',
    description: 'Automatiza respuestas, correos, contenido y procesos digitales con herramientas inteligentes.',
    tag: 'Automatización',
    img: automatizacionIA_img,
  },
  {
    num: '10',
    title: 'Emprendimiento y Negocios Digitales',
    description: 'Desarrolla modelos de negocio online y estrategias para generar ingresos digitales.',
    tag: 'Emprendimiento',
    img: negocios_img,
  },
]

export default function CoursesSection() {
  const [expanded, setExpanded] = useState(false)
  const ref = useReveal('.course-card', { y: 40, stagger: 0.08 })

  const visibleCourses = expanded ? courses : courses.slice(0, 5)

  return (
    <section
      id="cursos"
      ref={ref}
      className="relative overflow-hidden px-4 pt-6 pb-10 md:px-8 md:pt-10 md:pb-14"
    >
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-4 text-center">
          <SectionLabel>Cursos destacados</SectionLabel>
          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[0.95] tracking-[-0.05em] text-[#0b1446] md:text-6xl">
            Aprende. Crece. Destaca.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/60 md:text-lg">
            Formación práctica en marketing digital, inteligencia artificial y negocios
            online para impulsar tu carrera o negocio.
          </p>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex md:flex-col md:gap-4">

          {/* Fila 1 */}
          <div className="grid gap-4" style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
            <CardDesktop course={courses[0]} isFeatured minH={460} />
            <CardDesktop course={courses[1]} isFeatured={false} minH={460} />
            <CardDesktop course={courses[2]} isFeatured={false} minH={460} />
          </div>

          {/* Fila 2 */}
          <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <CardDesktop course={courses[3]} isFeatured={false} minH={300} />
            <CardDesktop course={courses[4]} isFeatured={false} minH={300} />
          </div>

          {/* Filas expandibles — display:none / block en vez de maxHeight */}
          <div className={`flex flex-col gap-4 ${expanded ? 'block' : 'hidden'}`}>

            {/* Fila 3 */}
            <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              <CardDesktop course={courses[5]} isFeatured={false} minH={300} />
              <CardDesktop course={courses[6]} isFeatured={false} minH={300} />
              <CardDesktop course={courses[7]} isFeatured={false} minH={300} />
            </div>

            {/* Fila 4 */}
            <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <CardDesktop course={courses[8]} isFeatured={false} minH={300} />
              <CardDesktop course={courses[9]} isFeatured={false} minH={300} />
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col gap-4 md:hidden">
          {visibleCourses.map((course) => (
            <article
              key={`mob-${course.title}`}
              className="course-card group relative overflow-hidden rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <img src={course.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              <div className="relative flex min-h-[240px] flex-col p-6">
                <div className="flex justify-end">
                  <span className="rounded-full border border-white/20 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-white/65">
                    {course.tag}
                  </span>
                </div>
                <div className="mt-auto">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#ff8a00]">
                    Curso {course.num}
                  </p>
                  <h3 className="text-[1.2rem] font-bold leading-[1.2] tracking-tight text-white">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-white/75">
                    {course.description}
                  </p>
                 <a
  href={`https://wa.me/51961105640?text=${encodeURIComponent(
    `Hola MarketIA Online, quiero más información sobre el curso: ${course.title}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ff8a00] px-5 py-2.5 text-[12px] font-medium text-white"
>
  Explorar curso

  <ChevronRight className="h-3.5 w-3.5" />
</a>
                      
                </div>
                
              </div>
              
            </article>
            
          ))}
        </div>

        {/* BOTÓN VER MÁS / VER MENOS */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-full border border-[#0b1446]/20 bg-white px-7 py-3.5 text-sm font-medium text-[#0b1446] shadow-sm transition-all duration-300 hover:bg-[#0b1446] hover:text-white hover:shadow-md"
          >
            {expanded ? 'Ver menos cursos' : `Ver todos los cursos (${courses.length})`}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}/>
          </button>
        </div>

      </div>
    </section>
  )
}

function CardDesktop({ course, isFeatured, minH }) {
  return (
    <article
      className="course-card group relative rounded-[2rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(0,0,0,0.2)]"
      style={{ minHeight: `${minH}px` }}
    >
      {/* Imágenes en su propio div con overflow-hidden */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
        <img
          src={course.img}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5" />
      </div>

      {/* Contenido — libre, no cortado */}
      <div
        className="relative flex flex-col p-6 pb-8"
        style={{ minHeight: `${minH}px` }}
      >
        <div className="flex justify-end">
          <span className="rounded-full border border-white/20 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-white/65">
            {course.tag}
          </span>
        </div>

        <div className="mt-auto">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#ff8a00]">
            Curso {course.num}
          </p>
          <h3
            className={`font-bold tracking-[-0.03em] text-white ${
              isFeatured ? 'text-[2.2rem] leading-[1.05]' : 'text-[1.2rem] leading-[1.2]'
            }`}
          >
            {course.title}
          </h3>
          <p className={`mt-2 leading-relaxed text-white/75 ${isFeatured ? 'text-[1rem]' : 'text-[0.82rem]'}`}>
            {course.description}
          </p>
        <a
  href={`https://wa.me/51961105640?text=${encodeURIComponent(
    `Hola MarketIA Online, quiero más información sobre el curso: ${course.title}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ff8a00] px-5 py-2.5 text-[12px] font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#ff9500]"
>
  Consultar información

  <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
</a>
        </div>
      </div>
    </article>
  )
}