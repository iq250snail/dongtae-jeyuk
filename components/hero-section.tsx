"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-table.jpg"
          alt="동태탕, 제육볶음, 가정식 백반 한 상 차림"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8 lg:space-y-12">
          <p className="text-xs lg:text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Since 2013
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-foreground leading-tight text-balance">
            정성이 가득한
            <br />
            <span className="font-medium">신선한 한 끼</span>
          </h1>

          <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-light">
            매일 아침 정성껏 준비하는 건강한 가정식.
            <br className="block" />
            어머니의 손맛을 담아 정직하게 요리합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#menu"
              className="px-8 py-4 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-all"
            >
              메뉴 보기
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-border text-foreground text-sm font-medium rounded-full hover:bg-secondary transition-all"
            >
              예약 문의
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
