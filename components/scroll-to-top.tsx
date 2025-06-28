"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash

    if (hash) {
      // If there's a hash, scroll to that element
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100) // Small delay to ensure page is loaded
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}
