"use client"

import { useEffect, useRef } from "react"
import { MapPin, Clock, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-item").forEach((el, i) => {
              setTimeout(() => {
                el.classList.remove("opacity-0", "translate-y-4")
                el.classList.add("opacity-100", "translate-y-0")
              }, i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="py-32 lg:py-48 bg-primary text-primary-foreground"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="animate-item opacity-0 translate-y-4 transition-all duration-500 text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-6">
            Visit Us
          </p>
          <h2 className="animate-item opacity-0 translate-y-4 transition-all duration-500 text-3xl lg:text-5xl font-light tracking-tight text-balance">
            오시는 길
          </h2>
        </div>

        {/* Map and Info Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Map */}
          <div className="rounded-2xl overflow-hidden border border-primary-foreground/10 hover:opacity-90 transition-opacity cursor-pointer group">
            <a
              href="https://map.naver.com/p/search/동태랑제육"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-[4/3] w-full rounded-2xl overflow-hidden border border-primary-foreground/10 hover:opacity-90 transition-opacity cursor-pointer group"
            >
              <Image
                src="/images/location.jpg"
                alt="[네이버지도] 동태랑 제육"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Right: Info Cards Stacked Vertically */}
          <div className="flex flex-col gap-8 justify-center">

            {/* Contact */}
            <div className="animate-item opacity-0 translate-y-4 transition-all duration-500 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium">예약 문의</h3>
              </div>
              <div className="text-sm text-primary-foreground/70 leading-relaxed font-light pl-13 space-y-2">
                <a href="tel:043-236-5802" className="text-xl font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors block">
                  043-236-5802
                </a>
                <p className="text-sm">
                  예약은 전화로만 가능합니다
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="animate-item opacity-0 translate-y-4 transition-all duration-500 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium">영업시간</h3>
              </div>
              <div className="text-sm text-primary-foreground/70 space-y-1 font-light pl-13">
                <p>월요일~토요일 : 8:30 - 21:00</p>
                <p>일,공휴일 : (휴일)</p>
                <p className="text-primary-foreground/50">브레이크타임 15:00 - 16:00</p>
              </div>
            </div>

            {/* Location */}
            <div className="animate-item opacity-0 translate-y-4 transition-all duration-500 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium">위치</h3>
              </div>
              <p className="text-sm text-primary-foreground/70 leading-relaxed font-light pl-13">
                충북 청주시 흥덕구 강내면 태성탑연로 435
              </p>
            </div>

          </div>

          {/* Divider */}
          <div className="animate-item opacity-0 translate-y-4 transition-all duration-500 border-t border-primary-foreground/10 pt-12 mt-16 lg:mt-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-2xl font-medium tracking-tight">
                <Link href="/" className="group flex items-center gap-2.5">
                  <Image
                    src="/images/logo.jpg"
                    alt="동태랑 제육 로고"
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-xl lg:text-2xl font-bold tracking-tight text-balance">
                      동태랑
                    </span>
                    <span className="text-xl lg:text-2xl font-bold text-accent">
                      제육
                    </span>
                  </div>
                </Link>
              </p>
              <p className="text-xs text-primary-foreground/50 font-light">
                © 2025 동태랑 제육. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
