"use client"

import { useEffect, useRef } from "react"
import { MenuCard } from "./menu-card"

const mainMenuItems = [
  {
    title: "동태탕",
    description: "싱싱한 동태와 신선한 채소를 넣어 시원하고 깊은 맛을 자랑하는 전통 해장 요리. 얼큰한 국물이 속을 편안하게 해줍니다.",
    price: "9,000원",
    image: "/images/dongtaetang.jpg",
    note: "2인 이상",
  },
  {
    title: "제육볶음",
    description: "두툼하게 썬 돼지고기를 매콤달콤한 양념에 볶아낸 정통 가정식. 밥 한 공기가 순식간에 사라지는 마법 같은 맛.",
    price: "10,000원",
    image: "/images/jeyuk-bokkeum.jpg",
    note: "2인 이상",
  },
  {
    title: "가정식 백반",
    description: "계절 반찬과 따뜻한 국, 갓 지은 밥으로 구성된 건강한 한 상. 어머니의 정성이 담긴 소박하지만 든든한 한 끼.",
    price: "8,000원",
    image: "/images/baekban.jpg",
  },
  {
    title: "청국장",
    description: "구수하고 진한 청국장 찌개. 발효된 콩의 깊은 맛과 영양이 가득한 건강식으로, 추운 날 몸을 따뜻하게 해줍니다.",
    price: "8,000원",
    image: "/images/cheonggukjang.jpg",
  },
  {
    title: "김치찌개",
    description: "잘 익은 김치와 돼지고기가 어우러진 얼큰한 김치찌개. 한국인의 소울푸드로 언제 먹어도 든든하고 맛있습니다.",
    price: "9,000원",
    image: "/images/kimchi-jjigae.jpg",
  },
]

const sideMenuItems: { title: string; price: string }[] = []

const drinkItems = [
  { title: "소주", price: "4,000원" },
  { title: "맥주", price: "4,000원" },
  { title: "막걸리", price: "3,000원" },
  { title: "음료수", price: "2,000원" },
  { title: "공기밥", price: "1,000원" },
]

export function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const subMenuRef = useRef<HTMLDivElement>(null)

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

    if (headerRef.current) observer.observe(headerRef.current)
    if (subMenuRef.current) observer.observe(subMenuRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="py-32 lg:py-48 bg-background"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center mb-16 lg:mb-24 space-y-6 opacity-0 translate-y-6 transition-all duration-700"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Our Signature
          </p>
          <h2 className="text-3xl lg:text-5xl font-light text-foreground tracking-tight text-balance">
            정성을 담은 메뉴
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed font-light">
            매일 아침 신선한 재료로 준비하는 대표 메뉴를 소개합니다
          </p>
        </div>

        {/* Main Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mainMenuItems.map((item, index) => (
            <MenuCard key={item.title} {...item} index={index} />
          ))}
        </div>

        {/* Drinks & Other Items */}
        <div
          ref={subMenuRef}
          className="mt-20 lg:mt-32 opacity-0 translate-y-6 transition-all duration-700"
        >
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
              <h3 className="text-xl lg:text-2xl font-medium text-foreground tracking-tight mb-8 text-center">
                주류 및 기타
              </h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-5">
                {drinkItems.map((item) => (
                  <li key={item.title} className="flex justify-between items-center">
                    <span className="text-foreground">{item.title}</span>
                    <span className="text-muted-foreground font-light">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
