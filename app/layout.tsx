import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/navbar"
import DownloadButton from "@/components/sections/download"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CyberShield - Enterprise-Grade Cybersecurity Platform",
  description:
    "Detect, prevent, and respond to cyber threats in real-time with AI-powered security. SOC 2 • ISO 27001 • GDPR Ready",
 
   icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicon-dark-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon.ico",
        type: "image/ico",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <Navbar />
        {children}
         <DownloadButton />
        <Analytics />
      </body>
    </html>
  )
}
