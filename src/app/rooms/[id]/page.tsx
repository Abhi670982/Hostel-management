"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, Users, MapPin, ArrowLeft, Heart, ChevronLeft, ChevronRight, Wifi, Wind, Shield, Dumbbell, Utensils, Square, Check } from "lucide-react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const roomsData: Record<string, {
  name: string
  type: string
  price: number
  capacity: number
  size: number
  floor: string
  rating: number
  reviews: number
  available: boolean
  description: string
  amenities: { icon: typeof Wifi; label: string; desc: string }[]
  images: string[]
  included: string[]
}> = {
  "1": {
    name: "Premium Single Suite",
    type: "Single",
    price: 74900,
    capacity: 1,
    size: 25,
    floor: "3rd Floor, Building A",
    rating: 4.8,
    reviews: 142,
    available: true,
    description: "Our Premium Single Suite is a thoughtfully designed living space that balances privacy, productivity, and comfort. Floor-to-ceiling windows bring in natural light, and every piece of furniture is selected for both aesthetic and ergonomic excellence.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi", desc: "1 Gbps fibre, unlimited" },
      { icon: Square, label: "Private Bathroom", desc: "En-suite with premium fittings" },
      { icon: Square, label: "Study Desk", desc: "Ergonomic setup with task lighting" },
      { icon: Wind, label: "Air Conditioning", desc: "Individual climate control" },
      { icon: Shield, label: "24/7 Security", desc: "Biometric access control" },
      { icon: Dumbbell, label: "Gym Access", desc: "Full fitness centre included" },
      { icon: Utensils, label: "Cafeteria", desc: "3 meals/day included" },
    ],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&auto=format&fit=crop&q=80",
    ],
    included: [
      "All utility bills included",
      "High-speed WiFi",
      "Weekly housekeeping",
      "Cafeteria (3 meals/day)",
      "Gym & fitness centre",
      "Study room access",
      "24/7 security",
      "Laundry machines",
    ],
  },
  "2": {
    name: "Deluxe Double Room",
    type: "Double",
    price: 89900,
    capacity: 2,
    size: 35,
    floor: "2nd Floor, Building B",
    rating: 4.9,
    reviews: 98,
    available: true,
    description: "Spacious and elegantly furnished, our Deluxe Double Room is perfect for friends or siblings who want to share a premium living experience while maintaining their personal space.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi", desc: "1 Gbps fibre, unlimited" },
      { icon: Square, label: "Private Bathroom", desc: "En-suite with premium fittings" },
      { icon: Square, label: "Study Desks", desc: "2 ergonomic workstations" },
      { icon: Wind, label: "Air Conditioning", desc: "Individual climate control" },
      { icon: Shield, label: "24/7 Security", desc: "Biometric access control" },
      { icon: Dumbbell, label: "Gym Access", desc: "Full fitness centre included" },
      { icon: Utensils, label: "Cafeteria", desc: "3 meals/day included" },
    ],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&auto=format&fit=crop&q=80",
    ],
    included: [
      "All utility bills included",
      "High-speed WiFi",
      "Weekly housekeeping",
      "Cafeteria (3 meals/day)",
      "Gym & fitness centre",
      "Study room access",
      "24/7 security",
      "Laundry machines",
    ],
  },
  "3": {
    name: "Executive Suite",
    type: "Suite",
    price: 129900,
    capacity: 1,
    size: 45,
    floor: "4th Floor, Building A",
    rating: 5.0,
    reviews: 67,
    available: true,
    description: "The ultimate in luxury living, our Executive Suite offers unparalleled comfort and sophistication with premium furnishings, city views, and exclusive amenities.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi", desc: "1 Gbps fibre, unlimited" },
      { icon: Square, label: "Luxury Bathroom", desc: "En-suite with bathtub" },
      { icon: Square, label: "Executive Desk", desc: "Premium workstation setup" },
      { icon: Wind, label: "Air Conditioning", desc: "Individual climate control" },
      { icon: Shield, label: "24/7 Security", desc: "Biometric access control" },
      { icon: Dumbbell, label: "Gym Access", desc: "Full fitness centre included" },
      { icon: Utensils, label: "Cafeteria", desc: "3 meals/day included" },
    ],
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&auto=format&fit=crop&q=80",
    ],
    included: [
      "All utility bills included",
      "High-speed WiFi",
      "Weekly housekeeping",
      "Cafeteria (3 meals/day)",
      "Gym & fitness centre",
      "Study room access",
      "24/7 security",
      "Laundry machines",
      "Priority maintenance",
    ],
  },
}

