"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface MenuCardProps {
  title: string
  description: string
  price: string
  image: string
  index: number
  note?: string
}

export function MenuCard({ title, description, price, image, index, note }: MenuCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-8")
              entry.target.classList.add("opacity-100", "translate-y-0")
            }, index * 150)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-500">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl lg:text-2xl font-medium text-card-foreground">
              {title}
            </h3>
            <div className="text-right">
              <span className="text-lg font-light text-muted-foreground whitespace-nowrap">
                {price}
              </span>
              {note && (
                <p className="text-xs text-muted-foreground/70 mt-0.5">{note}</p>
              )}
            </div>
          </div>
          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
