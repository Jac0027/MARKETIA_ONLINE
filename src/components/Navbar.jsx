import { useLayoutEffect, useRef, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import icon from '../assets/icon.png'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const navRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useLayoutEffect(() => {
    const el = navRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 20,
        end: 99999,
        onUpdate: ({ scroll }) => {
          if (scroll > 24) {
            el.classList.add(
              'backdrop-blur-2xl',
              'bg-white/70',
              'border-black/10',
              'shadow-2xl'
            )
          } else {
            el.classList.remove(
              'backdrop-blur-2xl',
              'bg-white/70',
              'border-black/10',
              'shadow-2xl'
            )
          }
        },
      })
    }, navRef)

    return () => ctx.revert()
  }, [])

  const navLinks = [
    ['Nosotros', '#nosotros'],
    ['Cursos', '#cursos'],
    ['Servicios', '#servicios'],
    ['Beneficios', '#beneficios'],
    ['Testimonios', '#testimonios'],
    ['Equipo', '#equipo'],
    ['Blog', '#blog'],
  ]

  return (
    <header className="fixed top-0 left-0 z-50 w-full">

      <div
        ref={navRef}
        className="flex items-center justify-between bg-blue-900 px-5 py-4 shadow-2xl transition-all duration-500 md:px-10"
      >

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={icon}
            alt="Marketia Online"
            className="h-12 w-auto md:h-16"
          />

          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-white md:text-base">
              MARKETIA ONLINE
            </p>

            <p className="hidden text-[10px] uppercase tracking-[0.3em] text-white md:block">
              Innovación · Tecnología · Resultados
            </p>
          </div>
        </div>

        {/* Menú Desktop */}
        <nav className="hidden items-center gap-8 text-base text-white lg:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="transition hover:text-gray-300"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Derecha */}
        <div className="flex items-center gap-3">

          {/* Botón desktop */}
          <a
            href="#contacto"
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-blue-900 transition hover:scale-105 md:inline-flex"
          >
            Aula Virtual

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center rounded-lg border border-white/20 p-2 text-white lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="bg-[#07143b] px-6 py-6 shadow-2xl lg:hidden">

          <nav className="flex flex-col gap-5 text-white">

            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 pb-3 text-base transition hover:text-[#ff8a00]"
              >
                {label}
              </a>
            ))}

           <a
  href="#contacto"
  className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold !text-blue-900 shadow-lg transition-all duration-300 hover:scale-105"
>
  Aula Virtual
</a>
          </nav>
        </div>
      )}
    </header>
  )
}