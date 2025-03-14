"use client"

import { useEffect, useRef } from "react"

export function PropertyMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // In a real app, you would use a mapping library like Mapbox, Google Maps, or Leaflet
    // This is just a placeholder to show where the map would be
    if (mapRef.current) {
      const ctx = document.createElement("canvas").getContext("2d")
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 300, 300)
        gradient.addColorStop(0, "#e2e8f0")
        gradient.addColorStop(1, "#cbd5e1")

        mapRef.current.style.background = "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)"

        // Add a pin to the center
        const pin = document.createElement("div")
        pin.className =
          "absolute w-6 h-6 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center"
        pin.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-primary-foreground"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>'

        mapRef.current.appendChild(pin)
      }
    }
  }, [])

  return (
    <div ref={mapRef} className="relative h-[300px] w-full rounded-md overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
        <p>Map showing property location</p>
      </div>
    </div>
  )
}

