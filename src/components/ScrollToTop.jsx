import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const html = document.documentElement
    const prev = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    html.style.scrollBehavior = prev
  }, [pathname])
  return null
}

