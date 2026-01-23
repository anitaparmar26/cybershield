"use client"

import { Search, Cpu, Lock, BarChart3, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Search,
      title: "Real-Time Threat Detection",
      description: "AI-powered anomaly detection across all systems",
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning Engine",
      description: "Self-learning algorithms that adapt to new threats",
    },
    {
      icon: Lock,
      title: "Zero Trust Network Access",
      description: "Verify every connection, never assume trust",
    },
    {
      icon: BarChart3,
      title: "Security Analytics Dashboard",
      description: "Real-time insights and compliance reporting",
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "At-rest and in-transit encryption standards",
    },
    {
      icon: Users,
      title: "Role-Based Access Control",
      description: "Granular permissions for every team member",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance neon-text-glow">Core Features</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything your security team needs in one unified platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="p-8 rounded-xl glassmorphism glow-border hover:border-accent transition group">
                <Icon className="w-10 h-10 text-primary group-hover:text-accent transition mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
