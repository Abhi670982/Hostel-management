import Link from "next/link"
import { Star, Users, MapPin, ArrowRight } from "lucide-react"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
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
    location: "Building A, 3rd Floor",
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
    location: "Building B, 2nd Floor",
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
    location: "Building A, 4th Floor",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop&q=80",
  },
]

export default function FeaturedRoomsSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#162032" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="badge-outline mb-6 inline-block">Our Rooms</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#f8fafc" }}>
              Find Your{" "}
              <span className="gold-gradient-text">Perfect Room</span>
            </h2>
            <p className="font-body text-lg" style={{ color: "#94a3b8", maxWidth: "480px", lineHeight: 1.7 }}>
              Each room is thoughtfully designed with premium furnishings and modern amenities.
            </p>
          </div>
          <Link
            href="/rooms"
            className="btn-secondary flex-shrink-0"
          >
            View All Rooms
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Rooms Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {rooms.map((room) => (
            <motion.div key={room.id} variants={itemVariants}>
              <Link
                href={`/rooms/${room.id}`}
                className="card-luxury group block"
                style={{ textDecoration: "none" }}
              >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 60%)",
                  }}
                />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="badge-gold">{room.tag}</span>
                </div>
                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full" style={{ background: "rgba(15,23,42,0.7)", backdropFilter: "blur(8px)" }}>
                  <Star className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} fill="currentColor" />
                  <span className="font-body text-sm font-semibold" style={{ color: "#f8fafc" }}>{room.rating}</span>
                  <span className="font-body text-xs" style={{ color: "#94a3b8" }}>({room.reviews})</span>
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

                <div className="flex items-center gap-4 mb-6">
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
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 flex-shrink-0"
                    style={{ background: "rgba(245, 158, 11, 0.12)", color: "#f59e0b" }}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
