'use client'

import React from "react"

import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Footer from '@/components/sections/footer'
import { useState } from 'react'

export default function JoinNow() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    industry: '',
    employees: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Registration submitted:', formData)
    setStep(4)
  }

  const benefits = [
    'Real-time threat detection',
    'AI-powered security analytics',
    'Automated incident response',
    '24/7 expert support',
    'Compliance reporting',
    'Custom dashboard',
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {step !== 4 && (
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text-glow">
                JOIN <span className="text-accent">CYBERSHIELD</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get started with enterprise-grade security in minutes
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefits Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 neon-glow-cyan sticky top-40">
                <h3 className="text-xl font-bold text-foreground mb-6">What You Get</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form Section */}
            <div className="md:col-span-2">
              {step === 4 ? (
                // Success Message
                <div className="bg-card/50 border-2 border-accent rounded-2xl p-12 text-center neon-glow-cyan">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center neon-glow-cyan mx-auto mb-6">
                    <Check className="w-10 h-10 text-background" />
                  </div>
                  <h2 className="text-3xl font-bold text-accent mb-4">Welcome Aboard!</h2>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Your account has been created successfully. Check your email to verify your account and start your free trial.
                  </p>
                  <Button className="bg-gradient-to-r from-primary to-accent text-background font-bold uppercase rounded-full neon-glow">
                    Go to Dashboard
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 neon-glow-cyan">
                  {/* Step Indicator */}
                  <div className="flex gap-2 mb-8">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`h-2 flex-1 rounded-full transition-colors ${
                          s <= step ? 'bg-accent' : 'bg-primary/30'
                        }`}
                      ></div>
                    ))}
                  </div>

                  {/* Step 1: Company Info */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-foreground mb-8">Company Information</h2>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-foreground mb-2 uppercase">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="industry" className="block text-sm font-bold text-foreground mb-2 uppercase">
                          Industry
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                        >
                          <option value="">Select Industry</option>
                          <option value="finance">Finance</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="retail">Retail</option>
                          <option value="technology">Technology</option>
                          <option value="government">Government</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="employees" className="block text-sm font-bold text-foreground mb-2 uppercase">
                          Company Size
                        </label>
                        <select
                          id="employees"
                          name="employees"
                          value={formData.employees}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                        >
                          <option value="">Select Company Size</option>
                          <option value="1-50">1-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-1000">201-1,000 employees</option>
                          <option value="1000+">1,000+ employees</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Contact Info */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-bold text-foreground mb-2 uppercase">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-bold text-foreground mb-2 uppercase">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2 uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2 uppercase">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Account Setup */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-foreground mb-8">Create Your Account</h2>
                      
                      <div>
                        <label htmlFor="password" className="block text-sm font-bold text-foreground mb-2 uppercase">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          placeholder="••••••••"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Must be at least 8 characters with uppercase, lowercase, and numbers
                        </p>
                      </div>

                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-bold text-foreground mb-2 uppercase">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                          placeholder="••••••••"
                        />
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/30">
                        <input type="checkbox" id="terms" required className="w-4 h-4 mt-1" />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                          I agree to the Terms of Service and Privacy Policy
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-4 mt-8">
                    {step > 1 && (
                      <Button
                        type="button"
                        onClick={handleBack}
                        variant="outline"
                        className="flex-1 uppercase font-bold bg-transparent"
                      >
                        Back
                      </Button>
                    )}
                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 bg-gradient-to-r from-primary to-accent text-background font-bold uppercase rounded-full neon-glow"
                      >
                        Next <ArrowRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-primary to-accent text-background font-bold uppercase rounded-full neon-glow"
                      >
                        Create Account
                      </Button>
                    )}
                  </div>

                  <p className="text-center text-sm text-muted-foreground mt-6">
                    Already have an account?{' '}
                    <a href="#" className="text-accent hover:text-primary transition-colors font-bold">
                      Sign In
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
