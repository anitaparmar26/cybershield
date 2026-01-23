"use client"

import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-3xl"></div>

        <div className="relative z-10 p-12 md:p-16 rounded-2xl glassmorphism glow-border text-center space-y-8">
          <div className="flex justify-center">
            <Shield className="w-12 h-12 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-balance neon-text-glow">
            Secure Your Business Before the Next Attack
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Don't wait for a breach. Get protected today with CyberShield's enterprise-grade security platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold neon-glow"
            >
              Start Free Scan
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 text-foreground bg-transparent"
            >
              Talk to Security Expert
            </Button>
          </div>

          <p className="text-sm text-slate-400">No credit card required. Start protecting in minutes.</p>
        </div>
      </div>
    </section>
  )
}
