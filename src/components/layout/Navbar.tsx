"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(15, 23, 42, 0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center gold-gradient"
              style={{ fontWeight: 900, fontSize: "1.1rem", color: "#0f172a" }}
            >
              L
            </div>
            <span className="font-display text-xl font-bold" style={{ color: "#f8fafc" }}>
              Lux<span className="gold-gradient-text">Stay</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: "Home", href: "/" },
              { label: "Rooms", href: "/rooms" },
              { label: "Booking", href: "/booking" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-sm font-medium transition-colors duration-200"
                style={{ color: "#94a3b8", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#f8fafc"
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "#94a3b8"
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/admin" className="font-body text-sm font-medium" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Admin
            </Link>
            <Link href="/booking" className="btn-primary" style={{ padding: "0.75rem 1.5rem", fontSize: "0.875rem" }}>
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 rounded-xl transition-colors"
            style={{ color: "#f8fafc" }}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden animate-fade-in"
          style={{
            background: "rgba(15, 23, 42, 0.98)",
            borderTop: "1px solid rgba(148, 163, 184, 0.08)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
            {[
              { label: "Home", href: "/" },
              { label: "Rooms", href: "/rooms" },
              { label: "Booking", href: "/booking" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Admin", href: "/admin" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block font-body text-lg font-medium"
                style={{ color: "#cbd5e1", textDecoration: "none" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/booking" className="btn-primary w-full text-center" onClick={() => setOpen(false)}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
