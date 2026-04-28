import { Wifi, Wind, Dumbbell, Utensils, Shield, Coffee, BookOpen, Waves } from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "1 Gbps fibre connectivity throughout the premises",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: Wind,
    title: "Climate Control",
    description: "Individual air conditioning in every room",
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: Dumbbell,
    title: "Fitness Centre",
    description: "Fully equipped gym open 24/7 for residents",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: Utensils,
    title: "Dining Hall",
    description: "Three nutritious meals daily included in your stay",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Biometric access and round-the-clock surveillance",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: BookOpen,
    title: "Study Lounge",
    description: "Quiet co-working spaces designed for productivity",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=80",
  },
]

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 md:py-28" style={{ background: "#0f172a" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-outline mb-6 inline-block">World-Class Amenities</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#f8fafc" }}>
            Everything You Need,{" "}
            <span className="gold-gradient-text">Nothing You Don&apos;t</span>
          </h2>
          <p className="font-body text-lg mx-auto" style={{ color: "#94a3b8", maxWidth: "600px", lineHeight: 1.7 }}>
            From high-speed connectivity to gourmet dining, every amenity is designed to elevate your daily life.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {amenities.map(({ icon: Icon, title, description, image }) => (
            <div key={title} className="card-luxury img-overlay group">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(245, 158, 11, 0.12)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#f59e0b" }} />
                  </div>
                  <h3 className="font-display text-lg font-bold" style={{ color: "#f8fafc" }}>
                    {title}
                  </h3>
                </div>
                <p className="font-body text-base" style={{ color: "#94a3b8", lineHeight: 1.6 }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
