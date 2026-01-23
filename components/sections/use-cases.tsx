"use client"

import { Briefcase, Building2, Stethoscope, DollarSign, ShoppingCart, Wifi } from "lucide-react"

export default function UseCases() {
  const useCases = [
    { icon: Building2, title: "Startups & SaaS", description: "Scale security as you grow" },
    { icon: Briefcase, title: "Enterprises", description: "Multi-tenant, global protection" },
    { icon: Stethoscope, title: "Healthcare", description: "HIPAA-compliant security" },
    { icon: DollarSign, title: "FinTech", description: "PCI-DSS ready infrastructure" },
    { icon: ShoppingCart, title: "E-commerce", description: "Customer data protection" },
    { icon: Wifi, title: "Remote Teams", description: "Secure anywhere, anytime" },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance neon-text-glow">Who We Protect</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Purpose-built security for every industry</p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-0 border border-primary/20 rounded-lg overflow-hidden">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="p-8  glassmorphism  transition group text-center border-b  md:border-r last:border-0 border-primary/20 "
              >
                <Icon className="w-12 h-12 text-accent group-hover:text-primary transition mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-slate-400 text-sm">{useCase.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
