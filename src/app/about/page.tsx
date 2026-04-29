"use client"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Target, Heart, Shield, Users, Award, Lightbulb } from "lucide-react"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
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

const values = [
  { icon: Target, title: "Excellence", description: "We set the highest standards in everything we do, from room design to resident services." },
  { icon: Heart, title: "Community", description: "Building meaningful connections between residents through shared spaces and curated events." },
  { icon: Shield, title: "Safety", description: "24/7 security infrastructure ensuring peace of mind for every resident and their families." },
  { icon: Users, title: "Inclusivity", description: "A welcoming environment where every student feels at home, regardless of background." },
  { icon: Award, title: "Innovation", description: "Continuously evolving our spaces and services to exceed modern student expectations." },
  { icon: Lightbulb, title: "Sustainability", description: "Eco-conscious operations with energy-efficient systems and responsible resource management." },
]

const team = [
  { name: "Vikram Malhotra", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80" },
  { name: "Ananya Iyer", role: "Head of Operations", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80" },
  { name: "Rahul Deshmukh", role: "Chief Design Officer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80" },
  { name: "Meera Krishnan", role: "Resident Experience", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d35?w=300&auto=format&fit=crop&q=80" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0f172a" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20" style={{ background: "linear-gradient(to bottom, #162032, #0f172a)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="badge-outline mb-6 inline-block">About Us</span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#f8fafc" }}>
            Redefining <span className="gold-gradient-text">Student Living</span>
          </h1>
          <p className="font-body text-lg" style={{ color: "#94a3b8", maxWidth: "600px", lineHeight: 1.7 }}>
            LuxStay was born from a simple belief: students deserve living spaces that inspire, comfort, and empower them to achieve their best.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28" style={{ background: "#0f172a" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8" style={{ color: "#f8fafc" }}>
                Our <span className="gold-gradient-text">Mission</span>
              </h2>
              <p className="font-body text-lg mb-6" style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
                We&apos;re on a mission to transform hostel living from a basic necessity into a premium experience. Every detail matters — from the thread count of our linens to the speed of our WiFi.
              </p>
              <p className="font-body text-lg mb-8" style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
                Founded in 2020, LuxStay has grown from a single building to three premium properties across Mumbai, serving over 500 students from top universities.
              </p>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: "500+", label: "Residents" },
                  { value: "3", label: "Properties" },
                  { value: "4.9", label: "Rating" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl font-bold" style={{ color: "#f59e0b" }}>{stat.value}</p>
                    <p className="font-body text-sm" style={{ color: "#94a3b8" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80"
                alt="LuxStay interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 50%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28" style={{ background: "#162032" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-outline mb-6 inline-block">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "#f8fafc" }}>
              What <span className="gold-gradient-text">Drives Us</span>
            </h2>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map(({ icon: Icon, title, description }) => (
              <motion.div 
                key={title} 
                className="p-6 md:p-8 rounded-2xl" 
                style={{ background: "#1e293b", border: "1px solid rgba(148, 163, 184, 0.08)" }}
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(245, 158, 11, 0.12)" }}>
                  <Icon className="w-6 h-6" style={{ color: "#f59e0b" }} />
                </div>
                <h3 className="font-display text-lg font-bold mb-3" style={{ color: "#f8fafc" }}>{title}</h3>
                <p className="font-body text-base" style={{ color: "#94a3b8", lineHeight: 1.6 }}>{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28" style={{ background: "#0f172a" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-outline mb-6 inline-block">Our Team</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "#f8fafc" }}>
              Meet the <span className="gold-gradient-text">People Behind LuxStay</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-base font-bold mb-1" style={{ color: "#f8fafc" }}>{member.name}</h3>
                <p className="font-body text-sm" style={{ color: "#94a3b8" }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
