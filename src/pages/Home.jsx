import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import Cursos from '../components/Cursos'
import ServicesSection from '../components/ServicesSection'
import TeamSection from '../components/Team'
import ProcessSection from '../components/Beneficios'
import Blog from '../components/Blog'
import TestimonialsSection from '../components/TestimonialsSection'
//import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import Scenebackground from '../components/Scenebackground'
import Beneficios from '../components/Beneficios'

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f2eb] text-[#111111] antialiased selection:bg-[#111111] selection:text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,1),rgba(246,242,235,1)_45%,rgba(240,236,229,1)_100%)]" />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

      <Scenebackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <Cursos />
        <ServicesSection />
        <TeamSection />
        <Beneficios />
        <TestimonialsSection />
        <Blog />
      </main>

      <Footer />
    </div>
  )
}