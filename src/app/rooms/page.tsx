"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, Users, MapPin, Bath, ArrowRight, Search, SlidersHorizontal } from "lucide-react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const rooms = [
  {
    id: 1,
    name: "Premium Single Suite",
    type: "Single",
    price: 74900,
    rating: 4.8,
    reviews: 142,
    capacity: 1,
    size: 25,
    location: "Building A, 3rd Floor",
    available: true,
    tag: "Most Popular",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Deluxe Double Room",
    type: "Double",
    price: 89900,
    rating: 4.9,
    reviews: 98,
    capacity: 2,
    size: 35,
    location: "Building B, 2nd Floor",
    available: true,
    tag: "Top Rated",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Executive Suite",
    type: "Suite",
    price: 129900,
    rating: 5.0,
    reviews: 67,
    capacity: 1,
    size: 45,
    location: "Building A, 4th Floor",
    available: true,
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Standard Single Room",
    type: "Single",
    price: 49900,
    rating: 4.5,
    reviews: 210,
    capacity: 1,
    size: 18,
    location: "Building C, 1st Floor",
    available: true,
    tag: "Best Value",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Shared Triple Room",
    type: "Triple",
    price: 39900,
    rating: 4.3,
    reviews: 156,
    capacity: 3,
    size: 32,
    location: "Building B, 1st Floor",
    available: false,
    tag: "",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564e8d0?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Premium Double Suite",
    type: "Double",
    price: 104900,
    rating: 4.7,
    reviews: 88,
    capacity: 2,
    size: 40,
    location: "Building A, 2nd Floor",
    available: true,
    tag: "New",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=80",
  },
]

const roomTypes = ["All", "Single", "Double", "Triple", "Suite"]

export default function RoomsPage() {
  const [search, setSearch] = useState("")
  const [type, setType] = useState("All")

  const filtered = rooms.filter((room) => {
    const matchSearch = room.name.toLowerCase().includes(search.toLowerCase())
    const matchType = type === "All" || room.type === type
    return matchSearch && matchType
  })

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0f172a" }}>
      <Navbar />
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20" style={{ background: "linear-gradient(to bottom, #162032, #0f172a)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="badge-outline mb-6 inline-block">Our Rooms</span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#f8fafc" }}>
            Find Your <span className="gold-gradient-text">Perfect Room</span>
          </h1>
          <p className="font-body text-lg mb-10" style={{ color: "#94a3b8", maxWidth: "560px", lineHeight: 1.7 }}>
            Browse our collection of premium rooms, each designed with comfort and style in mind.
          </p>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#94a3b8" }} />
              <input
                type="text"
                placeholder="Search rooms..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-xl font-body text-base"
                style={{
                  background: "#1e293b",
                  border: "1px solid rgba(148, 163, 184, 0.12)",
                  color: "#f8fafc",
                  outline: "none",
                }}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {roomTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className="px-6 py-3 rounded-xl font-body text-sm font-semibold transition-all duration-200"
                  style={{
                    background: type === t ? "linear-gradient(to right, #f59e0b, #d97706)" : "#1e293b",
                    color: type === t ? "#0f172a" : "#94a3b8",
                    border: type === t ? "none" : "1px solid rgba(148, 163, 184, 0.12)",
                    minHeight: "44px",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 md:py-28" style={{ background: "#0f172a" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-base mb-10" style={{ color: "#94a3b8" }}>
            Showing <span className="font-semibold" style={{ color: "#f8fafc" }}>{filtered.length}</span> rooms available
          </p>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {filtered.map((room) => (
              <motion.div key={room.id} variants={itemVariants}>
                <Link
                  href={`/rooms/${room.id}`}
                  className="card-luxury group block"
                  style={{ textDecoration: "none", opacity: room.available ? 1 : 0.6 }}
                >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 60%)",
                    }}
                  />
                  {room.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="badge-gold">{room.tag}</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full" style={{ background: "rgba(15,23,42,0.7)", backdropFilter: "blur(8px)" }}>
                    <Star className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} fill="currentColor" />
                    <span className="font-body text-sm font-semibold" style={{ color: "#f8fafc" }}>{room.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-xl font-bold mb-3" style={{ color: "#f8fafc" }}>
                    {room.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4" style={{ color: "#94a3b8" }} />
                    <span className="font-body text-sm" style={{ color: "#94a3b8" }}>{room.location}</span>
                  </div>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" style={{ color: "#94a3b8" }} />
                      <span className="font-body text-sm" style={{ color: "#94a3b8" }}>{room.capacity} Guest{room.capacity > 1 ? "s" : ""}</span>
                    </div>
                    <span className="badge-outline" style={{ fontSize: "0.7rem" }}>{room.type}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-6 min-w-0 w-full" style={{ borderTop: "1px solid rgba(148, 163, 184, 0.08)" }}>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-2xl font-bold truncate" style={{ color: "#f59e0b" }}>
                        ₹{room.price.toLocaleString("en-IN")}
                      </p>
                      <p className="font-body text-sm" style={{ color: "#94a3b8" }}>per month</p>
                    </div>
                    {room.available ? (
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(245, 158, 11, 0.12)", color: "#f59e0b" }}
                      >
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    ) : (
                      <span className="font-body text-sm font-semibold flex-shrink-0" style={{ color: "#64748b" }}>Occupied</span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
