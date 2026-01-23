"use client"

import { Shield, Zap, Eye, BarChart3 } from "lucide-react"

export default function Solution() {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Machine learning algorithms identify anomalies before they become breaches",
      icon: Eye,
    },
    {
      title: "Automated Incident Response",
      description: "Block threats instantly with zero-touch automation",
      icon: Zap,
    },
    {
      title: "24/7 System Monitoring",
      description: "Always-on protection across your entire infrastructure",
      icon: Shield,
    },
    {
      title: "Zero-Trust Security Model",
      description: "Never trust, always verify every access request",
      icon: BarChart3,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance neon-text-glow">
            One Platform. Complete Protection.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need to secure your enterprise, simplified.
          </p>
        </div>

        {/* Solution Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-primary/10 p-8 rounded-xl glassmorphism border border-primary/20 hover:border-accent transition group">
                <Icon className="w-10 h-10 text-primary group-hover:text-accent transition mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
