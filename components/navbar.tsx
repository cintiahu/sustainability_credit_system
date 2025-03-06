"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                GarmScanner
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/add-credits">Add Credits</NavLink>
            <NavLink href="/wardrobe">My Wardrobe</NavLink>
            <NavLink href="/leaderboard">Global Leaderboard</NavLink>
            <NavLink href="/rewards">Rewards</NavLink>
            <NavLink href="/community">Community</NavLink>
            <NavLink href="/about">About Us</NavLink>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="ghost">Sign In</Button>
          </div>
          <div className="flex items-center sm:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink href="/add-credits">Add Credits</MobileNavLink>
            <MobileNavLink href="/wardrobe">My Wardrobe</MobileNavLink>
            <MobileNavLink href="/leaderboard">Global Leaderboard</MobileNavLink>
            <MobileNavLink href="/rewards">Rewards</MobileNavLink>
            <MobileNavLink href="/community">Community</MobileNavLink>
            <MobileNavLink href="/about">About Us</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Button variant="ghost" className="w-full justify-center">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center px-1 pt-1 text-sm font-medium text-sustainable-700">
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-sustainable-700 hover:text-sustainable-900 hover:bg-sustainable-50"
    >
      {children}
    </Link>
  )
}

