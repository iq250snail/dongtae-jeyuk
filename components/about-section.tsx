"use client"

import { useEffect, useRef } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6")
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 lg:py-48 bg-secondary/30"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div
          ref={contentRef}
          className="opacity-0 translate-y-6 transition-all duration-700"
        >
          {/* Section Label */}
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-8">
            About Us
          </p>

          {/* Main Content */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-light text-foreground tracking-tight text-balance leading-snug">
              매일 아침,
              <br />
              <span className="font-medium">정성을 담아 준비합니다</span>
            </h2>

            <div className="w-16 h-px bg-border mx-auto" />

            <div className="space-y-6 text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
              <p>
                동태랑 제육은 30년 경력의 어머니 손맛을 그대로 이어받아,
                <br className="hidden md:block" />
                집에서 먹던 그 맛을 정성껏 재현합니다.
              </p>
              <p>
                매일 새벽 시장에서 직접 고른 싱싱한 동태와
                <br className="hidden md:block" />
                국내산 돼지고기만을 사용하여
                <br className="hidden md:block" />
                건강하고 든든한 한 끼를 약속드립니다.
              </p>
              <p className="text-foreground font-normal">
                "가족에게 대접하는 마음으로 한 상 차립니다."
              </p>
            </div>

            {/* Highlights */}
            <div className="pt-8 grid grid-cols-3 gap-6 max-w-lg mx-auto">
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-medium text-foreground">30년</p>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">전통의 손맛</p>
              </div>
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-medium text-foreground">100%</p>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">국내산 재료</p>
              </div>
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-medium text-foreground">매일</p>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">신선한 재료</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
