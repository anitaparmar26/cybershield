"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "We blocked 98% of threats within minutes after switching. This is a game-changer.",
      author: "Sarah Chen",
      role: "CTO, FinTech Startup",
      stats: "98% threat blockage",
    },
    {
      quote: "The zero-trust model saved us from a potential breach. Best investment we made.",
      author: "Michael Rodriguez",
      role: "Security Lead, Healthcare Corp",
      stats: "0 successful breaches",
    },
    {
      quote: "Setup took 2 hours. Impact was immediate. This is what enterprise security should be.",
      author: "Jennifer Lee",
      role: "CISO, Fortune 500 Company",
      stats: "2-hour implementation",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Trusted by Security Leaders</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            See why enterprises choose CyberShield for their protection
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-xl glassmorphism glow-border hover:neon-glow transition">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 mb-6 italic">{testimonial.quote}</p>

              {/* Author */}
              <div className="border-t border-slate-700/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-slate-400 mb-2">{testimonial.role}</p>
                <p className="text-sm text-primary font-semibold">{testimonial.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
