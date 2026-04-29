"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Star, Users, Shield, Wifi } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { value: "500+", label: "Happy Residents", icon: Users },
  { value: "4.9", label: "Average Rating", icon: Star },
  { value: "24/7", label: "Security", icon: Shield },
  { value: "1 Gbps", label: "High-Speed WiFi", icon: Wifi },
]

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&auto=format&fit=crop&q=80"
          alt="Luxury hostel interior"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay — bottom-up navy to transparent */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #0f172a 0%, rgba(15,23,42,0.85) 30%, rgba(15,23,42,0.5) 60%, rgba(15,23,42,0.3) 100%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="badge-gold">
              <Star className="w-3 h-3 mr-1" fill="currentColor" />
              Premium Student Living
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            style={{ color: "#f8fafc" }}
          >
            Your Perfect{" "}
            <span className="gold-gradient-text">Luxury</span>
            <br />
            Home Away From Home
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-body text-lg md:text-xl mb-10"
            style={{ color: "#94a3b8", maxWidth: "560px", lineHeight: 1.7 }}
          >
            Experience hostel living reimagined — premium design, modern amenities,
            and a vibrant community in perfect harmony.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <Link href="/booking" className="btn-primary">
              Book Your Room
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/rooms" className="btn-secondary">
              Explore Rooms
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10"
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245, 158, 11, 0.12)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#f59e0b" }} />
                </div>
                <div>
                  <p className="font-display text-xl font-bold" style={{ color: "#f8fafc" }}>{value}</p>
                  <p className="font-body text-sm" style={{ color: "#94a3b8" }}>{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2" 
          style={{ borderColor: "rgba(148, 163, 184, 0.3)" }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-2 rounded-full" 
            style={{ background: "#f59e0b" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
