import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReveal(selector, options = {}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(selector)

      gsap.fromTo(
        items,
        {
          autoAlpha: 0,
          y: 40,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          immediateRender: false,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            once: true,
          },
          ...options,
        }
      )

      ScrollTrigger.refresh()
    }, ref)

    const handleLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
      ctx.revert()
    }
  }, [selector])

  return ref
}