import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #162032 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="badge-gold mb-8 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to Move In?
          </motion.span>
          <motion.h2 
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8" 
            style={{ color: "#f8fafc" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Start Your{" "}
            <span className="gold-gradient-text">Premium Living</span>
            {" "}Experience Today
          </motion.h2>
          <motion.p 
            className="font-body text-lg mb-10" 
            style={{ color: "#94a3b8", lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join 500+ students who&apos;ve already discovered a better way to live. Book your room now and experience the LuxStay difference.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/booking" className="btn-primary">
              Book Your Room
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              <Phone className="w-5 h-5" />
              Schedule a Tour
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
