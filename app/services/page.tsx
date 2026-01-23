'use client'

import { Lock, Eye, Zap, BarChart3, Bell, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Footer from '@/components/sections/footer'

export default function Services() {
  const services = [
    {
      icon: Lock,
      title: 'Threat Detection & Prevention',
      description: 'AI-powered real-time detection and automatic response to cyber threats across your entire infrastructure.',
      features: ['Real-time Monitoring', 'ML-based Detection', 'Auto-Response', 'Threat Intelligence']
    },
    {
      icon: Eye,
      title: 'Vulnerability Management',
      description: 'Comprehensive scanning, assessment, and remediation of security vulnerabilities in your systems.',
      features: ['Continuous Scanning', 'Risk Scoring', 'Patch Management', 'Compliance Reports']
    },
    {
      icon: Zap,
      title: 'Incident Response',
      description: '24/7 expert incident response team ready to handle security breaches and minimize damage.',
      features: ['24/7 Support', 'Expert Analysis', 'Forensics', 'Recovery Planning']
    },
    {
      icon: BarChart3,
      title: 'Security Analytics',
      description: 'Deep insights into your security posture with advanced analytics and threat intelligence.',
      features: ['Custom Dashboards', 'Threat Reports', 'Trend Analysis', 'Predictive Alerts']
    },
    {
      icon: Bell,
      title: 'Compliance Management',
      description: 'Automated compliance tracking for SOC 2, ISO 27001, HIPAA, GDPR, and more.',
      features: ['Audit Reports', 'Policy Templates', 'Compliance Tracking', 'Evidence Collection']
    },
    {
      icon: Users,
      title: 'Security Training',
      description: 'Empower your team with security awareness and best practices training programs.',
      features: ['Online Courses', 'Simulations', 'Certifications', 'Custom Training']
    },
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 ">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect, detect, and respond to threats.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 hover:border-accent transition-all hover:shadow-lg group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-background" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-sm text-accent">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="bg-gradient-to-r from-primary to-accent text-background font-semibold  rounded-full w-full hover:shadow-lg ">
                    Learn More
                  </Button>
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Secure Your Organization?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's schedule a free security assessment to understand your unique needs.
            </p>
            <Button className="bg-gradient-to-r from-primary to-accent text-background font-semibold  rounded-full px-8 ">
              Schedule Assessment
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
