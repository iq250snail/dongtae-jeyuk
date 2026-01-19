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

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Location */}
          <div className="animate-item opacity-0 translate-y-4 transition-all duration-500 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium">위치</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed font-light">
              충북 청주시 흥덕구 강내면
              <br />
              태성탑연로 435
            </p>
          </div>

          {/* Hours */}
          <div className="animate-item opacity-0 translate-y-4 transition-all duration-500 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium">영업시간</h3>
            <div className="text-sm text-primary-foreground/70 space-y-1 font-light">
              <p>월요일~토요일 : 8:30 - 21:00</p>
              <p>일,공휴일 : (휴일)</p>
              <p className="text-primary-foreground/50">브레이크타임 15:00 - 16:00</p>
            </div>
          </div>

          {/* Contact */}
          <div className="animate-item opacity-0 translate-y-4 transition-all duration-500 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium">예약 문의</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed font-light">
              043-236-5802
              <br />
              예약은 전화로만 가능합니다
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="animate-item opacity-0 translate-y-4 transition-all duration-500 border-t border-primary-foreground/10 pt-12">
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
    </footer>
  )
}
