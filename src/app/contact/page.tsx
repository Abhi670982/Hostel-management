"use client"

import { useState } from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const contactInfo = [
  { icon: MapPin, title: "Visit Us", details: ["123 University Avenue", "Mumbai, Maharashtra 400001"] },
  { icon: Phone, title: "Call Us", details: ["+91 22 1234 5678", "+91 22 8765 4321"] },
  { icon: Mail, title: "Email Us", details: ["hello@luxstay.com", "booking@luxstay.com"] },
  { icon: Clock, title: "Office Hours", details: ["Mon–Fri: 9:00 AM – 7:00 PM", "Sat–Sun: 10:00 AM – 5:00 PM"] },
]

const faqs = [
  { q: "What is the minimum stay duration?", a: "Our minimum stay is 3 months. We offer flexible durations of 3, 6, 12, and 24 months with corresponding discounts for longer stays." },
  { q: "Is the security deposit refundable?", a: "Yes, the ₹25,000 security deposit is fully refundable upon checkout, subject to a room inspection for damages beyond normal wear and tear." },
  { q: "Are meals included in the rent?", a: "Yes, three nutritious meals per day are included in your monthly rent. Our cafeteria serves vegetarian and non-vegetarian options." },
  { q: "Can I visit before booking?", a: "Absolutely! We encourage campus tours. Schedule a visit through our contact form or call us directly. Tours are available Monday through Saturday." },
  { q: "What is the cancellation policy?", a: "Cancellations made 30+ days before check-in receive a full refund minus processing fees. Cancellations within 30 days receive a 50% refund." },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const set = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0f172a" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20" style={{ background: "linear-gradient(to bottom, #162032, #0f172a)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="badge-outline mb-6 inline-block">Contact</span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#f8fafc" }}>
            Get in <span className="gold-gradient-text">Touch</span>
          </h1>
          <p className="font-body text-lg" style={{ color: "#94a3b8", maxWidth: "560px", lineHeight: 1.7 }}>
            Have questions? We&apos;d love to hear from you. Reach out and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 md:py-28" style={{ background: "#0f172a" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {contactInfo.map(({ icon: Icon, title, details }) => (
              <motion.div 
                key={title} 
                className="p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:transform hover:scale-105" 
                style={{ background: "#1e293b", border: "1px solid rgba(148, 163, 184, 0.08)" }}
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(245, 158, 11, 0.12)" }}>
                  <Icon className="w-6 h-6" style={{ color: "#f59e0b" }} />
                </div>
                <h3 className="font-display text-base font-bold mb-3" style={{ color: "#f8fafc" }}>{title}</h3>
                {details.map((d) => (
                  <p key={d} className="font-body text-sm" style={{ color: "#94a3b8" }}>{d}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {/* Form */}
            <div className="p-6 md:p-8 rounded-2xl" style={{ background: "#1e293b", border: "1px solid rgba(148, 163, 184, 0.08)" }}>
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-6 h-6" style={{ color: "#f59e0b" }} />
                <h2 className="font-display text-2xl font-bold" style={{ color: "#f8fafc" }}>Send a Message</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="font-display text-sm font-semibold mb-3 block" style={{ color: "#f8fafc" }}>Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-6 py-4 rounded-xl font-body text-base"
                    style={{ background: "#0f172a", border: "1px solid rgba(148, 163, 184, 0.12)", color: "#f8fafc", outline: "none" }}
                  />
                </div>
                <div>
                  <label className="font-display text-sm font-semibold mb-3 block" style={{ color: "#f8fafc" }}>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-xl font-body text-base"
                    style={{ background: "#0f172a", border: "1px solid rgba(148, 163, 184, 0.12)", color: "#f8fafc", outline: "none" }}
                  />
                </div>
                <div>
                  <label className="font-display text-sm font-semibold mb-3 block" style={{ color: "#f8fafc" }}>Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => set("subject", e.target.value)}
                    placeholder="How can we help?"
                    className="w-full px-6 py-4 rounded-xl font-body text-base"
                    style={{ background: "#0f172a", border: "1px solid rgba(148, 163, 184, 0.12)", color: "#f8fafc", outline: "none" }}
                  />
                </div>
                <div>
                  <label className="font-display text-sm font-semibold mb-3 block" style={{ color: "#f8fafc" }}>Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="Tell us more..."
                    rows={5}
                    className="w-full px-6 py-4 rounded-xl font-body text-base resize-none"
                    style={{ background: "#0f172a", border: "1px solid rgba(148, 163, 184, 0.12)", color: "#f8fafc", outline: "none" }}
                  />
                </div>
                <button className="btn-primary mt-6">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "#1e293b", border: "1px solid rgba(148, 163, 184, 0.08)", minHeight: "400px" }}>
              <div className="w-full h-full flex items-center justify-center p-8" style={{ minHeight: "500px" }}>
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4" style={{ color: "#f59e0b" }} />
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: "#f8fafc" }}>Our Location</h3>
                  <p className="font-body text-base" style={{ color: "#94a3b8" }}>123 University Avenue</p>
                  <p className="font-body text-base" style={{ color: "#94a3b8" }}>Mumbai, Maharashtra 400001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28" style={{ background: "#162032" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-outline mb-6 inline-block">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "#f8fafc" }}>
              Frequently Asked <span className="gold-gradient-text">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{ background: "#1e293b", border: "1px solid rgba(148, 163, 184, 0.08)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className="font-display text-base font-bold" style={{ color: "#f8fafc" }}>{faq.q}</span>
                  <span
                    className="text-2xl font-light flex-shrink-0 ml-4"
                    style={{ color: "#f59e0b", transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="font-body text-base" style={{ color: "#94a3b8", lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
