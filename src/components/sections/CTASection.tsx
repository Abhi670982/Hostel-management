import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #162032 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="badge-gold mb-8 inline-block">Ready to Move In?</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{ color: "#f8fafc" }}>
            Start Your{" "}
            <span className="gold-gradient-text">Premium Living</span>
            {" "}Experience Today
          </h2>
          <p className="font-body text-lg mb-10" style={{ color: "#94a3b8", lineHeight: 1.7 }}>
            Join 500+ students who&apos;ve already discovered a better way to live. Book your room now and experience the LuxStay difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/booking" className="btn-primary">
              Book Your Room
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              <Phone className="w-5 h-5" />
              Schedule a Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
