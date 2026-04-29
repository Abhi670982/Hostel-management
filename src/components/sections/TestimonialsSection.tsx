import { Star, Quote } from "lucide-react"
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

const testimonials = [
  {
    name: "Priya Sharma",
    role: "MBA Student, IIM Mumbai",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    rating: 5,
    text: "LuxStay completely transformed my college experience. The rooms are stunning, the amenities are world-class, and the community is incredible. I never thought hostel living could feel this premium.",
  },
  {
    name: "Arjun Mehta",
    role: "Engineering Student, IIT Bombay",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    rating: 5,
    text: "The high-speed WiFi and study lounge are game-changers for my research work. The staff is incredibly responsive and the dining hall food is surprisingly excellent. Worth every rupee.",
  },
  {
    name: "Sneha Patel",
    role: "Design Student, NID",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d35?w=120&auto=format&fit=crop&q=80",
    rating: 5,
    text: "As a design student, I appreciate the attention to detail in every aspect of LuxStay — from the room aesthetics to the common areas. It truly feels like a 5-star hotel designed for students.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#0f172a" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-outline mb-6 inline-block">Resident Stories</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#f8fafc" }}>
            Loved by{" "}
            <span className="gold-gradient-text">Our Residents</span>
          </h2>
          <p className="font-body text-lg mx-auto" style={{ color: "#94a3b8", maxWidth: "600px", lineHeight: 1.7 }}>
            Don&apos;t just take our word for it — hear from the students who call LuxStay home.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="p-6 md:p-8 rounded-2xl transition-all duration-300"
              variants={itemVariants}
              style={{
                background: "#1e293b",
                border: "1px solid rgba(148, 163, 184, 0.08)",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8" style={{ color: "rgba(245, 158, 11, 0.3)" }} />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ color: "#f59e0b" }} fill="currentColor" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-body text-base mb-8" style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6" style={{ borderTop: "1px solid rgba(148, 163, 184, 0.08)" }}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ border: "2px solid rgba(245, 158, 11, 0.3)" }}
                />
                <div>
                  <p className="font-display text-sm font-bold" style={{ color: "#f8fafc" }}>
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm" style={{ color: "#94a3b8" }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
