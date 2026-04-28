import Link from "next/link"
import { MapPin, Phone, Mail, Globe, MessageCircle } from "lucide-react"

const footerLinks = {
  explore: [
    { label: "Rooms", href: "/rooms" },
    { label: "Booking", href: "/booking" },
    { label: "Amenities", href: "/#amenities" },
    { label: "Gallery", href: "/about" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/about" },
    { label: "Blog", href: "/about" },
    { label: "Press", href: "/about" },
  ],
  support: [
    { label: "Help Center", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
  ],
}

const socials = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Social" },
]

export default function Footer() {
  return (
    <footer style={{ background: "#0f172a" }}>
      {/* Gold Divider */}
      <div className="divider-gold" />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-8" style={{ textDecoration: "none" }}>
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
              <p className="font-body text-base mb-8" style={{ color: "#94a3b8", maxWidth: "320px", lineHeight: 1.7 }}>
                Premium hostel living reimagined. Where luxury meets community, and every detail is crafted for your comfort.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" style={{ color: "#f59e0b" }} />
                  <span className="font-body text-sm" style={{ color: "#94a3b8" }}>123 University Ave, Mumbai 400001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" style={{ color: "#f59e0b" }} />
                  <span className="font-body text-sm" style={{ color: "#94a3b8" }}>+91 22 1234 5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" style={{ color: "#f59e0b" }} />
                  <span className="font-body text-sm" style={{ color: "#94a3b8" }}>hello@luxstay.com</span>
                </div>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-8" style={{ color: "#f8fafc" }}>
                Explore
              </h4>
              <ul className="space-y-4">
                {footerLinks.explore.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm transition-colors duration-200"
                      style={{ color: "#94a3b8", textDecoration: "none" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-8" style={{ color: "#f8fafc" }}>
                Company
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm transition-colors duration-200"
                      style={{ color: "#94a3b8", textDecoration: "none" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-8" style={{ color: "#f8fafc" }}>
                Support
              </h4>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm transition-colors duration-200"
                      style={{ color: "#94a3b8", textDecoration: "none" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 pt-8" style={{ borderTop: "1px solid rgba(148, 163, 184, 0.08)" }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="font-body text-sm" style={{ color: "#64748b" }}>
                &copy; {new Date().getFullYear()} LuxStay. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: "rgba(148, 163, 184, 0.08)",
                      color: "#94a3b8",
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
