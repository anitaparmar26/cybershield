"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Is my data safe with CyberShield?",
      answer:
        "Yes. We use military-grade encryption, zero-trust architecture, and maintain SOC 2 Type II certification. Your data is encrypted at rest and in transit, and we conduct regular third-party audits.",
    },
    {
      question: "Does it slow down my systems?",
      answer:
        "No. Our AI engine is optimized for performance. Most customers report zero measurable performance impact, with an average response time of 50ms per threat scan.",
    },
    {
      question: "How fast is the setup?",
      answer:
        "Setup takes just 2-4 hours for most organizations. Our onboarding team guides you through integration, and you're protected on day one with 24/7 monitoring activated.",
    },
    {
      question: "Do you support cloud and on-prem?",
      answer:
        "Absolutely. CyberShield works with AWS, Azure, Google Cloud, and private data centers. We support hybrid architectures and offer flexible deployment options.",
    },
    {
      question: "Is it compliant with regulations?",
      answer:
        "Yes. We're compliant with SOC 2, ISO 27001, GDPR, HIPAA, and PCI-DSS. We provide compliance-ready reports and audit trails for every security event.",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance neon-text-glow">Common Questions</h2>
          <p className="text-lg text-slate-400">Quick answers about CyberShield</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg glassmorphism glow-border overflow-hidden"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <button className="w-full p-6 flex items-center justify-between hover:bg-slate-700/20 transition">
                <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-slate-700/50 text-slate-400">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
