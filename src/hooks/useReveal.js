import { useEffect, useRef, useState } from 'react'

export function useReveal(options = { threshold: 0.18, rootMargin: '0px 0px -60px 0px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        obs.disconnect()
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [options])

  return { ref, inView }
}

