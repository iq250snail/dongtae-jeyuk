"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/images/logo.jpg"
              alt="동태랑 제육 로고"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div className="flex items-baseline gap-0.5">
              <span className="text-xl lg:text-2xl font-bold tracking-tight text-foreground">
                동태랑
              </span>
              <span className="text-lg lg:text-xl font-medium text-accent">
                제육
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link
              href="#menu"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              메뉴
            </Link>
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              소개
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              오시는 길
            </Link>
          </div>

          <Link
            href="#contact"
            className="text-sm font-medium px-5 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            예약하기
          </Link>
        </div>
      </div>
    </nav>
  )
}
