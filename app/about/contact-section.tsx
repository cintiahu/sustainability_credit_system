"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <div id="contact" className="bg-sustainable-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <div className="text-xl mb-8 space-y-4">
            <p>
              We're always looking to collaborate with like-minded individuals and organizations who share our vision
              for a sustainable fashion future.
            </p>
            <p>
              Whether you're a brand interested in partnership, a student passionate about sustainable fashion, or
              someone who wants to learn more about our initiative, we'd love to hear from you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-sustainable-900 hover:bg-sustainable-50 w-full sm:w-auto"
              onClick={() => (window.location.href = "mailto:makefashionsustainable@gmail.com")}
            >
              <Mail className="mr-2 h-5 w-5" />
              makefashionsustainable@gmail.com
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              asChild
            >
              <Link href="https://www.linkedin.com">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

