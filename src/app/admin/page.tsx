"use client"

import { useState } from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { LayoutDashboard, BedDouble, CalendarCheck, Users, Settings, LogOut, TrendingUp, DollarSign, Star, ArrowUpRight } from "lucide-react"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", id: "overview" },
  { icon: BedDouble, label: "Rooms", id: "rooms" },
  { icon: CalendarCheck, label: "Bookings", id: "bookings" },
  { icon: Users, label: "Residents", id: "residents" },
  { icon: Settings, label: "Settings", id: "settings" },
]

const stats = [
  { icon: Users, label: "Total Residents", value: "523", change: "+12%" },
  { icon: BedDouble, label: "Rooms Occupied", value: "87%", change: "+5%" },
  { icon: DollarSign, label: "Monthly Revenue", value: "₹42.5L", change: "+18%" },
  { icon: Star, label: "Avg. Rating", value: "4.9", change: "+0.2" },
]

const recentBookings = [
  { id: 1, guest: "Priya Sharma", room: "Premium Single Suite", date: "Jan 15, 2026", amount: "₹74,900", status: "Confirmed" },
  { id: 2, guest: "Arjun Mehta", room: "Deluxe Double Room", date: "Jan 12, 2026", amount: "₹89,900", status: "Pending" },
  { id: 3, guest: "Sneha Patel", room: "Executive Suite", date: "Jan 10, 2026", amount: "₹1,29,900", status: "Confirmed" },
  { id: 4, guest: "Rohan Gupta", room: "Standard Single Room", date: "Jan 8, 2026", amount: "₹49,900", status: "Checked In" },
]

export default function AdminPage() {
  const [active, setActive] = useState("overview")

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0f172a" }}>
      <Navbar />

      <div className="flex flex-1 pt-20">
        {/* Sidebar */}
        <aside
          className="hidden lg:flex flex-col w-64 flex-shrink-0"
          style={{ background: "#162032", borderRight: "1px solid rgba(148, 163, 184, 0.08)" }}
        >
          <div className="p-6 flex-1">
            <p className="font-display text-xs font-bold uppercase tracking-wider mb-8" style={{ color: "#64748b" }}>
              Admin Panel
            </p>
            <nav className="space-y-2">
              {sidebarItems.map(({ icon: Icon, label, id }) => (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm font-medium transition-all duration-200"
                  style={{
                    background: active === id ? "rgba(245, 158, 11, 0.1)" : "transparent",
                    color: active === id ? "#f59e0b" : "#94a3b8",
                  }}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-6" style={{ borderTop: "1px solid rgba(148, 163, 184, 0.08)" }}>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm font-medium" style={{ color: "#94a3b8" }}>
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
            {/* Header */}
            <div className="mb-16">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2" style={{ color: "#f8fafc" }}>
                Dashboard
              </h1>
              <p className="font-body text-base" style={{ color: "#94a3b8" }}>
                Welcome back. Here&apos;s an overview of your property.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16">
              {stats.map(({ icon: Icon, label, value, change }) => (
                <div key={label} className="p-6 md:p-8 rounded-2xl" style={{ background: "#1e293b", border: "1px solid rgba(148, 163, 184, 0.08)" }}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(245, 158, 11, 0.12)" }}>
                      <Icon className="w-5 h-5" style={{ color: "#f59e0b" }} />
                    </div>
                    <span className="flex items-center gap-1 font-body text-xs font-semibold" style={{ color: "#22c55e" }}>
                      <ArrowUpRight className="w-3 h-3" />
                      {change}
                    </span>
                  </div>
                  <p className="font-display text-2xl font-bold mb-1" style={{ color: "#f8fafc" }}>{value}</p>
                  <p className="font-body text-sm" style={{ color: "#94a3b8" }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Recent Bookings */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "#1e293b", border: "1px solid rgba(148, 163, 184, 0.08)" }}>
              <div className="p-6 md:p-8 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>
                <h2 className="font-display text-xl font-bold" style={{ color: "#f8fafc" }}>Recent Bookings</h2>
                <button className="font-body text-sm font-semibold" style={{ color: "#f59e0b" }}>View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>
                      {["Guest", "Room", "Date", "Amount", "Status"].map((h) => (
                        <th key={h} className="text-left p-6 font-body text-xs font-semibold uppercase tracking-wider" style={{ color: "#64748b" }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} style={{ borderBottom: "1px solid rgba(148, 163, 184, 0.05)" }}>
                        <td className="p-6">
                          <p className="font-body text-sm font-semibold" style={{ color: "#f8fafc" }}>{booking.guest}</p>
                        </td>
                        <td className="p-6">
                          <p className="font-body text-sm" style={{ color: "#94a3b8" }}>{booking.room}</p>
                        </td>
                        <td className="p-6">
                          <p className="font-body text-sm" style={{ color: "#94a3b8" }}>{booking.date}</p>
                        </td>
                        <td className="p-6">
                          <p className="font-body text-sm font-semibold" style={{ color: "#f8fafc" }}>{booking.amount}</p>
                        </td>
                        <td className="p-6">
                          <span
                            className="inline-flex px-3 py-1.5 rounded-full font-body text-xs font-semibold"
                            style={{
                              background: booking.status === "Confirmed" ? "rgba(34, 197, 94, 0.1)" : booking.status === "Pending" ? "rgba(245, 158, 11, 0.1)" : "rgba(59, 130, 246, 0.1)",
                              color: booking.status === "Confirmed" ? "#22c55e" : booking.status === "Pending" ? "#f59e0b" : "#3b82f6",
                            }}
                          >
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