export default function RoomDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Use the first room as default for static rendering
  const [activeImage, setActiveImage] = useState(0)
  const [wishlisted, setWishlisted] = useState(false)
  const [resolvedId, setResolvedId] = useState("1")

  // Resolve params promise
  params.then((p) => setResolvedId(p.id))

  const room = roomsData[resolvedId] || roomsData["1"]

  const prevImage = () => setActiveImage((i) => (i - 1 + room.images.length) % room.images.length)
  const nextImage = () => setActiveImage((i) => (i + 1) % room.images.length)

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0f172a" }}>
      <Navbar />
      {/* Breadcrumb */}
      <section className="pt-28 pb-8" style={{ background: "#162032" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 font-body text-sm font-medium transition-colors"
            style={{ color: "#94a3b8", textDecoration: "none" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Rooms
          </Link>
        </div>
      </section>

      {/* Room Content */}
      <section className="py-20 md:py-28" style={{ background: "#0f172a" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Left: Gallery + Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Gallery */}
              <div className="space-y-4">
                <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden">
                  <img
                    src={room.images[activeImage]}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(15,23,42,0.7)", backdropFilter: "blur(8px)", color: "#f8fafc" }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(15,23,42,0.7)", backdropFilter: "blur(8px)", color: "#f8fafc" }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setWishlisted(!wishlisted)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(15,23,42,0.7)", backdropFilter: "blur(8px)" }}
                  >
                    <Heart
                      className="w-5 h-5"
                      style={{ color: wishlisted ? "#f59e0b" : "#f8fafc" }}
                      fill={wishlisted ? "currentColor" : "none"}
                    />
                  </button>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-4">
                  {room.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative h-20 rounded-xl overflow-hidden transition-all duration-200 ${
                        activeImage === i ? "ring-2 ring-[#f59e0b]" : "opacity-60"
                      }`}
                    >
                      <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Room Info */}
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "#f8fafc" }}>
                  {room.name}
                </h1>
                <div className="flex items-center gap-6 mb-8 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5" style={{ color: "#f59e0b" }} fill="currentColor" />
                    <span className="font-body text-base font-semibold" style={{ color: "#f8fafc" }}>{room.rating}</span>
                    <span className="font-body text-sm" style={{ color: "#94a3b8" }}>({room.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{ color: "#94a3b8" }} />
                    <span className="font-body text-sm" style={{ color: "#94a3b8" }}>{room.floor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" style={{ color: "#94a3b8" }} />
                    <span className="font-body text-sm" style={{ color: "#94a3b8" }}>{room.capacity} Guest{room.capacity > 1 ? "s" : ""}</span>
                  </div>
                </div>
                <p className="font-body text-lg mb-10" style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
                  {room.description}
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-8" style={{ color: "#f8fafc" }}>Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {room.amenities.map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="flex items-start gap-4 p-6 rounded-xl min-w-0" style={{ background: "#1e293b", border: "1px solid rgba(148, 163, 184, 0.08)" }}>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245, 158, 11, 0.12)" }}>
                        <Icon className="w-5 h-5" style={{ color: "#f59e0b" }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-sm font-bold mb-1" style={{ color: "#f8fafc" }}>{label}</p>
                        <p className="font-body text-sm" style={{ color: "#94a3b8" }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Booking Sidebar */}
            <div className="lg:col-span-1">
              <div
                className="sticky top-28 p-6 md:p-8 rounded-2xl"
                style={{
                  background: "#1e293b",
                  border: "1px solid rgba(148, 163, 184, 0.08)",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="flex items-baseline gap-2 mb-8">
                  <p className="font-display text-3xl font-bold" style={{ color: "#f59e0b" }}>
                    ₹{room.price.toLocaleString("en-IN")}
                  </p>
                  <p className="font-body text-base" style={{ color: "#94a3b8" }}>/month</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    ["Room Type", room.type],
                    ["Capacity", `${room.capacity} Guest${room.capacity > 1 ? "s" : ""}`],
                    ["Size", `${room.size} m²`],
                    ["Floor", room.floor],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between font-body text-sm">
                      <span style={{ color: "#94a3b8" }}>{label}</span>
                      <span className="font-semibold" style={{ color: "#f8fafc" }}>{value}</span>
                    </div>
                  ))}
                </div>

                <div className="divider-gold mb-8" />

                <h3 className="font-display text-sm font-bold mb-4" style={{ color: "#f8fafc" }}>What&apos;s Included</h3>
                <ul className="space-y-3 mb-8">
                  {room.included.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body text-sm" style={{ color: "#cbd5e1" }}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245, 158, 11, 0.15)" }}>
                        <Check className="w-3 h-3" style={{ color: "#f59e0b" }} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/booking" className="btn-primary w-full text-center mt-6">
                  Book This Room
                </Link>
                <p className="font-body text-sm text-center mt-4" style={{ color: "#64748b" }}>
                  Security deposit: ₹25,000 (refundable)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
