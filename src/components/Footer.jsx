import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import logo from '../assets/Logo.png'

const links = [
  { label: 'Inicio', href: '#' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Blog', href: '#blog' },
//  { label: 'Contacto', href: '#contact' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: FaInstagram,
    hoverColor: '#E1306C',
    hoverBg: 'rgba(225,48,108,0.15)',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/',
    icon: FaFacebookF,
    hoverColor: '#1877F2',
    hoverBg: 'rgba(24,119,242,0.15)',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/',
    icon: FaYoutube,
    hoverColor: '#FF0000',
    hoverBg: 'rgba(255,0,0,0.15)',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/51961105640',
    icon: MessageCircle,
    hoverColor: '#25D366',
    hoverBg: 'rgba(37,211,102,0.15)',
  },
]

const contactItems = [
  /*{
    icon: Mail,
    text: 'tucorreo@gmail.com',
    href: 'mailto:tucorreo@gmail.com',
  },*/
  {
    icon: Phone,
    text: '+51 961 105 640',
    href: 'https://wa.me/51961105640',
  },
  {
    icon: MapPin,
    text: 'Lima, Perú',
    href: null,
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070e30] px-4 pt-12 pb-5 md:px-8">

      {/* Línea superior */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff8a00] to-transparent" />

      {/* Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,138,0,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(79,70,229,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* PARTE SUPERIOR */}
        <div className="grid gap-10 border-b border-white/[0.08] pb-10 lg:grid-cols-[2fr_1fr_1fr]">

          {/* Columna 1 */}
          <div className="flex flex-col gap-5">
            <img
              src={logo}
              alt="MarketIA Online"
              className="h-16 w-auto object-contain md:h-20"
              style={{ maxWidth: '240px' }}
            />

            <p className="max-w-md text-[0.88rem] leading-7 !text-white">
              Formación digital en marketing, inteligencia artificial y estrategias para emprendedores.
            </p>

            {/* Separador */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px flex-1 bg-white/[0.08]" />

              <span className="text-[10px] uppercase tracking-[0.25em] !text-white">
                Síguenos
              </span>

              <div className="h-px flex-1 bg-white/[0.08]" />
            </div>

            {/* Redes */}
            <div className="flex items-center justify-center gap-3">
              {socials.map(({ label, href, icon: Icon, hoverColor, hoverBg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.05] !text-white transition-all duration-300"
                  onMouseEnter={e => {
                    e.currentTarget.style.color = hoverColor
                    e.currentTarget.style.background = hoverBg
                    e.currentTarget.style.borderColor = hoverColor + '60'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = ''
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                    e.currentTarget.style.transform = ''
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#ff9d1f]">
              Navegación
            </p>

            <ul className="flex flex-col gap-3">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-2 text-[0.87rem] font-medium !text-white transition-all duration-200 hover:!text-white"
                  >
                    <span className="h-[1.5px] w-0 rounded-full bg-[#ff8a00] transition-all duration-300 group-hover:w-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#ff9d1f]">
              Contacto
            </p>

            <ul className="flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3">

                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.10] bg-white/[0.06]">
                    <Icon className="h-3.5 w-3.5 text-[#ff9d1f]" />
                  </div>

                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-[0.87rem] !text-white transition-colors duration-200 hover:text-[#ff9d1f]"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-[0.87rem] !text-white">
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/51961105640"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#ff8a00] px-5 py-2.5 text-[0.8rem] font-bold !text-white shadow-[0_4px_20px_rgba(255,138,0,0.30)] transition-all duration-300 hover:bg-[#ff9500] hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Escríbenos
            </a>
          </div>
        </div>

        {/* PARTE INFERIOR */}
        <div className="mt-6 flex flex-col items-center gap-3 border-t border-white/[0.06] pt-4 text-center">

          <div className="flex flex-wrap items-center justify-center gap-5 text-[11px]">
            <a
              href="#"
              className="!text-white transition-colors duration-200 hover:text-[#ff9d1f]"
            >
              Política de privacidad
            </a>

            <a
              href="#"
              className="!text-white transition-colors duration-200 hover:text-[#ff9d1f]"
            >
              Términos y condiciones
            </a>
          </div>

          <p className="text-[11px] tracking-[0.03em] !text-white">
            © {new Date().getFullYear()}

            <span className="ml-1 font-semibold !text-white">
              MarketIA Online - JN
            </span>

            . Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}