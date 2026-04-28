"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, Check, ArrowRight, ArrowLeft, User, CreditCard, Home } from "lucide-react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const rooms = [
  { id: 1, name: "Premium Single Suite", type: "Single", price: 74900, rating: 4.8, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&auto=format&fit=crop&q=80" },
  { id: 2, name: "Deluxe Double Room", type: "Double", price: 89900, rating: 4.9, image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&auto=format&fit=crop&q=80" },
  { id: 3, name: "Executive Suite", type: "Suite", price: 129900, rating: 5.0, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&auto=format&fit=crop&q=80" },
]

const STEPS = [
  { id: 1, label: "Room", icon: Home },
  { id: 2, label: "Details", icon: User },
  { id: 3, label: "Confirm", icon: CreditCard },
]

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState(rooms[0])
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    duration: "6",
    checkIn: "",
  })

  const set = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }))

  const total = selectedRoom.price
  const deposit = 25000
  const firstPayment = total + deposit

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0f172a" }}>
      <Navbar />
      {/* Page Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12" style={{ background: "linear-gradient(to bottom, #162032, #0f172a)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="badge-outline mb-6 inline-block">Booking</span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#f8fafc" }}>
            Book Your <span className="gold-gradient-text">Room</span>
          </h1>
        </div>
      </section>

      {/* Step Indicator */}
      <section className="py-8" style={{ background: "#0f172a" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center mb-16 overflow-x-auto pb-4">
            <div className="flex items-center gap-0 min-w-max px-4">
              {STEPS.map((s, i) => {
                const Icon = s.icon
                const done = step > s.id
                const active = step === s.id
                return (
                  <div key={s.id} className="flex items-center">
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{
                          background: done || active ? "linear-gradient(to right, #f59e0b, #d97706)" : "#1e293b",
                          border: done || active ? "none" : "1px solid rgba(148, 163, 184, 0.12)",
                        }}
                      >
                        {done ? (
                          <Check className="w-5 h-5" style={{ color: "#0f172a" }} />
                        ) : (
                          <Icon className="w-5 h-5" style={{ color: active ? "#0f172a" : "#94a3b8" }} />
                        )}
                      </div>
                      <span className="font-body text-xs font-semibold whitespace-nowrap" style={{ color: active ? "#f59e0b" : "#64748b" }}>
                        {s.label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div
                        className="w-16 sm:w-24 h-0.5 mx-4 mb-5 transition-all duration-500 flex-shrink-0"
                        style={{ background: step > s.id ? "linear-gradient(to right, #f59e0b, #d97706)" : "rgba(148, 163, 184, 0.12)" }}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 w-full">
            {/* Left: Form */}
            <div className="lg:col-span-2 w-full min-w-0">
              <div className="p-6 md:p-8 rounded-2xl w-full" style={{ background: "#1e293b", border: "1px solid rgba(148, 163, 184, 0.08)" }}>
                {/* Step 1: Room Selection */}
                {step === 1 && (
                  <div>
                    <h2 className="font-display text-2xl font-bold mb-2" style={{ color: "#f8fafc" }}>Choose Your Room</h2>
                    <p className="font-body text-base mb-8" style={{ color: "#94a3b8" }}>
                      Select the room type that fits your lifestyle
                    </p>

                    <div className="space-y-6">
                      {rooms.map((room) => (
                        <div
                          key={room.id}
                          onClick={() => setSelectedRoom(room)}
                          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-xl cursor-pointer transition-all duration-200 min-w-0 w-full"
                          style={{
                            border: selectedRoom.id === room.id ? "2px solid #f59e0b" : "2px solid rgba(148, 163, 184, 0.08)",
                            background: selectedRoom.id === room.id ? "rgba(245, 158, 11, 0.05)" : "transparent",
                          }}
                        >
                          <div className="w-24 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-display text-base font-bold mb-1 truncate" style={{ color: "#f8fafc" }}>{room.name}</p>
                            <div className="flex items-center gap-3 flex-wrap">
                              <span className="badge-outline" style={{ fontSize: "0.7rem" }}>{room.type}</span>
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3" style={{ color: "#f59e0b" }} fill="currentColor" />
                                <span className="font-body text-xs" style={{ color: "#94a3b8" }}>{room.rating}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
                            <div className="text-left sm:text-right flex-shrink-0">
                              <p className="font-display text-lg font-bold whitespace-nowrap" style={{ color: "#f59e0b" }}>₹{room.price.toLocaleString("en-IN")}</p>
                              <p className="font-body text-xs" style={{ color: "#94a3b8" }}>/month</p>
                            </div>
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ background: selectedRoom.id === room.id ? "linear-gradient(to right, #f59e0b, #d97706)" : "#0f172a" }}
                            >
                              {selectedRoom.id === room.id && <Check className="w-4 h-4" style={{ color: "#0f172a" }} strokeWidth={3} />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Duration */}
                    <div className="mt-10">
                      <label className="font-display text-base font-semibold mb-4 block" style={{ color: "#f8fafc" }}>
                        Stay Duration
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {["3", "6", "12", "24"].map((d) => (
                          <button
                            key={d}
                            onClick={() => set("duration", d)}
                            className="px-6 py-3 rounded-xl font-body text-sm font-semibold transition-all duration-200"
                            style={{
                              background: form.duration === d ? "linear-gradient(to right, #f59e0b, #d97706)" : "#0f172a",
                              color: form.duration === d ? "#0f172a" : "#94a3b8",
                              border: form.duration === d ? "none" : "1px solid rgba(148, 163, 184, 0.12)",
                              minHeight: "44px",
                            }}
                          >
                            {d} {parseInt(d) === 1 ? "month" : "months"}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Check-in */}
                    <div className="mt-10">
                      <label className="font-display text-base font-semibold mb-3 block" style={{ color: "#f8fafc" }}>
                        Preferred Check-in Date
                      </label>
                      <input
                        type="date"
                        value={form.checkIn}
                        onChange={(e) => set("checkIn", e.target.value)}
                        className="w-full px-6 py-4 rounded-xl font-body text-base"
                        style={{ background: "#0f172a", border: "1px solid rgba(148, 163, 184, 0.12)", color: "#f8fafc", outline: "none" }}
                      />
                    </div>

                    <button onClick={() => setStep(2)} className="btn-primary mt-8">
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* Step 2: Personal Details */}
                {step === 2 && (
                  <div>
                    <h2 className="font-display text-2xl font-bold mb-2" style={{ color: "#f8fafc" }}>Personal Details</h2>
                    <p className="font-body text-base mb-8" style={{ color: "#94a3b8" }}>
                      Tell us about yourself so we can prepare your room
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-display text-sm font-semibold mb-3 block" style={{ color: "#f8fafc" }}>First Name</label>
                        <input
                          type="text"
                          value={form.firstName}
                          onChange={(e) => set("firstName", e.target.value)}
                          placeholder="John"
                          className="w-full px-6 py-4 rounded-xl font-body text-base"
                          style={{ background: "#0f172a", border: "1px solid rgba(148, 163, 184, 0.12)", color: "#f8fafc", outline: "none" }}
                        />
                      </div>
                      <div>
                        <label className="font-display text-sm font-semibold mb-3 block" style={{ color: "#f8fafc" }}>Last Name</label>
                        <input
                          type="text"
                          value={form.lastName}
                          onChange={(e) => set("lastName", e.target.value)}
                          placeholder="Doe"
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
                          placeholder="john@example.com"
                          className="w-full px-6 py-4 rounded-xl font-body text-base"
                          style={{ background: "#0f172a", border: "1px solid rgba(148, 163, 184, 0.12)", color: "#f8fafc", outline: "none" }}
                        />
                      </div>
                      <div>
                        <label className="font-display text-sm font-semibold mb-3 block" style={{ color: "#f8fafc" }}>Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-6 py-4 rounded-xl font-body text-base"
                          style={{ background: "#0f172a", border: "1px solid rgba(148, 163, 184, 0.12)", color: "#f8fafc", outline: "none" }}
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button onClick={() => setStep(1)} className="btn-secondary">
                        <ArrowLeft className="w-5 h-5" />
                        Back
                      </button>
                      <button onClick={() => setStep(3)} className="btn-primary">
                        Review Booking
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <div>
                    <h2 className="font-display text-2xl font-bold mb-2" style={{ color: "#f8fafc" }}>Confirm Your Booking</h2>
                    <p className="font-body text-base mb-8" style={{ color: "#94a3b8" }}>
                      Review your details before confirming
                    </p>

                    <div className="space-y-6">
                      <div className="p-6 rounded-xl" style={{ background: "#0f172a", border: "1px solid rgba(148, 163, 184, 0.08)" }}>
                        <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "#94a3b8" }}>Guest Information</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            ["Name", `${form.firstName || "Not provided"} ${form.lastName || ""}`],
                            ["Email", form.email || "Not provided"],
                            ["Phone", form.phone || "Not provided"],
                          ].map(([label, value]) => (
                            <div key={label}>
                              <p className="font-body text-xs mb-1" style={{ color: "#64748b" }}>{label}</p>
                              <p className="font-body text-sm font-semibold" style={{ color: "#f8fafc" }}>{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 rounded-xl" style={{ background: "#0f172a", border: "1px solid rgba(148, 163, 184, 0.08)" }}>
                        <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "#94a3b8" }}>Room Details</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            ["Room", selectedRoom.name],
                            ["Type", selectedRoom.type],
                            ["Duration", `${form.duration} months`],
                            ["Check-in", form.checkIn || "TBD"],
                          ].map(([label, value]) => (
                            <div key={label}>
                              <p className="font-body text-xs mb-1" style={{ color: "#64748b" }}>{label}</p>
                              <p className="font-body text-sm font-semibold" style={{ color: "#f8fafc" }}>{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button onClick={() => setStep(2)} className="btn-secondary">
                        <ArrowLeft className="w-5 h-5" />
                        Back
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Booking Summary */}
            <div className="lg:col-span-1 w-full min-w-0">
              <div
                className="sticky top-28 p-6 md:p-8 rounded-2xl w-full"
                style={{
                  background: "#1e293b",
                  border: "1px solid rgba(148, 163, 184, 0.08)",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Room Image */}
                <div className="relative h-40 rounded-xl overflow-hidden mb-8">
                  <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-4 left-4">
                    <p className="font-display text-base font-bold" style={{ color: "#f8fafc" }}>{selectedRoom.name}</p>
                    <div className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5" style={{ color: "#f59e0b" }} fill="currentColor" />
                      <span className="font-body text-sm" style={{ color: "#cbd5e1" }}>{selectedRoom.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold mb-6" style={{ color: "#f8fafc" }}>Booking Summary</h3>

                <div className="space-y-4 mb-8">
                  {[
                    ["Room", selectedRoom.type],
                    ["Duration", `${form.duration} months`],
                    ["Monthly rent", `₹${selectedRoom.price.toLocaleString("en-IN")}`],
                    ["Security deposit", "₹25,000"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between font-body text-sm">
                      <span style={{ color: "#94a3b8" }}>{label}</span>
                      <span className="font-semibold" style={{ color: "#f8fafc" }}>{value}</span>
                    </div>
                  ))}
                </div>

                <div className="divider-gold mb-8" />

                <div
                  className="flex justify-between py-6 px-6 rounded-xl mb-6"
                  style={{ background: "rgba(245, 158, 11, 0.08)", border: "1px solid rgba(245, 158, 11, 0.2)" }}
                >
                  <span className="font-display text-base font-bold" style={{ color: "#f8fafc" }}>First Payment</span>
                  <span className="font-display text-xl font-bold" style={{ color: "#f59e0b" }}>
                    ₹{firstPayment.toLocaleString("en-IN")}
                  </span>
                </div>

                <p className="font-body text-sm text-center mb-6" style={{ color: "#64748b" }}>
                  Includes first month rent + refundable deposit
                </p>

                {step === 3 && (
                  <button className="btn-primary w-full text-center mt-6">
                    Confirm Booking ✓
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
