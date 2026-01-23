"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
             <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xs font-semibold text-primary-foreground">CS</span>
            </div>
            <span className="font-semibold text-foreground">CyberShield</span>
          </div>
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <Link href={link.href} className="font-normal text-lg text-foreground hidden sm:inline hover:text-primary px-3 py-2  ">
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Section: Search & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Input */}
            <div className="relative group">
              <input
                type="text"
                placeholder="SEARCH"
                className="px-4 py-2 bg-background/50 border-2 border-gray-600 rounded-full text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:bg-background transition-all w-48 "
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-accent pointer-events-none" />
            </div>

            {/* CTA Button */}
            <Link href="/join">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-background font-semibold  rounded-full px-6  hover:shadow-lg transform hover:scale-105 transition-all"
              >
                <Shield className="w-4 h-4" />
                JOIN NOW
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card/50 backdrop-blur-md border-t border-primary/30 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-foreground  hover:text-accent transition-colors rounded-lg hover:bg-primary/10"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2 space-y-2">
              <input
                type="text"
                placeholder="SEARCH"
                className="w-full px-4 py-2 bg-background/50 border-2 border-accent rounded-full text-sm text-foreground placeholder-muted-foreground focus:outline-none"
              />
              <Link href="/join" className="w-full">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-accent text-background font-semibold uppercase rounded-full"
                >
                  JOIN NOW
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
