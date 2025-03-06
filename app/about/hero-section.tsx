"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative h-[70vh] min-h-[600px] w-full">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background_2.jpg-k37KKO8hSwxA6vVPgt7pcXAI0SyotZ.jpeg"
        alt="CEMS Sustainable Fashion Team"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-sustainable-900/95 via-sustainable-900/80 to-sustainable-900/60" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transforming Fashion Through Sustainability
            </h1>
            <div className="text-xl md:text-2xl text-white/90 space-y-4">
              <p>A team of passionate CEMS students united by a vision to revolutionize the fashion industry.</p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-sustainable-900 hover:bg-sustainable-50" asChild>
                  <Link href="#mission">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-sustainable-300 text-sustainable-300 hover:bg-sustainable-300 hover:text-sustainable-900"
                  asChild
                >
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

